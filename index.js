// Your Question class should have 3 properties:
//     * Question Text - This is the actual text of the given question
// * Answers - This should be an array containing the available answers for the question. The number of answers available for a given question is up to the Developer.
// * Correct Answer Index - This integer should be the index of the correct answer in your answer array.


class Questions {
    constructor(question, answers, correctanswer) {
        this.question = question;
        this.answers = answers;
        this.correctanswer = correctanswer;

    }

    //
// Your Question Class should have at least 2 methods:
//     * A method to output the question and the available answers.
// * A method that accepts an integer, and checks if the value matches the ```Correct Answer Index```.


    questionOutput(question) {
        console.log(this.question);
        console.log(answers);
    }

    answerprompt() {
        userInput = prompt("Enter the correct answer.");
        if (userInput !== this.correctanswer) {
            alert("Sorry! Wrong answer!");
        } else if (userInput === this.correctanswer) {
            alert('Correct!');
        }
    }



}


//
// ## Each answer should have a number displayed that the User can enter to pick an answer
// (using the Question class method you implemented) (2 points).

// ?????????

// Refer to image. (HINT: Use 0 - however many answers and use a ```Template String``` or
// simply concatenate the corresponding answer (+) to make a numbered answer in the console).
//


// #### Create 3 or more Question instances via the Question class constructor (1 point).
// Create question instances manually in your JavaScript code. An example of creating a new Question should
// look something like this (NOTE: Passing in the values for the 3 properties of the Question class to its Constructor):
//
let q1 = new Questions('Who is the greatest rapper alive?',['J.Cole', 'Lil Wayne', 'Kendrick Lamar'], 2);
let q2 = new Questions('Who is the queen of rap?',['Nicki Minaj','Missy Elliot','Oprah'],1);
let q3 = new Questions("What is Nicki Minaj's real name?",['Oprah', 'Tasha', 'Onika'],3);


// #### Load each question that you make/instantiate into an Available Question List array using any array method
// you choose to add the Questions as new elements in the array (1 point).

let available_question_list_array = [q1,q2,q3];
//
// #### Select one random question from your Available Question List array and log it to the console (0 points).
// Your Question class should be able to output the question and the available answers (refer to image above).
// Use this code or similar to generate a random index number to use to get a Question from your Available Question List array:
    

let index_of_a_question = Math.floor(Math.random() * available_question_list_array.length);

available_question_list_array.forEach(poser);
function poser(element){
    console.log(element);
}



// #### Prompt the User to enter the number of what they think the correct answer is (1 point).
// The user should input the corresponding number of the correct answer displayed in the JavaScript console.
{
    userInput = prompt("Enter the correct answer.");
    if (userInput !== this.correctanswer) {
        alert("Sorry! Wrong answer!");
    } else if (userInput === this.correctanswer) {
        alert('Correct!');
//




//     #### Use your Question Class method that checks for a correct answer (1 point).
// Check if the User’s answer is correct and display an alert stating if they were right or not.