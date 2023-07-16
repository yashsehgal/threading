import { ThreadDataType } from "../types";

function swapThread({
  _,
  __,
}: {
  _: {
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType;
  };
  __: {
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType;
  };
}): Array<{
  "computation-hash": string;
  "computation-size": number;
  "computational-index (before-runtime)": number;
  "thread-data": ThreadDataType;
}> {
  return [__, _];
}

function partition({
  threadPartition,
  low,
  high,
}: {
  threadPartition: Array<{
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType;
  }>;
  low: number;
  high: number;
}): number {
  let pivot = threadPartition[high];
  let i = low - 1;

  for (let j = low; j <= high; j++) {
    if (threadPartition[j] < pivot) {
      i++;
      const [__, _] = swapThread({
        _: threadPartition[i],
        __: threadPartition[j],
      });
      threadPartition[i] = __;
      threadPartition[j] = _;
    }
  }
  const [__, _] = swapThread({
    _: threadPartition[i + 1],
    __: threadPartition[high],
  });
  threadPartition[i + 1] = __;
  threadPartition[high] = _;
  return i + 1;
}

export function sortThread({
  threads,
  low = -1,
  high = -1,
}: {
  threads: Array<{
    "computation-hash": string;
    "computation-size": number;
    "computational-index (before-runtime)": number;
    "thread-data": ThreadDataType;
  }>;
  low?: number;
  high?: number;
}) {
  if (low < 0) low = 0;
  if (high < 0) high = threads.length;

  if (low < high) {
    let pi = partition({ threadPartition: threads, low, high });

    // Separately sort elements before
    // partition and after partition

    sortThread({
      threads,
      low,
      high: pi - 1,
    });
    sortThread({
      threads,
      low: pi + 1,
      high,
    });
  }
}
