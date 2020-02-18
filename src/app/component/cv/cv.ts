import { Experience } from '../experience/experience';
import { Formation } from '../formation/formation';
import { hobbies } from '../infos/information';

export interface CV {
  id: number;
  experience: Experience[];
  formation: Formation[];
  hobbies: hobbies[];

}

export class CV {
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
