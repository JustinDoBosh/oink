const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/oink',
  port: process.env.PORT || 8000,
  secret: 'password',
};

export default config;
