type ThreadDataType = {
  threadName: string;
  threadAddress: string;
  threadHashAddress: string;
  threadFunction: (params: any) => any;
  subThreads?: Array<ThreadDataType>;
};

export type { ThreadDataType };