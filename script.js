(function () {
  const ledger = document.getElementById("ledger");

  const viewer = document.getElementById("viewer");
  const viewerImage = document.getElementById("viewer-image");
  const viewerIndex = document.getElementById("viewer-index");
  const viewerTitle = document.getElementById("viewer-title");
  const viewerLocation = document.getElementById("viewer-location");
  const viewerCaptured = document.getElementById("viewer-captured");
  const viewerGenerated = document.getElementById("viewer-generated");
  const viewerNote = document.getElementById("viewer-note");
  const viewerClose = document.querySelector(".viewer-close");

  function pad(n) {
    return String(n).padStart(3, "0");
  }

  // 画像未設定のとき用の、決定論的な代替パターン(作品ごとに色味が変わる)
  function placeholderStyle(i) {
    const hue = (i * 47) % 360;
    const hue2 = (hue + 24) % 360;
    return `background-image: linear-gradient(155deg, hsl(${hue} 12% 22%), hsl(${hue2} 8% 14%));`;
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
        thumb.setAttribute("style", placeholderStyle(i));
        thumb.classList.add("is-placeholder");
      }

      const meta = document.createElement("div");
      meta.className = "entry-meta";
      meta.innerHTML = `
        <span class="entry-index">${pad(i + 1)}</span>
        <h2 class="entry-title">${work.title}</h2>
        <span class="entry-location">${work.location}</span>
        <span class="entry-year">${work.captured}</span>
      `;

      row.appendChild(thumb);
      row.appendChild(meta);
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
      viewerImage.parentElement.setAttribute("style", placeholderStyle(i));
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
