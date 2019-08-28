export interface Information {
  img: string;
  name: string;
  surname: string;
  title: string;
  infos: Array<infos>;
  languages: Array<language>;
  skills: Array<skills>;
  hobbies: Array<hobbies>;
}

export class Information {
  constructor(
    public name: string,
    public surname: string,
    public title: string,
    public infos: Array<infos>,
    public languages: Array<language>,
    public skills: Array<skills>,
    public hobbies: Array<hobbies>
  ) {}
}

export interface infos {
  title: string;
  text: string;
  emoji: string;
}

export class infos {
  constructor(public title: string, public text: string) {}
}

export interface language {
  language: string;
  level: number;
  levelString: string;
}

export class language {
  constructor(public language: string, public level: number) {}
}

export interface skills {
  title: string;
  text: string;
}

export class skills {
  constructor(public title: string, public text: string) {}
}

export interface hobbies {
  text: string;
}

export class hobbies {
  constructor(public text: string) {}
}
