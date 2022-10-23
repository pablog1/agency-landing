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
  const [open, setOpen] = useState(-1);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <section className="c-container !pl-0 !pr-0 lg:pr-4  mt-12  bg-primary-500">
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 lg:mr-20 min-h-[400px] relative">
            <Image
              className="object-center object-conver pointer-events-none"
              src={`/${content.image}`}
              alt={content.alt_text}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full lg:w-3/5 py-4 px-4 lg:pl-2 lg:pr-12 lgx2:pl-4 lgx2:pr-28 ">
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
