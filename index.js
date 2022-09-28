const projectData = [
  {
    no: "001",
    name: "intro-JSON",
    contained:"learning",
    type: "JS",
    startDate: "23 Sep 2022",
    endDate: "23 Sep 2022",
    timeTaken: "1hr 30min",
    img: "assets/project1.png",
    url: "intro-JSON/index.html",
  },
  {
    no: "002",
    name: "Expanding-Card",
    contained:"project",
    type: "JS",
    startDate: "24 Sep 2022",
    endDate: "24 Sep 2022",
    timeTaken: "1hr 20min",
    img: "assets/project2.png",
    url: "expandingCard/index.html",
  },
  {
    no: "003",
    name: "Progress-Steps",
    contained:"project",
    type: "JS",
    startDate: "25 Sep 2022",
    endDate: "25 Sep 2022",
    timeTaken: "45min",
    img: "assets/project3.png",
    url: "progress-Steps/index.html",
  },
  {
    no: "004",
    name: "Project-JSON",
    contained:"learning",
    type: "JS",
    startDate: "26 Sep 2022",
    endDate: "27 Sep 2022",
    timeTaken: "2hr 55min",
    img: "assets/project4.png",
    url: "project-JSON/index.html",
  },
  {
    no: "005",
    name: "Rotating-Navbar",
    contained:"project",
    type: "CSS",
    startDate: "27 Sep 2022",
    endDate: "27 Sep 2022",
    timeTaken: "53min",
    img: "assets/project5.png",
    url: "rotating-Navigation/index.html",
  },
  {
    no: "006",
    name: "Hidden-Search",
    contained:"project",
    type: "CSS",
    startDate: "27 Sep 2022",
    endDate: "27 Sep 2022",
    timeTaken: "30min",
    img: "assets/project6.png",
    url: "hidden-Search/index.html",
  },
  {
    no: "007",
    name: "Scroll-Animation",
    contained:"project",
    type: "JS",
    startDate: "27 Sep 2022",
    endDate: "27 Sep 2022",
    timeTaken: "47min",
    img: "assets/project7.png",
    url: "scroll-Animation/index.html",
  },
  {
    no: "008",
    name: "Etsy",
    contained:"web-clone",
    type: "JS",
    startDate: "28 Sep 2022",
    endDate: "28 Sep 2022",
    timeTaken: "2hr 45min",
    img: "assets/project8.png",
    url: "web-clone:etsy/index.html",
  },
];

function Projectcards(cardData) {
  return `
  <a href="${cardData.url}">
        <div class="project-card"
        style = ${
          cardData.contained === "web-clone"
            ? "background-color:LightSalmon;"
            : cardData.contained === "learning"
            ? "background-color:BurlyWood;"
            : cardData.contained === "project"
            ? "background-color:CornflowerBlue;"
            : "background-color:SeaShell;"}
            >
        <div class="project-card-title-container">
            <span>${cardData.no}</span>
            <span>${cardData.name}</span>
            <span style = ${
              cardData.type === "JS"
                ? "background-color:Khaki;"
                : cardData.type === "HTML"
                ? "background-color:Tomato;"
                : cardData.type === "CSS"
                ? "background-color:SkyBlue;"
                : "background-color:DarkSeaGreen;"
            }
            >${cardData.type}</span>
        </div>
        <img class="project-card-img" src="${cardData.img}" alt="${
    cardData.name
  }-img">
        <div class="project-info-container">
            <div><strong>Started on:</strong> <span>${
              cardData.startDate
            }</span></div>
            <div><strong>Completed on:</strong> <span>${
              cardData.endDate
            }</span></div>
            <div><strong>Time taken:</strong> <span>${
              cardData.timeTaken
            }</span></div>
        </div>
        </div>
    </a>
    `;
}

const projectTemplate = (document.getElementById("app").innerHTML = `
  <h1 class="header">Yoki's Projects</h1>
  <div class="main">
        ${projectData.map(Projectcards).join("")}
   </div>
  <p class="footer">In this page there are ${projectData.length} projects.</p>
`);
