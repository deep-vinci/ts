var user = {
    name: "Hayes",
    id: 0,
};
var newUser = {
    name: "Lorem Ipsum",
    id: 231987,
};
// Annotating function parameters
function userActions(inputUser) {
    console.log(inputUser);
    return 23;
}
userActions(newUser);
// Return value type for a function
function getUser() {
    return newUser;
}
console.log(getUser().name); // Call the function, not log the reference
var currentGameState;
currentGameState = "playing";
currentGameState = "idle";
// currentGameState = "newmode"; 
