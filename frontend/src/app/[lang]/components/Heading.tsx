interface Feature {
  id: string;
  attributes: {
    name: string;
  };
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  pricePeriod: string;
  isRecommended: boolean;
  product_features: {
    data: Feature[];
  };
}

interface HeadingProps {
  data: {
    id: string;
    title: string;
    plans: Plan[];
  };
}

export default function Heading({ data }: HeadingProps) {
  return (
    <section className="py-20 dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <h1>Headingd</h1>
    </section>
  );
}
