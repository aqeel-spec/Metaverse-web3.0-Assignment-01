const  current_users: string[] = ['eric', 'willie', 'admin', 'erin', 'Ever'];
const new_users: string[] = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];


new_users.map((idx) => {
    if (current_users.includes(idx.toLowerCase())) {
      console.log(idx, " you will need to enter a new username");
    } else console.log("username is available");
});