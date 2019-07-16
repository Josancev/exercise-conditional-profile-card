import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let name = "Lucy";
  if (variables.name != null) name = variables.name;

  let github = "josancev";
  if (variables.github != null) github = variables.github;

  let lastname = "Boilett";
  if (variables.lastname != null) lastname = variables.lastname;

  let linkedin = "";
  if (variables.linkedin != null) linkedin = variables.linkedin;

  let instagram = "josesan4112";
  if (variables.instagram != null) instagram = variables.instagram;

  let twitter = "";
  if (variables.twitter != null) twitter = variables.twitter;

  let city = "undefined";
  switch (variables.city) {
    case `Miami`:
      city = variables.city;
      break;
    case `Munich`:
      city = variables.city;
      break;
    case `Caracas`:
      city = variables.city;
      break;
    case `Toronto`:
      city = variables.city;
      break;
    case `null`:
    default:
      `undefined`;
  }

  let country = "undefined";
  switch (variables.country) {
    case `USA`:
      country = variables.country;
      break;
    case `Germany`:
      country = variables.country;
      break;
    case `Canada`:
      country = variables.country;
      break;
    case `Venezuela`:
      country = variables.country;
      break;
    case `null`:
    default:
      `undefined`;
  }

  let role = "undefined";
  switch (variables.role) {
    case `Web Developer`:
      role = variables.role;
      break;
    case `Floor Planner`:
      role = variables.role;
      break;
    case `Technical Writter`:
      role = variables.role;
      break;
    case `null`:
    default:
      `undefined`;
  }

  let socialMediaPosition = "right";
  if (variables.socialMediaPosition == "right") {
    socialMediaPosition = variables.socialMediaPosition;
  } else if (socialMediaPosition == "left") {
    socialMediaPosition = "left";
  } else {
    socialMediaPosition = "left";
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="position-${socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}" target = "_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}" target = "_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedin}" target = "_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}" target= "_blank"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/79.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
