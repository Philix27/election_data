const SR = {
  name: "JIGAWA",
  email: "Jigawa@apcaims.com",
  password: "mxo72",
  phone: "08108850572",
  statecode: "JIGAWA",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "JIGAWA",
  state: "JIGAWA",
  lga: [
    {
      wards: [
        "AUYAKAYI",
        "AUYO",
        "AYAMA",
        "AYAN",
        "GAMAFOI",
        "GAMSARKA",
        "GATAFA",
        "KAFUR",
        "TSIDIR",
        "UNIK",
      ],
      name: "AUYO",
    },
    {
      wards: [
        "BABURA",
        "BATALI",
        "DORAWA",
        "GARU",
        "GASAKOLI",
        "INSHARUWA",
        "JIGAWA",
        "KANYA",
        "KUZUNZUMI",
        "KYAMBO",
        "TAKWASA",
      ],
      name: "BABURA",
    },
    {
      wards: [
        "BIRNIN KUDU",
        "KANGIRE",
        "KANTOGA",
        "KIYAKO",
        "KWANGWARA",
        "LAFIYA",
        "SUNDIMINA",
        "SURKO",
        "UNGUWAR'YA",
        "WURNO",
        "YALWAN DAMAI",
      ],
      name: "BIRNIN KUDU",
    },
    {
      wards: [
        "BATU",
        "BIRNIWA",
        "DANGWALERI",
        "DIGINSA",
        "FAGI",
        "KACHALLARI",
        "KARANKA",
        "KAZURA",
        "MACHINAMARI",
        "MATAMU",
        "NGUWA",
      ],
      name: "BIRNIWA",
    },
    {
      wards: [
        "AHOTO",
        "BUJI",
        "CHURBUN",
        "FALAGERI",
        "GANTSA",
        "K/LELEN KUDU",
        "KAWAYA",
        "KUKUMA",
        "MADABE",
        "Y/TUKUR",
      ],
      name: "BUJI",
    },
    {
      wards: [
        "ABAYA",
        "CHAMO",
        "DUNDUBUS",
        "DURU",
        "JIGAWAR TSADA",
        "KACHI",
        "KARNAYA",
        "KUDAI",
        "LIMAWA",
        "MADOBI",
        "SAKWAYA",
      ],
      name: "DUTSE",
    },
    {
      wards: [
        "GAGARAWA GARI",
        "GAGARAWA TASHA",
        "GARIN CHIROMA",
        "KORE BALATU",
        "MADAKA",
        "MAIADUWA",
        "MAIKILILI",
        "MEDU",
        "YALAWA",
        "ZARADA",
      ],
      name: "GAGARAWA",
    },
    {
      wards: [
        "BUDURU",
        "DOKO",
        "GARKI",
        "GWARZON GARKI",
        "JIRMA",
        "KANYA",
        "KARGO",
        "KORE",
        "MUKU",
        "RAFIN MARKE",
        "SIYORI",
      ],
      name: "GARKI",
    },
    {
      wards: [
        "BAIKARYA",
        "DANAMA",
        "DANTANOMA",
        "GALAGAMMA",
        "GARIN ALHAJI BARKA",
        "GARIN GAMBO",
        "GUSAU",
        "HAMMADO",
        "KOFAR AREWA",
        "KOFAR YAMMA",
        "ZANGO",
      ],
      name: "GUMEL",
    },
    {
      wards: [
        "ABUNABO",
        "ADIYANI",
        "DAWA",
        "GARBAGAL",
        "GURI",
        "KADIRA",
        "LAFIYA",
        "MARGADU",
        "MATARA BABA",
        "MUSARI",
      ],
      name: "GURI",
    },
    {
      wards: [
        "BASIRKA",
        "DINGAYA",
        "FAGAM",
        "FARIN DUTSE",
        "GWARAM TSOHUWA",
        "KILA",
        "KWANDIKO",
        "MARUTA",
        "SARA",
        "TSANGARWA",
        "ZANDAN NAGOGO",
      ],
      name: "GWARAM",
    },
    {
      wards: [
        "BUNTUSU",
        "DABI",
        "DARINA",
        "F/YAMMA",
        "GUNTAI",
        "GWIWA",
        "KORAYEL",
        "RORAU",
        "SHAFE",
        "YOLA",
        "ZAUMAR SAINAWA",
      ],
      name: "GWIWA",
    },
    {
      wards: [
        "ATAFI",
        "DUBANTU",
        "GAGULMARI",
        "KASUWAR KOFA",
        "KASUWAR KUDA",
        "MAJEMA",
        "MATSARO",
        "RUMFA",
        "SABON GARU",
        "YANKOLI",
        "YAYARI",
      ],
      name: "HADEJIA",
    },
    {
      wards: [
        "AUJARA",
        "GANGAWA",
        "GAUZA TAZARA",
        "GUNKA",
        "HARBO SABUWA",
        "HARBO TSOHUWA",
        "IDANUNA",
        "JABARNA",
        "JAHUN",
        "KALE",
        "KANWA",
      ],
      name: "JAHUN",
    },
    {
      wards: [
        "BALANGU",
        "DUMADUMIN TOKA",
        "GAFAYA",
        "JABO",
        "KAFIN HAUSA",
        "KAZALEWA",
        "MAJAWA",
        "MEZAN",
        "RUBA",
        "SARAWA",
        "ZAGO",
      ],
      name: "KAFIN HAUSA",
    },
    {
      wards: [
        "ARBUS",
        "ASKANDU",
        "DABUWARAN",
        "DAKAIYAWA",
        "HADIN",
        "JA'E",
        "JARKASA",
        "KAUGAMA",
        "MARKE",
        "UNGUWAR JIBRIN",
        "YALO",
      ],
      name: "KAUGAMA",
    },
    {
      wards: [
        "BA'AUZINI",
        "DABA",
        "DABAZA",
        "DANDI",
        "GADA",
        "KANTI",
        "MARADAWA",
        "SABARU",
        "UNGUWAR AREWA",
        "UNGUWAR GABAS",
        "UNGUWAR YAMMA",
      ],
      name: "KAZAURE",
    },
    {
      wards: [
        "BATURIYA",
        "BULUNCHAI",
        "DOLERI",
        "FANDUM",
        "GAYIN",
        "KIRIKA SAMMA",
        "MADACHI",
        "MARMA",
        "TARABU",
        "TSHEGUWA",
      ],
      name: "KIRIKA SAMMA",
    },
    {
      wards: [
        "ABALAGO",
        "ANDAZA",
        "FAKE",
        "GARKO",
        "GURUDUBA",
        "KATANGA",
        "KATUKA",
        "KIYAWA",
        "KWANDA",
        "MAJE",
        "TSURMA",
      ],
      name: "KIYAWA",
    },
    {
      wards: [
        "BALARABE",
        "DANKUMBO",
        "FULATA",
        "GALADI",
        "JAJERI",
        "KUKAYASKU",
        "MADANA",
        "MAIGATARI AREWA",
        "MAIGATARI KUDU",
        "MATOYA",
        "TURBUS",
      ],
      name: "MAIGATARI",
    },
    {
      wards: [
        "ARKI",
        "DUNARI",
        "FATEKA AKURYA",
        "GARIN GABAS",
        "MAIRA KUMI-BARA MUSA",
        "MAKA DDARI",
        "MALAM MADORI",
        "SHAIYA",
        "TAGWARO",
        "TASHENA",
        "TONIKUTARA",
      ],
      name: "MALAM MADORI",
    },
    {
      wards: [
        "DANGYATIN",
        "HANTSU",
        "HARBO",
        "KOYA",
        "MIGA",
        "SABON GARI TAKANEBU",
        "SANSANI",
        "TSAKUWAWA",
        "YANDUNA",
        "ZAREKU",
      ],
      name: "MIGA",
    },
    {
      wards: [
        "CHAI-CHAI",
        "DABI",
        "KAFIN BABUSHE",
        "KARSHI",
        "KYARAMA",
        "RINGIM",
        "SANKARA",
        "SINTILMAWA",
        "TOFA",
        "YANDUTSE",
      ],
      name: "RINGIM",
    },
    {
      wards: [
        "AMARYAWA",
        "BARAGUMI",
        "DANSURE",
        "FARA",
        "GORA",
        "KWAITA",
        "RONI",
        "SANKAU",
        "TUNAS",
        "YANZAKI",
        "ZUGAI",
      ],
      name: "RONI",
    },
    {
      wards: [
        "ALBASU",
        "AMANGA",
        "DANGWANKI",
        "DANLADI",
        "DANZOMO",
        "JEKE",
        "SHABARU",
        "SULE-TANKARKAR",
        "TAKATSABA",
        "YANDAMO",
      ],
      name: "SULE-TANKARKAR",
    },
    {
      wards: [
        "AJAURA",
        "CHAKWAIKWAIWA",
        "CHUKUTO",
        "GUJUNGU",
        "KIRI",
        "KWALAM",
        "MAJE",
        "MAJIYA",
        "S/GARIN YAYA",
        "TAURA",
      ],
      name: "TAURA",
    },
    {
      wards: [
        "ACHILAFIYA",
        "BELAS",
        "DAWAN-GAWO",
        "GURJIYA",
        "GWARTA",
        "KARKARNA",
        "KUDA",
        "RINGIM",
        "YANKWASHI",
        "ZUNBUMBA",
      ],
      name: "YANKWASHI",
    },
  ],
};

export const JIGAWA = { states, SR };
