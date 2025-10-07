import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/CartSlice'
import { useNavigate } from 'react-router-dom'

const CartComp = ({ cart }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <div className='my-10 flex items-center justify-between gap-4 border-b pb-6'>
                <img
                    className='w-[150px] h-[150px] object-cover rounde'
                    src={cart?.image} alt={cart?.title} />

                <div className='w-[500px]'>
                    <div className='text-xl font-medium text-gray-800'> {cart?.title}</div>
                    <div className='text-gray-600 text-sm mt-1 line-clamp-2'>{cart?.description}</div>
                </div>

                <div className='font-bold text-2xl text-blue-950 '>{cart?.price} ₺ <span className='font-semibold text-2xl text-blue-950'>({cart ? cart.quantity : 0})</span></div>

                <button
                    onClick={() => dispatch(removeFromCart(cart?.id))}
                    className='bg-red-500  hover:bg-red-600 transition  text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center'>Ürünü Sil</button>
            </div>


            <button onClick={() => navigate("/")}
                className='mt-4 text-blue-600 underline hover:text-blue-800'>
                Anasayfaya gitmek için tıklayın</button>
        </div>
    )
}

export default CartComp