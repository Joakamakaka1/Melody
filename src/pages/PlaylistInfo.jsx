import { FaPlay, FaHeart, FaStar, FaMusic } from "react-icons/fa";

export default function PlaylistInfo() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <section className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Imagen del Álbum */}
        <div className="w-full md:w-1/3">
          <img
            src="img/album1.webp"
            alt="Portada del álbum"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Información de la Playlist */}
        <div className="w-full md:w-2/3 flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">Nombre de la Playlist</h1>
          <p className="text-gray-400">
            Por{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Usuario123
            </span>
          </p>
          <p className="text-gray-300">
            Una colección de canciones cuidadosamente seleccionadas para
            disfrutar en cualquier momento.
          </p>
          <p className="text-gray-400">12 canciones • 45 min</p>
          <div className="flex items-center space-x-4">
            <button
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-2 transition duration-300"
              aria-label="Reproducir en Spotify"
            >
              <FaPlay />
              <span>Reproducir en Spotify</span>
            </button>
            <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer text-2xl transition duration-300" />
          </div>

          {/* Ratings */}
          <div className="flex items-center space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-400 ${
                  i < 4 ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
            <span className="text-gray-400 ml-2">4.2 / 5</span>
          </div>
        </div>
      </section>

      {/* Lista de canciones */}
      <section className="container mx-auto py-8 px-6">
        <h3 className="text-2xl font-semibold pb-2">Canciones en esta playlist</h3>
        <hr className="border-t border-gray-700 mb-5" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <FaMusic className="text-gray-400 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Canción {index + 1}
                  </h4>
                  <p className="text-gray-400">Artista {index + 1}</p>
                </div>
              </div>
              <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer text-xl transition duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Sección de comentarios */}
      <section className="container mx-auto py-8 px-6">
        <h3 className="text-2xl font-semibold pb-2">Comentarios</h3>
        <hr className="border-t border-gray-700 mb-5" />
        <div className="space-y-6">
          {[1, 2].map((userId, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            >
              <img
                src={`https://i.pravatar.cc/100?img=${userId}`}
                alt="Usuario"
                className="w-14 h-14 rounded-full border-2 border-blue-400"
              />
              <div className="flex-1">
                <p className="text-gray-500">
                  Comentario hecho por{" "}
                  <span className="text-white font-semibold">luciaf</span>
                </p>
                <p className="text-gray-300 mt-2">
                  No me ha gustado la playlist porque no es de mi estilo musical.
                </p>
                <div className="mt-4 flex items-center space-x-2 text-gray-400">
                  <FaHeart className="hover:text-red-500 cursor-pointer text-xl transition duration-300" />
                  <span>25.000 likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
