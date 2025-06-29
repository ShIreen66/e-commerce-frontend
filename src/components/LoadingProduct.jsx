const LoadingProduct = () => {
    return (
        <div className="w-[31%] h-[65vh] shadow-md rounded-lg p-4 mr-5 mb-5 flex flex-col justify-center items-center bg-gray-50 animate-pulse">
            <div className="w-20 h-20 rounded-full bg-gray-300 mb-4"></div>
            <h1 className="text-gray-500 text-lg font-semibold">Loading...</h1>
        </div>
    );
};

export default LoadingProduct;
