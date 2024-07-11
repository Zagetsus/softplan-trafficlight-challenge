import {ITrafficLight, ITrafficLightState} from "../../domain/usecases";
import {PRINT_RETENTION_TIME} from "../../config/vars";

export class TrafficLight implements ITrafficLight {
    private currentState: ITrafficLightState;
    private elapsed: number;

    constructor(private readonly states: ITrafficLightState[]) {
        this.currentState = this.states[0];
        this.elapsed = 0;
    }

    public start(): void {
        setInterval(() => {
            this.display();
            this.elapsed++;

            if (this.elapsed >= this.currentState.duration) {
                this.next();
                this.elapsed = 0;
            }
        }, PRINT_RETENTION_TIME);
    }

    public next(): void {
        const actualIndex = this.states.indexOf(this.currentState);
        const lastIndex = this.states.length - 1;

        if (actualIndex < 0) return;
        if (actualIndex === lastIndex) {
            this.currentState = this.states[0];
            return;
        }

        this.currentState = this.states[actualIndex + 1];
    }

    public display(): void {
        console.log(this.currentState.color);
        console.log(`Tempo de permanência no estado: ${this.currentState.duration - this.elapsed}s`);
        console.log(this.currentState.message);
        console.log('---');
    }
}