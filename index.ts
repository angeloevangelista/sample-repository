const unordered_array = [1, 43, 2, 5, 34, 45, 4, 23, 32, 54, 6, 8, 54, 62];

function organizeArray(array: Array<Number>) {
  const ordered_array = array;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const current_value = ordered_array[i];
      const next_value = ordered_array[j];

      if (current_value > next_value) {
        ordered_array[i] = next_value;
        ordered_array[j] = current_value;
      }
    }
  }

  return ordered_array;
}

console.log(organizeArray(unordered_array));
