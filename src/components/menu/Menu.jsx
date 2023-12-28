import './menu.scss';

function Menu({ estOuvert, toggleMenu }) {
    return (
        <nav className={`menu ${estOuvert ? 'ouvert' : ''}`}>
            <ul>
                <li>Accueil</li>
                <li>Contactez nous</li>
                <li>A propos</li>
            </ul>
        </nav>
    );
}

export default Menu;
