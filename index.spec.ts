import { validateZip, zoneByZip } from './index'

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
  it('should return 3', () => {
    expect(zoneByZip(74114)).toBe('3')
    expect(zoneByZip(74115)).toBe('3')
    expect(zoneByZip(74116)).toBe('3')
    expect(zoneByZip(74120)).toBe('3')
  })
  it('should return 4', () => {
    expect(zoneByZip(75303)).toBe('4')
    expect(zoneByZip(75304)).toBe('4')
    expect(zoneByZip(75305)).toBe('4')
    expect(zoneByZip(75306)).toBe('4')
  })
  it('should return 5', () => {
    expect(zoneByZip(76405)).toBe('5')
    expect(zoneByZip(76406)).toBe('5')
    expect(zoneByZip(76505)).toBe('5')
    expect(zoneByZip(76506)).toBe('5')
  })
})
