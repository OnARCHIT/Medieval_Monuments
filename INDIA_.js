
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
      { name: "Anand Bhawan", file: "Building_Up4.html" }]}
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
    INKL: [
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
        label: "Building",
        sublist: [{ name: "Muir College", file: "Building_UP1.html" },
        { name: "All Saints Cathedral Church", file: "Building_Up2.html" },
        { name: "Allahabad Library", file: "Building_Up3.html" },
      { name: "Anand Bhawan", file: "Building_Up4.html" }]
      },
      {
        label: "TOMB",
        sublist: [
        { name: "Khusro Tomb", file: "Mosque_UP1.html" },
        { name: "Vishnupad Temple", file: "vishnupad-temple.html" },
        { name: "Mundeshwari Temple", file: "mundeshwari-temple.html" }
        ]
      },
      {
        label: "fort",
        sublist: [{ name: "Allahabad fort", file: "Fort_UP1.html" },
        { name: "Vishnupad Temple", file: "vishnupad-temple.html" },
        { name: "Mundeshwari Temple", file: "mundeshwari-temple.html" }]
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
      const rect = regionSVG.getBoundingClientRect();
      const popupWidth = popup.offsetWidth || 320;
      const left = Math.max(rect.left - popupWidth - 16, 8);
      const top = Math.max(rect.top + (rect.height / 2) - (popup.offsetHeight / 2), 8);
      popup.style.left = left + window.scrollX + "px";
      popup.style.top = top + window.scrollY + "px";
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
        // Only hide if the popup is not being hovered
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
