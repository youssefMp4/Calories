function scrollGallery(direction) {
    const scrollContainer = document.getElementById("scrollContainer");
    if (direction === "left") {
      scrollContainer.scrollLeft -= 300;
    } else {
      scrollContainer.scrollLeft += 300;
    }
  }
  let mapVisible = false;

    function toggleElements() {
      const mapContainer = document.getElementById('mapContainer');
      mapVisible = !mapVisible;
      mapContainer.style.display = mapVisible ? 'block' : 'none';}
      // Toggle popup visibility

// Fonction pour ouvrir ou fermer le popup
function togglePopup(isVisible) {
  const popup = document.getElementById('login-popup');
  if (isVisible) {
    popup.classList.remove('hidden');
  } else {
    popup.classList.add('hidden');
  }
}


async function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Remplacez par votre URL d'API
  const endpoint = 'http://localhost:5000/login'; 

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful!');
      togglePopup(false); // Ferme le popup après une connexion réussie
    } else {
      alert('Login failed.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred, please try again.');
  }
}
// Ouvrir ou fermer le popup
function togglePopup(isVisible) {
  const popup = document.getElementById('login-popup');
  if (isVisible) {
    popup.classList.remove('hidden');
  } else {
    popup.classList.add('hidden');
  }
}

// Gérer la soumission du formulaire
async function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const endpoint = 'http://localhost:5000/login'; 

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful!');
      togglePopup(false); // Ferme le popup après succès
    } else {
      alert('Login failed.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred, please try again.');
  }
}
