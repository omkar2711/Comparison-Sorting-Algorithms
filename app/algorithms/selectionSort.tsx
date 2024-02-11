export const selectionSort = async (array: number[], animationSpeed: number, setCurrentSortingArray: any, setSprings: any) => {
      let arrCopy = [...array];
    const n = arrCopy.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arrCopy[j] < arrCopy[minIndex]) {
          minIndex = j;
        }
      }

      swap(arrCopy, i, minIndex);
      setCurrentSortingArray([...arrCopy]);

      await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
      setSprings((index : number) => ({ height: arrCopy[index] }));
      (arrCopy);
    }
  };

  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };