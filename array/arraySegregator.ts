export const arraySegregator =(array:any[]):[number[],number[],any[]]=>{
        let integerArray: number[] = [];
        let floatArray: number[] = [];
        let objectArray: any[] = [];
    
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number' && Number.isInteger(array[i])) {
                integerArray.push(array[i]);
            } else if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
                floatArray.push(array[i]);
            } else {
                objectArray.push(array[i]);
            }
        }
        return [integerArray, floatArray, objectArray];
}