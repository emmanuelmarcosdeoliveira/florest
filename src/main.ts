import canoagem from "./assets/canoagem.jpg";
import iconDay from "./assets/dia.svg";
import floresta from "./assets/floresta.jpg";
import logo from "./assets/forest.svg";
import iconMorning from "./assets/manha.svg";
import iconNight from "./assets/noite.svg";
import observacao_noturna from "./assets/observacao-noturna.jpg";
import wildbeaast from "./assets/parceiros/wildbeast.svg";
import vida_selvagem from "./assets/vida-selvagem.jpg";

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
          <img class="w-28" src=${wildbeaast} alt="logo Wildbeast">
          <span>|</span>
          Revista Nacional
        </p>
      </div>
    </div>
      </div>
</section>
<!-- Acomodações -->
    <section
      id="acomodacoes"
      class="container gap-8 grid lg:grid-cols-[2fr_3fr] mb-12 pt-16 sm:mb-16"
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
            <span class="bg-verde-400 h-0.5 inline-block w-6"> </span
            >Experimente a Natureza de Perto
          </li>
          <li>
            <span class="bg-verde-400 h-0.5 inline-block w-6"></span>
            Conecte-se com a Natureza
          </li>
          <li>
            <span class="bg-verde-400 h-0.5 inline-block w-6"></span>
            Desconecte-se do digital
          </li>
          <li>
            <span class="bg-verde-400 h-0.5 inline-block w-6"></span>
            Observe a vida selvagem
          </li>
          <li>
            <span class="bg-verde-400 h-0.5 inline-block w-6"></span>
            Escolha a sua cabine perfeita
          </li>
        </ul>
      </div>
      <div class="gap-4 grid grid-cols-[2fr_1fr] sm:gap-8">
        <div class="*:col-start-1 *:row-start-1 col-span-full grid">
          <img
            class="h-52 object-cover rounded-xl w-full"
            src="./src/assets/casa1.jpg"
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
            src="./src/assets/casa2.jpg"
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
            src="./src/assets/casa3.jpg"
            alt="Imagem de uma casa de campo"
          />
          <span
            class="bg-verde-950/60 justify-self-end m-2 px-4 py-2 rounded-full self-start text-sm/none text-white uppercase"
            >Shapire</span
          >
        </div>
      </div>
    </section>
    <!-- Eventos -->
    <section class="bg-verde-900 pt-12 py-12 sm:pb-16 sm:py-16" id="eventos">
      <div class="container">
        <p
          class="mb-4 mx-auto text-center text-sm text-verde-200 tracking-widest uppercase"
        >
          conecte-se com a natureza
        </p>
        <h2
          class="font-serif max-w-screen-md mb-8 mx-auto sm:text-6xl text-4xl text-balance text-center text-white"
        >
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h2>
        <div class="gap-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] overflow-x-auto pb-4 sm:gap-8 snap-mandatory snap-x">
          <div class="bg-verde-800 gap-4 grid p-6 rounded-xl sm:p-8 snap-center">
            <h3 class="font-serif text-2xl text-verde-300">Lua Nova</h3>
            <div class="text-white">
              <p class="font-serif text-5xl">23</p>
              <p class="text-xl">Março 2049</p>
            </div>
            <p class="text-balance text-gray-300">
              Melhores períodos para observação astronômica. O céu estará claro
              e as estrelas visíveis
            </p>
            <a
              class="bg-verde-400 inline-block justify-self-start px-4 py-2 rounded-full self-end text-verde-900"
              href="#contato"
              >Reservar 23/03
            </a>
          </div>
        
        <div>
          <div class="bg-verde-800 gap-4 grid p-6 rounded-xl sm:p-8 snap-center">
            <h3 class="font-serif text-2xl text-verde-300">Aurora Boreal</h3>
            <div class="text-white">
              <p class="font-serif text-5xl">15</p>
              <p class="text-xl">Abril 2049</p>
            </div>
            <p class="text-balance text-gray-300">
              Melhores períodos para observação da Aurora Boreal, o céu estará 
              iluminado pelas estrelas.
            </p>
            <a
              class="bg-verde-400 inline-block justify-self-start px-4 py-2 rounded-full self-end text-verde-900"
              href="#contato"
              >Reservar 15/04
            </a>
          </div>
        </div>
        <div>
          <div class="bg-verde-800 gap-4 grid p-6 rounded-xl sm:p-8 snap-center">
            <h3 class="font-serif text-2xl text-verde-300">Chuvas de Meteoros</h3>
            <div class="text-white">
              <p class="font-serif text-5xl">18</p>
              <p class="text-xl">Agosto 2049</p>
            </div>
            <p class="text-balance text-gray-300">
              Melhores períodos para observação da Chuva de Meteoros, o céu estará iluminado pelas estrelas.
            </p>
            <a
              class="bg-verde-400 inline-block justify-self-start px-4 py-2 rounded-full self-end text-verde-900"
              href="#contato"
              >Reservar 18/08
            </a>
          </div>
        </div>
      </div>
 </section>
 <!-- Experiences -->
    <section
      id="experiencias"
      class="container gap-8 grid pb-12 sm:grid-cols-2 sm:pt-16"
    >
      <div class="bg-verde-900 p-6 rounded-xl sm:p-8">
        <p class="mb-4 text-sm text-verde-200 tracking-widest uppercase">
          Experiências exclusivas
        </p>
        <h2
          class="capitalize font-serif lg:text-5xl mb-8 sm:text-4xl text-3xl text-balance text-white"
        >
          Escolha a sua proxima aventura
        </h2>
        <h3
          class="before:bg-verde-400 before:h-0.5 before:transition-[width] before:w-6 duration-1000 ease-in-out flex gap-4 hover:before:w-10 items-center text-white text-xl"
        >
          Observação Noturna
        </h3>
        <p class="mb-8 pl-10 text-balance text-gray-400">
          Explore a vida selvagem em seu habitat natural sob as estrelas.
        </p>
        <h3
          class="before:bg-verde-400 before:h-0.5 before:transition-[width] before:w-6 duration-1000 ease-in-out flex gap-4 hover:before:w-10 items-center text-white text-xl"
        >
          Vida Selvagem
        </h3>
        <p class="mb-8 pl-10 text-balance text-gray-400">
          Observe a vida selvagem em seu habitat natural.
        </p>
        <h3
          class="before:bg-verde-400 before:h-0.5 before:transition-[width] before:w-6 duration-1000 ease-in-out flex gap-4 hover:before:w-10 items-center text-white text-xl"
        >
          Canoagem
        </h3>
        <p class="mb-8 pl-10 text-balance text-gray-400">
          Conquiste novos horizontes com nossa equipe especializada.
        </p>
      </div>
      <div class="gap-4 grid grid-cols-2">
        <div class="cursor-pointer group overflow-hidden relative rounded-xl">
          <img
            class="group-hover:scale-110 object-cover size-full transition-transform"
            src="${canoagem}"
            alt="Praticando canoagem"
          />
          <div
            class="absolute bg-gradient-to-t flex from-verde-950/80 group-hover:opacity-100 inset-0 items-end opacity-0 p-4 transition-opacity"
          >
            <span class="text-white">Canoagem</span>
          </div>
        </div>
        <div
          class="cursor-pointer group overflow-hidden relative rounded-xl row-span-2"
        >
          <img
            class="group-hover:scale-110 object-cover size-full transition-transform"
            src="${observacao_noturna}"
            alt="Observação Noturna"
          />
          <div
            class="absolute bg-gradient-to-t flex from-verde-950/80 group-hover:opacity-100 inset-0 items-end opacity-0 p-4 transition-opacity"
          >
            <span class="text-white">Observação Noturna</span>
          </div>
        </div>
        <div class="cursor-pointer group overflow-hidden relative rounded-xl">
          <img
            class="group-hover:scale-110 object-cover size-full transition-transform"
            src="${vida_selvagem}"
            alt="Vida Selvagem"
          />
          <div
            class="absolute bg-gradient-to-t flex from-verde-950/80 group-hover:opacity-100 inset-0 items-end opacity-0 p-4 transition-opacity"
          >
            <span class="text-white">Vida Selvagem</span>
          </div>
        </div>
      </div>
    </section>
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
