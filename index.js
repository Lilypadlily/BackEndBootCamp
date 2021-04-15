// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path') 

//Plugin Register for assets
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', 
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/assets'),
  prefix: '/assets', 
  decorateReply: false,
})
//Plugin Register for forms
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/forms'),
  prefix: '/forms', 
  decorateReply: false,
})

//Get HTML
fastify.get('/', async (request, reply) => {
  reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

// Declare a route
fastify.get('/test', async (request, reply) => {
  return { Hallo: 'Segye' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()