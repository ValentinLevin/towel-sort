
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix && matrix.length > 0) {
      const rowCount = matrix.length;
      let stepValue = 1;
      let resultItemIndex = 0;
      let fromColIndex;
      let toColIndex;

      for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
          if (stepValue > 0) {
              fromColIndex = 0;
              toColIndex = matrix[rowIndex].length-1;
          } else {
              fromColIndex = matrix[rowIndex].length-1;
              toColIndex = 0;
          }

          let colIndex = fromColIndex;

          while (colIndex !== toColIndex + stepValue) {
              result[resultItemIndex] = matrix[rowIndex][colIndex];
              colIndex = colIndex + stepValue;
              resultItemIndex++;
          }

          stepValue = -stepValue;
      }
  }

  return result;
}
