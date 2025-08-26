import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'

export const ContactPage = () => {
  return (
    <div className='bg-main'>
        <NavbarComponent/>
        <p className='texto_centrado'>Contacto y Consultas</p>

        <p className='texto_centrado'>“Estoy a tu disposición para consultas y asesoramiento en derecho comercial. Completá el formulario o utilizá los datos de contacto a continuación para agendar una reunión y recibir atención personalizada.”</p>

        <p className='texto_centrado'>información de contacto:</p>
        <ul>
            <li>Teléfono: +54 11 1234-5678</li>
            <li>Email: pepito@pepito.com</li>
            <li>Dirección: Av. Profesional 123, Ciudad, País</li>
        </ul>
        <p className='texto_centrado'>Tu confianza es importante. Me comprometo a responder con rapidez y profesionalismo para ayudarte a encontrar la mejor solución legal para tu empresa.”</p>
    </div>
  )
}
