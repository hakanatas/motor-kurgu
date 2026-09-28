/* ─────────────────────────────────────────────────────────────
   MOTOR, KURGU! — BTY.6.2.10 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'motor-kurgu', title: 'Motor, Kurgu!', titleEn: 'Action, Edit!', code: 'BTY.6.2.10',
    outcomeEn: 'Developing a video file',
    summary: '"Ekranı bırak, dışarı çık!" kamu spotunun çekim taslağı bir video dosyasına dönüştürülür. Video düzenleyicinin bileşenleri (zaman çizgisi, görüntü-ses-yazı katmanları, geçişler, başlık ve jenerik) tanıtılır. Çekilen klipler içe aktarılır, 30 saniyeye kırpılır, geçiş, mesaj yazısı ve müzik eklenir, video dışa aktarılır. Kendi çekimimiz yapay zekâ ile üretilen videoyla telif, izin ve güvenilirlik yönünden karşılaştırılır. Son olarak video görsel düzen, kurgu bütünlüğü ve ses-görüntü uyumu ölçütleriyle değerlendirilir.',
    summaryEn: 'The public service spot\'s storyboard becomes a video: timeline, layers, transitions, titles and credits are introduced; clips are imported, trimmed to 30 seconds, given transitions, a message and music, and exported; our footage is compared with AI-generated video; and the result is checked for layout, flow and sound-picture sync.',
    blurb: 'Zaman çizgisi, katmanlar, geçiş ve jenerik; spotu kurgulamak; yapay zekâ videosu ve ölçütlerle değerlendirme.',
    posterAlt: 'Başlık ve Karo; çevresinde klaket, film şeridi, oynat ve jenerik karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'clapper', c: 'safran' }, { icon: 'film', c: 'kobalt' }, { icon: 'play', c: 'zumrut' }, { icon: 'storyboard', c: 'mor' }, { icon: 'headphones', c: 'mercan' }, { icon: 'ai', c: 'kobalt' }, { icon: 'copyright', c: 'mor' }, { icon: 'rubric', c: 'safran' }],
      beats: [
        { tr: 'Çekimler bitti. Motor, kurgu!', en: 'Filming\'s done. Action, edit!', extra: 1,
          note: 'Karo\'nun sınıfı çekim taslağındaki dört sahneyi çekti. Şimdi sıra bunları bir videoda birleştirmekte.' },
        { tr: 'Taslağa uygun bir video oluşturalım', en: 'Let\'s build a video that matches the storyboard',
          note: 'Bu derste çekim taslağımıza uygun bir video dosyası oluşturup değerlendireceğiz.' },
      ] },
    { type: 'cards', name: 'Düzenleyicinin parçaları', en: 'Parts of the editor', desc: 'Zaman çizgisi, katmanlar, geçiş, başlık ve jenerik.', out: 'a',
      cards: [
        { word: 'ZAMAN ÇİZGİSİ', def: 'Klipler soldan sağa sırayla dizilir', icon: 'clock', c: 'kobalt' },
        { word: 'KATMANLAR', def: 'Görüntü, ses ve yazı ayrı satırlarda', icon: 'sheet', c: 'turkuaz' },
        { word: 'JENERİK', def: 'Sondaki emeği geçenler ve kaynaklar', icon: 'film', c: 'safran' },
      ],
      result: { word: 'VİDEO DÜZENLEYİCİ', c: 'mercan', chips: ['kes-kırp', 'geçiş', 'başlık'], line: 'Taslaktaki her kare zaman çizgisinde bir klip olur' },
      beats: [
        { tr: 'Zaman çizgisi: klipler sırayla', en: 'Timeline: clips in order',
          note: 'Zaman çizgisinde klipler soldan sağa, taslaktaki sırayla dizilir.' },
        { tr: 'Katmanlar: görüntü, ses, yazı', en: 'Layers: picture, sound, text',
          note: 'Görüntü, ses ve yazı ayrı katmanlarda durur. Birini değiştirirken diğerini bozmayız.' },
        { tr: 'Jenerik: emeği geçenler ve kaynaklar', en: 'Credits: the team and the sources',
          note: 'Videonun sonundaki jenerikte emeği geçenleri ve kullandığımız müziğin kaynağını yazarız.' },
        { tr: 'Taslaktaki her kare bir klip olur', en: 'Each storyboard frame becomes a clip', extra: 1,
          note: 'Kesme, kırpma, geçiş ve başlık araçlarıyla taslağımızı videoya dönüştürürüz.' },
      ] },
    { type: 'app', app: 'video', title: 'Video Düzenleyici', name: 'Spotu kurgula', en: 'Edit the spot', desc: 'İçe aktar, kırp, geçiş, mesaj yazısı, müzik ve dışa aktar.', out: 'a',
      data: { title: 'Ekranı bırak, dışarı çık!', file: 'ekrani-birak.mp4  dışa aktarıldı', clips: 4, cutSplits: false },
      tools: [{ id: 'import', label: 'İçe aktar' }, { id: 'cut', label: 'Kırp' }, { id: 'transition', label: 'Geçiş' }, { id: 'text', label: 'Yazı' }, { id: 'music', label: 'Müzik' }, { id: 'export', label: 'Dışa aktar' }],
      beats: [
        { tr: 'Klipleri taslak sırasıyla diz', en: 'Line the clips up in storyboard order', tool: 'import', hint: '1 → 2 → 3 → 4',
          note: 'Klipleri içe aktarır ve taslaktaki sırayla zaman çizgisine dizeriz.' },
        { tr: 'Toplam 30 saniyeye kırp', en: 'Trim it all to 30 seconds', tool: 'cut', hint: 'Her sahne taslaktaki süre kadar',
          note: 'Her sahneyi taslakta yazdığımız süreye göre kırparız. Toplam 30 saniye.' },
        { tr: 'Geçiş ve mesaj yazısı ekle', en: 'Add transitions and the message', tools: ['transition', 'text'], hint: '"Ekranı bırak, dışarı çık!"',
          note: 'Sahneler arasına sade geçişler, son sahneye de mesaj yazısını ekleriz.' },
        { tr: 'Müzik ekle ve dışa aktar', en: 'Add music and export', tools: ['music', 'export'], hint: 'ekrani-birak.mp4', extra: 1,
          note: 'Telifsiz, neşeli bir müzik ekler ve videoyu .mp4 olarak dışa aktarırız.' },
      ] },
    { type: 'compare', name: 'Yapay zekâ videosu', en: 'AI-made video', desc: 'Kendi çekimimiz ile yapay zekâ videosunun karşılaştırılması: telif, izin, güvenilirlik.', out: 'a, b',
      left: 'KENDİ ÇEKİMİMİZ', right: 'YAPAY ZEKÂ VİDEOSU', leftC: 'zumrut', rightC: 'mor', sameLabel: 'ortak', diffLabel: 'dikkat',
      beats: [
        { tr: 'Yapay zekâ videosu hızlı, ama dikkat!', en: 'AI video is fast, but be careful!', extra: 1.5,
          note: 'Yapay zekâ araçları birkaç cümleden video üretebilir. Ama izinsiz görüntü ya da ses kullanılmış olabilir, gerçek olmayan şeyler gerçekmiş gibi görünebilir. Kullanırsak bunu videoda belirtiriz.',
          a: { icon: 'webcam', name: 'Kendi çekimimiz', tag: 'izinli', c: 'zumrut' }, b: { icon: 'ai', name: 'Yapay zekâ videosu', tag: 'hızlı', c: 'mor' }, same: 'aynı mesaj', diff: ['telif ve izin', 'gerçekmiş gibi görünür'] },
      ] },
    { type: 'judge', name: 'Ölçütlerle değerlendir', en: 'Check with criteria', desc: 'Görsel düzen, kurgu bütünlüğü ve ses-görüntü uyumu.', out: 'b', labels: { ok: 'uygun', no: 'eksik' },
      beats: [
        { tr: 'Ses ve görüntü uyumlu mu?', en: 'Do sound and picture match?',
          note: 'Arkadaşlar çağırırken sesleri de tam o anda duyuluyor. Ses ve görüntü uyumlu.',
          row: { icon: 'headphones', text: 'Sesler görüntüyle aynı anda duyuluyor', ok: true, why: 'Ses-görüntü uyumu var' } },
        { tr: 'Yazı okunacak kadar ekranda kalıyor mu?', en: 'Does the text stay long enough to read?',
          note: 'Mesaj yazısı yalnızca bir saniye görünüyor; kimse okuyamaz. En az üç saniye kalmalı.',
          row: { icon: 'eye', text: 'Mesaj yazısı ekranda 1 saniye kalıyor', ok: false, why: 'En az 3 saniye kalmalı' } },
        { tr: 'Jenerikte kaynaklar yazılı mı?', en: 'Are sources listed in the credits?',
          note: 'Jenerikte emeği geçenler ve müziğin kaynağı yazılı. Uygun.',
          row: { icon: 'copyright', text: 'Jenerikte emeği geçenler ve müzik kaynağı yazılı', ok: true, why: 'Emeğe saygı' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'clock', c: 'kobalt', text: 'Taslağı zaman çizgisine dök' },
        { icon: 'film', c: 'safran', text: 'Kırp, geçiş, yazı, müzik, jenerik' },
        { icon: 'rubric', c: 'zumrut', text: 'Düzen, bütünlük, ses-görüntü uyumu' },
      ],
      beats: [
        { tr: 'Aklında kalsın: taslağa sadık kal, kaynağı yaz', en: 'Remember: follow the storyboard and credit sources',
          note: 'Aklında kalsın: videonu taslağına göre kurgula, kaynaklarını jenerikte belirt ve ölçütlerle kontrol et.' },
        { tr: 'Işıklar, kamera, mesaj!', en: 'Lights, camera, message!',
          note: 'Videon hazır. Mesajın izleyicilere ulaşsın!' },
      ] },
  ],
});
