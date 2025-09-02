import { useEffect, useState } from 'react';

const Index = () => {
  const [activityVisible, setActivityVisible] = useState(false);

  // Counter animation hook
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || '0');
      const suffix = counter.getAttribute('data-suffix') || '';
      const decimals = parseInt(counter.getAttribute('data-decimals') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = current.toFixed(decimals) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toFixed(decimals) + suffix;
        }
      };

      // Start animation after a delay
      setTimeout(updateCounter, 1000);
    });
  }, []);

  return (
    <div className="h-full bg-black text-white antialiased font-text overflow-x-hidden">
      {/* UnicornStudio Background */}
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10">
        <div data-us-project="krvLrHX3sj3cg8BHywDj" className="absolute top-0 left-0 -z-10 w-full h-full"></div>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `
        }} />
      </div>

      {/* Enhanced background with Apple-like gradients */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -top-32 -left-32 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.15),transparent_70%)] blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(175,82,222,0.12),transparent_70%)] blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,199,89,0.08),transparent_70%)] blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1400px_600px_at_50%_0%,rgba(0,122,255,0.08),transparent),radial-gradient(1200px_500px_at_80%_100%,rgba(175,82,222,0.06),transparent)]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in delay-0 backdrop-blur-xl bg-black/20 border-b border-white/10" style={{animationPlayState: 'running'}}>
        <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
          <div className="flex lg:py-6 pt-4 pb-4 items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2932 11.9774C16.1759 9.03514 18.1298 4.66446 18.1298 4.66446C15.4936 4.64047 12.9105 5.40303 10.718 6.82939L10.7286 6.83318C9.57413 9.97876 9.03203 12.5087 9.30055 16.1502C9.57132 19.8221 12.8069 24.2667 12.8069 24.2667L12.8151 24.289C13.2392 24.0337 13.6347 23.7625 13.9746 23.4789C16.0131 21.7779 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3906 14.4202 16.2932 11.9774Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16.4666 9.98601C16.4666 9.98601 21.596 9.33699 26 11.3334C28.1175 12.2933 29.7798 13.6204 30.9149 14.7107L30.92 14.7029C31.6572 17.5844 31.4396 20.7292 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.2684 11.3573 16.3357 10.6738 16.4573 9.98113L16.4666 9.98601Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M13.9746 23.4789C11.8918 25.2168 7.71515 26.4899 7.71515 26.4899C8.93912 27.9749 10.5052 29.217 12.3655 30.0844C12.8609 30.3154 13.3632 30.5134 13.8699 30.6791C14.0151 30.6328 14.1603 30.5864 14.3053 30.5399C15.133 30.2741 15.9575 30.0014 16.7635 29.6829C18.3761 29.046 19.9175 28.2253 21.2715 26.9077C22.5979 25.6171 23.8898 23.6366 24.8487 21.9828C25.3286 21.1552 25.7258 20.4079 26.0032 19.8676C26.1418 19.5974 26.2505 19.3789 26.3246 19.2279L26.3599 19.1556C25.9732 18.8502 25.5735 18.5894 25.1695 18.401C22.6281 17.2159 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 16.0131 21.7778 13.9746 23.4789Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M18.1298 4.66446C18.1298 4.66446 16.1759 9.03514 16.2932 11.9774C16.3906 14.4202 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.0131 21.7779 13.9746 23.4789C11.8918 25.2168 7.7151 26.49 7.7151 26.49C4.54807 22.6477 3.67169 17.1791 5.91629 12.3655C8.19652 7.47555 13.0649 4.61836 18.1298 4.66446Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M18.0004 18.0004C18.0004 18.0004 16.3905 14.4202 16.2932 11.9773C16.1759 9.03508 18.1298 4.6644 18.1298 4.6644C19.9775 4.68122 21.8514 5.08435 23.6353 5.91619C30.3092 9.02827 33.1966 16.9613 30.0845 23.6352C30.0845 23.6352 27.7107 19.586 25.1694 18.401C22.6281 17.2159 18.0004 18.0004 18.0004 18.0004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.71515 26.4899C7.71515 26.4899 11.8918 25.2168 13.9746 23.4789C16.0131 21.7778 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 22.6281 17.2159 25.1695 18.401C27.7108 19.586 30.0845 23.6352 30.0845 23.6352C26.9725 30.3091 19.0394 33.1965 12.3655 30.0844C10.5052 29.217 8.93912 27.9749 7.71515 26.4899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-xl font-display font-semibold tracking-tight">Lumina Studio</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#features">Features</a>
              <a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#gallery">Gallery</a>
              <a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#testimonials">Testimonials</a>
              <a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#pricing">Pricing</a>
              <a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#support">Support</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <button className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl">
                Sign In
              </button>
              <button className="group relative inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/20">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 blur-lg group-hover:opacity-20 transition-opacity"></div>
              </button>
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-[1.5]">
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                  <path d="M4 6h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative lg:pt-32 lg:pb-24 pt-8 pb-32">
          <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 xl:gap-16">
              {/* Hero content */}
              <div className="relative z-10 lg:col-span-6 xl:col-span-5">
                <div className="animate-slide-up delay-200 mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl" style={{animationPlayState: 'running'}}>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></span>
                    <span className="text-xs font-medium">AI-Powered Creation</span>
                  </div>
                  <div className="h-4 w-px bg-white/20"></div>
                  <span className="text-xs">Now Available</span>
                </div>
                
                <h1 className="animate-slide-up delay-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-6 font-geist font-light tracking-tighter" style={{animationPlayState: 'running'}}>
                  Create Beyond
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">Imagination</span>
                </h1>
                
                <p className="animate-slide-up delay-500 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/70 mb-8" style={{animationPlayState: 'running'}}>
                  Transform your creative vision into stunning reality with our advanced AI studio. From concept to creation, bring your wildest ideas to life with unprecedented precision and artistry.
                </p>
                
                <div className="animate-slide-up delay-700 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{animationPlayState: 'running'}}>
                  <button className="group relative inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-[1.5]">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                    <span>Start Creating</span>
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl group-hover:opacity-25 transition-opacity"></div>
                  </button>
                  <button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 stroke-[1.5]">
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>
                    <span>Watch Demo</span>
                  </button>
                </div>
                
                {/* Stats with animated counters */}
                <div className="animate-slide-up delay-900 grid grid-cols-3 gap-8 mt-12" style={{animationPlayState: 'running'}} id="statsContainer">
                  <div>
                    <div className="text-2xl text-white font-geist font-light tracking-tighter">
                      <span className="counter" data-target="2000000" data-suffix="+">0</span>
                    </div>
                    <div className="text-sm text-white/60 mt-1">Creations</div>
                  </div>
                  <div>
                    <div className="text-2xl text-white font-geist font-light tracking-tighter">
                      <span className="counter" data-target="50000" data-suffix="+">0</span>
                    </div>
                    <div className="text-sm text-white/60 mt-1">Artists</div>
                  </div>
                  <div>
                    <div className="text-2xl text-white font-geist font-light tracking-tighter">
                      <span className="counter" data-target="99.9" data-suffix="%" data-decimals="1">0</span>
                    </div>
                    <div className="text-sm text-white/60 mt-1">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Visual content */}
              <div className="relative lg:col-span-6 xl:col-span-7">
                {/* Main hero visual with glowing light */}
                <div className="animate-blur-in delay-500 relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/5 shadow-2xl shadow-black/40" style={{animationPlayState: 'running'}}>
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2012f549-ddcb-4a4a-beb4-d602bbe116c2_1600w.jpg" alt="AI Generated Art" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Glowing light effect on the flower */}
                  <div className="glow-light"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl bg-black/40 p-3 backdrop-blur-xl ring-1 ring-white/10">
                      <div className="text-sm font-medium text-white">Ethereal Landscape</div>
                      <div className="text-xs text-white/70 mt-0.5">Generated in 3.2 seconds</div>
                    </div>
                  </div>
                </div>

                {/* Fixed Activity panel */}
                <div className="animate-slide-up delay-1100 absolute -bottom-16 right-0 w-full max-w-sm lg:absolute lg:right-0 lg:top-8 lg:-bottom-auto lg:w-80" style={{animationPlayState: 'running'}}>
                  <div className="relative shadow-black/40 ring-1 ring-white/10 bg-white/20 border-white/15 border rounded-2xl mr-5 pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-3xl" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.18)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'}}>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 items-center">
                        <div className="inline-flex h-9 w-9 ring-1 ring-white/20 bg-neutral-50/20 rounded-xl items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-[1.5]">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                        </div>
                        <h3 className="text-base font-display font-semibold">Live Activity</h3>
                      </div>
                      <button 
                        onClick={() => setActivityVisible(!activityVisible)}
                        className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[1.5] w-[16px] h-[16px]" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}}>
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </div>

                    <div className={`space-y-3 ${activityVisible ? 'block' : 'hidden'}`}>
                      {/* Activity items */}
                      <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
                        <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <circle cx="9" cy="9" r="2"></circle>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-white truncate">Image Enhancement</p>
                          <p className="text-xs text-white/60">Enhanced • 2 mins ago</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 stroke-[2] text-green-400">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
                        <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]">
                            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-white truncate">Style Transfer</p>
                          <p className="text-xs text-white/60">Processing • 5 mins ago</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" style={{animationPlayState: 'running'}}></div>
                        </div>
                      </div>

                      <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
                        <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl ring-1 ring-white/15 shadow-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-4 sm:w-4 stroke-[1.5]">
                            <path d="m21.64 3.64-1.28-1.28a1.2 1.2 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
                            <path d="m14 7 3 3"></path>
                            <path d="M5 6v4"></path>
                            <path d="M19 14v4"></path>
                            <path d="M10 2v2"></path>
                            <path d="M7 8H3"></path>
                            <path d="M21 16h-4"></path>
                            <path d="M11 3H9"></path>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-white truncate">AI Generation</p>
                          <p className="text-xs text-white/60">Completed • 8 mins ago</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 stroke-[2] text-green-400">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`mt-4 pt-4 border-t border-white/10 ${activityVisible ? 'block' : 'hidden'}`}>
                      <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 stroke-[1.5]">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        Start New Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;