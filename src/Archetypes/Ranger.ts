import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instances += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}
  
export default Ranger;