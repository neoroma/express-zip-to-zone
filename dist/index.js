'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoneByZip = exports.validateZip = void 0;

var _ramda = require("ramda");

var _data = require("./data.json");

const getAllZips = (0, _ramda.compose)(_ramda.flatten, (0, _ramda.concat)([]), _ramda.values);
const allZone = getAllZips(_data.zones);
const mapZipToZone = (0, _ramda.compose)((0, _ramda.reduce)((acc, zone) => {
  const pairs = (0, _ramda.compose)(_ramda.fromPairs, (0, _ramda.map)(zip => [zip, zone]), (0, _ramda.prop)(zone))(_data.zones);
  return { ...acc,
    ...pairs
  };
}, {}), _ramda.keys);
const allZipsToZone = mapZipToZone(_data.zones);

const validateZip = z => allZone.includes(z);

exports.validateZip = validateZip;

const zoneByZip = z => allZipsToZone[z];

exports.zoneByZip = zoneByZip;
