// import from .env

const { REACT_APP_BACKEND_API_ROUTE } = process.env;

// API

export const API = {
  MAIN: REACT_APP_BACKEND_API_ROUTE,
  TIME: "/time",
};
