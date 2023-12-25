import CardRow from './components/CardRow';
import Trailer from './components/Trailer';

interface Movie {
    id: number;
    title: string;
    image: string;
    alt: string;
}

export default function Home() {
    const movieData = [
        {
            id: 1,
            title: 'Popular on Netflix',
            image: '/thumbnail-leaveworld.jpeg',
            alt: 'Thumbnail of leave the world behind',
        },
        {
            id: 2,
            title: 'Continue Watching for Brandon',
            image: '/thumbnail-nowhere.jpeg',
            alt: 'Thumbnail of nowhere',
        },
    ];

    return (
        <section>
            <Trailer />
            <section className='p-4 bg-black'>
                <ul>
                    {movieData.map((movie: Movie) => (
                        <li key={movie.id}>
                            <CardRow
                                title={movie.title}
                                image={movie.image}
                                alt={movie.alt}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}
