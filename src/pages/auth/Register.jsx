import { Link } from "react-router-dom";

export default function Register() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Correo Electrónico</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tucorreo@gmail.com"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Nombre de Usuario</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="TuUsuario"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Contraseña</label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Confirmar Contraseña</label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
            >
              Registrarse
            </button>
          </form>
  
          <p className="text-center text-gray-400 mt-4">
            ¿Ya tienes una cuenta?{" "}
            <Link to={"/login"} className="text-blue-400 hover:underline">Inicia sesión</Link>
          </p>
        </div>
      </div>
    );
  }
  