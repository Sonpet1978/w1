const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrade = grades.filter((num) => {
  return (num > 69);
});

console.log("The passing grades are:", passingGrade);
