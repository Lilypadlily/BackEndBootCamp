// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })


//Plugin Register for assets
fastify.register(require('fastify-static'), require('./config/static').public)
fastify.register(require('fastify-static'), require('./config/static').assets)
fastify.register(require('fastify-static'), require('./config/static').forms)
fastify.register(require('./route/route'))
fastify.register(require('point-of-view'),{
  engine:{
  handlebars: require('handlebars')
  }
})

//Get HTML
//fastify.get('/', async (request, reply) => {
  //reply.view('./templates/index.html',{ data : 'Iftika'}) // serving path.join(__dirname, 'public', 'myHtml.html') directly
//})

// Declare a route
//fastify.get('/test', async (request, reply) => {
  //return { Hallo: 'Segye' }
//})

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