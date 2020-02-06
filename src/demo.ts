export function addTwoNumbers(value1: number, value2: number) {
    return value1 + value2;
}

export function addCallback(a: number, b: number, callback: (err: Error, c: number) => void) {
	setTimeout(()=>{
		callback(null, a + b);
	}, 500);
}

export function addWithPromise(a, b) {
	// return Promise.reject(new Error('fake'))
	return Promise.resolve(a+b)
}
