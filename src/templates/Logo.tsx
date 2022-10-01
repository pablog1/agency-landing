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
    <div className={`flex relative h-[54px] w-[104px] items-center mx-auto`}>
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
