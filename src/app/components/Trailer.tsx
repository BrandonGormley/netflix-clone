import Image from 'next/image';

export default function Trailer() {
    return (
        <div className="bg-[url('/hero-static-image.webp')] bg-no-repeat bg-cover h-[56.25vw]">
            <div className='min-h-[13.2vw] relative ml-10 max-w-[40%]'>
                <Image
                    src={'/fireplace.webp'}
                    alt='Fireplace for your home title text'
                    width={1920}
                    height={1080}
                    className='w-full pt-[30%]'
                />
                <p className='text-white pt-10 text-[1.2vw] drop-shadow-lg'>
                    The first of its kind in UHD 4K, with the clearest picture
                    available, a real fireplace sparks and crackles, adding
                    warmth and atmosphere to any home.
                </p>
                <div className='flex mt-4 text-[1.2vw]'>
                    <button className='bg-white py-2 px-6 rounded-[4px] mr-2 flex hover:bg-[rgba(255,255,255,0.9)] transition-all'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='black'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6 mr-1'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                            />
                        </svg>
                        Play
                    </button>

                    <button className='bg-[rgba(109,109,110,0.7)] py-2 px-4 rounded-[4px] ml-2 flex text-white hover:bg-[rgba(109,109,110,0.75)] transition-all'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-6 h-6 mr-1'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                            />
                        </svg>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
