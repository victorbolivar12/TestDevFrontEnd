import './nav.css'
import HeaderNav from '../HeaderNav/HeaderNav'
import FooterNav from '../FooterNav/FooterNav'


const Nav = () => {
  return (
    <nav>
      <div className='contentNav'>
        <HeaderNav/>
        <FooterNav/>
      </div>
    </nav>
  )
}

export default Nav
