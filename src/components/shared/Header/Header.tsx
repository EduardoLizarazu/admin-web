import Link from 'next/link'

export const Header = () => {

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg md:text-2xl font-bold">Sergis Admin</h1>
                {/* Botón de menú para dispositivos móviles */}
                {/* <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button> */}
                {/* Enlaces del menú para escritorio */}
                <nav className="hidden md:flex space-x-10">
                    <Link href="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
                    <Link href="/admin/supplier" className="hover:bg-gray-700 p-2 rounded">Proveedor</Link>
                    <Link href="/admin/consumer" className="hover:bg-gray-700 p-2 rounded">Consumidor</Link>
                </nav>
            </div>
            {/* Menú móvil
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <ul>
                    <li><a href="#" className="block text-sm px-4 py-2 hover:bg-gray-700 transition duration-300">Home</a></li>
                    <li><a href="#" className="block text-sm px-4 py-2 hover:bg-gray-700 transition duration-300">Services</a></li>
                    <li><a href="#" className="block text-sm px-4 py-2 hover:bg-gray-700 transition duration-300">About</a></li>
                    <li><a href="#" className="block text-sm px-4 py-2 hover:bg-gray-700 transition duration-300">Contact</a></li>
                </ul>
            </div> */}
        </header>
    );
};
