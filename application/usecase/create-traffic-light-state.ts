import {ITrafficLightState} from "../../domain/usecases";

export class CreateTrafficLightState implements ITrafficLightState {
    constructor(readonly color: string, readonly duration: number, readonly message: string) {
    }
}
