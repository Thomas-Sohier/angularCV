export interface Language {
  language: string;
  level: number;
  levelString: string;
}

export class Language {
  constructor(public language: string, public level: number) {}
}
