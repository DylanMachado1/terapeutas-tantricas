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
      "Una experiencia profesional en camilla para relajar el cuerpo, oxigenar los musculos y bajar el estres acumulado. Combina masaje sensorial, relajante profundo y conexion sensual en un ambiente privado, cuidado y elegante.",
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
      "Una propuesta mas cercana e interactiva para disfrutar un masaje descontracturante mientras descubris movimientos, respiracion y sensorialidad junto a la terapeuta.",
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
      "La experiencia comienza con 15 minutos de jacuzzi caliente y aromas de eucalipto para soltar tensiones y oxigenar el cuerpo. Luego se realiza una pausa de preparacion con agua refrescante o cafe, y continua el masaje interactivo en camilla.",
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
      "Combinamos tres masajes en una experiencia mas intensa: sensorial, relajante y erotico sensual. El plus del tatami es un encuentro mas jugado, piel a piel, con aceites tibios y una conexion corporal profunda.",
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
      "Para descubrir el tantra desde el sentir y el aprendizaje sensorial. Respiracion consciente, estimulos suaves, caricias y energia compartida en un entorno elegante.",
  },
  {
    id: "tatami-jacuzzi",
    title: "Tatami Interactivo con Jacuzzi",
    label: "Relax extremo",
    duration: 90,
    price: "USD 500",
    deposit: "$1000",
    featured: true,
    meta: ["15 min de jacuzzi", "Tatami interactivo", "Aromas de eucalipto"],
    description:
      "Una experiencia superior que suma jacuzzi antes del tatami interactivo. El agua tibia, el vapor y el eucalipto preparan el cuerpo para una relajacion profunda; luego se pasa al tatami para vivir el masaje sensorial con mayor entrega y conexion.",
  },
  {
    id: "masaje-parejas",
    title: "Masaje para Parejas",
    label: "Experiencia compartida",
    duration: 90,
    price: "Consultar",
    deposit: "$1000",
    featured: true,
    meta: ["Parejas", "Conexion compartida", "Ambiente privado"],
    description:
      "Una experiencia pensada para dos personas, orientada a la relajacion, la conexion sensorial y el disfrute compartido en un entorno privado, calido y profesional.",
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
