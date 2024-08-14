import React, { useState, useEffect } from 'react';
import '../styles/styles.scss';
import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';

function Carousel({ images }) {

    const [carouselIndex, setCarouselIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 600)
        return () => clearTimeout(timer)
    }, [carouselIndex])

    const carouselPrevious = () => {
        if (carouselIndex !== 0) {
            setCarouselIndex(carouselIndex - 1)
        }
        else {
            setCarouselIndex(images.length - 1)
        }
    }

    const carouselNext = () => {
        if (carouselIndex !== images.length - 1) {
            setCarouselIndex(carouselIndex + 1)
        }
        else {
            setCarouselIndex(0)
        }
    }

    return (
        <div className='carousel-container'>
            <div className={isAnimating ? "carousel active-anim" : "carousel"}>
                <img
                    src={images[carouselIndex]}
                    alt="Vue de l'appartement"
                />
                <div className={images.length === 1 ? "btn-hide" : "btn-container"}>
                    <button onClick={carouselPrevious} className="btn btn_previous">
                        <img src={arrowLeft} alt="Flèche gauche" />
                    </button>
                    <button onClick={carouselNext} className="btn btn_next">
                        <img src={arrowRight} alt="Flèche droite" />
                    </button>
                </div>
                <div className={images.length === 1 ? "pagination-hide" : "pagination-container"}>
                {carouselIndex + 1}/{images.length}
                </div>
            </div>

        </div >
    );
};

export default Carousel