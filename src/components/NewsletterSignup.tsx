import React, { useRef } from 'react';

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Script from 'next/script';

const NewsletterSignup = () => {
  const listId = 'XfPdpf';
  const emailRef: any = useRef(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const email = emailRef.current?.value;

    const data = {
      g: listId,
      email: email ?? '',
    };

    const urlData = new URLSearchParams(data);
    const feedback = document.querySelector('.news-feedback');
    fetch(`https://manage.kmail-lists.com/ajax/subscriptions/subscribe`, {
      method: 'POST',
      body: urlData,
    }).then((response) => {
      if (response.ok) {
        if (feedback) {
          feedback.innerHTML = 'Thank you!';
        }
      } else {
        console.log('error');
      }
    });
  };
  return (
    <section className="flex flex-col justify-center items-center  p-6 bg-black">
      <div className="pb-2 ">
        <Image
          className="object-center invert"
          src="/img/newsletter.svg"
          alt="Newsletter"
          height={40}
          width={40}
        />
      </div>

      <p className="font-bold text-center !text-white mb-4 lg:mt-3 lg:px-6 ">
        Subscribe to our Newsletter
      </p>
      <div>
        <div className="flex flex-row justify-center ">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              ref={emailRef}
              className="h-full rounded-md mr-2 outline-none placeholder:text-gray-600 pl-4 md:min-w-[300px]"
            ></input>
            <Button type="submit" className="bg-primary-500  text-base">
              Join
            </Button>
          </form>
          <Script src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js" />
        </div>
        <div className="news-feedback text-white font-bold mt-4 text-center ">
          We will only send you good stuff!
        </div>
      </div>
    </section>
  );
};

export { NewsletterSignup };
