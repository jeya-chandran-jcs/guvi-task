document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const tableBody = document.querySelector('table tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value).join(', ');
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        const newRow = tableBody.insertRow();
        const cells = [firstname, lastname, address, pincode, gender, food, state, country];

        cells.forEach((cell, index) => {
            const newCell = newRow.insertCell(index);
            newCell.textContent = cell;
        });

        
        form.reset();
    });
});