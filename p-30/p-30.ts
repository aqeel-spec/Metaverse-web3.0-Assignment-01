const usernames = ['Usman', 'Haider', 'admin', 'Farooq', 'Muzammal'];

for  (var  i = 0 ; i < usernames.length ; i++) {
    const newUser = [...usernames];
    if ( newUser.indexOf('admin') == i){
        console.log("Hello admin, would you like to see a status report?")
    }else {
        console.log("Hello " + newUser[i] + ", thank you for logging in again!")
    }
}