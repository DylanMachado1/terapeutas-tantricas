const services = [
  {
    id: "camilla-comun",
    title: "Masaje tántrico erótico en camilla",
    label: "Relax profundo",
    duration: 50,
    price: "$5000",
    featured: false,
    meta: ["Camilla profesional", "Masaje relajante profundo", "Aceites tibios"],
    audio: "assets/optimized/audio-ritual-01.ogg",
    audioLabel: "Audio camilla",
    description:
      "Una experiencia profesional en camilla para relajar el cuerpo, oxigenar los músculos y bajar el estrés acumulado. Aquí enfatizamos un verdadero masaje relajante. Comenzamos con un masaje sensorial que se realiza con tules suaves, luego un masaje relajante profundo con aceites de coco que poco a poco se convierte en erótico y sensual. Dando una terminación erótica manual. Sin penetración.",
  },
  {
    id: "camilla-interactiva",
    title: "Masaje tántrico erótico camilla interactivo",
    label: "Conexión participativa",
    duration: 60,
    price: "$12000",
    featured: true,
    meta: ["Masaje profesional", "Aprendizaje sensorial", "Ambiente privado"],
    audio: "assets/optimized/audio-ritual-02.ogg",
    audioLabel: "Audio camilla interactiva",
    description:
      "Una experiencia más cercana al sentir y dar la caricia consciente. Te permitirás interactuar con la terapeuta mediante la verdadera conexión del sentir en tres masajes. Permitiendo descubrir técnicas con la masajista que elevan el sentir sensorial, sensual y erótico. Aquí aprenderás a dar tantra, conexión y relax. Sentirás placer al dar placer sensorial mediante masajes guiados por el conocimiento y el sentir con la terapeuta. Aprenderás a disfrutar de dar un masaje sensorial con tules ligeros. Se descubrirán mediante las pausas de cada masaje. Disfrutarás de encontrar tu sensualidad y erotismo mediante el tantra, la aromaterapia e iluminación tenue. Terminación manual. No hay penetración.",
  },
  {
    id: "tatami-comun",
    title: "Masaje tántrico erótico en Tatami",
    label: "Sensualidad intensa",
    duration: 50,
    price: "$8000",
    featured: false,
    meta: ["Tatami profesional", "Piel a piel", "Aceites tibios"],
    audio: "assets/optimized/audio-ritual-03.ogg",
    audioLabel: "Audio Tatami",
    description:
      "Los tatamis nos dan el plus de cercanía y potenciamos el erotismo. Enfatizamos el piel a piel y la danza erótica de los cuerpos. Es una experiencia más jugada a la hora de la sensualidad. La caricia consciente se realiza de forma más ferviente y erótica. Es para quienes buscan recibir un erotismo más ferviente. La terapia se brinda en 4 etapas: conexión tántrica, una sola respiración; masaje sensorial con tules; masaje sensual erótico con aceites calientes premium de coco; piel a piel, cuerpo a cuerpo, full desnudes. Terminación manual ferviente. No hay penetración.",
  },
  {
    id: "tatami-interactivo",
    title: "Masaje tántrico erótico interactivo en Tatami",
    label: "Tantra a flor de piel",
    duration: 75,
    price: "USD 400",
    featured: true,
    meta: ["Experiencia interactiva", "Aceites premium", "Conexión"],
    audio: "assets/optimized/audio-ritual-04.ogg",
    audioLabel: "Audio Tatami interactivo",
    description:
      "El tatami invita a vivir una experiencia más inmersiva, más piel a piel, más cuerpo a cuerpo. Particularmente en el tatami interactivo se potencia la cercanía con la terapeuta, dando la libertad de practicar técnicas tántricas guiadas más jugadas. Al ser el tatami al ras del suelo nos permite danzar suavemente por el cuerpo sin barreras, disfrutando la caricia consciente como una sola. Podrán realizar ciertas poses tántricas, como el abrazo desnudo tántrico, donde ambos cuerpos se envuelven en el verdadero sentir de la respiración. Ambos se recostarán en el tatami dejando fluir sus cuerpos en la caricia. También se divide en 4 etapas: conexión tántrica en modo interactivo, ya que ambos practicarán esa cercanía; masaje consciente con tules sensorial, donde aprenderás a hacerlo armoniosamente; masaje sensual, permitiéndose ser una sola pieza y gozar de la danza erótica en el tatami; y un masaje ferviente, full desnudes, con estimulación con los pechos y terminación manual. Este masaje invita a reagendar el siguiente nivel.",
  },
  {
    id: "tatami-jacuzzi",
    title: "Masaje tántrico erótico interactivo en Tatami, experiencia jacuzzi y ceremonia del té",
    label: "Cita tántrica estrella",
    duration: 90,
    price: "USD 600",
    featured: true,
    meta: ["Ceremonia del té", "Jacuzzi privado", "Chacra privada"],
    description:
      "Más que un masaje tántrico, es una cita tántrica: un momento de disfrute, conexión y relax en un lugar privado, exclusivo y de alto nivel, con discreción desde el primer mensaje. Esta terapia está diseñada para vivir un ritual hermoso antes del masaje: la ceremonia del té, una pausa para disfrutar el silencio, el sentir y la sensorialidad máxima. La experiencia continúa con jacuzzi privado, aromas, una charla armoniosa y una ducha relax. Luego pasás a una sala confortable con tatami, luz tenue y un ambiente cuidadosamente preparado. La conexión tántrica inicia con caricias suaves y el masaje se vive en tres etapas: masaje sensorial con tules para activar la energía y despertar lentamente la excitación; masaje con aceites de coco premium orgánico, relajante al principio y cada vez más sensual; y una etapa final con aceite tibio, tules, soplidos y técnicas tántricas orientadas a una descarga manual intensa. Después se ofrece agua común o saborizada, una ducha para quitar excesos de aceite con jabón de glicerina sin perfumes y una despedida tranquila. Una verdadera experiencia tántrica, una cita de primer nivel. Manual y sin penetración.",
  },
];

const jacuzziAvailableFrom = "15/07/2026";

const galleryItems = [
  {
    type: "image",
    src: "assets/optimized/chacra-entrada.jpg",
    title: "Chacra Tantra exclusiva",
    label: "Entrada privada",
    layout: "feature warm",
  },
  {
    type: "video",
    src: "assets/optimized/video-reserva-conexion-relax.mp4",
    poster: "assets/optimized/chacra-entrada.jpg",
    title: "Reserva un momento de conexión y relax",
    label: "Chacra privada para caballeros",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/buda-jardin-atardecer.jpeg",
    title: "Chacra privada para caballeros",
    label: "Naturaleza y discreción",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/entrada-puerta.jpeg",
    title: "Recibimiento por la masajista",
    label: "Absoluta discreción",
    layout: "tall warm",
  },
  {
    type: "video",
    src: "assets/optimized/video-ritual-recibimiento.mp4",
    poster: "assets/optimized/cafe-bienvenida.jpg",
    title: "Bienvenida ritual",
    label: "Café de bienvenida",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/ducha-entrada.jpg",
    title: "Ducha de entrada y retiro",
    label: "Excesos de aceites",
    layout: "tall warm",
  },
  {
    type: "image",
    src: "assets/optimized/ducha-agua-luz.jpeg",
    title: "Ducha relax",
    label: "Agua tibia",
    layout: "tall soft",
  },
  {
    type: "image",
    src: "assets/optimized/bata-blanca-luz.jpeg",
    title: "Ducha anexa",
    label: "Pulcritud",
    layout: "tall soft",
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
    src: "assets/optimized/camilla-ambiente.jpg",
    title: "Camilla",
    label: "Privado",
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
    src: "assets/optimized/sala-tatami-roja.jpeg",
    title: "Tatami ceremonial",
    label: "Ceremonia privada",
    layout: "wide warm",
  },
  {
    type: "video",
    src: "assets/optimized/video-jacuzzi-relax.mp4",
    poster: "assets/optimized/sala-jacuzzi-referencia.jpg",
    title: "Jacuzzi privado",
    label: "Relax",
    layout: "wide warm",
  },
  {
    type: "image",
    src: "assets/optimized/agua-limon-bienvenida.jpeg",
    title: "Agua saborizada",
    label: "Después del jacuzzi",
    layout: "tall soft",
  },
  {
    type: "image",
    src: "assets/optimized/velas-canela.jpg",
    title: "Aromas suaves",
    label: "Ambiente",
    layout: "wide warm",
  },
  {
    type: "video",
    src: "assets/optimized/video-te-mereces-sentir.mp4",
    poster: "assets/optimized/ritual-esencia.jpg",
    title: "Te mereces sentir",
    label: "Sentir",
    layout: "square warm",
  },
  {
    type: "video",
    src: "assets/optimized/video-sesiones-unicas.mp4",
    poster: "assets/optimized/luz-tenue.jpg",
    title: "Un lugar diseñado para sesiones únicas",
    label: "Alto nivel",
    layout: "square warm",
  },
  {
    type: "image",
    src: "assets/optimized/ritual-buda.jpg",
    title: "Energía",
    label: "Tantra",
    layout: "square",
  },
  {
    type: "video",
    src: "assets/optimized/video-aromaterapia-sahumo.mp4",
    title: "Aromaterapia",
    label: "Ritual",
    layout: "square soft",
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
    src: "assets/optimized/conexion-manos-luz.jpeg",
    title: "Conexión tántrica",
    label: "Sentir",
    layout: "square soft",
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
    src: "assets/optimized/vela-canasto.jpg",
    title: "Pausa",
    label: "Calma",
    layout: "square soft",
  },
];

const ageKey = "terapeutasTantricasAgeOk";
const cookiePreferenceKey = "clubSenoresCookiePreference";
const whatsappNumber = "59892067907";
const mercadoPagoDepositUrl = "https://link.mercadopago.com.uy/reservaclub";
const locationMapUrl = "https://maps.app.goo.gl/AFiHAR1ZxmRMpgSKA";
const locationReference = "Portera roja";
const reservedBookingsKey = "clubTantricoReservedBookings";
const bookingWindowDays = 14;
const scheduleStartMinutes = 8 * 60;
const scheduleLatestStartMinutes = 19 * 60 + 15;
const scheduleStepMinutes = 75;
const cleaningBufferMinutes = 15;
const blockedEarlyWeekDays = [2, 4];
const blockedEarlyWeekTimes = ["08:00", "09:15"];
const reservedBookings = [
  // Cuando conectemos el backend, esta lista se reemplaza por reservas reales del servidor.
  // { date: "2026-06-25", time: "10:00", duration: 60 },
];

const els = {
  ageGate: document.querySelector("#ageGate"),
  confirmAge: document.querySelector("#confirmAge"),
  menuToggle: document.querySelector("#menuToggle"),
  mainNav: document.querySelector("#mainNav"),
  cookieBanner: document.querySelector("#cookieBanner"),
  serviceGrid: document.querySelector("#serviceGrid"),
  galleryGrid: document.querySelector("#galleryGrid"),
  priceGrid: document.querySelector("#priceGrid"),
  bookingForm: document.querySelector("#bookingForm"),
  bookingService: document.querySelector("#bookingService"),
  paymentOption: document.querySelector("#paymentOption"),
  mercadoPagoLink: document.querySelector("#mercadoPagoLink"),
  depositCheck: document.querySelector("#depositCheck"),
  bookingDate: document.querySelector("#bookingDate"),
  bookingTime: document.querySelector("#bookingTime"),
  calendarLock: document.querySelector("#calendarLock"),
  bookingCalendar: document.querySelector("#bookingCalendar"),
  dateGrid: document.querySelector("#dateGrid"),
  timeGrid: document.querySelector("#timeGrid"),
  selectedSchedule: document.querySelector("#selectedSchedule"),
  summaryBox: document.querySelector("#summaryBox"),
  toast: document.querySelector("#toast"),
};

function moneyLabel(service) {
  return service.price;
}

function paymentChoiceLabel() {
  return els.paymentOption.value === "100" ? "Total del servicio" : "50% del servicio";
}

function partialAmount(service, percent) {
  const match = service.price.match(/^(USD|\$)\s?(\d+)/i);
  if (!match) return service.price;
  const currency = match[1].toUpperCase() === "USD" ? "USD" : "$";
  const value = Math.round((Number(match[2]) * percent) / 100);
  return currency === "USD" ? `USD ${value}` : `$${value}`;
}

function selectedService() {
  return services.find((service) => service.id === els.bookingService.value) || services[0];
}

function toLocalDateISO(date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function formatDateTitle(date) {
  return new Intl.DateTimeFormat("es-UY", { weekday: "short", day: "numeric" }).format(date);
}

function formatDateSubtitle(date) {
  return new Intl.DateTimeFormat("es-UY", { month: "short" }).format(date);
}

function minutesToTime(minutes) {
  const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mins = String(minutes % 60).padStart(2, "0");
  return `${hours}:${mins}`;
}

function timeToMinutes(time) {
  const [hours, mins] = time.split(":").map(Number);
  return hours * 60 + mins;
}

function loadReservedBookings() {
  try {
    const saved = JSON.parse(localStorage.getItem(reservedBookingsKey) || "[]");
    return [...reservedBookings, ...saved];
  } catch {
    return reservedBookings;
  }
}

function saveReservedBooking(date, time, service) {
  try {
    const saved = JSON.parse(localStorage.getItem(reservedBookingsKey) || "[]");
    const next = [
      ...saved,
      {
        date,
        time,
        duration: bookingBlockMinutes(service),
        serviceDuration: service.duration,
        service: service.title,
      },
    ];
    localStorage.setItem(reservedBookingsKey, JSON.stringify(next));
  } catch {
    // Si el navegador bloquea localStorage, la reserva igual sigue por WhatsApp.
  }
}

function bookingBlockMinutes(service) {
  const serviceDuration = Number(service.duration || 60);
  return Math.max(scheduleStepMinutes, serviceDuration + cleaningBufferMinutes);
}

function isPastSlot(date, time) {
  const today = toLocalDateISO(new Date());
  if (date !== today) return false;
  return timeToMinutes(time) <= new Date().getHours() * 60 + new Date().getMinutes();
}

function isReservedSlot(date, time, service) {
  const start = timeToMinutes(time);
  const end = start + bookingBlockMinutes(service);

  return loadReservedBookings().some((booking) => {
    if (booking.date !== date) return false;
    const bookedStart = timeToMinutes(booking.time);
    const bookedEnd = bookedStart + Number(booking.duration || 60);
    return start < bookedEnd && end > bookedStart;
  });
}

function isFixedBlockedSlot(date, time) {
  if (!date) return false;
  const day = new Date(`${date}T12:00:00`).getDay();
  return blockedEarlyWeekDays.includes(day) && blockedEarlyWeekTimes.includes(time);
}

function isSlotAvailable(date, time, service) {
  const start = timeToMinutes(time);
  return (
    start <= scheduleLatestStartMinutes &&
    !isFixedBlockedSlot(date, time) &&
    !isPastSlot(date, time) &&
    !isReservedSlot(date, time, service)
  );
}

function renderServices() {
  els.serviceGrid.innerHTML = services
    .map(
      (service) => {
        const jacuzziNotice = service.id.includes("jacuzzi")
          ? `<div class="service-notice">Reservas con jacuzzi disponibles a partir del ${jacuzziAvailableFrom}.</div>`
          : "";
        const audioPlayer = service.audio
          ? `
            <div class="service-audio">
              <div>
                <span>Escuchar descripción</span>
                <strong>${service.audioLabel}</strong>
              </div>
              <audio controls preload="none" src="${service.audio}"></audio>
            </div>
          `
          : "";

        return `
        <article class="service-card ${service.featured ? "featured" : ""}">
          <div class="service-top">
            <div>
              <span>${service.label}</span>
              <h3>${service.title}</h3>
            </div>
            <span class="currency-pill">${service.duration} min</span>
          </div>
          <p>${service.description}</p>
          ${audioPlayer}
          ${jacuzziNotice}
          <div class="service-meta">
            ${service.meta.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <a class="btn ghost" href="#reserva" data-service="${service.id}">Reservar</a>
        </article>
      `;
      }
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
          <small>Duración ${service.duration} min · Reserva abonando 50% o total</small>
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

function renderDatePicker() {
  const isPaid = els.depositCheck.checked;
  const today = new Date();
  const selectedDate = els.bookingDate.value || toLocalDateISO(today);

  els.dateGrid.innerHTML = Array.from({ length: bookingWindowDays }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    const iso = toLocalDateISO(date);
    const isSelected = iso === selectedDate;
    const label = index === 0 ? "Hoy" : formatDateTitle(date);

    return `
      <button class="date-chip ${isSelected ? "selected" : ""}" type="button" data-date="${iso}" ${isPaid ? "" : "disabled"}>
        <span>${label}</span>
        <small>${formatDateSubtitle(date)}</small>
      </button>
    `;
  }).join("");

  if (!els.bookingDate.value) {
    els.bookingDate.value = selectedDate;
  }

  els.dateGrid.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!els.depositCheck.checked) return;
      els.bookingDate.value = button.dataset.date;
      els.bookingTime.value = "";
      renderDatePicker();
      renderTimePicker();
    });
  });
}

function renderTimePicker() {
  const isPaid = els.depositCheck.checked;
  const service = selectedService();
  const selectedDate = els.bookingDate.value;
  const selectedTime = els.bookingTime.value;

  els.selectedSchedule.textContent = selectedDate
    ? new Intl.DateTimeFormat("es-UY", { weekday: "long", day: "numeric", month: "long" }).format(
        new Date(`${selectedDate}T12:00:00`)
      )
    : "Selecciona una fecha";

  const slots = [];
  for (let minutes = scheduleStartMinutes; minutes <= scheduleLatestStartMinutes; minutes += scheduleStepMinutes) {
    const time = minutesToTime(minutes);
    const available = selectedDate && isSlotAvailable(selectedDate, time, service);
    const isSelected = selectedTime === time;
    slots.push(`
      <button class="time-chip ${isSelected ? "selected" : ""} ${available ? "" : "reserved"}" type="button" data-time="${time}" ${isPaid && available ? "" : "disabled"}>
        <span>${time}</span>
        <small>${available ? "Disponible" : "Ocupado"}</small>
      </button>
    `);
  }

  els.timeGrid.innerHTML = slots.join("");

  els.timeGrid.querySelectorAll("[data-time]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!els.depositCheck.checked || button.disabled) return;
      els.bookingTime.value = button.dataset.time;
      renderTimePicker();
    });
  });
}

function updateSchedulePicker() {
  renderDatePicker();
  renderTimePicker();
}

function updateSummary() {
  const service = selectedService();
  const percent = Number(els.paymentOption.value || 50);
  const amount = partialAmount(service, percent);
  els.summaryBox.innerHTML = `
    <strong>${service.title}</strong><br>
    Duración: ${service.duration} min<br>
    Valor: ${service.price}<br>
    Pago elegido: ${paymentChoiceLabel()} · ${amount}<br>
    Primero pagá por Mercado Pago. Luego se habilita el calendario y se envía el comprobante por WhatsApp.
  `;
}

function updatePaymentLink() {
  els.mercadoPagoLink.href = mercadoPagoDepositUrl;
  els.mercadoPagoLink.textContent = "Pagar 50% o total por Mercado Pago";
}

function updateCalendarLock() {
  const isPaid = els.depositCheck.checked;
  els.bookingCalendar.setAttribute("aria-disabled", String(!isPaid));
  els.calendarLock.textContent = isPaid
    ? "Calendario habilitado. Elegí una fecha y un horario disponible."
    : "El calendario se desbloquea al confirmar que ya realizaste el pago.";
  els.calendarLock.classList.toggle("unlocked", isPaid);
  updateSchedulePicker();
}

function buildWhatsAppText(service, name, phone, message, date, time) {
  const percent = Number(els.paymentOption.value || 50);
  const amount = partialAmount(service, percent);
  const lines = [
    "Hola, ya aboné por Mercado Pago y quiero confirmar mi reserva.",
    `Experiencia elegida: ${service.title}`,
    `Valor de la experiencia: ${service.price}`,
    `Pago realizado: ${paymentChoiceLabel()} (${amount})`,
    date ? `Día elegido: ${date}` : "",
    time ? `Horario elegido: ${time}` : "",
    `Ubicación: ${locationMapUrl}`,
    `Referencia de entrada: ${locationReference}`,
    "Adjunto el comprobante de pago en este chat.",
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
  const date = els.bookingDate.value;
  const time = els.bookingTime.value;

  if (!date || !time) {
    showToast("Elegí una fecha y un horario disponible para continuar.");
    return;
  }

  if (!isSlotAvailable(date, time, service)) {
    els.bookingTime.value = "";
    updateSchedulePicker();
    showToast("Ese horario ya no está disponible. Elegí otro turno.");
    return;
  }

  const text = encodeURIComponent(buildWhatsAppText(service, name, phone, message, date, time));
  const target = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${text}` : `https://wa.me/?text=${text}`;

  saveReservedBooking(date, time, service);
  updateSchedulePicker();
  window.open(target, "_blank", "noopener,noreferrer");
  showToast("WhatsApp abierto. Enviá ahí el comprobante de pago.");
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

function initCookieBanner() {
  if (!els.cookieBanner) return;

  let savedPreference = "";
  try {
    savedPreference = localStorage.getItem(cookiePreferenceKey) || "";
  } catch {
    savedPreference = "";
  }

  if (!savedPreference) {
    window.setTimeout(() => els.cookieBanner.classList.add("show"), 900);
  }

  els.cookieBanner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      try {
        localStorage.setItem(cookiePreferenceKey, button.dataset.cookieChoice);
      } catch {
        // Si el navegador bloquea almacenamiento local, ocultamos el aviso en esta visita.
      }
      els.cookieBanner.classList.remove("show");
    });
  });
}

function init() {
  renderServices();
  renderPrices();
  renderGallery();
  fillServiceSelect();
  updatePaymentLink();
  updateSummary();
  updateCalendarLock();
  initAgeGate();
  initCookieBanner();

  els.bookingService.addEventListener("change", () => {
    els.bookingTime.value = "";
    updateSummary();
    updateSchedulePicker();
  });
  els.paymentOption.addEventListener("change", updateSummary);
  els.depositCheck.addEventListener("change", updateCalendarLock);
  els.bookingForm.addEventListener("submit", submitBooking);
  els.menuToggle.addEventListener("click", () => els.mainNav.classList.toggle("open"));
  els.mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => els.mainNav.classList.remove("open"));
  });
}

init();
