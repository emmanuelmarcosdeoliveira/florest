import floresta from "../assets/floresta.jpg";
import wildBeast from "../assets/parceiros/wildbeast.svg";

export function renderIntroduction(containerId: string) {
  const introductionElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );
  if (!introductionElement) return;

  introductionElement.innerHTML = `
<section class="container">
  <div class="bg-gradient-to-t from-verde-950/80 max-sm:pt-12 max-sm:px-4 overflow-hidden pb-8 pt-64 px-8 relative rounded-2xl text-white">
      <img class="-z-10 absolute inset-0 object-cover size-full" src=${floresta} alt="Imagem de floresta">
      <div class="bg-verde-950/60 flex flex-col gap-2 items-start mb-8 p-4 rounded-xl sm:bg-verde-950 sm:flex-row sm:gap-8 sm:inline-flex sm:items-center sm:py-1 sm:rounded-full sn:pl-4 sn:pr-1">
        Vagas para Dezembro abertas
        <a class="bg-verde-400 inline-block px-4 py-2 rounded-full text-verde-900"   href="">Reserve Hoje</a>


     </div>
      <h1 class="font-serif max-w-screen-sm mb-8 sm:mb-20 sm:text-5xl text-4xl text-balance">Venha Experimentar a Vida na Floresta</h1>
     <div class="items-end justify-between sm:flex text-sm">
      <p class="max-sm:mb-4">Melhores locais para visitar <a class="decoration-2 hover:no-underline underline underline-offset-4" href="">2049</a> </p>
      <div >
        <p class="mb-2 uppercase">Recomendado por </p>
        <p class="flex gap-4 items-center">
          <img class="w-28" src=${wildBeast} alt="logo WildBeast">
          <span>|</span>
          Revista Nacional
        </p>
      </div>
    </div>
      </div>
</section>
  
  
  
  
  
  
  
  
  
  `;
}
