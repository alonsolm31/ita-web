import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import styles from "./Features.module.css";
interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  media: Media;
}

interface Media {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

function Feature({
  title,
  description,
  showLink,
  newTab,
  url,
  text,
  media,
}: Feature) {
  const imgUrl = getStrapiMedia(media.data.attributes.url);

  return (
    <div className={"flex flex-col items-center " + styles.container}>
      <Image
        src={imgUrl || ""}
        alt="none provided"
        className={
          "object-cover h-72 sm:h-80 xl:h-112 2xl:h-128 " + styles.heightLg
        }
        width={9999}
        height={1}
      />
      <div className={styles.centered}>
        <h2 className={styles.colorBlack}>{description}</h2>
      </div>
    </div>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="mx-auto grid justify-center">
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
