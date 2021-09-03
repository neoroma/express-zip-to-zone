'use strict'
import { compose, concat, flatten, values, reduce, fromPairs, map, prop, keys } from 'ramda'

export type ZoneMap = {
  [key: string]: number[]
}

export type ZoneResult = {
  [key: string]: string
}

const getAllZips: (zones: ZoneMap) => number[] = compose(flatten, concat([]), values)

const mapZipToZone = (zones: ZoneMap) =>
  compose(
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

export const validateZip = (zones: ZoneMap) => (z: number): boolean => getAllZips(zones).includes(z)
export const zoneByZip = (zones: ZoneMap) => (z: number): string => {
  const allZipsToZone: ZoneResult = mapZipToZone(zones)(zones)
  return allZipsToZone[z]
}
