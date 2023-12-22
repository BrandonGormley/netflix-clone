import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='bg-black px-4 py-8 flex flex-col lg:px-20 lg:py-12'>
            <div className='flex flex-row'>
                <FaFacebookF className='text-white text-2xl mr-8' />
                <FaInstagram className='text-white text-2xl mr-8' />
                <FaTwitter className='text-white text-2xl mr-8' />
                <FaYoutube className='text-white text-2xl' />
            </div>
            <div className='flex flex-row py-8'>
                <div className='flex flex-col text-sm mr-8 transition-all'>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Audio Description
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Gift Cards
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Investor Relations
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Netflix Shop
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Privacy
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Cookie Preferences
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Contact Us
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Ad Choices
                    </a>
                </div>
                <div className='flex flex-col text-sm transition-colors'>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Help Center
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Media Center
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Jobs
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Terms of Use
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Legal Notices
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Corporate Information
                    </a>
                    <a className='text-gray-500 py-2 cursor-pointer hover:text-gray-400'>
                        Do Not Sell or Share My Personal Information
                    </a>
                </div>
            </div>
            <div className='flex flex-row'>
                <p className='text-gray-500 border px-2 py-1 border-gray-500 text-sm'>
                    Service Code
                </p>
            </div>
            <div className='flex flex-row'>
                <p className='text-gray-500 text-xs py-8'>
                    © 1997-2023 Netflix, Inc.
                </p>
            </div>
        </footer>
    );
}
