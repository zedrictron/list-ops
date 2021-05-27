//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(newList) {
    return new List([...this.values, ...newList.values]);
  }

  concat(listOfLists) {
    let newList = this;

    listOfLists.values.reduce((acc, currentValue) => {
      return (newList = newList.append(currentValue));
    }, newList);

    return newList;
  }

  filter(filteringFunction) {
    const isOddNumber = (number) => filteringFunction(number);

    const newFilteredArray = this.values.reduce((acc, currentValue) => {
      if (isOddNumber(currentValue)) {
        return [...acc, currentValue];
      }
      return acc;
    }, []);

    return new List(newFilteredArray);
  }

  map(mappingFunction) {
    const newMappedArray = this.values.reduce((acc, currentValue) => {
      const newValue = mappingFunction(currentValue);
      return [...acc, newValue];
    }, []);

    return new List(newMappedArray);
  }

  length() {
    var counter = 0;

    this.values.reduce(() => counter++, counter);
    return counter;
  }

  // issa Reduce
  foldl(reduceFunction, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.values.length; i++) {
      accumulator = reduceFunction(accumulator, this.values[i]);
    }
    return accumulator;
  }

  // issa Reduce but reversed
  foldr(reduceFunction, initialValue) {
    let accumulator = initialValue;
    for (let i = this.values.length - 1; i >= 0; i--) {
      accumulator = reduceFunction(accumulator, this.values[i]);
    }
    return accumulator;
  }

  reverse() {
    let reverseList = [];

    this.values.reduce((acc, currentValue) => {
      return (reverseList = [currentValue, ...acc]);
    }, []);
    return new List(reverseList);
  }
}

export const reduce = (reduceFunction, initialValue) => {
  let accumulator = initialValue;
  for (let i = 0; i < this.values.length; i++) {
    accumulator = reduceFunction(accumulator, this.values[i]);
  }
  return accumulator;
};
