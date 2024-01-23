import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import styles from "./Hero.module.css";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
    paragraph_4: string;
    paragraph_5: string;
    paragraph_6: string;
    paragraph_7: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  data.paragraph_1 =
    "Hola, soy Ita quien guía y se deja guiar por cada encuentro con hermosos seres en esta tierra.";

  data.paragraph_2 =
    "Nací en Oaxaca, un maravilloso estado del hermoso país de México, entre montañas, valles, bosques y nubes. Soy una Mujer medicina conectada con el misterio del cielo y las profundidades de la tierra. Estoy entrelazada en esta vida y otras con la energía del Tarot, el lenguaje del Universo (Astrología) y la curación del alma a través de las plantas.";
  data.paragraph_3 =
    "Estoy enamorada de la naturaleza de los ciclos de ella y los humanos, encontrándonos entre portales que nos transforman. Honro mucho mis orígenes ancestrales porque me recuerdan la sintonía y el abrazo que tenemos con la Madre Tierra. Me gustan los abrazos del viento, los baños de aguas salvajes de las lluvias y los besos del bosque cuidando mis sueños.";
  data.paragraph_4 =
    "La unión que tengo entre la Meditación y las Ceremonias me llevan a viajes de transformación profunda donde mi abuela salvaje me permite ayudar, sanar e interpretar a través del tarot y las otras herramientas que he ido adquiriendo.";
  data.paragraph_5 = "SOY ALQUIMIA PARA TU PROCESO DE VIDA.";
  data.paragraph_6 =
    "Que gozo y honro que mi alma eligió vivir en esta tierra para nutrirse de ella y de todos los brujitos y seres de luz que habitan y me acompañan en este viaje profundo.";
  data.paragraph_7 =
    "Gracias y pongo mi energía para asistir a quienes resuenen con mi esencia.";

  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
        <div
          className={
            "flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80  xl:h-112 2xl:h-128 " +
            styles.heightLg
          }
        >
          <Image
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || "none provided"
            }
            className={
              "object-contain h-72 sm:h-80  xl:h-112 2xl:h-128 " +
              styles.heightLg
            }
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          <HighlightedText
            text={data.title}
            tag="h1"
            className={
              "text-5xl leading-none sm:text-6xl mb-8 " + styles.fontFamily
            }
            color="dark:text-violet-400"
          />

          <HighlightedText
            text={data.paragraph_1}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={data.paragraph_2}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={data.paragraph_3}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={data.paragraph_4}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={data.paragraph_5}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={data.paragraph_6}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={data.paragraph_7}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={"TE AMO"}
            tag="p"
            className="tmt-6 text-base"
            color="dark:text-violet-400"
          />
          <HighlightedText
            text={"ITA"}
            tag="p"
            className="tmt-6 mb-2 text-base"
            color="dark:text-violet-400"
          />
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
