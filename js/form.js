/*
 * This script handles the submission of the "Talk To Us" form.
 * TODO:
 * 1. Add proper error handling
 * 2. Post data to a collection service, i.e. SendGrid or something like that
 * 3. Loading UI can be improved than just disabling the button.
 */
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const card = document.querySelector(".z-depth-5");
  const form = e.target;

  // Set button to disable on submit.
  disableForm(form);

  setTimeout(function() {
    // Just print out the JSON for now.
    const object = {};
    formData.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(JSON.stringify(object));

    // Render thank you card.
    renderThankYou(card);
  }, 2000);
});

function renderThankYou(card) {
  const thankYouDOM = `
    <div class="card-image">
      <img src="img/thanks.jpg" alt="Thank You">
    </div>
    <div class="card-content">
      <div class="card-title">
        Thank You
      </div>
      <p>
        We have received your message and will get in touch soon!
      </p>
    </div>
  `;

  card.innerHTML = thankYouDOM;
}

function disableForm(form) {
  const button = form.children[form.children.length - 1];
  button.classList.add("disabled");
}
