import { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

export default function Carousel(){
    let slides = [
        {url :"https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"},
        {url :"https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"},
        {url :"https://sunflowerfzco.ae/cdn/shop/products/02-java.png?v=1679235785"},
    ];

    const [CurentIndex, setCurentIndex] = useState(0)

    const prevSlide = () =>{
        const isFirstIndex = CurentIndex === 0
        const newIndex = isFirstIndex ? slides.length - 1 : CurentIndex - 1
        setCurentIndex(newIndex);
    }
    const nextSlide = () =>{
        const isLastIndex = CurentIndex === slides.length -1
        const newIndex = isLastIndex ? 0 : CurentIndex + 1
        setCurentIndex(newIndex)        
    }
    const goToSlide = (slideIndex) => {
        setCurentIndex(slideIndex)
    }

    return (
        <>  
            <div className="max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative">
                <div style={{backgroundImage: `url(${slides[CurentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-in-out">
                </div>
            </div>

            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slides, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer mb-6'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </>
    );
}