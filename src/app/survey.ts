export interface Question {
  id: number;
  q_type: string;
  text: string;
  help?: string;
  group?: Group;
  options?: Option[];
  order?: number;
  statements?: Statement[];
}

export interface Group {
  name: string;
}

export interface Survey {
  id: number;
  name: string;
  questions: Question[];
}

export interface Answer {
  question: Question;
  int_answer?: number;
  float_answer?: number;
  choice_answer?: number;
}

export interface Option {
  id: number;
  text: string;
  int_value?: number;
  float_value?: number;
  text_value?: string;
}

export interface Statement {
  sub: string;
  pred: string;
  obj: string;
  option?: Option;
}
