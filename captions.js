/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Çekimler bitti. Motor, kurgu!", en: "Filming's done. Action, edit!",
      note: "Karo'nun sınıfı çekim taslağındaki dört sahneyi çekti. Şimdi sıra bunları bir videoda birleştirmekte." },
    { scene: 1, start: 8.4, end: 14.2, tr: "Taslağa uygun bir video oluşturalım", en: "Let's build a video that matches the storyboard",
      note: "Bu derste çekim taslağımıza uygun bir video dosyası oluşturup değerlendireceğiz." },
    { scene: 2, start: 17, end: 22.7, tr: "Zaman çizgisi: klipler sırayla", en: "Timeline: clips in order",
      note: "Zaman çizgisinde klipler soldan sağa, taslaktaki sırayla dizilir." },
    { scene: 2, start: 23.5, end: 29.2, tr: "Katmanlar: görüntü, ses, yazı", en: "Layers: picture, sound, text",
      note: "Görüntü, ses ve yazı ayrı katmanlarda durur. Birini değiştirirken diğerini bozmayız." },
    { scene: 2, start: 30, end: 35.6, tr: "Jenerik: emeği geçenler ve kaynaklar", en: "Credits: the team and the sources",
      note: "Videonun sonundaki jenerikte emeği geçenleri ve kullandığımız müziğin kaynağını yazarız." },
    { scene: 2, start: 36.5, end: 43.1, tr: "Taslaktaki her kare bir klip olur", en: "Each storyboard frame becomes a clip",
      note: "Kesme, kırpma, geçiş ve başlık araçlarıyla taslağımızı videoya dönüştürürüz." },
    { scene: 3, start: 46, end: 51.6, tr: "Klipleri taslak sırasıyla diz", en: "Line the clips up in storyboard order",
      note: "Klipleri içe aktarır ve taslaktaki sırayla zaman çizgisine dizeriz." },
    { scene: 3, start: 52.5, end: 58.1, tr: "Toplam 30 saniyeye kırp", en: "Trim it all to 30 seconds",
      note: "Her sahneyi taslakta yazdığımız süreye göre kırparız. Toplam 30 saniye." },
    { scene: 3, start: 59, end: 64.6, tr: "Geçiş ve mesaj yazısı ekle", en: "Add transitions and the message",
      note: "Sahneler arasına sade geçişler, son sahneye de mesaj yazısını ekleriz." },
    { scene: 3, start: 65.4, end: 72.1, tr: "Müzik ekle ve dışa aktar", en: "Add music and export",
      note: "Telifsiz, neşeli bir müzik ekler ve videoyu .mp4 olarak dışa aktarırız." },
    { scene: 4, start: 74.9, end: 82.1, tr: "Yapay zekâ videosu hızlı, ama dikkat!", en: "AI video is fast, but be careful!",
      note: "Yapay zekâ araçları birkaç cümleden video üretebilir. Ama izinsiz görüntü ya da ses kullanılmış olabilir, gerçek olmayan şeyler gerçekmiş gibi görünebilir. Kullanırsak bunu videoda belirtiriz." },
    { scene: 5, start: 84.9, end: 90.6, tr: "Ses ve görüntü uyumlu mu?", en: "Do sound and picture match?",
      note: "Arkadaşlar çağırırken sesleri de tam o anda duyuluyor. Ses ve görüntü uyumlu." },
    { scene: 5, start: 91.4, end: 97.3, tr: "Yazı okunacak kadar ekranda kalıyor mu?", en: "Does the text stay long enough to read?",
      note: "Mesaj yazısı yalnızca bir saniye görünüyor; kimse okuyamaz. En az üç saniye kalmalı." },
    { scene: 5, start: 98.1, end: 103.8, tr: "Jenerikte kaynaklar yazılı mı?", en: "Are sources listed in the credits?",
      note: "Jenerikte emeği geçenler ve müziğin kaynağı yazılı. Uygun." },
    { scene: 6, start: 106.6, end: 113.3, tr: "Aklında kalsın: taslağa sadık kal, kaynağı yaz", en: "Remember: follow the storyboard and credit sources",
      note: "Aklında kalsın: videonu taslağına göre kurgula, kaynaklarını jenerikte belirt ve ölçütlerle kontrol et." },
    { scene: 6, start: 114, end: 119.8, tr: "Işıklar, kamera, mesaj!", en: "Lights, camera, message!",
      note: "Videon hazır. Mesajın izleyicilere ulaşsın!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
