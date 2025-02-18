import {
  FaHeadphones,
  FaHeart,
  FaPen,
  FaStar,
  FaCalendarAlt,
  FaList,
} from "react-icons/fa";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold">Descubre la mejor música</h2>
        <p className="text-gray-400 mt-4">
          Explora y guarda tus canciones favoritas.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer">
          Empezar ahora
        </button>
      </section>

      {/* Destacados */}
      <section className="container mx-auto py-12 px-6 ">
        <h3 className="text-2xl font-semibold pb-2">Playlist Destacadas</h3>
        <hr className="border-t border-gray-700 mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-gray-800 cursor-pointer hover:border-blue-500 transition duration-300"
            >
              <div className="h-75 bg-gray-700 rounded-md">
                <img
                  src="img/album3.webp"
                  alt="iamgenPlaylist"
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

      {/* ¿Qué puedes hacer en Melody? */}
      <section className="container mx-auto py-12 px-6">
        <h3 className="text-2xl font-semibold mb-6">
          ¿Qué puedes hacer en Melody?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaHeadphones />,
              text: "Lleva un registro de todas las canciones que escuchas y descubre nuevas.",
            },
            {
              icon: <FaHeart />,
              text: "Da 'me gusta' a canciones, playlists y álbumes para guardarlos en tu colección.",
            },
            {
              icon: <FaPen />,
              text: "Escribe y comparte reseñas de canciones y álbumes con otros usuarios.",
            },
            {
              icon: <FaStar />,
              text: "Califica canciones y álbumes en una escala de 5 estrellas y comparte tu opinión.",
            },
            {
              icon: <FaCalendarAlt />,
              text: "Lleva un diario de tu experiencia musical y mira cómo evoluciona tu gusto.",
            },
            {
              icon: <FaList />,
              text: "Crea listas de reproducción y compártelas con amigos o la comunidad.",
            },
          ].map((item, index) => (
            <Link to={"#"}>
              <div
                key={index}
                className="bg-gray-800 p-10 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-blue-400 text-4xl">{item.icon}</div>
                <p className="text-gray-400 text-xl">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Reviews This Week */}
      <section className="container mx-auto py-12 px-6">
        <h3 className="text-2xl font-semibold pb-2">
          Popular Reviews This Week
        </h3>
        <hr className="border-t border-gray-700 mb-5" />
        <div className="space-y-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-6"
            >
              <Link to={"#"}>
                <div className="h-32 w-32 bg-gray-700 rounded-md">
                  <img
                    src="img/album1.webp"
                    alt="imagenPlaylist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="flex-1">
                <Link to={"#"}>
                  <h4 className="text-lg font-semibold text-white">
                    Playlist {index + 1}
                  </h4>
                </Link>
                <Link to={"#"}>
                  <p className="text-gray-400">
                    Comentario de Usuario {index + 1}
                  </p>
                </Link>
                <div className="flex items-center mt-2">
                  {/* Estrellas */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < 4 ? "text-yellow-400" : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-400 mt-4">
                  "Este es un comentario sobre la playlist. Es genial y tiene
                  muchas canciones buenas!"
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
                  <span className="text-gray-400">50 Likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
