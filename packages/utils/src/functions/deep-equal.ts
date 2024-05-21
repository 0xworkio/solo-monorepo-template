// DeepEqual 是一个类型定义，表示一个函数，
// 该函数接受两个 Record<string, any> 类型的参数，并返回一个布尔值。
type DeepEqual = (
  obj1: Record<string, any>,
  obj2: Record<string, any>,
) => boolean
// 深度比较两个对象是否相等。
// 深度比较意味着它会递归地比较所有嵌套的对象和数组，以确保两个对象在结构和值上都是相同的。
// obj1 和 obj2: 要进行比较的两个对象。
// 函数在处理大型或复杂的对象时可能会有性能影响，因为它需要递归地检查每个属性。
// 它不处理某些特殊情况，如循环引用（对象互相引用对方）或特殊类型的对象（如 Date 或 RegExp 对象）。
// 总的来说，deepEqual 函数是一个有用的工具，用于在需要深度比较两个对象时确保它们完全相同。
export const deepEqual: DeepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true
  }

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}
