export function renderForm(contanierId: string) {
  const formElement = document.querySelector<HTMLFormElement>(
    `#${contanierId}`,
  );
  if (!formElement) return;
  formElement.innerHTML = `
             <section
          id="contato"
          class="asm:pt-16 container gap-8 grid lg:grid-cols-2 pb-12 pt-12 sm:pb-16"
        >
          <div>
            <h1 class="font-serif mb-4 text-4xl text-verde-300">Nossos Contatos</h1>
            <p class="mb-8 text-balance text-gray-200">
              Tem interesse em passar ma temporada no Forest? Entre e contato com a
              gente por telefone e e-mail
            </p>
            <div class="gap-4 grid">
              <div>
                <span class="h-0.5 inline-block neon w-6"></span>
                <h2 class="font-serif mb-2 text-2xl text-verde-300">Base</h2>
                <p class="text-gray-300">
                  Rua da Mata, 123, Floresta Nacional - SP
                </p>
              </div>
              <div>
                <span class="h-0.5 inline-block neon w-6"></span>
                <h2 class="font-serif mb-2 text-2xl text-verde-300">Email</h2>
                <p class="text-gray-300">
                  <a href="mailto:oliveira.frontend@gmail.com">
                    oliveira.frontend@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <span class="h-0.5 inline-block neon w-6"></span>
                <h2 class="font-serif mb-2 text-2xl text-verde-300">Telefone</h2>
                <p class="text-gray-300">(11)- 99999-9999</p>
              </div>
            </div>
          </div>
          <form
            action=""
            class="bg-verde-900 gap-4 grid lg:p-8 p-4 rounded-xl shadow-2xl"
          >
            <div class="gap-1 grid">
              <label htmlFor="nome" class="text-white"> Nome </label>
              <input
                placeholder="Nome"
                class="input"
                type="text"
                id="nome"
              />
            </div>
            <div class="gap-4 grid sm:grid-cols-2">
              <div class="gap-1 grid">
                <label htmlFor="email" class="text-white"> Email </label>
                <input
                  placeholder="email"
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div class="gap-1 grid">
                <label htmlFor="telefone" class="text-white"> Telefone </label>
                <input
                  placeholder="(11)99999-9999"
                  id="telefone"
                  name="telefone"
                  class="input"
                  type="text"
                />
              </div>
            </div>
            <div class="gap-1 grid">
              <label htmlFor="mensagem" class="text-white"> Mensagem </label>
              <textarea 
              
                placeholder="Como podemos te ajudar?"
                id="mensagem"
                class="input resize-none"
                rows="{5}"
              ></textarea>
            </div>
            <button
              class="btn cursor-pointer place-self-start"
            >
              Enviar Email
            </button>
          </form>
        </section>
    
  
  
  
  
  
  
  
  `;
}
