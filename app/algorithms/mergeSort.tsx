export const mergeSort = async (array: number[], animationSpeed: number, setCurrentSortingArray: any, setSprings: any) => {
   
    const merge = async (arr: number[], low: number, mid: number, high: number) => {
        const left = arr.slice(low, mid + 1);
        const right = arr.slice(mid + 1, high + 1);
    
        let i = 0,
          j = 0,
          k = low;
    
        while (i < left.length && j < right.length) {
          if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
          } else {
            arr[k] = right[j];
            j++;
          }
    
          setCurrentSortingArray([...arr]);
    
          await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
          setSprings((index : number) => ({ height: arr[index] }));
          (arr);
    
          k++;
        }
    
        while (i < left.length) {
          arr[k] = left[i];
          i++;
          k++;
    
          setCurrentSortingArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
          setSprings((index : number) => ({ height: arr[index] }));
          (arr);
        }
    
        while (j < right.length) {
          arr[k] = right[j];
          j++;
          k++;
    
          setCurrentSortingArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
          setSprings((index : number) => ({ height: arr[index] }));
          (arr);
        }
      };

    const mergeSortHelper = async (arr: number[], low: number, high: number) => {
        if (low < high) {
          const mid = Math.floor((low + high) / 2);
    
          await mergeSortHelper(arr, low, mid);
          await mergeSortHelper(arr, mid + 1, high);
          await merge(arr, low, mid, high);
        }
      };
   
    let arrCopy = [...array];
    await mergeSortHelper(arrCopy, 0, arrCopy.length - 1);
  
};
