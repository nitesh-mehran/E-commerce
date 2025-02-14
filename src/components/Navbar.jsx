import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";


const Navbar = ({ inputtext, setInputtext }) => {
   const { cart } = useSelector((state) => state.allcards);

   const inputhandler = (e) =>{
      setInputtext(e.target.value.toLowerCase())
    }
    
  return (
    <nav className="flex  justify-around bg-blue-950 text-white  py-2 sticky top-0 z-1">
        <div className="logo">
           <span className='font-bold text-xl mx-9 ' >Nitesh.<span className='text-sm'>in</span></span>
        </div>
        <input type="search"  id="search" className="w-[400px] bg-white text-gray-800 border-0 outline-0 px-2 rounded" placeholder="Search Now" onChange={inputhandler} value={inputtext} />
        
     <ul className="flex gap-8 mx-9 my-1 ">
        <li className= 'cursor-pointer hover:font-bold transition-all '><Link className='text-white' to='/'>ALL PRODUCT</Link></li>
        <li className= 'cursor-pointer hover:font-bold transition-all '> <Link className='text-white text-2xl flex' to='/addtocart'> <BsFillCartFill /> <span className='text-lg'> {cart.length}</span></Link> </li>
     </ul>
    </nav>
  )
}
export default Navbar