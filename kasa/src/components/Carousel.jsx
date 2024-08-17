import React, { useState, useEffect } from 'react';
import '../styles/styles.scss';
import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';

function Carousel({ images }) {

    // suivi de l'index de l'image actuellement affichée
    const [carouselIndex, setCarouselIndex] = useState(0)
    // gestion de l'animation lors du changement d'image
    const [isAnimating, setIsAnimating] = useState(false)

    // utilisation de useEffect pour déclencher l'animation au changement de "carouselIndex"
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 600)
        return () => clearTimeout(timer)
    }, [carouselIndex])

    // fonction pour afficher l'image précédente dans le carousel
    const carouselPrevious = () => {
        if (carouselIndex !== 0) {
            setCarouselIndex(carouselIndex - 1)
        }
        else {
            setCarouselIndex(images.length - 1)
        }
    }

    // fonction pour afficher l'image suivante dans le carousel
    const carouselNext = () => {
        if (carouselIndex !== images.length - 1) {
            setCarouselIndex(carouselIndex + 1)
        }
        else {
            setCarouselIndex(0)
        }
    }

    // Rendu du composant
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
                {/* on cache le carousel s'il n'y a qu'une seule image */}
                <div className={images.length === 1 ? "pagination-hide" : "pagination-container"}>
                {carouselIndex + 1}/{images.length}
                </div>
            </div>

        </div >
    );
};

export default Carousel