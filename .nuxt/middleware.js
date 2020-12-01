const middleware = {}

middleware['authentecated'] = require('..\\middleware\\authentecated.js')
middleware['authentecated'] = middleware['authentecated'].default || middleware['authentecated']

middleware['notAuthentecated'] = require('..\\middleware\\notAuthentecated.js')
middleware['notAuthentecated'] = middleware['notAuthentecated'].default || middleware['notAuthentecated']

export default middleware
