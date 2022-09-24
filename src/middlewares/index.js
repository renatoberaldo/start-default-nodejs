const exempleMiddleware = (req, res, next) => {
  console.log('Middleware working!');
  next();
};

module.exports = exempleMiddleware;
