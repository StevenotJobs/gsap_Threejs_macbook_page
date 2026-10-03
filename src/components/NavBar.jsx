import NavLinks from './constants/NavBar'

const NavBar = () => {
  return (
   <header>
    <nav>
        <img src="/logo (1).svg" alt="Apple logo" />

      <ul>
        {NavLinks.map(({ label}) => (
                <li key={label}>
                    <a href={label}>{label}</a>
                </li>
            ))}
      </ul>

      <div className="flex-center gap-3">
        <button>
            <img src="/search.svg" alt="Search" />
        </button>
        <button>
            <img src="/cart (1).svg" alt="Cart" />
        </button>
      </div>
    </nav>
   </header>
  )
}

export default NavBar