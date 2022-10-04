var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ['new yark', 'swizer land', 'germany', 'dubai'];
var alphaOrder = __spreadArray([], locations, true);
console.log(locations);
console.log('\nAlphabatical order : ');
console.log(alphaOrder.sort());
console.log('\nOriginal Array : ');
console.log(locations);
//reverse order of aplhabatical
console.log('\nReverse alphabatical order : ');
console.log(alphaOrder.reverse());
//original array
console.log('\nOriginal Array : ');
console.log(locations);
//original order reverse
console.log('\nReverse original order array');
console.log(locations.reverse());
//again reverse original array
console.log('\n Again reverse original order array');
console.log(locations.reverse());
//change location sort 
console.log('\nReverse alphabatical order : ');
console.log(locations.sort());
//again reverse alphabatical order
console.log('\n Again reverse alphabatical order : ');
console.log(locations.reverse());
