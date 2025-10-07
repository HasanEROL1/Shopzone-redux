import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: true,
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <Slider {...settings}>

                {/* SLIDE 1 */}
                <div className="!flex flex-col md:flex-row items-center justify-between bg-gray-100 px-4 py-10">
                    {/* Yazılar */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-6 md:mb-0 md:pr-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            En Kaliteli Ayakkabılar Burada
                        </h2>
                        <p className="text-lg mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, doloremque dicta! Quos placeat qui earum dolorem.
                        </p>
                        <button className="border rounded-full cursor-pointer text-xl w-[200px] h-14 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition">
                            İncele
                        </button>
                    </div>

                    {/* Fotoğraf */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="w-full max-w-md h-auto object-contain"
                            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e7540f73-dc57-474d-8101-92e04d73f872/COURT+BOROUGH+LOW+RECRAFT+%28GS%29.png"
                            alt="Nike Ayakkabı"
                        />
                    </div>
                </div>

                {/* SLIDE 2 */}
                <div className="!flex flex-col md:flex-row items-center justify-between bg-gray-100 px-4 py-10">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-6 md:mb-0 md:pr-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Yeni Sezon Ayakkabılar
                        </h2>
                        <p className="text-lg mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, doloremque dicta! Quos placeat qui earum dolorem.
                        </p>
                        <button className="border rounded-full cursor-pointer text-xl w-[200px] h-14 flex items-center justify-center bg-white hover:bg-gray-300 transition">
                            İncele
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="w-full max-w-md h-auto object-contain"
                            src="https://floimages.mncdn.com/media/catalog/product/23-10/27/101903223_d2-1698423376.jpg"
                            alt="Flo Ayakkabı"
                        />
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default SliderComp;
