import { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Products from '../components/home/Products'
import Category from '../components/home/Category'


const Home = () => {

    const [sort, setSort] = useState("")
    const [category, setCategory] = useState("")
    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort} />

            <div className='flex'>
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}

export default Home
