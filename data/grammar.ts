export const topics = [
  {
    id: 'sentence-structures',
    title: 'Sentence Structures',
    description: 'Learn about simple, compound, and complex sentences.',
    icon: 'Structure',
    color: 'bg-blue-50 text-blue-600',
    lessons: [
      { id: 'simple', title: 'Simple Sentences' },
      { id: 'compound', title: 'Compound Sentences' },
      { id: 'complex', title: 'Complex Sentences' },
    ]
  },
  {
    id: 'voice',
    title: 'Active and Passive Voice',
    description: 'Master the art of changing sentence focus using voice.',
    icon: 'Voice',
    color: 'bg-emerald-50 text-emerald-600',
    lessons: [
      { id: 'active', title: 'Active Voice' },
      { id: 'passive', title: 'Passive Voice' },
      { id: 'conversion', title: 'Converting Voice' },
    ]
  },
  {
    id: 'speech',
    title: 'Direct and Indirect Speech',
    description: 'Rules for reporting what someone else said.',
    icon: 'Speech',
    color: 'bg-violet-50 text-violet-600',
    lessons: [
      { id: 'direct', title: 'Direct Speech' },
      { id: 'indirect', title: 'Indirect Speech' },
      { id: 'reporting-verbs', title: 'Reporting Verbs' },
    ]
  },
  {
    id: 'clauses',
    title: 'Phrases and Clauses',
    description: 'Understand the building blocks of sentences.',
    icon: 'Blocks',
    color: 'bg-amber-50 text-amber-600',
    lessons: [
      { id: 'phrases', title: 'Phrases' },
      { id: 'main-clauses', title: 'Main Clauses' },
      { id: 'subordinate-clauses', title: 'Subordinate Clauses' },
    ]
  },
  {
    id: 'punctuation',
    title: 'Punctuation',
    description: 'Proper usage of commas, semicolons, and more.',
    icon: 'Punctuation',
    color: 'bg-rose-50 text-rose-600',
    lessons: [
      { id: 'commas', title: 'Commas' },
      { id: 'semicolons', title: 'Semicolons and Colons' },
      { id: 'apostrophes', title: 'Apostrophes' },
    ]
  }
];

export const lessonContent: Record<string, any> = {
  'sentence-structures-simple': {
    title: 'Simple Sentences',
    content: `A simple sentence consists of one independent clause. An independent clause contains a subject and a verb and expresses a complete thought.

### Key Characteristics:
- Has one subject and one predicate.
- Expresses a single complete thought.
- Does not contain any dependent clauses.

Even if a simple sentence has a compound subject or a compound verb, it remains a simple sentence as long as it forms only one independent clause.`,
    examples: [
      { sentence: 'The cat slept.', explanation: 'Subject: "The cat", Verb: "slept".' },
      { sentence: 'Tom and Jerry ran fast.', explanation: 'Compound subject ("Tom and Jerry"), but still one independent clause.' },
      { sentence: 'She ate dinner and watched a movie.', explanation: 'Compound verb ("ate" and "watched"), but still one independent clause.' }
    ],
    quiz: [
      {
        question: 'Which of the following is a simple sentence?',
        options: [
          'The dog barked loudly.',
          'The dog barked, and the cat ran away.',
          'Because the dog barked, the cat ran away.',
          'The dog that barked loudly was brown.'
        ],
        answer: 0,
        explanation: '"The dog barked loudly" has one subject and one verb, making it a single independent clause.'
      }
    ]
  },
  'sentence-structures-compound': {
    title: 'Compound Sentences',
    content: `A compound sentence consists of two or more independent clauses joined together. There are no dependent clauses in a compound sentence.

### How to join independent clauses:
1. **Coordinating Conjunctions (FANBOYS):** For, And, Nor, But, Or, Yet, So. Usually preceded by a comma.
2. **Semicolon (;):** Used when the two clauses are closely related.
3. **Conjunctive Adverbs:** Words like *however, therefore, moreover*, preceded by a semicolon and followed by a comma.`,
    examples: [
      { sentence: 'I wanted to go for a walk, but it started raining.', explanation: 'Two independent clauses joined by the conjunction "but".' },
      { sentence: 'She is a great leader; she always listens to her team.', explanation: 'Two independent clauses joined by a semicolon.' },
      { sentence: 'He studied hard; therefore, he passed the exam.', explanation: 'Joined by a semicolon and the conjunctive adverb "therefore".' }
    ],
    quiz: [
      {
        question: 'Identify the compound sentence:',
        options: [
          'After the rain stopped, we went outside.',
          'I like coffee, and my brother likes tea.',
          'The tall man in the black coat walked quickly.',
          'She smiled because she was happy.'
        ],
        answer: 1,
        explanation: 'It contains two independent clauses joined by the coordinating conjunction "and".'
      }
    ]
  },
  'sentence-structures-complex': {
    title: 'Complex Sentences',
    content: `A complex sentence consists of one independent clause and at least one dependent (subordinate) clause.

### Key Characteristics:
- **Independent Clause:** Can stand alone as a sentence.
- **Dependent Clause:** Cannot stand alone. It begins with a subordinating conjunction (e.g., *because, since, after, although, when*) or a relative pronoun (e.g., *that, who, which*).

If the dependent clause comes first, it is usually followed by a comma. If the independent clause comes first, a comma is usually not needed.`,
    examples: [
      { sentence: 'Because it was raining, we stayed indoors.', explanation: 'Dependent clause first, followed by a comma and the independent clause.' },
      { sentence: 'We stayed indoors because it was raining.', explanation: 'Independent clause first, so no comma is needed.' },
      { sentence: 'The book that I borrowed from you is fascinating.', explanation: 'Contains an independent clause ("The book is fascinating") and a dependent relative clause ("that I borrowed from you").' }
    ],
    quiz: [
      {
        question: 'Which sentence is a complex sentence?',
        options: [
          'The sun is shining brightly.',
          'I wanted to go, but I was too tired.',
          'Although she was tired, she finished her homework.',
          'He ran to the store and bought some milk.'
        ],
        answer: 2,
        explanation: 'It has a dependent clause ("Although she was tired") and an independent clause ("she finished her homework").'
      }
    ]
  },
  'voice-active': {
    title: 'Active Voice',
    content: `In the active voice, the subject of the sentence performs the action expressed by the verb.

### Why use active voice?
- It is generally clearer and more direct.
- It makes sentences more concise.
- It emphasizes the "doer" of the action.

**Structure:** Subject + Verb + Object`,
    examples: [
      { sentence: 'The dog chased the ball.', explanation: 'The subject "The dog" is performing the action "chased".' },
      { sentence: 'Millions of people read this blog.', explanation: 'The subject "Millions of people" performs the action "read".' }
    ],
    quiz: [
      {
        question: 'Which of these is in the active voice?',
        options: [
          'The cake was eaten by the children.',
          'The children ate the cake.',
          'The song was sung beautifully.',
          'Mistakes were made.'
        ],
        answer: 1,
        explanation: 'The subject "The children" is performing the action "ate".'
      }
    ]
  },
  'voice-passive': {
    title: 'Passive Voice',
    content: `In the passive voice, the subject of the sentence receives the action. The "doer" of the action is often introduced by the preposition "by" or omitted entirely.

### When to use passive voice:
- When the actor is unknown or irrelevant (e.g., "My car was stolen.").
- To emphasize the receiver of the action rather than the doer.
- In scientific or formal writing to maintain objectivity.

**Structure:** Object (now Subject) + form of "to be" + Past Participle + (by Subject)`,
    examples: [
      { sentence: 'The ball was chased by the dog.', explanation: 'The subject "The ball" is receiving the action.' },
      { sentence: 'This blog is read by millions of people.', explanation: 'The focus is on "This blog" rather than who reads it.' }
    ],
    quiz: [
      {
        question: 'Identify the sentence in the passive voice:',
        options: [
          'The chef cooked a delicious meal.',
          'A delicious meal was cooked by the chef.',
          'The chef is cooking a delicious meal.',
          'The chef will cook a delicious meal.'
        ],
        answer: 1,
        explanation: 'The subject "A delicious meal" receives the action, and the doer is introduced with "by".'
      }
    ]
  }
};
