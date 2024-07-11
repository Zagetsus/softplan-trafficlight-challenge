import {TrafficLight} from "../../application/usecase";
import {makeTrafficLightStates} from "./traffic-light-states.factory";


export const makeTrafficLight = () => {
    return new TrafficLight(makeTrafficLightStates());
}