import "../Styles/FAQ.css";
const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer: "We help 12th class students prepare for jee, offer mock tests, percentile calculations, college recommendations and career paths."
    },
    {
      question: "How can I start?",
      answer: "Sign up, take mock tests, track scores, and get college recommendations based on your performance."
    },
    {
      question: "How is my percentile calculated?",
      answer: "Your percentile compares your score to other students who took the same test."
    },
    {
      question: "Can I see recommended colleges?",
      answer: "Yes, based on your mock test scores, we suggest colleges that suits your profile."
    },
    {
      question: "How often are the mock tests updated?",
      answer: "We update tests regularly to match current exam patterns and syllabus."
    },
    {
      question: "How can I improve my score?",
      answer: "Practice regularly, take mock tests, and analyze your performance to improve your score."
    }
  ];
  return (
    <div className="mainContainer">
      <h1 className="faqHeading">Frequently Asked Questions...</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="childContainer">
            <h3 className="questions">{faq.question}</h3>
            <p className="answers">{faq.answer}</p>
          </div>
        ))}
    </div>
  )
}

export default FAQ
