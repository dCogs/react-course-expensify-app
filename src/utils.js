console.log('utils.js is running');
const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { square, add, subtract as default };
// could also combine on one line, like
// export const square = (x) => x * x;
// and export default subtract;