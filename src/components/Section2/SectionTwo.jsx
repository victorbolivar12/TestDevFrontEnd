import './SectionTwo.css'
import img1 from './../../assets/pic2.png'
import img2 from './../../assets/pic3.png'
import img3 from './../../assets/pic4.png'

const SectionTwo = () => {
  return (
    <div class="secondCard">
            <h1>Lorem ipsum</h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <div class="secondCardContent">
                <div class="card">
                    <img className ="cardImage" src={img1} alt="pic2" />
                    <button class="btnCard">LOREM IPSUM</button>
                </div>
                <div class="card">
                    <img className ="cardImage" src={img2} alt="pic2" />
                    <button class="btnCard">LOREM IPSUM</button>
                </div>
                <div class="card">
                    <img className ="cardImage" src={img3} alt="pic2" />
                    <button class="btnCard">LOREM IPSUM</button>
                </div>
            </div>
            <button class="btnSecondCard">LEARN MORE</button>
        </div>
  )
}

export default SectionTwo;
