import mod from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return <nav className={mod.nav}>
    <div className={mod.item}><NavLink to='profile'>Profile</NavLink></div>
    <div className={mod.item}><NavLink to='dialogss'>Messages</NavLink></div>
    <div className={mod.item}><NavLink to='news'>News</NavLink></div>
    <div className={mod.item}><NavLink to='music'>Music</NavLink></div>

    <div className={mod.item}><NavLink to='setting'>Settings</NavLink></div>

  </nav>
}

export default Navbar;