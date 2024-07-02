export default function getStudentsByLocation(list, city) {
  const result = list.filter((el) => el.location === city);
  return result;
}
