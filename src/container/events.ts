export function renderEvents(containerId: string) {
  const eventsElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );
  if (!eventsElement) return;

  eventsElement.innerHTML = `

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
 
  
  
  
  
  `;
}
