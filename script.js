const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
  footerYear.textContent =
    `© ${currentYear} Batson Engineering Limited. All rights reserved.`;
}


const whatsappLinks = document.querySelectorAll(
  'a[href*="wa.me"]'
);

whatsappLinks.forEach(link => {

  link.addEventListener("click", () => {
    console.log("Opening Batson Engineering WhatsApp...");
  });

});