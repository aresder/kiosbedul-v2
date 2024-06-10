"use client";

import { useState } from "react";

const FaqPage = ({
  faqList,
}: {
  faqList: { question: string; answer: string }[];
}) => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="space-y-4 mt-20">
      {faqList.map((faq, index) => (
        <div key={index}>
          <div
            onClick={() => handleToggle(index)}
            className="relative cursor-pointer p-4 rounded-lg shadow-md">
            {active === index ? (
              <span className="text-2xl text-white right-0 absolute">-</span>
            ) : (
              <span className="text-2xl text-white right-0 absolute">+</span>
            )}
            <h3 className="text-2xl font-semibold text-white">
              {faq.question}
            </h3>
          </div>
          {active === index && (
            <p className="text-lg mt-2 text-white">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
