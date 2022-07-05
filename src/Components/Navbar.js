import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdMonitor } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div style={{
                paddingLeft: "20px"
            }}>Logo</div>
            <div className='nav-btns'>
                <Link to="/">
                    <AiOutlineHome size={30} className="icons" />
                </Link>
                <Link to="/videos">
                    <MdMonitor size={30} className="icons" />
                </Link>

            </div>
        </div>
    )
}

export default Navbar