export interface Experiences {
  id: number;
  experience: Experience[];
}

export class Experiences {
  constructor(public id: number, public experience: Experience[]) {}
}

export interface Experience {
  img: string;
  date: string;
  firm: string;
  job: string;
  place: string;
  description: string;
}

export class Experience {
  constructor(
    // public id: number,
    public img: string,
    public date: string,
    public firm: string,
    public job: string,
    public place: string,
    public description: string
  ) {}
}
