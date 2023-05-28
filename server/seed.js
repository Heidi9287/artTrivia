const Card = require('./card');
const db = require('./db');

let AllCards = [
  {
    question:
      "Is Leonardo da Vinci's 'Mona Lisa' displayed in the Louvre Museum?",
    answer: 'Yes',
  },
  {
    question:
      'Did Vincent van Gogh only sell one painting during his lifetime?',
    answer: 'Yes',
  },
  {
    question:
      "Is the painting 'Starry Night' by Vincent van Gogh housed in the Metropolitan Museum of Art?",
    answer: 'No',
  },
  {
    question:
      'Is the De Stijl movement primarily associated with organic shapes, curvilinear forms, and intricate ornamentation?',
    answer: 'No',
  },
  {
    question:
      'Is the Memphis Group known for its postmodern furniture and product designs?',
    answer: 'Yes',
  },
  {
    question: 'Did Claude Monet primarily paint urban landscapes?',
    answer: 'No',
  },
  {
    question: `Did Henri Matisse co-found the Fauvism movement?`,
    answer: 'Yes',
  },
  {
    question:
      'Did classical art primarily originate from Central European civilizations and Northern European mythology',
    answer: 'No',
  },
  { question: 'Did Henry Matisse co-found the Cubist movement?', answer: 'No' },
  {
    question:
      'Did Leonardo da Vinci paint the ceiling of the Sistine Chapel in Vatican City?',
    answer: 'No',
  },
  {
    question:
      "Is the painting 'The Scream' by Edvard Munch primarily associated with Abstract Expressionism?",
    answer: 'No',
  },
  {
    question:
      'Is the Bauhaus school primarily known for its focus on traditional artistic techniques and craftsmanship?',
    answer: 'No',
  },
  {
    question:
      'Is Damien Hirst known for his use of unconventional materials in his artworks?',
    answer: 'Yes',
  },
  {
    question: 'Is Cindy Sherman associated with minimalist sculpture? ',
    answer: 'No',
  },
  {
    question: 'Did the Dada movement originate in the 21st century? ',
    answer: 'No',
  },
  {
    question:
      'Is Yayoi Kusama known for her minimalist, monochromatic artworks? ',
    answer: 'No',
  },
  {
    question: 'Did the Surrealist movement emerge in the early 20th century?',
    answer: 'Yes',
  },
  {
    question:
      'Did the Neo-Expressionist movement primarily flourish in the 1960s? ',
    answer: 'No',
  },
  {
    question:
      "Did Piet Mondrian's art primarily feature grid-like compositions and primary colors?",
    answer: 'Yes',
  },
  {
    question: 'Did Frida Kahlo primarily create realistic self-portraits?',
    answer: 'No',
  },
  {
    question:
      "Is Georgia O'Keeffe primarily known for her involvement in the Abstract Expressionist movement?",
    answer: 'No',
  },
  {
    question: 'Is Joan Miro associated with the Surrealist movement?',
    answer: 'Yes',
  },
  {
    question:
      'Did Claude Monet primarily focus on creating abstract or non-representational artworks?',
    answer: 'No',
  },
  {
    question:
      'Did Salvador Dalí primarily create traditional still-life paintings?',
    answer: 'No',
  },
  {
    question: 'Did Wassily Kandinsky primarily believe that abstract art could only evoke rational and logical responses rather than emotional and spiritual ones?',
    answer: 'No',
  },
  { question: 'Did Banksy start his artistic career as a traditional oil painter? ', answer: 'No' },
  {
    question: 'Did Ai Weiwei ever worked in architecture',
    answer: 'Yes',
  },
  {
    question:
      'Did William Morris primarily work in the field of industrial design?',
    answer: 'No',
  },
  { question: 'Is "The Last Supper" a famous mural painting?', answer: 'Yes' },
  {
    question: 'Is the Eames Lounge Chair a well-known example of mid-century modern furniture design?',
    answer: 'Yes',
  },
  { question: 'Did Frank Lloyd Wright focus on designing skyscrapers?', answer: 'No' },
  {
    question:
      'Is Pablo Picasso a womanizer?',
    answer: 'Yes',
  },
];

const seed = async () => {
  console.log('STARTING DB SEED...');

  await db.sync({ force: true });
  AllCards = await Promise.all(AllCards.map((item) => Card.create(item)));
  console.log('DB SEED COMPLETE.');
};

seed();
