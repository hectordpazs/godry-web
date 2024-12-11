import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Un poco mas sobre nosotros"
        title=" Nuestra historia"
        id="sobre-nosotros"
      >
        Nuestra empresa surgió en el sur de Chile, donde el clima lluvioso, el tráfico y la falta de transporte público adecuado generan dificultades diarias para los habitantes. Nos dimos cuenta de que había una oportunidad de mejorar la movilidad urbana mediante el uso compartido de vehículos, reduciendo costos, emisiones de CO2 y el tráfico. Así nació GoDry, pensando en quienes necesitan moverse de manera más eficiente y quienes buscan optimizar el uso de sus autos.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="" title="Trabaja con nosotros" id="trabaja-con-nosotros">
        ¿Te gustaría ser conductor? ¡Únete a GoDry!
      </SectionTitle>

      <Faq />
      <Cta />
      <br /><br /><br />
      <SectionTitle
        preTitle="Contactanos"
        title="Haznos saber tus inquietudes"
        id="contacto-soporte"
      >
        Si tienes preguntas o necesitas ayuda, contáctanos a través de:<br/><br />
        Correo electrónico: contacto@godry.app <br/>
        Telefono: +56 9 5034 5751
      </SectionTitle>
    </Container>
  );
}
