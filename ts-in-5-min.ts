interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

const newUser: User = {
    name: "Lorem Ipsum",
    id: 231987,
};

// Annotating function parameters
function userActions(inputUser: User): number {
    console.log(inputUser);
    return 23;
}

userActions(newUser);

// Return value type for a function
function getUser(): User {
    return newUser;
}

console.log(getUser().name); // Call the function, not log the reference


// types

type gameStates = "playing" | "idle";

let currentGameState: gameStates;

currentGameState = "playing";
currentGameState = "idle";

// currentGameState = "newmode"; 