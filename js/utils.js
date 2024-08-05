export function loadPerson(personData) {
  const {
    email,
    fullName,
    photo,
    profession,
    languages,
    interests,
    experience,
    education,
    tools,
  } = personData;
  loadPhoto(photo);
  loadWelcome({ fullName, profession });
  loadEmail(email);
  loadInterests(interests);
  loadEducation(education);
  loadLanguages(languages);
  loadExperience(experience);
  loadTools(tools);
}

function loadWelcome(data) {
  const div = document.querySelector("#short-info");
  if (div) {
    div.innerHTML = `
    <h4>Hello👋 I'm</h4>
    <div>
      <h2 id="name" class="editable">${data?.fullName}</h2>
      <h3 id="profession" class="editable">${data?.profession}</h3>
    </div>`;
  }
}

function loadPhoto(photoPath) {
  const div = document.querySelector("#person-photo");
  if (div) {
    div.style["background-image"] = `url("/${photoPath}")`;
  }
}

function loadEmail(email) {
  const div = document.querySelector("#email");
  if (div) {
    document.querySelector("#email").innerHTML = `
    <h2>Let´s chat! I´m ready to work on excinting projects</h2>
    <h4 id="email" class="editable">${email}</h4>`;
  }
}

function loadInterests(interests) {
  const div = document.querySelector("#interests");
  if (div) {
    div.innerHTML = `
    <h2>Interests</h2>
    <ul class="interests__content">
      ${interests.reduce(
        (res, interest, i) =>
          (res += `<li id="interest-${i}" class="editable">${interest}</li>`),
        ""
      )}
    </ul>
  `;
  }
}

function loadEducation(education) {
  const div = document.querySelector("#education");
  if (div) {
    div.innerHTML = `
    <h2>Education</h2>
    <div class="education__content">
      ${education.reduce(
        (res, edu, i) =>
          (res += `<div class="education__content__card">
            <h4 id="edu-date-${i}" class="editable">${edu?.date}</h4>
            <div>
              <h4 id="edu-professtion-${i}" class="editable">${
            edu?.profession
          }</h4>
              <p class="tags">
                ${(edu?.tags ?? []).map((t) => "#" + t).join(" ")}
              </p>
            </div>
      <p id="edu-school-${i}" class="editable">${edu?.school}</p>
    </div>`),
        ""
      )}
</div>
`;
  }
}

function loadExperience(experience) {
  const div = document.querySelector("#experience");
  if (div) {
    div.innerHTML = `
    <h2>Experience</h2>
    <div class="experience__content">
      ${experience.reduce(
        (res, w, i) =>
          (res += `<div class="experience__content__card">
        <p class="editable" id="exp-${i}-date">${w?.date}t</p>
      <div>
        <div>
          <h4 id="exp-position-${i}" class="editable">${w?.position}</h4>
          <p>
            ${w?.place + (w?.type ? " | " + w?.type : "")}
          </p>
        </div>
        <ul>
          ${(w?.details ?? []).reduce(
            (res, d, j) =>
              (res += `<li id="exp-${i}-${j}-details" class="editable">${d}</li>`),
            ""
          )}
        </ul>
      </div>
      </div>`),
        ""
      )}
    </div>
  `;
  }
}

function loadLanguages(languages) {
  const div = document.querySelector("#languages");
  if (div) {
    const table = document.createElement("table");
    table.classList.add("languages__content");

    div.innerHTML = "<h2>Languages</h2>";
    div.append(table);

    for (let i = 0; i < languages.length; i++) {
      const lang = languages[i];
      const td = document.createElement("td");
      td.classList.add("languages__content__" + lang?.lvl);
      td.innerHTML = `<div class="languages__content__${lang?.lvl}"></div>`;

      const tr = document.createElement("tr");
      tr.innerHTML = `<td><h4 id="language-${i}" class="editable">${lang?.name}</h4></td>`;
      tr.append(td);

      table.append(tr);
    }
  }
}

function loadTools(tools) {
  const div = document.querySelector("#tools");
  const toolsArr = Object.entries(tools);
  if (div) {
    div.innerHTML = `
    <h2>Tools</h2>
    <div class="tools__content">${toolsArr.reduce(
      (res, [groupName, tools]) =>
        res +
        `<h5 class="tools__content__label">${groupName}</h5><div class="tools__content__group"><h5 class="tools__content__label-sm">${groupName}</h5>${tools.reduce(
          (res, tool) =>
            res +
            `<img
                src="/toolsIcons/${tool}.svg"
                alt="${tool}"
                loading="lazy"
              />`,
          ""
        )}</div>`,
      ""
    )}</div>`;
  }
}
