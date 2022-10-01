import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
  textColor: string;
  iconColor: string;
  logo: string;
  siteName: string;
};

const Logo = (props: ILogoProps) => {
  return (
    <div
      className={`flex relative h-[55px] w-[151px] items-center mx-auto hover:scale-125 duration-500`}
    >
      <Image
        src={`/${props.logo}`}
        objectFit="fill"
        layout="fill"
        alt="Logo"
        className=""
      />
    </div>
  );
};

export { Logo };
