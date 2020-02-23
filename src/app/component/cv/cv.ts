import { Experience } from '../experience/experience';
import { Formation } from '../formation/formation';
import { Hobbies } from '../hobbies/hobbies';
import { Information } from '../infos/information';

export interface CV {
  id: number;
  experiences: Experience[];
  formations: Formation[];
  hobbies: Hobbies[];
  informations: Information;
}

export class CV {
  constructor(
    public id: number,
    public experiences: Experience[],
    public formations: Formation[],
    public hobbies: Hobbies[]
  ) {}
}
