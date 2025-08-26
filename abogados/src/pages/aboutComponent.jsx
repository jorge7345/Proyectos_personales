import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'

export const AboutComponent = () => {
  return (
    <div className='bg-main'>
        <NavbarComponent/>
        <p className='texto_centrado'>“Sobre mí: Experiencia y Pasión que Marcan la Diferencia”</p>

        <p className='texto_centrado'>“Soy [Nombre del Abogado], abogado especializado en derecho comercial, con más de [X] años asesorando a empresas y emprendedores en decisiones estratégicas y legales. Mi enfoque se basa en la claridad, la ética profesional y la búsqueda de resultados concretos para cada cliente.</p>

        <p className='texto_centrado'>Más allá de la abogacía, el tenis ha sido una pasión que me acompaña desde joven. Este deporte me ha enseñado disciplina, estrategia y perseverancia, valores que aplico cada día en mi práctica profesional, asegurando un compromiso constante con la excelencia y la dedicación en cada caso.”</p>
        
    </div>
  )
}
