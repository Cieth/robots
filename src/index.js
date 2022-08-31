createRobot = (a, b) => {
    let x = a
    let y = b
    let facing = "N"    //Actual orientation of robot

    function tRigth() {
        if (facing == "N") facing = "E"
        else if (facing == "E") facing =  "S"
        else if (facing == "S") facing =  "W"
        else if (facing == "W") facing =  "N"
    }
    function tLeft() {
        if (facing == "N") facing =  "W" 
        else if (facing == "W") facing =  "S"
        else if (facing == "S") facing =  "E"
        else if (facing == "E") facing =  "N"
    }
    const moveForward = () =>{
        if(x>0 && x<10 || y>0 && y<10){
            if(facing == "N" ) return y++;
            else if(facing == "E") return x++;
            else if(facing == "S") return y--;
            else if(facing == "W") return x--;
        }else{
            return "Out of bounds"
        }
    };
    const turnLeft = () => tLeft(facing);
    const turnRight = () => tRigth(facing); 
    const getCoordsAndOrientation = () => `[${x},${y}] Orientation: ${facing}`

    return {
        moveForward, //- Moves forward
        turnLeft, //- Turns left
        turnRight, //- Turns right
        getCoordsAndOrientation
    }
}
let {moveForward,turnLeft,turnRight, getCoordsAndOrientation} = createRobot(5,5);


console.log(getCoordsAndOrientation());
turnRight()
moveForward();
moveForward();
moveForward();
moveForward();
moveForward();
moveForward();
console.log(getCoordsAndOrientation());