import { useState, useEffect } from "react";
import { FaUserFriends, FaMusic, FaUsers, FaPlus } from "react-icons/fa";

export default function Members() {
  // Simulación de datos de usuarios
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userList = [
      { id: 1, name: "Juan Pérez", username: "juanp", followers: 120, playlists: 5 },
      { id: 2, name: "María López", username: "marial", followers: 340, playlists: 12 },
      { id: 3, name: "Carlos García", username: "carlosg", followers: 89, playlists: 3 },
      { id: 4, name: "Ana Torres", username: "anator", followers: 245, playlists: 8 },
      { id: 5, name: "Roberto Sánchez", username: "robertos", followers: 180, playlists: 6 },
      { id: 6, name: "Lucía Fernández", username: "luciaf", followers: 400, playlists: 15 },
      { id: 7, name: "Fernando Rivas", username: "fernandor", followers: 75, playlists: 2 },
      { id: 8, name: "Gabriela Castro", username: "gabrielac", followers: 310, playlists: 9 },
    ];

    // Ordenar por seguidores (de mayor a menor) y guardar en estado
    setUsers(userList.sort((a, b) => b.followers - a.followers));
  }, []);

  // Obtener los 3 más populares
  const topUsers = users.slice(0, 3);
  // Lista con el resto de los usuarios
  const otherUsers = users.slice(0, 8);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Sección: Miembros más populares */}
        <h2 className="text-2xl font-semibold pb-2">Miembros Más Populares</h2>
        <hr className="border-t border-gray-700 mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border-4 border-gray-800 hover:border-blue-500 transition duration-300 text-center flex flex-col items-center"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                className="w-24 h-24 rounded-full mb-4 border-2 border-blue-400"
              />
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-400">@{user.username}</p>
              <div className="flex items-center gap-4 text-gray-300 mt-3">
                <span className="flex items-center gap-2">
                  <FaUsers className="text-gray-400" /> {user.followers} Seguidores
                </span>
                <span className="flex items-center gap-2">
                  <FaMusic className="text-gray-400" /> {user.playlists} Playlists
                </span>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                <FaPlus /> Agregar
              </button>
            </div>
          ))}
        </div>

        {/* Sección: Lista de todos los miembros */}
        <h2 className="text-2xl font-semibold pb-2">Todos los Miembros</h2>
        <hr className="border-t border-gray-700 mb-5" />
        <div className="space-y-4">
          {otherUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-gray-800 flex items-center"
            >
              <img
                src={`https://i.pravatar.cc/100?img=${user.id}`}
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-blue-400 mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-400">@{user.username}</p>
                <div className="flex items-center gap-6 text-gray-300 mt-2">
                  <span className="flex items-center gap-2">
                    <FaUsers className="text-gray-400" /> {user.followers} Seguidores
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMusic className="text-gray-400" /> {user.playlists} Playlists
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                <FaPlus /> Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
