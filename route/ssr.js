async function routes (fastify, options) {
    fastify.get('/portfolio.html', (request, reply) => {
       reply.view('/public/portfolio.ejs',{ 
           desc :
        'Ada teks disini' ,
        classes :
        [
             {data_filter: '.filter-app',name :'App'},
             {data_filter: '.filter-card',name :'Card'},
             {data_filter: '.filter-web',name :'Web'},
        ],
        })
      })
  }
  module.exports = routes