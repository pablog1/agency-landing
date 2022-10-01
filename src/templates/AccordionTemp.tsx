import { SetStateAction, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const AccordionTemp = ({ content }: any) => {
  const { question } = content;
  const [open, setOpen] = useState(0);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <section className="c-container mt-12 py-8 bg-primary-500">
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-2/5 lg:mr-20 relative">
            <Image
              className="object-center object-conver pointer-events-none"
              src={`/${content.image}`}
              alt={content.alt_text}
              width="800"
              height="600"
            />
          </div>
          <div className="w-full lg:w-3/5">
            {Object.keys(question).map((faq, index) => {
              return (
                <Accordion open={open === index} key={index}>
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="text-white hover:text-white text-left"
                  >
                    {question[faq].question}
                  </AccordionHeader>
                  <AccordionBody className="text-white">
                    <div className="text-white answers">
                      <ReactMarkdown>{question[faq].answer}</ReactMarkdown>

                      <style jsx>
                        {`
                          .answers {
                            font-weight: 400;
                          }
                        `}
                      </style>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export { AccordionTemp };
