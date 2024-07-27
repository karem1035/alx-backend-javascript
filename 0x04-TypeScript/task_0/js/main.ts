interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const karem: Student = {
  firstName: 'Karem',
  lastName: 'Darwesh',
  age: 25,
  location: 'Egypt',
};

const mohamed: Student = {
  firstName: 'Mohamed',
  lastName: 'Sayed',
  age: 27,
  location: 'Egypt',
};

const ahned: Student = {
  firstName: 'Ahmed',
  lastName: 'Tarek',
  age: 27,
  location: 'Egypt',
};

const studentsList = [karem, mohamed, ahned];

// Creating Table with Header Row
const tableTag = document.createElement('table');
const tableHead = document.createElement('tr');
const tableHeaderFirstName = document.createElement('th');
tableHeaderFirstName.textContent = 'First Name';
const tableHeaderLastName = document.createElement('th');
tableHeaderLastName.textContent = 'Last Name';
const tableHeaderAge = document.createElement('th');
tableHeaderAge.textContent = 'Age';
const tableHeaderLocation = document.createElement('th');
tableHeaderLocation.textContent = 'Location';
tableTag.appendChild(tableHead);
tableHead.appendChild(tableHeaderFirstName);
tableHead.appendChild(tableHeaderLastName);
tableHead.appendChild(tableHeaderAge);
tableHead.appendChild(tableHeaderLocation);
document.body.appendChild(tableTag);

// Adding rows data
studentsList.forEach((student) => {
  const rowTag = document.createElement('tr');
  // cells
  const fnameData = document.createElement('td');
  fnameData.textContent = student.firstName;
  const lnameData = document.createElement('td');
  lnameData.textContent = student.lastName;
  const ageData = document.createElement('td');
  ageData.textContent = student.age.toString();
  const loactionData = document.createElement('td');
  loactionData.textContent = student.location;

  rowTag.appendChild(fnameData);
  rowTag.appendChild(lnameData);
  rowTag.appendChild(ageData);
  rowTag.appendChild(loactionData);

  tableTag.appendChild(rowTag);
});
