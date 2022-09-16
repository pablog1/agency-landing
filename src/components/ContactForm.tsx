import { Button } from '../button/Button';

type ContactFormProps = {
  firstTitle: string;
  secondTitle: string;
};

const ContactForm = (props: ContactFormProps) => (
  <form className="text-center flex flex-col p-8 my-8 bg-white rounded-md w-full max-w-md text-black  ">
    <div className="h3 pb-4">
      <span className="text-black">{props.firstTitle}</span> {props.secondTitle}
    </div>
    <div className="form-fields flex flex-col w-full space-y-4 ">
      <input
        required
        className="formField"
        type="text"
        name="Name"
        placeholder="Your Name *"
      ></input>
      <input
        required
        className="formField"
        type="email"
        name="email"
        placeholder="Your Email *"
      ></input>
      <textarea
        required
        className="formField"
        name="email"
        placeholder="Message"
      ></textarea>
      <div className="mb-40"></div>
      <Button>GET IN TOUCH</Button>
    </div>

    <style jsx>
      {`
        .formField {
          @apply text-black bg-transparent border-b-2 placeholder-gray-500 focus:outline-none;
        }
      `}
    </style>
  </form>
);

export { ContactForm };
