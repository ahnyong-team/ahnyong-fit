module.exports = async function(context, req) {
  const databaseId = 'fit-dev'
  const containerId = 'Teams'
  context.log('JavaScript HTTP trigger function processed a request.')

  const { CosmosClient } = require('@azure/cosmos')

  const endpoint = process.env['COMSOSDB_ENDPOINT']
  const key = process.env['COSMOSDB_KEY']
  const client = new CosmosClient({ endpoint, key })

  const database = client.database(databaseId)
  const container = database.container(containerId)

  const name = req.query.name || (req.body && req.body.name)

  const dashboardResponse = { summary: {}, team: [] }
  // let errorMsg = ''
  try {
    // <QueryItems>
    context.log(`Querying container: Teams`)

    let dashboardQuery = `SELECT * from c WHERE c.teamId = '${name}'`
    context.log(dashboardQuery)

    // query to return all items
    const querySpec = {
      query: dashboardQuery
    }

    // read all items in the Items container
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll()

    items.forEach((item) => {
      context.log(`${item.id} - ${item.type}`)
      if (item.type == 'team') {
        dashboardResponse.summary = item
      } else if (item.type == 'member') {
        dashboardResponse.team.push(item)
      }
    })
    // </QueryItems>
  } catch (err) {
    context.log(err.message)
    // errorMsg = err.message
  }

  const responseMessage = name
    ? dashboardResponse
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
  }
}
