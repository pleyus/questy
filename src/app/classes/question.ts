import { Category } from './category';
import { DataDriver } from './data-driver';

export class Question {
  constructor(
    public Id: number = 0,
    public QuestionText: string = '',
    public AnswerText: string = '',
    public QuestionCategory: Category = null) {}


  public static GetQuestion(Id: number): Question {
    return Question.Parse( DataDriver.LoadValue('q-' + Id) );
  }
  public static Parse(json: any): Question {
    const q = new Question();
    if (typeof json === 'object') {
      q.Id = json.Id;
      q.AnswerText = json.QuestionText;
      q.QuestionText = json.QuestionText;
    }
    return q;
  }

  public SaveQuestion() {
    DataDriver.SaveValue('q-' + this.Id, this.ToJson(), 'json');
  }
  public ToJson(): any {
    return {
      Id: this.Id,
      QuestionText: this.QuestionText,
      QuestionCategory: this.QuestionCategory.ToJson(),
      AnswerText: this.AnswerText
    };
  }
}
