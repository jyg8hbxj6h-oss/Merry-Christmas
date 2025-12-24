export enum SceneState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE',
}

export interface ParticleData {
  id: number;
  scatterPos: [number, number, number];
  treePos: [number, number, number];
  scale: number;
  rotationSpeed: [number, number, number];
  color: string;
}

export const GOLD_COLOR = "#FFD700";
export const CYAN_COLOR = "#00B2A9"; // Rich Cyan/Teal
export const LUXURY_RED = "#B3000C"; // Deep Cardinal Red
export const CHRISTMAS_GREEN = "#0B6623"; // Forest/Christmas Green