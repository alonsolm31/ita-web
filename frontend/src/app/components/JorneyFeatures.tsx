import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";
import styles from "./JorneyFeatures.module.css";
interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
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

function JorneyFeature({
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
    <div className="flex flex-col items-center p-4">
      <Image
        src={imgUrl || ""}
        alt={"none provided"}
        className="object-contain h-72 sm:h-80  xl:h-112 2xl:h-128 "
        width={600}
        height={600}
      />
      <h3 className={"my-3 text-3xl " + styles.fontFamily}>{title}</h3>
      <div className="space-y-1 leading-tight my-6">
        <p>{description}</p>
      </div>
      {showLink && url && text && (
        <div>
          <Link
            href={url}
            target={newTab ? "_blank" : "_self"}
            className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600"
          >
            {text}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function JorneyFeatures({ data }: FeaturesProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100 m:py-12 lg:py-4">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
        <p className="dark:text-gray-400">{data.description}</p>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.feature.map((feature: Feature, index: number) => (
          <JorneyFeature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
