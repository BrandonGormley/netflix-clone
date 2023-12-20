import Image from 'next/image';

interface CardRowProps {
    title: string;
    image: string;
}

export default function CardRow({ title, image }: CardRowProps) {
    return (
        <div className='flex flex-col bg-black text-white py-4 px-16'>
            <p className='my-2 mb-4 text-2xl'>{title}</p>
            <div className='flex'>
                <div className='hover:scale-110 rounded-lg cursor-pointer transition-all duration-200 mr-2'>
                    <Image
                        src={image}
                        alt='Leave the world behind thumbnail'
                        width={200}
                        height={50}
                        className='rounded-t-sm lg:w-[250px]'
                    />
                </div>
            </div>
        </div>
    );
}
