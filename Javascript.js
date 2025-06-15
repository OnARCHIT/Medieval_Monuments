const khusroDetails = [
  {
    title: "Overview",
    content: `Khusro Bagh is a vast, quadrangular Mughal garden and burial complex in Prayagraj, Uttar Pradesh. It houses the tombs of Prince Khusro Mirza (son of Emperor Jahangir), his mother Shah Begum, his sister Nithar Begum, and Bibi Tamolan. The site is famed for its grand sandstone mausoleums, intricate carvings, lush gardens, and turbulent royal history.`
  },
  {
    title: "Historical Background",
    content: `
      <ul>
        <li>Built by Jahangir in the early 1600s as a burial place for his family.</li>
        <li>Shah Begum, Jahangir's wife (and Khusro's mother), was the first to be buried here in 1604.</li>
        <li>Prince Khusro Mirza, once heir apparent, was imprisoned and later killed after rebelling against his father.</li>
        <li>Nithar Begum, Khusro's sister, built her own tomb here (the most architecturally elaborate).</li>
        <li>The garden witnessed key events during the 1857 Indian Mutiny, serving as a rebel headquarters.</li>
      </ul>
    `
  },
  // ... add more sections as needed
];

document.addEventListener("DOMContentLoaded", function() {
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupBody = document.getElementById('popup-body');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // Build the popup content
  const popupHtml = khusroDetails.map(section =>
    `<h2>${section.title}</h2><div>${section.content}</div>`
  ).join('');

  // Show popup on button click
  seeMoreBtn.addEventListener('click', function() {
    popupBody.innerHTML = popupHtml;
    popupOverlay.classList.add('active');
    document.body.style.overflow = "hidden"; // Prevent background scroll
    // Focus for accessibility
    setTimeout(() => {
      popupOverlay.querySelector('.popup-content').focus();
    }, 100);
  });

  // Close popup on close button
  closePopupBtn.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = "";
  });

  // Close popup when clicking outside the popup content
  popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = "";
    }
  });

  // Optional: Close popup with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && popupOverlay.classList.contains('active')) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = "";
    }
  });
});
