export const shellSort = async (array: number[], animationSpeed: number, setCurrentSortingArray: any, setSprings: any) => {
    let arrCopy = [...array];
    const n = arrCopy.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i++) {
        const temp = arrCopy[i];
        let j = i;

        while (j >= gap && arrCopy[j - gap] > temp) {
          arrCopy[j] = arrCopy[j - gap];

          setCurrentSortingArray([...arrCopy]);
          await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
          setSprings((index : number) => ({ height: arrCopy[index] }));
          (arrCopy);

          j -= gap;
        }

        arrCopy[j] = temp;

        setCurrentSortingArray([...arrCopy]);
        await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
        setSprings((index : number) => ({ height: arrCopy[index] }));
        (arrCopy);
      }
    }
  };