import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Products from '../components/home/Products'
import Categori from '../components/home/Categori'


const Home = () => {

    const [sort, setSort] = useState("")
    const [category, setCategory] = useState("")
    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort} />

            <div className='flex'>
                <Categori setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}

export default Home
