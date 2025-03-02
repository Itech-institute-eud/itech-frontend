import Link from 'next/link'


import MainLogo from "../../../public/icons/Logo";



const links = [
  {
    title:"Home",
    link:'/'
  },
  {
    title:"About Us",
    link:'/aboutus'
  },
  {
    title:"Teachnical cources",
    link:'/teachnical-cources'
  },
  {
    title:"Iteach soulutions",
    link:'/iteach-solutions'
  },
  {
    title:"IT CERTIFIED MILITARY LIST",
    link:'/it-certificates-military-list'
  },
  {
    title:"CONTACT",
    link:'/contact'
  },
  
  
]


const Navbar = ()=>{


  return (
    <nav className=" bg-black  h-[124px] p-[24px] flex justify-center items-center top-0 sticky">
      <div className="w-full justify-center flex items-center">
        <div>
        <MainLogo/>
        </div>
        <div className=" flex w-full justify-evenly items-center">
          {
            links.map((item,i) => (<Link className="text-white uppercase font-semibold" key={i} href={item.link}>{item.title}</Link>))
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;




