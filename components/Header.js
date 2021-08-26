import { useState } from "react"
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import DropMenu from "./DropMenu"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const { user } = useUser();

    return (
        <header className=" sm:flex sm:justify-between sm:px-4 sm:py-5 ">
            <div className="flex justify-between items-center px-4 py-5 sm:p-0">
                <div>
                    <Link href="/">
                        <h1 className="font-extrabold text-2xl tracking-tight text-purple-900">LinkDB</h1>
                    </Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="sm:hidden" >
                    <button className="block text-gray-700 hover:text-black focus:text-black">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ?
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                : <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                            }
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`sm:block ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-4 sm:p-0 sm:block sm:flex sm:items-center">
                    <Link href="/about"><a className="block hover:bg-indigo-600 hover:text-white px-4 py-2 mt-1 rounded sm:rounded-full text-black font-base sm:mt-0 sm:ml-2 ">About</a></Link>

                    {user ? <DropMenu user={user} /> :
                        (<a
                            href="/api/auth/login" data-testid="login"
                            className="block bg-purple-600 text-white px-4 py-2 mt-1 rounded hover:bg-purple-800 sm:rounded-full font-base sm:mt-0 sm:ml-2 ">
                            Login
                        </a>
                        )}
                </div>

                {user ? (
                    <div className="px-4 py-5 border-t border-gray-500 sm:hidden">
                        <div className="flex items-center">
                            <img className=" h-8 w-8 rounded-full object-cover  border-2 border-gray-800 "
                                src={user.picture} alt="avatar" />
                            <span className="ml-3 font-semibold text-black">{user.name}</span>
                        </div>

                        <div className="mt-4">
                            <Link href="/profile"><a className="block text-gray-800 hover:text-black ">My account</a></Link>
                            <a className=" mt-2 block text-gray-800 hover:text-black " href="/api/auth/logout" data-testid="logout">Sign out </a>
                        </div>
                    </div>) : null}
            </nav>
        </header>
    )
}
