import '../styles/CardStyle.css'

function Footer() {
    return ( 
        <footer className='footer'>
            <div className='footer-logo'>
                <img src="https://via.placeholder.com/100x100"/>
            </div>
            <nav className='footer-main'>
                <a href="#Accueil">Accueil</a>
                <a href="#Apropos">À propos</a>
                <a href="#Contact">Contact</a>
            </nav>
            <div className='footer-social-media'>
            <img src="https://via.placeholder.com/50x50"/>
            <img src="https://via.placeholder.com/50x50"/>
            </div>
        </footer>
     );
}

export default Footer;