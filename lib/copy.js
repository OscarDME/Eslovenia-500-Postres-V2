// ÚNICA VODILNA VSEBINA — vse besedilo na pristajalni strani
// se nahaja tukaj. Komponente ne smejo vsebovati trdo kodiranih nizov.
export const copy = {
  metadata: {
    title: "500 zdravih sladic — Babica Anica",
    description:
      "500 receptov za mehke, puhaste in neverjetno okusne sladice, popolnoma brez glutena, mlečnih izdelkov in sladkorja.",
    productName: "Knjiga »500 sladic Babice Anice«",
  },

  hero: {
    urgencyBar: "PONUDBA POTEČE DANES · 90 % POPUST samo še danes",
    badge: "Nova knjiga receptov · +3.200 zadovoljnih tečajnikov",
    headline: {
      before: "TVOJ POGLED NA ",
      accent: "ZDRAVE SLADICE",
      after: " SE BO ZA VEDNO SPREMENIL, KO BOŠ VIDEL TO.",
    },
    subheadline:
      "Razvajaj se s 500 recepti za mehke, sočne in izjemno okusne sladice – popolnoma brez glutena, mlečnih izdelkov in sladkorja. V vsakem grižljaju uživaš sproščeno, brez trpljenja, brez občutka krivde in brez žrtvovanja.",
    ctaLabel: "DA, ŽELIM RECEPTE",
    starsAriaLabel: "Ocena 5 od 5 zvezdic",
    starsRating: "5.0",
    socialProof: "+3.200 certificiranih tečajnikov",
    trustChips: [
      { icon: "🌾", text: "Brez glutena" },
      { icon: "🥛", text: "Brez mlečnih izdelkov" },
      { icon: "🍬", text: "Brez sladkorja" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Knjiga 500 zdravih sladic Babice Anice",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Pripravljeno v", bottom: "20 min" },
      discount: { icon: "🔥", top: "Danes", bottom: "90 % POPUST" },
    },
  },

  preview: {
    kicker: "Kratek predogled",
    headline: "POGLEJ SI TE DOBROTE, KI JIH BOŠ ZNAL PRIPRAVITI",
    items: [
      { src: "/preview/3-6.webp", alt: "Zdrava sladica 1" },
      { src: "/preview/2-7.webp", alt: "Zdrava sladica 2" },
      { src: "/preview/4-3.webp", alt: "Zdrava sladica 3" },
      { src: "/preview/3-5-1.webp", alt: "Zdrava sladica 4" },
      { src: "/preview/1-7.webp", alt: "Zdrava sladica 5" },
      { src: "/preview/4-2.webp", alt: "Zdrava sladica 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Zdrava sladica 7" },
      { src: "/preview/1-5-1.webp", alt: "Zdrava sladica 8" },
      { src: "/preview/3-3.webp", alt: "Zdrava sladica 9" },
      { src: "/preview/2-4.webp", alt: "Zdrava sladica 10" },
      { src: "/preview/1-4.webp", alt: "Zdrava sladica 11" },
      { src: "/preview/1-6-1.webp", alt: "Zdrava sladica 12" },
      { src: "/preview/2-3.webp", alt: "Zdrava sladica 13" },
      { src: "/preview/chocolate.webp", alt: "Zdrava čokoladna sladica" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Zdrava sladica 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Zdrava sladica 16" },
      { src: "/preview/12-1-2.webp", alt: "Zdrava sladica 17" },
      { src: "/preview/2-6.webp", alt: "Zdrava sladica 18" },
      { src: "/preview/1-8.webp", alt: "Zdrava sladica 19" },
    ],
  },

  benefits: {
    kicker: "Zakaj boš navdušen",
    headline: "Zdrave sladice brez kompromisov pri okusu",
    items: [
      { icon: "🎂", title: "500 okusov, da se jih nikoli ne naveličaš" },
      { icon: "✨", title: "Popolna tekstura tudi brez glutena" },
      { icon: "🌾", title: "Ne potrebuješ posebnih vrst moke" },
      { icon: "⚡", title: "Ekspresne sladice v 20 minutah" },
      { icon: "💚", title: "Brez mleka in brez sladkorja" },
      { icon: "📖", title: "Preprosta navodila korak za korakom" },
    ],
  },

  samples: {
    kicker: "Najprej jih poskusi",
    headline: "NEVERJETNO OKUSNE SLADICE (ZDRAVA RAZLIČICA):",
    badge: "Brez sladkorja, glutena in laktoze",
    items: [
      {
        name: "ČOKOLADNA SLADICA",
        variant: "(FIT IN PUHASTA)",
        kcal: "88",
        time: "20 minut",
        src: "/samples/pastel-chocolate.gif",
        alt: "Fit čokoladna sladica",
      },
      {
        name: "KORENČKOVA SLADICA",
        variant: "(S FIT ČOKOLADNIM PRELIVOM)",
        kcal: "120",
        time: "20 minut",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Korenčkova sladica s čokolado",
      },
      {
        name: "BANANINA SLADICA",
        variant: "(FIT)",
        kcal: "90",
        time: "20 minut",
        src: "/samples/pastel-platano.gif",
        alt: "Fit bananina sladica",
      },
      {
        name: "TORTA TRES LECHES",
        variant: "(BREZ LAKTOZE)",
        kcal: "100",
        time: "20 minut",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Torta Tres leches brez laktoze",
      },
      {
        name: "ČOKOLADNA TORTA",
        variant: "(S 5 SESTAVINAMI)",
        kcal: "108",
        time: "20 minut",
        src: "/samples/chocotorta.gif",
        alt: "Zdrava čokoladna torta",
      },
      {
        name: "LIMONINA SLADICA",
        variant: "(IZ MEŠALNIKA)",
        kcal: "100",
        time: "20 minut",
        src: "/samples/pastel-limon.gif",
        alt: "Limonina sladica",
      },
      {
        name: "TORTA RDEČI ŽAMET",
        variant: "(FIT RED VELVET)",
        kcal: "105",
        time: "19 minut",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Fit torta rdeči žamet",
      },
    ],
    caloriesLabel: "Kalorije",
    timeLabel: "Čas",
  },

  moreRecipesCta: {
    pretitle: "In še več kot",
    big: "493",
    post: "RECEPTOV ZA SLADICE...",
    ctaLabel: "PRENESI SVOJ IZVOD ZDAJ",
  },

  testimonials: {
    kicker: "Resnični dokazi",
    headline: "POGLEJ, KAJ PRAVIJO TISTI, KI ŽE PEČEJO Z NAMI",
    subheadline: "Kaj delijo naši tečajniki",
    studentsBadge: "+ 3.200 certificiranih tečajnikov",
    items: [
      {
        text: "Včeraj sem naredila čokoladno sladico in ni ostal niti košček 😍 Družina me je že prosila, naj jo ta vikend spet spečem. Brez sladkorja in brez glutena... preprosto neverjetno!!",
        time: "10:23",
      },
      {
        text: "Nisem si mislila, da je lahko tako okusno brez mleka in sladkorja. Torta Tres leches brez laktoze me je pustila brez besed 🤯 Že 3 dni pečem brez prestanka.",
        time: "11:47",
      },
      {
        text: "Že 10 let imam celiakijo in nikoli nisem mogla jesti prave torte. S to knjigo lahko končno uživam kot vsi ostali 😭❤️",
        time: "14:02",
      },
      {
        text: "Korenčkova sladica s čokoladnim prelivom je bila POPOLNOMA enaka tisti iz slaščičarne, le da brez moke in sladkorja. Nesla sem jo v pisarno in nihče ni verjel, da je zdrava hahaha.",
        time: "09:15",
      },
      {
        text: "Knjigo imam en mesec in sem preizkusila že več kot 15 receptov. Fit Red Velvet je tako puhasta in ima čudovito barvo 🎂 100% priporočam vsem!!",
        time: "16:38",
      },
      {
        text: "Na začetku sem bila skeptična... ampak prva sladica me je takoj prepričala. Fit bananina sladica v 20 minutah je pravi čudež ⭐⭐⭐⭐⭐ Hvala, ker obstajate.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Knjiga receptov na telefonu, računalniku in tablici",
    },
  },

  categories: {
    kicker: "Nikoli se jih ne boš naveličal",
    headline: "RECEPTI, RAZDELJENI PO KATEGORIJAH",
    groups: [
      {
        title: "100 sladic z nadevom",
        items: [
          { src: "/preview/1-4.webp", alt: "Sladica z nadevom 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Sladica z nadevom 2" },
          { src: "/preview/12-1-2.webp", alt: "Sladica z nadevom 3" },
          { src: "/preview/2-3.webp", alt: "Sladica z nadevom 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Sladica z nadevom 5" },
        ],
      },
      {
        title: "100 sadnih sladic",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Sadna sladica 1" },
          { src: "/preview/2-4.webp", alt: "Sadna sladica 2" },
          { src: "/preview/3-3.webp", alt: "Sadna sladica 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Sadna sladica 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Sadna sladica 5" },
        ],
      },
      {
        title: "100 klasičnih sladic",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klasična sladica 1" },
          { src: "/preview/2-5-1.webp", alt: "Klasična sladica 2" },
          { src: "/preview/4-2.webp", alt: "Klasična sladica 3" },
        ],
      },
      {
        title: "100 modernih sladic",
        items: [
          { src: "/preview/1-7.webp", alt: "Moderna sladica 1" },
          { src: "/preview/2-6.webp", alt: "Moderna sladica 2" },
          { src: "/preview/3-5-1.webp", alt: "Moderna sladica 3" },
          { src: "/preview/4-3.webp", alt: "Moderna sladica 4" },
        ],
      },
      {
        title: "100 hladnih sladic",
        items: [
          { src: "/preview/1-8.webp", alt: "Hladna sladica 1" },
          { src: "/preview/2-7.webp", alt: "Hladna sladica 2" },
          { src: "/preview/3-6.webp", alt: "Hladna sladica 3" },
          { src: "/preview/4-4.webp", alt: "Hladna sladica 4" },
        ],
      },
    ],
    ctaLabel: "ŽELIM RECEPTE",
  },

  story: {
    kicker: "Zgodba za knjigo",
    headline: "KAKO JE NASTALA TA KNJIGA RECEPTOV?",
    paragraphs: [
      "Babica Anica je našo hišo vedno napolnila z vonjem po sladicah, ki so združevale našo družino. Ko pa je moja hčerka Maja izvedela, da ne sme uživati glutena, se je vse spremenilo.",
      "Kot nutricionistka sem se skupaj z mamo odločila, da te recepte preoblikujeva v varne različice: brez sladkorja, brez glutena in brez laktoze. Po številnih poskusih sva dosegli rezultate, ki so presenetili celo samo Babico Anico.",
      "Tako se je rodila ta knjiga: družinska dediščina, polna okusa in ljubezni, ki zdaj lahko postane del tudi tvoje zgodbe.",
    ],
    image: {
      src: "/story.webp",
      alt: "Babica Anica in njena vnukinja v kuhinji",
    },
  },

  bonuses: {
    kicker: "Vključena darila",
    headline: "PREJMEŠ ŠE 5 BREZPLAČNIH BONUSOV",
    items: [
      {
        label: "BONUS KNJIGA 1",
        name: "PIŠKOTI IN MAFINI",
        desc: "20 neustavljivih receptov za hrustljave piškote in puhaste mafine, ki so okusni in zdravi.",
        price: "19,90 €",
        freeLabel: "DANES BREZPLAČNO",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Piškoti in Mafini" },
      },
      {
        label: "BONUS KNJIGA 2",
        name: "PROTEINSKI RECEPTI ZA CVRTNIK NA VROČ ZRAK",
        desc: "20 receptov za hitre, zdrave in z beljakovinami bogate obroke, pripravljene samo v cvrtniku na vroč zrak.",
        price: "19,90 €",
        freeLabel: "DANES BREZPLAČNO",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Cvrtnik na vroč zrak" },
      },
      {
        label: "BONUS KNJIGA 3",
        name: "RECEPTI ZA ZDRAVE KROFE",
        desc: "Hrustljavi grižljaji brez slabe vesti, zdravi in polni okusa v vsakem grižljaju.",
        price: "19,90 €",
        freeLabel: "DANES BREZPLAČNO",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Zdravi krofi" },
      },
      {
        label: "BONUS KNJIGA 4",
        name: "RECEPTI ZA OKUSNE SOLATE",
        desc: "Sveže, preproste in zdrave solate za vsakodnevno uživanje v okusu in ravnovesju.",
        price: "19,90 €",
        freeLabel: "DANES BREZPLAČNO",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Solate" },
      },
      {
        label: "BONUS KNJIGA 5",
        name: "67 RAZSTRUPLJEVALNIH SOKOV",
        desc: "Povrni si energijo s 67 recepti za naravne, osvežilne in hranljive razstrupljevalne (detox) sokove.",
        price: "19,90 €",
        freeLabel: "DANES BREZPLAČNO",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 razstrupljevalnih sokov" },
      },
    ],
    secretBonus: {
      label: "+3 SKRIVNI BONUSI",
      name: "Ekskluzivna presenečenja za tiste, ki danes vzamejo knjigo receptov",
      price: "59,90 €",
      freeLabel: "DANES BREZPLAČNO",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Škatla s skrivnimi bonusi" },
    },
    ctaLabel: "ŽELIM RECEPTE",
  },

  audience: {
    kicker: "Je to zate?",
    headline: "ZA LJUDI, KI IŠČEJO:",
    items: [
      "Bolj zdrave recepte",
      "Spremembo prehranjevalnih navad",
      "Imajo intoleranco na laktozo",
      "Imajo celiakijo",
      "So diabetiki",
    ],
  },

  finalCta: {
    flagline: "Prvih 100 kupcev prejme 20 brezplačnih video lekcij",
    headline: "KNJIGA S 500 SLADICAMI MOJSTRICE ANICE ®",
    subheadline: "Vse, kar potrebuješ za peko brez slabe vesti",
    includesTitle: "+5 BREZPLAČNIH KNJIG:",
    includes: [
      "+ OKUSNI RECEPTI ZA SOLATE IN PRELIVE",
      "+ RECEPTI ZA ZDRAVE KROFE",
      "+ RECEPTI ZA PIŠKOTE IN MAFINE",
      "+ PROTEINSKI RECEPTI ZA CVRTNIK NA VROČ ZRAK",
      "+ 67 RECEPTOV ZA RAZSTRUPLJEVALNE SOKOVE",
    ],
    secretTitle: "+3 SKRIVNI BONUSI:",
    discountLabel: "90 % POPUST",
    regularPriceLabel: "OD",
    regularPrice: "59,90 €",
    regularPriceSuffix: "...",
    offerPriceLabel: "Samo za",
    offerCurrency: "",
    offerPrice: "12,90 €",
    button: "DA, ŽELIM JO",
    urgencyNote: "**PONUDBA POTEČE DANES**",
    paymentLabel: "NAČINI PLAČILA",
    paymentImage: { src: "/payment-methods.webp", alt: "Načini plačila" },
    secureLabel: "100% VARNO SPLETNO MESTO",
    secureImage: { src: "/secure-site.webp", alt: "100% varno spletno mesto" },
    image: { src: "/final-mockup.webp", alt: "Knjige z recepti na vseh platformah" },
    bonusesBadge: "+8 brezplačnih bonusov",
    discountStickerLabel: "Popust",
    discountStickerValue: "90 % POPUST",
  },

  delivery: {
    kicker: "Dostava",
    headline: "KAKO BOM PREJEL RECEPTE?",
    items: [
      { icon: "🖨️", text: "Lahko si jih natisneš na papir." },
      { icon: "📱", text: "Lahko jih gledaš na telefonu." },
      { icon: "💻", text: "Lahko jih bereš na računalniku." },
      { icon: "✅", text: "Lahko jih pregleduješ tudi na tablici." },
      { icon: "♾️", text: "Doživljenjski dostop: Vključno z vsemi novimi recepti." },
      { icon: "📩", text: "Izgubiš recept? Ponovno ti ga pošljemo." },
      { icon: "📚", text: "Prejmi nove knjige vsak mesec." },
    ],
  },

  guarantee: {
    kicker: "Brez tveganja",
    headline: "PREIZKUSI BREZ TVEGANJA — 14-dnevna brezpogojna garancija.",
    body: "Imaš 14 dni, da jih preizkusiš. Če te recepti ne prepričajo, ti vrnem denar do zadnjega centa. Brez zapletov. Brez stresa.",
    alt: "Znak za 14-dnevno brezpogojno garancijo",
    image: { src: "/guarantee-badge.webp", alt: "14 dni garancije" },
  },

  faq: {
    kicker: "Vprašanja in odgovori",
    headline: "POGOSTA VPRAŠANJA — tisto, kar vse zanima",
    items: [
      {
        q: "So sestavine drage?",
        a: "Ne! Uporabljamo preproste sestavine, ki jih že imaš doma: nobenih zapletenih ali dragih izdelkov.",
      },
      {
        q: "Je sladica brez pšenice, mleka, laktoze in sladkorja res lahko okusna?",
        a: "Da, in kar je najboljše: priprava je neverjetno preprosta! Recepti so ustvarjeni tako, da ohranjajo okus, ki ga obožuješ, z lahkimi in lahko dostopnimi sestavinami.",
      },
      {
        q: "So recepti primerni za začetnike (ki še nikoli niso spekli sladice)?",
        a: "Idealni so za začetnike! Vse je razloženo korak za korakom, z navadnimi sestavinami in preprostimi navodili. Če znaš prižgati pečico, potem jih lahko pripraviš.",
      },
      {
        q: "S čim so sladice sladkane?",
        a: "Izbereš lahko tisto, kar ti najbolj ustreza: sadje (banana ali datlji), med ali sladila, kot sta stevija in eritritol. V vsakem receptu je navedena natančna količina za vsako možnost.",
      },
      {
        q: "Lahko sladkor nadomestim s sadjem (banana, datlji)? Kako to naredim?",
        a: "Seveda lahko! In je lažje, kot se zdi: v receptu piše, katero sadje uporabiti, koliko ga dodati in kako ustvariti popolno, sočno in sladko sladico.",
      },
      {
        q: "Kakšno moko uporabljate?",
        a: "Uporabljamo mešanice mok, kot so riževa, ovsena ali mandljeva moka, ki jih najdeš v vsakem supermarketu in so pogosto celo cenejše od pšenične.",
      },
      {
        q: "V kolikšnem času je sladica narejena?",
        a: "Večina jih vzame 20 ali 30 minut. Medtem ko si skuhaš kavo, bo sladica že dišala po kuhinji.",
      },
    ],
  },

  footer: {
    brand: "Babica Anica",
    links: [
      { label: "Politika zasebnosti", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Pogoji uporabe", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Politika vračil", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Babica Anica – Vse pravice pridržane.",
  },

  stickyCta: {
    priceLabel: "Danes",
    offerPrice: "12,90 €",
    strikePrice: "59,90 €",
    ctaLabel: "ŽELIM JO",
  },
};