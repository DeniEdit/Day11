var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    newMonitorsList = monitorsList;
    var i;
    for (i = 0; i<3; i++){
        monitorsList.push([monitorsListArray[i]] + "," + i);
    }
    return monitorsList;

}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;

