import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'

export const ServicesPage = () => {
  return (
    <div className='bg-main'>
      <NavbarComponent/>    
      <p className='texto_centrado'>“Servicios Profesionales en Derecho Comercial”</p>

      <p className='texto_centrado'>“Ofrezco soluciones legales especializadas para empresas y emprendedores, con un enfoque práctico y estratégico que garantiza seguridad y eficiencia en cada operación.</p>

      <p className='texto_centrado'>Mis servicios incluyen:</p>
      <ul>
        <li>Asesoramiento en contratos comerciales y acuerdos societarios.</li>
        <li>Constitución y restructuración de empresas.</li>
        <li>Gestión de conflictos comerciales y resolución de disputas.</li>
        <li>Cumplimiento normativo y regulatorio para negocios.</li>
      </ul>
      <p className='texto_centrado'>Cada servicio se brinda con un compromiso de excelencia y transparencia, adaptado a las necesidades específicas de cada cliente para impulsar el crecimiento y la estabilidad de su empresa.”</p>
    
    </div>
  )
}
