import "../Styles/FAQ.css";
const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer: "We help 12th class students prepare for jee, offer mock tests, percentile calculations, college recommendations and career paths."
    },
    {
      
    }
  ]
  return (
    <div className="mainContainer">
      <h1 className="faqHeading">Frequently Asked Questions...</h1>
      <div className="childContainer">
        <p className="questions">What is the purpose of this website?</p>
        <p>We help 12th class students prepare for jee, offer mock tests, percentile calculations, college recommendations and career paths.</p>
      </div>
      <div className="childContainer">
        <p className="questions">What is the purpose of this website?</p>
        <p>We help 12th class students prepare for jee, offer mock tests, percentile calculations, college recommendations and career paths.</p>
      </div>
      <div className="childContainer">
        <p className="questions">What is the purpose of this website?</p>
        <p>We help 12th class students prepare for jee, offer mock tests, percentile calculations, college recommendations and career paths.</p>
      </div>
    </div>
  )
}

export default FAQ
