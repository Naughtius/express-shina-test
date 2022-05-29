export interface IListItem {
  address: string;
  budgets: string[];
  latitude: number;
  longitude: number;
  customId: number;
}

export type Coords = number[][];
