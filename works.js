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
  { title: "", location: "NEW YORK, AMERICA", captured: "", generated: "2025.06.02", image: "Images/Zara", note: "" },
  { title: "", location: "NEW YORK, AMERICA", captured: "", generated: "2024.08.23", image: "Images/TrumpTower", note: "" },
  { title: "", location: "?", captured: "", generated: "2026.09.15", image: "Images/Sink", note: "" },
  { title: "", location: "?", captured: "", generated: "2026.09.15", image: "Images/FreightLiner", note: "" },
  { title: "", location: "TOKYO, JAPAN", captured: "", generated: "2026.09.15", image: "Images/Tokyo", note: "" },
  { title: "", location: "SAN SALVADOR, EL SALVADOR", captured: "", generated: "2023.11.01", image: "Images/Elsalvador", note: "" },
  { title: "", location: "CDMX, MEXICO", captured: "", generated: "2025.09.18", image: "Images/Mexico", note: "" },
  { title: "", location: "NEW YORK, AMERICA", captured: "", generated: "2026.06.16", image: "Images/MoMA", note: "" },
  { title: "", location: "SALALAH, OMAN", captured: "", generated: "2026.03.23", image: "Images/Oman", note: "" },
  { title: "", location: "CHENNAI, INDIA", captured: "", generated: "2026.09.12", image: "Images/India", note: "" },
  { title: "", location: "CHIANG MAI, THAI", captured: "", generated: "2024.09.03", image: "Images/Thai", note: "" },
  { title: "", location: "NEW YORK, AMERICA", captured: "", generated: "2023.11.29", image: "Images/NV200", note: "" },
  { title: "", location: "ARGENTINA", captured: "", generated: "2026.04.08", image: "Images/Argentina", note: "" },
];
