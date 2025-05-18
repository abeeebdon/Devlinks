"use client";

import { faqs } from "@/components/data";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FAqs = () => {
  const [showAns, setShowAns] = useState(false);
  return (
    <article className="mt-10 flex justify-center">
      <section className=" pb-20 p-4 w-full max-w-[1400px]">
        <h2 className="text-2xl font-semibold text-purple text-center">
          Frequently Asked Questions (FAQs)
        </h2>
        <article className="mt-4">
          {faqs.map(({ qs, ans }, i) => {
            return (
              <article className="border-b border-gray p-2 mt-3" key={i}>
                <div className="flex items-center justify-between w-full">
                  <p className="text-dgrap">{qs}?</p>
                  <FaAngleDown
                    onClick={() => setShowAns(!showAns)}
                    color="gray"
                    size={20}
                  />
                </div>
                {showAns && (
                  <div className="mt-2 max-w-[500px] w-full text-gray">
                    {ans}
                  </div>
                )}
              </article>
            );
          })}
        </article>
      </section>
    </article>
  );
};

export default FAqs;
