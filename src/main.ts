import logo from "./assets/forest.svg";
import wildbeaast from "./assets/parceiros/wildbeast.svg";
import floresta from "./assets/floresta.jpg"
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <!-- Conteúdo do dia e Clima -->
    <div class="container flex justify-center md:justify-start mt-4">
      <div class="bg-verde-900 inline-flex items-center rounded-md">
        <span class="-left-1 bg-verde-200 block relative rounded size-2"></span>
        <div class="divide-verde-800 divide-x-2 flex gap-2 text-verde-300">
          <div id="day" class="capitalize px-4 py-2">segunda</div>
          <div id="temperature" class="px-4 py-2">25°</div>
          <div id="climate" class="px-4 py-2">⛅</div>
        </div>
      </div>
    </div>
    <!-- Menu  -->
    <header class="container flex gap-8 items-center justify-between mt-8 py-8">
      <a href="./"> <img src=${logo} alt="Logo Forest" /></a>
      <nav>
        <ul class="flex flex-wrap gap-8 text-white text-xl">
          <li>
            <a
              class="hover:underline hover:underline-offset-8"
              href="#acomodacoes"
              >Acomodações</a
            >
          </li>
          <li>
            <a class="hover:underline hover:underline-offset-8" href="#eventos"
              >Eventos</a
            >
          </li>
          <li>
            <a
              class="hover:underline hover:underline-offset-8"
              href="#experiencias"
              >Experiências</a
            >
          </li>
          <li>
            <a class="hover:underline hover:underline-offset-8" href="#contato"
              >Contanto</a
            >
          </li>
        </ul>
      </nav>
    </header>
      <!--Introdução -->
<section class="container">
  <div class="text-white pt-64 px-8 pb-8 relative rounded-2xl overflow-hidden bg-gradient-to-t from-verde-950/80 ">
      <img class="absolute size-full object-cover inset-0  -z-10" src=${floresta} alt="Imagem de floresta">
      <div class="bg-verde-950 inline-flex items-center gap-8 mb-8 py-1 pr-1 rounded-full pl-4">
        Vagas para Dezembro abertas
        <a class="bg-verde-400 text-verde-900 px-4 py-2 inline-block rounded-full"   href="">Reserve Hoje</a>


     </div>
      <h1 class=" mb-20 font-serif mb-8 text-balance text-5xl max-w-screen-sm ">Venha Experimentar a Vida na Floresta</h1>
     <div class="text-sm flex justify-between items-end">
      <p>Melhores lugares para visitar <a class="underline decoration-2 underline-offset-4 hover:no-underline " href="">2049</a> </p>
      <div >
        <p class="uppercase mb-2">Recomendado por </p>
        <p class="flex items-center gap-4">
          <img class="w-28" src=${wildbeaast} alt="logo Wildbeast">
          <span>|</span>
          Revista Nacional
        </p>
      </div>
    </div>
      </div>
</section>
`;
