// creating a thread to find the compute string length and get it's size
var computeWordSize = {
    threadName: "compute-word-size",
    threadAddress: Math.floor(Math.random() * 1000).toString(),
    threadHashAddress: Math.floor(Math.random() + (Math.random() * 1000000000)).toString(),
    threadFunction: function (information) {
        return {
            information: information,
            size: information.length
        };
    }
};
// creating a thread to check the computation and it's result's accuracy
// gives boolean as response
var checkResult = {
    threadName: "check-result",
    threadAddress: Math.floor(Math.random() * 1000).toString(),
    threadHashAddress: Math.floor(Math.random() + (Math.random() * 1000000000)).toString(),
    threadFunction: function (_a) {
        var computation = _a.computation, resultToCheck = _a.resultToCheck;
        return computation === resultToCheck;
    }
};
// creating a multi-threading system
var multithread = [computeWordSize, checkResult];
