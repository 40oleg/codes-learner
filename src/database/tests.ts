export type Test = {
  name: string;
  category: TestCategoryEnum;
  description: string;
  questions: Question[];
}

type Question = {
  value: string
  correctAnswer: Option;
  options: Option[];
};

type Option = string;

enum TestCategoryEnum {
  WEB = 'WEB',
}

export const TESTS: Test[] = [
  {
    name: 'HTTP Codes',
    category: TestCategoryEnum.WEB,
    description: 'Test will help you in learning of HTTP codes',
    questions: [
      {
        value: 'Код 200',
        correctAnswer: 'OK',
        options: ['NOT OK', 'OK', 'GOOD', 'MEDIUM']
      },
      {
        value: 'Код 300',
        correctAnswer: 'OK',
        options: ['NOT OK', 'OK', 'GOOD', 'MEDIUM']
      },
      {
        value: 'Код 400',
        correctAnswer: 'OK',
        options: ['NOT OK', 'OK', 'GOOD', 'MEDIUM']
      },
      {
        value: 'Код 500',
        correctAnswer: 'OK',
        options: ['NOT OK', 'OK', 'GOOD', 'MEDIUM']
      }
    ]
  }
]