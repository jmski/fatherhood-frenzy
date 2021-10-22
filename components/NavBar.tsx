import Link from 'next/link';
import Image from 'next/image';

const menuData = [
  { title: "Portfolio", link: "https://jmgelua.ca" },
  { title: "Blog", link: "#blog" },
  { title: "Course", link: "#course" },
  { title: "About", link: "#about" },
];

const NavBar = () => {

  return (
    <nav className="h-20 flex justify-between z-10 sticky t-0 px-5 bg-gradient-to-r from-green-300 via-blue-300 to-indigo-400">
      <Link href="/">
        <a><Image alt="Fatherhood Frenzy Logo" className="" width="235" height="80" src="/images/ff-banner-black-small.png"/></a>
      </Link>
      <div className="hidden md:flex items-center gap-10">
        {menuData.map((item, index) => (
          <Link href={item.link} key={index}>
            <a className="transition duration-200 ease-in-out border-b-2 border-transparent hover:border-indigo-700 hover:text-white">
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  ) 
}

export default NavBar;