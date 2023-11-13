import './sectionThree.css'
import img from './../../assets/pic5.png'

const SectionThree = () => {
  return (
    <div class="threeCard">
      <div class="threeCardContent">
        <p class="textCardThree">
          Lorem ipsum
          dolor sit
          amet,
          consetetur
        </p>
        <button className="btnThreeCard white-color">LOREM IPSUM DOLOR SIT</button>
        <button className="btnThreeCard">LOREM IPSUM DOLOR SIT AMET</button>
      </div>
      <img className="threeCardImage" src={img} alt="pic5" />
    </div>
  )
}

export default SectionThree