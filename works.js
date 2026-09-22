/*
  作品データ一覧。
  1作品につき1つのオブジェクトを追加していく。
  image は images/ フォルダに入れたファイル名を指定する(例: images/001.jpg)。
  画像を用意していない作品は image を空文字 "" のままにしておくと、
  プレースホルダーが自動で表示される。

  title      作品タイトル
  location   拡大表示のLOCATIONに出る文字列
  captured   拡大表示のCAPTUREDに出る日付
  generated  拡大表示のGENERATEDに出る日付
  note       任意の一言。空文字でも可
*/

const WORKS = [
  { title: "", road: "222 Broadway, New York", location: "NEW YORK, USA", observed: "2022.07", generated: "2025.06.02", image: "images/Zara.jpg" },
  { title: "", road: "725 5th Ave, New York", location: "NEW YORK, USA", observed: "2022.06", generated: "2024.08.23", image: "images/TrumpTower.jpg" },
  { title: "", location: "-", observed: "2023.11", generated: "2026.09.15", image: "images/Sink.jpg" },
  { title: "", location: "-", observed: "-", generated: "2026.09.15", image: "images/FreightLiner.jpg" },
  { title: "", location: "TOKYO, JAPAN", observed: "2023.03", generated: "2026.09.15", image: "images/Tokyo.jpg" },
  { title: "", road: "49 Av Sur", location: "SAN SALVADOR, EL SALVADOR", observed: "2025.10", generated: "2023.11.01", image: "images/ElSalvador.jpg" },
  { title: "", road: "Londres, Juárez, Cuauhtémoc 06600 Ciudad de México, Cuauhtémoc", location: "CDMX, MEXICO", observed: "2024.09", generated: "2025.09.18", image: "images/Mexico.jpg" },
  { title: "", road: "44 W 53rd St, NY", location: "NEW YORK, USA", observed: "2024.08", generated: "2026.06.16", image: "images/MoMA.jpg" },
  { title: "", road: "Dhofar", location: "SALALAH, OMAN", observed: "2024.03", generated: "2026.03.23", image: "images/Oman.jpg" },
  { title: "", road: "86, Rotary Nagar Main Rd, Jagadambal Colony, Rotary Nagar, Mylapore, Chennai, Tamil Nadu", location: "Chennai, INDIA", observed: "2025.03", generated: "2026.09.12", image: "images/India.jpg" },
  { title: "", road: "30 Nimmanahaeminda Road Nimmanhaemin Tambon Su Thep, Mueang Chiang Mai District", location: "CHIANG MAI, THAI", observed: "2023.03", generated: "2024.09.03", image: "images/Thai.jpg" },
  { title: "", road: "397 S End Ave, New York", location: "NEW YORK, USA", observed: "2021.05", generated: "2023.11.29", image: "images/NV200.jpg" },
  { title: "", road: "Italia 160, X5200 Dean Funes, Córdoba,", location: "Córdoba, ARGENTINA", observed: "2024.11", generated: "2026.04.08", image: "images/Argentina.jpg" },
];
