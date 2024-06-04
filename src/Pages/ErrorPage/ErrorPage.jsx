import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFound from '../../assets/notFount.json'

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center bg-black text-white h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<Lottie animationData={notFound}></Lottie>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
			<Link to='/'><button rel="noopener noreferrer" href="#" className="px-8 btn btn-success text-white py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</button></Link>
		</div>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;