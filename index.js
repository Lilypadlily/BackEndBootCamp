// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path') //modul bawaan node js gak usah diinstall

//Plugin Register for assets
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/assets'),
  prefix: '/public/assets', 
  decorateReply: false,
})
//Plugin Register for forms
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/forms'),
  prefix: '/public/forms', 
  decorateReply: false,
})

//Get HTML
fastify.get('/', async (request, reply) => {
  return reply.sendFile('public/index.html')
})

// Declare a route
fastify.get('/', async (request, reply) => {
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