export default function getStudentIdsSum(array) {
  const sum = array.reduce((acc, cur) => acc + cur.id, 0);
  return sum;
}
