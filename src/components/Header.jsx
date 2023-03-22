import '../styles/CardStyle.css'

function Header() {
    return (
         
        <header className='header'>
            <div className='header-logo'>
                <img src="/assets/images/logo.png" height={50}/>
            </div>
            <nav className='header-main'>
                <span>
                <a href="#Accueil">Accueil</a>
                </span>
                <span>
                <a href="#Apropos">À propos</a>
                </span>
                <span>
                <a href="#Contact">Contact</a>
                </span>
            </nav>
            <div className='header-social-media'>
            <img src="https://via.placeholder.com/50x50"/>
            <img src="https://via.placeholder.com/50x50"/>
            </div>
        </header>
     );
}

export default Header;