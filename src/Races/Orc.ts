import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;