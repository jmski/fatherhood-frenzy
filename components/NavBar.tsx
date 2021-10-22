import Link from 'next/link';
import Image from 'next/image';

const menuData = [
  { title: "about", link: "/about" },
  { title: "posts", link: "/blog" },
  { title: "merch", link: "/merch" },
  { title: "discord", link: "https://discord.gg/XKBGx3By9w" },
  { title: "youtube", link: "https://www.youtube.com/channel/UCIL_Pi0vFkwUeF70sSG1gcA" },

];

const NavBar = () => {

  return (
    <nav className="h-20 flex justify-between z-10 sticky t-0 px-5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300">
      <Link href="/">
        <a><Image alt="Fatherhood Frenzy Logo" className="" width="235" height="80" src="/images/ff-banner-black-small.png"/></a>
      </Link>
      <div className="hidden md:flex items-center gap-10">
        {menuData.map((item, index) => (
          <Link href={item.link} key={index}>
            <a className="font-medium transition duration-200 ease-in-out border-b-2 border-transparent hover:border-green-400 hover:text-white">
              {item.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  ) 
}

export default NavBar;