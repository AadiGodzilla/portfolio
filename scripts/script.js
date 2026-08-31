const body = document.getElementById("container");

const parentname = document.getElementById("parentname");
const parentprojects = document.getElementById("parentprojects");
const parentcontacts = document.getElementById("parentcontacts");
const parentabout = document.getElementById("parentabout");
const parentothers = document.getElementById("parentothers");

const navbar = document.getElementById("header");
const headername = document.getElementById("name");
const contacts = document.getElementById("contacts");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const others = document.getElementById("others");
const line = document.getElementById("line");
const icon = document.querySelectorAll("#icon-line");

const menunav = document.getElementById("menu");
const menutoggle = document.getElementById("menu-toggle");

const menuabout = document.getElementById("menu-about");
const menuprojects = document.getElementById("menu-projects");
const menuothers = document.getElementById("menu-others");
const menucontacts = document.getElementById("menu-contacts");

function changeBg() {
  const scroll = window.scrollY;

  if (scroll == 0) {
    navbar.style.backgroundColor = "rgb(0,0,0)";
    headername.style.color = "rgba(255,255,255,0.6)";
    contacts.style.color = "rgba(255,255,255,0.6)";
    about.style.color = "rgba(255,255,255,0.6)";
    projects.style.color = "rgba(255,255,255,0.6)";
    others.style.color = "rgba(255,255,255,0.6)";
    line.style.backgroundColor = "rgba(36,36,36)";
    menunav.style.backgroundColor = "rgb(0,0,0)";
    menuabout.style.color = "rgb(255,255,255)";
    menuprojects.style.color = "rgb(255,255,255)";
    menuothers.style.color = "rgb(255,255,255)";
    menucontacts.style.color = "rgb(255,255,255)";

    for (let i = 0; i < icon.length; i++) {
      icon[i].style.backgroundColor = "rgb(255,255,255)";
    }

    parentname.onmouseover = () => {
      headername.style.color = "white";
    };

    parentcontacts.onmouseover = () => {
      contacts.style.color = "white";
    };

    parentprojects.onmouseover = () => {
      projects.style.color = "white";
    };

    parentabout.onmouseover = () => {
      about.style.color = "white";
    };

    parentothers.onmouseover = () => {
      others.style.color = "white";
    };

    parentname.onmouseout = () => {
      headername.style.color = "rgba(255,255,255,0.6)";
    };

    parentcontacts.onmouseout = () => {
      contacts.style.color = "rgba(255,255,255,0.6)";
    };

    parentprojects.onmouseout = () => {
      projects.style.color = "rgba(255,255,255,0.6)";
    };

    parentabout.onmouseout = () => {
      about.style.color = "rgba(255,255,255,0.6)";
    };

    parentothers.onmouseout = () => {
      others.style.color = "rgba(255,255,255,0.6)";
    };
  }
  if (scroll > 0) {
    navbar.style.backgroundColor = "rgba(255,255,255,0.95)";
    headername.style.color = "rgb(0,0,0)";
    contacts.style.color = "rgb(0,0,0)";
    about.style.color = "rgb(0,0,0)";
    projects.style.color = "rgb(0,0,0)";
    others.style.color = "rgb(0,0,0)";
    line.style.backgroundColor = "transparent";
    menunav.style.backgroundColor = "white";
    menuabout.style.color = "rgb(0,0,0)";
    menuprojects.style.color = "rgb(0,0,0)";
    menuothers.style.color = "rgb(0,0,0)";
    menucontacts.style.color = "rgb(0,0,0)";

    for (let i = 0; i < icon.length; i++) {
      icon[i].style.backgroundColor = "rgb(0,0,0)";
    }

    parentname.onmouseover = () => {
      headername.style.color = "rgb(0,0,0)";
    };

    parentcontacts.onmouseover = () => {
      contacts.style.color = "rgb(0,0,0)";
    };

    parentprojects.onmouseover = () => {
      projects.style.color = "rgb(0,0,0)";
    };

    parentabout.onmouseover = () => {
      about.style.color = "rgb(0,0,0)";
    };

    parentothers.onmouseover = () => {
      others.style.color = "rgb(0,0,0)";
    };

    parentname.onmouseout = () => {
      headername.style.color = "rgb(0,0,0)";
    };

    parentcontacts.onmouseout = () => {
      contacts.style.color = "rgb(0,0,0)";
    };

    parentprojects.onmouseout = () => {
      projects.style.color = "rgb(0,0,0)";
    };

    parentabout.onmouseout = () => {
      about.style.color = "rgb(0,0,0)";
    };

    parentothers.onmouseout = () => {
      others.style.color = "rgb(0,0,0)";
    };
  }
}

window.onload = () => {
  changeBg();
};

window.addEventListener("scroll", changeBg);

menutoggle.addEventListener("change", () => {
  if (menutoggle.checked === true) {
    menunav.style.height = "240px";
    window.style.overflow = "hidden";
  }
  if (menutoggle.checked === false) {
    menunav.style.height = "0px";
    window.style.overflow = "hidden";
  }
});

menuabout.onclick = () => {
  menutoggle.checked = false;
  menunav.style.height = "0px";
};

menucontacts.onclick = () => {
  menutoggle.checked = false;
  menunav.style.height = "0px";
};

menuothers.onclick = () => {
  menutoggle.checked = false;
  menunav.style.height = "0px";
};

menuprojects.onclick = () => {
  menutoggle.checked = false;
  menunav.style.height = "0px";
};

parentname.onclick = () => {
  menutoggle.checked = false;
  menunav.style.height = "0px";
};
