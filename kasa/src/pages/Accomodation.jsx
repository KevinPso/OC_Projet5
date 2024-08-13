import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data';
import '../styles/styles.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Error from './Error';


const Accomodation = () => {

    const { id } = useParams()
    const [accomodation, setAccomodation] = useState(1)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setAccomodation(data.filter((appart) => appart.id === id)[0])
        setLoad(true)

        if (data.filter((appart) => appart.id === id)[0] === undefined) {
            setError(true)
        }
    }, [])

    if (!load) { return <div>Loading</div> }
    if (error) { return <Error /> }

    return (
        <div>
            <Header />
            <Carousel
                images={accomodation.pictures}
            />

            <main className="accomodation">

                <div className="accomodation_content">
                    <div className="accomodation_content_infos">
                        <h1>{accomodation.title}</h1>
                        <p>{accomodation.location}</p>
                        <div className='accomodation_tags'>
                            {accomodation.tags.map((tag, index) => {
                                return (
                                    <button key={index} disabled="disabled">{tag} </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="accomodation_content_host">
                    <div className='accomodation-content_host_name_picture'>
                        <div className='accomodation_content_host_name'>
                            <h2>{accomodation.host.name}</h2>
                        </div>
                        <img src={accomodation.host.picture} alt="Proprietaire du logement" />
                    </div>
                    <div className="accomodation_content_rating">
                        {[...Array(5)].map((_star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    style={{ color: ratingValue <= accomodation.rating ? '#ff6060' : '#e3e3e3' }}
                                    aria-label="notation appartement"
                                />
                            )
                        })}
                    </div>
                </div>
                
            </main>

            <div className="accomodation_collapse">
                <div className="accomodation_collapse_item">
                    <Collapse title={'Description'} content={accomodation.description} />
                </div>
                <div className="accomodation_collapse_item">
                    <Collapse title={'Équipements'} content={accomodation.equipments} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Accomodation
