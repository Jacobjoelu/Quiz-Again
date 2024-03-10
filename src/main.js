import { view, game }from '../src/quiz.js' ;
import questions from './question.js';


const quiz = questions.map(question => ({
      question: question.question,
      options: question.options, // Adjust options based on your requirements
      answer: question.answer
    }));


    view.start.addEventListener('click', () => game.start(quiz), true);
    view.response.addEventListener('click', (event) => game.check(event), true);

// fetch(url)
//   .then(res => res.json())
//   .then(questionsArray => {

//   })
//   .catch(error => {
//     console.error('Error loading quiz:', error);
//   });
