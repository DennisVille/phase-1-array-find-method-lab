// code your solution here
function superbowlWin(arr){
    function checkWin(obf){
        return obf.result === "W";
    }
    let win = arr.find(checkWin);
    if (win==undefined){
        return undefined;
    }else {
        return win.year;
    }
}
