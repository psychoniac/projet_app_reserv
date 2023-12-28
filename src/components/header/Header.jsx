import { useState } from 'react';
import Menu from '../menu/Menu';
import './header.scss';

function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);

    const toggleMenu = () => {
        setMenuOuvert(!menuOuvert);
    };
    return (
        <>
            <header className='header__container'>
                <div className='header__title'>
                    <h1>Reservez à la Rochelle</h1>
                    <h2>
                        Choisissez votre activité on vous propose le meilleur
                    </h2>
                </div>
                <div
                    className='menu-icon'
                    onClick={toggleMenu}
                >
                    <div className='menu-icon__line' />
                    <div className='menu-icon__line' />
                    <div className='menu-icon__line' />
                </div>
            </header>
            <Menu
                estOuvert={menuOuvert}
                toggleMenu={toggleMenu}
            />
        </>
    );
}

export default Header;
