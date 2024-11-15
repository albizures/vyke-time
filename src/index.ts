type Time = 'ms' | 's' | 'm' | 'h' | 'd'

const times = ['d', 'h', 'm', 's', 'ms'] as const

const values = [7, 24, 60, 60, 1000] as const

type Converter = (amount: number, target?: Time) => number

/**
 * Convert a time amount from days to other time units
 */
export const days: Converter = createConverter('d')
/**
 * Convert a time amount from hours to other time units
 */
export const hours: Converter = createConverter('h')
/**
 * Convert a time amount from minutes to other time units
 */
export const minutes: Converter = createConverter('m')
/**
 * Convert a time amount from seconds to other time units
 */
export const seconds: Converter = createConverter('s')
/**
 * Convert a time amount from milliseconds to other time units
 */
export const milliseconds: Converter = createConverter('ms')

function createConverter(src: Time): Converter {
	const srcIndex = times.indexOf(src)
	return (amount: number, target: Time = 'ms'): number => {
		let result = amount
		let targetIndex = times.indexOf(target)

		// If the source and target are the same, return the result
		if (srcIndex === targetIndex) {
			return result
		}

		// If the source is smaller than the target, multiply the values
		if (srcIndex < targetIndex) {
			for (let i = srcIndex + 1; i <= targetIndex; i++) {
				result *= values[i]!
			}
		}
		// If the source is larger than the target, divide the values
		else {
			for (let i = srcIndex; i > targetIndex; i--) {
				result /= values[i]!
			}
		}

		return result
	}
}
