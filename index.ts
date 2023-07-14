import { ThreadDataType } from "./types";

// creating a thread to find the compute string length and get it's size
const computeWordSize: ThreadDataType = {
  threadName: "compute-word-size",
  threadAddress: Math.floor(Math.random() * 100).toString(),
  threadHashAddress: Math.floor(Math.random() + (Math.random() *  1000000000)).toString(),
  threadFunction: (information: string) => {
    return {
      information,
      size: information.length
    }
  }
};

// creating a thread to check the computation and it's result's accuracy
// gives boolean as response
const checkResult: ThreadDataType = {
  threadName: "check-result",
  threadAddress: Math.floor(Math.random() * 100).toString(),
  threadHashAddress: Math.floor(Math.random() + (Math.random() *  1000000000)).toString(),
  threadFunction: ({ computation, resultToCheck }
    : { computation: number, resultToCheck: number}) => {
    return computation === resultToCheck;
  }
};

// creating a multi-threading system
const multithread = [computeWordSize, checkResult];

// linear execution of threads according to small-to-high time approach
console.log(multithread);