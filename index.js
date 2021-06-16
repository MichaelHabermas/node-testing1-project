/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
	// ✨ implement
	const newObj = {};
	for (const key in obj) {
		// console.log(`${key}: ${obj[key]}`);
		newObj[key] = obj[key].trim();
	}
	// console.log('obj: ', obj);
	return newObj;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
	// ✨ implement
	// console.log('Before obj: ', obj);
	for (const key in obj) {
		obj[key] = obj[key].trim();
	}
	// console.log('After obj: ', obj);
	return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
	// ✨ implement
	let largestNum = integers[0]['integer'];
	integers.forEach(kvp => {
		if (kvp['integer'] > largestNum) {
			largestNum = kvp['integer'];
		}
	});
	// console.log('largestNum: ', largestNum);
	return largestNum;
}

class Counter {
	/**
	 * [Exercise 4A] Counter creates a counter
	 * @param {number} initialNumber - the initial state of the count
	 */
	constructor(initialNumber) {
		// ✨ initialize whatever properties are needed
		this.value = initialNumber;
	}

	/**
	 * [Exercise 4B] Counter.prototype.countDown counts down to zero
	 * @returns {number} - the next count, does not go below zero
	 *
	 * EXAMPLE
	 * const counter = new Counter(3)
	 * counter.countDown() // returns 3
	 * counter.countDown() // returns 2
	 * counter.countDown() // returns 1
	 * counter.countDown() // returns 0
	 * counter.countDown() // returns 0
	 */
	countDown() {
		// ✨ implement'
		const num = this.value;
		if (this.value <= 0) return 0;
		this.value = this.value - 1;
		return num;
	}
}

class Seasons {
	/**
	 * [Exercise 5A] Seasons creates a seasons object
	 */
	constructor() {
		// ✨ initialize whatever properties are needed
		this.seasonsArray = ['summer', 'fall', 'winter', 'spring'];
		this.seasonIndex = 0;
	}

	/**
	 * [Exercise 5B] Seasons.prototype.next returns the next season
	 * @returns {string} - the next season starting with "summer"
	 *
	 * EXAMPLE
	 * const seasons = new Seasons()
	 * seasons.next() // returns "summer"
	 * seasons.next() // returns "fall"
	 * seasons.next() // returns "winter"
	 * seasons.next() // returns "spring"
	 * seasons.next() // returns "summer"
	 */
	next() {
		const index = this.seasonIndex;
		this.seasonIndex += 1;
		if (this.seasonIndex > 3) this.seasonIndex = 0;
		return this.seasonsArray[index];
		// ✨ implement
	}
}

class Car {
	/**
	 * [Exercise 6A] Car creates a car object
	 * @param {string} name - the name of the car
	 * @param {number} tankSize - capacity of the gas tank in gallons
	 * @param {number} mpg - miles the car can drive per gallon of gas
	 */
	constructor(name, tankSize, mpg) {
		this.name = name;
		this.odometer = 0; // car initilizes with zero miles
		this.tank = tankSize; // car initiazes full of gas
		// ✨ initialize whatever other properties are needed
		this.currentGas = tankSize;
		this.mpg = mpg;
	}

	/**
	 * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
	 * @param {string} distance - the distance we want the car to drive
	 * @returns {number} - the updated odometer value
	 *
	 * EXAMPLE
	 * const focus = new Car('focus', 20, 30)
	 * focus.drive(100) // returns 100
	 * focus.drive(100) // returns 200
	 * focus.drive(100) // returns 300
	 * focus.drive(200) // returns 500
	 * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
	 */

	drive(distance) {
		const possibleDrivingDistance = this.currentGas * this.mpg;
		if (distance <= possibleDrivingDistance) {
			this.currentGas -= distance / this.mpg;
			return (this.odometer += distance);
			// return this.odometer;
		} else {
			this.currentGas = 0;
			return (this.odometer += possibleDrivingDistance);
		}

		// ✨ implement
	}

	/**
	 * [Exercise 6C] Adds gallons to the tank
	 * @param {number} gallons - the gallons of fuel we want to put in the tank
	 * @returns {number} - the miles that can be driven after refueling
	 *
	 * EXAMPLE
	 * const focus = new Car('focus', 20, 30)
	 * focus.drive(600) // returns 600
	 * focus.drive(1) // returns 600 (no distance driven as tank is empty)
	 * focus.refuel(99) // returns 600 (tank only holds 20)
	 */
	refuel(gallons) {
		// ✨ implement
		if (gallons <= 0) return;
		if (gallons >= this.tank - this.currentGas) {
			this.currentGas = this.tank;
			return;
		}
		this.tank = +gallons;
	}
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
	// ✨ implement
	return new Promise((resolve, reject) => {
		if (typeof number !== 'number' || isNaN(number)) {
			reject({ message: 'number must be a number' });
		} else {
			// number % 2 === 0 ? resolve(true) : resolve(false);
			const res = number % 2 === 0;
			resolve(res);
		}
	});
}

module.exports = {
	trimProperties,
	trimPropertiesMutation,
	findLargestInteger,
	isEvenNumberAsync,
	Counter,
	Seasons,
	Car
};
