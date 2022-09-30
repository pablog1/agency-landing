import { VerticalFeatureRow } from '../components/VerticalFeatureRow';

const ImageTextBlocks = ({ content }: any) => (
  <section className="antialiased text-gray-600 c-container">
    {Object.keys(content).map((keyName, i) => (
      <VerticalFeatureRow
        key={i}
        title={`${content[keyName].heading}`}
        description={`${content[keyName].description}`}
        image={`/${content[keyName].image}`}
        imageAlt={content[keyName].alt_text}
        reverse={content[keyName].reverse}
      />
    ))}
  </section>
);

export { ImageTextBlocks };
