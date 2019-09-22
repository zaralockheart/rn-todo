let cache: any = {};
export default {
	setItem: (key: any, value: any) => {
		return new Promise((resolve, reject) => {
			return (typeof key !== 'string' || typeof value !== 'string')
				? reject(new Error('key and value must be string'))
				: resolve(cache[key] = value);
		});
	},
	getItem: (key: any, value: any) => {
		return new Promise((resolve) => {
			return cache.hasOwnProperty(key)
				? resolve(cache[key])
				: resolve(null);
		});
	},
	removeItem: (key: any) => {
		return new Promise((resolve, reject) => {
			return cache.hasOwnProperty(key)
				? resolve(delete cache[key])
				: reject('No such key!');
		});
	},
	clear: (key: any) => {
		return new Promise((resolve, reject) => resolve(cache = {}));
	},

	getAllKeys: (key: any) => {
		return new Promise((resolve, reject) => resolve(Object.keys(cache)));
	},
}
