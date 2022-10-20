import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Separator from '../../images/separador-fecha.svg'
import DateEvent from '../../images/fecha.svg'
import Church from '../../images/misa.svg'
import GlassOfWine from '../../images/recepcion.svg'
import Present from '../../images/regalo.svg'
import Envelope from '../../images/sobre.svg'

const links = {
  confirmMessage: "https://api.whatsapp.com/send?phone=6871300611&text=Hola,%20quisiera%20confirmar%20mi%20asistencia%20al%20bautizo%20de%20Alicia.",
  ceremonyLocation: "https://goo.gl/maps/QUGqGU119DHuVeHW8",
  partyLocation: "https://goo.gl/maps/tzJhNJf35igehSVr7",
  giftTable: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51047977"
};

const Content = () => (

  <div className="flex flex-col">
    <div className="flex flex-col md:mx-32 md:px-16">
      <div className="grow flex flex-col items-center justify-center">
        <span className="md:text-7xl text-5xl font-brown-sunflower text-golden my-4">Domingo</span>
        <DateEvent className="my-4 sm:w-3/4 w-[300px]"/>
        <Separator className="my-4"/>
      </div>
      <div className="my-16">
        <div className="flex flex-col items-center justify-center">
          <span className="md:text-7xl text-5xl font-brown-sunflower text-golden">Misa</span>
          <Church className="my-2" />
          <div className="flex flex-col items-center justify-center font-montserrat-regular md:text-xl text-lg">
            <span className="text-center">Parroquia de Nuestra Señora del Rosario</span>
            <span className="text-center">Domingo 20 de Noviembre a las 3:00 PM</span>
            <span className="md:text-lg text-sm text-center">Antonio Norzagaray SN, Centro, 81000 Guasave, Sin.</span>
            <a className="bg-gray mt-2 p-2 text-white rounded-none hover:rounded" target="_blank" rel="noreferrer" href={links.ceremonyLocation}>Ubicación</a>
          </div>
        </div>
      </div>
      <div className="my-16">
        <div className="flex flex-col items-center justify-center">
          <span className="md:text-7xl text-5xl font-brown-sunflower text-golden">Recepción</span>
          <GlassOfWine className="my-2" />
          <div className="flex flex-col items-center justify-center font-montserrat-regular md:text-xl text-lg">
            <span className="text-center">Real del Alva</span>
            <span className="text-center">Domingo 20 de Noviembre a las 5:00 PM</span>
            <span className="md:text-lg text-sm text-center">Justo Sierra 335, Col. Ejidal, 81020 Guasave, Sin.</span>
            <a className="bg-gray mt-2 p-2 text-white rounded-none hover:rounded" target="_blank" rel="noreferrer" href={links.partyLocation}>Ubicación</a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center inline">
      <StaticImage
        loading="lazy"
        placeholder="tracedSVG"
        alt="leaves image"
        src="../../images/ojita.png"
      />
    </div>
    <div className="flex flex-col md:mx-32">
      <div className="flex flex-col items-center justify-center my-8">
        <span className="md:text-7xl text-5xl items-center justify-center font-brown-sunflower text-golden">RSVP</span>
        <div className="flex flex-col items-center justify-center font-montserrat-regular md:text-xl text-lg">
          <span className="text-center">Nos encantaría compartir este día contigo.</span>
          <span className="text-center">Por favor ayudanos a confirmar tu asistencia.</span>
          <a className="bg-gray my-2 p-2 text-white rounded-none hover:rounded" target="_blank" rel="noreferrer" href={links.confirmMessage}>Confirmar</a>
          <span className="text-center">Es muy importante que confirmes tu asistencia antes del día 15 de Nov.</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        <span className="md:text-7xl text-5xl font-brown-sunflower text-golden">Regalos</span>
        <div className="flex flex-col items-center justify-center font-montserrat-regular md:text-xl text-lg">
          <span className="text-center">El mejor regalo es tu presencia, pero si quieres obsequiarle algo a nuestra pequeña te damos algunas opciones.</span>
          <Present className="my-2"/>
          <p>Liverpool: 51047977</p>
          <a className="bg-gray my-2 p-2 text-white rounded-none hover:rounded" target="_blank" rel="noreferrer" href={links.giftTable}>Da click para verla</a>
          <br/>
          <Envelope className="my-2"/>
          <span className="text-center">En recepción tendremos sobres por si te gustaría hacer un regalo en efectivo.</span>
        </div>
      </div>
    </div>
  </div>
);

Content.propTypes = {
  siteTitle: PropTypes.string,
}

Content.defaultProps = {
  siteTitle: ``,
  backgroundImage: ``
}

export default Content