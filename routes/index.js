module.exports = app => {
  app.use('/auth', require('./authRoutes'));
  app.use('/connect', require('./authzRoutes'));
  app.use('/api', require('./apiRoutes'));
};
