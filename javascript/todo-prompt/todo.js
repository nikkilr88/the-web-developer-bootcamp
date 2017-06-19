var todos = ['Learn to code'];

console.log("\nWelcome to consoleTodos!");

var input = prompt('What would you like to do?');

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    }
    else if (input === "new") {
        addTodo();
    }
    else if (input === "delete") {
        deleteTodo();
    }

    input = prompt('What would you like to do?');
}

console.log('\nYou quit the app. Goodbye!')

function addTodo() {
    var newTodo = prompt('Enter new todo: ');
    todos.push(newTodo);
    console.log('\nTodo added!');
}

function deleteTodo() {
    var index = prompt("Enter index number of todo to delete: ");
    todos.splice(index, 1);
    console.log('\nTodo deleted!');
}

function listTodos() {
    console.log("\n**********");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}
