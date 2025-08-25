import { NavbarComponent } from "../components/navbarComponent"

export const ContactPage = () => {
  return (
    <div>
        <NavbarComponent/>
        <p>Contacto y Consultas</p>

        <p>“Estoy a tu disposición para consultas y asesoramiento en derecho comercial. Completá el formulario o utilizá los datos de contacto a continuación para agendar una reunión y recibir atención personalizada.”</p>

        <p>información de contacto:</p>
        <ul>
            <li>Teléfono: +54 11 1234-5678</li>
            <li>Email: pepito@pepito.com</li>
            <li>Dirección: Av. Profesional 123, Ciudad, País</li>
        </ul>
        <p>Tu confianza es importante. Me comprometo a responder con rapidez y profesionalismo para ayudarte a encontrar la mejor solución legal para tu empresa.”</p>
    </div>
  )
}
