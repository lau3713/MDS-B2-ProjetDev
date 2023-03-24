import '../styles/Header.css'

function Header () {
  return (

    <header className='header'>
      <div className='header-logo'>
        <img src='/assets/images/logo.png' height={80} />
      </div>
      <nav className='header-main'>
        <span>
          <a href='/'>Accueil</a>
        </span>
        <span>
          <a href='/restaurants'>Restaurants</a>
        </span>
        <span>
          <a href='/about'>A propos</a>
        </span>
      </nav>
      <div className='header-social-media'>
        <img src='https://via.placeholder.com/50x50' />
        <img src='https://via.placeholder.com/50x50' />
      </div>
    </header>
  )
}

export default Header
