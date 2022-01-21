
let Name = [];
let todoList = [];

function getReply(command) {
    let userCommands = command.split(" "); // splits the oommands into words
    // console.log(userCommand)
    if (command.includes("Hello my name is") && Name.length === 0) {
        let personName = userCommands.slice(-1);
        Name.push(personName);

        // console.log(Name)
        return "Nice to meet you " + personName;
    } else if (command.includes('Hello my name is') && Name.length !== 0) {
        return "You are already existed " + Name[0];
    } else if (command.includes('What is my name')) {
        if (Name === "" || Name === undefined) {
            return "Please enter your name";
        } else {
            return "Your name is " + Name[0];
        }
    }


        // todoList

      else if (command.includes("Add") && command.includes("to my todo")) { // Add fishing to my todo and Add singing in the shower to my todo
        let toAdd = userCommands.slice(1, -3).join(" ");

        todoList.push(toAdd);

        return toAdd + " is added to my todo";
    } else if (command.includes("Remove") && command.includes("my todo")) {
        let toRemove = userCommands.slice(1, -3).join(" ");

        if (todoList.includes("toRemove")) {
            todoList.splice(todoList.indexOf(toRemove), 1);

            return toRemove + " is removed from my todo";
        }
        return toRemove + " removed from my todo";
    }
    if (command === "What is on my todo?") {
        return `You have ${todoList.length} todos - ${todoList}`;
    }


    // Date format



    else if (
        command.includes("What") && command.includes("date" || "day") && command.includes("is it today")) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let today = new Date();
        let day = today.getDate();
        let month = months[today.getMonth()];
        let year = today.getFullYear();

        // show date in two digits
        if (day < 10) {
            day = '0' + day;
        }
        // now we have day, month and year
        // arrange them in the format we want
        return `Today is the ${day}. of ${month} ${year}`;
    }


    // Math functionality


    else if (
        command.includes("+") || command.includes("*") || command.includes("-") || command.includes("/")) {
        if (command.includes("+")) {
            return parseInt(userCommands[2]) + parseInt(userCommands[4]);
        } else if (command.includes("*")) {
            return parseInt(userCommands[2]) * parseInt(userCommands[4]);
        } else if (command.includes("-")) {
            return parseInt(userCommands[2]) - parseInt(userCommands[4]);
        } else if (command.includes("/")) {
            return parseInt(userCommands[2]) / parseInt(userCommands[4]);
        }
    }



    // Set a timer for


    else if (command.includes("Set a timer")) {
        let mins = userCommands[userCommands.length - 2];
        let milliseconds = mins * 60 * 1000; // should convert mins into milliseconds
        
        function setTimer() {
            console.log(`Timer is set for ${mins} minute(s)`);
        }
        setTimer();
        setTimeout(
            () => {
              console.log('Timer done');
            },
            milliseconds
          );
    }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What date is it today"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("what is 125 / 25"));
console.log(getReply("what is 157 - 57"));
console.log(getReply("Set a timer for 1 minute"));