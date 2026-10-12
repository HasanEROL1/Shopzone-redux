import { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { SlBasket } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/CartSlice'
import { useNavigate } from 'react-router-dom'



const Header = () => {
  const dispatch = useDispatch()
  const { carts } = useSelector(state => state.carts)
  const navigate = useNavigate()
  const { itemCount } = useSelector(state => state.carts)
  const [isLiked, setIsliked] = useState(false)

 
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, carts])
  return (
    <div className='flex justify-between p-3'>
      <h1 className="text-6xl font-extrabold text-black/90cons cursor-pointer" onClick={() => navigate("/")}>ShopZone</h1>
         <div className='flex items-center gap-8'>
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input type="search" className='bg-gray-200 outline-none hover:ring-2 hover:ring-blue-500' placeholder="Arama Yapınız..." />
                <BiSearch className="text-2xl hover:text-blue-500 transition-colors " />
            </div>
            <div className='cursor-pointer' onClick={() => setIsliked(!isLiked)}>
              {isLiked ? (<AiFillHeart size={28} className='text-red-500 transition-colors'/>):(  <AiOutlineHeart size={28} className='hover:text-red-500 transition-colors'/>)
              }
            
            </div>
            
            <div onClick={() => navigate("cart")} className='relative flex items-center'>
                <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">
                  {itemCount}
                </span>
                <SlBasket size={28} />
            </div>

        </div >
    </div>
  )
}

export default Header