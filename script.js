
const userForm = document.getElementById('userForm');
const userTableBody = document.querySelector('#userTable tbody');

let users = [];

userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const user = { name, age, email, address };
    users.push(user);
    displayUsers();
    userForm.reset();
});

function displayUsers() {
    userTableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = `<tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td><button class="delete-btn" onclick="deleteUser(${index})">Delete</button></td>
        </tr>`;
        userTableBody.innerHTML += row;
    });
}

function deleteUser(index) {
    if (confirm('Are you sure you want to delete this user?')) {
        users.splice(index, 1);
        displayUsers();
    }
}
