import react, {useState} from 'react'
import { FaHamburger, FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <div className='navbar'>
      <div className='container'>
        <FaHamburger size={35} style={{marginLeft: '40px', cursor: 'pointer'}} />
      </div>
      <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
        <li>Ho<span className='last-half'>me</span></li>
        <li>Ord<span className='last-half'>ers</span></li>
        <li>Me<span className='last-half'>nu</span></li>
        <li>Deliv<span className='last-half'>ery</span></li>
        <li>Cont<span className='last-half'>act</span></li>
      </ul>
      <div className='hamburger' onClick={handleNav}>
        {nav ? (<FaTimes size={25} style = {{marginRight: '40px', cursor: 'pointer', color: 'white'}} />) : ( <FaBars size={25} style = {{marginRight: '40px', cursor: 'pointer'}} />)}
      </div>
    </div>
  )
}

export default Navbar;