"use client";
import React,{useState} from "react";
import styles from "./page.module.css";
import Image from "next/image";

function page() {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
          question:
            "How many DLICOM Token will be issued in total, and what share of those tokens will be sold during the ICO?",
          answer:
            "Seventy percent of DLICOM tokens in circulation are represented by a supply of 610.000.000 tokens.",
        },
        {
          question:
            "Is your project management software suitable for teams of all sizes?",
          answer:
            "Yes, our project management software is designed to cater to teams of all sizes, from small startups to large enterprises. Whether you're managing a handful of tasks or overseeing complex projects with multiple stakeholders",
        },
        {
          question:
            "Can I customize and integrate SaaS applications with other tools?",
          answer:
            "Yes, many SaaS applications offer customization and integration options to tailor them to your business needs and workflows.",
        },
        {
          question: " Is SaaS suitable for startups and small businesses?",
          answer:
            "Yes, SaaS is well-suited for startups and small businesses due to its affordability, scalability, and accessibility.",
        },
        {
          question: "How can SaaS benefit my business?",
          answer:
            "SaaS offers benefits such as cost-effectiveness, scalability, accessibility, and security, making it an ideal choice for startups and small businesses.",
        },
      ];
      const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div>
      <div className={`${styles.fAQsSection} flex`}>
        <h1 className={styles.fAQsSectionTitle}>
          Frequently Asked Questions (FAQs)
        </h1>
        <div className={`${styles.container} flex`}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.futureImg}
              src="/blockchain.png"
              alt="img"
              width={500}
              height={400}
              priority
            />
          </div>
          <div className={`${styles.faqcontainer} flex`}>
            {questions.map((item, index) => (
              <div
                className={`${styles.question}`}
                key={index}
                onClick={() => toggleAnswer(index)}
              >
                <div className={`${styles.flexQuestion} flex`}>
                  <div className={styles.questionText}>{item.question}</div>
                  <div className="plus-minus-sign">
                    {openIndex === index ? "-" : "+"}
                  </div>
                </div>
                {openIndex === index && (
                  <div className={`${styles.answer}`}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
