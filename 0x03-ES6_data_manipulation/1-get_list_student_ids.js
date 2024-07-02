export default function getListStudentIds(input) {
  return Array.isArray(input) ? input.map((el) => el.id) : [];
}
