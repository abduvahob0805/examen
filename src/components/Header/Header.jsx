import './header.css'

function Header() {
  return (
    <div className='container'>
      <header>
        <img src="./Logo.png" alt="" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
