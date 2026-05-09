
export interface Faction {
    id: string;
    name: string;
    description?: string;
    version?: string;
    specialRules: SpecialRule[];
}

export interface SpecialRule {
    name: string;
    description?: string;
}

export interface WeaponAccuracy {
  stationary: number | string;
  moving: number | string;
}

export interface WeaponStrength {
  normal: number | string;
  halfRange: number | string;
}

export interface ShotType {
  name: string;
  target?: string | null;
  range?: number | null;
  accuracy?: number | string | WeaponAccuracy | null;
  strength?: string | WeaponStrength | null;
  dice?: number | null;
  specialRules?: string[];
}

export interface Weapon {
  name: string;
  target?: string;
  range?: number;
  accuracy?: number | string | WeaponAccuracy;
  strength?: number | string | WeaponStrength;
  dice?: number;
  ammo?: number | null;
  specialRules?: string[];
  shotTypes?: ShotType[];
}

export type UnitType =
  | 'Vec' | 'Vec(W)' | 'Vec(C)' | 'Vec(S)' | 'Vec(M)' | 'Vec(L)' | 'Vec(H)' | 'Vec (W)' | 'Vec (C)' | 'Vec (S)' | 'Vec (M)' | 'Vec (L)' | 'Vec (H)'
  | 'Inf' | 'Inf(S)' | 'Inf (S)'
  | 'Air' | 'Air(CAP)' | 'Air(CAS)' | 'Air (CAP)' | 'Air (CAS)';

export type UnitCategory =
  | 'TACOMS'
  | 'Infantry'
  | 'Vehicles'
  | 'Aircraft'
  | 'Emplacements'
  | 'Support'
  | 'Scenario';

export type Toughness = string | number | {
  front: number | string;
  side: number | string;
  rear: number | string;
};

export interface UnitStats {
  unitClass: UnitType; // Unit class for PC capacity: Inf (1 PC), Inf (S) or Inf(S) (2 PC), Vec variants
  height?: number;
  movement: number;
  quality: number | '*';
  toughness?: Toughness;
  evasion?: number;
  command?: number;
  capacity?: number;
  spottingDistance?: number;
}

export interface UnitSpecialRule {
  name: string;
  description?: string;
}

export interface UnitOption {
  description?: string;
  points?: number;
}

export interface Unit {
  id: string;
  name: string;
  category: UnitCategory;
  subcategory?: string;
  descriptiveCategory?: string;
  points: number;
  stats: UnitStats;
  specialRules?: string[]; // Array of special rule names (e.g., "NBC", "Brigade (3, 12\")")
  unitAbility?: string; // Unit special ability description
  weapons?: Weapon[];
  options?: UnitOption[];
}