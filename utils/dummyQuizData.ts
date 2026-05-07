export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  image?: string; 
};

export const Questions: Question[] = [
  {
    id: 1,
    question: "Which team did Pep Guardiola manage before joining Manchester City?",
    options: ["Bayern Munich", "FC Porto", "Paris Saint-Germain", "Juventus"],
    correctAnswer: "Bayern Munich",
  },
  {
    id: 2,
    question: "How many players are on the field for one team in a standard football match?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11",
  },
  {
    id: 3,
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    correctAnswer: "France",
  },
  {
    id: 4,
    question: "Who holds the record for most goals in a single FIFA World Cup tournament?",
    options: ["Ronaldo", "Just Fontaine", "Miroslav Klose", "Pelé"],
    correctAnswer: "Just Fontaine",
  },
  {
    id: 5,
    question: "Which club has won the most UEFA Champions League titles?",
    options: ["Barcelona", "AC Milan", "Real Madrid", "Bayern Munich"],
    correctAnswer: "Real Madrid",
  },
  {
    id: 6,
    question: "In which year was the first FIFA World Cup held?",
    options: ["1926", "1930", "1934", "1938"],
    correctAnswer: "1930",
  },
  {
    id: 7,
    question: "Which player is known as 'The Egyptian King'?",
    options: ["Sadio Mané", "Mohamed Salah", "Riyad Mahrez", "Hakim Ziyech"],
    correctAnswer: "Mohamed Salah",
  },
  {
    id: 8,
    question: "What is the maximum duration of extra time in a football match?",
    options: ["20 minutes", "30 minutes", "40 minutes", "45 minutes"],
    correctAnswer: "30 minutes",
  },
  {
    id: 9,
    question: "Which country has won the most FIFA World Cup titles?",
    options: ["Germany", "Italy", "Argentina", "Brazil"],
    correctAnswer: "Brazil",
  },
  {
    id: 10,
    question: "Who won the Ballon d'Or in 2023?",
    options: ["Kylian Mbappé", "Erling Haaland", "Lionel Messi", "Vinicius Jr."],
    correctAnswer: "Lionel Messi",
  },
];
