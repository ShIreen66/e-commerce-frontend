const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
            <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-500 mb-6 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition cursor-pointer">
                Go to Homepage
            </a>
        </div>
    );
};

export default PageNotFound;