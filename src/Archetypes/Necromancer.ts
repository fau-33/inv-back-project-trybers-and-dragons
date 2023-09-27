import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instances += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}
  
export default Necromancer;