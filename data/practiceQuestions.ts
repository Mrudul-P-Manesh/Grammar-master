export const practiceQuestions: Record<string, { challenge: string, expected: string, hint: string }[]> = {
  'active-passive': [
    { challenge: 'The chef prepared a delicious meal.', expected: 'A delicious meal was prepared by the chef.', hint: 'Make "A delicious meal" the subject.' },
    { challenge: 'The dog chased the cat.', expected: 'The cat was chased by the dog.', hint: 'Make "The cat" the subject.' },
    { challenge: 'The company launched a new product.', expected: 'A new product was launched by the company.', hint: 'Make "A new product" the subject.' },
    { challenge: 'The teacher graded the exams.', expected: 'The exams were graded by the teacher.', hint: 'Make "The exams" the subject.' },
    { challenge: 'The mechanic fixed the car.', expected: 'The car was fixed by the mechanic.', hint: 'Make "The car" the subject.' },
    { challenge: 'The artist painted a beautiful portrait.', expected: 'A beautiful portrait was painted by the artist.', hint: 'Make "A beautiful portrait" the subject.' },
    { challenge: 'The storm destroyed the old barn.', expected: 'The old barn was destroyed by the storm.', hint: 'Make "The old barn" the subject.' }
  ],
  'passive-active': [
    { challenge: 'The book was read by the student.', expected: 'The student read the book.', hint: 'Make "The student" the subject.' },
    { challenge: 'The song was sung by the choir.', expected: 'The choir sang the song.', hint: 'Make "The choir" the subject.' },
    { challenge: 'The house was built by the construction workers.', expected: 'The construction workers built the house.', hint: 'Make "The construction workers" the subject.' },
    { challenge: 'The letter was written by Mary.', expected: 'Mary wrote the letter.', hint: 'Make "Mary" the subject.' },
    { challenge: 'The cake was eaten by the children.', expected: 'The children ate the cake.', hint: 'Make "The children" the subject.' },
    { challenge: 'The window was broken by the baseball.', expected: 'The baseball broke the window.', hint: 'Make "The baseball" the subject.' },
    { challenge: 'The prize was won by our team.', expected: 'Our team won the prize.', hint: 'Make "Our team" the subject.' }
  ],
  'direct-indirect': [
    { challenge: '"I am going to the store," he said.', expected: 'He said that he was going to the store.', hint: 'Change "I am" to "he was".' },
    { challenge: '"We have finished our homework," they told us.', expected: 'They told us that they had finished their homework.', hint: 'Change "We have" to "they had".' },
    { challenge: '"I will call you tomorrow," she promised.', expected: 'She promised that she would call me the next day.', hint: 'Change "will" to "would" and "tomorrow" to "the next day".' },
    { challenge: '"It is raining heavily," John remarked.', expected: 'John remarked that it was raining heavily.', hint: 'Change "is" to "was".' },
    { challenge: '"I can swim fast," the boy claimed.', expected: 'The boy claimed that he could swim fast.', hint: 'Change "can" to "could".' },
    { challenge: '"I don\'t like spicy food," she admitted.', expected: 'She admitted that she didn\'t like spicy food.', hint: 'Change "don\'t" to "didn\'t".' }
  ],
  'combine-sentences': [
    { challenge: 'It was raining. We stayed inside.', expected: 'Because it was raining, we stayed inside.', hint: 'Try using "Because".' },
    { challenge: 'He studied hard. He passed the exam.', expected: 'He studied hard, so he passed the exam.', hint: 'Try using "so".' },
    { challenge: 'She was tired. She finished the project.', expected: 'Although she was tired, she finished the project.', hint: 'Try using "Although".' },
    { challenge: 'I lost my keys. I could not open the door.', expected: 'I lost my keys, so I could not open the door.', hint: 'Try using "so".' },
    { challenge: 'The sun set. The stars appeared.', expected: 'After the sun set, the stars appeared.', hint: 'Try using "After".' },
    { challenge: 'He was late. He missed the train.', expected: 'He was late because he missed the train.', hint: 'Try using "because".' }
  ]
};
