import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/CartSlice'
import CartComp from '../components/cart/CartComp'
import { BiLeftArrowAlt,BiRightArrowAlt } from 'react-icons/bi'
import { FaShoppingBag } from 'react-icons/fa'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

  console.log(carts, totalAmount, itemCount, "carts")

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>
      {
        carts.length > 0 ?
          <div>
            {
              carts?.map((cart, i) => (
                <CartComp key={i} cart={cart} />

              ))
            }

            <div className='flex items-center justify-end text-2xl mt-5  pt-2'>TOPLAM TUTAR : <span className='font-bold text-blue-950 text-3xl ml-2'>{totalAmount.toFixed(2)} ₺</span></div>
          </div> :
           <div className="flex flex-col items-center justify-center gap-3 mt-10" onClick={() =>  navigate("/")}>
          <h1 className="bg-gray-100 text-red-600 animate-pulse">!! <span className="text-2xl text-red-600">Sepetiniz Boş</span> !!</h1>
         
          <h3 className="text-5xl text-zinc-700 ">Ürün Eklemek İçin Tıklayınız... </h3>
          <span className= "text-6xl text-red-500 animate-bounce" style={{ animation: "bounce 2.4s infinite" }}><FaShoppingBag/></span>
         
        </div>
      }
      <div className='flex items-center  justify-center gap-1 mt-10'>
        <BiRightArrowAlt className= "bg-red-300 text-sm text-zinc-100 shadow-sm" />
        <button onClick={() => navigate("/")}
          className='text-blue-600  px-3 py-4 cursor-pointer hover:underline hover:text-blue-800 transition duration-300'>
            Anasayfaya gitmek için tıklayınız
        </button>
         <BiLeftArrowAlt className= "bg-red-300 text-sm text-zinc-100 shadow-sm" />
      </div>
    </div>
  )
}

export default Cart 