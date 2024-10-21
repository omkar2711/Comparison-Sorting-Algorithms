"use client"
import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';
import CounterInput from "./components/CounterInput";
import { ArraySize, AnimationSpeed } from "./components/RangeSlider";
import { insertionSort} from "./algorithms/insertionSort";
import { selectionSort} from "./algorithms/selectionSort";
import { bubbleSort} from "./algorithms/bubbleSort";
import { quickSort } from './algorithms/quickSort';
import { shellSort } from './algorithms/shellShort';
import { mergeSort } from './algorithms/mergeSort';

const Button = ({ value, functionName }: { value: any, functionName: any }) => {
  return (
    <button
      onClick={functionName}
      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    >
      {value}
    </button>
  );
}

const randomArray = (length: number): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);
};

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [animationSpeed, setAnimationSpeed] = useState(100);
  const [arraySize, setArraySize] = useState(10);
  const [springs, setSprings] = useSprings(arraySize, (index) => ({
    height: array[index] || 1,
  }));
  const [currentSortingArray, setCurrentSortingArray] = useState<number[]>([]);
  const [clickHere, setClickHere] = useState(true);

  const [barWidth, setBarWidth] = useState(20); 
  const [barHeight, setBarHeight] = useState(30); 

  const increaseBarWidth = () => {
    setBarWidth((prevWidth) => Math.min(50, prevWidth + 1));
  };

  const decreaseBarWidth = () => {
    setBarWidth((prevWidth) => Math.max(10, prevWidth - 1));
  };

  const increaseBarHeight = () => {
    setBarHeight((prevHeight) => Math.min(50, prevHeight + 1));
  };

  const decreaseBarHeight = () => {
    setBarHeight((prevHeight) => Math.max(10, prevHeight - 1));
  };
  const generateArray = () => {
    const newArray = randomArray(arraySize);
    setArray(newArray);
    setSprings((index) => ({ height: newArray[index] }));
    setCurrentSortingArray(newArray);
    setClickHere(false);
  };

  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const insertionSortFunction = async () => {
    await insertionSort(array, animationSpeed, setCurrentSortingArray, setSprings);
  };

  const selectionSortFunction = async () => {
    await selectionSort(array, animationSpeed, setCurrentSortingArray, setSprings);
  };
  const bubbleSortFunction = async () => {
    await bubbleSort(array, animationSpeed, setCurrentSortingArray, setSprings);
  };
  const quickSortFunction = async () => {
    await quickSort(array, animationSpeed, setCurrentSortingArray, setSprings);
  };
  const shellSortFunction = async () => {
    await shellSort(array, animationSpeed, setCurrentSortingArray, setSprings);
  };

  const mergeSortFunction = async () => {
    await mergeSort(array, animationSpeed, setCurrentSortingArray, setSprings);
  };

  const changeSize = async () => {
    let arrCopy = [...array];

    arrCopy = arrCopy.map((height) => Math.floor(height / 2));

    setCurrentSortingArray([...arrCopy]);
    setArray(arrCopy);
    setSprings((index) => ({ height: arrCopy[index] }));
    (arrCopy);

    await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
  };


  return (
    <main className="flex flex-col items-center justify-center p-5">
      <div className="w-full">

        <div className="w-full bg-zinc-900 rounded-lg text-white px-3 py-2 text-lg font-medium mb-5">
          <h1>Comparison Sorting Algorithms</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 py-5">
          <Button value={"Generate Array"} functionName={generateArray} />
          <Button value={"Insertion Sort"} functionName={insertionSortFunction} />
          <Button value={"Selection Sort"} functionName={selectionSortFunction} />
          <Button value={"Bubble Sort"} functionName={bubbleSortFunction} />
          <Button value={"Merge Sort"} functionName={mergeSortFunction} />
          <Button value={"Quick Sort"} functionName={quickSortFunction} />
          <Button value={"Shell Sort"} functionName={shellSortFunction} />
          <Button value={"Change Size"} functionName={generateArray} />
        </div>

        {!clickHere ? (
          <div className="flex flex-wrap justify-center space-y-4 space-x-2 md:space-y-0" style={{ height: '500px' }}>
            {springs.map((props, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-xs">
                  {currentSortingArray[index]}
                </div>
                <animated.div
                  className="bg-blue-500"
                  style={{
                    height: props.height.to((height) => `${height * (barHeight / 10)}px`),
                    width: `${barWidth}px`,
                    marginBottom: '2px',
                  }}
                ></animated.div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-2" style={{ height: '500px' }}>
            <p style={{ opacity: 0.5 }}>Set array size and animation speed</p>
            <p style={{ opacity: 0.5 }}>Click Generate Array</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center md:items-start ml-0 md:ml-10 space-y-4 md:space-y-0 md:space-x-4 mt-5">
          <div className="md:ml-10 py-3">
            <AnimationSpeed animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed} />
          </div>
          <div className="md:ml-10 py-3">
            <ArraySize arraySize={arraySize} setArraySize={setArraySize} />
          </div>
          <div className="md:ml-10 py-3">
            <CounterInput value={barWidth} onIncrement={increaseBarWidth} onDecrement={decreaseBarWidth} type={"W"} />
          </div>
          <div className="md:ml-10 py-3">
            <CounterInput value={barHeight} onIncrement={increaseBarHeight} onDecrement={decreaseBarHeight} type={"H"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SortingVisualizer;
