export const quickSort = async (array: number[], animationSpeed: number, setCurrentSortingArray: any, setSprings: any) => {


    const partition = async (arr: number[], low: number, high: number) => {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);

                setCurrentSortingArray([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
                setSprings((index : number) => ({ height: arr[index] }));
                (arr);
            }
        }

        swap(arr, i + 1, high);
        setCurrentSortingArray([...arr]);

        await new Promise((resolve) => setTimeout(resolve, 110 - animationSpeed));
        setSprings((index : number) => ({ height: arr[index] }));
        (arr);

        return i + 1;
    };
    const quickSortHelper = async (arr: number[], low: number, high: number) => {
        if (low < high) {
            const pi = await partition(arr, low, high);

            await quickSortHelper(arr, low, pi - 1);
            await quickSortHelper(arr, pi + 1, high);
        }
    };

    const arrCopy = [...array];
    await quickSortHelper(arrCopy, 0, arrCopy.length - 1);


};

const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };