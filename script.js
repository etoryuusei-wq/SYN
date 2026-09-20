(function () {
  const ledger = document.getElementById("ledger");
  const splash = document.getElementById("splash");

  if (splash) {
    setTimeout(() => {
      splash.style.display = "none";
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

  // 画像未設定のとき用の、単色の罫線パターン(方眼紙的)
  function placeholderStyle() {
    return "background-color: #171b21; background-image: repeating-linear-gradient(45deg, rgba(233,230,221,0.05) 0, rgba(233,230,221,0.05) 1px, transparent 1px, transparent 10px); border: 1px solid var(--line);";
  }

  function render() {
    ledger.innerHTML = "";

    WORKS.forEach((work, i) => {
      const row = document.createElement("article");
      row.className = "entry";

      const thumb = document.createElement("div");
      thumb.className = "entry-thumb";
      if (work.image) {
        const img = document.createElement("img");
        img.src = work.image;
        img.alt = work.title;
        img.loading = "lazy";
        thumb.appendChild(img);
      } else {
        thumb.setAttribute("style", placeholderStyle());
        thumb.classList.add("is-placeholder");
        thumb.dataset.location = work.location || "";
      }

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

      row.appendChild(rays);
      row.appendChild(thumb);
      row.appendChild(meta);
      row.style.animationDelay = `${0.15 + i * 0.08}s`;
      row.addEventListener("click", () => openViewer(i));
      ledger.appendChild(row);
    });
  }

  function openViewer(i) {
    const work = WORKS[i];
    if (work.image) {
      viewerImage.src = work.image;
      viewerImage.alt = work.title;
      viewerImage.style.display = "";
      viewerImage.parentElement.removeAttribute("style");
    } else {
      viewerImage.style.display = "none";
      viewerImage.parentElement.setAttribute("style", placeholderStyle());
    }
    viewerIndex.textContent = pad(i + 1);
    viewerTitle.textContent = work.title;
    viewerLocation.textContent = work.location;
    viewerCaptured.textContent = work.captured;
    viewerGenerated.textContent = work.generated;
    viewerNote.textContent = work.note || "";
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeViewer() {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  viewerClose.addEventListener("click", closeViewer);
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) closeViewer();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && viewer.classList.contains("is-open")) closeViewer();
  });

  render();
})();
