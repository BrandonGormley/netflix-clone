import CardRow from './components/CardRow';
import Trailer from './components/Trailer';

export default function Home() {
    return (
        <section>
            <Trailer />
            <section className='p-4 bg-black'>
                <CardRow
                    title='Popular on Netflix'
                    image='/thumbnail-leaveworld.jpeg'
                    alt='Thumbnail of leave the world behind'
                />
                <CardRow
                    title='Continue Watching for Brandon'
                    image='/thumbnail-nowhere.jpeg'
                    alt='Thumbnail of nowhere'
                />
            </section>
        </section>
    );
}
