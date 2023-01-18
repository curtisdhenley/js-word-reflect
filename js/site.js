// entry point AKA Controller
function getValues() {
    let userString = document.getElementById('userString').value;

    let reversedString = reverseAString(userString);

    displayString(reversedString);
}

// logic function
// reverse a string
function reverseAString(userString) {




    return // some string
}

// view function
function displayString(reversedString) {
    document.getElementById('results').innerHTML = reversedString;
    document.getElementById('alert').classList.remove('invisible')
}