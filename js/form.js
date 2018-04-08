// This script handles the submission of form to the Email API.
var apiURL = "https://isian-email-api.herokuapp.com/email";

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  var formData = new FormData(e.target);
  var card = document.querySelector(".z-depth-5");
  var form = e.target;

  const json = {};
  formData.forEach(function(value, key) {
    json[key] = value;
  });

  disableForm(form);

  fetch(apiURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(json)
  })
    .then(response => {
      if (response.status === 200) return renderThankYou(card);
      renderSorry(card);
    })
    .catch(err => {
      console.error(err);
      renderSorry(card);
    });
});

function renderThankYou(card) {
  var thankYouDOM = `
    <div class="card-image">
      <img src="img/thanks.png" alt="Thank You">
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
  fadeIn(card);
}

function renderSorry(card) {
  var thankYouDOM = `
    <div class="card-image">
      <img src="img/sorry.png" alt="Sorry">
    </div>
    <div class="card-content">
      <div class="card-title">
        Sorry
      </div>
      <p>
        Something went wrong. Please email us directly at hello@isian.io or click
        <a href="mailto:hello@isian.io">here</a>.
      </p>
    </div>
  `;

  card.innerHTML = thankYouDOM;
  fadeIn(card);
}

function disableForm(form) {
  var button = form.children[form.children.length - 1];
  button.classList.add("disabled");
}

function fadeIn(element) {
  element.style.opacity = 0;
  (function fade() {
    var val = parseFloat(element.style.opacity);
    if (!((val += 0.01) > 1)) {
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
