const HarnadClient = require('./structures/HarnadClient')
const { TOKEN, PREFIX } = require('./utils/config')

let client = new HarnadClient({ prefix: PREFIX })

client.login(TOKEN)