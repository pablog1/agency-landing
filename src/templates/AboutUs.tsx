import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative c-container pt-12 pb-4">
      <div className="flex flex-row justify-evenly relative text-black py-5">
        <div className="text-center relative w-2/5">
          <Image
            layout="fill"
            className="object-center object-contain pointer-events-none"
            src="/assets/images/team_member.jpg"
            alt="About Us"
          />
        </div>
        <div className="md:pl-8 w-3/5">
          <h3 className="h2 mb-4">About Us</h3>
          <p>
            We build slick e-commerce stores and apps that look great and
            perform even better. That´s why we´re trusted by over clients
            worldwide. We build slick e-commerce stores and apps that look great
            and perform even better. That´s why we´re trusted by over clients
            worldwide. We build slick e-commerce stores and apps that look great
            and perform even better.
          </p>
          <p>
            We build slick e-commerce stores and apps that look great and
            perform even better. That´s why we´re trusted by over clients
            worldwide. We build slick e-commerce stores and apps that look great
            and perform even better. That´s why we´re trusted by over clients
            worldwide. We build slick e-commerce stores and apps that look great
            and perform even better.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
