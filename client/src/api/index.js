// export const serverUrl = process.env.NODE_ENV === 'dev' ? 'http://localhost:3000' : '';
export const serverUrl = 'http://localhost:3000';

export const indexFile = () => {
  return `${serverUrl}/api/index`
}

export const getArea = (areaId) => {
  return `${serverUrl}/api/area/${areaId}`
}

export const getHelp = () => {
  return `${serverUrl}/api/help`
}
