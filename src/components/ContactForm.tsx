import { Button } from '@material-tailwind/react';

type ContactFormProps = {
  firstTitle: string;
  secondTitle: string;
  width: string;
};

const ContactForm = (props: ContactFormProps) => (
  <>
    <form
      className={`${props.width} text-center flex flex-col p-8 my-8 bg-opacityColor-100 rounded-md text-black `}
      name="contactForm"
      action="/thanks"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p className="hidden">
        <input type="hidden" name="form-name" value="contactForm" />
        <label id="contact-form-bot-label">
          Dont fill this out if youre human:
          <input name="bot-field" aria-labelledby="contact-form-bot-label" />
        </label>
      </p>

      <div className="h2 pb-8">
        <span className="text-black">{props.firstTitle}</span>{' '}
        {props.secondTitle}
      </div>
      <div className="form-fields flex flex-col w-full space-y-8 ">
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
        <Button className="bg-primary-500 py-4 text-base " type="submit">
          GET IN TOUCH
        </Button>
      </div>

      <style jsx>
        {`
          .formField {
            @apply text-black bg-transparent border-gray-700 border-b-2 placeholder-gray-700 focus:outline-none;
          }
        `}
      </style>
    </form>

    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </>
);

export { ContactForm };
