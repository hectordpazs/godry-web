import {
  LockClosedIcon,
  GlobeAmericasIcon,
  WalletIcon,
  MapPinIcon,
  GlobeAltIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/32.png";
import benefitTwoImg from "../../public/img/15.png";

const benefitOne = {
  title: "Objetivos",
  desc: "Nuestra misión es transformar la movilidad urbana con soluciones eficientes, económicas y sostenibles, impulsando el cambio en las ciudades chilenas.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Conectar pasajeros y conductores de manera eficiente.",
      desc: "Facilitamos la comunicación entre conductores y pasajeros para garantizar viajes rápidos, seguros y a precios competitivos.",
      icon: <LockClosedIcon />,
    },
    {
      title: "Reducir el tráfico y la contaminación con el uso compartido de autos.",
      desc: "Promovemos el uso compartido de vehículos para minimizar el impacto ambiental y contribuir a un futuro más limpio.",
      icon: <GlobeAmericasIcon />,
    },
    {
      title: "Ofrecer una opción económica y sostenible para todos.",
      desc: "Brindamos una alternativa accesible para todos los usuarios, combinando ahorro y compromiso ambiental.",
      icon: <WalletIcon />,
    },
    {
      title: "Expandir nuestra plataforma a más ciudades de Chile.",
      desc: "Nos enfocamos en llevar nuestra solución a más comunidades, mejorando la movilidad en zonas urbanas y rurales.",
      icon: <MapPinIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Misión y Visión",
  desc: "Conoce los principios que guían nuestra empresa y cómo trabajamos para transformar el transporte en Chile.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Visión",
      desc: "Ser la plataforma líder en transporte compartido en Chile, mejorando la movilidad urbana de manera sostenible y accesible.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Misión",
      desc: "Ofrecer una alternativa de transporte más económica, ecológica y segura, conectando conductores y pasajeros a través de una aplicación fácil de usar, promoviendo la reducción del tráfico y la contaminación.",
      icon: <HandRaisedIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
