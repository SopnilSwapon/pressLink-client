import premiumSign from '../../../src/assets/star.jpg'
const PremiumArticle = () => {
    return (
       <div>
        <h2 className="pt-24 text-3xl text-center font-bold">Our Premium Articles</h2>
         <div className="card w-96 glass relative">
            <img className='w-12 -mt-3 rounded-full -right-4 bg-neutral absolute' src={premiumSign} alt="" />
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default PremiumArticle;