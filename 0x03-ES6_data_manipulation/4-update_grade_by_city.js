export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  const fsList = studentsList.filter((el) => el.location === city);

  const mapList = fsList.map((el) => {
    const gradeItem = newGrades.find((user) => user.studentId === el.id);

    return {
      ...el,
      grade: gradeItem ? gradeItem.grade : 'N/A',
    };
  });

  return mapList;
}
