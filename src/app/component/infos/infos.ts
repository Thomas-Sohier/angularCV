export interface Infos {
  title: string;
  text: string;
  emoji: string;
}

export class Infos {
  constructor(public title: string, public text: string) {}
}
