
const AllArticleDash = () => {
    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <button className="btn btn-success btn-sm">Approve</button>
                            <button className="btn btn-outline btn-secondary btn-sm">Premium</button>
                           
                            <button className="btn btn-error btn-sm">Decline</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AllArticleDash;