export const getEnvironment = () => process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

export const getApiUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://catiecook.com';
    case 'development':
    default:
      return 'http://localhost';
  }
};

export const getAppUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://catiecook.com'
    case 'development':
    default:
      return 'http://localhost';
  }
};
