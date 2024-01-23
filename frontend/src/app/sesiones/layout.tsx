import Image from "next/image";
import img from "../../../public/tarot.jpg";
import Script from "next/script";
import styles from "./layout.module.css";
import SessionsForm from "../components/SessionsForm";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-10">
      {children}
      <div className="flex flex-col items-center">
        <Image
          src={img}
          alt="none provided"
          className={"object-cover lg:h-170 xl:h-112 2xl:h-128 " + styles.smH80}
          width={9999}
          height={1}
        />
        <div className="py-6 grid justify-center text-center">
          <h1 className={"py-6 " + styles.title}>
            LECTURAS EVENTOS PRIVADOS Y COLABORACIONES
          </h1>
          <p className={styles.subTitle}>
            ¿Tu audiencia o tus clientes resuenan con el tarot?
          </p>
          <p className={styles.subTitle}>
            ¡Colaboremos juntos! Dejame tu mail y te enviamos toda la
            información.
          </p>
        </div>
        <SessionsForm />
      </div>
    </div>
  );
}
