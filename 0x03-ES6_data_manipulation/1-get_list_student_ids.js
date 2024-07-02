export default function getListStudentIds(input) {
  let nArray = [];
  if (!Array.isArray(input)) return nArray;
  nArray = input.map((el) => el.id);
  return nArray;
}
