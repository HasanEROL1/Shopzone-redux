import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { SlBasket } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/CartSlice'
import { useNavigate } from 'react-router-dom'
import Cart from '../../../pages/Cart'

const NavbarRight = () => {

    const dispatch = useDispatch()
    const { carts } = useSelector(state => state.carts)
    const navigate = useNavigate()
    const { itemCount } = useSelector(state => state.carts)

    console.log(carts, "carts")
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, carts])
    return (
        <div className='flex items-center gap-8'>
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input type="text" className='bg-gray-200 outline-none' placeholder="Arama Yapınız..." />
                <BiSearch size={25} />
            </div>
            <AiOutlineHeart size={28} />
            <div onClick={() => navigate("cart")} className='relative flex items-center'>
                <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">{itemCount}
                </span>
                <SlBasket size={28} />
            </div>

        </div >
    )
}

export default NavbarRight
