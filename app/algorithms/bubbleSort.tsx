export const bubbleSort = async (array: number[], animationSpeed: number, setCurrentSortingArray: any, setSprings: any) => {

    let arrCopy = [...array];
    const n = arrCopy.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arrCopy[j] > arrCopy[j + 1]) {
          swap(arrCopy, j, j + 1);

          setCurrentSortingArray([...arrCopy]);
          await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
          setSprings((index : number) => ({ height: arrCopy[index] }));
          (arrCopy);
        }
      }
    }
  };

  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };