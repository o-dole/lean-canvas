import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}

console.log(
  'import.meta.env.VITE_API_BASE_URL :',
  import.meta.env.VITE_API_BASE_URL,
);

// export const canvases = create(
//   'https://json-server-vercel-nu-two.vercel.app/canvases/',
// );

export const canvases = create(
  `${import.meta.env.VITE_API_BASE_URL}/canvases/`,
);
