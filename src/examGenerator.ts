import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ExamPassage {
  title: string;
  text: string;
  unitId: number;
  questions: Array<{
    question: string;
    answer: string;
    options?: string[];
    isTrueFalse?: boolean;
    correctTF?: "True" | "False";
  }>;
}

export interface SpellingQuestion {
  word: string;
  clue: string;
  gapped: string; // e.g. "c h _ m _ s t r y"
  unitId: number;
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correct: string;
  unitId: number;
}

export interface WritingQuestion {
  jumbled: string;
  ordered: string;
  unitId: number;
}

export interface ExamPaper {
  id: string;
  passage: ExamPassage;
  spelling: SpellingQuestion[];
  vocabMatching: Array<{ word: string; definitionOrSentence: string }>;
  grammar: GrammarQuestion[];
  writing: WritingQuestion[];
}

// Pre-defined exam passages based on Grade 1 curriculum (SMILE Starter 1)
const PASSAGES: ExamPassage[] = [
  {
    title: "My Name is Ahmed",
    text: "Hello! My name is Ahmed. I am Sudanese. I am eight years old. My best friend is Badr. We play together every day. Ahmed has got a green school bag with an apple and a book inside.",
    unitId: 1,
    questions: [
      { question: "What is the boy's name?", answer: "His name is Ahmed." },
      { question: "How old is Ahmed?", answer: "He is eight years old." },
      { question: "Ahmed is from England.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Ahmed has got a green bag.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Little Ali is Lost",
    text: "Little Ali is lost. He is five years old. He has got a red t-shirt, brown eyes, and black hair. Ali sees four hens and five frogs near the trees. The friendly frogs say, 'This way, Ali!' to show him the house. Ali finds his mother Amna and is very happy.",
    unitId: 2,
    questions: [
      { question: "How old is Little Ali?", answer: "He is five years old." },
      { question: "What animal shows Ali his house?", answer: "The frogs." },
      { question: "Ali has got a blue t-shirt.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Ali's mother is named Amna.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Our Sudanese Flag",
    text: "This is our beautiful Sudanese flag. It has got four colours. The colours are red, green, white and black. Badr can draw the flag in his blue school book. We love our flag very much.",
    unitId: 3,
    questions: [
      { question: "How many colours are there in the Sudanese flag?", answer: "Four colours." },
      { question: "What are the colours of our flag?", answer: "Red, green, white and black." },
      { question: "The flag has blue colour.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Badr can draw the flag.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Gonfooth the Small Hedgehog",
    text: "Gonfooth is a small hedgehog. He has got a small body and long sharp spines. Gonfooth walks through the grass and sees Mrs Rabbit and Mr Monkey. Mr Fox is hungry and has got big teeth, but he cannot catch Gonfooth.",
    unitId: 4,
    questions: [
      { question: "What animal is Gonfooth?", answer: "He is a hedgehog." },
      { question: "Who has got big teeth?", answer: "Mr Fox." },
      { question: "Gonfooth has got a big body.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Mr Fox is hungry.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Our Bright Classroom",
    text: "This is our school classroom. It is very clean and bright. Our teacher is Mrs Hind. We sit on wooden chairs next to our desks. There is a blackboard and a big fan on the wall. Reem's toy is in her school bag under her desk.",
    unitId: 5,
    questions: [
      { question: "Who is the teacher in the classroom?", answer: "Mrs Hind." },
      { question: "Where is Reem's toy?", answer: "In her school bag under her desk." },
      { question: "The classroom has got a fan.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "The children sit on the floor.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  }
];

const SPELLING_POOL: SpellingQuestion[] = [
  { word: "APPLE", clue: "A round sweet red or green fruit", gapped: "a p _ l e", unitId: 1 },
  { word: "BAG", clue: "You carry books to school in this", gapped: "b _ g", unitId: 1 },
  { word: "BED", clue: "You sleep on this at night", gapped: "b _ d", unitId: 1 },
  { word: "DESK", clue: "A school table for writing", gapped: "d _ s k", unitId: 1 },
  { word: "NILE", clue: "The great river that flows through Sudan", gapped: "n i _ e", unitId: 2 },
  { word: "SUN", clue: "It shines hot in the sky", gapped: "s _ n", unitId: 2 },
  { word: "RED", clue: "The colour of a tomato or stop light", gapped: "r _ d", unitId: 3 },
  { word: "BLUE", clue: "The colour of the clear sky", gapped: "b l _ e", unitId: 3 },
  { word: "BODY", clue: "It has a head, neck, arms, and legs", gapped: "b o _ y", unitId: 4 },
  { word: "EYES", clue: "You see things with these", gapped: "e y _ s", unitId: 4 },
  { word: "DOOR", clue: "You open this to enter the classroom", gapped: "d o _ r", unitId: 5 },
  { word: "BOARD", clue: "The teacher writes on this in class", gapped: "b o _ r d", unitId: 5 }
];

const GRAMMAR_POOL: GrammarQuestion[] = [
  { question: "Hello! I ________ Ahmed. What's your name?", options: ["am", "is", "are"], correct: "am", unitId: 1 },
  { question: "I have got two ________.", options: ["bags", "bag", "a bag"], correct: "bags", unitId: 1 },
  { question: "How old ________ you, Badr?", options: ["are", "is", "am"], correct: "are", unitId: 2 },
  { question: "How ________ frogs are there in the Nile?", options: ["many", "much", "old"], correct: "many", unitId: 2 },
  { question: "What colour ________ his hair?", options: ["is", "are", "be"], correct: "is", unitId: 3 },
  { question: "What colour are her eyes? They ________ brown.", options: ["are", "is", "am"], correct: "are", unitId: 3 },
  { question: "I ________ got a yellow lemon.", options: ["have", "has", "am"], correct: "have", unitId: 4 },
  { question: "Fatma ________ got a green melon.", options: ["has", "have", "is"], correct: "has", unitId: 4 },
  { question: "Where is the book? It's ________ the bag.", options: ["in", "on", "under"], correct: "in", unitId: 5 },
  { question: "Is it a pen? Yes, it ________.", options: ["is", "isn't", "not"], correct: "is", unitId: 5 }
];

const WRITING_POOL: WritingQuestion[] = [
  { jumbled: "Badr / is / name / My / .", ordered: "My name is Badr.", unitId: 1 },
  { jumbled: "old / are / How / you / ?", ordered: "How old are you?", unitId: 2 },
  { jumbled: "is / Sudanese / the / flag / red / .", ordered: "The Sudanese flag is red.", unitId: 3 },
  { jumbled: "got / a / I / melon / have / .", ordered: "I have got a melon.", unitId: 4 },
  { jumbled: "under / table / is / the / book / The / .", ordered: "The book is under the table.", unitId: 5 }
];

/**
 * Generic helper to select a list of unique items from a pool,
 * ensuring no duplicate keys within the same selection,
 * and preferring items that have not been globally used.
 */
function getUniqueSelection<T>(
  pool: T[],
  countNeeded: number,
  getKey: (item: T) => string,
  globalUsedKeys: Set<string>
): T[] {
  let available = pool.filter(item => !globalUsedKeys.has(getKey(item)));
  
  if (available.length < countNeeded) {
    available = [...pool];
  }
  
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  
  const selection: T[] = [];
  const selectionKeys = new Set<string>();
  
  for (const item of shuffled) {
    const key = getKey(item);
    if (!selectionKeys.has(key)) {
      selectionKeys.add(key);
      selection.push(item);
      if (selection.length === countNeeded) {
        break;
      }
    }
  }
  
  selection.forEach(item => globalUsedKeys.add(getKey(item)));
  
  return selection;
}

/**
 * Generates an array of non-overlapping A4 exam papers
 */
export function generateSudanExams(
  count: number,
  scope: "all" | "unit" | "lesson",
  targetUnitId?: number,
  targetLessonId?: number
): ExamPaper[] {
  const papers: ExamPaper[] = [];

  const usedPassageTitles = new Set<string>();
  const usedSpellingWords = new Set<string>();
  const usedVocabWords = new Set<string>();
  const usedGrammarQuestions = new Set<string>();
  const usedWritingJumbled = new Set<string>();

  for (let i = 0; i < count; i++) {
    // 1. FILTER PASSAGES
    let passagePool = [...PASSAGES];
    if (scope === "unit" && targetUnitId !== undefined) {
      passagePool = passagePool.filter((p) => p.unitId === targetUnitId);
    }
    if (passagePool.length === 0) {
      passagePool = [...PASSAGES];
    }
    const selectedPassages = getUniqueSelection(
      passagePool,
      1,
      (p) => p.title,
      usedPassageTitles
    );
    const passage = selectedPassages[0] || PASSAGES[0];

    // 2. FILTER SPELLING
    let spellingPool = [...SPELLING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      spellingPool = spellingPool.filter((s) => s.unitId === targetUnitId);
    }
    if (spellingPool.length === 0) {
      spellingPool = [...SPELLING_POOL];
    }
    const spellingShuffled = getUniqueSelection(
      spellingPool,
      Math.min(spellingPool.length, 4),
      (s) => s.word,
      usedSpellingWords
    );

    // 3. FILTER VOCABULARY MATCHING
    let vocabWordsPool: WordItem[] = [];
    if (scope === "unit" && targetUnitId !== undefined) {
      const selectedUnit = SMILE_UNITS.find((u) => u.id === targetUnitId);
      if (selectedUnit) {
        vocabWordsPool = [...selectedUnit.words];
      }
    } else {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    if (vocabWordsPool.length === 0) {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    const vocabSelection = getUniqueSelection(
      vocabWordsPool,
      Math.min(vocabWordsPool.length, 5),
      (v) => v.word.toLowerCase().trim(),
      usedVocabWords
    );

    const vocabMatching = vocabSelection.map((item) => {
      const regex = new RegExp(`\\b${item.word}\\b`, "gi");
      let sentence = item.example;
      if (regex.test(sentence)) {
        sentence = sentence.replace(regex, "________");
      } else {
        sentence = sentence.replace(item.word, "________");
        sentence = sentence.replace(item.word.toLowerCase(), "________");
      }
      return {
        word: item.word.toUpperCase(),
        definitionOrSentence: sentence
      };
    });

    // 4. FILTER GRAMMAR
    let grammarPool = [...GRAMMAR_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      grammarPool = grammarPool.filter((g) => g.unitId === targetUnitId);
    }
    if (grammarPool.length === 0) {
      grammarPool = [...GRAMMAR_POOL];
    }
    const grammarShuffled = getUniqueSelection(
      grammarPool,
      Math.min(grammarPool.length, 5),
      (g) => g.question.trim().toLowerCase(),
      usedGrammarQuestions
    );

    // 5. FILTER WRITING
    let writingPool = [...WRITING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      writingPool = writingPool.filter((w) => w.unitId === targetUnitId);
    }
    if (writingPool.length === 0) {
      writingPool = [...WRITING_POOL];
    }
    const writingShuffled = getUniqueSelection(
      writingPool,
      Math.min(writingPool.length, 2),
      (w) => w.jumbled.trim().toLowerCase(),
      usedWritingJumbled
    );

    papers.push({
      id: `paper-${i}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      passage,
      spelling: spellingShuffled,
      vocabMatching,
      grammar: grammarShuffled,
      writing: writingShuffled
    });
  }

  return papers;
}
