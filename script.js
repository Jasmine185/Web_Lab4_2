fetch('userProfiles.json')
    .then(response => {
        if (!response.ok)
            throw new Error('Fetch error: ' + response.status);
        else
            return response.json();
    })
    .then(json => {
        const profilesContainer = document.getElementById('profiles');
        json.users.forEach(user => { 
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h2>${user.firstname}${user.lastname}</h2> 
                <p>Email: ${user.emails}</p>
                <p>Date Of Birth: ${user.dateOfBirth}</p> 
                <p>Address: ${user.address.street},${user.address.city}, ${user.address.state},${user.address.zipCode}</p>
                <p>Theme: ${user.preferences.theme}</p>
                <p>Language: ${user.preferences.language}</p>
                <p>Notifications: ${user.preferences.notifications ? 'On' : 'Off'}</p>
                <p>Newsletter Subscription: ${user.preferences.subscription ? 'Subscribed' : 'Not Subscribed'}</p>
            `;
            profilesContainer.appendChild(userDiv); 
        });
    })
    .catch(err => console.error('Fetch error: ' + err.message));
