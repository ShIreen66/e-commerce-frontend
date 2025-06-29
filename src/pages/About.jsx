const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100 py-12 px-2">
            <div className="bg-white/90 rounded-2xl shadow-2xl border border-indigo-100 max-w-3xl w-full p-10 flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl text-indigo-400 mr-3">🛒</span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center drop-shadow-md">
                        About Our E-Commerce Store
                    </h1>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-2xl">
                    Welcome to our e-commerce platform! We are dedicated to providing you with the best online shopping experience, offering a wide range of products at competitive prices.<br className="hidden sm:block" />
                    Our mission is to make shopping easy, secure, and enjoyable for everyone.
                </p>
                <ul className="list-disc text-left text-gray-600 pl-8 mb-8 space-y-2 w-full max-w-md">
                    <li className="font-medium">Wide selection of quality products</li>
                    <li className="font-medium">Fast and reliable shipping</li>
                    <li className="font-medium">Secure payment options</li>
                    <li className="font-medium">24/7 customer support</li>
                </ul>
                <span className="text-xs text-gray-400 text-center block mt-4">
                    &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
                </span>
            </div>
        </div>
    );
};

export default About;
