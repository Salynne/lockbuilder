import type { Unit } from "./dataTypes";




export interface RosterUnit {
    rosterId?: string;
    unitId: string;
    blindName?: string;
}

export interface Roster {
    faction: string;
    rosterName?: string;
    units?: RosterUnit[];
}