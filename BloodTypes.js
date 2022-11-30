function canGiveBlood(donor, receiver) {
    if(donor == "A+") {
        if(receiver == "A+" || receiver == "AB+") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "A-") {
        if(receiver == "A-"|| receiver == "A+" || receiver == "AB+" || receiver == "AB-") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "B+") {
        if(receiver == "B+" || receiver == "AB+") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "B-") {
        if(receiver == "B-" || receiver == "B+" || receiver == "AB-" || receiver == "AB+") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "AB+") {
        if(receiver == "AB+") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "AB-") {
        if(receiver == "AB-" || receiver == "AB+") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "O+") {
        if(receiver == "O+" || receiver == "B+" || receiver == "A+" || receiver == "AB+") {
            return true;
        } else {
            return false;
        }

    } else if(donor == "O-") {
        if(receiver == "O-" || receiver == "O+" || receiver == "A-" || receiver == "A+" || receiver == "B-" || receiver == "B+" || receiver == "AB+" || receiver == "AB-") {
            return true;
        } else {
            return false;
        }

    } else {
        return "This is an invalid blood type.";
    }

}

console.log(canGiveBlood("O+", "A+")) // Test Run Result: true 
console.log(canGiveBlood("A-", "B-")) // Test Run Result: false 
console.log(canGiveBlood("A-", "AB+")) // Test Run Result: true 