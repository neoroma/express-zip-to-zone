'use strict'

import {
  compose,
  concat,
  flatten,
  values,
  reduce,
  fromPairs,
  map,
  prop,
  keys,
} from 'ramda'
import { zones } from './data.json'

const getAllZips: (any) => number[] = compose(flatten, concat([]), values)

const allZone: number[] = getAllZips(zones)

const mapZipToZone = compose(
  reduce((acc, zone) => {
    const pairs = compose(
      fromPairs,
      map((zip) => [zip, zone]),
      prop(zone)
    )(zones)
    return { ...acc, ...pairs }
  }, {}),
  keys
)
const allZipsToZone = mapZipToZone(zones)

export const validateZip = (z: number): boolean => allZone.includes(z)
export const zoneByZip = (z: number): string => allZipsToZone[z]
