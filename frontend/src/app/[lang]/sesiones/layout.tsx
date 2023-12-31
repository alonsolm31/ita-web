import Image from "next/image";
import img from "../../../../public/tarot.jpg";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div className="flex flex-col items-center">
        <Image
          src={img}
          alt="none provided"
          className="object-cover h-72 sm:h-80 lg:h-170 xl:h-112 2xl:h-128 "
          width={9999}
          height={1}
        />
        <div className="grid justify-center text-center">
          <h1>LECTURAS EVENTOS PRIVADOS Y COLABORACIONES</h1>
          <p>¿Tu audiencia o tus clientes resuenan con el tarot?</p>
          <p>
            ¡Colaboremos juntos! Dejame tu mail y te enviamos toda la
            información.
          </p>
        </div>
      </div>
    </div>
  );
}
