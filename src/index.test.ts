import { describe, expect, it } from 'vitest'
import { days, hours, milliseconds, minutes, seconds } from './'

describe('days', () => {
	it('should leave days as is', () => {
		expect(days(1, 'd')).toBe(1)
	})

	it('should convert days into seconds', () => {
		expect(days(1, 's')).toBe(86400)
	})

	it('should convert days into milliseconds', () => {
		expect(days(1)).toBe(86400000)
	})

	it('should convert days into hours', () => {
		expect(days(1, 'h')).toBe(24)
	})

	it('should convert days into minutes', () => {
		expect(days(1, 'm')).toBe(1440)
	})
})

describe('hours', () => {
	it('should convert hours into days', () => {
		expect(hours(24, 'd')).toBe(1)
	})

	it('should leave hours as is', () => {
		expect(hours(1, 'h')).toBe(1)
	})

	it('should convert hours into seconds', () => {
		expect(hours(1, 's')).toBe(3600)
	})

	it('should convert hours into milliseconds', () => {
		expect(hours(1)).toBe(3600000)
	})

	it('should convert hours into minutes', () => {
		expect(hours(1, 'm')).toBe(60)
	})
})

describe('minutes', () => {
	it('should convert minutes into hours', () => {
		expect(minutes(60, 'h')).toBe(1)
	})

	it('should convert minutes into days', () => {
		expect(minutes(1440, 'd')).toBe(1)
	})

	it('should leave minutes as is', () => {
		expect(minutes(1, 'm')).toBe(1)
	})

	it('should convert minutes into seconds', () => {
		expect(minutes(1, 's')).toBe(60)
	})

	it('should convert minutes into milliseconds', () => {
		expect(minutes(1)).toBe(60000)
	})
})

describe('seconds', () => {
	it('should convert seconds into minutes', () => {
		expect(seconds(60, 'm')).toBe(1)
		expect(seconds(1, 'm')).toBe(0.016666666666666666)
		expect(seconds(30, 'm')).toBe(0.5)
	})

	it('should convert seconds into hours', () => {
		expect(seconds(3600, 'h')).toBe(1)
	})

	it('should convert seconds into days', () => {
		expect(seconds(86400, 'd')).toBe(1)
	})

	it('should leave seconds as is', () => {
		expect(seconds(1, 's')).toBe(1)
	})

	it('should convert seconds into milliseconds', () => {
		expect(seconds(1)).toBe(1000)
	})
})

describe('milliseconds', () => {
	it('should convert milliseconds into seconds', () => {
		expect(milliseconds(1000, 's')).toBe(1)
	})

	it('should convert milliseconds into minutes', () => {
		expect(milliseconds(60000, 'm')).toBe(1)
	})

	it('should convert milliseconds into hours', () => {
		expect(milliseconds(3600000, 'h')).toBe(1)
	})

	it('should convert milliseconds into days', () => {
		expect(milliseconds(86400000, 'd')).toBe(1)
	})

	it('should leave milliseconds as is', () => {
		expect(milliseconds(1)).toBe(1)
	})
})
