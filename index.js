// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
//Plugin Register for assets
fastify.register(require('fastify-static'), require('./config/static').public)
//point of view for EJS
fastify.register(require('point-of-view'),{
  engine:{
  ejs: require('ejs'),
  },
})
// register ssr in route
fastify.register(require('./route/ssr.js'))
//refractory route
fastify.register(require('./route/route.js'))

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000,'0.0.0.0')// this configuration for running server from fastify
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()