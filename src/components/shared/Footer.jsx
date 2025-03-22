export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6">
      <div className="container mx-auto flex flex-col items-center space-y-3">
        {/* Enlaces */}
        <div className="flex space-x-6 text-gray-300 font-semibold">
          {[
            "Acerca de",
            "Pro",
            "Noticias",
            "Aplicaciones",
            "Podcast",
            "Año en Revisión",
            "Regalos",
            "Ayuda",
            "Términos",
            "API",
            "Contacto",
          ].map((item, index) => (
            <a key={index} href="#" className="hover:text-white">
              {item}
            </a>
          ))}
        </div>

        {/* Derechos de autor & Spotify */}
        <p className="text-xs text-gray-500 text-center">
          © Melody. Hecho por Joaquin Castro Salas con React. Datos obtenidos
          desde{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Spotify
          </a>
          .{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sitio web.
          </a>
          .
        </p>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-4 text-gray-500">
          {[
            "instagram",
            "threads",
            "twitter",
            "butterfly",
            "facebook",
            "tiktok",
            "youtube",
          ].map((icon, index) => (
            <a key={index} href="#" className="hover:text-white">
              <i className={`fab fa-${icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
