import style from "./Heading.module.css";

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
    heading: string;
    description: string;
  };
}

export default function Heading({ data }: HeadingProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100 py-2">
      <div className="text-center">
        {data.heading && <span className={style.fontSize}>{data.heading}</span>}
      </div>
    </section>
  );
}
