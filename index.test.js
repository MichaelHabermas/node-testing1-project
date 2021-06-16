const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
	test('[1] returns an object with the properties trimmed', () => {
		// EXAMPLE
		const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
	});
	test.todo('[2] returns a copy, leaving the original object intact');
});

describe('[Exercise 2] trimPropertiesMutation', () => {
	test.todo('[3] returns an object with the properties trimmed');
	test.todo('[4] the object returned is the exact same one we passed in');
});

describe('[Exercise 3] findLargestInteger', () => {
	test.todo(
		'[5] returns the largest number in an array of objects { integer: 2 }'
	);
});

describe('[Exercise 4] Counter', () => {
	let counter;
	beforeEach(() => {
		counter = new utils.Counter(3); // each test must start with a fresh couter
	});
	test.todo(
		'[6] the FIRST CALL of counter.countDown returns the initial count'
	);
	test.todo(
		'[7] the SECOND CALL of counter.countDown returns the initial count minus one'
	);
	test.todo(
		'[8] the count eventually reaches zero but does not go below zero'
	);
});

describe('[Exercise 5] Seasons', () => {
	let seasons;
	beforeEach(() => {
		seasons = new utils.Seasons(); // each test must start with fresh seasons
	});
	test.todo('[9] the FIRST call of seasons.next returns "summer"');
	test.todo('[10] the SECOND call of seasons.next returns "fall"');
	test.todo('[11] the THIRD call of seasons.next returns "winter"');
	test.todo('[12] the FOURTH call of seasons.next returns "spring"');
	test.todo('[13] the FIFTH call of seasons.next returns again "summer"');
	test.todo('[14] the 40th call of seasons.next returns "spring"');
});

describe('[Exercise 6] Car', () => {
	let focus;
	beforeEach(() => {
		focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
	});
	test.todo('[15] driving the car returns the updated odometer');
	test.todo('[16] driving the car uses gas');
	test.todo('[17] refueling allows to keep driving');
	test.todo('[18] adding fuel to a full tank has no effect');
});

describe('[Exercise 7] isEvenNumberAsync', () => {
	test.todo('[19] resolves true if passed an even number');
	test.todo('[20] resolves false if passed an odd number');
	test.todo(
		'[21] rejects an error with the message "number must be a number" if passed a non-number type'
	);
	test.todo(
		'[22] rejects an error with the message "number must be a number" if passed NaN'
	);
});
