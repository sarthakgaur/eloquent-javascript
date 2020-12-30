import { runRobot } from './engine.js';
import { VillageState } from './village.js';
import { goalOrientedRobot } from './goalOrientedRobot.js';

function simulation() {
  runRobot(VillageState.random(), goalOrientedRobot, []);
}

simulation();
