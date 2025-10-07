import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    const increment = () => {
        if (quantity < productDetail?.rating?.count)
            setQuantity(quantity + 1)
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
                <div className='my-2 text-2xl text-red-500'>Rating: {productDetail?.rating?.rate}</div>
                <div className='my-2 text-2xl text-red-500'>Count: {productDetail?.rating?.count}</div>
                <div className='font-bold text-5xl '>{productDetail?.price}<span className='text-sm'>₺</span>
                    <div className='flex items-center gap-5 my-4'>
                        <div onClick={decrement}
                            className='text-4xl cursor-pointer'>-</div>
                        <input className='w-16 text-center text-2xl font-bold '
                            type="number" value={quantity}
                            onChange={e => {
                                const value = Number(e.target.value);
                                // 0 ile count arasında sınırlıyoruz
                                if (value >= 0 && value <= productDetail?.rating?.count) {
                                    setQuantity(value);
                                }
                            }}
                        />

                        <div onClick={increment}
                            className='text-4xl cursor-pointer'>+</div></div>
                </div>

                <div onClick={addBasket}
                    className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Sepete Ekle</div>
            </div>
        </div>

    )
}

export default DetailComp