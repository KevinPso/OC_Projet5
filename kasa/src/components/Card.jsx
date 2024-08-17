import '../styles/styles.scss';
import { Link } from 'react-router-dom';

// Creation d'une carte interactive pour chaque logement
function Card({id, title, cover }) {
    return (
        <Link to={`/fiche_logement/${id}`} className="gallery_card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    )
}

export default Card