const {createRobot} = require('./index.js');

describe('should be inside its limits 0-10', ()=>{
    it('should increment x value', ()=>{
        const {turnLeft} = createRobot(5,5);
        expect(turnLeft()).toBe("E");
        expect(turnLeft()).toBe("S");
        expect(turnLeft()).toBe("O");
    });
});

describe('Should move forward', ()=>{
    it('should increment y value', ()=>{
        const {moveForward} = createRobot(5,5);
        expect(moveForward()).toBe(6);
    });
});