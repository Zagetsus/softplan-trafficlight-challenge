"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTrafficLightStates = void 0;
var usecase_1 = require("../../application/usecase");
var vars_1 = require("../../config/vars");
var makeTrafficLightStates = function () {
    return [
        new usecase_1.CreateTrafficLightState('Vermelho', vars_1.RED_STATE_STAY_TIME_PER_SECOND, "🔴 - ESPERE AÍ"),
        new usecase_1.CreateTrafficLightState('Verde', vars_1.GREEN_STATE_STAY_TIME_PER_SECOND, '🟢 - SIMBORA!'),
        new usecase_1.CreateTrafficLightState('Amarelo', vars_1.YELLOW_STATE_STAY_TIME_PER_SECOND, '🟡 - FICA ESPERTO, QUERIDO'),
    ];
};
exports.makeTrafficLightStates = makeTrafficLightStates;
