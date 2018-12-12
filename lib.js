// make sourcemaps work!
require('source-map-support/register')

module.exports = require("@dexon-foundation/ganache-core/public-exports.js");
module.exports.version = require("@dexon-foundation/ganache-core/package.json").version;
module.exports.to = require("@dexon-foundation/ganache-core/lib/utils/to");
