# Quiz-Game
* [Task](#Task)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Process](#Process)
* [Sample of Code](#Sample-of-Code)
* [Links](#Links)

## Task

As you proceed in your journey to becoming a full-stack web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. 

To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework will teach you all the skills you need to succeed in this assignment.


## User-Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```


## Acceptance-Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```


## Process
* For this project I started with the HTML lay out and created all the neccesary elements that I neededas wells as the id names So I can reach then with JS 
* I continue with CSS and added the rset classs to reset browsers, I pplieds style to html style to match the example provided
* Went on to code to make the quiz, as I started  I used all the ids created tto target each element, weather for events, put or get value out of the elelments.
* I created  various funtions, StartGame()-to start by calling time()-which will display and format time, it calls displayQuestion() - to display first set of questions. After each question is display they will appear with button event, which will call checkAnswer() to checkanswer, removeChildren()- removes last question, and displayQuestion to display the next question, and this will loop till the end of question or will end when time is out. When questionaire or time is out then page that records initials appears, this will collect data to be set to local storage which will be later grad by highscore page to render the data.
* there is other funtion as well, to clear time and set variables to starting values, to jump around start to end, and function to clear data from local storage.  


## Samples-of-Code
![CODE](https://github.com/Tuzosdaniel12/Quiz-Game/blob/main/assets/images/code-01.png)

## Links
https://tuzosdaniel12.github.io/Quiz-Game/

https://github.com/Tuzosdaniel12/Quiz-Game/blob/main/
