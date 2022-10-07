//when array is not empty
// const  usernames: string[] = ['admin','usman']
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// if ( usernames.length !== 0  ) {
//     for ( var i = 0 ; i < usernames.length ; i++){
//         const newUser = [...usernames]
//         if ( newUser.indexOf('admin') == i ){
//             console.log('Hello admin, would you like to see a status report?')
//         }else {
//             console.log("Hello " + newUser[i] + ", thank you for logging in again!")
//         }
//     }
// }else {
//     console.log("We need to find some users!");
// }
// when array is empty
var usernames = [];
if (usernames.length !== 0) {
    for (var i = 0; i < usernames.length; i++) {
        var newUser = __spreadArray([], usernames, true);
        if (newUser.indexOf('admin') == i) {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello " + newUser[i] + ", thank you for logging in again!");
        }
    }
}
else {
    console.log("We need to find some users!");
}
