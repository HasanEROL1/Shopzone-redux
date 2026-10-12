
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/CartSlice'
import {  useNavigate } from 'react-router-dom'


const CartComp = ({ cart }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <div className='my-10 flex items-center justify-between gap-4 border-b pb-6'>
        <div className="flex flex-col items-center" onClick={() => navigate(`/products/${cart?.id}`)}>
          <img src={cart?.image} alt={cart?.title} className="w-[150px] object-cover rounded" />
          <h3 className="text-sm underline text-blue-500 text-center p-2 hover:scale-105">Ürün Detayına Gitmek İçin Tıklayınız</h3>
        </div>

        <div className='w-[500px]'>
          <div className='text-xl font-medium text-gray-800'> {cart?.title}</div>
          <div className='text-gray-600 text-sm mt-1 line-clamp-2'>{cart?.description}</div>
        </div>

        <div className='font-bold text-2xl text-blue-950 '>{cart?.price} ₺ <span className='font-semibold text-2xl text-blue-950'>({cart ? cart.quantity : 0})</span></div>

        <button
          onClick={(e) =>{ 
            e.stopPropagation()
            dispatch(removeFromCart(cart?.id))}}
          className='bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center hover:bg-red-600 transition duration-300'>Ürünü Sil</button>
      </div>

    
    </div>
  )
}

export default CartComp