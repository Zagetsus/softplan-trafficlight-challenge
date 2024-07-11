"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTrafficLight = void 0;
var usecase_1 = require("../../application/usecase");
var traffic_light_states_factory_1 = require("./traffic-light-states.factory");
var makeTrafficLight = function () {
    return new usecase_1.TrafficLight((0, traffic_light_states_factory_1.makeTrafficLightStates)());
};
exports.makeTrafficLight = makeTrafficLight;
