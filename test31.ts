let current_users: string[] = ['john', 'kate', 'peter', 'sara', 'oliver'];
let new_users: string[] = ['SARA', 'joe', 'kate', 'anna', 'alex'];

for (let i = 0; i < new_users.length; i++) {
  let new_username = new_users[i].toLowerCase();
  if (current_users.includes(new_username)) {
    console.log(`Sorry, the username "${new_users[i]}" is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations, the username "${new_users[i]}" is available!`);
  }
}