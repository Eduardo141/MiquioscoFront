// API URLs
export const API_BASE_URL = process.env.REACT_APP_API_URL;

// Local Storage Keys
export const TOKEN_KEY = "token";

// Rutas de la aplicación
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCTS: "/productos",
  SUPPLIERS: "/proveedores",
  TECHNICAL_SERVICE: "/empleados",
  EVENTS: "/eventos",
};

// Mensajes de error comunes
export const ERROR_MESSAGES = {
  LOGIN_FAILED: "Error en el inicio de sesión. Verifica tus credenciales.",
  REGISTER_FAILED: "Error al registrarse. Intenta con otro nombre de usuario.",
  SERVER_ERROR: "Error del servidor. Inténtalo más tarde.",
  NETWORK_ERROR: "Error de conexión. Verifica tu conexión a internet.",
};
