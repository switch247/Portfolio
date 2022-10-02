// Render project cards dynamically (modern style)
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-cards-container");
  const header = document.querySelector(".project-header");
  if (!container) return;
  container.innerHTML = "";
  // Project count
  if (header) {
    header.querySelector(".project-count").textContent = `${projects.length} Projects`;
  }

  // Show More logic for all projects
  const allProjects = [...projects].reverse();
  let displayCount = 6;
  const step = 6;

  function renderProjects() {
    container.innerHTML = "";
    
    allProjects.slice(0, displayCount).forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.height = "370px"; // Increased height
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
      // Technologies as chips
      const techChips = (project.technologies && project.technologies.length)
        ? `<div class=\"card-tech\" style=\"margin:0.5em 0 0.5em 0; display:flex; flex-wrap:wrap; gap:0.4em;\">${project.technologies.map(t => `<span style=\"background:#222;color:#b0eaff;padding:0.2em 0.7em;border-radius:12px;font-size:0.95em;\">${t}</span>`).join('')}</div>`
        : "";
      // Card body with hover details
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
      // Hover effect for details
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

    // Show More button
    if (displayCount < allProjects.length) {
      let showMoreBtn = document.createElement("button");
      showMoreBtn.textContent = "Show More";
      showMoreBtn.className = "show-more-btn";
      showMoreBtn.style = "display:block;margin:2rem auto 0;padding:0.75rem 2rem;font-size:1.1em;background:#222;color:#b0eaff;border:none;border-radius:6px;cursor:pointer;";
      showMoreBtn.onclick = function() {
        displayCount += step;
        renderProjects();
      };
      container.appendChild(showMoreBtn);
    }
  }

  renderProjects();
});
// Project list with name, location, and description
const projects = [
  {
    name: "3D Boxes Background",
    location: "projects/3d-boxes-background",
    description: "Animated 3D boxes background effect using CSS and JavaScript.",
    iframeType: "local" ,// 'local' for local folder, 'external' for deployed
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Animated Countdown",
    location: "projects/animated-countdown",
    description: "A countdown timer with animated transitions.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Animated Navigation",
    location: "projects/animated-navigation",
    description: "Navigation bar with animated menu transitions.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Auto Text Effect",
    location: "projects/auto-text-effect",
    description: "Auto-typing text animation effect.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Background Slider",
    location: "projects/background-slider",
    description: "Background image slider with smooth transitions.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Blurry Loading",
    location: "projects/blurry-loading",
    description: "Blurry loading effect that sharpens as loading completes.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Button Ripple Effect",
    location: "projects/button-ripple-effect",
    description: "Button with a ripple click effect.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Calculator",
    location: "projects/calculator",
    description: "Simple calculator app with basic operations.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Content Placeholder",
    location: "projects/content-placeholder",
    description: "Animated content placeholder for loading states.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Custom Range Slider",
    location: "projects/custom-range-slider",
    description: "Custom styled range slider input.",
    iframeType: "local",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
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
