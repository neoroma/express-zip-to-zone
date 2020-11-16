'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoneByZip = exports.validateZip = void 0;

var _ramda = require("ramda");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _zones = {
  zones: {
    '1': [10111, 10113, 10114, 10116, 10117, 10118, 10119, 10122, 10123, 10129, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10143, 10144, 10145, 10146, 10148, 10149, 10153, 10301, 10311, 10312, 10313, 10314, 10315, 10316, 10317, 10318, 10319, 10320, 10321, 10411, 10412, 10413, 10414, 10415, 10416, 10611, 10612, 10613, 10614, 10615, 10616, 10617, 10618, 10619, 10620, 10621, 10701, 10901, 10911, 10912, 10913, 10914, 10915, 10916, 10917, 10918, 10919, 10920, 10921, 10922, 11201, 11211, 11212, 11213, 11214, 11215, 11216, 11217, 11218, 11301, 11311, 11312, 11313, 11314, 11315, 11316, 11317, 11318, 11611, 11612, 11613, 11614, 11615, 11616, 11617, 11618, 11619, 11620, 11621, 11622, 11623, 11624, 11625, 11711, 11712, 11713, 12601, 12611, 12612, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12911, 12912, 12913, 12914, 12915, 12916, 12917, 12918, 13411, 13412, 13413, 13414, 13415, 13416, 13417, 13418, 13419, 13420, 13421, 13422, 13423, 13424, 13425, 13426, 13501, 13511, 13512, 13513, 13514, 13515, 13516, 13517, 13518, 13519, 13520, 13521, 13522, 13523, 13524, 76401, 76901, 76902, 76912, 76916, 76922, 76923],
    '2': [10001, 10112, 10115, 10120, 10121, 10124, 10125, 10126, 10127, 10128, 10147, 10150, 10151, 10152, 10154, 10155, 10156, 10157, 10158, 10159, 11101, 11401, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11911, 11912, 11913, 11914, 12011, 12012, 12013, 12014, 12015, 12111, 12112, 12113, 13611, 13612, 13613, 13614, 13615, 13616, 13617, 13618, 13619, 13620, 13621, 13622, 13623, 13624, 13625, 13626, 13627, 13628, 13629, 13811, 13812, 13911, 13912, 13913, 13914, 13915, 13916, 13917, 13918, 13919, 74001, 74004, 74008, 74009, 74010, 74011, 74012, 74013, 74014, 74015, 74016, 74017, 74018, 74019, 74020, 74117, 75312, 75322],
    '3': [74111, 74112, 74114, 74115, 74116, 74120, 74121, 74201, 74206, 74207, 74208],
    '4': [75301, 75303, 75304, 75305, 75306, 75307, 75308, 75310],
    '5': [75501, 75506, 75509, 75512, 76403, 76404, 76405, 76406, 76505, 76506]
  }
},
    zones = _zones.zones;
var getAllZips = (0, _ramda.compose)(_ramda.flatten, (0, _ramda.concat)([]), _ramda.values);
var allZone = getAllZips(zones);
var mapZipToZone = (0, _ramda.compose)((0, _ramda.reduce)(function (acc, zone) {
  var pairs = (0, _ramda.compose)(_ramda.fromPairs, (0, _ramda.map)(function (zip) {
    return [zip, zone];
  }), (0, _ramda.prop)(zone))(zones);
  return _objectSpread({}, acc, {}, pairs);
}, {}), _ramda.keys);
var allZipsToZone = mapZipToZone(zones);

var validateZip = function validateZip(z) {
  return allZone.includes(z);
};

exports.validateZip = validateZip;

var zoneByZip = function zoneByZip(z) {
  return allZipsToZone[z];
};

exports.zoneByZip = zoneByZip;
