document.body.innerHTML = `
  <header class="site-header">
    <a class="brand" href="index.html"><span class="brand-mark">CS</span><span><b>CLUB DE</b><strong>SEÑORES</strong></span></a>
    <a class="button button-primary" href="index.html#contacto">Reservar ahora</a>
  </header>
  <main>
    <section class="detail-hero">
      <div class="detail-hero-inner reveal">
        <a class="back" href="index.html#servicios">← Volver a experiencias</a>
        <p class="eyebrow" data-label></p>
        <h1 data-title></h1>
        <p class="detail-subtitle" data-intro></p>
      </div>
    </section>
    <section class="detail-layout">
      <article class="detail-content reveal">
        <p class="eyebrow">La experiencia</p>
        <h2>Un recorrido de conexión y placer</h2>
        <p data-description></p>
        <div class="stage-list" data-stages></div>
        <div class="detail-note"><h3>Tip importante</h3><p data-note></p></div>
      </article>
      <aside class="detail-aside reveal">
        <p class="eyebrow">Incluye</p>
        <h2>Detalles de tu visita</h2>
        <ul><li>Atención exclusiva</li><li>Ambiente privado</li><li>Ducha al retirarse</li><li>Café de despedida opcional</li></ul>
        <a class="button button-primary" href="index.html#contacto">Consultar disponibilidad</a>
      </aside>
    </section>
    <nav class="detail-nav"><a href="index.html#servicios">← Todas las experiencias</a><a data-next href="#">Siguiente experiencia <span>→</span></a></nav>
  </main>`;

const commonScript = document.createElement('script');
commonScript.src = 'script.js';
document.body.appendChild(commonScript);

const serviceScript = document.createElement('script');
serviceScript.src = 'service-page.js';
document.body.appendChild(serviceScript);
