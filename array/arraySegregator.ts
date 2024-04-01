type SegregatedData<T> = {
    integers?: number[]
    floats?: number[]
    strings?: string[]
    booleans?: boolean[]
    objects?: any[]
    undefineds?: undefined[]
  }

  export const arraySegregator=<T>(data: T[]): SegregatedData<T> =>{
    const results: SegregatedData<T> = {}
  
    for (const item of data) {
      switch (typeof item) {
        case 'number':
        if (item === Math.floor(item)) {
          (results.integers ||= []).push(item)
        } else {
          (results.floats ||= []).push(item)
        }
        break;
        case 'string':
          (results.strings ||= []).push(item)
          break;
        case 'boolean':
          (results.booleans ||= []).push(item)
          break;
        case 'object':
          if (item === null) {
            (results.objects ||= []).push(item)
          } else if (Array.isArray(item)) {
            (results.objects ||= []).push(...item)
          } else {
            (results.objects ||= []).push(item)
          }
          break;
        case 'undefined':
          (results.undefineds ||= []).push(item)
          break;
      }
    }  
    return results
  }