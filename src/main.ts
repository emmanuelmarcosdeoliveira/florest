import { renderAccommodations } from "./container/Accommodations.ts";
import { renderCycleNatural } from "./container/cycleNatural.ts";
import { renderEvents } from "./container/events.ts";
import { renderExperiences } from "./container/experiences.ts";
import { renderFooter } from "./container/footer.ts";
import { renderForm } from "./container/forms.ts";
import { renderHeader } from "./container/Header.ts";
import { renderIntroduction } from "./container/introduction.ts";
import { renderPartners } from "./container/partners.ts";

renderHeader("header");
renderForm("form");
renderIntroduction("introducao");
renderPartners("partners");
renderFooter("footer");
renderCycleNatural("cycle_Natural");
renderExperiences("experiences");
renderEvents("events");
renderAccommodations("acomodacoes");

const day = document.getElementById("day");
const climate = document.getElementById("climate");
const temperature = document.getElementById("temperature");
const video = document.getElementById("video") as HTMLVideoElement;
const random = Math.floor(Math.random() * 11) + 20;
temperature!.innerText = `${random}°`;
climate!.innerText = random < 25 ? ` 🌧️ ${random + 5}% ` : `🌤️`;
const date = new Date();
day!.innerText = date.toLocaleDateString("pt-BR", {
  weekday: "long",
});
video!.src =
  random < 25
    ? `./src/assets/video/video_chuva.mp4`
    : `./src/assets/video/video_sol.mp4`;
