const Card = require('./card');
const db = require('./db');

let AllCards = [
  {
    question:
      "Is Leonardo da Vinci's 'Mona Lisa' displayed in the Louvre Museum?",
    answer: 'Yes',
    detailAnswer:
      'Mona Lisa is displayed in the Louvre Museum in Paris, France, in a climate-controlled enclosure and is protected by bulletproof glass.',
    image: '/monaLisa.svg',
  },
  {
    question:
      'Did Vincent van Gogh only sell one painting during his lifetime?',
    answer: 'No',
    detailAnswer:
      'Vincent van Gogh sold more than one painting during his lifetime. While van Gogh faced challenges in gaining recognition as an artist during his lifetime, he did manage to sell a few paintings.',
    image: '/vanGogh.svg',
  },
  {
    question:
      "Is the painting 'Starry Night' by Vincent van Gogh housed in the Metropolitan Museum of Art?",
    answer: 'No',
    detailAnswer: ' "Starry Night" is part of the collection of the Museum of Modern Art (MoMA) in New York City, instead of the Metropolitan Museum of Art.',
    image: '/starryNight.svg',
  },
  {
    question:
      'Is the De Stijl movement primarily associated with organic shapes, curvilinear forms, and intricate ornamentation?',
    answer: 'No',
    detailAnswer: 'De Stijl movement emphasis on simplicity, geometric abstraction, and a visual language rooted in basic shapes and primary colors, rather than organic or curvilinear forms.',
    image: '/deStijl.svg',
  },
  {
    question:
      'Is the Memphis Group known for its postmodern furniture and product designs?',
    answer: 'Yes',
    detailAnswer: 'The Memphis Group is widely known for its postmodern furniture and product designs.  Their work challenged established norms and contributed to the emergence of postmodernism in the design field.',
    image: '/memphis.svg',
  },
  {
    question: 'Did Claude Monet primarily paint urban landscapes?',
    answer: 'No',
    detailAnswer: 'Claude Monet is best known for his landscapes, particularly his depictions of nature and outdoor scenes. While Monet did paint some urban scenes, his focus on capturing the beauty of the natural world and its landscapes remains his primary artistic subject.',
    image: '/monet.svg',
  },
  {
    question: 'Did Henri Matisse co-found the Fauvism movement?',
    answer: 'Yes',
    detailAnswer: "Henri Matisse's works were instrumental in defining the Fauvist style.",
    image: '/matisse.svg',
  },
  {
    question:
      'Did classical art primarily originate from Central European civilizations and Northern European mythology',
    answer: 'No',
    detailAnswer: 'Classical art refers to the art of ancient Greece and Rome, which emerged in the Mediterranean region.',
    image: '/classicalArt.svg',
  },
  {
    question:
      'Did Leonardo da Vinci paint the ceiling of the Sistine Chapel in Vatican City?',
    answer: 'No',
    detailAnswer: 'Michelangelo was commissioned by Pope Julius II to paint the ceiling of the Sistine Chapel, and he worked on it between 1508 and 1512',
    image: '/chapel.svg',
  },
  {
    question:
      "Is the painting 'The Scream' by Edvard Munch primarily associated with Abstract Expressionism?",
    answer: 'No',
    detailAnswer: '"The Scream" predates the emergence of the Abstract Expressionist movement by several decades.',
    image: '/scream.svg',
  },
  {
    question:
      'Is the Bauhaus school primarily known for its focus on traditional artistic techniques and craftsmanship?',
    answer: 'No',
    detailAnswer: 'The Bauhaus movement sought to break away from traditional art and craft practices and embrace a more modern and interdisciplinary approach to design.',
    image: '/bauhaus.svg',
  },
  {
    question:
      'Is Damien Hirst known for his use of unconventional materials in his artworks?',
    answer: 'Yes',
    detailAnswer: "Hirst's innovative and controversial approach to materials has made him a prominent figure in the contemporary art world, and his works continue to elicit both admiration and debate.",
    image: '/hirst.svg',
  },
  {
    question: 'Is Cindy Sherman associated with minimalist sculpture?',
    answer: 'No',
    detailAnswer: 'Cindy Sherman is a highly influential artist known for her photographic works, particularly her self-portraits, she is not commonly associated with minimalist sculpture.',
    image: '/sherman.svg',
  },
  {
    question: 'Did the Dada movement originate in the 21st century?',
    answer: 'No',
    detailAnswer: 'The Dada movement emerged during the early 20th century, specifically around 1916, in Zurich, Switzerland, during World War I.',
    image: '/dada.svg',
  },
  {
    question:
      'Is Yayoi Kusama known for her minimalist, monochromatic artworks? ',
    answer: 'No',
    detailAnswer: 'While Yayoi Kusama was associated with some minimalist and monochromatic elements in her early career, her later works are characterized by bold colors and repetitive patterns.',
    image: '/kusama.svg',
  },
  {
    question: 'Did the Surrealist movement emerge in the early 20th century?',
    answer: 'Yes',
    detailAnswer: 'Surrealism was a cultural and artistic movement that emerged in the 1920s, particularly in the aftermath of World War I.',
    image: '/surreal.svg',
  },
  {
    question:
      'Did the Neo-Expressionist movement primarily flourish in the 1960s?',
    answer: 'No',
    detailAnswer: 'The Neo-Expressionist movement emerged in the late 1970s and reached its peak in the 1980s.',
    image: '/basquiat.svg',
  },
  {
    question:
      "Did Piet Mondrian's art primarily feature grid-like compositions and primary colors?",
    answer: 'Yes',
    detailAnswer: "Piet Mondrian's art primarily featured grid-like compositions and primary colors. Mondrian was a Dutch artist who played a key role in the development of abstract art and was a prominent figure in the De Stijl movement.",
    image: '/modrian.svg',
  },
  {
    question: 'Did Frida Kahlo primarily create realistic self-portraits?',
    answer: 'No',
    detailAnswer: "While Frida Kahlo's art often contained elements of realism, it is important to note that her works cannot be categorized solely as realistic. Kahlo's artistic style was diverse and encompassed various influences.",
    image: '/frida.svg',
  },
  {
    question:
      "Is Georgia O'Keeffe primarily known for her involvement in the Abstract Expressionist movement?",
    answer: 'No',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question: 'Is Joan Miro associated with the Surrealist movement?',
    answer: 'Yes',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question:
      'Did Salvador Dalí primarily create traditional still-life paintings?',
    answer: 'No',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question:
      'Did Wassily Kandinsky primarily believe that abstract art could only evoke rational and logical responses rather than emotional and spiritual ones?',
    answer: 'No',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question:
      'Did Banksy start his artistic career as a traditional oil painter? ',
    answer: 'No',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question: 'Did Ai Weiwei ever worked in architecture',
    answer: 'Yes',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question:
      'Did William Morris primarily work in the field of industrial design?',
    answer: 'No',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question: 'Is "The Last Supper" a famous mural painting?',
    answer: 'Yes',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question:
      'Is the Eames Lounge Chair a well-known example of mid-century modern furniture design?',
    answer: 'Yes',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question: 'Did Frank Lloyd Wright focus on designing skyscrapers?',
    answer: 'No',
    detailAnswer: '',
    image: '/hirst.svg',
  },
  {
    question: 'Is Pablo Picasso a womanizer?',
    answer: 'Yes',
    detailAnswer: '',
    image: '/hirst.svg',
  },
];

const seed = async () => {
  console.log('STARTING DB SEED...');

  await db.sync({ force: true });
  AllCards = await Promise.all(AllCards.map((item) => Card.create(item)));
  console.log('DB SEED COMPLETE.');
};

seed();
