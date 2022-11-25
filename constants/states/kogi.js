const SR = {
  name: "KOGI",
  email: "Kogi@apcaims.com",
  password: "dcx75",
  phone: "08108850572",
  statecode: "KOGI",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "KOGI",
  state: "KOGI",
  lga: [
    {
      wards: [
        "ADAVI-EBA",
        "EGE/IRUVOCHINOMI",
        "IDANUHUA",
        "IKARAWORO/IDOBANYERE",
        "INO ZIOMI/IPAKU/OSISI",
        "IRUVUCHEBA",
        "KUROKO I",
        "KUROKO II",
        "NAGAZI FARM CENTRE",
        "OGAMINANA",
        "OKUNCHI/OZURI/ONIEKA",
      ],
      name: "ADAVI",
    },
    {
      wards: [
        "ABODI/PATESI",
        "ACHAGANA",
        "ADOGO",
        "ADOGU/APAMIRA/OGODO UHUOVENE",
        "BADOKO",
        "EBIYA NORTH",
        "EBIYA SOUTH",
        "GANAGA/TOWNSHIP",
        "ICHUWA/UPAJA",
        "OBANGEDE/OHUNENE/UKOKO INYE'RE",
        "ODONU/UNOSI",
        "OGIGIRI",
        "OLD AJAOKUTA",
        "OMGBO",
      ],
      name: "AJAOKUTA",
    },
    {
      wards: [
        "ANKPA I",
        "ANKPA II",
        "ANKPA SUBURB I",
        "ANKPA SUBURB II",
        "ANKPA TOWNSHIP",
        "ENJEMA I",
        "ENJEMA III",
        "ENJEMA IV",
        "ENJEMA II",
        "OJOKU I",
        "OJOKU III",
        "OJOKU II",
        "OJOKU IV",
      ],
      name: "ANKPA",
    },
    {
      wards: [
        "AKUBA I",
        "AKUBA II",
        "AYEDE/AKAKANA",
        "EFORO",
        "GBOLOKO",
        "IKENDE",
        "KPATA",
        "MOZUM",
        "OZONGULO/KPANCHE",
        "OZUGBE",
      ],
      name: "BASSA",
    },
    {
      wards: [
        "ABOCHO",
        "ADUMU EGUME",
        "ANYIGBA",
        "DEKINA TOWN",
        "EMEWE",
        "IYALE",
        "ODU I",
        "ODU II",
        "OGANE INIGU",
        "OGBABEDE",
        "OJIKPADALA",
        "OKURA OLAFIA",
      ],
      name: "DEKINA",
    },
    {
      wards: [
        "AKPANYO",
        "ANALO",
        "AYAH",
        "EJULE",
        "IYANO",
        "ODEKE",
        "OJILA",
        "ONYEDEGA",
        "UJEH",
        "UNALE",
      ],
      name: "IBAJI",
    },
    {
      wards: [
        "EDE",
        "EGA",
        "ICHALA",
        "IGALAOGBA",
        "IGECHEBA",
        "OGEGELE",
        "OWOLI APA",
        "SABON GARI",
        "UGWODA",
        "UKWAJA",
      ],
      name: "IDAH",
    },
    {
      wards: [
        "AJAKA I",
        "AJAKA II",
        "AKPANYA",
        "AVRUGO",
        "EKWULOKO",
        "ODOLU",
        "OFORACHI I",
        "OFORACHI II",
        "OJI-AJI",
        "UBELE",
      ],
      name: "IGALAMELA/ODOLU",
    },
    {
      wards: [
        "AIYEGUNLE",
        "AIYERE/ARIMAH",
        "AIYETORO I",
        "AIYETORO II",
        "EGBEDA EGGA/OKEDAYO",
        "EKINRIN ADE",
        "IBGOLAYERE/ILAERE",
        "IFFE/IKOYI/OKEJUMU",
        "ILETEJU/ORIGA",
        "IYAH/AYEH",
        "IYAMOYE",
        "IYARA",
        "ODOKORO",
        "OGALE/ADUGE",
        "OGIDI",
      ],
      name: "IJUMU",
    },
    {
      wards: [
        "AIYETEJU",
        "AIYETORO-KIRI",
        "AIYEWA",
        "AKUTUPA-KIRI",
        "ASUTA",
        "EGBEDA",
        "ILUKE",
        "ODO-AKETE",
        "ODO-APE",
        "ODOLU",
        "OKEBUKUN",
        "OKEDAYO",
        "OKEKOKO",
        "OLLE/OKE-OFIN",
        "OTU",
      ],
      name: "KABBA/BUNU",
    },
    {
      wards: [
        "AKPASU",
        "CHIKARA NORTH",
        "CHIKARA SOUTH",
        "GEGU-BEKI NORTH",
        "GEGU-BEKI SOUTH",
        "GIRINYA",
        "IRENODU",
        "KOTONKARFE SOUTH EAST",
        "ODAKI-KOTON KARFE",
        "TAWARI",
        "UKWO-KOTON KARFE",
      ],
      name: "KOGI . K. K.",
    },
    {
      wards: [
        "EGGAN",
        "KAKANDA",
        "KUPA NORTH EAST",
        "KUPA SOUTH WEST",
        "LOKOJA - A",
        "LOKOJA - B",
        "LOKOJA - C",
        "LOKOJA - D",
        "LOKOJA - E",
        "OWORO",
      ],
      name: "LOKOJA",
    },
    {
      wards: [
        "AGBAFOGUN",
        "AIYEDAYO/AIYEDARO",
        "AIYEDE/OKAGI",
        "ILETEJU - 1",
        "ILLETEJU - 2",
        "ODOLE - 1",
        "ODOLE - 2",
        "OKEAGI/ILAI",
        "OROKERE",
        "TAKETE IDDE/OTAFUN",
      ],
      name: "MOPA MORO",
    },
    {
      wards: [
        "ALOJI",
        "ALOMA",
        "EJULE ALLAH",
        "IBOKO/EFAKWU",
        "IGO",
        "ITOBE/OKOKENYI",
        "OCHADAMU",
        "OFOKE",
        "OGBONICHA",
        "UGWOLAWO - 2",
        "UGWOLAWO - I",
      ],
      name: "OFU",
    },
    {
      wards: [
        "AIYEROMI",
        "ENI",
        "ILETEJU",
        "OBATGBEN",
        "OBINOYIN",
        "OKESI",
        "OKIBO",
        "OSHOBANE",
        "OTURU OPOWUROYE",
        "UGUGU",
      ],
      name: "OGORI MANGO",
    },
    {
      wards: [
        "EIKA / OHIZENYI",
        "OBAIBA I",
        "OBAIBA II",
        "OBANGEDE / UHUODO",
        "OBAROKE UVETE",
        "OBOROKE EBA",
        "OBOROKE UVETE - II",
        "OHUEPE / OMAVI UBORO",
        "OHUETA",
        "OKAITO / USUNGWEN",
        "OKUEHU",
      ],
      name: "OKEHI",
    },
    {
      wards: [
        "ABUGA/OZUJA",
        "BARIKI",
        "IDOJI",
        "OBEHIRA EBA",
        "OBEHIRA UVETTA",
        "OBESSA",
        "OKENE-EBA / AGASSA/ AHACHE",
        "ONYUKOKO",
        "ORIETESU",
        "OTUTU",
        "UPOGORO/ODENKU",
      ],
      name: "OKENE",
    },
    {
      wards: [
        "IMANE I",
        "IMANE II",
        "OGUGU I",
        "OGUGU II",
        "OGUGU III",
        "OLAMABORO I",
        "OLAMABORO II",
        "OLAMABORO III",
        "OLAMABORO IV",
        "OLAMABORO V",
      ],
      name: "OLAMABORO",
    },
    {
      wards: [
        "ABEJUKOLO I",
        "ABEJUKOLO II",
        "AKPACHA",
        "BAGAJI",
        "BAGANA",
        "ICHEKE AJOPACHI",
        "OGODU",
        "OJI-AJI",
        "OKPATALA",
        "OLLA",
        "OPODA/OFEJIJI",
      ],
      name: "OMALA",
    },
    {
      wards: [
        "ALU/IGBAGUN/ORANRE",
        "EJUKU",
        "IFE OLUKOTUN I",
        "IFE OLUKOTUN II",
        "ILAFIN/IDOFIN/ODO - OGBA",
        "ITEDO",
        "JEGE/OKE/AGI OGBOM/ISAO",
        "MAKUTU I",
        "MAKUTU II",
        "PONYAN",
      ],
      name: "YAGBA EAST",
    },
    {
      wards: [
        "EJIBA",
        "ISAULU ESA/OKOLOKE/OKUNRAN",
        "IYAMERIN/IGBARUKU",
        "ODO EGBE",
        "ODO ARA OMI OGGA",
        "ODO EGBE I",
        "ODO EGBE II",
        "ODO ERE OKE ERE",
        "ODO ERI OKOTO",
        "OGBE",
        "OKE EGBE I",
        "OKE EGBE II",
        "OKE EGBE III",
        "OKE EGBE IV",
      ],
      name: "YAGBA WEST",
    },
  ],
};

export const KOGI = { states, SR };
