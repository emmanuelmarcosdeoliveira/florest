import iconDay from "../assets/dia.svg";
import iconMorning from "../assets/manha.svg";
import iconNight from "../assets/noite.svg";

export function renderCycleNatural(containerId: string) {
  const cycleNaturalElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );
  if (!cycleNaturalElement) return;
  cycleNaturalElement.innerHTML = `
    
      <!-- Natural Cycle -->
    <section
      class="bg-[url('./assets/padrao.svg')] bg-center bg-contain bg-no-repeat container pb-12 sm:pb-16 sm:py-16"
    >
      <p
        class="mb-4 text-center text-sm text-verde-200 tracking-widest uppercase"
      >
        Ciclo Natural
      </p>
      <h2
        class="font-serif max-w-w-screen-md mb-8 mx-auto sm:text-6xl text-4xl text-balance text-center text-white"
      >
        Ritmo da Floresta
      </h2>
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div
          class="bg-verde-900 flex-1 gap-4 grid p-6 rounded-xl sm:hover:-translate-y-1 sm:p-8 transition-transform"
        >
          <div
            class="bg-verde-400 flex items-center justify-center rounded-full size-10"
          >
            <img src="${iconMorning}" alt="" />
          </div>
          <h3 class="font-serif text-2xl text-white">Amanhecer</h3>
          <p class="text-gray-400">
            Desperte com o canto dos pássaros e participe das nossas caminhadas
          </p>
          <span class="text-verde-300">05:40 - 07:00</span>
        </div>
        <div
          class="bg-verde-900 flex-1 gap-4 grid p-6 rounded-xl sm:hover:translate-y-10 sm:p-8 sm:translate-y-12 transition-transform"
        >
          <div
            class="bg-verde-400 flex items-center justify-center rounded-full size-10"
          >
            <img src="${iconDay}" alt="" />
          </div>
          <h3 class="font-serif text-2xl text-white">Meio-dia</h3>
          <p class="text-gray-400">
            Experimente nossas trilhas sombreadas e desfrute de um piquenique
            gourmet na natureza
          </p>
          <span class="text-verde-300">12:00 - 14:00</span>
        </div>
        <div
          class="bg-verde-900 flex-1 gap-4 grid p-6 rounded-xl sm:hover:-translate-y-1 sm:p-8 transition-transform"
        >
          <div
            class="bg-verde-400 flex items-center justify-center rounded-full size-10"
          >
            <img src="${iconNight}" alt="" />
          </div>
          <h3 class="font-serif text-2xl text-white">Anoitecer</h3>
          <p class="text-gray-400">
            Termine seu dia com nossa seção de observação de estrelas
          </p>
          <span class="text-verde-300">19:00 - 21:00</span>
        </div>
      </div>
    </section>




    `;
}
