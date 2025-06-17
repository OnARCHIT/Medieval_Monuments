
  // Map of region IDs to their popup data
  const stateNames = {
  INTN: "Tamil Nadu",
  INBR: "Bihar",
  INAN: "Andaman & Nicobar",
  INTG: "Telangana",
  INAP: "Andhra Pradesh",
  INAR:"Arunachal Pradesh",
  INAS:"Assam",
  INCT:"Chhattisgarh",

INCH:"Chandigarh",


INDL:"Delhi",

INGA:"Goa",

INGJ:"Gujarat",

INHR:"Haryana",

INHP:"Himachal\Pradesh",

INJH:"Jharkhand",

INKA:"Karnataka",

INKL:"Kerala",

INMP:"Madhya\Pradesh",

INMH:"Maharashtra",

INMN:"Manipur",

INML:"Meghalaya",

INMZ:"Mizoram",

INNL:"Nagaland",

INOR:"Odisha",

INPB:"Punjab",

INPY:"Puducherry",

INRJ:"Rajasthan",

INSK:"Sikkim",

INTR:"Tripura",

INUT:"Uttaranchal",

INUP:"Uttar\Pradesh",

INWB:"West\Bengal",

INLD:"Lakshadweep",

INLA:"Ladakh",

INJK:"Jammu\and\Kashmir"
  }

  const regionData = {
    INTN: [

      {
         label: "Temple",
        sublist: [{ name: "Airavatesvara Temple", file: "temple_tamilnadu1.html" },
          { name: "Brihadeeswarar Temple ", file: "temple_tamilnadu2.html" },
          { name: "Ekambareswarar Temple", file: "temple_tamilnadu3.html" },
          { name: "Gangaikonda Cholapuram", file: "temple_tamilnadu4.html" },
          { name: "Jambukeswarar Temple", file: "temple_tamilnadu5.html" },
          { name: "Kailasanathar Temple ", file: "temple_tamilnadu6.html" },
          { name: "Kapaleeswarar Temple", file: "temple_tamilnadu7.html" },
          { name: "Meenakshi Amman Temple Gopuram", file: "temple_tamilnadu7.html" },
          { name: "Ramanathaswamy Temple", file: "temple_tamilnadu7.html" },
          { name: "Shore Temple", file: "temple_tamilnadu7.html" },
          { name: "Srirangam Ranganathaswamy Temple", file: "temple_tamilnadu7.html" },

         
        ]},
        {
         label: "Bridge/Dam",
        sublist: [{ name: "Annai Indira Gandhi Road Bridge", file: "bridge_tamil nadu1.html" },
          { name: "Grand Anicut ", file: "dam_tamil nadu1.html" },
          { name: "Coleroon Bridge", file: "temple_tamilnadu2.html" },
          { name: "Kaveri River Bridges", file: "temple_tamilnadu3.html" },
          { name: "Mettur Dam Bridge", file: "temple_tamilnadu4.html" },
          { name: "Napier Bridge ", file: "temple_tamilnadu5.html" },
          { name: "Pamban Bridge", file: "temple_tamilnadu6.html" },
         
        ]},
        {
  label: "Church",
  sublist: [
    { name: "St. Mary’s Church, Fort St. George, Chennai", file: "tamilnadu_church1.html" },
    { name: "St. Stephen’s Church, Ooty", file: "tamilnadu_church2.html" },
    { name: "Velankanni Basilica (Basilica of Our Lady of Good Health)", file: "tamilnadu_church3.html" },
    { name: "Armenian Church, Chennai", file: "tamilnadu_church4.html" },
    { name: "Our Lady of Ransom Church, Kanyakumari", file: "tamilnadu_church5.html" },
    { name: "Our Lady of Snows Basilica, Thoothukudi", file: "tamilnadu_church6.html" },
    { name: "San Thome Cathedral Basilica, Chennai", file: "tamilnadu_church7.html" },
    { name: "St. George’s Cathedral, Chennai", file: "tamilnadu_church8.html" }
  ]
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
    { name: "Kattabomman Fort (Panchalankurichi Fort)", file: "tamilnadu_fort7.html" },
    { name: "Gingee Fort (Senji Fort)", file: "tamilnadu_fort8.html" },
    { name: "Fort St. George, Chennai", file: "tamilnadu_fort9.html" },
    { name: "Dindigul Fort", file: "tamilnadu_fort10.html" },
    { name: "Aranthangi Fort", file: "tamilnadu_fort11.html" },
    { name: "Alamparai Fort", file: "tamilnadu_fort12.html" },
    { name: "Thenkaraikottai Fort", file: "tamilnadu_fort13.html" },
    { name: "Thirumayam Fort", file: "tamilnadu_fort14.html" },
    { name: "Udayagiri Fort", file: "tamilnadu_fort15.html" },
    { name: "Vattakottai Fort", file: "tamilnadu_fort16.html" },
    { name: "Vellore Fort", file: "tamilnadu_fort17.html" }
  ]
},

       {
  label: "Mosque",
  sublist: [
    { name: "Bahram Jung Mosque, Nandanam, Chennai", file: "tamilnadu_mosque1.html" },
    { name: "Jama Masjid, Salem", file: "tamilnadu_mosque2.html" },
    { name: "Mosque Inside Vellore Fort", file: "tamilnadu_mosque3.html" },
    { name: "Kayalpattinam Ancient Mosques", file: "tamilnadu_mosque4.html" },
    { name: "Palaiya Jumma Palli (Old Jumma Masjid), Kilakarai", file: "tamilnadu_mosque5.html" },
    { name: "Triplicane Big Mosque (Wallajah Mosque), Chennai", file: "tamilnadu_mosque6.html" },
    { name: "Thousand Lights Mosque, Chennai", file: "tamilnadu_mosque7.html" },
    { name: "Pottalpudur Dargah, Tenkasi", file: "tamilnadu_mosque8.html" }
  ]},

     
        {
         label: "Palace",
        sublist: [{ name: " Tamukkam Palace", file: "tamilnadu_palace1.html" },
          
  { name: "Thanjavur Maratha Palace (Aranmanai)", file: "tamilnadu_palace2.html" },
  { name: "Chepauk Palace, Chennai", file: "tamilnadu_palace3.html" },
  { name: "Chettinad Mansions (Kanadukathan/Karaikudi)", file: "tamilnadu_palace4.html" },
  { name: "Ettaiyapuram Palace", file: "tamilnadu_palace5.html" },
  { name: "Fernhills Palace, Ooty", file: "tamilnadu_palace6.html" },
  { name: "Padmanabhapuram Palace, Kanyakumari", file: "tamilnadu_palace7.html" },
  { name: "Pudukkottai Palace (Rajagopuram Palace)", file: "tamilnadu_palace8.html" },
  { name: "Ramalinga Vilasam Palace, Ramanathapuram", file: "tamilnadu_palace9.html" },
  { name: "Thirumalai Nayakkar Mahal, Madurai", file: "tamilnadu_palace10.html" }

          
        ]}


    ],
    INBR: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "NALANDA UNIVERSITY", file: "Building_BR1.html" },
        { name: "All Saints Cathedral Church", file: "Building_BR2.html" },
        { name: "Allahabad Library", file: "Building_BR3.html" },
      { name: "Anand Bhawan", file: "Building_BR4.html" }]
      },
      {label: "Tomb",
        sublist: [
        { name: "Sher Sah Suri", file: "TOMB_BR1.html" },
        { name: "Vishnupad Temple", file: "TOMB_BR2.html" },
        { name: "Mundeshwari Temple", file: "TOMB_BR3.html" }
        ]},
      {
        label: "fort",
        sublist: [{ name: "Rohtasgarh Fort", file: "Fort_BR1.html" },
        { name: "Vishnupad Temple", file: "Fort_BR1.html" },
        { name: "Mundeshwari Temple", file: "Fort_BR1.html" }]
      },
    ],
    INAN: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INTG: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INAP: [
 {
  label: "Temple",
  sublist: [
    { name: "Amaralingeswara Swamy Temple", file: "andhrapradesh_amralingeshwar_temple.html" },
    { name: "Sri Lakshmi Narasimha Swamy Temple, Antarvedi", file: "andhrapradesh_antarvedi_temple.html" },
    { name: "Sri Venkateswara Swamy Temple, Ramappa", file: "andhrapradesh_ramappa_temple.html" },
    { name: "Sri Varaha Lakshmi Narasimha Temple, Simhachalam", file: "andhrapradesh_simhachalam_temple.html" },
    { name: "Sri Kalahasteeswara Swamy Temple", file: "andhrapradesh_srikalahasti_temple.html" },
    { name: "Mallikarjuna Swamy Temple, Srisailam", file: "andhrapradesh_srisailam_temple.html" },
    { name: "Sri Venkateswara Swamy Temple, Venkatagiri", file: "andhrapradesh_venkatagiri_palace.html" },
    { name: "Sri Uma Maheswara Temple, Yaganti", file: "andhrapradesh_yaganti_temple.html" }
  ]
},

      {
        label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INAR: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      { label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INAS: [
      {
         label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INCH: [
      {
        label: "Temple",
        sublist:[{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INCT: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INDH: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INDL: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      { label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      },
       {label: "Tomb",
        sublist: [
        { name: "TAJ MAHAL", file: "TOMB_DL1.html" },
        { name: "Vishnupad Temple", file: "TOMB_BR2.html" },
        { name: "Mundeshwari Temple", file: "TOMB_BR3.html" }
        ]},
    ],
    INGA: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INGJ: [
      {
        label: "Temple",
        sublist:[{ name: "Rani Ka Vav", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Rani Ka Vav", file: "Building_gj1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INHR: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INHP: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INJH: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
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
    { name: "Virupaksha Temple, Hampi", file: "karnataka_temple6.html" }
  ]
},

      {
  label: "Bridge",
  sublist: [
    { name: "Kabni River Bridge, Mysuru", file: "karnataka_Beige1.html" },
    { name: "Korthi-Kolhar Bridge, Bijapur", file: "karnataka_Beige2.html" },
    { name: "Sharavathi Suspension Bridge, Honnavar", file: "karnataka_Beige3.html" },
    { name: "Thimmankudru Bridge, Udupi", file: "karnataka_Beige4.html" },
    { name: "Tunga Bridge, Thirthahalli", file: "karnataka_Beige5.html" },
    { name: "Wellesley Bridge, Srirangapatna", file: "karnataka_Beige6.html" }
  ]
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
    { name: "St. Philomena’s Cathedral, Mysuru", file: "karnataka_church7.html" }
  ]
},
{
  label: "Forts",
  sublist: [
    { name: "Belgaum Fort Palace (Royal Quarters)", file: "karnataka_fort1.html" },
    { name: "Bidar Fort", file: "karnataka_fort2.html" },
    { name: "Chitradurga Fort", file: "karnataka_fort3.html" },
    { name: "Jamalabad Fort", file: "karnataka_fort4.html" },
    { name: "Madhugiri Fort", file: "karnataka_fort5.html" }
  ]
},
{
  label: "Mosque",
  sublist: [
    { name: "Barkur Mosque (Tajuddin Mosque), Udupi", file: "karnataka_mosque1.html" },
    { name: "Hazrat Tawakkal Mastan Shah Dargah, Bangalore", file: "karnataka_mosque2.html" },
    { name: "Jama Masjid, Bijapur", file: "karnataka_mosque3.html" },
    { name: "Masjid Zeenath Baksh, Mangaluru", file: "karnataka_mosque4.html" },
    { name: "Tipu Sultan’s Mosque (Srirangapatna Jama Masjid), Bangalore", file: "karnataka_mosque5.html" }
  ]
}





    ],
    INKL: [
      {
  label: "Temples",
  sublist: [
    { name: "Ambalappuzha Sri Krishna Temple, Alappuzha", file: "kerala_temple1.html" },
    { name: "Aranmula Parthasarathy Temple, Pathanamthitta", file: "kerala_temple2.html" },
    { name: "Chengannur Mahadeva Temple, Alappuzha", file: "kerala_temple3.html" },
    { name: "Chottanikkara Temple, Ernakulam", file: "kerala_temple4.html" },
    { name: "Ettumanoor Mahadeva Temple, Kottayam", file: "kerala_temple5.html" },
    { name: "Guruvayur Sri Krishna Temple, Guruvayur", file: "kerala_temple6.html" },
    { name: "Karthyayani Devi Temple, Cherthala", file: "kerala_temple7.html" },
    { name: "Kaviyoor Mahadeva Temple, Pathanamthitta", file: "kerala_temple8.html" },
    { name: "Koodalmanikyam Temple, Irinjalakuda", file: "kerala_temple9.html" },
    { name: "Lokanarkavu Temple, Kozhikode", file: "kerala_temple10.html" },
    { name: "Manakkattu Devi Temple, Pallipad", file: "kerala_temple11.html" },
    { name: "Mannarasala Temple, Alappuzha", file: "kerala_temple12.html" },
    { name: "Pulpatta Temple, Malappuram", file: "kerala_temple13.html" },
    { name: "Sree Padmanabhaswamy Temple, Thiruvananthapuram", file: "kerala_temple14.html" },
    { name: "Tali Temple, Kozhikode", file: "kerala_temple15.html" },
    { name: "Thirunelli Temple, Wayanad", file: "kerala_temple16.html" },
    { name: "Vadakkan Koyikkal Devi Temple, Puthiyavila", file: "kerala_temple17.html" }
  ]
},
{
  label: "Bridges",
  sublist: [
    { name: "Punalur Suspension Bridge, Kollam", file: "kerala_Bridge1.html" },
    { name: "Ayamkadavu Bridge, Kasaragod", file: "kerala_Bridge2.html" },
    { name: "Idukki’s “Iron Man” Bridges", file: "kerala_Bridge3.html" },
    { name: "Marthanda Varma Bridge (Aluva Bridge), Ernakulam", file: "kerala_Bridge4.html" }
  ]
}
,
   {
  label: "Palaces",
  sublist: [
    { name: "Padmanabhapuram Palace", file: "kerala_palace1.html" },
    { name: "Mattancherry Palace (Dutch Palace), Kochi", file: "kerala_palace2.html" },
    { name: "Krishnapuram Palace, Kayamkulam", file: "kerala_palace3.html" },
    { name: "Kanakakkunnu Palace, Thiruvananthapuram", file: "kerala_palace4.html" }
  ]
},
{
  label: "Mosques",
  sublist: [
    { name: "Cheraman Juma Mosque, Kodungallur", file: "kerala_mosque1.html" },
    { name: "Malik Deenar Mosque, Kasaragod", file: "kerala_mosque2.html" },
    { name: "Mishkal Mosque, Kozhikode", file: "kerala_mosque3.html" },
    { name: "Odathil Mosque, Thalassery", file: "kerala_mosque4.html" },
    { name: "Ponnani Juma Masjid, Malappuram", file: "kerala_mosque5.html" },
    { name: "Thazhathangady Juma Masjid, Kottayam", file: "kerala_mosque6.html" }
  ]
},
{
  label: "Forts",
  sublist: [
    { name: "Anchuthengu Fort (Anjengo Fort), Thiruvananthapuram", file: "kerala_fort1.html" },
    { name: "Bekal Fort, Kasaragod", file: "kerala_fort2.html" },
    { name: "Chandragiri Fort, Kasaragod", file: "kerala_fort3.html" },
    { name: "Hosdurg Fort, Kasaragod", file: "kerala_fort4.html" },
    { name: "Palakkad Fort, Palakkad", file: "kerala_fort5.html" },
    { name: "Pallippuram Fort (Ayikotta / Alikotta), Ernakulam", file: "kerala_fort6.html" },
    { name: "St. Angelo Fort (Kannur Fort), Kannur", file: "kerala_fort7.html" },
    { name: "Thalassery Fort (Tellicherry Fort), Kannur", file: "kerala_fort8.html" },
    { name: "Udayagiri Fort, Kanyakumari", file: "kerala_fort9.html" }
  ]
},{
  label: "Churches",
  sublist: [
    { name: "Malayattoor St. Thomas Syro-Malabar Church", file: "kerala_church1.html" },
    { name: "Palayur St. Thomas Syro-Malabar Church", file: "kerala_church2.html" },
    { name: "Santa Cruz Cathedral Basilica, Fort Kochi", file: "kerala_church3.html" },
    { name: "St. Francis Church, Fort Kochi", file: "kerala_church4.html" },
    { name: "St. George’s Syro-Malabar Catholic Forane Church, Edappally", file: "kerala_church5.html" },
    { name: "St. Mary’s Knanaya Valiyapally, Kaduthuruthy", file: "kerala_church6.html" },
    { name: "St. Mary’s Syro-Malabar Catholic Basilica, Kuravilangad", file: "kerala_church7.html" },
    { name: "Vallarpadam Basilica of Our Lady of Ransom, Ernakulam", file: "kerala_church8.html" },
    { name: "Kodungallur Mar Thoma Syro-Malabar Church", file: "kerala_church9.html" },
    { name: "Kothamangalam St. Mary’s Jacobite Syrian Cathedral (Kothamangalam Valiyapally)", file: "kerala_church10.html" }
  ]
},


    ],
    INMP: [
      {
        label: "Temple",
        sublist: [{ name: "Khajuraho Temples", file: "temple_mp1.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      { label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INMH: [
      {
        label: "Temple",
        sublist:[{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Caves",
        sublist:[{ name: "Ajanta", file: "caves_MR1.html" },
        { name: "Ellora ", file: "caves_MR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INMN: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INML: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]


      }
    ],
    INMZ: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INNL: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INOR: [
      {
        label: "Temple",
        sublist: [{ name: "Konkan Sun Temple", file: "temple_or1.html" },
        { name: "Jaganath Temple ", file: "temple_or2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INPY: [
      {
         label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INPB: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INRJ: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INSK: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INTR: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
         label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      }
    ],
    INUP: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building/Structure/Palace",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" },
      { name: "Bara Imbara", file: "Building_Up5.html" },
      { name: "Sarnath Stupa", file: "Arc_UP1.html" },
    ]
      },
      {
        label: "TOMB",
        sublist: [
        { name: "Khusro Tomb", file: "Tomb_UP1.html" },
        { name: "Taj Mahal", file: "Tomb_UP2.html" },
        
        ]
      },
      {
        label: "fort",
        sublist: [{ name: "Allahabad fort", file: "Fort_UP1.html" },
        { name: "Jhasi Fort", file: "fort_UP2.html" },
        { name: "Red Fort", file: "fort_UP4.html" },
      { name: "Red Fort", file: "fort_UP5.html" }]
      },
    ],
    INUT: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      }
    ]
    ,
    INWB: [
      {
        label: "Temple",
        sublist:[{name: "Dakshineswar Kali", file: "Temple1_WB1.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Bridges & Highway",
        sublist:[{name: "Howrah Bridge", file: "Bridge_WB1.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      
      {
        label: "Building",
        sublist: ["Golghar", "Patna Secretariat", "Barabar Caves"]
      }
    ]
    ,
    INLD: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: ["Golghar", "Patna Secretariat", "Barabar Caves"]
      }
    ]
    ,
    INJK: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: ["Golghar", "Patna Secretariat", "Barabar Caves"]
      }
    ]
    ,
    INLA: [
      {
        label: "Temple",
        sublist: [{ name: "Mahabodhi Temple", file: "Temple1_BR2.html" },
        { name: "Mundeshwari Temple ", file: "Temple_BR2.html" },
        { name: "", file: "Temple_BR3.html" },
      { name: "", file: "Temple_BR4.html" }]
      },
      {
        label: "Building",
        sublist: ["Golghar", "Patna Secretariat", "Barabar Caves"]
      }
    ]
    
    
    
    // Add more regions as needed
  };
 

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup-menu');
  let hideTimeout = null;
  let currentRegion = null;

  function renderPopup(regionId) {
    const stateName = stateNames[regionId] || "Unknown State";
    const popupData = regionData[regionId];
    if (!popupData) return;
    popup.innerHTML = `
      <h2>${stateName}</h2>
      <ul>
        ${popupData.map((category, idx) => `
          <li class="popup-main" data-idx="${idx}">
            <strong>${category.label}</strong>
            <ul class="sublist" id="sublist-${idx}">
              ${category.sublist.map(sub => `
                <li>
                  <a href="${sub.file}" target="_blank">${sub.name}</a>
                </li>
              `).join('')}
            </ul>
          </li>
        `).join('')}
      </ul>
    `;
    // Collapse all sublists by default
    popup.querySelectorAll('.sublist').forEach(sub => sub.classList.remove('active'));
  }

  function showPopup(regionId, event) {
    clearTimeout(hideTimeout);
    currentRegion = regionId;
    renderPopup(regionId);
    popup.classList.add('active');
    const regionSVG = document.getElementById(regionId);
    if (regionSVG) {
      // Temporarily show popup to get dimensions
      popup.style.visibility = 'hidden';
      popup.style.display = 'block';

      const rect = regionSVG.getBoundingClientRect();
      const popupWidth = popup.offsetWidth || 320;
      const popupHeight = popup.offsetHeight || 240;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Always show to the LEFT of the region
      let left = rect.left - popupWidth - 16;
      left = Math.max(8, Math.min(left, viewportWidth - popupWidth - 8));
      let top = Math.max(rect.top + (rect.height / 2) - (popupHeight / 2), 8);
      top = Math.min(top, viewportHeight - popupHeight - 8);

      popup.style.left = left + window.scrollX + "px";
      popup.style.top = top + window.scrollY + "px";
      popup.style.visibility = '';
      popup.style.display = '';
    }
  }

  function hidePopup() {
    popup.classList.remove('active');
    setTimeout(() => {
      popup.innerHTML = '';
      popup.style.left = '';
      popup.style.top = '';
    }, 400);
    currentRegion = null;
  }

  // Attach hover events to regions
  Object.keys(regionData).forEach(regionId => {
    const regionSVG = document.getElementById(regionId);
    if (!regionSVG) return;
    regionSVG.addEventListener('mouseenter', function(e) { showPopup(regionId, e); });
    regionSVG.addEventListener('mouseleave', function() {
      hideTimeout = setTimeout(() => {
        if (!popup.matches(':hover')) hidePopup();
      }, 800);
    });
  });

  // Keep popup visible when hovered
  popup.addEventListener('mouseenter', function() { clearTimeout(hideTimeout); });
  popup.addEventListener('mouseleave', function() {
    hideTimeout = setTimeout(hidePopup, 400);
  });

  // Expand/Collapse sublists on click
  popup.addEventListener('click', function (e) {
    const li = e.target.closest('.popup-main');
    if (li) {
      const idx = li.getAttribute('data-idx');
      popup.querySelectorAll('.sublist').forEach((ul, i) => {
        if (i == idx) ul.classList.toggle('active');
        else ul.classList.remove('active');
      });
    }
  });
});
