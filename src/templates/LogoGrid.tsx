import { Logo } from '../components/logo';

const LogoGrid = ({ content }: any) => {
  const { app } = content;
  return (
    <section className="relative c-container mt-2 mb-20 py-10 bg-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative text-black max-w-4xl mx-auto">
        {Object.keys(app).map((keyName, i) => (
          <Logo
            key={i}
            src={`/${app[keyName].image}`}
            alt={app[keyName].alt_text}
          />
        ))}
      </div>
    </section>
  );
};

export { LogoGrid };
