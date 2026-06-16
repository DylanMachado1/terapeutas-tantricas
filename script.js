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
    price: "$12000 / USD 300",
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
    price: "USD 500",
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
    price: "$8000 / USD 200",
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
    label: "Nuestro masaje estrella",
    duration: 90,
    price: "USD 600",
    deposit: "$1000",
    featured: true,
    meta: ["Ceremonia del te", "Jacuzzi privado", "Chacra privada"],
    description:
      "Nuestro masaje estrella. Aqui descubriras el placer de vivir la verdadera experiencia tantra. Sin apuros, con calma y disfrute desde el corazon, te invitamos a disfrutar de este verdadero sentir. Esta terapia fue disenada por nuestra fundadora, con mas de 4 anos de experiencia en estas maravillosas terapias y 10 anos de tantra. Luego de un retiro espiritual y un ano de pausa, viajando y probando diferentes propuestas, trajo a Uruguay esta combinacion armoniosa. Aqui tanto la terapeuta como el paciente saben que viviran el verdadero sentir. La experiencia comienza con la ceremonia del te para abrir el ritual, acompanada por aromaterapia de menta o eucalipto. Encantados por un espacio preparado cuidadosamente, se sumergen en una experiencia tantrica de sensorialidad, conexion y disfrute pleno. Luego de disfrutar el te a eleccion, el jacuzzi relaja los cuerpos, los aromas frescos ayudan a oxigenar la musculatura y el cuerpo queda en perfecta armonia para tenderse en el tatami. La musica suave y las caricias sensoriales de la terapeuta invitan a dejarse llevar. Mas tarde, el aceite de coco y una danza erotica armoniosa con manos, pecho y piernas hacen un solo cuerpo. Al darse vuelta, el paciente se deja envolver por tules suaves, soplidos tibios y tecnicas centrales donde el tantra hace su magia. Aceites de coco y una cuidada estimulacion en las zonas intimas llevan a un orgasmo manual super intenso. Manual y sin penetracion. Luego de cada masaje hay una ducha para retirar excesos de aceite, y un cafecito o limonada de despedida. Un masaje que invita a volver siempre; un masaje que habla del verdadero tantra, sentir, conexion y relax. Chacra privada en Punta del Este. Absoluta discrecion desde el primer mensaje.",
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

const storageKey = "terapeutasTantricasBookings";
const ageKey = "terapeutasTantricasAgeOk";

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
  bookingDate: document.querySelector("#bookingDate"),
  bookingTime: document.querySelector("#bookingTime"),
  summaryBox: document.querySelector("#summaryBox"),
  reservationList: document.querySelector("#reservationList"),
  toast: document.querySelector("#toast"),
};

function moneyLabel(service) {
  return `${service.price} · Seña ${service.deposit}`;
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveBookings(bookings) {
  localStorage.setItem(storageKey, JSON.stringify(bookings));
}

function minutesFromTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function timeFromMinutes(total) {
  const hours = String(Math.floor(total / 60)).padStart(2, "0");
  const minutes = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function overlaps(startA, durationA, startB, durationB) {
  const endA = startA + durationA;
  const endB = startB + durationB;
  return startA < endB && startB < endA;
}

function selectedService() {
  return services.find((service) => service.id === els.bookingService.value) || services[0];
}

function isSlotAvailable(date, time, serviceId, ignoreId = null) {
  const service = services.find((item) => item.id === serviceId);
  const start = minutesFromTime(time);
  return !getBookings().some((booking) => {
    if (booking.id === ignoreId || booking.date !== date) return false;
    const bookedService = services.find((item) => item.id === booking.serviceId);
    return overlaps(start, service.duration, minutesFromTime(booking.time), bookedService.duration);
  });
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
      updateTimes();
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
          <small>Duracion ${service.duration} min · Reserva con seña de $1000</small>
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

function setMinDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  els.bookingDate.min = `${yyyy}-${mm}-${dd}`;
  els.bookingDate.value = els.bookingDate.min;
}

function updateTimes() {
  const service = selectedService();
  const date = els.bookingDate.value;
  const dayStart = 10 * 60;
  const dayEnd = 22 * 60;
  const options = [];

  for (let start = dayStart; start + service.duration <= dayEnd; start += 30) {
    const time = timeFromMinutes(start);
    const available = date ? isSlotAvailable(date, time, service.id) : true;
    options.push(`<option value="${time}" ${available ? "" : "disabled"}>${time}${available ? "" : " - ocupado"}</option>`);
  }

  els.bookingTime.innerHTML = options.join("");
}

function updateSummary() {
  const service = selectedService();
  const date = els.bookingDate.value;
  const time = els.bookingTime.value;
  if (!date || !time) {
    els.summaryBox.innerHTML = "<span>Selecciona experiencia, fecha y horario.</span>";
    return;
  }
  const end = timeFromMinutes(minutesFromTime(time) + service.duration);
  els.summaryBox.innerHTML = `
    <strong>${service.title}</strong><br>
    ${date} de ${time} a ${end}<br>
    Valor: ${service.price} · Seña para reservar: $1000
  `;
}

function renderBookings() {
  const bookings = getBookings().sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
  if (!bookings.length) {
    els.reservationList.innerHTML = `<p>No hay turnos bloqueados todavia.</p>`;
    return;
  }

  els.reservationList.innerHTML = bookings
    .map((booking) => {
      const service = services.find((item) => item.id === booking.serviceId);
      const end = timeFromMinutes(minutesFromTime(booking.time) + service.duration);
      return `
        <div class="reservation-item">
          <div>
            <strong>${booking.name} · ${service.title}</strong>
            <p>${booking.date} · ${booking.time} a ${end} · ${booking.phone}</p>
          </div>
          <button type="button" data-cancel="${booking.id}">Liberar</button>
        </div>
      `;
    })
    .join("");

  els.reservationList.querySelectorAll("[data-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      saveBookings(getBookings().filter((booking) => booking.id !== button.dataset.cancel));
      updateTimes();
      updateSummary();
      renderBookings();
      showToast("Horario liberado.");
    });
  });
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 3400);
}

function submitBooking(event) {
  event.preventDefault();
  const service = selectedService();
  const date = els.bookingDate.value;
  const time = els.bookingTime.value;

  if (!isSlotAvailable(date, time, service.id)) {
    showToast("Ese horario acaba de ocuparse. Elegi otro turno.");
    updateTimes();
    updateSummary();
    return;
  }

  const booking = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    serviceId: service.id,
    name: document.querySelector("#clientName").value.trim(),
    phone: document.querySelector("#clientPhone").value.trim(),
    message: document.querySelector("#bookingMessage").value.trim(),
    date,
    time,
    deposit: 1000,
    createdAt: new Date().toISOString(),
  };

  saveBookings([...getBookings(), booking]);
  els.bookingForm.reset();
  els.bookingService.value = service.id;
  setMinDate();
  updateTimes();
  updateSummary();
  renderBookings();
  showToast("Reserva confirmada. El horario quedo bloqueado con seña de $1000.");
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
  setMinDate();
  updateTimes();
  updateSummary();
  renderBookings();
  initAgeGate();

  els.bookingService.addEventListener("change", () => {
    updateTimes();
    updateSummary();
  });
  els.bookingDate.addEventListener("change", () => {
    updateTimes();
    updateSummary();
  });
  els.bookingTime.addEventListener("change", updateSummary);
  els.bookingForm.addEventListener("submit", submitBooking);
  els.menuToggle.addEventListener("click", () => els.mainNav.classList.toggle("open"));
  els.mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => els.mainNav.classList.remove("open"));
  });
}

init();
