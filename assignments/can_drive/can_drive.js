function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence === false && isTired === true &&  isSober === true){
        return "You cannot drive"
    }else if(hasDrivingLiscence === true && isTired === false &&  isSober === true){
        return "You can drive"
    }else{
        return "You shouldn't drive"
    }
}

module.exports = CanDrive;
