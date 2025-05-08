import casa1 from "../assets/casa1.jpg";
import casa2 from "../assets/casa2.jpg";
import casa3 from "../assets/casa3.jpg";

export function renderAccommodations(containerId: string) {
  const accommodationsElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );
  if (!accommodationsElement) return;

  accommodationsElement.innerHTML = `
    <section
      id="acomodacoes"
      class="container gap-8 grid lg:grid-cols-[2fr_3fr] mb-12 pt-16 radial-gradient sm:mb-16"
    >
      <div
        class="bg-[url('/src/assets/padrao.svg')] bg-contain bg-left-bottom bg-no-repeat content-end"
      >
        <h2 class="font-serif lg:text-5xl mb-8 text-4xl text-white">
          Refugio Natural
        </h2>
        <ul
          class="*:flex *:gap-4 *:items-center gap-4 grid sm:text-xl text-gray-200"
        >
          <li>
            <span class="h-0.5 inline-block neon w-6"> </span
            >Experimente a Natureza de Perto
          </li>
          <li>
            <span class="h-0.5 inline-block neon w-6"></span>
            Conecte-se com a Natureza
          </li>
          <li>
            <span class="h-0.5 inline-block neon w-6"></span>
            Desconecte-se do digital
          </li>
          <li>
            <span class="h-0.5 inline-block neon w-6"></span>
            Observe a vida selvagem
          </li>
          <li>
            <span class="h-0.5 inline-block neon w-6"></span>
            Escolha a sua cabine perfeita
          </li>
        </ul>
      </div>
      <div class="gap-4 grid grid-cols-[2fr_1fr] sm:gap-8">
        <div class="*:col-start-1 *:row-start-1 col-span-full grid">
          <img
            class="h-52 object-cover rounded-xl w-full"
            src="${casa1}"
            alt="Imagem de uma casa de campo"
          />
          <span
            class="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase"
            >Ruby</span
          >
        </div>
        <div class="*:col-start-1 *:row-start-1 grid">
          <img
            class="object-cover rounded-xl size-full"
            src="${casa2}"
            alt="Imagem de uma casa de campo"
          />
          <span
            class="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase"
            >Emerald</span
          >
        </div>
        <div class="*:col-start-1 *:row-start-1 grid">
          <img
            class="object-cover rounded-xl size-full"
            src="${casa3}"
            alt="Imagem de uma casa de campo"
          />
          <span
            class="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase"
            >Shapire</span
          >
        </div>
      </div>
    </section>
    
  
  
  
  
  
  
  `;
}
