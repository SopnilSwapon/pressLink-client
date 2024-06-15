import Lottie from 'lottie-react';
import faq from '../../assets/faq.json'
const Faq = () => {
    return (
      <>
      <h2 className='text-3xl font-bold text-center mt-10'>Your questions answered about us</h2>
      <p className='md:w-[68%] mx-auto text-center mt-3'>Find answers to the most common questions about our newspaper. Whether you are looking for subscription details, information on our editorial process, or how to submit a story, our FAQ section covers it all. Browse through our comprehensive list of questions to get the information you need.</p>
        <div className='flex sm:flex-col md:flex-row  lg:flex-row justify-between items-center'>
           <div className='flex-1'>
           <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    How can I become a Premium user In this PressLink Website ?
  </div>
  <div className="collapse-content"> 
    <p>Choose your plan and enjoy premium access: 1 Minute: $4, 5 Minutes: $10, 10 Minutes: $15, Pay by card and unlock premium features instantly. Experience enhanced content and exclusive benefits today!</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 my-4">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium my-3">
    How to add a news in our pressLink Website ?
  </div>
  <div className="collapse-content"> 
    <p>There have a add article page in our navbar. To add a news you have to login our website then you can add a news.after that or admin will review your news then he will add or decline or delete that news.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 mt-3">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium mt-3">
    What is the Opportunity of premium user ?
  </div>
  <div className="collapse-content"> 
    <p>Premium user can explore our premium news which are very exciting & learning, business idea related also these news are very eye keen and have more opportunity.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 mt-3">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium mt-3">
    What kind of news for premium user ?
  </div>
  <div className="collapse-content"> 
    <p>There have lot of news for instance exciting & learning, business idea related, Poem, History also these news are very eye keen and have more opportunity.</p>
  </div>
</div>
           </div>
           <div>
            <Lottie animationData={faq}></Lottie>
           </div>
        </div>
        </>
    );
};

export default Faq;