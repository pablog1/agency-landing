import Link from 'next/link';

import { BackgroundImage } from '../background/BackgroundImage';
import { Button } from '../button/Button';

type BannerProps = {
  title: string;
  align: string;
  tailwindColor: string;
  inlineContainer: boolean;
};

const BannerWithBK = (props: BannerProps) => {
  const container = 'relative mt-8 p-12';
  const inlineContainer = `${container} c-container `;

  const textCssPos = `c-container mx-auto flex flex-row relative`;
  const textCssPosRight = `${textCssPos} justify-end`;

  const buttonCss = 'md:pr-4';
  const buttonCssRight = `${buttonCss} text-right`;

  const textCss = `h2 mb-8  ${props.tailwindColor}`;
  return (
    <section
      className={props.inlineContainer === true ? inlineContainer : container}
    >
      <BackgroundImage
        src="/assets/images/hero_background.jpg"
        alt="Background hero Image"
      />

      <div className={props.align === 'left' ? textCssPos : textCssPosRight}>
        <div className={props.align === 'left' ? buttonCss : buttonCssRight}>
          <h2 className={textCss}>
            {props.title} {props.align}{' '}
          </h2>
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button>Get Started</Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { BannerWithBK };
