module.exports = app => {
  app.use('/auth', require('./authRoutes'));
  app.use('/api', require('./apiRoutes'));
};
