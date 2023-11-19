/*
    Project: Assignment 07: Part 2, The Employee Management System (80 points)
    Date: 11/19/23
    Author: Van Do
*/

// CREATE AN ARRAY OF EMPLOYEES
let employee = [];
let employees = [
    ['12345678', 'Ann Robertson', 6542, 'ann.robertson@company.com', 'Administrative'],
    ['12345987', 'Ryan Conners', 6214, 'ryan.conners@mcompany.com', 'Quality Assurance'],
    ['12345876', 'Ethan Jones', 6397, 'ethan.jones@company.com', 'Engineer'],
    ['12345654', 'Sophie Clark', 6214, 'sophie.clark@company.com', 'Sales'],
    ['12345324', 'Adeline Williams', 6694, 'adeline.williams@company.com', 'Marketing'], 
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const displayEmployeeList = () => {
    // IF THERE ARE NO EMPLOYEES IN ARRAY, CHECK STORAGE
    if (employees.length === 0) {
        // GET EMPLOYEES FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
        let storage = localStorage.getItem('employees') || ''
        // IF NOT EMPTY, CONVERT TO ARRAY AND STORE IN EMPLOYEES VARIABLE
        if (storage.length > 0) {
            return localStorage.getItem('employees', JSON.parse(employees))
        }
    } 
}

// GET DOM ELEMENTS
let form        = document.querySelector('#addForm');
let table       = document.querySelector('#employees');
const $ = (id) => { return document.getElementById(id)};

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    if ($('id').value !== '') {
        // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
        employee.push($('id').value);
        employee.push($('name').value);
        employee.push($('extension').value);
        employee.push($('email').value);
        employee.push($('department').value);
      } else {
        alert('Please enter an employee information.');
    }
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee);
    // ADD NEW EMPLOYEES ARRAY TO STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
    // BUILD THE GRID
    buildGrid(employees);
    // UPDATE EMPLOYEE COUNT
    countEmployees();
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});


// DELETE EMPLOYEE
function deleteEmp(r) {
    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    let tr = r.parentNode.parentNode.rowIndex;
    // CONFIRM THE DELETE
    if (confirm('Are you sure you want to delete this employee?')) {
      index = document.getElementById('empTable').deleteRow(tr);
      // REMOVE EMPLOYEE FROM ARRAY
      console.log(employees.splice(tr - 1, 1));
      localStorage.setItem('employees', JSON.stringify(employees));
      // BUILD THE GRID
      buildGrid(employees);
      countEmployees();
    }
}

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let table = document.getElementById('empTable');
    table.setAttribute.classList = 'table-responsive';
    let tableBody = document.querySelector('tbody');
    if (tableBody != null) {
      table.removeChild(tableBody);
      tableBody = null;
    };
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    let i = 0
    for (let employee of employees) {
      let tr = document.createElement('tr'); 
      tr.innerHTML = `
        <td>${employees[i][0]}</td>
        <td>${employees[i][1]}</td>
        <td>${employees[i][2]}</td>
        <td>${employees[i][3]}</td>
        <td>${employees[i][4]}</td>
        <td><button class = 'btn btn-sm btn-danger delete' onclick='deleteEmp(this)'>X</button></td>`;
      tbody.appendChild(tr);
      i++;
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    countEmployees();
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
    console.log(employees);
};

// FUNCTION TO DISPLAY EMPLOYEE COUNT RECORDS
function countEmployees() {
    let count           = employees.length;
    let empCount        = document.querySelector('#empCount');
    empCount.innerHTML  = `(${count})`;
};
