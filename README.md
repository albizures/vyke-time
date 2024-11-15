<div align="center">
	<h1>
		@vyke/time
	</h1>
</div>

A small library to convert with time

# Features
- Convert time to different units
- Simple API
- No dependencies
- Tiny size

## Installation
```sh
npm i @vyke/time
```

## Examples
```ts
import { seconds } from '@vyke/time'

console.log(seconds(30, 'm')) // 0.5
// convert by default to milliseconds
console.log(seconds(30)) // 30000
```

## API
### days
Convert a time amount from days to other time units

### hours
Convert a time amount from hours to other time units

### minutes
Convert a time amount from minutes to other time units

### seconds
Convert a time amount from seconds to other time units

### milliseconds
Convert a time amount from milliseconds to other time units

## Others vyke projects
- [Flowmodoro app by vyke](https://github.com/albizures/vyke-flowmodoro)
- [@vyke/results](https://github.com/albizures/vyke-results)
- [@vyke/val](https://github.com/albizures/vyke-val)
- [@vyke/tsdocs](https://github.com/albizures/vyke-tsdocs)
