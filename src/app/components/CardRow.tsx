import Card from './Card';

interface CardRowProps {
    title: string;
    image: string;
    alt: string;
}

export default function CardRow({ title, image, alt }: CardRowProps) {
    return (
        <div className='flex flex-col bg-black text-white lg:py-4 lg:px-16'>
            <p className='my-2 mb-4 text-xs lg:text-2xl'>{title}</p>
            <div className='flex flex-row flex-nowrap'>
                <Card image={image} alt={alt} />
            </div>
        </div>
    );
}
