const R = require('ramda')
const { zones } = require('./data.json')

const getAllZips = R.compose(R.flatten, R.concat([]), R.values)

const allZone = getAllZips(zones)

const mapZipToZone = R.compose(
  R.reduce((acc, zone) => {
    const pairs = R.compose(
      R.fromPairs,
      R.map((zip) => [zip, zone]),
      R.prop(zone)
    )(zones)
    return { ...acc, ...pairs }
  }, {}),
  R.keys
)
const allZipsToZone = mapZipToZone(zones)

module.exports = {
  validateZip: (z) => allZone.includes(z),
  zoneByZip: (z) => allZipsToZone[z],
}
