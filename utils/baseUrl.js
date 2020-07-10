const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://intention.vercel.app'
    : 'http://localhost:3000';

export default baseUrl;
