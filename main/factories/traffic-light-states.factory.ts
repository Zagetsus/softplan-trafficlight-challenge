import {CreateTrafficLightState} from "../../application/usecase";
import {
    GREEN_STATE_STAY_TIME_PER_SECOND,
    RED_STATE_STAY_TIME_PER_SECOND,
    YELLOW_STATE_STAY_TIME_PER_SECOND
} from "../../config/vars";

export const makeTrafficLightStates = () => {
    return [
        new CreateTrafficLightState('Vermelho', RED_STATE_STAY_TIME_PER_SECOND, "🔴 - ESPERE AÍ"),
        new CreateTrafficLightState('Verde', GREEN_STATE_STAY_TIME_PER_SECOND, '🟢 - SIMBORA!' ),
        new CreateTrafficLightState('Amarelo', YELLOW_STATE_STAY_TIME_PER_SECOND, '🟡 - FICA ESPERTO, QUERIDO' ),
    ]
}