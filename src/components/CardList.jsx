export default function CardList({ playlists }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={playlist.image}
              alt={playlist.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h4 className="mt-4 text-lg font-semibold">{playlist.name}</h4>
            <p className="text-gray-400">Por {playlist.creator}</p>
          </div>
        ))}
      </div>
    );
  }