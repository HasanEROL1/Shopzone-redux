import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/CartSlice'
import CartComp from '../components/cart/CartComp'

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
                carts.length > 0 ? <div>
                    {
                        carts?.map((cart, i) => (
                            <CartComp key={i} cart={cart} />
                        ))
                    }
                    <div className='flex items-center justify-end text-2xl mt-10 border-t pt-6'>TOPLAM TUTAR : <span className='font-bold text-blue-950 text-3xl ml-2'>{totalAmount.toFixed(2)} ₺</span></div>
                </div> :
                    <div>
                        <h1>Kartınız boş</h1>

                        <button onClick={() => navigate("/")}
                            className='mt-4 text-blue-600 underline hover:text-blue-800'>
                            Anasayfaya gitmek için tıklayın</button>
                    </div>
            }

        </div>
    )
}

export default Cart 