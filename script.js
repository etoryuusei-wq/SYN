(function () {
  const ledger = document.getElementById("ledger");
  const splash = document.getElementById("splash");

  if (splash) {
    setTimeout(() => {
      splash.classList.add("is-hidden");
    }, 2100);
  }

  const viewer = document.getElementById("viewer");
  const viewerImage = document.getElementById("viewer-image");
  const viewerIndex = document.getElementById("viewer-index");
  const viewerTitle = document.getElementById("viewer-title");
  const viewerLocation = document.getElementById("viewer-location");
  const viewerCaptured = document.getElementById("viewer-captured");
  const viewerGenerated = document.getElementById("viewer-generated");
  const viewerNote = document.getElementById("viewer-note");
  const viewerClose = document.querySelector(".viewer-close");
  const hudCoords = document.getElementById("hudCoords");

  function formatCoords(x, y) {
    return `X:${String(Math.round(x)).padStart(4, "0")} Y:${String(Math.round(y)).padStart(4, "0")}`;
  }

  document.addEventListener("mousemove", (e) => {
    hudCoords.textContent = formatCoords(e.clientX, e.clientY);
  });

  document.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (t) hudCoords.textContent = formatCoords(t.clientX, t.clientY);
  }, { passive: true });

  document.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (t) hudCoords.textContent = formatCoords(t.clientX, t.clientY);
  }, { passive: true });

  function pad(n) {
    return String(n).padStart(3, "0");
  }

  const MOBILE_QUERY = "(max-width: 640px)";
  const COLUMNS_MOBILE = 3;
  const COLUMNS_DESKTOP = 4;

  function currentColumns() {
    return window.matchMedia(MOBILE_QUERY).matches ? COLUMNS_MOBILE : COLUMNS_DESKTOP;
  }

  function render() {
    ledger.innerHTML = "";

    WORKS.forEach((work, i) => {
      const entry = document.createElement("article");
      entry.className = "entry";

      const imageWrap = document.createElement("div");
      imageWrap.className = "entry-image";

      const img = document.createElement("img");
      img.src = work.image;
      img.alt = work.title || work.location || `Work ${pad(i + 1)}`;
      img.loading = "lazy";
      img.decoding = "async";
      imageWrap.appendChild(img);

      const meta = document.createElement("div");
      meta.className = "entry-meta";
      meta.innerHTML = `
        <span class="entry-index">${pad(i + 1)}</span>
        <h2 class="entry-title">${work.title}</h2>
        <span class="entry-location">${work.location}</span>
        <span class="entry-year">${work.captured}</span>
      `;

      const rays = document.createElement("div");
      rays.className = "entry-rays";
      rays.setAttribute("aria-hidden", "true");
      rays.innerHTML = `
        <span class="ray ray-tl"></span>
        <span class="ray ray-tr"></span>
        <span class="ray ray-bl"></span>
        <span class="ray ray-br"></span>
      `;

      entry.appendChild(rays);
      entry.appendChild(imageWrap);
      entry.appendChild(meta);

      entry.addEventListener("click", () => openViewer(i));
      ledger.appendChild(entry);
    });

    const cols = currentColumns();
    const remainder = WORKS.length % cols;
    const fillerCount = remainder === 0 ? 0 : cols - remainder;

    for (let f = 0; f < fillerCount; f++) {
      const filler = document.createElement("div");
      filler.className = "entry";
      filler.setAttribute("aria-hidden", "true");
      ledger.appendChild(filler);
    }

    const totalCells = WORKS.length + fillerCount;
    const rows = totalCells / cols;

    const gridLines = document.createElement("div");
    gridLines.className = "grid-lines";
    gridLines.setAttribute("aria-hidden", "true");

    for (let c = 1; c < cols; c++) {
      const line = document.createElement("span");
      line.className = `grid-line vertical v${c}`;
      gridLines.appendChild(line);
    }

    for (let r = 1; r < rows; r++) {
      const line = document.createElement("span");
      line.className = `grid-line horizontal h${r}`;
      gridLines.appendChild(line);
    }

    ledger.appendChild(gridLines);
  }

  function openViewer(i) {
    const work = WORKS[i];

    viewerImage.src = work.image;
    viewerImage.alt = work.title || work.location || `Work ${pad(i + 1)}`;

    viewerIndex.textContent = pad(i + 1);
    viewerTitle.textContent = work.title;
    viewerLocation.textContent = work.location;
    viewerCaptured.textContent = work.captured;
    viewerGenerated.textContent = work.generated;
    viewerNote.textContent = work.note || "";

    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("viewer-open");
  }

  function closeViewer() {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("viewer-open");
  }

  viewerClose.addEventListener("click", closeViewer);

  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) closeViewer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && viewer.classList.contains("is-open")) {
      closeViewer();
    }
  });

  let lastColumns = currentColumns();
  render();

  window.addEventListener("resize", () => {
    const cols = currentColumns();

    if (cols !== lastColumns) {
      lastColumns = cols;
      render();
    }
  });
})();
