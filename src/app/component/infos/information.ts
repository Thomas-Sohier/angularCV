import { Hobbies } from '../hobbies/hobbies';
import { Infos } from './infos';
import { Skills } from '../skills/skills';
import { Language } from '../language/language';

export interface Information {
  id: number;
  img: string;
  name: string;
  surname: string;
  title: string;
  infos: Array<Infos>;
  languages: Array<Language>;
  skills: Array<Skills>;
  hobbies: Array<Hobbies>;
}

export class Information {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public title: string,
    public infos: Array<Infos>,
    public languages: Array<Language>,
    public skills: Array<Skills>,
    public hobbies: Array<Hobbies>
  ) {}
}
