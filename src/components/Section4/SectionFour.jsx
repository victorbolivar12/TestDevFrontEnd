import './SectionFour.css'
import img from '../../assets/pic1.png'

const SectionFour = () => {
    return (
        <div class="fourCard">
            <h1>Latest videos</h1>
            <div class="fourCardContent">
                <div class="fourCardFile">
                    <i className="fa-solid fa-play play-video"></i>
                    <img className='video' src={img} alt="file" />
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div class="fourCardFile">
                    <i className="fa-solid fa-play play-video"></i>
                    <img className='video' src={img} alt="file" />
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div class="fourCardFile">
                    <i className="fa-solid fa-play play-video"></i>
                    <img className='video' src={img} alt="file" />
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div class="fourCardFile">
                    <i className="fa-solid fa-play play-video"></i>
                    <img className='video' src={img} alt="file" />
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div class="fourCardFile">
                    <i className="fa-solid fa-play play-video"></i>
                    <img className='video' src={img} alt="file" />
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div class="fourCardFile">
                    <i className="fa-solid fa-play play-video"></i>
                    <img className='video' src={img} alt="file" />
                    <p >
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
            </div>
            <button class="btnFourCard">VIEW ALL</button>
        </div>
    )
}

export default SectionFour;
