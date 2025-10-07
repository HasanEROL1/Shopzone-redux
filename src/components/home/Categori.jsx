import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice'
import { getCategoryProducts } from '../../redux/productSlice'

const Categori = ({ setCategory }) => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categories)



    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleCategoryClick = (category) => {
        setCategory(category)
        dispatch(getCategoryProducts(category)) // ürünleri getir
    }
    return (
        <div className='w-1/6 bg-gray-100 max-h-screen'>
            <div className='border-b pb-1 text-xl font-bold px-2 '>  KATEGORİ </div>

            {
                categories?.map((category, i) => (
                    <div key={category}
                        onClick={() => handleCategoryClick(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 transition p-2'
                    > {category} </div>
                ))
            }
        </div>

    )
}

export default Categori
