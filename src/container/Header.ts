import logo from "../assets/forest.svg";

export function renderHeader(containerId: string) {
  const headerElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );

  if (!headerElement) return;

  headerElement.innerHTML = `
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
  
    <div class="container flex gap-8 items-center justify-between mt-8 py-8">
      <a href="./"> <img src=${logo} alt="Logo Forest" /></a>
      <!-- hidden -->
      <nav id="mobile-menu"
       class="hidden items-center lg:block max-lg:fixed max-lg:inset-0 max-lg:w-full z-40">
      <div class="backdrop-blur-md bg-verde-950/40 fixed inset-0 lg:hidden"></div>
        <ul class="lg:flex lg:flex-wrap lg:gap-8 lg:text-xl max-lg:absolute max-lg:divide-white/10 max-lg:divide-y-2 max-lg:p-8 max-lg:w-full max:lg:z-50 text-2xl text-white">
          <li class="animate-1 animate-slide-in opacity-0">
            <a
              class="block lg:hover:underline lg:hover:underline-offset-8 lg:p-0 lg:py-2 max-lg:hover:bg-white/10 p-4"
              href="#acomodacoes"
              >Acomodações</a
            >
          </li>
          <li class="animate-2 animate-slide-in opacity-0">
            <a class="block lg:hover:underline lg:hover:underline-offset-8 lg:p-0 lg:py-2 max-lg:hover:bg-white/10 p-4" href="#eventos"
              >Eventos</a
            >
          </li>
          <li class="animate-3 animate-slide-in opacity-0">
            <a
              class="block lg:hover:underline lg:hover:underline-offset-8 lg:p-0 lg:py-2 max-lg:hover:bg-white/10 p-4"
              href="#experiencias"
              >Experiências</a
            >
          </li>
          <li class="animate-4 animate-slide-in opacity-0">
            <a class="block lg:hover:underline lg:hover:underline-offset-8 lg:p-0 lg:py-2 max-lg:hover:bg-white/10 p-4" href="#contato"
              >Contanto</a
            >
          </li>
        </ul>
      </nav>
      <button id="mobile-button" class="bg-verde-400 flex gap-3 items-center lg:hidden px-4 py-2 rounded-full text-verde-900">Menu
      <span class="*:bg-verde-800 *:h-0.5 *:rounded-mb flex flex-col h-3 justify-between w-4">
        <span></span>
        <span></span>
        <span></span>
      </span>
      </button>

    </div>

  `;
  const mobileButton = document.getElementById("mobile-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileButton?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
    mobileMenu?.classList.toggle("flex");
  });
  mobileMenu?.addEventListener("click", () => {
    mobileMenu?.classList.add("hidden");
    mobileMenu?.classList.remove("flex");
  });
}
