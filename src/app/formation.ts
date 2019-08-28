export interface Formations {
  id: number;
  formation: Formation[];
}

export class Formations {
  constructor(public id: number, public formation: Formation[]) {}
}

export interface Formation {
  id: number;
  title: string;
  place: string;
  date: string;
  description: string;
}

export class Formation {
  constructor(
    public id: number,
    public title: string,
    public place: string,
    public date: string,
    public description: string
  ) {}
}
