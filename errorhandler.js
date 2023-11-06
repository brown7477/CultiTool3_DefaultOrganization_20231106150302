'''
This is the error handling middleware.
It catches any errors that might occur during the execution of the server.
'''
module.exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};