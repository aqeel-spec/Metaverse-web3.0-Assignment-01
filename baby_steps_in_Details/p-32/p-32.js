var current_users = ['eric', 'willie', 'admin', 'erin', 'Ever'];
var new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];
new_users.map(function (idx) {
    if (current_users.includes(idx.toLowerCase())) {
        console.log(idx, " you will need to enter a new username");
    }
    else
        console.log("username is available");
});
