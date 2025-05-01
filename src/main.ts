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
