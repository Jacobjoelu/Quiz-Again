import { view, game } from './quiz.js';

const url = './src/questions.json';

fetch(url)
  .then(res => res.json())
  .then(questionsArray => {
    const quiz = questionsArray.map(question => ({
      question: `What is ${question.name}'s real name?`,
      options: [question.realName], // Adjust options based on your requirements
      answer: question.realName
    }));

    view.start.addEventListener('click', () => game.start(quiz), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
  })
  .catch(error => {
    console.error('Error loading quiz:', error);
  });
