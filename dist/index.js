'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoneByZip = exports.validateZip = void 0;

var _ramda = require("ramda");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAllZips = (0, _ramda.compose)(_ramda.flatten, (0, _ramda.concat)([]), _ramda.values);

var mapZipToZone = function mapZipToZone(zones) {
  return (0, _ramda.compose)((0, _ramda.reduce)(function (acc, zone) {
    var pairs = (0, _ramda.compose)(_ramda.fromPairs, (0, _ramda.map)(function (zip) {
      return [zip, zone];
    }), (0, _ramda.prop)(zone))(zones);
    return _objectSpread({}, acc, {}, pairs);
  }, {}), _ramda.keys);
};

var validateZip = function validateZip(zones) {
  return function (z) {
    return getAllZips(zones).includes(z);
  };
};

exports.validateZip = validateZip;

var zoneByZip = function zoneByZip(zones) {
  return function (z) {
    var allZipsToZone = mapZipToZone(zones)(zones);
    return allZipsToZone[z];
  };
};

exports.zoneByZip = zoneByZip;
