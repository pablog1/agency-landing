import className from 'classnames';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
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
    {
      'lg:flex-row-reverse': !props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full lg:w-1/2 lg:px-6">
        <h3 className="h3">{props.title}</h3>
        <p className="mt-6">
          <ReactMarkdown>{props.description}</ReactMarkdown>
        </p>
        <div className="mt-6 font-bold">Contact Us</div>
      </div>

      <div className="w-full lg:w-1/2 pt-4 lg:p-6 relative pb-12">
        <Image
          layout="intrinsic"
          className="object-center object-cover pointer-events-none"
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
