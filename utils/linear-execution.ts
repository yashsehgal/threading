import { ThreadDataType } from "../types";
import { AES } from 'crypto-ts';
import dotenv from 'dotenv';
import { sortThread } from "./sorts";

// configuring dotenv usage globally here
dotenv.config();

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
      "computation-hash": AES.encrypt(
          JSON.stringify(thread), 
          process.env.ENCRYPTION_SECRET as string
        ).toString(),
      "computation-size": computeThreadSize(thread) as number,
      "computational-index (before-runtime)": threadIndex,
      "thread-data": thread
    });
  });

  console.log("threads with their respective computational size", computedThreads);

  // sorting from lowest to highest size for linear execution
  sortThread({
    threads: computedThreads
  })

  return [];
}

function computeThreadSize(thread: ThreadDataType): number {
  return JSON.stringify(thread).length;
}

export {
  linearExecution,
  computeThreadSize
}