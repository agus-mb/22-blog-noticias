import logo from '../images/logo.svg'
import {Navbar} from './Navbar'

export const Header = () => {
  return (
<header className="bg-red-500 flex place-content-between items-center">
   <img src={logo} alt="" />
   <Navbar/>
    </header>
  )
}

