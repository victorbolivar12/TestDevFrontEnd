import './footerNav.css'

const FooterNav = () => {
    return (
        <div className="footerNav">
            <div className="footerContenTextNav">
                <p>Lorem ipsum dolor sitamet, consetetur</p>
            </div>
            <div className="footerContenTimeNav">
                <div className="blockTime">
                    <span>170</span>
                    <span className="blockSpan">days</span>
                </div>
                <hr className='divider'/>
                <div className="blockTime">
                    <span>13</span>
                    <span className="blockSpan">Hour</span>
                </div>
                <hr className='divider'/>
                <div className="blockTime">
                    <span>39</span>
                    <span className="blockSpan">Minutes</span>
                </div>
                <hr className='divider'/>
                <div className="blockTime">
                    <span>29</span>
                    <span className="blockSpan">Seconds</span>
                </div>
            </div>
        </div>
    )
}

export default FooterNav

