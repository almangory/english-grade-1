import { GrammarRule, GrammarQuizQuestion } from "./unit1to4";

export const grammarUnit5to8: Record<string, { rule: GrammarRule; quiz: GrammarQuizQuestion[] }> = {
  // UNIT 5: My School
  "5-2": {
    rule: {
      title: "Asking Yes/No Questions with 'Is it...?'",
      titleAr: "طرح أسئلة نعم/لا باستخدام 'Is it...؟'",
      explanation: "We ask 'Is it a [Item]?' to check if something is a specific object. We answer with 'Yes, it is' or 'No, it isn't'.",
      explanationAr: "نسأل بـ (Is it a...؟) للتأكد من ماهية الشيء، ونجيب بـ (Yes, it is) للتوكيد أو (No, it isn't) للنفي.",
      formula: "Is it a + [Noun]? -> Yes, it is. / No, it isn't.",
      examples: [
        { en: "Is it a toy? No, it isn't.", ar: "هل هذه لعبة؟ لا، ليست كذلك." },
        { en: "Is it a pen? Yes, it is.", ar: "هل هذا قلم؟ نعم، هو كذلك." }
      ]
    },
    quiz: [
      {
        question: "Badr asks: 'Is it a book?' Ahmed replies: 'No, it _______.'",
        questionAr: "بدر يسأل: 'هل هو كتاب؟' وأحمد يجيب: 'لا، ليس _______.'",
        options: ["isn't", "is", "not", "am not"],
        correctAnswer: "isn't",
        explanation: "The short negative answer for 'Is it...?' is 'No, it isn't'.",
        explanationAr: "صيغة النفي للإجابة عن (Is it...؟) هي (No, it isn't)."
      },
      {
        question: "Ahmed asks: 'Is it a desk?' Badr replies: 'Yes, it _______.'",
        questionAr: "أحمد يسأل: 'هل هو مكتب؟' وبدر يجيب: 'نعم، هو _______.'",
        options: ["is", "isn't", "am", "are"],
        correctAnswer: "is",
        explanation: "The short positive answer for 'Is it...?' is 'Yes, it is'.",
        explanationAr: "صيغة التوكيد للإجابة عن (Is it...؟) هي (Yes, it is)."
      }
    ]
  },
  "5-7": {
    rule: {
      title: "Prepositions of Place",
      titleAr: "حروف الجر المكانية",
      explanation: "We use prepositions like 'in', 'on', 'under', 'next to', and 'behind' to describe where things are.",
      explanationAr: "نستخدم حروف الجر مثل 'in' (في)، 'on' (على)، 'under' (تحت)، 'next to' (بجانب)، و'behind' (خلف) لوصف موقع الأشياء.",
      formula: "It is + [Preposition] + the + [Noun]",
      examples: [
        { en: "The book is in my bag.", ar: "الكتاب في حقيبتي." },
        { en: "The monkey is on the chair.", ar: "القرد على الكرسي." },
        { en: "The ruler is under the table.", ar: "المسطرة تحت الطاولة." }
      ]
    },
    quiz: [
      {
        question: "The pencil fell to the floor, so it is _______ the table.",
        questionAr: "سقط القلم الرصاص على الأرض، فهو يتواجد _______ الطاولة.",
        options: ["under", "on", "in", "above"],
        correctAnswer: "under",
        explanation: "Something on the floor below a table is 'under' it.",
        explanationAr: "الأشياء التي على الأرض أسفل الطاولة تكون تحتها (under)."
      },
      {
        question: "Where is the book? It's _______ the bag.",
        questionAr: "أين الكتاب؟ إنه _______ الحقيبة.",
        options: ["in", "under", "behind", "next to"],
        correctAnswer: "in",
        explanation: "We put books inside our bags, so they are 'in' the bag.",
        explanationAr: "نضع الكتب بداخل الحقيبة، لذلك نستخدم حرف الجر (in)."
      }
    ]
  }
};
