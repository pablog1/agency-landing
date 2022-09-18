import { Logo } from '../components/logo';

const LogoGrid = () => {
  return (
    <section className="relative c-container mt-2 mb-20">
      <div className="h2 text-center mb-4 pb-6">Some Apps We Use</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative text-black max-w-4xl mx-auto">
        <Logo src="/assets/images/figma.svg" alt="Figma" />
        <Logo src="/assets/images/reactjs.svg" alt="React" />
        <Logo src="/assets/images/figma.svg" alt="Figma" />
        <Logo src="/assets/images/reactjs.svg" alt="React" />
        <Logo src="/assets/images/figma.svg" alt="Figma" />
        <Logo src="/assets/images/reactjs.svg" alt="React" />
        <Logo src="/assets/images/figma.svg" alt="Figma" />
        <Logo src="/assets/images/reactjs.svg" alt="React" />
      </div>
    </section>
  );
};

export { LogoGrid };
