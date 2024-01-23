import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import styles from "./Recommendations.module.css";
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
    <div className="flex flex-col items-center">
      <Image
        src={imgUrl || ""}
        alt="none provided"
        className={
          "object-cover h-72 sm:h-80 xl:h-112 2xl:h-128 " + styles.heightLg
        }
        width={1400}
        height={600}
      />
    </div>
  );
}

export default function Recommendations({ data }: FeaturesProps) {
  return (
    <section className="pt-6  dark:bg-black dark:text-gray-100">
      <div className="text-center">
        <h2>
          <span
            className={
              "font-bold pt-6 text-2xl tracking-wider " + styles.borderBottom
            }
          >
            R E C O M E N D A C I O N E S
          </span>
        </h2>
      </div>
      <div className="justify-center text-center pb-10">
        <p>
          M Ú S I C A , L I B R O S , P O D A S T , S E R I E S , P E L I C U L
          A S , E V E N T O S
        </p>
      </div>
      <div className="mx-auto grid justify-center">
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
