import logo from "../assets/forest.svg";

export function renderFooter(containerId: string) {
  const footerElement = document.querySelector<HTMLDivElement>(
    `#${containerId}`,
  );

  if (!footerElement) return;

  footerElement.innerHTML = `
    <div class="container pb-8 sm:pb-12">
      <div class="bg-verde-900 dm:p-12 mb-8 p-6 rounded-2xl">
        <div>
          <div class="gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:gap-12">
            <div>
              <h3 class="font-serif mb-4 text-white text-xl">Endereço</h3>
              <p class="text-gray-400">
                Rua da Mata 123 <br />
                Floresta Nacional <br /> São Paulo - SP
              </p>
            </div>
            <div>
              <h3 class="font-serif mb-4 text-white text-xl">Contato</h3>
              <p class="text-gray-400">
                <a href="mailto:oliveira.frontend@gmail.com">
                  oliveira.frontend@gmail.com
                </a>
                <br />
                (11)-9999-99999
              </p>
            </div>
            <div class="lg:justify-self-end mb-4">
              <img src="${logo}" alt="Logo Forest" />
              <p class="text-gray-400">Conecte-se com a Natureza</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-8 items-center justify-between lg:flex-row max-md:flex-col-reverse text-gray-400 text-sm">
        <p>
          Criado por
          <a class="cursor-pointer hover:text-verde-400" target="_blank" href="https://www.origamid.com/">
            Origamid
          </a>
          Desenvolvido por
          <a target="_blank" class="cursor-pointer hover:text-verde-400" href="https://www.portfolio.ofs.dev.br">
            Emmanuel Oliveira
          </a>
        </p>
        <p>© Forest. Todos os Direitos Reservados</p>
        <ul class="*:hover:text-verde-300 flex gap-8">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </div>
  `;
}
