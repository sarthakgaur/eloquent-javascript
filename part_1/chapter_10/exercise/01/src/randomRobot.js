import { randomPick } from './utils.js';

export function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}
