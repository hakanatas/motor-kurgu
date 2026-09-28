/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "motor-kurgu",
    "title": "Motor, Kurgu!",
    "titleEn": "Action, Edit!",
    "grade": 6,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.6.2.10",
    "outcome": "Video dosyası geliştirebilme",
    "outcomeEn": "Developing a video file",
    "duration": 121.1,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.5,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.5,
      "t1": 44.5,
      "name": "Düzenleyicinin parçaları",
      "en": "Parts of the editor",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.5,
      "t1": 73.5,
      "name": "Spotu kurgula",
      "en": "Edit the spot",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 73.5,
      "t1": 83.5,
      "name": "Yapay zekâ videosu",
      "en": "AI-made video",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 83.5,
      "t1": 105.2,
      "name": "Ölçütlerle değerlendir",
      "en": "Check with criteria",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 105.2,
      "t1": 121.1,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
