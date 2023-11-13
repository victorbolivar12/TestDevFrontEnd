import './sectionFive.css'
import img from './../../assets/Join Us.png'

const SectionFive = () => {
    return (
        <div className="fiveCard" >
            <div className="formFiveCard">
                <h1>JOIN US.</h1>
                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h2>
                <form className="form">
                    <div className='form-section'>
                        <input type="text" className="inputFormBasic" placeholder="Name" />
                        <input type="text" className="inputFormBasic" placeholder="Username" />
                    </div>
                    <div className='form-section'>
                        <input type="text" className="inputFormBasic" placeholder="Phone" />
                        <input type="text" className="inputFormBasic" placeholder="Email" />
                    </div>
                    <input type="text" className="inputFormBasic width" placeholder="Departamen"/>
                    <textarea className="inputFormBasic textarea" placeholder="Mensajse" ></textarea>
                    <button className="btnStandar">I’M IN</button>
                    <p className='form-description'> 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    </p>
                </form>

            </div>
        </div>
    )
}

export default SectionFive;
