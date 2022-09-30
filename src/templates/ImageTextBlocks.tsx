import { VerticalFeatureRow } from '../components/VerticalFeatureRow';

const ImageTextBlocks = () => (
  <section className="antialiased text-gray-600 c-container">
    <VerticalFeatureRow
      title="Stores Built from Scratch"
      description="We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform."
      image="/assets/images/box.jpg"
      imageAlt="First feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Custom Development"
      description="We’ll guide you on your e-commerce journey and get your online store up and running on the Shopify platform."
      image="/assets/images/box.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="E-commerce Optimization"
      description="Drawing on our deep expertise in e-commerce and online marketing, we’ll review your conversion path and recommend changes to boost sales."
      image="/assets/images/box.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
  </section>
);

export { ImageTextBlocks };
