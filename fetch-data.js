async function fetchUserData() {
    //API useImperativeHandle(
   const apiUrl =  'https://jsonplaceholder.typicode.com/users';

   // select the container where data will be displayed
   const dataContainer = document.getElementById('api-data');


   try {
    // Fetch data
    const response = await fetch(apiUrl);
    const users = await response.json();

    //clear loading message

    dataContainer.innerHTML

    //create user useLayoutEffect(() => {
      const userList = document.createElement('ul');

      users.forEach(user => {

        const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle error
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run function after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);