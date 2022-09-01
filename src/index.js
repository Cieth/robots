exports.createRobot = (x,y) => {
    let facing = "N"    //Actual orientation of robot

    function turnRight() {     // Changes orientation to the rigth based on the actual orientation 
        if (facing == "N") facing = "E"
        else if (facing == "E") facing =  "S"
        else if (facing == "S") facing =  "W"
        else if (facing == "W") facing =  "N"
        return facing
    };
    
    function turnLeft() {      // Changes orientation to the left based on the actual orientation 
        if (facing == "N") facing =  "W" 
        else if (facing == "W") facing =  "S"
        else if (facing == "S") facing =  "E"
        else if (facing == "E") facing =  "N"
        return facing
    };
    
    const moveForward = () =>{
        if((x>0 && x<10) && (y>0 && y<10)){ //If it's inside the grid
            if(facing == "N" ) return y++;
            else if(facing == "E") return x++;
            else if(facing == "S") return y--;
            else if(facing == "W") return x--;
        }else{
            return "Out of bounds"          //if it's not
        }
    };

    const getCoordsAndOrientation = () => `[${x},${y}] Orientation: ${facing}` 

    return {
        moveForward, //- Moves forward
        turnLeft, //- Turns left
        turnRight, //- Turns right
        getCoordsAndOrientation //- Gets coordenates and orientation of the robot
    }
}

