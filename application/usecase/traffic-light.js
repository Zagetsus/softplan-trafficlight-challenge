"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficLight = void 0;
var vars_1 = require("../../config/vars");
var TrafficLight = /** @class */ (function () {
    function TrafficLight(states) {
        this.states = states;
        this.currentState = this.states[0];
        this.elapsed = 0;
    }
    TrafficLight.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.display();
            _this.elapsed++;
            if (_this.elapsed >= _this.currentState.duration) {
                _this.next();
                _this.elapsed = 0;
            }
        }, vars_1.PRINT_RETENTION_TIME);
    };
    TrafficLight.prototype.next = function () {
        var actualIndex = this.states.indexOf(this.currentState);
        var lastIndex = this.states.length - 1;
        if (actualIndex < 0)
            return;
        if (actualIndex === lastIndex)
            return this.currentState = this.states[0];
        this.currentState = this.states[actualIndex + 1];
    };
    TrafficLight.prototype.display = function () {
        console.log(this.currentState.color);
        console.log("Tempo de perman\u00EAncia no estado: ".concat(this.currentState.duration - this.elapsed, "s"));
        console.log(this.currentState.message);
        console.log('---');
    };
    return TrafficLight;
}());
exports.TrafficLight = TrafficLight;
