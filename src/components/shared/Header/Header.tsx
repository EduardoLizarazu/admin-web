import Link from 'next/link'

export const Header = () => {
  // classNameName
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <Link 
            href="/"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
            Administrador
        </Link>
        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3"></i> New Report
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link 
            href="/consumer" 
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
        </Link>
        <Link 
            href="/consumer" 
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Consumidores
        </Link>
        <Link
          href="/supplier"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Proveedores
        </Link>
      </nav>
    </aside>
  );
};
