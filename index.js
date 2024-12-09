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


