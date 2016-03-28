export const serverUrl = process.env.NODE_ENV === 'dev' ? 'localhost:3000' : '';

export const indexFile = () => {
  return `${serverUrl}/api/index`
};
