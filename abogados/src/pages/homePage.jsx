import { HeaderComponent } from '../components/headerComponent'
import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'

export const HomePage = () => {
  return (
    <div className='bg-main'>

        <HeaderComponent/>
        <NavbarComponent/>

        <p className='texto_centrado'>“Experiencia y Confianza en Derecho Comercial a tu Servicio”</p>

        <p className='texto_centrado'>“Con más de [X] años de trayectoria en derecho comercial, [Nombre del Abogado] combina conocimiento legal profundo con un enfoque estratégico para empresas. Su compromiso es ofrecer soluciones claras, eficientes y seguras, acompañando a cada cliente en la toma de decisiones clave de su negocio. Confianza, profesionalismo y resultados son la base de su práctica, garantizando asesoramiento jurídico de excelencia en cada caso.”</p>
    </div>
  )
}
