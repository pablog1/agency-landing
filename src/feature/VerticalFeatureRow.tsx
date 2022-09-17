import className from 'classnames';
import Image from 'next/image';

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
    'flex-wrap',
    'items-center',
    'text-black',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl">{props.description}</div>
        <div className="mt-6 font-bold">Contact Us</div>
      </div>

      <div className="w-full sm:w-1/2 p-6 relative h-60">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
