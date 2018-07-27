import numeral from 'numeral';
import './index.css'; // Webpack will serialize CSS in JS - if this makes sense.


const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`I would pay ${courseValue} for this course`);
