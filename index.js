const server = require('./src/server')
const db = require('./src/lib/db')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

async function main () {
  await db.connect()
  console.log('DB Connected successfully')
  const port = process.env.PORT || 4000
  server.listen({ port }, () =>
    console.log(`🚀  Server ready at http://localhost:${port}`)
  )
}

main()
  .then(() => console.log('All Ready'))
  .catch(err => console.log('Error: ', err))
