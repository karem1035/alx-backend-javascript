var karem = {
    firstName: 'Karem',
    lastName: 'Darwesh',
    age: 25,
    location: 'Egypt'
};
var mohamed = {
    firstName: 'Mohamed',
    lastName: 'Sayed',
    age: 27,
    location: 'Egypt'
};
var ahmed = {
    firstName: 'Ahmed',
    lastName: 'Tarek',
    age: 27,
    location: 'Egypt'
};
var studentsList = [karem, mohamed, ahmed];
// Creating Table with Header Row
var tableTag = document.createElement('table');
var tableHead = document.createElement('tr');
var tableHeaderFirstName = document.createElement('th');
tableHeaderFirstName.textContent = 'First Name';
var tableHeaderLastName = document.createElement('th');
tableHeaderLastName.textContent = 'Last Name';
var tableHeaderAge = document.createElement('th');
tableHeaderAge.textContent = 'Age';
var tableHeaderLocation = document.createElement('th');
tableHeaderLocation.textContent = 'Location';
tableTag.appendChild(tableHead);
tableHead.appendChild(tableHeaderFirstName);
tableHead.appendChild(tableHeaderLastName);
tableHead.appendChild(tableHeaderAge);
tableHead.appendChild(tableHeaderLocation);
document.body.appendChild(tableTag);
// Adding rows data
studentsList.forEach(function (student) {
    var rowTag = document.createElement('tr');
    // cells
    var fnameData = document.createElement('td');
    fnameData.textContent = student.firstName;
    var lnameData = document.createElement('td');
    lnameData.textContent = student.lastName;
    var ageData = document.createElement('td');
    ageData.textContent = student.age.toString();
    var loactionData = document.createElement('td');
    loactionData.textContent = student.location;
    rowTag.appendChild(fnameData);
    rowTag.appendChild(lnameData);
    rowTag.appendChild(ageData);
    rowTag.appendChild(loactionData);
    tableTag.appendChild(rowTag);
});
