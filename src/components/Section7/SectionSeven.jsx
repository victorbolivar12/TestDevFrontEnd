import './sectionSeven.css'
import img from './../../assets/Pic7.png'
import img2 from './../../assets/Pic8.png'
import img3 from './../../assets/Pic9.png'

const SectionSeven = () => {
  return (
    <div className='sevenCard'>
        <h1>Lorem ipsum</h1>
            <div className='sevenCard-container'>
                <img className='sevenCard-img' src={img} alt="pci" />
                <img className='sevenCard-img' src={img2} alt="pci" />
                <img className='sevenCard-img' src={img3} alt="pci" />
            </div>
            <div className='icon-container'>
                <i className="fa-solid fa-circle color-white"></i>
                <i className="fa-regular fa-circle color-white" ></i>
                <i className="fa-regular fa-circle color-white"></i>
            </div>
            <button class="btnStandar white-mode">VIEW ALL</button>
    </div>
  )
}

export default SectionSeven
