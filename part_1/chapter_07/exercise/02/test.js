import * as robotUtils from '../../src/robot.js';
import { compareRobots } from '../01/01.js';
import { proximityOrientedRobot } from './02.js';

function compareRobotsTest() {
  let config1 = {
    robot: robotUtils.goalOrientedRobot,
    memory: []
  };

  let config2 = {
    robot: proximityOrientedRobot,
    memory: []
  };

  let [average1, average2] = compareRobots(config1, config2);

  console.log(`${config1.robot.name}: ${average1}`);
  console.log(`${config2.robot.name}: ${average2}`);
}

compareRobotsTest();
