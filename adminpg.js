function toggleForm() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
  }
  
  function submitForm() {
    var detailsTable = document.getElementById('detailsTable');
    var form = document.getElementById('detailsForm');
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
  
  
    // Create a table row
    var newRow = detailsTable.insertRow(-1);
  
    // Add cells to the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
  
    // Add data to cells
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = address;
    cell5.innerHTML = dob;
    cell6.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  
    // Clear the form
    form.reset();
  
    // Close the form overlay
    toggleForm();
  }
  
  function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  