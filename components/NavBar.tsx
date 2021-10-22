import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="h-10 bg-green-300">
      <div className="flex flex-row flex-nowrap items-align px-5">
        <Link href="/">
          <a><img className="" src="/images/ff_logo_32x32.png"/>
          </a>
        </Link>
        <span className="text-2xl font-bold pl-5">FATHERHOOD FRENZY</span>
        
      </div>
    </nav>
  ) 
}

export default NavBar;