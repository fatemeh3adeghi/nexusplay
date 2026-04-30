import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* هدر */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center font-bold text-xl">N</div>
            <h1 className="text-3xl font-bold tracking-tighter text-white">NexusPlay</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-orange-400 transition">خانه</a>
            <a href="#" className="hover:text-orange-400 transition">بازی‌ها</a>
            <a href="#" className="hover:text-orange-400 transition">تournament</a>
            <a href="#" className="hover:text-orange-400 transition">جامعه</a>
          </nav>
          <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2.5 rounded-xl text-sm font-semibold transition">
            ورود / ثبت‌نام
          </button>
        </div>
      </header>

      {/* بنر اصلی */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/banner.jpg" 
          alt="NexusPlay Banner" 
          fill 
          className="object-cover brightness-[0.35]" 
          priority 
        />
        <div className="absolute text-center z-10 px-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            بازی کن. لذت ببر.<br />محدودیتی وجود ندارد
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
            هزاران بازی آنلاین • گرافیک بالا • بدون فیلتر و قطعی
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-bold hover:bg-zinc-200 transition">
            شروع تجربه گیمینگ
          </button>
        </div>
      </div>

      {/* بازی‌های محبوب */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">بازی‌های داغ این هفته</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 group">
              <div className="relative h-64">
                <Image 
                  src={`/images/game${(i % 5) + 1}.jpg`} 
                  alt={`Game ${i+1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-black text-xs px-3 py-1 rounded-full font-medium">
                  آنلاین
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">عنوان بازی {i+1}</h4>
                <p className="text-zinc-400 text-sm line-clamp-2 mb-6">
                  تجربه‌ای هیجان‌انگیز با گیم‌پلی مدرن و گرافیک خیره‌کننده
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-500 font-medium">رایگان</span>
                  <button className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-2xl text-sm font-medium transition">
                    بازی کن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500 text-sm">
        NexusPlay © 2026 - این وبسایت برای نمایش و دسترسی سریع طراحی شده است
      </footer>
    </div>
  );
}
