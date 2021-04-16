async function routes (fastify, options) {
    //const collection = fastify.mongo.db.collection('test_collection')
  
    fastify.get('/test', async (request, reply) => {
        return { Hallo: 'Segye' }
    })
  
    fastify.get('/', async (request, reply) => {
        reply.view('./templates/index.html',{ data : 'Iftika'}) // serving path.join(__dirname, 'public', 'myHtml.html') directly
      })
  
  }
  
  module.exports = routes