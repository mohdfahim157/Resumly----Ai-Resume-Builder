export default function Fearures() {
  return (
     <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>
            
            <div className="w-full py-20 px-6 flex flex-col items-center">
                <div className="text-center mx-auto">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
                        Our Features
                    </span>
                    <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mt-6">Build Faster and Grow Smarter</h1>
                    <p className="text-sm md:text-base text-slate-600 mt-3 max-w-132.5 mx-auto">Build faster with powerful, flexible tools designed to simplify workflows and deliver results without complexity.</p>
                </div>

                {/* Features Grid */}
                <div className="w-full max-w-5xl mx-auto mt-16 relative grid grid-cols-1 md:grid-cols-3 border-x border-slate-100 md:divide-x divide-y md:divide-y-0 divide-slate-100">
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-linear-to-r from-slate-50 via-slate-200 to-slate-50"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-linear-to-r from-slate-50 via-slate-200 to-slate-50"></div>

                    <div className="flex flex-col items-start px-6 py-8 hover:bg-slate-50 transition-colors">
                        <div className="size-13 flex items-center justify-center border border-slate-200 rounded-lg mb-11">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m11 0h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 9h-5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M9 16H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" stroke="#314158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Dashboard Builder</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Create dynamic dashboards with real-time insights and customizable layouts for better decision-making.
                        </p>
                        <a href="#" className="mt-8 flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors group">
                            Explore Feature 
                            <svg className="transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div className="flex flex-col items-start px-6 py-8 hover:bg-slate-50 transition-colors">
                        <div className="size-13 flex items-center justify-center border border-slate-200 rounded-lg mb-11">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2 8v4a2 2 0 0 0 2 2h4m6-4h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" stroke="#314158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Workflow Automation</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Automate repetitive tasks and streamline processes to save time and boost team productivity.
                        </p>
                        <a href="#" className="mt-8 flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors group">
                            See How It Works
                            <svg className="transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div className="flex flex-col items-start px-6 py-8 hover:bg-slate-50 transition-colors">
                        <div className="size-13 flex items-center justify-center border border-slate-200 rounded-lg mb-11">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2" stroke="#314158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Seamless Integrations</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Connect with your favorite tools and services to build a seamless, unified and efficient workflow.
                        </p>
                        <a href="#" className="mt-8 flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors group">
                            View Integrations
                            <svg className="transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
  )
}
