import * as robotUtils from '../../src/robot.js';

export function proximityOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let routes = [];

    for (let parcel of parcels) {
      if (parcel.place == place) {
        routes.push(robotUtils.findRoute(robotUtils.roadGraph, place, parcel.address));
      } else {
        routes.push(robotUtils.findRoute(robotUtils.roadGraph, place, parcel.place));
      }
    }

    route = routes.reduce((prev, curr) => prev.length < curr.length ? prev : curr);
  }

  return { direction: route[0], memory: route.slice(1) };
}
