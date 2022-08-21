const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

function logData(data){
    console.log(data);
}

displayData(alert, logData, "I like to party")