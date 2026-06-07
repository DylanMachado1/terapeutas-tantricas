const storageKey = "terapeutasTantricasBookings";
const adminSessionKey = "terapeutasTantricasAdminPreview";

const services = {
  "camilla-comun": "Camilla Comun",
  "camilla-interactiva": "Camilla Interactiva",
  "camilla-jacuzzi": "Camilla Interactiva con Jacuzzi",
  "tatami-comun": "Tatami Comun",
  "tatami-jacuzzi": "Tatami Interactivo con Jacuzzi",
  "tatami-interactivo": "Tatami Interactivo",
  "masaje-parejas": "Masaje para Parejas",
};

const demoBookings = [
  {
    id: "demo-1",
    serviceId: "camilla-comun",
    name: "Cliente reservado",
    phone: "+598 99 000 111",
    date: todayIso(),
    time: "14:00",
    deposit: 1000,
    status: "pendiente",
    message: "Consulta por camilla y aceites tibios.",
  },
  {
    id: "demo-2",
    serviceId: "tatami-jacuzzi",
    name: "Reserva privada",
    phone: "+598 98 222 333",
    date: todayIso(1),
    time: "18:30",
    deposit: 1000,
    status: "confirmada",
    message: "Consulta por experiencia con jacuzzi y eucalipto.",
  },
  {
    id: "demo-3",
    serviceId: "masaje-parejas",
    name: "Pareja",
    phone: "+598 97 444 555",
    date: todayIso(2),
    time: "20:00",
    deposit: 1000,
    status: "pendiente",
    message: "Consulta disponibilidad para dos.",
  },
];

const els = {
  loginView: document.querySelector("#loginView"),
  dashboardView: document.querySelector("#dashboardView"),
  loginForm: document.querySelector("#loginForm"),
  logoutButton: document.querySelector("#logoutButton"),
  totalBookings: document.querySelector("#totalBookings"),
  todayBookings: document.querySelector("#todayBookings"),
  depositTotal: document.querySelector("#depositTotal"),
  busySlots: document.querySelector("#busySlots"),
  reservationTable: document.querySelector("#reservationTable"),
  timeline: document.querySelector("#timeline"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  toast: document.querySelector("#toast"),
};

function todayIso(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getBookings() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
    return stored.length ? stored.map(normalizeBooking) : demoBookings;
  } catch {
    return demoBookings;
  }
}

function saveRealBookings(bookings) {
  const realBookings = bookings.filter((booking) => !booking.id.startsWith("demo-"));
  localStorage.setItem(storageKey, JSON.stringify(realBookings));
}

function normalizeBooking(booking) {
  return {
    ...booking,
    status: booking.status || "pendiente",
    deposit: Number(booking.deposit || 1000),
    message: booking.message || "",
  };
}

function serviceName(serviceId) {
  return services[serviceId] || "Servicio";
}

function money(value) {
  return `$${Number(value || 0).toLocaleString("es-UY")}`;
}

function filteredBookings() {
  const query = els.searchInput.value.trim().toLowerCase();
  const status = els.statusFilter.value;

  return getBookings().filter((booking) => {
    const text = `${booking.name} ${booking.phone} ${serviceName(booking.serviceId)} ${booking.date}`.toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesStatus = status === "all" || booking.status === status;
    return matchesQuery && matchesStatus;
  });
}

function renderMetrics(bookings) {
  const today = todayIso();
  const active = bookings.filter((booking) => booking.status !== "cancelada");
  const todayCount = active.filter((booking) => booking.date === today).length;
  const depositTotal = active.reduce((sum, booking) => sum + Number(booking.deposit || 0), 0);

  els.totalBookings.textContent = bookings.length;
  els.todayBookings.textContent = todayCount;
  els.depositTotal.textContent = money(depositTotal);
  els.busySlots.textContent = active.length;
}

function renderTable(bookings) {
  if (!bookings.length) {
    els.reservationTable.innerHTML = `<div class="empty-state">No hay reservas con ese filtro.</div>`;
    return;
  }

  els.reservationTable.innerHTML = bookings
    .map(
      (booking) => `
        <article class="reservation-row">
          <div>
            <strong>${booking.name}</strong>
            <small>${booking.phone}</small>
          </div>
          <div>
            <strong>${serviceName(booking.serviceId)}</strong>
            <small>${booking.message || "Sin comentario"}</small>
          </div>
          <div>
            <strong>${booking.date} · ${booking.time}</strong>
            <small>Seña ${money(booking.deposit)}</small>
          </div>
          <div class="row-actions">
            <span class="status-pill ${booking.status}">${booking.status}</span>
            <button class="icon-btn" type="button" data-action="confirmada" data-id="${booking.id}">OK</button>
            <button class="icon-btn" type="button" data-action="cancelada" data-id="${booking.id}">X</button>
          </div>
        </article>
      `
    )
    .join("");

  els.reservationTable.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => updateStatus(button.dataset.id, button.dataset.action));
  });
}

function renderTimeline(bookings) {
  const upcoming = bookings
    .filter((booking) => booking.status !== "cancelada")
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
    .slice(0, 5);

  if (!upcoming.length) {
    els.timeline.innerHTML = `<div class="empty-state">Agenda libre por ahora.</div>`;
    return;
  }

  els.timeline.innerHTML = upcoming
    .map(
      (booking) => `
        <div class="timeline-item">
          <span class="timeline-time">${booking.time}</span>
          <div>
            <strong>${serviceName(booking.serviceId)}</strong>
            <small>${booking.date} · ${booking.name}</small>
          </div>
        </div>
      `
    )
    .join("");
}

function updateStatus(id, status) {
  const bookings = getBookings();
  const updated = bookings.map((booking) => (booking.id === id ? { ...booking, status } : booking));

  if (id.startsWith("demo-")) {
    showToast("Demo visual: en el servidor real este cambio quedaria guardado.");
  } else {
    saveRealBookings(updated);
    showToast("Estado actualizado.");
  }

  render();
}

function render() {
  const bookings = filteredBookings();
  renderMetrics(getBookings());
  renderTable(bookings);
  renderTimeline(getBookings());
}

function showDashboard() {
  els.loginView.classList.add("hidden");
  els.dashboardView.classList.remove("hidden");
  render();
}

function showLogin() {
  els.dashboardView.classList.add("hidden");
  els.loginView.classList.remove("hidden");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 3200);
}

els.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sessionStorage.setItem(adminSessionKey, "true");
  showDashboard();
});

els.logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem(adminSessionKey);
  showLogin();
});

els.searchInput.addEventListener("input", render);
els.statusFilter.addEventListener("change", render);

if (sessionStorage.getItem(adminSessionKey) === "true") {
  showDashboard();
} else {
  showLogin();
}
