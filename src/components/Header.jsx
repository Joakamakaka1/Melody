export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-10 py-8 sticky top-0 w-full">
      {/* Logo y título estilizado */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <h1 className="text-3xl font-bold ml-2">Melody</h1>
      </div>

      {/* Menú de navegación */}
      <nav>
        <ul className="flex space-x-10 text-xl font-medium">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-400">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="hover:text-gray-400">
              Register
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-gray-400">
              Profile
            </a>
          </li>
          <li>
            <a href="/members" className="hover:text-gray-400">
              Members
            </a>
          </li>
          <li>
            <a href="/playlistdetail" className="hover:text-gray-400">
              Playlists
            </a>
          </li>
        </ul>
      </nav>

      {/* Barra de búsqueda */}
      <form action="/search" method="get" className="relative">
        <input
          placeholder="Search..."
          class="input shadow-lg bg-gray-600 px-5 py-3 rounded-xl w-56 outline-none text-white"
          name="search"
          type="search"
        />
        <button className="cursor-pointer">
          <svg
            class="size-6 absolute top-3 right-3 text-white"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
          </button>
      </form>
    </header>
  );
}
