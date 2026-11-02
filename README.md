# Grade Calculator
A simple grade calculator that is responsive built with HTML, Tailwind CSS, and vanilla JavaScript. It accepts a student's name and scores in three subjects, calculates the total and average, then assigns a grade and remark using the average score.

---

## Technologies
- HTML5
- Tailwind CSS
- JavaScript

---

## Features
Here's what you can do with the grade calculator
- Collects a student's name and scores in Mathematics, English and Computer Science
- Calculates the combined score out of 300.
- Calculates the average score and displays it to two decimal places.
- Assigns a grade from A to F based on the average.
- Displays a performance remark alongside the grade.
- Uses HTML form validation to require the field and restrict each subject score to between 0 and 100.
- Accepts decimal scores.
- Uses a responsive Tailwind CSS layout.

---

## Grading system
- (70-100) - A - Excellent
- (60-69.99) - B - Very Good
- (50-59.99) - C - Good
- (45-49.99) - D - Fair
- (40-44.99) - E - Pass
- (Below 40) - F - Fail

---

## Running the project
- Download or clone the project.
- Make sure the generated src/output.css file exists and contains the compiled Tailwind CSS.
- Open index.html in a browser, preferably through a local development server such as the VS Code Live Server extension.
- Enter the student's name and three subject scores, then submit the form to calculate the result.

---

## Possible future improvements
- Add custom validation messages and clearer error states.
- Save previous student results using browser Local Storage.
- Add support for more subjects without repeating input and display code.
- Add a reset button to clear the form and previous result.
- Improve accessibility by associating visible <label> elements with each input.