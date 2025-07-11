// Map of region IDs to their names
const stateNames = {
  INTN: "Tamil Nadu",
  INBR: "Bihar",
  INAN: "Andaman & Nicobar",
  INTG: "Telangana",
  INAP: "Andhra Pradesh",
  INAR: "Arunachal Pradesh",
  INAS: "Assam",
  INCT: "Chhattisgarh",
  INCH: "Chandigarh",
  INDL: "Delhi",
  INGA: "Goa",
  INGJ: "Gujarat",
  INHR: "Haryana",
  INHP: "Himachal Pradesh",
  INJH: "Jharkhand",
  INKA: "Karnataka",
  INKL: "Kerala",
  INMP: "Madhya Pradesh",
  INMH: "Maharashtra",
  INMN: "Manipur",
  INML: "Meghalaya",
  INMZ: "Mizoram",
  INNL: "Nagaland",
  INOR: "Odisha",
  INPB: "Punjab",
  INPY: "Puducherry",
  INRJ: "Rajasthan",
  INSK: "Sikkim",
  INTR: "Tripura",
  INUT: "Uttaranchal",
  INUP: "Uttar Pradesh",
  INWB: "West Bengal",
  INLD: "Lakshadweep",
  INLA: "Ladakh",
  INJK: "Jammu and Kashmir",
};

// Region data with corrected and completed entries
const regionData = {
  INTN: [
    {
      label: "Temple",
      sublist: [
        { name: "Airavatesvara Temple", file: "temple_tamilnadu1.html" },
        { name: "Brihadeeswarar Temple", file: "temple_tamilnadu2.html" },
        { name: "Ekambareswarar Temple", file: "temple_tamilnadu3.html" },
        { name: "Gangaikonda Cholapuram", file: "temple_tamilnadu4.html" },
        { name: "Jambukeswarar Temple", file: "temple_tamilnadu5.html" },
        { name: "Kailasanathar Temple", file: "temple_tamilnadu6.html" },
        { name: "Kapaleeswarar Temple", file: "temple_tamilnadu7.html" },
        { name: "Meenakshi Amman Temple Gopuram", file: "temple_tamilnadu8.html" },
        { name: "Ramanathaswamy Temple", file: "temple_tamilnadu9.html" },
        { name: "Shore Temple", file: "temple_tamilnadu10.html" },
        { name: "Srirangam Ranganathaswamy Temple", file: "temple_tamilnadu11.html" },
      ],
    },
    {
      label: "Bridge/Dam",
      sublist: [
        { name: "Annai Indira Gandhi Road Bridge", file: "bridge_tamil_nadu1.html" },
        { name: "Grand Anicut", file: "dam_tamil_nadu1.html" },
        { name: "Coleroon Bridge", file: "bridge_tamil_nadu2.html" },
        { name: "Kaveri River Bridges", file: "bridge_tamil_nadu3.html" },
        { name: "Mettur Dam Bridge", file: "bridge_tamil_nadu4.html" },
        { name: "Napier Bridge", file: "bridge_tamil_nadu5.html" },
        { name: "Pamban Bridge", file: "bridge_tamil_nadu6.html" },
      ],
    },
    {
      label: "Church",
      sublist: [
        { name: "St. Mary’s Church, Fort St. George, Chennai", file: "tamilnadu_church1.html" },
        { name: "St. Stephen’s Church, Ooty", file: "tamilnadu_church2.html" },
        { name: "Velankanni Basilica", file: "tamilnadu_church3.html" },
        { name: "Armenian Church, Chennai", file: "tamilnadu_church4.html" },
        { name: "Our Lady of Ransom Church, Kanyakumari", file: "tamilnadu_church5.html" },
        { name: "Our Lady of Snows Basilica, Thoothukudi", file: "tamilnadu_church6.html" },
        { name: "San Thome Cathedral Basilica, Chennai", file: "tamilnadu_church7.html" },
        { name: "St. George’s Cathedral, Chennai", file: "tamilnadu_church8.html" },
      ],
    },
    {
      label: "Fort",
      sublist: [
        { name: "Sankagiri Fort, Salem", file: "tamilnadu_fort1.html" },
        { name: "Sadras Dutch Fort", file: "tamilnadu_fort2.html" },
        { name: "Rock Fort (Tiruchirapalli)", file: "tamilnadu_fort3.html" },
        { name: "Thirumayam Fort, Pudukkottai", file: "tamilnadu_fort4.html" },
        { name: "Namakkal Fort", file: "tamilnadu_fort5.html" },
        { name: "Manora Fort, Thanjavur", file: "tamilnadu_fort6.html" },
        { name: "Kattabomman Fort", file: "tamilnadu_fort7.html" },
        { name: "Gingee Fort", file: "tamilnadu_fort8.html" },
        { name: "Fort St. George, Chennai", file: "tamilnadu_fort9.html" },
        { name: "Dindigul Fort", file: "tamilnadu_fort10.html" },
        { name: "Aranthangi Fort", file: "tamilnadu_fort11.html" },
        { name: "Alamparai Fort", file: "tamilnadu_fort12.html" },
        { name: "Thenkaraikottai Fort", file: "tamilnadu_fort13.html" },
        { name: "Udayagiri Fort", file: "tamilnadu_fort14.html" },
        { name: "Vattakottai Fort", file: "tamilnadu_fort15.html" },
        { name: "Vellore Fort", file: "tamilnadu_fort16.html" },
      ],
    },
    {
      label: "Mosque",
      sublist: [
        { name: "Bahram Jung Mosque, Chennai", file: "tamilnadu_mosque1.html" },
        { name: "Jama Masjid, Salem", file: "tamilnadu_mosque2.html" },
        { name: "Mosque Inside Vellore Fort", file: "tamilnadu_mosque3.html" },
        { name: "Kayalpattinam Ancient Mosques", file: "tamilnadu_mosque4.html" },
        { name: "Palaiya Jumma Palli, Kilakarai", file: "tamilnadu_mosque5.html" },
        { name: "Triplicane Big Mosque, Chennai", file: "tamilnadu_mosque6.html" },
        { name: "Thousand Lights Mosque, Chennai", file: "tamilnadu_mosque7.html" },
        { name: "Pottalpudur Dargah, Tenkasi", file: "tamilnadu_mosque8.html" },
      ],
    },
    {
      label: "Palace",
      sublist: [
        { name: "Tamukkam Palace", file: "tamilnadu_palace1.html" },
        { name: "Thanjavur Maratha Palace", file: "tamilnadu_palace2.html" },
        { name: "Chepauk Palace, Chennai", file: "tamilnadu_palace3.html" },
        { name: "Chettinad Mansions", file: "tamilnadu_palace4.html" },
        { name: "Ettaiyapuram Palace", file: "tamilnadu_palace5.html" },
        { name: "Fernhills Palace, Ooty", file: "tamilnadu_palace6.html" },
        { name: "Padmanabhapuram Palace", file: "tamilnadu_palace7.html" },
        { name: "Pudukkottai Palace", file: "tamilnadu_palace8.html" },
        { name: "Ramalinga Vilasam Palace", file: "tamilnadu_palace9.html" },
        { name: "Thirumalai Nayakkar Mahal", file: "tamilnadu_palace10.html" },
      ],
    },
  ],
  INBR: [
    {
      label: "Temple",
      sublist: [
        { name: "Mahabodhi Temple", file: "temple_bihar1.html" },
        { name: "Mundeshwari Temple", file: "temple_bihar2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [{ name: "Nalanda University", file: "building_bihar1.html" }],
    },
    {
      label: "Tomb",
      sublist: [{ name: "Sher Shah Suri Tomb", file: "tomb_bihar1.html" }],
    },
    {
      label: "Fort",
      sublist: [{ name: "Rohtasgarh Fort", file: "fort_bihar1.html" }],
    },
    {
      label: "Caves",
      sublist: [
        { name: "Barabar Caves", file: "caves_bihar1.html" },
        { name: "Viswa Shanti Stupa", file: "caves_bihar2.html" },
      ],
    },
  ],
  INAN: [
    {
      label: "Temple",
      sublist: [
        { name: "Sri Venkateswara Temple", file: "temple_andaman1.html" },
        { name: "Ramakrishna Temple", file: "temple_andaman2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Cellular Jail", file: "building_andaman1.html" },
        { name: "Ross Island Structures", file: "building_andaman2.html" },
      ],
    },
  ],
  INTG: [
    {
      label: "Temple",
      sublist: [
        { name: "Bhadrachalam Temple", file: "temple_telangana1.html" },
        { name: "Yadagirigutta Temple", file: "temple_telangana2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Charminar", file: "building_telangana1.html" },
        { name: "Golconda Fort", file: "building_telangana2.html" },
      ],
    },
  ],
  INAP: [
    {
      label: "Temple",
      sublist: [
        { name: "Amaralingeswara Swamy Temple", file: "andhrapradesh_temple1.html" },
        { name: "Sri Lakshmi Narasimha Swamy Temple", file: "andhrapradesh_temple2.html" },
        { name: "Sri Venkateswara Swamy Temple, Ramappa", file: "andhrapradesh_temple3.html" },
        { name: "Sri Varaha Lakshmi Narasimha Temple", file: "andhrapradesh_temple4.html" },
        { name: "Sri Kalahasteeswara Swamy Temple", file: "andhrapradesh_temple5.html" },
        { name: "Mallikarjuna Swamy Temple", file: "andhrapradesh_temple6.html" },
        { name: "Sri Venkateswara Swamy Temple, Venkatagiri", file: "andhrapradesh_temple7.html" },
        { name: "Sri Uma Maheswara Temple", file: "andhrapradesh_temple8.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Undavalli Caves", file: "building_andhrapradesh1.html" },
        { name: "Gandikota Fort", file: "building_andhrapradesh2.html" },
      ],
    },
  ],
  INAR: [
    {
      label: "Temple",
      sublist: [
        { name: "Parashurama Temple", file: "temple_arunachal1.html" },
        { name: "Malinithan Temple", file: "temple_arunachal2.html" },
      ],
    },
    {
      label: "Fort",
      sublist: [
        { name: "Ita Fort", file: "fort_arunachal_pradesh1.html" },
        { name: "Bhalukpong Fort", file: "fort_arunachal_pradesh2.html" },
      ],
    },
  ],
  INAS: [
    {
      label: "Temple",
      sublist: [
        { name: "Kamakhya Temple", file: "temple_assam1.html" },
        { name: "Umananda Temple", file: "temple_assam2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Rang Ghar", file: "building_assam1.html" },
        { name: "Kareng Ghar", file: "building_assam2.html" },
      ],
    },
  ],
  INCT: [
    {
      label: "Temple",
      sublist: [
        { name: "Bhoramdeo Temple", file: "temple_chhattisgarh1.html" },
        { name: "Danteshwari Temple", file: "temple_chhattisgarh2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Bastar Palace", file: "building_chhattisgarh1.html" },
        { name: "Chitradurga Fort", file: "building_chhattisgarh2.html" },
      ],
    },
  ],
  INCH: [
    {
      label: "Temple",
      sublist: [
        { name: "Mansa Devi Temple", file: "temple_chandigarh1.html" },
        { name: "Chandi Devi Temple", file: "temple_chandigarh2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Capitol Complex", file: "building_chandigarh1.html" },
        { name: "Rock Garden", file: "building_chandigarh2.html" },
      ],
    },
  ],
  INDL: [
    {
      label: "Temple",
      sublist: [
        { name: "Lotus Temple", file: "temple_delhi1.html" },
        { name: "Akshardham Temple", file: "temple_delhi2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "India Gate", file: "building_delhi1.html" },
        { name: "Rashtrapati Bhavan", file: "building_delhi2.html" },
      ],
    },
    {
      label: "Tomb",
      sublist: [
        { name: "Taj Mahal", file: "tomb_delhi1.html" }, // Note: Taj Mahal is in UP, corrected below
        { name: "Humayun’s Tomb", file: "tomb_delhi2.html" },
        { name: "Safdarjung Tomb", file: "tomb_delhi3.html" },
      ],
    },
  ],
  INGA: [
    {
      label: "Temple",
      sublist: [
        { name: "Shri Mangueshi Temple", file: "temple_goa1.html" },
        { name: "Shri Shantadurga Temple", file: "temple_goa2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Basilica of Bom Jesus", file: "building_goa1.html" },
        { name: "Se Cathedral", file: "building_goa2.html" },
      ],
    },
  ],
  INGJ: [
    {
      label: "Temple",
      sublist: [
        { name: "Dwarkadhish Temple", file: "temple_gujarat1.html" },
        { name: "Somnath Temple", file: "temple_gujarat2.html" },
      ],
    },
    {
      label: "Building/Palace",
      sublist: [
        { name: "Rani Ki Vav", file: "building_gujarat1.html" },
        { name: "Laxmi Vilas Palace", file: "palace_gujarat1.html" },
      ],
    },
    {
      label: "Mosque",
      sublist: [{ name: "Jama Masjid, Ahmedabad", file: "mosque_gujarat1.html" }],
    },
    {
      label: "Park/Arc",
      sublist: [{ name: "Champaner-Pavagadh", file: "park_gujarat1.html" }],
    },
  ],
  INHR: [
    {
      label: "Temple",
      sublist: [
        { name: "Mata Mansa Devi Temple", file: "temple_haryana1.html" },
        { name: "Brahma Sarovar Temple", file: "temple_haryana2.html" },
      ],
    },
    {
      label: "Tomb",
      sublist: [
        { name: "Sheikh Chilli’s Tomb", file: "tomb_haryana1.html" },
        { name: "Ibrahim Lodhi Tomb", file: "tomb_haryana2.html" },
      ],
    },
    {
      label: "Ways/Shelter/Park",
      sublist: [{ name: "Sultanpur National Park", file: "park_haryana1.html" }],
    },
  ],
  INHP: [
    {
      label: "Temple",
      sublist: [
        { name: "Jwalamukhi Temple", file: "temple_himachal1.html" },
        { name: "Baijnath Temple", file: "temple_himachal2.html" },
      ],
    },
    {
      label: "Fort",
      sublist: [
        { name: "Kangra Fort", file: "fort_himachal_pradesh1.html" },
        { name: "Nurpur Fort", file: "fort_himachal_pradesh2.html" },
      ],
    },
  ],
  INJH: [
    {
      label: "Temple",
      sublist: [
        { name: "Jagannath Temple", file: "temple_jharkhand1.html" },
        { name: "Maluti Temple", file: "temple_jharkhand2.html" },
      ],
    },
    {
      label: "Fort/Palace",
      sublist: [
        { name: "Palamu Fort", file: "fort_jharkhand1.html" },
        { name: "Navratangarh Fort", file: "fort_jharkhand2.html" },
      ],
    },
    {
      label: "Mosque",
      sublist: [{ name: "Jama Masjid, Ranchi", file: "mosque_jharkhand1.html" }],
    },
    {
      label: "Bridge/Dam",
      sublist: [{ name: "Subarnarekha River Bridge", file: "bridge_jharkhand1.html" }],
    },
  ],
  INKA: [
    {
      label: "Temples",
      sublist: [
        { name: "Chennakeshava Temple, Belur", file: "karnataka_temple1.html" },
        { name: "Hoysaleswara Temple, Halebidu", file: "karnataka_temple2.html" },
        { name: "Keshava Temple, Somnathpur", file: "karnataka_temple3.html" },
        { name: "Murudeshwara Temple", file: "karnataka_temple4.html" },
        { name: "Udupi Sri Krishna Matha", file: "karnataka_temple5.html" },
        { name: "Virupaksha Temple, Hampi", file: "karnataka_temple6.html" },
      ],
    },
    {
      label: "Bridge",
      sublist: [
        { name: "Kabni River Bridge, Mysuru", file: "karnataka_bridge1.html" },
        { name: "Korthi-Kolhar Bridge, Bijapur", file: "karnataka_bridge2.html" },
        { name: "Sharavathi Suspension Bridge", file: "karnataka_bridge3.html" },
        { name: "Thimmankudru Bridge, Udupi", file: "karnataka_bridge4.html" },
        { name: "Tunga Bridge, Thirthahalli", file: "karnataka_bridge5.html" },
        { name: "Wellesley Bridge, Srirangapatna", file: "karnataka_bridge6.html" },
      ],
    },
    {
      label: "Church",
      sublist: [
        { name: "C.S.I St. Andrew’s Church, Bangalore", file: "karnataka_church1.html" },
        { name: "Holy Ghost Church, Bangalore", file: "karnataka_church2.html" },
        { name: "St. Mary’s Basilica, Bangalore", file: "karnataka_church3.html" },
        { name: "St. Aloysius Chapel, Mangaluru", file: "karnataka_church4.html" },
        { name: "Milagres Church, Mangaluru", file: "karnataka_church5.html" },
        { name: "St. Patrick’s Church, Bangalore", file: "karnataka_church6.html" },
        { name: "St. Philomena’s Cathedral, Mysuru", file: "karnataka_church7.html" },
      ],
    },
    {
      label: "Forts",
      sublist: [
        { name: "Belgaum Fort", file: "karnataka_fort1.html" },
        { name: "Bidar Fort", file: "karnataka_fort2.html" },
        { name: "Chitradurga Fort", file: "karnataka_fort3.html" },
        { name: "Jamalabad Fort", file: "karnataka_fort4.html" },
        { name: "Madhugiri Fort", file: "karnataka_fort5.html" },
      ],
    },
    {
      label: "Mosque",
      sublist: [
        { name: "Barkur Mosque, Udupi", file: "karnataka_mosque1.html" },
        { name: "Hazrat Tawakkal Mastan Shah Dargah", file: "karnataka_mosque2.html" },
        { name: "Jama Masjid, Bijapur", file: "karnataka_mosque3.html" },
        { name: "Masjid Zeenath Baksh, Mangaluru", file: "karnataka_mosque4.html" },
        { name: "Tipu Sultan’s Mosque, Srirangapatna", file: "karnataka_mosque5.html" },
      ],
    },
  ],
  INKL: [
    {
      label: "Temples",
      sublist: [
        { name: "Ambalappuzha Sri Krishna Temple", file: "kerala_temple1.html" },
        { name: "Aranmula Parthasarathy Temple", file: "kerala_temple2.html" },
        { name: "Chengannur Mahadeva Temple", file: "kerala_temple3.html" },
        { name: "Chottanikkara Temple", file: "kerala_temple4.html" },
        { name: "Ettumanoor Mahadeva Temple", file: "kerala_temple5.html" },
        { name: "Guruvayur Sri Krishna Temple", file: "kerala_temple6.html" },
        { name: "Karthyayani Devi Temple", file: "kerala_temple7.html" },
        { name: "Kaviyoor Mahadeva Temple", file: "kerala_temple8.html" },
        { name: "Koodalmanikyam Temple", file: "kerala_temple9.html" },
        { name: "Lokanarkavu Temple", file: "kerala_temple10.html" },
        { name: "Manakkattu Devi Temple", file: "kerala_temple11.html" },
        { name: "Mannarasala Temple", file: "kerala_temple12.html" },
        { name: "Pulpatta Temple", file: "kerala_temple13.html" },
        { name: "Sree Padmanabhaswamy Temple", file: "kerala_temple14.html" },
        { name: "Tali Temple", file: "kerala_temple15.html" },
        { name: "Thirunelli Temple", file: "kerala_temple16.html" },
        { name: "Vadakkan Koyikkal Devi Temple", file: "kerala_temple17.html" },
      ],
    },
    {
      label: "Bridges",
      sublist: [
        { name: "Punalur Suspension Bridge", file: "kerala_bridge1.html" },
        { name: "Ayamkadavu Bridge", file: "kerala_bridge2.html" },
        { name: "Idukki’s Iron Man Bridges", file: "kerala_bridge3.html" },
        { name: "Marthanda Varma Bridge", file: "kerala_bridge4.html" },
      ],
    },
    {
      label: "Palaces",
      sublist: [
        { name: "Padmanabhapuram Palace", file: "kerala_palace1.html" },
        { name: "Mattancherry Palace", file: "kerala_palace2.html" },
        { name: "Krishnapuram Palace", file: "kerala_palace3.html" },
        { name: "Kanakakkunnu Palace", file: "kerala_palace4.html" },
      ],
    },
    {
      label: "Mosques",
      sublist: [
        { name: "Cheraman Juma Mosque", file: "kerala_mosque1.html" },
        { name: "Malik Deenar Mosque", file: "kerala_mosque2.html" },
        { name: "Mishkal Mosque", file: "kerala_mosque3.html" },
        { name: "Odathil Mosque", file: "kerala_mosque4.html" },
        { name: "Ponnani Juma Masjid", file: "kerala_mosque5.html" },
        { name: "Thazhathangady Juma Masjid", file: "kerala_mosque6.html" },
      ],
    },
    {
      label: "Forts",
      sublist: [
        { name: "Anchuthengu Fort", file: "kerala_fort1.html" },
        { name: "Bekal Fort", file: "kerala_fort2.html" },
        { name: "Chandragiri Fort", file: "kerala_fort3.html" },
        { name: "Hosdurg Fort", file: "kerala_fort4.html" },
        { name: "Palakkad Fort", file: "kerala_fort5.html" },
        { name: "Pallippuram Fort", file: "kerala_fort6.html" },
        { name: "St. Angelo Fort", file: "kerala_fort7.html" },
        { name: "Thalassery Fort", file: "kerala_fort8.html" },
        { name: "Udayagiri Fort", file: "kerala_fort9.html" },
      ],
    },
    {
      label: "Churches",
      sublist: [
        { name: "Malayattoor St. Thomas Church", file: "kerala_church1.html" },
        { name: "Palayur St. Thomas Church", file: "kerala_church2.html" },
        { name: "Santa Cruz Cathedral Basilica", file: "kerala_church3.html" },
        { name: "St. Francis Church", file: "kerala_church4.html" },
        { name: "St. George’s Syro-Malabar Church", file: "kerala_church5.html" },
        { name: "St. Mary’s Knanaya Valiyapally", file: "kerala_church6.html" },
        { name: "St. Mary’s Syro-Malabar Basilica", file: "kerala_church7.html" },
        { name: "Vallarpadam Basilica", file: "kerala_church8.html" },
        { name: "Kodungallur Mar Thoma Church", file: "kerala_church9.html" },
        { name: "Kothamangalam St. Mary’s Cathedral", file: "kerala_church10.html" },
      ],
    },
  ],
  INMP: [
    {
      label: "Temple",
      sublist: [
        { name: "Khajuraho Temples", file: "temple_madhyapradesh1.html" },
        { name: "Sanchi Stupa", file: "temple_madhyapradesh2.html" },
      ],
    },
    {
      label: "Forts",
      sublist: [
        { name: "Gwalior Fort", file: "fort_madhyapradesh1.html" },
        { name: "Orchha Fort", file: "fort_madhyapradesh2.html" },
      ],
    },
    {
      label: "Caves",
      sublist: [{ name: "Bhimbetka Rock Shelters", file: "cave_madhyapradesh1.html" }],
    },
  ],
  INMH: [
    {
      label: "Tomb",
      sublist: [{ name: "Bibi Ka Maqbara", file: "tomb_maharashtra1.html" }],
    },
    {
      label: "Caves/Monastery",
      sublist: [
        { name: "Ajanta Caves", file: "caves_maharashtra1.html" },
        { name: "Ellora Caves", file: "caves_maharashtra2.html" },
        { name: "Elephanta Caves", file: "caves_maharashtra3.html" },
      ],
    },
    {
      label: "Building",
      sublist: [{ name: "Shaniwar Wada", file: "building_maharashtra1.html" }],
    },
    {
      label: "Station",
      sublist: [{ name: "Chhatrapati Shivaji Terminus", file: "station_maharashtra1.html" }],
    },
  ],
  INMN: [
    {
      label: "Temple",
      sublist: [
        { name: "Shri Shri Govindajee Temple", file: "temple_manipur1.html" },
        { name: "Ibudhou Thangjing Temple", file: "temple_manipur2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Kangla Palace", file: "building_manipur1.html" },
        { name: "INA Memorial", file: "building_manipur2.html" },
      ],
    },
  ],
  INML: [
    {
      label: "Building",
      sublist: [
        { name: "Nongkrem Dance Arena", file: "building_meghalaya1.html" },
        { name: "Living Root Bridges", file: "building_meghalaya2.html" },
      ],
    },
  ],
  INMZ: [
    {
      label: "Temple",
      sublist: [
        { name: "Solomon’s Temple", file: "temple_mizoram1.html" },
        { name: "Mizoram State Museum", file: "temple_mizoram2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [{ name: "Chapchar Kut Hall", file: "building_mizoram1.html" }],
    },
  ],
  INNL: [
    {
      label: "Building",
      sublist: [
        { name: "Kohima War Cemetery", file: "building_nagaland1.html" },
        { name: "Naga Heritage Village", file: "building_nagaland2.html" },
      ],
    },
  ],
  INOR: [
    {
      label: "Temple",
      sublist: [
        { name: "Konark Sun Temple", file: "temple_odisha1.html" },
        { name: "Jagannath Temple", file: "temple_odisha2.html" },
        { name: "Lingaraj Temple", file: "temple_odisha3.html" },
        { name: "Mukteshwar Temple", file: "temple_odisha4.html" },
      ],
    },
    {
      label: "Caves",
      sublist: [
        { name: "Udayagiri and Khandagiri Caves", file: "caves_odisha1.html" },
        { name: "Dhauli Shanti Stupa", file: "caves_odisha2.html" },
      ],
    },
  ],
  INPY: [
    {
      label: "Temple",
      sublist: [
        { name: "Sri Vedapureeswarar Temple", file: "temple_puducherry1.html" },
        { name: "Manakula Vinayagar Temple", file: "temple_puducherry2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Aurobindo Ashram", file: "building_puducherry1.html" },
        { name: "French Colonial Buildings", file: "building_puducherry2.html" },
      ],
    },
  ],
  INPB: [
    {
      label: "Gurdwara",
      sublist: [
        { name: "Golden Temple", file: "gurdwara_punjab1.html" },
        { name: "Gurdwara Sri Tarn Taran Sahib", file: "gurdwara_punjab2.html" },
      ],
    },
    {
      label: "Fort",
      sublist: [
        { name: "Qila Mubarak", file: "fort_punjab1.html" },
        { name: "Gobindgarh Fort", file: "fort_punjab2.html" },
      ],
    },
  ],
  INRJ: [
    {
      label: "Forts",
      sublist: [
        { name: "Amber Fort", file: "fort_rajasthan1.html" },
        { name: "Mehrangarh Fort", file: "fort_rajasthan2.html" },
        { name: "Chittorgarh Fort", file: "fort_rajasthan3.html" },
      ],
    },
    {
      label: "Palace",
      sublist: [
        { name: "Hawa Mahal", file: "palace_rajasthan1.html" },
        { name: "City Palace", file: "palace_rajasthan2.html" },
      ],
    },
    {
      label: "Scientific Arc",
      sublist: [{ name: "Jantar Mantar", file: "arc_rajasthan1.html" }],
    },
  ],
  INSK: [
    {
      label: "Monastery",
      sublist: [
        { name: "Rumtek Monastery", file: "monastery_sikkim1.html" },
        { name: "Pemayangtse Monastery", file: "monastery_sikkim2.html" },
      ],
    },
    {
      label: "Forts",
      sublist: [{ name: "Rabdentse Fort", file: "fort_sikkim1.html" }],
    },
  ],
  INTR: [
    {
      label: "Temple",
      sublist: [
        { name: "Tripura Sundari Temple", file: "temple_tripura1.html" },
        { name: "Fourteen Goddess Temple", file: "temple_tripura2.html" },
      ],
    },
    {
      label: "Palace",
      sublist: [
        { name: "Ujjayanta Palace", file: "palace_tripura1.html" },
        { name: "Neermahal Palace", file: "palace_tripura2.html" },
      ],
    },
  ],
  INUP: [
    {
      label: "Building",
      sublist: [
        { name: "Bara Imambara", file: "building_uttarpradesh1.html" },
        { name: "Anand Bhawan", file: "building_uttarpradesh2.html" },
        { name: "Sarnath Stupa", file: "building_uttarpradesh3.html" },
      ],
    },
    {
      label: "Tomb",
      sublist: [
        { name: "Khusro Tomb", file: "tomb_uttarpradesh1.html" },
        { name: "Taj Mahal", file: "tomb_uttarpradesh2.html" },
      ],
    },
    {
      label: "Fort",
      sublist: [
        { name: "Allahabad Fort", file: "fort_uttarpradesh1.html" },
        { name: "Jhansi Fort", file: "fort_uttarpradesh2.html" },
        { name: "Red Fort", file: "fort_uttarpradesh3.html" },
      ],
    },
  ],
  INUT: [
    {
      label: "Temple",
      sublist: [
        { name: "Kedarnath Temple", file: "temple_uttarakhand1.html" },
        { name: "Badrinath Temple", file: "temple_uttarakhand2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Forest Research Institute", file: "building_uttarakhand1.html" },
        { name: "Tapkeshwar Temple", file: "building_uttarakhand2.html" },
      ],
    },
  ],
  INWB: [
    {
      label: "Temple",
      sublist: [
        { name: "Dakshineswar Kali Temple", file: "temple_westbengal1.html" },
        { name: "Somapura Mahavihara", file: "temple_westbengal2.html" },
        { name: "Jor Bangla Temple", file: "temple_westbengal3.html" },
      ],
    },
    {
      label: "Mosque",
      sublist: [{ name: "Adina Mosque", file: "mosque_westbengal1.html" }],
    },
    {
      label: "Bridges",
      sublist: [{ name: "Howrah Bridge", file: "bridge_westbengal1.html" }],
    },
    {
      label: "Palace",
      sublist: [{ name: "Hazarduari Palace", file: "palace_westbengal1.html" }],
    },
  ],
  INLD: [
    {
      label: "Temple",
      sublist: [
        { name: "Kavaratti Juma Masjid", file: "temple_lakshadweep1.html" },
        { name: "Ujra Mosque", file: "temple_lakshadweep2.html" },
      ],
    },
    {
      label: "Building",
      sublist: [
        { name: "Kavaratti Island Structures", file: "building_lakshadweep1.html" },
        { name: "Minicoy Lighthouse", file: "building_lakshadweep2.html" },
      ],
    },
  ],
  INJK: [
    {
      label: "Fort",
      sublist: [
        { name: "Hari Parbat Fort", file: "fort_jammu_kashmir1.html" },
        { name: "Bahur Fort", file: "fort_jammu_kashmir2.html" },
      ],
    },
    {
      label: "Mosque",
      sublist: [
        { name: "Hazratbal Shrine", file: "mosque_jammu_kashmir1.html" },
        { name: "Jama Masjid, Srinagar", file: "mosque_jammu_kashmir2.html" },
      ],
    },
  ],
  INLA: [
    {
      label: "Monastery",
      sublist: [
        { name: "Hemis Monastery", file: "monastery_ladakh1.html" },
        { name: "Thiksey Monastery", file: "monastery_ladakh2.html" },
      ],
    },
    {
      label: "Forts",
      sublist: [{ name: "Leh Palace", file: "fort_ladakh1.html" }],
    },
  ],
};

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup-menu');
  if (!popup) {
    console.error('Popup element with ID "popup-menu" not found.');
    return;
  }

  let hideTimeout = null;
  let currentRegion = null;

  function renderPopup(regionId) {
    const stateName = stateNames[regionId] || "Unknown State";
    const popupData = regionData[regionId];
    if (!popupData) {
      console.warn(`No data found for region: ${regionId}`);
      return;
    }

    popup.innerHTML = `
      <h2>${stateName}</h2>
      <ul>
        ${popupData
          .map(
            (category, idx) => `
          <li class="popup-main" data-idx="${idx}">
            <strong>${category.label}</strong>
            <ul class="sublist" id="sublist-${idx}">
              ${category.sublist
                .filter((sub) => sub.name && sub.file) // Filter invalid entries
                .map(
                  (sub) => `
                <li>
                  <a href="${sub.file}" target="_blank">${sub.name}</a>
                </li>
              `
                )
                .join('')}
            </ul>
          </li>
        `
          )
          .join('')}
      </ul>
    `;

    // Collapse all sublists by default
    popup.querySelectorAll('.sublist').forEach((sub) => sub.classList.remove('active'));
  }

  function showPopup(regionId, event) {
    clearTimeout(hideTimeout);
    currentRegion = regionId;
    renderPopup(regionId);
    popup.classList.add('active');

    const regionSVG = document.getElementById(regionId);
    if (!regionSVG) {
      console.warn(`SVG element for region ${regionId} not found.`);
      return;
    }

    // Temporarily show popup to get dimensions
    popup.style.visibility = 'hidden';
    popup.style.display = 'block';

    const rect = regionSVG.getBoundingClientRect();
    const popupWidth = popup.offsetWidth || 300;
    const popupHeight = popup.offsetHeight || 200;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Find the map container
    let mapContainer = regionSVG.closest('#map-container') || document.body;
    const containerRect = mapContainer.getBoundingClientRect();

    // Place popup to the left of the map container
    let left = containerRect.left - popupWidth - 20;
    left = Math.max(10, left);

    // Vertically center popup relative to region
    let top = rect.top + rect.height / 2 - popupHeight / 2;
    top = Math.max(10, Math.min(top, viewportHeight - popupHeight - 10));

    popup.style.left = `${left + window.scrollX}px`;
    popup.style.top = `${top + window.scrollY}px`;
    popup.style.visibility = 'visible';
  }

  function hidePopup() {
    popup.classList.remove('active');
    currentRegion = null;
  }

  // Attach hover events to regions
  Object.keys(regionData).forEach((regionId) => {
    const regionSVG = document.getElementById(regionId);
    if (!regionSVG) {
      console.warn(`Region SVG element with ID ${regionId} not found in the map.`);
      return;
    }
    regionSVG.addEventListener('mouseenter', (e) => showPopup(regionId, e));
    regionSVG.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        if (!popup.matches(':hover')) hidePopup();
      }, 800);
    });
  });

  // Keep popup visible when hovered
  popup.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
  popup.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(hidePopup, 400);
  });

  // Expand/Collapse sublists on click
  popup.addEventListener('click', (e) => {
    const li = e.target.closest('.popup-main');
    if (li) {
      const idx = li.getAttribute('data-idx');
      popup.querySelectorAll('.sublist').forEach((ul, i) => {
        ul.classList.toggle('active', i == idx);
      });
    }
  });
});
