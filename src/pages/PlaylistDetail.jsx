import { useState } from "react";
import CardList from "../components/CardList";
import { Link } from "react-router-dom";

export default function PlaylistDetail() {
  const [indexAll, setIndexAll] = useState(0);
  const [indexPopular, setIndexPopular] = useState(0);
  const [indexFriends, setIndexFriends] = useState(0);

  const allPlaylists = [
    {
      id: 1,
      name: "Rock Clásico",
      creator: "Juan",
      image: "/img/album1.webp",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Electrónica",
      creator: "Ana",
      image: "/img/album2.webp",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Jazz Vibes",
      creator: "Luis",
      image: "/img/album3.webp",
      rating: 3.9,
    },
    {
      id: 4,
      name: "Indie Hits",
      creator: "María",
      image: "/img/album4.webp",
      rating: 4.2,
    },
  ];

  const popularPlaylists = allPlaylists.slice(0, 4);
  const friendsPlaylists = allPlaylists.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold text-center pt-10">Playlists</h2>
      <p className="text-gray-400 mt-4 text-center pb-20">
        Explora y guarda tus playlists favoritas.
      </p>

      <section className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 container mx-auto px-6">
        {/* Filtros */}
        <div className="flex gap-4 pb-6">
          {/* Filtro de popularidad */}
          <select
            value=""
            onChange=""
            className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Popular (Siempre)</option>
            <option value="year">Popular (Este año)</option>
            <option value="month">Popular (Este mes)</option>
            <option value="week">Popular (Esta)</option>
          </select>

          {/* Filtro de rating */}
          <select
            value=""
            onChange=""
            className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          >
            <option value="desc">Rating: Mayor a menor</option>
            <option value="asc">Rating: Menor a mayor</option>
          </select>
        </div>

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar playlists..."
          value=""
          onChange=""
          className="p-3 mb-6 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 w-full md:w-1/3"
        />
      </section>

      {/* Sección de todas las playlists */}
      <section className="container mx-auto py-12 px-6">
        <div className="flex justify-between items-center pb-2">
          <h3 className="text-2xl font-semibold">Todas las Playlists</h3>
          <Link to="#" className="text-lg text-blue-400 hover:text-blue-600">
            Mostrar más
          </Link>
        </div>
        <CardList playlists={allPlaylists.slice(indexAll, indexAll + 4)} />
      </section>

      {/* Sección de playlists populares */}
      <section className="container mx-auto py-12 px-6">
        <div className="flex justify-between items-center pb-2">
          <h3 className="text-2xl font-semibold">Populares de la Semana</h3>
          <Link to="#" className="text-lg text-blue-400 hover:text-blue-600">
            Mostrar más
          </Link>
        </div>
        <div className="">
          <CardList
            playlists={popularPlaylists.slice(indexPopular, indexPopular + 4)}
          />
        </div>
      </section>

      {/* Sección de playlists de amigos */}
      <section className="container mx-auto py-12 px-6">
        <div className="flex justify-between items-center pb-2">
          <h3 className="text-2xl font-semibold">Playlists de tus Amigos</h3>
          <Link to="#" className="text-lg text-blue-400 hover:text-blue-600">
            Mostrar más
          </Link>
        </div>
        <CardList
          playlists={friendsPlaylists.slice(indexFriends, indexFriends + 4)}
        />
      </section>
    </div>
  );
}
