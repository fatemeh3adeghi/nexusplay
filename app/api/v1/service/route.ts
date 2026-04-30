import { NextRequest } from 'next/server';

export const runtime = 'edge';

const TARGET = process.env.TARGET_DOMAIN || 'https://your-real-server.com:8443';

export async function GET(request: NextRequest) {
  return handleRelay(request);
}

export async function POST(request: NextRequest) {
  return handleRelay(request);
}

async function handleRelay(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const targetUrl = TARGET + url.pathname.replace('/api/v1/service', '') + url.search;

    const headers = new Headers();
    request.headers.forEach((value, key) => {
      if (!key.toLowerCase().startsWith('x-') && 
          !['host', 'connection', 'accept-encoding'].includes(key.toLowerCase())) {
        headers.set(key, value);
      }
    });

    const body = request.body ? await request.arrayBuffer() : null;

    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: body as BodyInit,
      redirect: 'manual',
    });

    const responseHeaders = new Headers();
    response.headers.forEach((value, key) => {
      responseHeaders.set(key, value);
    });

    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    });

  } catch (error) {
    return new Response('Service Error', { status: 502 });
  }
}
