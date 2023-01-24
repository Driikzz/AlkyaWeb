import React, {useState, useEffect} from 'react'
import "./Navbar.css"
export default function Navbar() {

    const[toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur ] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])



    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className='list'>
                    <img className='Logo' src="./Logo.png" alt="bug" width={40} height={40}></img>
                    <li className='items'>News</li>
                    <li className='items'>Shop</li>
                    <li className='items'>Teams</li>
                    <li className='items'>About us</li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className="btn">+</button>
        </nav>
    )
}