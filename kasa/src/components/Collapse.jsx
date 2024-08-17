import React from 'react'
import { useState } from 'react'
import arrow from '../assets/arrowUp.png';


function Collapse({ title, content }) {

    // useState pour gerer l'état "toggle" quyi gere l'affichage du contenu (ouvert/fermé).
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                {/* Titre cliquable */}
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                        src={arrow}
                        alt="show content"
                    />
                </h3>

                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                {/* Pour utiliser un seul composant, si "content" est un tableau, on renvoie chaque item dans un paragraphe (page About)*/}
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    // Si non "content" est directement affiché (page Accomodation)
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}

export default Collapse