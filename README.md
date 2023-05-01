Readme
This code is a simple quiz game built with HTML, CSS, and JavaScript. It presents a series of multiple-choice questions to the user and keeps track of their score and time remaining. If the user answers all the questions before time runs out, they are prompted to submit their score with their initials.

How to Use
To use the quiz game, simply open the HTML file in a web browser. Click the "Start" button to begin the quiz. Answer each question by clicking on one of the provided options. If the answer is correct, the score will be incremented. If the answer is incorrect, 5 seconds will be deducted from the remaining time. The quiz will end either when all questions have been answered or time has run out.

Modifying the Questions
The questions for the quiz are stored in an array of objects at the beginning of the JavaScript file. To modify the questions, simply edit the questions array. Each question is represented as an object with a question property and an answers property. The question property should be a string representing the question being asked. The answers property should be an array of objects representing the possible answers. Each answer object should have a text property representing the text of the answer and a correct property representing whether the answer is correct.

Adding More Questions
To add more questions to the quiz, simply add another object to the questions array with the same format as the existing questions.

Resetting the Quiz
There is no explicit "reset" button for the quiz, but the user can simply reload the page to start over.
