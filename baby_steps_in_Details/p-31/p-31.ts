           //when array is not empty
// const  usernames: string[] = ['admin','usman']

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
const  usernames: string[] = []

if ( usernames.length !== 0  ) {
    for ( var i = 0 ; i < usernames.length ; i++){
        const newUser = [...usernames]
        if ( newUser.indexOf('admin') == i ){
            console.log('Hello admin, would you like to see a status report?')
        }else {
            console.log("Hello " + newUser[i] + ", thank you for logging in again!")
        }
    }
}else {
    console.log("We need to find some users!");
}
