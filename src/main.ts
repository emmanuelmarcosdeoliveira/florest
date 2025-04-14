import logo from "./assets/forest.svg";

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
`;
