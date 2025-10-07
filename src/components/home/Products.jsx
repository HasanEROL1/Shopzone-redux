import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getCategoryProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from '../Product';
import ReactPaginate from 'react-paginate';

const Products = ({ category, sort }) => {
    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector((state) => state.products);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    console.log(products)
    console.log(sort, "sort")
    // Ürünleri yükle
    useEffect(() => {
        setItemOffset(0); // kategori değişince pagination başa dönsün
        if (category && category !== '') {
            dispatch(getCategoryProducts(category));
        } else {
            dispatch(getProducts());
        }
    }, [dispatch, category]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            {productsStatus === 'LOADING' ? (
                <Loading />
            ) : (
                <div className='!flex flex-wrap justify-center'>
                    {currentItems?.sort((a, b) => sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : "")?.map((product, i) => (
                        <Product key={product.id} product={product} category={category} />
                    ))}
                </div>
            )}

            {products.length > itemsPerPage && (
                <ReactPaginate
                    className='paginate flex justify-center mt-5 gap-2'
                    breakLabel='...'
                    nextLabel='>'
                    previousLabel='<'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            )}
        </div>
    );
};

export default Products;
