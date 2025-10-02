const userList = document.getElementById('user-list');
const reloadBtn = document.getElementById('reload-btn');

function fetchUsers() {
  userList.innerHTML = 'Loading users...';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      userList.innerHTML = ''; // Clear previous or loading text

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const address = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

        userCard.innerHTML = `
          <div class="user-name">${user.name}</div>
          <div class="user-email">📧 ${user.email}</div>
          <div class="user-address">🏠 ${address}</div>
        `;

        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      userList.innerHTML = `<p style="color:red;">❌ Error fetching users: ${error.message}</p>`;
    });
}

// Initial fetch
fetchUsers();

// Reload button functionality
reloadBtn.addEventListener('click', fetchUsers);
