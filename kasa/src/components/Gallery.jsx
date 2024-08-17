import '../styles/styles.scss';
import data from '../data/data';
import Card from './Card';

// Création d'une instance du composant "Card" pour chaque élément dans "data"
function Gallery() {
    return (
        <main className='gallery'>
            {data.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default Gallery