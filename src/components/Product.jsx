import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate()

    console.log(product.image);

    return (
        <div
            onClick={() => navigate(`products/${product?.id}`)}
            className="w-[430px] p-3 mx-5 mb-5 border rounded-md relative cursor-pointer bg-white hover:shadow-md transition">
            <div className="text-3xl font-bold absolute top-0 right-0 bg-black text-white p-2 m-1">
                {(product.price * 15).toFixed(2)} <span className="text-sm">₺</span>
            </div>
            <div key={product.id} className=' flex p-2'>
                <img
                    key={product.id}
                    src={product.image}
                    alt={product.title || "Ürün görseli"}
                    className="w-[200px] h-[200px] object-cover m-auto"
                />
            </div>


            <div className="text-center px-3 mt-3 text-xl font-bold">{product.title}</div>
        </div>
    );
};

export default Product;
