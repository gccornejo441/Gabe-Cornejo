import { CheckCircleIcon } from '@heroicons/react/solid';
import { HomeIcon, FireIcon, BookmarkAltIcon, InboxIcon, UserIcon } from '@heroicons/react/outline';

const Navbar = () => {
    return (
        <>
        <div className="border-2 border-blue-800 bg-blue-600 text-blue-100 h-screen">
            <div className="bg-blue-700 flex justify-center py-2 text-gray-50"><CheckCircleIcon className="w-11 h-11"/></div>
            <div className="px-6">
                <ul>
                    <li className="flex justify-center py-5">
                    <HomeIcon className="w-6 h-6"/>
                    </li>
                    <li className="flex justify-center py-5">
                    <FireIcon className="w-6 h-6"/>
                    </li>
                    <li className="flex justify-center py-5">
                    <BookmarkAltIcon className="w-6 h-6"/>
                    </li>
                    <li className="flex justify-center py-5">
                    <InboxIcon className="w-6 h-6"/>
                    </li>
                    <li className="flex justify-center py-5">
                    <UserIcon className="w-6 h-6"/>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar;