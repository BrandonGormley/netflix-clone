import CardRow from './components/CardRow';
import Trailer from './components/Trailer';

export default function Home() {
    return (
        <section>
            <Trailer />
            <CardRow
                title='Popular on Netflix'
                image='/thumbnail-leaveworld.jpeg'
            />
            <CardRow
                title='Continue Watching for Brandon'
                image='/thumbnail-nowhere.jpeg'
            />
        </section>
    );
}
