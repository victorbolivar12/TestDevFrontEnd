import './footer.css'
import img from './../../assets/icongrab.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <p className='footer-description'>
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna
        </p>
        <img className='footer-img' src={img} alt="prb_header" />
        <p className='footer-copyright'>
            All rights reserved to
            Lorem Ipsum© 2022
        </p>
    </footer>
  )
}

export default Footer