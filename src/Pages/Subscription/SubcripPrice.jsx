
const SubcripPrice = () => {
    return (
        <div>
            <section className="p-6">
	<div className="container mx-auto">
		<h2 className="text-3xl font-bold text-center">Read Carefully to Become a Premium user.</h2>
		<div className="grid gap-6 my-8 lg:grid-cols-3 ">
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-500">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 dark:text-gray-50">1</div>
				<p className="text-2xl font-semibold">
					1 minute Package
				</p>
                <p>You have to pay 5$ for 1minute package. After 1 minute you will be normal user.</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-500">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 dark:text-gray-50">5</div>
				<p className="text-2xl font-semibold">
					5 minute Package
				</p>
                <p>You have to pay 12$ for 1minute package. After 5 minute you will be normal user.</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-500">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 dark:text-gray-50">10</div>
				<p className="text-2xl font-semibold">
					10 minute Package
				</p>
                <p>You have to pay 15$ for 1minute package. After 10 minute you will be normal user.</p>
			</div>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default SubcripPrice;