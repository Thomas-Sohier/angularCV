export interface Language {
  language: string;
  level: number;
  levelString: string;
  certification: string;
  certificationScore: number;
}

export class Language {
  constructor(public language: string, public level: number) {}
}
