const utils = require('./index');

test('sanity', () => {
	// test
	expect(true).not.toBe(false); // assertion
	expect(1 + 2).toBe(3); // another assertion
	expect('foo').toHaveLength(3); // toHaveLength is a "matcher"
	expect(false).toBeFalsy(); // toBeFalsy is another "matcher"
	const o = {};
	const oo = o;
	expect(o).toBe(oo);
	expect({}).not.toBe({});
	const obj = { a: 1 };
	expect(obj).toEqual({ a: 1 });
});

describe('[Exercise 1] trimProperties', () => {
	test('[1] returns an object with the properties trimmed', () => {
		// EXAMPLE
		const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
	});
	test('[2] returns a copy, leaving the original object intact', () => {
		const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
		const copy = { ...original };
		expect(original).toEqual(copy);
		const created = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimProperties(original);
		expect(actual).toEqual(created);
		expect(original).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' });
	});
});

describe('[Exercise 2] trimPropertiesMutation', () => {
	test('[3] returns an object with the properties trimmed', () => {
		const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimPropertiesMutation(input);
		expect(actual).toEqual(expected);
	});
	test('[4] the object returned is the exact same one we passed in', () => {
		const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimPropertiesMutation(input);
		expect(input).toEqual(actual);
	});
});

describe('[Exercise 3] findLargestInteger', () => {
	test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
		const integers = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
		const actual = utils.findLargestInteger(integers);
		expect(actual).toEqual(3);
	});
});

describe('[Exercise 4] Counter', () => {
	let counter;
	beforeEach(() => {
		counter = new utils.Counter(3); // each test must start with a fresh couter
	});
	test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
		expect(counter.countDown()).toEqual(3);
	});
	test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
		counter.countDown();
		expect(counter.countDown()).toEqual(2);
	});
	test('[8] the count eventually reaches zero but does not go below zero', () => {
		counter.countDown();
		counter.countDown();
		counter.countDown();
		counter.countDown();
		counter.countDown();
		counter.countDown();
		expect(counter.countDown()).toEqual(0);
	});
});

describe('[Exercise 5] Seasons', () => {
	let seasons;
	beforeEach(() => {
		seasons = new utils.Seasons(); // each test must start with fresh seasons
	});
	test('[9] the FIRST call of seasons.next returns "summer"', () => {
		expect(seasons.next()).toEqual('summer');
	});
	test('[10] the SECOND call of seasons.next returns "fall"', () => {
		seasons.next();
		expect(seasons.next()).toEqual('fall');
	});
	test('[11] the THIRD call of seasons.next returns "winter"', () => {
		seasons.next();
		seasons.next();
		expect(seasons.next()).toEqual('winter');
	});
	test('[12] the FOURTH call of seasons.next returns "spring"', () => {
		seasons.next();
		seasons.next();
		seasons.next();
		expect(seasons.next()).toEqual('spring');
	});
	test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		expect(seasons.next()).toEqual('summer');
	});
	test('[14] the 40th call of seasons.next returns "spring"', () => {
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 5
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 10
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 5
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 20
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 5
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 30
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next(); // 5
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		expect(seasons.next()).toEqual('spring');
	});
});

describe('[Exercise 6] Car', () => {
	let focus;
	beforeEach(() => {
		focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
	});
	test('[15] driving the car returns the updated odometer', () => {
		expect(focus.drive(30)).toEqual(30);
	});
	test('[16] driving the car uses gas', () => {
		focus.drive(30);
		expect(focus.fuel).toEqual(19);
	});
	test('[17] refueling allows to keep driving', () => {
		focus.drive(600);
		expect(focus.odometer).toEqual(600);
		expect(focus.fuel).toEqual(0);
		focus.drive(500);
		expect(focus.odometer).toEqual(600);
		expect(focus.fuel).toEqual(0);
		focus.refuel(20);
		focus.drive(400);
		expect(focus.odometer).toEqual(1000);
	});
	test('[18] adding fuel to a full tank has no effect', () => {
		focus.refuel(5);
		expect(focus.fuel).toEqual(20);
		focus.drive(450);
		expect(focus.fuel).toEqual(5);
		focus.refuel(1000);
		expect(focus.fuel).toEqual(20);
	});
});

describe('[Exercise 7] isEvenNumberAsync', () => {
	test('[19] resolves true if passed an even number', () => {
		expect.assertions(1);
		return expect(utils.isEvenNumberAsync(2)).resolves.toEqual(true);
	});
	test('[20] resolves false if passed an odd number', () => {
		expect.assertions(1);
		return expect(utils.isEvenNumberAsync(3)).resolves.toEqual(false);
	});
	test('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
		expect.assertions(1);
		return expect(utils.isEvenNumberAsync('derp')).rejects.toEqual({
			message: 'number must be a number'
		});
	});
	test('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
		expect.assertions(1);
		return expect(utils.isEvenNumberAsync(NaN)).rejects.toEqual({
			message: 'number must be a number'
		});
	});
});
