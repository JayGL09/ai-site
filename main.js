// Mobile menu toggle
const burger = document.querySelector("[data-burger]");
const navlinks = document.querySelector("[data-navlinks]");
if (burger && navlinks){
  burger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
  });
}

// Back to top button
const toTop = document.querySelector("[data-top]");
if (toTop){
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) toTop.classList.add("show");
    else toTop.classList.remove("show");
  });
  toTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

// Tools filtering (only on outils.html)
const search = document.querySelector("[data-search]");
const filter = document.querySelector("[data-filter]");
const cards = Array.from(document.querySelectorAll("[data-tool]"));

function applyFilter(){
  if (!cards.length) return;

  const q = (search?.value || "").trim().toLowerCase();
  const cat = filter?.value || "all";

  cards.forEach(card => {
    const name = (card.getAttribute("data-name") || "").toLowerCase();
    const category = card.getAttribute("data-category") || "other";
    const okQuery = !q || name.includes(q);
    const okCat = (cat === "all") || (cat === category);
    card.style.display = (okQuery && okCat) ? "" : "none";
  });
}

if (search) search.addEventListener("input", applyFilter);
if (filter) filter.addEventListener("change", applyFilter);
applyFilter();
