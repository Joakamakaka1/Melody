import { Link } from "react-router-dom";
export default function CardList({ playlists }) {
  return (
    <section className="container mx-auto">
      <hr className="border-t border-gray-700 mb-5" />
      <Link to={"/playlistInfo"}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border-4 border-gray-800 cursor-pointer hover:border-blue-500 transition duration-300"
            >
              <div className="h-75 bg-gray-700 rounded-md">
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full h-full object-cover rounded-md  "
                />
              </div>
              <h4 className="mt-4 text-lg font-semibold">{playlist.name}</h4>
              <p className="text-gray-400">Por {playlist.creator}</p>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}
