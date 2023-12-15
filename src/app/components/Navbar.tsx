import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center p-4 lg:px-6 xl:px-16 bg-black text-white text-[.625rem] md:text-xs'>
            <Image
                src={'/netflix-logo.png'}
                alt='Company Logo'
                height={50}
                width={100}
            />
            {/* Nav List */}
            <ul className='mr-auto px-4 hidden md:flex'>
                <li className='mx-2'>
                    <Link className='hover:text-gray-200' href={'/'}>
                        Home
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link className='hover:text-gray-200' href={'/'}>
                        TV Shows
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link className='hover:text-gray-200' href={'/'}>
                        Movies
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link className='hover:text-gray-200' href={'/'}>
                        News & Popular
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link className='hover:text-gray-200' href={'/'}>
                        My List
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link className='hover:text-gray-200' href={'/'}>
                        Browse by Languages
                    </Link>
                </li>
            </ul>
            {/* Util Tools */}
            <div className='flex '>
                {/* Search */}
                <div className='mx-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 hover:text-gray-200 cursor-pointer'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                        />
                    </svg>
                </div>
                {/* Alerts */}
                <div className='mx-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 hover:text-gray-200 cursor-pointer'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                        />
                    </svg>
                </div>
                {/* User Profile */}
                <div className='mx-2 flex items-center hover:text-gray-200 cursor-pointer'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 '
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                        />
                    </svg>
                    <span className='text-xl ml-1 rotate-90'>&#8250;</span>
                </div>
            </div>
        </nav>
    );
}
