document.getElementById('generate').addEventListener('click', async () => {
    document.getElementById('generate').classList.add('hidden');
    
    const nameElement = document.getElementById('name');
    const bioElement = document.getElementById('bio');
    const profilePicElement = document.getElementById('profile-pic');
    
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    
    const response = await fetch('https://ainfluencer.onrender.com/api/generate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, bio }),
    });
    
    const data = await response.json();
    
    profilePicElement.src = data.profile_pic_url;
    nameElement.textContent = data.name;
    bioElement.textContent = data.bio;
    
    profilePicElement.classList.remove('hidden');
    nameElement.classList.remove('hidden');
    bioElement.classList.remove('hidden');
});
