function maximum_diff(int_array) {
  let minimum_value = int_array[0];
  let maximum_diff = 0;

  for (let i = 1; i < int_array.length; ++i) {
    if (int_array[i] < minimum_value) {
      minimum_value = int_array[i];
    } else if (int_array[i] - minimum_value > maximum_diff) {
      maximum_diff = int_array[i] - minimum_value;
    }
  }

  return maximum_diff;
}

console.log(maximum_diff([100, 10, 5, 10, 1, 8, 16, 21]));
