const { validateZip, zoneByZip } = require('./index')

describe('.validateZip', () => {
  it('should validate zip codes', () => {
    expect(validateZip(10118)).toBeTruthy()
    expect(validateZip(10129)).toBeTruthy()
    expect(validateZip(10143)).toBeTruthy()
    expect(validateZip(10144)).toBeTruthy()
  })
  it('should not validate zip codes', () => {
    expect(validateZip(20118)).toBeFalsy()
    expect(validateZip(30118)).toBeFalsy()
    expect(validateZip(40118)).toBeFalsy()
    expect(validateZip(50118)).toBeFalsy()
    expect(validateZip(60118)).toBeFalsy()
  })
})

describe('.zoneByZip', () => {
  it('should return 1', () => {
    expect(zoneByZip(10118)).toBe('1')
    expect(zoneByZip(10129)).toBe('1')
    expect(zoneByZip(10143)).toBe('1')
    expect(zoneByZip(10144)).toBe('1')
  })
  it('should return undefined', () => {
    expect(zoneByZip(20118)).toBeFalsy()
    expect(zoneByZip(30118)).toBeFalsy()
    expect(zoneByZip(40118)).toBeFalsy()
    expect(zoneByZip(50118)).toBeFalsy()
    expect(zoneByZip(60118)).toBeFalsy()
  })
  it('should return 2', () => {
    expect(zoneByZip(13624)).toBe('2')
    expect(zoneByZip(13625)).toBe('2')
    expect(zoneByZip(13626)).toBe('2')
    expect(zoneByZip(13628)).toBe('2')
  })
})
