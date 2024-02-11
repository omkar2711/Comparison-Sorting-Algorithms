export const insertionSort = async (array: number[], animationSpeed: number, setCurrentSortingArray: any, setSprings: any) => {

    const n = array.length;
    let arrCopy = [...array];

    for (let i = 1; i < n; i++) {
      let key = arrCopy[i];
      let j = i - 1;

      while (j >= 0 && arrCopy[j] > key) {
        arrCopy[j + 1] = arrCopy[j];
        j = j - 1;

        setCurrentSortingArray([...arrCopy]);
        await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
        setSprings((index : number) => ({ height: arrCopy[index] }));
      }

      arrCopy[j + 1] = key;
      setCurrentSortingArray([...arrCopy]);

      await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
      setSprings((index : number) => ({ height: arrCopy[index] }));
    }
  };