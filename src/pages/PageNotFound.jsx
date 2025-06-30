const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
            <div className="bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 p-12 flex flex-col items-center relative overflow-hidden">
     
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 z-0 animate-pulse"></div>
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-4 drop-shadow-lg z-10">404</h1>
                <h2 className="text-3xl font-bold text-indigo-700 mb-2 z-10">Page Not Found</h2>
                <p className="text-lg text-gray-500 mb-8 text-center max-w-md z-10">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <a href="/" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-blue-500 hover:to-indigo-500 transition text-lg z-10">
                    Go Back
                </a>
            </div>
        </div>
    );
};

export default PageNotFound;