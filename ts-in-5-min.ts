interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
}

// annotating function parameters

function userActions (inputUser: User) {
    // ..
}