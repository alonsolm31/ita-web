import styles from "./CeremoniesInformation.module.css";

interface Paragraphs {
  data: {
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
    paragraph_4: string;
    paragraph_5: string;
    paragraph_6: string;
    paragraph_7: string;
    paragraph_8: string;
  };
}
export default function CeremoniesInformation({ data }: Paragraphs) {
  data.paragraph_1 =
    "Volver a la raíz nos ayuda a regresar a la vida al origen, el cacao nos conecta con la fuerza más creativa y expansiva que el CORAZÓN.";
  data.paragraph_2 =
    "Sentarse en un círculo, sentir escuchar los latidos del corazón es la magia más pura que le pueden regalar al alma. Vivimos muy desconectados de nosotros por la monotonía de la vida, las rutinas, el sistema y porque así lo hemos querido elegir.";
  data.paragraph_3 =
    "Estar en una Ceremonía de Cacao frente a los ojos de otras personas te abre el corazón, beber el cacao es volver a las raíces, la mente, el corazón, el espíritu se entrelazan en armonía con tu entorno. Hacer Ceremonía de Cacao es un ritual con intención de experimentar y conectar con su espíritu y sanar tu alma y corazón. El cacao era considerado una bebida sagrada por los antiguos pueblos mesoamericanos, inclusive era oro para ellos, uno de los beneficios era un fin medicinal ya que se creía que tenía propiedades curativas.";
  data.paragraph_4 = "¿Cómo se prepará?";
  data.paragraph_5 =
    "Al cacao hay que tratarlo como un niño cantarle mientras lo preparas, rezarle e intencionar para que te ayude en algún proceso que estés viviendo. Esta bebida se prepara usando los granos de cacao crudo o en barras, agua y especias como canela y vainilla, el proceso debe ser lento entrando en un profundo estado meditativo para conectar con el espíritu del cacao.";
  data.paragraph_6 = "¿Qué pasa durante una Ceremonía de Cacao?";
  data.paragraph_7 =
    "Siempre siempre debemos ponerle una intención a las ceremonias en general a la vida. La bebida se sirve en tazas a quienes o quien desee hacer la ceremonia y ahí comienza toda la magia porque tu espíritu tiene un encuentro como yo le llamo con el abuelo, se bebe lentamente para que se adentre a tu cuerpo con suavidad, comienzas a tener esa conversación con el cacao y te muestra desde el corazón aquello que deseas sanar o reconectar.";
  data.paragraph_8 = "ES MAGIA PURA";

  return (
    <section className="dark:bg-black dark:text-gray-100 py-2">
      <div
        className={
          "flex flex-col justify-center p-8 text-center " + styles.letterSpacing
        }
      >
        <p className={"tmt-6  mx-12 mb-8 text-base " + styles.fontSize}>
          {data.paragraph_1}
        </p>
        <p className={"tmt-6 mx-12 mb-8 text-base " + styles.fontSize}>
          {data.paragraph_2}
        </p>
        <p className={"tmt-6 mx-12 mb-8 text-base " + styles.fontSize}>
          {data.paragraph_3}
        </p>
        <p
          className={"tmt-6 font-bold mx-12 mb-8 text-base " + styles.fontSize}
        >
          {data.paragraph_4}
        </p>
        <p className={"tmt-6 mx-12 mb-8 text-base " + styles.fontSize}>
          {data.paragraph_5}
        </p>
        <p
          className={"tmt-6 font-bold mx-12 mb-8 text-base " + styles.fontSize}
        >
          {data.paragraph_6}
        </p>
        <p className={"tmt-6 mx-12 mb-8 text-base " + styles.fontSize}>
          {data.paragraph_7}
        </p>
        <p
          className={"tmt-6 font-bold mx-12 mb-8 text-base " + styles.fontSize}
        >
          {data.paragraph_8}
        </p>
      </div>
    </section>
  );
}
