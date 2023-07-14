import { ThreadDataType } from "../types";

function linearExecution(threads: Array<ThreadDataType>): Array<ThreadDataType> {
  
  // to store all the computed data for threads
  let computedThreads: Array<{
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType
  }> = [];

  // to store the execution thread sequence
  let executionThreadSequence: Array<{
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType
  }> = [];

  // compute sizes of all threads
  threads.map((thread: ThreadDataType, threadIndex: number) => {
    computedThreads.push({
      "computation-hash": new Crypto().randomUUID() as string,
      "computation-size": computeThreadSize(thread) as number,
      "computational-index (before-runtime)": threadIndex,
      "thread-data": thread
    });
  });

  // sorting from lowest to highest size for linear execution
  computedThreads.map((computedThread: {
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType
  }, computedThreadIndex: number) => {
    // TODO: FILTER THE THREADS ACCORDING TO THEIR MEMORY SIZES (To be continued)
  });
}

function computeThreadSize(thread: ThreadDataType): number {
  return JSON.stringify(thread).length;
}

export {
  linearExecution,
  computeThreadSize
}