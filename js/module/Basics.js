const add = (...args) => args.reduce((prev, curr) => prev + curr, 0);

const multiply = (...args) => args.reduce((prev, curr) => prev * curr, 1);

export { add, multiply };
