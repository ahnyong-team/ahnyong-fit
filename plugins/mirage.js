// https://blog-english.vedovelli.com.br/configure-miragejs-into-a-nuxt-project/
if (process.env.NODE_ENV === 'development') {
  require('../miragejs/server').makeServer()
}
