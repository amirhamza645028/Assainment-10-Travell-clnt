
const Loading = () => {
    return (
        <div className="container">
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <span className="loading loading-dots loading-lg"></span>
                    <p className="mt-4 text-lg font-semibold">Loading, please wait...</p>
                </div>
            </div>
        </div>
    );
};

export default Loading;
