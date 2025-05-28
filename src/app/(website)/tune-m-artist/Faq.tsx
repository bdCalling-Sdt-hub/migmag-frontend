type FaqType = {
  question: string,
  answer: string
}
const faqs: FaqType[] = [
  {
    question: "I’ve been offered an interview, how does the recruitment process work?",
    answer:
      "That’s great news. Our process usually involves a quick chat on the phone, a portfolio review or task, and a couple of interviews where you’ll meet the people you’ll work with. We’ll keep you fully informed along the way.",
  },
  {
    question: "I’m a recruiter, how can we work together?",
    answer:
      "Thank you, we’re flattered but if we need any support from a third-party recruiter, we’ll contact you. We have an amazing in-house Talent team who work the full 360 recruitment cycle and keep our hiring internal as much as possible.",
  },
  {
    question: "Is there an email address I can send my CV to?",
    answer:
      "We don’t accept email applications. But if you don’t see the role for you, keep checking our LinkedIn and jobs page as we update them regularly with new opportunities.",
  },
  {
    question: "I’ve been offered an interview, how does the recruitment process work?",
    answer:
      "That’s great news. Our process usually involves a quick chat on the phone, a portfolio review or task, and a couple of interviews where you’ll meet the people you’ll work with. We’ll keep you fully informed along the way.",
  },
  {
    question: "I’ve been offered an interview, how does the recruitment process work?",
    answer:
      "That’s great news. Our process usually involves a quick chat on the phone, a portfolio review or task, and a couple of interviews where you’ll meet the people you’ll work with. We’ll keep you fully informed along the way.",
  },
  {
    question: "I’ve been offered an interview, how does the recruitment process work?",
    answer:
      "That’s great news. Our process usually involves a quick chat on the phone, a portfolio review or task, and a couple of interviews where you’ll meet the people you’ll work with. We’ll keep you fully informed along the way.",
  },
  {
    question: "I’ve been offered an interview, how does the recruitment process work?",
    answer:
      "That’s great news. Our process usually involves a quick chat on the phone, a portfolio review or task, and a couple of interviews where you’ll meet the people you’ll work with. We’ll keep you fully informed along the way.",
  },
  {
    question: "How do you use my data?",
    answer: "It’s really easy to find out how we store and process your data, just review our "

  },
];

const Faq = () => {
  return (
    <section style={{ fontFamily: 'Favorit' }} className="px-4 max-w-[1539px] mx-auto py-5  lg:px-16">
      <h1 className={" text-[#000000] lg:text-3xl text-xl leading-9 font-bold text-center mb-10 lg:mb-20 "} >FAQs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg leading-6  text-black mb-3 lg:mb-6">{faq.question}</h3>
            <p className="text-lg text-[#000000] leading-6 ">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Faq