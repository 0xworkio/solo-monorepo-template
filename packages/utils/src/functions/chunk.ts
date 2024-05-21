// 在需要将大数组切分成更小、更易管理的块时非常有用，特别是在以下场景：
// 批量处理或分批次显示大量数据。
// 在分页或分段加载数据时组织数组元素。
// 当需要根据特定大小将数组元素分组时。
// 假设有一个包含 10 个元素的数组，需要将其切分成每个块包含 3 个元素的小数组：
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkedArray = chunk(myArray, 3);
// chunkedArray 将会是 [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]。
// 这种方法使得处理和操作大型数组变得更加高效和简单。
export const chunk = <T>(array: T[], chunk_size: number): T[][] => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk_size)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex]!.push(item)

    return resultArray
  }, [] as T[][])
}
