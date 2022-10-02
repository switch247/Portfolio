// Render project cards dynamically (modern style)
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-cards-container");
  const header = document.querySelector(".project-header");
  // Create or get the Show More button container
  let showMoreBtnContainer = document.getElementById("show-more-btn-container");
  if (!showMoreBtnContainer) {
    showMoreBtnContainer = document.createElement("div");
    showMoreBtnContainer.id = "show-more-btn-container";
    showMoreBtnContainer.style = "width:100%;display:flex;justify-content:center;";
    // Insert after project-cards-container
    if (container && container.parentNode) {
      container.parentNode.insertBefore(showMoreBtnContainer, container.nextSibling);
    }
  }
  if (!container) return;
  container.innerHTML = "";
  if (header) {
    header.querySelector(".project-count").textContent = `${projects.length} Projects`;
  }

  const allProjects = [...projects].reverse();
  let displayCount = 6;
  const step = 6;

  function renderProjects() {
    container.innerHTML = "";
    showMoreBtnContainer.innerHTML = "";

    allProjects.slice(0, displayCount).forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.height = "370px";
      card.style.transition = "box-shadow 0.2s, transform 0.2s";
      let preview = "";
      let linkHref = project.location;
      let linkTarget = "_blank";
      if (project.iframeType === "local") {
        preview = `<div class=\"iframe-preview-wrapper\" style=\"width:100%;height:220px;overflow:hidden;border-radius:8px 8px 0 0;background:#222;\"><iframe src=\"${project.location}/index.html\" class=\"preview-iframe\" style=\"width:100%;height:100%;border:none;\" scrolling=\"no\" loading=\"lazy\"></iframe></div>`;
        linkHref = `${project.location}/index.html`;
      } else {
        preview = `<div class=\"fallback-img-wrapper\" style=\"width:100%;height:220px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#222;border-radius:8px 8px 0 0;\"><img src=\"https://cdni.iconscout.com/illustration/premium/preview/businessman-encounters-dns-error-illustration-svg-download-png-12777936.png\" alt=\"Preview not available\" style=\"max-width:90%;max-height:90%;object-fit:contain;opacity:0.85;\"></div>`;
      }
      const techChips = (project.technologies && project.technologies.length)
        ? `<div class=\"card-tech\" style=\"margin:0.5em 0 0.5em 0; display:flex; flex-wrap:wrap; gap:0.4em;\">${project.technologies.map(t => `<span style=\"background:#222;color:#b0eaff;padding:0.2em 0.7em;border-radius:12px;font-size:0.95em;\">${t}</span>`).join('')}</div>`
        : "";
      card.innerHTML = `
        ${preview}
        <div class=\"card-body\" style=\"position:relative;height:calc(100% - 220px);padding:1em;overflow:hidden;\">
          <h5 class=\"card-title\">${project.name}</h5>
          ${techChips}
          <div class=\"card-details\" style=\"margin-top:0.7em;transition:opacity 0.2s;opacity:0;pointer-events:none;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(20,30,40,0.97);color:#b0eaff;padding:1em;z-index:2;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;\">
            <div style=\"font-size:1.1em;margin-bottom:0.7em;\">${project.description}</div>
            <a href=\"${linkHref}\" class=\"card-link\" target=\"${linkTarget}\" style=\"color:#fff;background:#1a8cff;padding:0.5em 1.2em;border-radius:6px;text-decoration:none;\">View Project</a>
          </div>
        </div>
      `;
      card.addEventListener('mouseenter', function() {
        const details = card.querySelector('.card-details');
        if(details) { details.style.opacity = 1; details.style.pointerEvents = 'auto'; }
        card.style.boxShadow = '0 8px 32px 0 rgba(34,193,195,0.25)';
        card.style.transform = 'translateY(-4px) scale(1.03)';
      });
      card.addEventListener('mouseleave', function() {
        const details = card.querySelector('.card-details');
        if(details) { details.style.opacity = 0; details.style.pointerEvents = 'none'; }
        card.style.boxShadow = '';
        card.style.transform = '';
      });
      container.appendChild(card);
    });

    // Show More button outside the grid
    if (displayCount < allProjects.length) {
      let showMoreBtn = document.createElement("button");
      showMoreBtn.textContent = "Show More";
      showMoreBtn.className = "show-more-btn";
      showMoreBtn.style = "display:block;margin:2rem auto 0;padding:0.75rem 2rem;font-size:1.1em;background:#222;color:#b0eaff;border:none;border-radius:6px;cursor:pointer;";
      showMoreBtn.onclick = function() {
        displayCount += step;
        renderProjects();
      };
      showMoreBtnContainer.appendChild(showMoreBtn);
    }
  }

  renderProjects();
});
// Project list with name, location, and description
const projects = [
  { name: "Animated Countdown", location: "projects/animated-countdown", description: "A countdown timer with animated transitions.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Animated Navigation", location: "projects/animated-navigation", description: "Navigation bar with animated menu transitions.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Auto Text Effect", location: "projects/auto-text-effect", description: "Auto-typing text animation effect.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Background Slider", location: "projects/background-slider", description: "Background image slider with smooth transitions.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Blurry Loading", location: "projects/blurry-loading", description: "Blurry loading effect that sharpens as loading completes.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Button Ripple Effect", location: "projects/button-ripple-effect", description: "Button with a ripple click effect.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Calculator", location: "projects/calculator", description: "Simple calculator app with basic operations.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Content Placeholder", location: "projects/content-placeholder", description: "Animated content placeholder for loading states.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Custom Range Slider", location: "projects/custom-range-slider", description: "Custom styled range slider input.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Double Click Heart", location: "projects/double-click-heart", description: "Double click to like heart animation.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Double Vertical Slider", location: "projects/double-vertical-slider", description: "Vertical image/content slider.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Event Keycodes", location: "projects/event-keycodes", description: "Display keycodes for keyboard events.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "FAQ Collapse", location: "projects/faq-collapse", description: "FAQ section with collapse/expand.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Feedback UI Design", location: "projects/feedback-ui-design", description: "Feedback UI with rating.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Form Input Wave", location: "projects/form-input-wave", description: "Animated form input labels.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Good Cheap Fast", location: "projects/good-cheap-fast", description: "Good, cheap, fast toggle UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Hidden Search", location: "projects/hidden-search", description: "Hidden expanding search bar.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Image Carousel", location: "projects/image-carousel", description: "Image carousel slider.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Incrementing Counter", location: "projects/incrementing-counter", description: "Animated incrementing counter.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Insect Catch Game", location: "projects/insect-catch-game", description: "Catch the insect game.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Kinetic Loader", location: "projects/kinetic-loader", description: "Kinetic CSS loader animation.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Live User Filter", location: "projects/live-user-filter", description: "Live filter for user list.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Nav", location: "projects/nav", description: "Navigation UI demo.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Random Choice Picker", location: "projects/random-choice-picker", description: "Random choice picker UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Simple Timer", location: "projects/simple-timer", description: "Simple timer app.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Split Landing Page", location: "projects/split-landing-page", description: "Split landing page effect.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Scroll Animation", location: "projects/scroll-animation", description: "Scroll triggered animation.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Sticky Navigation", location: "projects/sticky-navigation", description: "Sticky navigation bar.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Testimonial Box Switcher", location: "projects/testimonial-box-switcher", description: "Testimonial box switcher UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Progress Steps", location: "projects/progress-steps", description: "Progress steps UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Theme Clock", location: "projects/theme-clock", description: "Themeable analog clock.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Toast Notification", location: "projects/toast-notification", description: "Toast notification UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Todo List 1", location: "projects/todo_list_1", description: "Todo list app version 1.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Password Generator", location: "projects/password-generator", description: "Random password generator.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Todo List 2", location: "projects/todo-list_2", description: "Todo list app version 2.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Random Image Generator", location: "projects/random-image-generator", description: "Random image generator.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Sound Board", location: "projects/sound-board", description: "Sound board app.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Mobile Tab Navigation", location: "projects/mobile-tab-navigation", description: "Mobile tab navigation UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Rotating Nav Animation", location: "projects/rotating-nav-animation", description: "Rotating navigation animation.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Expanding Cards", location: "projects/expanding-cards", description: "Expanding cards UI effect.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Verify Account UI", location: "projects/verify-account-ui", description: "Verify account UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Netflix Mobile Navigation", location: "projects/netflix-mobile-navigation", description: "Netflix style mobile nav.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Notes App", location: "projects/notes-app", description: "Simple notes app.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Drag N Drop", location: "projects/drag-n-drop", description: "Drag and drop UI demo.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Drink Water", location: "projects/drink-water", description: "Drink water tracker UI.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Password Strength Background", location: "projects/password-strength-background", description: "Password strength background effect.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "3D Boxes Background", location: "projects/3d-boxes-background", description: "Animated 3D boxes background effect using CSS and JavaScript.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Pokedex", location: "projects/pokedex", description: "Pokédex app for Pokémon info.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Quiz App", location: "projects/quiz-app", description: "Quiz application.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Github Profiles", location: "projects/github-profiles", description: "Search and display Github profiles.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Dad Jokes", location: "projects/dad-jokes", description: "Random dad jokes generator.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Hoverboard", location: "projects/hoverboard", description: "Hoverboard color effect.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Drawing App", location: "projects/drawing-app", description: "Simple drawing app with canvas.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  { name: "Movie App", location: "projects/movie-app", description: "Movie search and info app.", iframeType: "local", technologies: ["JavaScript", "HTML", "CSS"] },
  {
    name: "Kung Fu Fighting",
    location: "https://loquacious-pithivier-09668b.netlify.app/",
    description: "JavaScript 2 player fighting game.",
    iframeType: "external",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Jovian Careers Website",
    location: "https://jovian-careers-website-v2-58e4.onrender.com",
    description: "Careers website made in Flask.",
    iframeType: "external",
    technologies: ["Flask", "Python", "HTML", "CSS"]
  }
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove('show')
    }
  });
});
const hidden_element = document.querySelectorAll(".hidden");

hidden_element.forEach((element) => observer.observe(element));

window.matchMedia('(prefers-reduced-motion: reduce)');
