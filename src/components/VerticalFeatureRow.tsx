import className from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  cta_text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-8',
    'flex',
    'flex-col',
    'lg:flex-row',
    'items-center',
    'text-black',
    'vertical-blocks mb-16 lg:mb-0',
    {
      'lg:flex-row-reverse': !props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full lg:w-1/2 lg:px-6">
        <h3 className="h3">{props.title}</h3>
        <div className="w-full lg:w-1/2 pt-4 relative  lg:hidden">
          <Image
            layout="intrinsic"
            className="object-center object-cover pointer-events-none rounded-md"
            src={props.image}
            alt={props.imageAlt}
            width="1500"
            height="1000"
          />
        </div>
        <div className="mt-6">
          <ReactMarkdown>{props.description}</ReactMarkdown>
        </div>
        <p className="className=mt-6 font-bold pt-2 text-primary-400 hover:scale-105 w-fit duration-300">
          <Link href="/#footerContactForm">
            <a>{props.cta_text}</a>
          </Link>
        </p>
      </div>

      <div className="w-full lg:w-1/2 pt-4 relative pb-12 hidden lg:block">
        <Image
          layout="intrinsic"
          className="object-center object-cover pointer-events-none rounded-md"
          src={props.image}
          alt={props.imageAlt}
          width="1500"
          height="1000"
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
