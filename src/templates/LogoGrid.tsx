import { Logo } from '../components/logo';

const LogoGrid = () => {
  return (
    <section className="relative c-container mt-16 mb-16">
      <div className="h2 text-center mt-6 mb-4 p-5">Some Apps We Use</div>
      <div className="grid grid-cols-4 gap-4 relative text-black max-w-4xl mx-auto">
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
        <Logo src="/assets/images/aws.png" alt="AWS" />
      </div>
    </section>
  );
};

export { LogoGrid };
