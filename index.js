// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })


//Plugin Register for assets
fastify.register(require('fastify-static'), require('./config/static').public)
//fastify.register(require('fastify-static'), require('./config/static').assets)
//fastify.register(require('fastify-static'), require('./config/static').forms)
//refractory route
fastify.register(require('./route/route'))
//point of view buat data 
fastify.register(require('point-of-view'),{
  engine:{
  handlebars: require('handlebars')
  }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000,'0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()