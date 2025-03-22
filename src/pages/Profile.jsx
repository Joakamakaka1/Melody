import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="container mx-auto flex items-center justify-between px-6 py-10">
        <div className="flex items-center space-x-4">
          <img
            src="img/image.webp"
            alt="Avatar"
            className="w-30 h-30 rounded-full border-2 border-gray-700"
          />
          <div>
            <h2 className="text-3xl font-bold">Joaquin</h2>
            <p className="text-gray-400 text-lg">📍 Cádiz</p>
          </div>
          <button className="px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 text-sm cursor-pointer">
            Edit Profile
          </button>
        </div>

        {/* Métricas de Perfil */}
        <div className="flex space-x-8 text-center">
          {[
            { label: "PLAYLIST", value: 20 },
            { label: "FOLLOWING", value: 4 },
            { label: "FOLLOWER", value: 4 },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navegación de perfil */}
      <nav className="container mx-auto px-6 mb-20">
        <ul className="flex space-x-10 text-gray-400 text-lg">
          {["Perfil", "Actividad", "Playlists", "Reseñas", "Likes"].map(
            (tab, index) => (
              <li key={index} className="cursor-pointer pb-2 hover:text-white">
                {tab}
              </li>
            )
          )}
        </ul>
        <hr className="border-t border-gray-700 mb-5 mt-3" />
      </nav>

      {/* Sección de Álbumes Favoritos */}
      <section className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold">Playlists favoritas</h3>
        <hr className="border-t border-gray-700 mb-5 mt-3" />
        <p className="text-gray-400 text-lg">
          ¡No olvides seleccionar tus{" "}
          <span className="text-white font-semibold">playlists favoritas</span>!
        </p>
      </section>

      {/* Sección de Playlists Destacadas */}
      <section className="container mx-auto py-12 px-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Todas las Playlists</h3>
          <Link to="#" className="text-lg text-blue-400 hover:text-blue-600">
            Mostrar más
          </Link>
        </div>
        <hr className="border-t border-gray-700 mb-5 mt-3" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-gray-800 cursor-pointer hover:border-blue-500 transition duration-300"
            >
              <div className="h-75 bg-gray-700 rounded-md">
                <img
                  src="img/album3.webp"
                  alt={`Playlist ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-4 text-lg font-semibold">
                Usuario {index + 1}
              </h4>
              <p className="text-gray-400">Playlist {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nueva sección de Actividad Reciente */}
      <section className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold">Actividad Reciente</h3>
        <hr className="border-t border-gray-700 mb-5 mt-3" />
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          {[
            { title: "Playlist 1", days: 17 },
            { title: "Playlist 2", days: 17 },
            { title: "Playlist 3", days: 17 },
            { title: "Playlist 4", days: 17 },
            { title: "Playlist 5", days: 17 },
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 mb-4">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-3"></span>
              <p className="text-gray-400 text-lg">
                You added{" "}
                <span className="text-white text-lg font-semibold">
                  {activity.title}
                </span>{" "}
                to your watchlist {activity.days}d
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
