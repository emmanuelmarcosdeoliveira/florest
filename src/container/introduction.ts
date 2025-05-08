import wildBeast from "../assets/parceiros/wildbeast.svg";
import videoChuva from "../assets/video/video_chuva.mp4";
export function renderIntroduction(containerId: string) {
  const introductionElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );
  if (!introductionElement) return;

  introductionElement.innerHTML = `
<section class="container">
  <div class="bg-gradient-to-t from-verde-950/80 max-sm:pt-12 max-sm:px-4 overflow-hidden pb-8 pt-64 px-8 relative rounded-2xl text-white">
      <video autoplay id="video" width="1280" muted  playsinline loop  height="720" class="-z-10 absolute animate-fade-in inset-0 object-cover size-full" src="${videoChuva}"></video>
      <div class="bg-verde-950/60 flex flex-col gap-2 items-start mb-8 p-4 rounded-xl sm:bg-verde-950 sm:flex-row sm:gap-8 sm:inline-flex sm:items-center sm:pl-4 sm:pr-1 sm:py-1 sm:rounded-full">
        Vagas para Dezembro abertas
        <a class="btn gap-2 inline-flex items-center text-verde-900"   href="#contato">Reserve Hoje
        <img src="./src/assets/seta.svg" alt=""  />
        </a>


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
