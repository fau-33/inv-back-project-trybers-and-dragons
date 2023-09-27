import { EnergyType } from './types/EnergyType';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}

export {
  EnergyType,
};