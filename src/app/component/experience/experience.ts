export interface Experience {
  id: number;
  img: string;
  date: string;
  firm: string;
  job: string;
  place: string;
  description: string;
}

export class Experience {
  constructor(
    public id: number,
    public img: string,
    public date: string,
    public firm: string,
    public job: string,
    public place: string,
    public description: string
  ) {}
}
