const stage = document.getElementById("stage");
const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const letter = document.getElementById("letter");

seal.addEventListener("click", () => {
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  stage.classList.add("opened");

  setTimeout(() => {
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 600);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const miniEnvelope = document.getElementById("miniEnvelope");
const confessionText = document.getElementById("confessionText");

miniEnvelope.addEventListener("click", () => {
  confessionText.hidden = false;
  confessionText.classList.add("reveal-in");
  miniEnvelope.classList.add("opened");
});
