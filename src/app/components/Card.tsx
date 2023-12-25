import Image from 'next/image';

interface CardProps {
    image: string;
    alt: string;
}

export default function Card({ image, alt }: CardProps) {
    return (
        <div className='hover:scale-110 rounded-lg cursor-pointer transition-all duration-200 mr-2'>
            <Image
                src={image}
                alt={alt}
                width={200}
                height={50}
                className='rounded-t-sm lg:w-[250px]'
            />
        </div>
    );
}
