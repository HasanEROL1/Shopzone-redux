import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { FaStar } from 'react-icons/fa';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

const decrement = () => {
    if (quantity === "" || quantity > 1){
      setQuantity(Number(quantity > 0 ? quantity:1) -1)
  }
}

  const increment = () => {
    if (quantity === ""){
      setQuantity(1)
    }
  else  if (quantity < productDetail?.rating?.count)
      setQuantity( Number(quantity + 1))
  }

  const addBasket = () => {
    dispatch(addToCart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity }))
  }


  return (
    <div className='flex gap-10 my-10'>
      <img
        className='w-[700px] h-[500px] object-cover'
        src={productDetail?.image} alt="" />
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-2 text-2xl '>{productDetail?.description}</div>
        <div className='my-2 text-2xl text-red-500 flex'>Rating: <FaStar className='text-yellow-400 text-xs' /> {productDetail?.rating?.rate}</div>
        <div className='my-2 text-2xl text-red-500'>Count: {productDetail?.rating?.count}</div>
        <div className='font-bold text-5xl '>{productDetail?.price}<span className='text-sm'>₺</span>


          <div className='flex items-center gap-5 my-4'>
            <div onClick={decrement}
              className='text-4xl cursor-pointer'>-</div>
            <input className='w-16 text-center text-xl font-bold border border-black/20 rounded-md '
              type="number" value={quantity}
              onChange={e => {
                const value = Number(e.target.value);
                // 1 ile count arasında sınırlıyoruz
                if (value >= 1 && value <= productDetail?.rating?.count) {
                  setQuantity(value);
                  
                }
                else if (e.target.value === ""){
                  setQuantity("")
                }
              }}
            />

            <div onClick={increment}
              className='text-4xl cursor-pointer'>+</div></div>
        </div>

        <div onClick={addBasket}
          className="w-full h-16 bg-gray-200  my-4  rounded-md cursor-pointer flex items-center justify-center font-bold text-xl hover:bg-gray-300 transition-all duration-300">
          Sepete Ekle
        </div>
      </div>
    </div>

  )
}

export default DetailComp