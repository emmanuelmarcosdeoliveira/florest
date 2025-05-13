import {
  default as caravan,
  default as dogs,
} from "../assets/parceiros/caravan.svg";
import lescone from "../assets/parceiros/lescone.svg";
import surfbot from "../assets/parceiros/surfbot.svg";
import wildBeast from "../assets/parceiros/wildbeast.svg";

export function renderPartners(containerId: string) {
  const partnersElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );
  if (!partnersElement) return;

  partnersElement.innerHTML = `
    
      <div class="container pb-12 sm:pb-16">
      <ul
        class="*:*:max-h-8 *:py-4 divide-verde-900 flex flex-col items-center max-sm:divide-y-2 sm:border-b-1 sm:border-t-1 sm:border-verde-900 sm:flex-row sm:gap-8 sm:py-8"
      >
        <li class="flex flex-1 justify-center">
          <img src="${caravan}" alt="Logo Caravan" />
        </li>
         <li class="flex flex-1 justify-center">
          <img src="${dogs}" alt="Logo Caravan" />
        </li>
          <li class="flex flex-1 justify-center">
          <img src="${wildBeast}" alt="Logo Caravan" />
        </li>
         <li class="flex flex-1 justify-center">
          <img src="${lescone}" alt="Logo Caravan" />
        </li>
         <li class="flex flex-1 justify-center">
          <img src="${surfbot}" alt="Logo Caravan" />
        </li>
      
      </ul>
    </div>
    `;
}
