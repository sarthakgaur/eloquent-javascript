import * as robotUtils from '../../src/robot.js';

/* Measuring a Robot */

function countTurns(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

export function compareRobots(config1, config2) {
  let turns1 = [];
  let turns2 = [];
  let runs = 100;

  for (let i = 0; i < runs; i++) {
    let state = robotUtils.VillageState.random();
    turns1.push(countTurns(state, config1.robot, config1.memory));
    turns2.push(countTurns(state, config2.robot, config2.memory));
  }

  let average1 = turns1.reduce((prev, curr) => prev + curr) / runs;
  let average2 = turns2.reduce((prev, curr) => prev + curr) / runs;

  return [average1, average2];
}
