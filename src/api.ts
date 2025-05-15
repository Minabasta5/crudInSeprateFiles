


export  async function onFetchUserClick() {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('User data:', data);
  
      const usersHtml = data.map((user: any) => `
        <div>
          <h3>${user.title}</h3>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phoneNum}</p>
        </div>
      `).join('');
  
      const container = document.getElementById('container-users');
      if (container) {
        container.innerHTML = usersHtml;
      } else {
        console.warn('Container element not found');
      }
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  