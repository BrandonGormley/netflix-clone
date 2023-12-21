import Image from 'next/image';

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
                <div className='hover:scale-110 rounded-lg cursor-pointer transition-all duration-200 mr-2'>
                    <Image
                        src={image}
                        alt={alt}
                        width={200}
                        height={50}
                        className='rounded-t-sm lg:w-[250px]'
                    />
                </div>
                <div className='hover:scale-110 rounded-lg cursor-pointer transition-all duration-200 mr-2'>
                    <Image
                        src={image}
                        alt={alt}
                        width={200}
                        height={50}
                        className='rounded-t-sm lg:w-[250px]'
                    />
                </div>
            </div>
        </div>
    );
}
