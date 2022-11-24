const SR = {
  name: "ABIA",
  email: "abia@gmail.com",
  password: "abia1",
  phone: "08108850572",
  statecode: "ABIA",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "ABIA",
  state: "ABIA",
  lga: [
    {
      wards: [
        "ARIARIA MARKET",
        "EZIAMA",
        "INDUSTRIAL AREA",
        "OGBOR I",
        "OGBOR II",
        "OLD ABA GRA",
        "OSUSU I",
        "OSUSU II",
        "ST.EUGENES BY OKIGWE RD.",
        "UMUOGOR",
        "UMUOLA",
        "URATTA",
      ],
      name: "ABA NORTH",
    },
    {
      wards: [
        "ABA RIVER",
        "ABA TOWN HALL",
        "ASA",
        "EKEOHA",
        "ENYIMBA",
        "EZIUKWU",
        "GLOUCESTER",
        "IGWEBUIKE",
        "MOSQUE",
        "NGWA",
        "OHAZU I",
        "OHAZU II",
      ],
      name: "ABA SOUTH",
    },
    {
      wards: [
        "AROCHUKWU I",
        "AROCHUKWU II",
        "AROCHUKWU III",
        "ELEOHA IHECHIOWA",
        "IKWUN IHECHIOWA",
        "ISU",
        "OHAEKE",
        "OHAFOR I",
        "OHAFOR II",
        "OVUKWU",
        "UTUTU",
      ],
      name: "AROCHUKWU",
    },
    {
      wards: [
        "AMANKALU/AKOLIUFU",
        "BENDE",
        "IGBERE 'A'",
        "IGBERE 'B'",
        "ITEM A",
        "ITEM B",
        "ITEM C",
        "ITUMBAUZO",
        "OZUITEM",
        "UGWUEKE/EZEUKWU",
        "UMU - IMENYI",
        "UMUHU / EZECHI",
        "UZUAKOLI",
      ],
      name: "BENDE",
    },
    {
      wards: [
        "ARIAM",
        "IBERE I",
        "IBERE II",
        "OBORO I",
        "OBORO II",
        "OBORO III",
        "OBORO IV",
        "OLOKO I",
        "OLOKO II",
        "USAKA",
      ],
      name: "IKWUANO",
    },
    {
      wards: [
        "AMAPU NTIGHA",
        "AMASAA NSULU",
        "AMASAA NTIGHA",
        "IHIE",
        "ISIALA NSULU",
        "MBAWSI / UMUOMAINTA",
        "NGWA UKWU I",
        "NGWA UKWU II",
        "UMUNNA NSULU",
        "UMUOHA",
        "AKUNEKPU EZIAMA NA OBUBA",
        "AMAISE / AMAISE ANABA",
        "EHINA GURU OSOKWA",
        "MBUTU NGWA",
        "MBUTU UKWU",
        "NGWAOBI",
        "OKPORO AHABA",
        "OMOBA",
        "OVUNGWU",
        "OVUOKWU",
      ],
      name: "ISIALA NGWA NORTH",
    },
     {
      wards: [
        "AKUNEKPU EZIAMA NA OBUBA",
        "AMAISE / AMAISE ANABA",
        "EHINA GURU OSOKWA",
        "MBUTU NGWA",
        "MBUTU UKWU",
        "NGWAOBI",
        "OKPORO AHABA",
        "OMOBA",
        "OVUNGWU",
        "OVUOKWU",
      ],
      name: "ISIALA NGWA SOUTH",
    },
    {
      wards: [
        "ACHARA / MGBUGWU",
        "EZERE",
        "IKEAGHA I",
        "IKEAGHA II",
        "IMENYI",
        "ISIALA AMAWU",
        "ISU AMAWU",
        "OGUNDUASA",
        "UMUANYI / ABSU",
        "UMUNNEKWU",
      ],
      name: "ISUIKWUATO",
    },
    {
      wards: [
        "ABAYI I",
        "ABAYI II",
        "AHIABA",
        "AKUMAIMO",
        "ALAUKWU OHANZE",
        "IBEME",
        "MABOKO AMAIRI",
        "MGBOKO ITUNGWA",
        "MGBOKO UMUANUNU",
        "NDIARATA / AMAIRINABUA",
        "NTIGHAUZO AMAIRI",
      ],
      name: "OBINGWA",
    },
    {
      wards: [
        "AGBOJI ABIRIBA",
        "AMAEKE ABIRIBA",
        "AMAOGUDU ABIRIBA",
        "ANIA OHOAFIA",
        "EBEM OHAFIA",
        "ISIAMA OHAFIA",
        "NDI AGBO NKPORO",
        "NDI ELU NKPORO",
        "NDI ETITI NKPORO",
        "OHAFOR OHOAFIA",
        "OKANU OHOAFIA",
      ],
      name: "OHAFIA",
    },
    {
      wards: [
        "AMA - ASAA",
        "AMAITOLU MBUTU UMUOJIMA",
        "AMASATOR",
        "AMATOR",
        "AMAVO",
        "ARO - NGWA",
        "OKPOR - UMUOBO",
        "OSO - OKWA",
        "UMUNNEISE",
        "URTTA",
      ],
      name: "OSISIOMA",
    },
    {
      wards: [
        "WARD EIGHT",
        "WARD FIVE",
        "WARD FOUR",
        "WARD NINE",
        "WARD ONE",
        "WARD SEVEN",
        "WARD SIX",
        "WARD TEN",
        "WARD THREE",
        "WARD TWO",
      ],
      name: "UGWUNAGBO",
    },
    {
      wards: [
        "ASA NORTH",
        "ASA SOUTH",
        "IPU SOUTH",
        "IPU EAST",
        "IPU WEST",
        "OBOKWE",
        "OBUZOR",
        "OGWE",
        "OZAA WEST",
        "OZAA UKWU",
      ],
      name: "UKWA WEST",
    },
    {
      wards: [
        "AKWETE",
        "AZUMINI",
        "IKWUEKE WEST",
        "IKWUEKE EAST",
        "IKWUORIE",
        "IKWURIATOR EAST",
        "IKWURIATOR WEST",
        "NKPOROBE/OHURU",
        "OBOHIA",
        "UMUIGUBE ACHARA",
      ],
      name: "UKWA EAST",
    },
    {
      wards: [
        "AMUDA",
        "EZIAMA - AGBO",
        "EZIAMA - UGWU",
        "EZINGODO",
        "MBALA/ACHARA",
        "NDIAWA/UMUELEM/I",
        "OBINOLU/OBIAGU/LA",
        "UBAHU/AKAWA/AROKPA",
        "UMUAKU",
        "UMUCHIEZE I",
        "UMUCHIEZE II",
        "UMUCHIEZE III",
      ],
      name: "UMU - NNEOCHI",
    },
    {
      wards: [
        "AHIAUKWU I",
        "AHIAUKWU II",
        "AMAKAMA",
        "EZELEKE/OGBODIUKWU",
        "NSIRIMO",
        "OHIAOCHA",
        "OLD UMUAHIA",
        "OMAEGWU",
        "UBAKALA 'A'",
        "UBAKALA 'B'",
      ],
      name: "UMUAHIA SOUTH",
    },
    {
      wards: [
        "AFUGIRI",
        "IBEKU EAST I",
        "IBEKU EAST II",
        "IBEKU WEST",
        "ISINGWU",
        "NDUME",
        "NKWOACHARA",
        "NKWOEGWU",
        "UMUAHIA URBAN I",
        "UMUAHIA URBAN II",
        "UMUAHIA URBAN III",
        "UMUHU",
      ],
      name: "UMUAHIA NORTH",
    },
  ],
};

const senatorial_district = {
  statecode: "ABIA",
  state: "ABIA",
  sd: [
    {
      name: "ABIA NORTH",
      code: "SD/001/AB",
      collation_center: "COUNCIL HALL UMUAHIA NORTH LGA HQS",
      composition: ["UMUNNEOCHI", "ISUKWUATO", "OHAFIA", "AROCHUKWU", "BENDE"],
    },
    {
      name: "ABIA CENTRAL",
      code: "SD/002/AB",
      collation_center: "Council Hall Ohafia LGA HQS",
      composition: [
        " UMUAHIA",
        " NORTH",
        " UMUAHIA SOUTH",
        " IKWUANO",
        " ISIALA NGWA NORTH",
        " ISIALA NGWA SOUTH",
      ],
    },
    {
      name: "ABIA SOUTH",
      code: "SD/003/AB",
      collation_center: "ABA TOWN HALL ABA SOUTH LGA",
      composition: [
        "ABA NORTH",
        "ABA SOUTH",
        "UGWUNAGBO",
        "OBINGWA",
        "UKWA EAST",
        "UKWA WEST",
        "OSISIOMA",
      ],
    },
  ],
};

const fedral_constituency = {
  statecode: "ABIA",
  fc: [
    {
      name: "Aba North/Aba South",
      code: "FC/001/AB",
      collation_center:
        "The entire Geographical Areas of Aba North and Aba South L.G.As",
      composition: "ABA TOWN HALL ABA SOUTH LGA",
    },
    {
      name: "Aba North/Aba South",
      code: "FC/002/AB",
      composition:
        "The entire Geographical Areas of Arochukwu and Ohafia L.A.As",
      collation_center: "COUNCIL HALL OHAFIA LGA HQ",
    },
    {
      name: "Bende",
      code: "FC/003/AB",
      composition: "The Bende Geographical Areas of Bende L.G.As",
      collation_center: "COUNCIL HALL BENDE LGA HQ",
    },
    {
      name: "Isiala Ngwa North /Isiala Ngwa South",
      code: "FC/004/AB",
      composition:
        "The entire Geographical Areas of Isiala Ngwa North and South L.G.As",

      collation_center: "COUNCIL HALL ISIALA NGWA LGA HQ",
    },
    {
      name: "Isuikwuato/Umu-Nneochi",
      code: "FC/005/AB",
      composition:
        "The entire Geographical Areas of Isiukwuato and Umunneochi L.G.As",
      collation_center: "COUNCIL HALL ISUIKWUATO LGA HQ",
    },
    {
      name: "Obingwa/Ugwunagbo/Osisioma",
      code: "FC/006/AB",
      composition:
        "The entire Geographical Areas of Obingwa, Ugwunagbo and Osisioma L.G.As",
      collation_center: "OBINGWA LGA HQ",
    },
    {
      name: "Umuahia North/ Umuahia South/Ikwuano",
      code: "FC/007/AB",
      composition:
        "The entire Geographical Areas of Umuahia North, Umuahia South and Ikwuano L.G.As",
      collation_center: "UMUAHIA NORTH LGA HQ",
    },
    {
      name: "Ukwa East/Ukwa West",
      code: "FC/008/AB",
      composition: "The entire Geographical Areas of Ukwa East and East L.G.As",
      collation_center: "UKWA WEST LGA HQ",
    },
  ],
};

export const ABIA = { states, SR, senatorial_district, fedral_constituency };
