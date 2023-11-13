import './sectionSix.css'
import img from './../../assets/Pic6.png'

const SectionSix = () => {
  return (
    <div class="sixCard">
      <img className='background-img' src={img} alt="background"/>
      <div className='content'>
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>
        <button class="btnStandar">VIEW ALL</button>
      </div>

    </div>
  )
}

export default SectionSix;
