const khusroDetails = [
  {
    title: "Overview",
    content: `Khusro Bagh is a vast, quadrangular Mughal garden and burial complex in Prayagraj, Uttar Pradesh. It houses the tombs of Prince Khusro Mirza (son of Emperor Jahangir), his mother Shah Begum, his sister Nithar Begum, and Bibi Tamolan. The site is famed for its grand sandstone mausoleums, intricate carvings, lush gardens, and turbulent royal history.`
  },
  {
    title: "Historical Background",
    content: `
      <ul>
        <li>Built by Jahangir in the early 1600s as a burial place for his family.</li>
        <li>Shah Begum, Jahangir's wife (and Khusro's mother), was the first to be buried here in 1604.</li>
        <li>Prince Khusro Mirza, once heir apparent, was imprisoned and later killed after rebelling against his father.</li>
        <li>Nithar Begum, Khusro's sister, built her own tomb here (the most architecturally elaborate).</li>
        <li>The garden witnessed key events during the 1857 Indian Mutiny, serving as a rebel headquarters.</li>
      </ul>
    `
  },
  {
    title: "Architecture & Design",
    content: `
      <ul>
        <li>Charbagh (four-part) garden layout, symbolizing paradise.</li>
        <li>Three main mausoleums: Shah Begum (central, three-tiered), Nithar Begum (two-storey, frescoes), Khusro Mirza (single-storey, inscriptions).</li>
        <li>Red sandstone construction with marble inlay, intricate jali (lattice) work, and Persian floral motifs.</li>
        <li>Main gateway: 60 feet high, octagonal towers, scalloped arches, and half-domes with plastered net-work.</li>
        <li>Vaulted rooms beneath the plinth, painted ceilings with concentric stars and Persian cypresses.</li>
        <li>False cenotaphs above the real graves, following Islamic tradition.</li>
      </ul>
    `
  },
  {
    title: "Building Materials & Techniques",
    content: `
      <ul>
        <li>Red sandstone (nonporous, strong, visually striking).</li>
        <li>Stone masonry, marble carvings, lime mortar, kankar, surkhi, gypsum plaster.</li>
        <li>Mughal mortar: dahi (curd), urd pulse, san (jute), plant gum, jaggery, raw sugar, glue, straw.</li>
        <li>Decorated with marble, glazed tiles, paintings, and glasswork.</li>
      </ul>
    `
  },
  {
    title: "Unique Features & Stability",
    content: `
      <ul>
        <li>Massive, multi-foot-thick outer walls keep interiors cool.</li>
        <li>Spaces between floor tiles allow for expansion and temperature changes.</li>
        <li>Large stone/brick foundations with thick, resilient mortar.</li>
        <li>Cracks up to 1 inch wide in high-stress zones, but overall structure remains stable.</li>
        <li>Ornamental ceilings, jali windows, and lush gardens create a serene, timeless atmosphere.</li>
      </ul>
    `
  },
  {
    title: "Visiting Khusro Bagh",
    content: `
      <b>Getting There:</b><br>
      - <b>By Air:</b> Bamrauli Airport (6 km), Varanasi Airport (150 km), Lucknow Airport (200 km)<br>
      - <b>By Train:</b> Prayagraj Junction (1 km), Prayag (8 km), Rambagh (5 km)<br>
      - <b>By Road:</b> Civil Lines Bus Stand (4 km)<br>
      <br>
      <b>Tips:</b> Entry is free. Open sunrise to sunset. Alcohol and smoking are prohibited. The garden is peaceful and ideal for history lovers, walkers, and families.
    `
  }
];

const infoSection = document.getElementById('khusro-info');
infoSection.innerHTML = khusroDetails.map(section =>
  `<h2>${section.title}</h2><div>${section.content}</div>`
).join('');
