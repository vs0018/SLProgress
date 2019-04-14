module.exports = function(app) {
  // Using Epiloque for REST endpoints and controllers
  epilogue.resource({
    model: Post,
    endpoints: ['/posts', '/posts/:id'],
  });
};