const services = [
  {
    id: "camilla-comun",
    title: "Camilla Comun",
    label: "Relax profundo",
    duration: 50,
    price: "$5000",
    deposit: "$1000",
    featured: false,
    meta: ["Camilla profesional", "Masaje relajante profundo", "Aceites tibios"],
    description:
      "Una experiencia profesional en camilla para relajar el cuerpo, oxigenar los musculos y bajar el estres acumulado. Aqui enfatizamos un verdadero masaje relajante. Comenzamos con un masaje sensorial que se realiza con tules suaves, luego un masaje relajante profundo con aceites de coco que poco a poco se convierte en erotico y sensual. Dando una terminacion erotica manual. Sin penetracion.",
  },
  {
    id: "camilla-interactiva",
    title: "Camilla Interactiva",
    label: "Conexion participativa",
    duration: 60,
    price: "$12000",
    deposit: "$1000",
    featured: true,
    meta: ["Masaje profesional", "Aprendizaje sensorial", "Ambiente privado"],
    description:
      "Una experiencia mas cercana al sentir y dar la caricia consciente. Te permitiras interactuar con la terapeuta mediante la verdadera conexion del sentir en tres masajes. Permitiendo descubrir tecnicas con la masajista que elevan el sentir sensorial, sensual y erotico. Aqui aprenderas a dar tantra, conexion y relax. Sentiras placer al dar placer sensorial mediante masajes guiados por el conocimiento y el sentir con la terapeuta. Aprenderas a disfrutar de dar un masaje sensorial con tules ligeros. Se descubriran mediante las pausas de cada masaje. Disfrutaras de encontrar tu sensualidad y erotismo mediante el tantra, la aromaterapia e iluminacion tenue. Terminacion manual. No hay penetracion.",
  },
  {
    id: "camilla-jacuzzi",
    title: "Camilla Interactiva con Jacuzzi",
    label: "Ritual completo",
    duration: 75,
    price: "USD 400",
    deposit: "$1000",
    featured: true,
    meta: ["15 min de jacuzzi", "Eucalipto", "Camilla interactiva"],
    description:
      "La experiencia comienza con un momento sublime en el jacuzzi, donde el agua tibia envuelve el cuerpo y ayuda a liberar tensiones, relajar la musculatura y aquietar la mente. El calor, el suave movimiento del agua, los aromas y la atmosfera cuidadosamente creada invitan a despertar los sentidos y a entrar en un estado de profundo bienestar y confianza. Es un instante de conexion con el presente, donde el cuerpo se afloja, la respiracion se vuelve mas pausada y cada sensacion se vive con mayor intensidad. La cercania, el entorno calido y la tranquilidad del momento convierten al jacuzzi en el inicio perfecto para una experiencia diferente. Luego recibiras un masaje relajante en camilla, disenado para llevarte a un estado de calma y entrega. A medida que la experiencia avanza, la terapeuta te guiara para que tambien puedas participar del arte de la caricia consciente haciendo un momento memorable, descubriendo el placer de dar y recibir desde la presencia, la sensibilidad y la conexion. A traves del tantra, que es el ser consciente del aqui y ahora, la aromaterapia, la iluminacion tenue y las distintas dinamicas guiadas, viviras una experiencia donde el bienestar, la relajacion y los sentidos se convierten en protagonistas: la verdadera experiencia tantra. Luego el masaje se convierte cada vez mas ferviente, logrando una terminacion manual en la camilla. No hay penetracion.",
  },
  {
    id: "tatami-comun",
    title: "Tatami Comun",
    label: "Sensualidad intensa",
    duration: 50,
    price: "$8000",
    deposit: "$1000",
    featured: false,
    meta: ["Tatami profesional", "Piel a piel", "Aceites tibios"],
    description:
      "Los tatamis nos dan el plus de cercania y potenciamos el erotismo. Enfatizamos el piel a piel y la danza erotica de los cuerpos. Es una experiencia mas jugada a la hora de sensualidad. La caricia consciente se realiza mas ferviente y erotica. Es para quienes buscan recibir un erotismo mas ferviente. La terapia se brinda en 4 etapas: conexion tantrica, una sola respiracion; masaje sensorial con tules; masaje sensual erotico con aceites calientes premium de coco; piel a piel, cuerpo a cuerpo, full desnudes. Terminacion manual ferviente. No hay penetracion.",
  },
  {
    id: "tatami-interactivo",
    title: "Tatami Interactivo",
    label: "Tantra a flor de piel",
    duration: 75,
    price: "USD 400",
    deposit: "$1000",
    featured: true,
    meta: ["Experiencia interactiva", "Aceites premium", "Conexion"],
    description:
      "El tatami invita a vivir una experiencia mas inmersiva, mas piel a piel, mas cuerpo a cuerpo. Particularmente en el tatami interactivo se potencia la cercania con la terapeuta, dando la libertad de practicar tecnicas tantricas guiadas mas jugadas. Al ser el tatami al ras del suelo nos permite danzar suavemente por el cuerpo sin barreras, disfrutando la caricia consciente como una sola. Podran realizar ciertas poses tantricas, como el abrazo desnudo tantrico, donde ambos cuerpos se envuelven en el verdadero sentir de la respiracion. Ambos se recostaran en el tatami dejando fluir sus cuerpos en la caricia. Tambien se divide en 4 etapas: conexion tantrica en modo interactivo, ya que ambos practicaran esa cercania; masaje consciente con tules sensorial, donde aprenderas a hacerlo armoniosamente; masaje sensual, permitiendose ser una sola pieza y gozar de la danza erotica en el tatami; y un masaje con terminacion manual. Ferviente, full desnudes, invita a pasar al siguiente nivel: masaje interactivo con jacuzzi y explorar la sensorialidad al 100%.",
  },
  {
    id: "tatami-jacuzzi",
    title: "Tatami Interactivo con Jacuzzi",
    label: "Cita tantrica estrella",
    duration: 90,
    price: "USD 500",
    deposit: "$1000",
    featured: true,
    meta: ["Ceremonia del te", "Jacuzzi privado", "Chacra privada"],
    description:
      "Mas que un masaje tantrico, es una cita tantrica: un momento de disfrute, conexion y relax en un lugar privado, exclusivo y de alto nivel, con discrecion desde el primer mensaje. La experiencia comienza con un cafe o te al lado de la chimenea, una charla armoniosa y una ducha relax. Luego pasas a una sala confortable con tatami, luz tenue, aromas y un ambiente cuidadosamente preparado. La conexion tantrica inicia con caricias suaves y el masaje se vive en tres etapas: masaje sensorial con tules para activar la energia y despertar lentamente la excitacion; masaje con aceites de coco premium organico, relajante al principio y cada vez mas sensual; y una etapa final con aceite tibio, tules, soplidos y tecnicas tantricas orientadas a una descarga manual intensa. Despues se ofrece agua comun o saborizada, una ducha para quitar excesos de aceite con jabon de glicerina sin perfumes y una despedida tranquila. Una verdadera experiencia tantrica, una cita de primer nivel. Manual y sin penetracion.",
  },
];

const galleryItems = [
  {
    type: "image",
    src: "assets/optimized/hero-silueta.jpg",
    title: "Entrada privada",
    label: "Picardia",
    layout: "feature warm",
  },
  {
    type: "image",
    src: "assets/optimized/noa-elegancia.jpg",
    title: "Elegancia",
    label: "Diosa Tantrica",
    layout: "tall noir",
  },
  {
    type: "image",
    src: "assets/optimized/noa-finesa.jpg",
    title: "Finesa",
    label: "Diosa Tantrica",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/noa-misterio.jpg",
    title: "Misterio",
    label: "Diosa Tantrica",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/noa-luz-calida.jpg",
    title: "Luz calida",
    label: "Diosa Tantrica",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/noa-blanco-bn.jpg",
    title: "Sutileza",
    label: "Diosa Tantrica",
    layout: "tall noir",
  },
  {
    type: "image",
    src: "assets/optimized/noa-blanco-calido.jpg",
    title: "Presencia",
    label: "Diosa Tantrica",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/diosa-azul-calida.jpg",
    title: "Estilo",
    label: "Diosa Tantrica",
    layout: "tall soft",
  },
  {
    type: "image",
    src: "assets/optimized/noa-calle-bn.jpg",
    title: "Misterio urbano",
    label: "Diosa Tantrica",
    layout: "tall noir",
  },
  {
    type: "image",
    src: "assets/optimized/vela-cuerpo.jpg",
    title: "Luz tibia",
    label: "Ambiente",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/tatami-sensual.jpg",
    title: "Tatami",
    label: "Intenso",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/manos-sensoriales.jpg",
    title: "Respirar y sentir",
    label: "Conexion",
    layout: "square soft",
  },
  {
    type: "image",
    src: "assets/optimized/ritual-buda.jpg",
    title: "Energia",
    label: "Tantra",
    layout: "square",
  },
  {
    type: "image",
    src: "assets/optimized/sala-recibimiento.jpg",
    title: "Sala de recibimiento",
    label: "Cafe de cortesia",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/camilla-ritual.jpg",
    title: "Camilla preparada",
    label: "Ambiente privado",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/sala-tatami.jpg",
    title: "Sala Tatami",
    label: "Espacio preparado",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/sala-jacuzzi-referencia.jpg",
    title: "Experiencia jacuzzi",
    label: "Ambiente privado",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/ducha-entrada.jpg",
    title: "Ducha de entrada y retiro",
    label: "Excesos de aceites",
    layout: "tall soft",
  },
  {
    type: "image",
    src: "assets/optimized/buda-luz-cercana.jpg",
    title: "Luz ceremonial",
    label: "Ritual",
    layout: "square warm",
  },
  {
    type: "image",
    src: "assets/optimized/buda-lampara.jpg",
    title: "Iluminacion tenue",
    label: "Calma",
    layout: "square noir",
  },
  {
    type: "image",
    src: "assets/optimized/sahumo.jpg",
    title: "Ritual suave",
    label: "Aromas",
    layout: "square soft",
  },
  {
    type: "image",
    src: "assets/optimized/velas-toallas.jpg",
    title: "Cuidado premium",
    label: "Relax",
    layout: "square soft",
  },
  {
    type: "image",
    src: "assets/optimized/camilla-ambiente.jpg",
    title: "Camilla",
    label: "Privado",
    layout: "wide soft",
  },
  {
    type: "image",
    src: "assets/optimized/aceite-sensorial.jpg",
    title: "Aceites tibios",
    label: "Detalle",
    layout: "square warm",
  },
  {
    type: "image",
    src: "assets/optimized/sombra-cuerpo.jpg",
    title: "Silueta",
    label: "Deseo",
    layout: "square soft",
  },
  {
    type: "image",
    src: "assets/optimized/masaje-espalda.jpg",
    title: "Relax profundo",
    label: "Tacto",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/flores-tatami.jpg",
    title: "Detalle floral",
    label: "Ritual",
    layout: "square warm",
  },
  {
    type: "image",
    src: "assets/optimized/flores-bn.jpg",
    title: "Texturas",
    label: "Sensual",
    layout: "square noir",
  },
  {
    type: "image",
    src: "assets/optimized/vela-cuerpo-close.jpg",
    title: "Calor cercano",
    label: "Luz",
    layout: "square warm",
  },
  {
    type: "image",
    src: "assets/optimized/vela-canasto.jpg",
    title: "Pausa",
    label: "Calma",
    layout: "square soft",
  },
  {
    type: "image",
    src: "assets/optimized/velas-canela.jpg",
    title: "Aromas suaves",
    label: "Ambiente",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/noa-rojo.jpg",
    title: "Intensidad",
    label: "Diosa Tantrica",
    layout: "tall warm",
  },
];

const ageKey = "terapeutasTantricasAgeOk";
const whatsappNumber = "59892067907";
const mercadoPagoDepositUrl = "";
const depositAmount = "$1000";

const els = {
  ageGate: document.querySelector("#ageGate"),
  confirmAge: document.querySelector("#confirmAge"),
  menuToggle: document.querySelector("#menuToggle"),
  mainNav: document.querySelector("#mainNav"),
  serviceGrid: document.querySelector("#serviceGrid"),
  galleryGrid: document.querySelector("#galleryGrid"),
  priceGrid: document.querySelector("#priceGrid"),
  bookingForm: document.querySelector("#bookingForm"),
  bookingService: document.querySelector("#bookingService"),
  mercadoPagoLink: document.querySelector("#mercadoPagoLink"),
  summaryBox: document.querySelector("#summaryBox"),
  toast: document.querySelector("#toast"),
};

function moneyLabel(service) {
  return `${service.price} · Seña ${service.deposit}`;
}

function selectedService() {
  return services.find((service) => service.id === els.bookingService.value) || services[0];
}

function renderServices() {
  els.serviceGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card ${service.featured ? "featured" : ""}">
          <div class="service-top">
            <div>
              <span>${service.label}</span>
              <h3>${service.title}</h3>
            </div>
            <span class="currency-pill">${service.duration} min</span>
          </div>
          <p>${service.description}</p>
          <div class="service-meta">
            ${service.meta.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <a class="btn ghost" href="#reserva" data-service="${service.id}">Reservar</a>
        </article>
      `
    )
    .join("");

  els.serviceGrid.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      els.bookingService.value = button.dataset.service;
      updateSummary();
    });
  });
}

function renderPrices() {
  els.priceGrid.innerHTML = services
    .map(
      (service) => `
        <article class="price-card">
          <p class="eyebrow">${service.title}</p>
          <strong>${service.price}</strong>
          <small>Duracion ${service.duration} min · Seña por Mercado Pago $1000</small>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  els.galleryGrid.innerHTML = galleryItems
    .map((item, index) => {
      const media =
        item.type === "video"
          ? `<video src="${item.src}" muted loop playsinline controls poster="${item.poster || ""}"></video>`
          : `<img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async" />`;

      return `
        <article class="gallery-item ${item.layout}" style="--delay: ${Math.min(index * 55, 420)}ms">
          ${media}
          <div class="gallery-caption">
            <strong>${item.title}</strong>
            <span>${item.label}</span>
          </div>
        </article>
      `;
    })
    .join("");

  revealGalleryItems();
}

function revealGalleryItems() {
  const items = els.galleryGrid.querySelectorAll(".gallery-item");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

function fillServiceSelect() {
  els.bookingService.innerHTML = services
    .map((service) => `<option value="${service.id}">${service.title} - ${moneyLabel(service)}</option>`)
    .join("");
}

function updateSummary() {
  const service = selectedService();
  els.summaryBox.innerHTML = `
    <strong>${service.title}</strong><br>
    Duracion: ${service.duration} min<br>
    Valor: ${service.price} · Seña Mercado Pago: ${depositAmount}<br>
    Despues del pago, envia el comprobante por WhatsApp para coordinar dia y horario.
  `;
}

function updatePaymentLink() {
  if (mercadoPagoDepositUrl) {
    els.mercadoPagoLink.href = mercadoPagoDepositUrl;
    els.mercadoPagoLink.textContent = `Pagar seña ${depositAmount} por Mercado Pago`;
    return;
  }

  const text = encodeURIComponent(
    `Hola, quiero pagar la seña de ${depositAmount} por Mercado Pago para coordinar una reserva.`
  );
  els.mercadoPagoLink.href = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${text}` : `https://wa.me/?text=${text}`;
  els.mercadoPagoLink.textContent = `Solicitar link de Mercado Pago`;
}

function buildWhatsAppText(service, name, phone, message) {
  const lines = [
    `Hola, ya abone la seña de ${depositAmount} por Mercado Pago y quiero coordinar mi reserva.`,
    `Experiencia elegida: ${service.title}`,
    `Valor de la experiencia: ${service.price}`,
    "Adjunto el comprobante de la seña en este chat.",
    name ? `Nombre: ${name}` : "",
    phone ? `WhatsApp: ${phone}` : "",
    message ? `Comentario: ${message}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 3400);
}

function submitBooking(event) {
  event.preventDefault();
  const service = selectedService();
  const name = document.querySelector("#clientName").value.trim();
  const phone = document.querySelector("#clientPhone").value.trim();
  const message = document.querySelector("#bookingMessage").value.trim();
  const text = encodeURIComponent(buildWhatsAppText(service, name, phone, message));
  const target = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${text}` : `https://wa.me/?text=${text}`;

  window.open(target, "_blank", "noopener,noreferrer");
  showToast("WhatsApp abierto. Envia ahi el comprobante de la seña y la experiencia elegida.");
}

function initAgeGate() {
  if (new URLSearchParams(window.location.search).has("resetAge")) {
    localStorage.removeItem(ageKey);
    sessionStorage.removeItem(ageKey);
  }

  if (sessionStorage.getItem(ageKey) === "true") {
    document.body.classList.remove("locked");
    els.ageGate.classList.remove("visible");
    return;
  }

  els.confirmAge.addEventListener("click", () => {
    sessionStorage.setItem(ageKey, "true");
    document.body.classList.remove("locked");
    els.ageGate.classList.remove("visible");
  });
}

function init() {
  renderServices();
  renderPrices();
  renderGallery();
  fillServiceSelect();
  updatePaymentLink();
  updateSummary();
  initAgeGate();

  els.bookingService.addEventListener("change", updateSummary);
  els.bookingForm.addEventListener("submit", submitBooking);
  els.menuToggle.addEventListener("click", () => els.mainNav.classList.toggle("open"));
  els.mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => els.mainNav.classList.remove("open"));
  });
}

init();
