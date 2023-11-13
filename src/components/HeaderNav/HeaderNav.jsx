import './headerNav.css'
import img from './../../assets/icongrab.png'

const HeaderNav = () => {
    return (
        <div className="headerNav">
            <img src={img} alt="grab" className="iconHeadernNav" />
            <div className="contentNavBody">
                <div className="routeNav">
                    <a href="" className="route">LOREM IPSUM</a>
                    <a href="" className="route">LOREM IPSUM</a>
                    <a href="" className="route">LOREM IPSUM</a>
                    <a href="" className="route">LOREM IPSUM</a>
                    <a href="" className="route">LOREM IPSUM</a>
                    <a href="" className="route">LOREM IPSUM</a>
                </div>
                <div className="bodyNav">
                    <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                    <h1 className="bodyNavTitle variant">LOREM IPSUM DOLOR &nbsp;</h1>
                    <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                    <button className="btnStandar bodyNavButton">WHAT IS NEXT</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav
