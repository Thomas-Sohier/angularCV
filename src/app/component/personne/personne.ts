export interface Personne {
  id: number;
  name: string;
}

export class Personne {
  constructor(public id: number, public name: string) {}
}
