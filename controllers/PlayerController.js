const Player = require('../models/PlayerModel')
const Category = require('../models/CategoryModel')
const Team = require('../models/TeamModel');
const Championship = require('../models/ChampionshipModel');


const resetDB = async (req, res, next) => {
  return res.json({
    message: 'update-success',
    success: true
  });
  let json = `[
  {
    "number": "M0167",
    "lastName": "BOUDHRAA",
    "firstName": "Cheden",
    "day": 23,
    "month": 5,
    "year": 2005,
    "category": "Juniors",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0169",
    "lastName": "FERJANI",
    "firstName": "Hsen",
    "day": 7,
    "month": 10,
    "year": 2005,
    "category": "Juniors",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0195",
    "lastName": "AZZEBI",
    "firstName": "Med Aziz",
    "day": 21,
    "month": 1,
    "year": 2006,
    "category": "Juniors",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0050",
    "lastName": "BOUGHDIRI",
    "firstName": "Roua",
    "day": 14,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0232",
    "lastName": "FERJANI",
    "firstName": "Ayoub",
    "day": 13,
    "month": 8,
    "year": 2007,
    "category": "Cadets",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0233",
    "lastName": "BOUGHDIRI",
    "firstName": "Med Aziz",
    "day": 2,
    "month": 6,
    "year": 2007,
    "category": "Cadets",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0077",
    "lastName": "SMETI",
    "firstName": "Ritej",
    "day": 10,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0078",
    "lastName": "KAABI",
    "firstName": "Ghofrane",
    "day": 30,
    "month": 11,
    "year": 2009,
    "category": "Minimes",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0313",
    "lastName": "BOUGHDIRI",
    "firstName": "Koussay",
    "day": 17,
    "month": 5,
    "year": 2009,
    "category": "Minimes",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0353",
    "lastName": "BOUCETTA",
    "firstName": "Hamza",
    "day": 27,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0137",
    "lastName": "BOUCETTA",
    "firstName": "Chahed",
    "day": 7,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0138",
    "lastName": "BJAOUI",
    "firstName": "Eya",
    "day": 16,
    "month": 2,
    "year": 2012,
    "category": "Pupilles",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0146",
    "lastName": "GHAMRAOUI",
    "firstName": "Malek",
    "day": 1,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0496",
    "lastName": "SMETI",
    "firstName": "Yassine",
    "day": 27,
    "month": 10,
    "year": 2013,
    "category": "Poussins",
    "team": "AChS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0174",
    "lastName": "GHAMRAOUI",
    "firstName": "Ritej",
    "day": 7,
    "month": 11,
    "year": 2014,
    "category": "Poussins",
    "team": "AChS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0054",
    "lastName": "MASTOURI",
    "firstName": "Nahrane",
    "day": 25,
    "month": 11,
    "year": 1986,
    "category": "Seniors",
    "team": "AMS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0087",
    "lastName": "GHNI",
    "firstName": "Aslam",
    "day": 17,
    "month": 10,
    "year": 1995,
    "category": "Seniors",
    "team": "AMS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0117",
    "lastName": "AMRI",
    "firstName": "Ayoub",
    "day": 22,
    "month": 1,
    "year": 2001,
    "category": "Seniors",
    "team": "AMS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0118",
    "lastName": "MAHFOUDH",
    "firstName": "Yassine",
    "day": 10,
    "month": 7,
    "year": 2001,
    "category": "Seniors",
    "team": "AMS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0135",
    "lastName": "BEJI",
    "firstName": "Majid",
    "day": 8,
    "month": 9,
    "year": 2003,
    "category": "Juniors",
    "team": "AMS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0207",
    "lastName": "BAYOULI",
    "firstName": "Nihed",
    "day": 7,
    "month": 3,
    "year": 2006,
    "category": "Juniors",
    "team": "AMS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0073",
    "lastName": "BEN HMIDA",
    "firstName": "Anas",
    "day": 8,
    "month": 2,
    "year": 1992,
    "category": "Seniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0088",
    "lastName": "MEDDEB",
    "firstName": "Abdelaziz",
    "day": 14,
    "month": 10,
    "year": 1995,
    "category": "Seniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0011",
    "lastName": "BEN CHEIKH",
    "firstName": "Meriem",
    "day": 25,
    "month": 5,
    "year": 1998,
    "category": "Seniors",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0110",
    "lastName": "ABOUCHA",
    "firstName": "Wassim",
    "day": 11,
    "month": 7,
    "year": 2000,
    "category": "Seniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0156",
    "lastName": "KRAEIM",
    "firstName": "Louay",
    "day": 30,
    "month": 1,
    "year": 2004,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0157",
    "lastName": "KBOUBI",
    "firstName": "Ayoub",
    "day": 23,
    "month": 7,
    "year": 2004,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0035",
    "lastName": "KAMMOUN",
    "firstName": "Amel",
    "day": 30,
    "month": 11,
    "year": 2005,
    "category": "Juniors",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0179",
    "lastName": "OUESLATI",
    "firstName": "Med Amine",
    "day": 1,
    "month": 9,
    "year": 2005,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0183",
    "lastName": "KBOUBI",
    "firstName": "Amr",
    "day": 29,
    "month": 4,
    "year": 2005,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0044",
    "lastName": "HASSESSI",
    "firstName": "Sarra",
    "day": 28,
    "month": 9,
    "year": 2006,
    "category": "Juniors",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0045",
    "lastName": "MEJRI",
    "firstName": "Nour",
    "day": 21,
    "month": 8,
    "year": 2006,
    "category": "Juniors",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0058",
    "lastName": "HARREK",
    "firstName": "Nagham",
    "day": 6,
    "month": 2,
    "year": 2007,
    "category": "Cadets",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0072",
    "lastName": "OSMAN",
    "firstName": "Malek",
    "day": 15,
    "month": 11,
    "year": 2008,
    "category": "Cadets",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0296",
    "lastName": "KBOUBI",
    "firstName": "Mazen",
    "day": 29,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0090",
    "lastName": "FRADJ",
    "firstName": "Eya",
    "day": 21,
    "month": 2,
    "year": 2009,
    "category": "Minimes",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0334",
    "lastName": "BEN CHEIKH",
    "firstName": "Adem",
    "day": 10,
    "month": 2,
    "year": 2009,
    "category": "Minimes",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0335",
    "lastName": "HARREK",
    "firstName": "Ahmed",
    "day": 22,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0110",
    "lastName": "JABRI",
    "firstName": "KMAR",
    "day": 1,
    "month": 10,
    "year": 2010,
    "category": "Minimes",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0384",
    "lastName": "KOCHLEF",
    "firstName": "Ahmed Ghazi",
    "day": 17,
    "month": 11,
    "year": 2010,
    "category": "Minimes",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0385",
    "lastName": "AMEUR",
    "firstName": "Med Aziz",
    "day": 26,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0426",
    "lastName": "MEDDEB",
    "firstName": "Majd",
    "day": 9,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0153",
    "lastName": "MEDDEB",
    "firstName": "Miral",
    "day": 15,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0532",
    "lastName": "MEDDEB",
    "firstName": "Abdelmajid",
    "day": 13,
    "month": 6,
    "year": 2014,
    "category": "Poussins",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0533",
    "lastName": "OTHMAN",
    "firstName": "Taher",
    "day": 14,
    "month": 6,
    "year": 2014,
    "category": "Poussins",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0534",
    "lastName": "OUESLATI",
    "firstName": "Ahmed",
    "day": 16,
    "month": 4,
    "year": 2014,
    "category": "Poussins",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0618",
    "lastName": "HARRAK",
    "firstName": "Laith",
    "day": 23,
    "month": 1,
    "year": 2003,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 13
  },
  {
    "number": "F0211",
    "lastName": "SIDHOM",
    "firstName": "Aicha Loujain",
    "day": 3,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 14
  },
  {
    "number": "M0619",
    "lastName": "BOUMAIZA",
    "firstName": "Mehrez",
    "day": 22,
    "month": 6,
    "year": 2012,
    "category": "Pupilles",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 14
  },
  {
    "number": "F0212",
    "lastName": "AMEUR",
    "firstName": "Lin",
    "day": 25,
    "month": 2,
    "year": 2015,
    "category": "Poussins",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 14
  },
  {
    "number": "F0007",
    "lastName": "HAJJEM",
    "firstName": "Wala",
    "day": 20,
    "month": 7,
    "year": 1996,
    "category": "Seniors",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0119",
    "lastName": "KALLEL",
    "firstName": "Iheb",
    "day": 19,
    "month": 2,
    "year": 2001,
    "category": "Seniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0158",
    "lastName": "BEN CHAABENE",
    "firstName": "Meher",
    "day": 21,
    "month": 2,
    "year": 2004,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0046",
    "lastName": "AMMAR",
    "firstName": "Sarra",
    "day": 26,
    "month": 4,
    "year": 2006,
    "category": "Juniors",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0215",
    "lastName": "KRAEIM",
    "firstName": "Wassim",
    "day": 31,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0256",
    "lastName": "MILED",
    "firstName": "Hedi",
    "day": 18,
    "month": 11,
    "year": 2007,
    "category": "Cadets",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0297",
    "lastName": "GAMMOU",
    "firstName": "Med Seifeddine",
    "day": 12,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "ARS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0089",
    "lastName": "JRIDI",
    "firstName": "Youssef",
    "day": 18,
    "month": 2,
    "year": 2009,
    "category": "Minimes",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0091",
    "lastName": "MILED",
    "firstName": "Lina",
    "day": 11,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0092",
    "lastName": "CHERIF",
    "firstName": "Amira",
    "day": 20,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "ARS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0074",
    "lastName": "GHAMOUGUI",
    "firstName": "Ala",
    "day": 24,
    "month": 7,
    "year": 1993,
    "category": "Seniors",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0022",
    "lastName": "FERCHICHI",
    "firstName": "Senda",
    "day": 1,
    "month": 6,
    "year": 2003,
    "category": "Juniors",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0033",
    "lastName": "ZOGHLAMI",
    "firstName": "Maram",
    "day": 16,
    "month": 2,
    "year": 2005,
    "category": "Juniors",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0200",
    "lastName": "FERCHICHI",
    "firstName": "Sejda",
    "day": 20,
    "month": 12,
    "year": 2005,
    "category": "Juniors",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0173",
    "lastName": "JERBI",
    "firstName": "Aziz",
    "day": 8,
    "month": 9,
    "year": 2005,
    "category": "Juniors",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0048",
    "lastName": "DRISSI",
    "firstName": "Imen",
    "day": 5,
    "month": 9,
    "year": 2006,
    "category": "Juniors",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0203",
    "lastName": "MERDASSI",
    "firstName": "Maryem",
    "day": 19,
    "month": 7,
    "year": 2006,
    "category": "Juniors",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0201",
    "lastName": "BEN MOUSSA",
    "firstName": "Ali",
    "day": 24,
    "month": 12,
    "year": 2006,
    "category": "Juniors",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0234",
    "lastName": "JERBI",
    "firstName": "Adlene",
    "day": 15,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0235",
    "lastName": "KHALLOUFI",
    "firstName": "Adem",
    "day": 31,
    "month": 3,
    "year": 2007,
    "category": "Cadets",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0236",
    "lastName": "KHALLOUFI",
    "firstName": "Med Amine",
    "day": 31,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0064",
    "lastName": "BOUHJAR",
    "firstName": "Selma",
    "day": 31,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0065",
    "lastName": "SOUISSI",
    "firstName": "Balquis",
    "day": 31,
    "month": 8,
    "year": 2008,
    "category": "Cadets",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0314",
    "lastName": "DRISSI",
    "firstName": "Ayoub",
    "day": 17,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0327",
    "lastName": "GAMMOUDI",
    "firstName": "Youssef",
    "day": 4,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0100",
    "lastName": "JERBI",
    "firstName": "Rania",
    "day": 7,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0105",
    "lastName": "RIAHI",
    "firstName": "Maha",
    "day": 22,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0106",
    "lastName": "SOUISSI",
    "firstName": "Israa",
    "day": 22,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0354",
    "lastName": "DRIDI",
    "firstName": "RAYEN",
    "day": 28,
    "month": 11,
    "year": 2010,
    "category": "Minimes",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0355",
    "lastName": "FERCHICHI",
    "firstName": "Habib",
    "day": 23,
    "month": 2,
    "year": 2010,
    "category": "Minimes",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0125",
    "lastName": "MAJDI",
    "firstName": "Roumeysa",
    "day": 13,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0400",
    "lastName": "DRIDI",
    "firstName": "Youssef",
    "day": 25,
    "month": 12,
    "year": 2011,
    "category": "Pupilles",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0156",
    "lastName": "KHALLOUFI",
    "firstName": "Mayar",
    "day": 30,
    "month": 6,
    "year": 2012,
    "category": "Pupilles",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0480",
    "lastName": "THLIJANI",
    "firstName": "Rafi",
    "day": 6,
    "month": 6,
    "year": 2012,
    "category": "Pupilles",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0201",
    "lastName": "RIAHI",
    "firstName": "Mariem",
    "day": 25,
    "month": 7,
    "year": 2013,
    "category": "Poussins",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0202",
    "lastName": "CHEBBI",
    "firstName": "Ritej",
    "day": 13,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0514",
    "lastName": "RIAHI",
    "firstName": "Koussay",
    "day": 12,
    "month": 11,
    "year": 2013,
    "category": "Poussins",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0515",
    "lastName": "DRIDI",
    "firstName": "Sirat",
    "day": 30,
    "month": 3,
    "year": 2013,
    "category": "Poussins",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0522",
    "lastName": "SOUISSI",
    "firstName": "Raslen",
    "day": 7,
    "month": 8,
    "year": 2014,
    "category": "Poussins",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0588",
    "lastName": "JBALI",
    "firstName": "Ahmed",
    "day": 28,
    "month": 4,
    "year": 2015,
    "category": "Poussins",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0589",
    "lastName": "DRIDI",
    "firstName": "Raed",
    "day": 27,
    "month": 8,
    "year": 2015,
    "category": "Poussins",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0075",
    "lastName": "RIAHI",
    "firstName": "Chayth",
    "day": 4,
    "month": 2,
    "year": 1993,
    "category": "Seniors",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0172",
    "lastName": "FERCHICHI",
    "firstName": "Sejda",
    "day": 20,
    "month": 12,
    "year": 2005,
    "category": "Juniors",
    "team": "AS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0194",
    "lastName": "MERDASSI",
    "firstName": "Meriem",
    "day": 19,
    "month": 7,
    "year": 2006,
    "category": "Juniors",
    "team": "AS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0043",
    "lastName": "DHAOUADI",
    "firstName": "Mouhamed",
    "day": 6,
    "month": 2,
    "year": 1982,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0005",
    "lastName": "BEN AMEUR",
    "firstName": "Raouia",
    "day": 7,
    "month": 9,
    "year": 1990,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0068",
    "lastName": "DRIDI",
    "firstName": "Med Amine",
    "day": 28,
    "month": 6,
    "year": 1991,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0014",
    "lastName": "CHAABENE",
    "firstName": "Nada",
    "day": 16,
    "month": 9,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0015",
    "lastName": "OUNEIES",
    "firstName": "Aroua",
    "day": 8,
    "month": 8,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0016",
    "lastName": "OUNEIES",
    "firstName": "Islem",
    "day": 8,
    "month": 8,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0017",
    "lastName": "HICHRI",
    "firstName": "Samar",
    "day": 28,
    "month": 6,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0018",
    "lastName": "BAKLOUTI",
    "firstName": "Manel",
    "day": 19,
    "month": 5,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0122",
    "lastName": "DHIB",
    "firstName": "Amine",
    "day": 23,
    "month": 11,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0123",
    "lastName": "ZORAI",
    "firstName": "Nassim",
    "day": 2,
    "month": 11,
    "year": 2002,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0130",
    "lastName": "BJAOUI",
    "firstName": "Baha",
    "day": 23,
    "month": 8,
    "year": 2003,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0131",
    "lastName": "GUERFALI",
    "firstName": "Hamza",
    "day": 21,
    "month": 7,
    "year": 2003,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0168",
    "lastName": "YAGER",
    "firstName": "Farouk",
    "day": 29,
    "month": 8,
    "year": 2005,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0039",
    "lastName": "MOKDED",
    "firstName": "Fatma",
    "day": 30,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0196",
    "lastName": "ABBASSIA",
    "firstName": "Cherif",
    "day": 27,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0051",
    "lastName": "BEN ABDALLAH",
    "firstName": "Farah",
    "day": 17,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0052",
    "lastName": "BEN ISMAEL",
    "firstName": "Malek",
    "day": 8,
    "month": 7,
    "year": 2007,
    "category": "Cadets",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0239",
    "lastName": "ZORAI",
    "firstName": "Amir",
    "day": 24,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0063",
    "lastName": "OUNEIES",
    "firstName": "Estebrak",
    "day": 15,
    "month": 1,
    "year": 2008,
    "category": "Cadets",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0271",
    "lastName": "MECHRGUI",
    "firstName": "Anas",
    "day": 28,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0315",
    "lastName": "ZARAI",
    "firstName": "Majdeddine",
    "day": 21,
    "month": 2,
    "year": 2009,
    "category": "Minimes",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0316",
    "lastName": "SADKAOUI",
    "firstName": "Med Taha",
    "day": 24,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0102",
    "lastName": "BRAHIMI",
    "firstName": "Meriem",
    "day": 13,
    "month": 10,
    "year": 2010,
    "category": "Minimes",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0103",
    "lastName": "BRAHIMI",
    "firstName": "Nour EL Imen",
    "day": 13,
    "month": 10,
    "year": 2010,
    "category": "Minimes",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0359",
    "lastName": "BARKAOUI",
    "firstName": "Ahmed",
    "day": 30,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0360",
    "lastName": "MECHRGUI",
    "firstName": "Baraa",
    "day": 4,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0116",
    "lastName": "ABBASSI",
    "firstName": "Ala",
    "day": 1,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0118",
    "lastName": "DHAOUADI",
    "firstName": "Maram",
    "day": 18,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0119",
    "lastName": "AYEB",
    "firstName": "Nesrine",
    "day": 21,
    "month": 2,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0120",
    "lastName": "MEZGAR",
    "firstName": "Ranim",
    "day": 28,
    "month": 2,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0121",
    "lastName": "BEDOUI",
    "firstName": "Maram",
    "day": 20,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0122",
    "lastName": "BEDOUI",
    "firstName": "Mreiem",
    "day": 20,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0403",
    "lastName": "AROUA",
    "firstName": "Ayoub",
    "day": 4,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0404",
    "lastName": "METTALI",
    "firstName": "Mortadha",
    "day": 26,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0405",
    "lastName": "SADKAOUI",
    "firstName": "Med Yassine",
    "day": 5,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0140",
    "lastName": "ARAFA",
    "firstName": "Dorra",
    "day": 11,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0141",
    "lastName": "GALAI",
    "firstName": "Ouswa",
    "day": 27,
    "month": 1,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0142",
    "lastName": "HAMDAOUI",
    "firstName": "Kenza",
    "day": 18,
    "month": 10,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0144",
    "lastName": "MAKNINE",
    "firstName": "Yasmine",
    "day": 21,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0145",
    "lastName": "HIDRI",
    "firstName": "Tasnime",
    "day": 17,
    "month": 7,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0446",
    "lastName": "ZARAA",
    "firstName": "Ahmed Khalil",
    "day": 23,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0447",
    "lastName": "MAHOUACHI",
    "firstName": "Mohsen",
    "day": 7,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0161",
    "lastName": "OUKASSI",
    "firstName": "Nermine",
    "day": 15,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0492",
    "lastName": "FELISS",
    "firstName": "Sajed",
    "day": 17,
    "month": 7,
    "year": 2013,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0493",
    "lastName": "OUFENSOU",
    "firstName": "Youssef",
    "day": 20,
    "month": 8,
    "year": 2013,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0495",
    "lastName": "ZARAI",
    "firstName": "Youssef",
    "day": 10,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0172",
    "lastName": "MAHOUACHI",
    "firstName": "Mayar",
    "day": 15,
    "month": 4,
    "year": 2014,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0519",
    "lastName": "WAKAD",
    "firstName": "Med Sadok",
    "day": 7,
    "month": 1,
    "year": 2014,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0185",
    "lastName": "BRAHIMI",
    "firstName": "Chahd EL Yasamine",
    "day": 10,
    "month": 12,
    "year": 2015,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0554",
    "lastName": "ZORAI",
    "firstName": "Anis",
    "day": 13,
    "month": 10,
    "year": 2015,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0562",
    "lastName": "GUANOUNI",
    "firstName": "Taha",
    "day": 16,
    "month": 6,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "MUT-ROB 1",
    "nat": "TUN",
    "isValid": 6
  },
  {
    "number": "M0563",
    "lastName": "BJAOUI",
    "firstName": "Aymen",
    "day": 20,
    "month": 1,
    "year": 1994,
    "category": "Seniors",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 8
  },
  {
    "number": "M0564",
    "lastName": "ZARRAA",
    "firstName": "Med Aziz",
    "day": 24,
    "month": 3,
    "year": 2014,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 9
  },
  {
    "number": "F0027",
    "lastName": "MOKDED",
    "firstName": "Oumaima",
    "day": 22,
    "month": 6,
    "year": 2004,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0040",
    "lastName": "BEN NACEF",
    "firstName": "Chaima",
    "day": 7,
    "month": 8,
    "year": 2006,
    "category": "Juniors",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0062",
    "lastName": "BERRAYES CHAABANE",
    "firstName": "Sarra",
    "day": 8,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0117",
    "lastName": "FELISS",
    "firstName": "Assil",
    "day": 9,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0406",
    "lastName": "ZMITRI",
    "firstName": "Jed",
    "day": 11,
    "month": 10,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0143",
    "lastName": "FELISS",
    "firstName": "Israa",
    "day": 8,
    "month": 6,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0494",
    "lastName": "GAROUACHI",
    "firstName": "Youssef",
    "day": 24,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0173",
    "lastName": "OUERGHI",
    "firstName": "Chahrazed",
    "day": 14,
    "month": 7,
    "year": 2014,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0520",
    "lastName": "SELMI",
    "firstName": "Adem",
    "day": 18,
    "month": 8,
    "year": 2014,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0521",
    "lastName": "BJAOUI",
    "firstName": "Elyes",
    "day": 26,
    "month": 4,
    "year": 2014,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0184",
    "lastName": "ZARAI",
    "firstName": "Anis",
    "day": 13,
    "month": 10,
    "year": 2015,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0186",
    "lastName": "BJAOUI",
    "firstName": "Layane",
    "day": 12,
    "month": 11,
    "year": 2015,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0542",
    "lastName": "OUERGHI",
    "firstName": "Hass�ne",
    "day": 15,
    "month": 11,
    "year": 2015,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0189",
    "lastName": "ABBASSI",
    "firstName": "Abdelkarim",
    "day": 26,
    "month": 1,
    "year": 2016,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0190",
    "lastName": "ZMITRI",
    "firstName": "Eskander",
    "day": 1,
    "month": 2,
    "year": 2016,
    "category": "Poussins",
    "team": "ASCB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0017",
    "lastName": "TLICH",
    "firstName": "Hamed",
    "day": 3,
    "month": 3,
    "year": 1970,
    "category": "Seniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0064",
    "lastName": "MERNISSI",
    "firstName": "Sami",
    "day": 3,
    "month": 3,
    "year": 1990,
    "category": "Seniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0089",
    "lastName": "MAGHRAOUI",
    "firstName": "Achref",
    "day": 1,
    "month": 11,
    "year": 1995,
    "category": "Seniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "MUT-ASCB 2",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0151",
    "lastName": "IMEM",
    "firstName": "Youssef",
    "day": 17,
    "month": 7,
    "year": 2004,
    "category": "Juniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0152",
    "lastName": "HBIB",
    "firstName": "Montaserbellah",
    "day": 5,
    "month": 6,
    "year": 2004,
    "category": "Juniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0180",
    "lastName": "TLICH",
    "firstName": "Med Hedi",
    "day": 16,
    "month": 11,
    "year": 2005,
    "category": "Juniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0070",
    "lastName": "HBIB",
    "firstName": "Malak",
    "day": 15,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIAlia",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0071",
    "lastName": "ABDELMOULA",
    "firstName": "Malak",
    "day": 18,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIAlia",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0283",
    "lastName": "TLICH",
    "firstName": "Ibrahim",
    "day": 21,
    "month": 1,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0284",
    "lastName": "IMEM",
    "firstName": "Amenallah",
    "day": 15,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0375",
    "lastName": "HBIB",
    "firstName": "Med Jaleleddine",
    "day": 28,
    "month": 12,
    "year": 2010,
    "category": "Minimes",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0416",
    "lastName": "YAAKOUBI",
    "firstName": "Elyes",
    "day": 28,
    "month": 2,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0417",
    "lastName": "KHALLEDI",
    "firstName": "Abdelbari",
    "day": 17,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0152",
    "lastName": "BOUENEYA",
    "firstName": "ROUA",
    "day": 26,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIAlia",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0459",
    "lastName": "DEROUICH",
    "firstName": "Anas",
    "day": 21,
    "month": 1,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0460",
    "lastName": "JOUDI",
    "firstName": "Abdelmouheymen",
    "day": 4,
    "month": 8,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0503",
    "lastName": "MADDOUR",
    "firstName": "Ahmed Bahaeddine",
    "day": 19,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0526",
    "lastName": "BEN SALEM",
    "firstName": "Anas",
    "day": 23,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0527",
    "lastName": "FKIR",
    "firstName": "Hichem",
    "day": 23,
    "month": 7,
    "year": 2014,
    "category": "Poussins",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0566",
    "lastName": "DEROUICH",
    "firstName": "Awes",
    "day": 10,
    "month": 12,
    "year": 2015,
    "category": "Poussins",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0016",
    "lastName": "BEL SAADI",
    "firstName": "Abdelwahed",
    "day": 15,
    "month": 3,
    "year": 1969,
    "category": "Seniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0070",
    "lastName": "SOUABNI",
    "firstName": "Aymen",
    "day": 13,
    "month": 2,
    "year": 1992,
    "category": "Seniors",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0249",
    "lastName": "BEN TAHER",
    "firstName": "Med Amine",
    "day": 30,
    "month": 8,
    "year": 2007,
    "category": "Cadets",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0329",
    "lastName": "BEN HSINE",
    "firstName": "Youssef",
    "day": 29,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "ASIAlia",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0028",
    "lastName": "ZRELLI",
    "firstName": "Oumaima",
    "day": 8,
    "month": 8,
    "year": 2004,
    "category": "Juniors",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0148",
    "lastName": "TRABELSI",
    "firstName": "Youssef",
    "day": 25,
    "month": 5,
    "year": 2004,
    "category": "Juniors",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0034",
    "lastName": "KEFI",
    "firstName": "Oumaima",
    "day": 31,
    "month": 5,
    "year": 2005,
    "category": "Juniors",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0055",
    "lastName": "MARZOUKI",
    "firstName": "Farah",
    "day": 19,
    "month": 5,
    "year": 2007,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0245",
    "lastName": "DRIDI",
    "firstName": "Med Amine",
    "day": 15,
    "month": 6,
    "year": 2007,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0246",
    "lastName": "BEN HMIDA",
    "firstName": "Iyed",
    "day": 8,
    "month": 2,
    "year": 2007,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0067",
    "lastName": "ZOUAOUI",
    "firstName": "Sarra",
    "day": 13,
    "month": 8,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0068",
    "lastName": "BRAHMI",
    "firstName": "Nejiba",
    "day": 15,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0069",
    "lastName": "BEN DHAOU",
    "firstName": "Meriem",
    "day": 21,
    "month": 7,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0279",
    "lastName": "GARCI",
    "firstName": "Wassim",
    "day": 15,
    "month": 11,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0280",
    "lastName": "DRIDI",
    "firstName": "Omar",
    "day": 29,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0281",
    "lastName": "BAHRI",
    "firstName": "Mortadha",
    "day": 10,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0282",
    "lastName": "BAHRI",
    "firstName": "Adem",
    "day": 13,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0414",
    "lastName": "SAHBENI",
    "firstName": "Youssef",
    "day": 17,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0415",
    "lastName": "ZOUAOUI",
    "firstName": "Ahmed",
    "day": 29,
    "month": 10,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0151",
    "lastName": "LAZZEM",
    "firstName": "Hiba",
    "day": 28,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0455",
    "lastName": "EL HADJ",
    "firstName": "Haydar",
    "day": 31,
    "month": 7,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0456",
    "lastName": "HNINI",
    "firstName": "Ahmed Mahmoud",
    "day": 29,
    "month": 10,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0457",
    "lastName": "LAZZEM",
    "firstName": "Hedi",
    "day": 28,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0166",
    "lastName": "DRIDI",
    "firstName": "Yassmine",
    "day": 4,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0167",
    "lastName": "RADHOUANI",
    "firstName": "Ritej",
    "day": 4,
    "month": 7,
    "year": 2013,
    "category": "Poussins",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0205",
    "lastName": "FRIDI",
    "firstName": "Mariem",
    "day": 30,
    "month": 7,
    "year": 2013,
    "category": "Poussins",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0206",
    "lastName": "OURADI",
    "firstName": "Ouswa",
    "day": 8,
    "month": 9,
    "year": 2013,
    "category": "Poussins",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0502",
    "lastName": "MECHRGUI",
    "firstName": "Yosri",
    "day": 6,
    "month": 8,
    "year": 2013,
    "category": "Poussins",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0204",
    "lastName": "BJAOUI",
    "firstName": "Roua",
    "day": 25,
    "month": 3,
    "year": 2014,
    "category": "Poussins",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0208",
    "lastName": "AYARI",
    "firstName": "Adem",
    "day": 6,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "ASIZ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0130",
    "lastName": "TRABELSI",
    "firstName": "Touka",
    "day": 16,
    "month": 12,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASIZ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0006",
    "lastName": "LOUATI",
    "firstName": "Jamel",
    "day": 21,
    "month": 12,
    "year": 1962,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "MUT-CTTMJAin 1",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0040",
    "lastName": "CHIKA",
    "firstName": "Aymen",
    "day": 15,
    "month": 7,
    "year": 1981,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0062",
    "lastName": "TRABELSI",
    "firstName": "Ahmed",
    "day": 25,
    "month": 9,
    "year": 1990,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0091",
    "lastName": "KRICHENE",
    "firstName": "Med Imed",
    "day": 17,
    "month": 2,
    "year": 1996,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0567",
    "lastName": "YOUSSEF",
    "firstName": "Najeh",
    "day": 13,
    "month": 10,
    "year": 2010,
    "category": "Minimes",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0568",
    "lastName": "RAYENE",
    "firstName": "Najeh",
    "day": 3,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0002",
    "lastName": "CHERIF",
    "firstName": "Ridha",
    "day": 10,
    "month": 1,
    "year": 1953,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0082",
    "lastName": "FAKHFEKH",
    "firstName": "Hichem",
    "day": 11,
    "month": 10,
    "year": 1995,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0090",
    "lastName": "BELFEKKI",
    "firstName": "Rami",
    "day": 25,
    "month": 9,
    "year": 1996,
    "category": "Seniors",
    "team": "ASMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0018",
    "lastName": "GOURAB",
    "firstName": "Nizar",
    "day": 2,
    "month": 9,
    "year": 1972,
    "category": "Seniors",
    "team": "ASS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0019",
    "lastName": "FRADJ",
    "firstName": "Abdelkader",
    "day": 2,
    "month": 2,
    "year": 1972,
    "category": "Seniors",
    "team": "ASS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0021",
    "lastName": "FRADJ",
    "firstName": "Mouez",
    "day": 13,
    "month": 12,
    "year": 1973,
    "category": "Seniors",
    "team": "ASS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0035",
    "lastName": "FRADJ",
    "firstName": "Iskander",
    "day": 23,
    "month": 11,
    "year": 1979,
    "category": "Seniors",
    "team": "ASS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0047",
    "lastName": "CHALLOUF",
    "firstName": "Sabri",
    "day": 31,
    "month": 5,
    "year": 1984,
    "category": "Seniors",
    "team": "ASS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0056",
    "lastName": "ARROUM",
    "firstName": "Walid",
    "day": 24,
    "month": 1,
    "year": 1987,
    "category": "Seniors",
    "team": "ASS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0155",
    "lastName": "GARREB",
    "firstName": "Bachar",
    "day": 7,
    "month": 8,
    "year": 2004,
    "category": "Juniors",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0295",
    "lastName": "KEHNA",
    "firstName": "Ala",
    "day": 20,
    "month": 8,
    "year": 2008,
    "category": "Cadets",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0333",
    "lastName": "HAMMOUDA",
    "firstName": "Rayen",
    "day": 26,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0425",
    "lastName": "KALLEL",
    "firstName": "Rayen",
    "day": 31,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0427",
    "lastName": "BEN ISMAEL",
    "firstName": "Mouhamed",
    "day": 23,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0624",
    "lastName": "BOUBAKER",
    "firstName": "Abdessalem Yassine",
    "day": 27,
    "month": 6,
    "year": 2007,
    "category": "Cadets",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 18
  },
  {
    "number": "M0625",
    "lastName": "BOUBAKER",
    "firstName": "Abderrahmen",
    "day": 21,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 19
  },
  {
    "number": "M0626",
    "lastName": "BEN AROUS",
    "firstName": "Sabri",
    "day": 16,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 20
  },
  {
    "number": "M0253",
    "lastName": "TBOLBI",
    "firstName": "Adem",
    "day": 12,
    "month": 9,
    "year": 2007,
    "category": "Cadets",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0254",
    "lastName": "KALLEL",
    "firstName": "Ahmed",
    "day": 5,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0255",
    "lastName": "HFAEIDH",
    "firstName": "Med Aziz",
    "day": 28,
    "month": 3,
    "year": 2007,
    "category": "Cadets",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0332",
    "lastName": "NASRAOUI",
    "firstName": "Med Aziz",
    "day": 27,
    "month": 3,
    "year": 2009,
    "category": "Minimes",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0424",
    "lastName": "GARREB",
    "firstName": "Adem",
    "day": 11,
    "month": 2,
    "year": 2011,
    "category": "Pupilles",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0428",
    "lastName": "BEN ISMAEL",
    "firstName": "Youssef",
    "day": 1,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "CEAKHJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0036",
    "lastName": "HAOUALA",
    "firstName": "Achref",
    "day": 12,
    "month": 7,
    "year": 1979,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0104",
    "lastName": "SAADAOUI",
    "firstName": "Mootaz",
    "day": 3,
    "month": 1,
    "year": 1999,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0178",
    "lastName": "GUERFEL",
    "firstName": "Yahiya",
    "day": 2,
    "month": 2,
    "year": 2005,
    "category": "Juniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0219",
    "lastName": "TOUATI",
    "firstName": "ISLEM",
    "day": 26,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "COS",
    "sex": "M",
    "transfert": "MUT-CTTAriana 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0275",
    "lastName": "SBOUI",
    "firstName": "Med Rayen",
    "day": 25,
    "month": 10,
    "year": 2008,
    "category": "Cadets",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0276",
    "lastName": "GUERFEL",
    "firstName": "Youssef",
    "day": 11,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0291",
    "lastName": "TOUATI",
    "firstName": "Ayoub",
    "day": 21,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "COS",
    "sex": "M",
    "transfert": "MUT-CTTAriana 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0633",
    "lastName": "KHLIF",
    "firstName": "Slim",
    "day": 22,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 27
  },
  {
    "number": "M0634",
    "lastName": "KHLIF",
    "firstName": "Firas",
    "day": 22,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 28
  },
  {
    "number": "M0001",
    "lastName": "GRAIDA",
    "firstName": "SALAH",
    "day": 17,
    "month": 3,
    "year": 1947,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0001",
    "lastName": "JABRI",
    "firstName": "Malika",
    "day": 17,
    "month": 9,
    "year": 1971,
    "category": "Seniors",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0003",
    "lastName": "MANNAI",
    "firstName": "Sonaya",
    "day": 12,
    "month": 12,
    "year": 1979,
    "category": "Seniors",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0004",
    "lastName": "KHARZI",
    "firstName": "Dhouha",
    "day": 2,
    "month": 10,
    "year": 1980,
    "category": "Seniors",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0072",
    "lastName": "CHAIEB",
    "firstName": "Oussama",
    "day": 7,
    "month": 11,
    "year": 1992,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0080",
    "lastName": "BEN HAJ MABROUK",
    "firstName": "Med Aymen",
    "day": 18,
    "month": 8,
    "year": 1994,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0101",
    "lastName": "BOUSLAMA",
    "firstName": "Rassem",
    "day": 26,
    "month": 12,
    "year": 1999,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0105",
    "lastName": "CHAABENE",
    "firstName": "RAYEN",
    "day": 26,
    "month": 11,
    "year": 2000,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0106",
    "lastName": "BEN KHALED",
    "firstName": "Ghassen",
    "day": 27,
    "month": 6,
    "year": 2000,
    "category": "Seniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0023",
    "lastName": "SEFER",
    "firstName": "Emna",
    "day": 14,
    "month": 12,
    "year": 2003,
    "category": "Juniors",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0161",
    "lastName": "HARACH",
    "firstName": "Yosri",
    "day": 27,
    "month": 8,
    "year": 2004,
    "category": "Juniors",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0053",
    "lastName": "BOUGHDIRI",
    "firstName": "Ranim",
    "day": 30,
    "month": 3,
    "year": 2007,
    "category": "Cadets",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0242",
    "lastName": "ZARROUK",
    "firstName": "Med Fadhel",
    "day": 19,
    "month": 1,
    "year": 2007,
    "category": "Cadets",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0066",
    "lastName": "HAMDI",
    "firstName": "Nour El Houda",
    "day": 9,
    "month": 4,
    "year": 2008,
    "category": "Cadets",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0290",
    "lastName": "HARRABI",
    "firstName": "Amenallah",
    "day": 21,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0306",
    "lastName": "AYACHI",
    "firstName": "Abderrazek",
    "day": 24,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0081",
    "lastName": "GHANNEM",
    "firstName": "Wiem",
    "day": 29,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0082",
    "lastName": "BEN ALI",
    "firstName": "Molka",
    "day": 29,
    "month": 8,
    "year": 2009,
    "category": "Minimes",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0083",
    "lastName": "BEN ALI",
    "firstName": "Yassmine",
    "day": 17,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0320",
    "lastName": "AROUI",
    "firstName": "Med Abderrahmen",
    "day": 13,
    "month": 3,
    "year": 2009,
    "category": "Minimes",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0367",
    "lastName": "NASRI",
    "firstName": "Chahine",
    "day": 23,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0368",
    "lastName": "GHANNEM",
    "firstName": "Mootez",
    "day": 18,
    "month": 9,
    "year": 2010,
    "category": "Minimes",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0149",
    "lastName": "HAMDI",
    "firstName": "Nada",
    "day": 17,
    "month": 8,
    "year": 2012,
    "category": "Pupilles",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0150",
    "lastName": "BOUGHDIRI",
    "firstName": "Rimes",
    "day": 28,
    "month": 10,
    "year": 2012,
    "category": "Pupilles",
    "team": "COS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0454",
    "lastName": "HAMDI",
    "firstName": "Youssef",
    "day": 18,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0524",
    "lastName": "MARZOUKI",
    "firstName": "Med Seddik",
    "day": 18,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "COS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0032",
    "lastName": "BEN KHALIFA",
    "firstName": "Sofiene",
    "day": 16,
    "month": 2,
    "year": 1979,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0039",
    "lastName": "BAY",
    "firstName": "Med Ali",
    "day": 26,
    "month": 7,
    "year": 1981,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0048",
    "lastName": "BAY",
    "firstName": "Nabil",
    "day": 8,
    "month": 10,
    "year": 1985,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0053",
    "lastName": "ZHIOUA",
    "firstName": "Mourad",
    "day": 31,
    "month": 1,
    "year": 1986,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0121",
    "lastName": "BEN AZZOUNA",
    "firstName": "Nassim",
    "day": 15,
    "month": 2,
    "year": 2001,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "MUT-PACT� 2",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0050",
    "lastName": "ZGEB",
    "firstName": "Mohammed",
    "day": 1,
    "month": 1,
    "year": 1986,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0051",
    "lastName": "LAAFIF",
    "firstName": "Youssef",
    "day": 16,
    "month": 8,
    "year": 1986,
    "category": "Seniors",
    "team": "COT�m",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0209",
    "lastName": "KRAEIM",
    "firstName": "Mouhamed",
    "day": 17,
    "month": 12,
    "year": 2006,
    "category": "Juniors",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0603",
    "lastName": "BAHRI",
    "firstName": "Adem",
    "day": 21,
    "month": 12,
    "year": 2007,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0289",
    "lastName": "KOUZANA",
    "firstName": "Houcine",
    "day": 8,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0310",
    "lastName": "BOUJNEH",
    "firstName": "Chamseddine",
    "day": 23,
    "month": 7,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0602",
    "lastName": "GARA",
    "firstName": "Med Taher",
    "day": 21,
    "month": 8,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0606",
    "lastName": "AMARA",
    "firstName": "Wassim",
    "day": 1,
    "month": 1,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0605",
    "lastName": "AMARA",
    "firstName": "Chedy",
    "day": 21,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0604",
    "lastName": "HAJRI",
    "firstName": "Yassine",
    "day": 20,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0420",
    "lastName": "KRAEIM",
    "firstName": "Abdelmlak",
    "day": 2,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0440",
    "lastName": "KACEM",
    "firstName": "Med Yassine",
    "day": 15,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0607",
    "lastName": "KRAEIM",
    "firstName": "Abdallah",
    "day": 14,
    "month": 2,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 2
  },
  {
    "number": "M0608",
    "lastName": "DIMASSI",
    "firstName": "Louay",
    "day": 24,
    "month": 7,
    "year": 2012,
    "category": "Pupilles",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 3
  },
  {
    "number": "M0609",
    "lastName": "MANNOUBI",
    "firstName": "Jihed",
    "day": 5,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 4
  },
  {
    "number": "M0287",
    "lastName": "ABDALLAH",
    "firstName": "Karim",
    "day": 14,
    "month": 2,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0288",
    "lastName": "OUERDANI",
    "firstName": "Omar",
    "day": 8,
    "month": 7,
    "year": 2008,
    "category": "Cadets",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0087",
    "lastName": "AYED",
    "firstName": "Sarra",
    "day": 18,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "CSH",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0380",
    "lastName": "MEKSI",
    "firstName": "Med Rami",
    "day": 23,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "CSH",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0003",
    "lastName": "CHAARAOUI",
    "firstName": "Mouhamed",
    "day": 6,
    "month": 2,
    "year": 1955,
    "category": "Seniors",
    "team": "CSHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0009",
    "lastName": "NOUREDDINE",
    "firstName": "Mounir",
    "day": 26,
    "month": 4,
    "year": 1964,
    "category": "Seniors",
    "team": "CSHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0060",
    "lastName": "NOOMENE",
    "firstName": "Sofiene",
    "day": 31,
    "month": 10,
    "year": 1989,
    "category": "Seniors",
    "team": "CSHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0402",
    "lastName": "BERRBIAI",
    "firstName": "Med Arselene",
    "day": 31,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CSHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0029",
    "lastName": "SALLEM",
    "firstName": "Saeb",
    "day": 21,
    "month": 8,
    "year": 1977,
    "category": "Seniors",
    "team": "CSIN",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0063",
    "lastName": "AJILI",
    "firstName": "Wael",
    "day": 1,
    "month": 2,
    "year": 1990,
    "category": "Seniors",
    "team": "CSIN",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0079",
    "lastName": "CHIHA",
    "firstName": "Amor",
    "day": 11,
    "month": 9,
    "year": 1994,
    "category": "Seniors",
    "team": "CSIN",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0084",
    "lastName": "SAHNOUN",
    "firstName": "Ayoub",
    "day": 29,
    "month": 4,
    "year": 1995,
    "category": "Seniors",
    "team": "CSIN",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0038",
    "lastName": "SALLEM",
    "firstName": "Raef",
    "day": 22,
    "month": 3,
    "year": 1980,
    "category": "Seniors",
    "team": "CSIN",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0071",
    "lastName": "ZRIBI",
    "firstName": "Amor",
    "day": 8,
    "month": 6,
    "year": 1992,
    "category": "Seniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0134",
    "lastName": "LOUMI",
    "firstName": "Med Raed",
    "day": 17,
    "month": 8,
    "year": 2003,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0143",
    "lastName": "JMAL",
    "firstName": "Mouhamed",
    "day": 26,
    "month": 9,
    "year": 2004,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0144",
    "lastName": "HADDAR",
    "firstName": "Ayoub",
    "day": 10,
    "month": 11,
    "year": 2004,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0145",
    "lastName": "ABID",
    "firstName": "Youssef",
    "day": 20,
    "month": 9,
    "year": 2004,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0163",
    "lastName": "ABID",
    "firstName": "Baya",
    "day": 7,
    "month": 10,
    "year": 2013,
    "category": "Poussins",
    "team": "CSMJSEzzit",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0067",
    "lastName": "GAFSI",
    "firstName": "Melek",
    "day": 21,
    "month": 9,
    "year": 1991,
    "category": "Seniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "MUT-CMJAin",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0102",
    "lastName": "AMMOUS",
    "firstName": "Omar",
    "day": 30,
    "month": 8,
    "year": 1999,
    "category": "Seniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "MUT-CTTR",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0138",
    "lastName": "HAMRANAH",
    "firstName": "Ali Mohammed",
    "day": 25,
    "month": 6,
    "year": 2003,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "LYB",
    "isValid": null
  },
  {
    "number": "M0177",
    "lastName": "BOUKHRIS",
    "firstName": "Rabia",
    "day": 10,
    "month": 6,
    "year": 2005,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0189",
    "lastName": "RAMMELI",
    "firstName": "Hssine Ahmed",
    "day": 9,
    "month": 2,
    "year": 2005,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "LYB",
    "isValid": null
  },
  {
    "number": "M0190",
    "lastName": "RAMMELI",
    "firstName": "Hssine Jamel",
    "day": 7,
    "month": 1,
    "year": 2005,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "LYB",
    "isValid": null
  },
  {
    "number": "M0204",
    "lastName": "BOUHAMED",
    "firstName": "Mouhamed",
    "day": 20,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0267",
    "lastName": "HAMRANAH",
    "firstName": "Hsine Med Ali",
    "day": 26,
    "month": 2,
    "year": 2007,
    "category": "Cadets",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "LYB",
    "isValid": null
  },
  {
    "number": "M0321",
    "lastName": "BOUKHRIS",
    "firstName": "Youssef",
    "day": 26,
    "month": 8,
    "year": 2009,
    "category": "Minimes",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0322",
    "lastName": "KAMMOUN",
    "firstName": "Youssef",
    "day": 13,
    "month": 2,
    "year": 2009,
    "category": "Minimes",
    "team": "CSMJSEzzit",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0059",
    "lastName": "GHANNOUCHI",
    "firstName": "Issam",
    "day": 28,
    "month": 4,
    "year": 1988,
    "category": "Seniors",
    "team": "CSMJSfax",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0587",
    "lastName": "BLAL",
    "firstName": "Nawfel",
    "day": 27,
    "month": 6,
    "year": 1965,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0007",
    "lastName": "HAYDER",
    "firstName": "Mourad",
    "day": 9,
    "month": 7,
    "year": 1963,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0011",
    "lastName": "BENZARTI",
    "firstName": "FAOUZI",
    "day": 15,
    "month": 11,
    "year": 1966,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0057",
    "lastName": "ABIDI",
    "firstName": "Rafaa",
    "day": 14,
    "month": 8,
    "year": 1988,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0097",
    "lastName": "ABIDI",
    "firstName": "Iheb",
    "day": 18,
    "month": 3,
    "year": 1997,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0107",
    "lastName": "BENZARTI",
    "firstName": "Melek",
    "day": 5,
    "month": 11,
    "year": 2000,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0188",
    "lastName": "JDIDI",
    "firstName": "Mahmoud",
    "day": 27,
    "month": 4,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0210",
    "lastName": "TOUATI",
    "firstName": "Adem",
    "day": 26,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "MUT-CTTAriana 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0212",
    "lastName": "FAZZENI",
    "firstName": "Ahmed",
    "day": 27,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0251",
    "lastName": "JHAYECH",
    "firstName": "Sabri",
    "day": 5,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0293",
    "lastName": "BENZARTI",
    "firstName": "Taha",
    "day": 21,
    "month": 10,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0307",
    "lastName": "BEN HADJ HASSINE",
    "firstName": "Mouhamed",
    "day": 30,
    "month": 11,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0462",
    "lastName": "BENZARTI",
    "firstName": "Ahmed",
    "day": 30,
    "month": 10,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0509",
    "lastName": "BEN RJAB",
    "firstName": "Mahdi",
    "day": 14,
    "month": 6,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0600",
    "lastName": "SAHRAOUI",
    "firstName": "Iyed",
    "day": 21,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0220",
    "lastName": "MAMLOUK",
    "firstName": "Nourane",
    "day": 22,
    "month": 4,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTAriana",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0529",
    "lastName": "RIAHI",
    "firstName": "Aouss",
    "day": 9,
    "month": 9,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0663",
    "lastName": "BEN ZID",
    "firstName": "Anas",
    "day": 29,
    "month": 6,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0042",
    "lastName": "RIAHI",
    "firstName": "Anis",
    "day": 26,
    "month": 1,
    "year": 1981,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0049",
    "lastName": "BEN HAMMOUDA",
    "firstName": "Ghazi",
    "day": 26,
    "month": 7,
    "year": 1985,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0069",
    "lastName": "KHALFA",
    "firstName": "Ibrahim",
    "day": 30,
    "month": 7,
    "year": 1991,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0096",
    "lastName": "BENZARTI",
    "firstName": "Anas",
    "day": 4,
    "month": 4,
    "year": 1997,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0099",
    "lastName": "ALI",
    "firstName": "Med Yassine",
    "day": 7,
    "month": 10,
    "year": 1998,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0129",
    "lastName": "MOUAKHER",
    "firstName": "Aziz",
    "day": 21,
    "month": 1,
    "year": 2002,
    "category": "Seniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0182",
    "lastName": "ORFI",
    "firstName": "Amine",
    "day": 13,
    "month": 7,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0211",
    "lastName": "ORFI",
    "firstName": "Anis",
    "day": 17,
    "month": 11,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0220",
    "lastName": "BATNI",
    "firstName": "Sofiene Youssef",
    "day": 12,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0292",
    "lastName": "JHAYECH",
    "firstName": "Med Fedi",
    "day": 27,
    "month": 4,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0113",
    "lastName": "SOUA",
    "firstName": "Jannet",
    "day": 4,
    "month": 7,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTAriana",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0134",
    "lastName": "KHERIJI",
    "firstName": "Sofiene",
    "day": 30,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTAriana",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0421",
    "lastName": "GHORBEL",
    "firstName": "Med Yassine",
    "day": 28,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0437",
    "lastName": "GHORBEL",
    "firstName": "Med Yassine",
    "day": 28,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0474",
    "lastName": "BORNI",
    "firstName": "Ismael",
    "day": 13,
    "month": 3,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0510",
    "lastName": "BORNI",
    "firstName": "Abderrahmen",
    "day": 14,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTAriana",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0076",
    "lastName": "OUERGHEMMI",
    "firstName": "Seifeddine",
    "day": 27,
    "month": 9,
    "year": 1993,
    "category": "Seniors",
    "team": "CTTBAmri",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0098",
    "lastName": "OUERGHEMMI",
    "firstName": "Mootez",
    "day": 3,
    "month": 12,
    "year": 1997,
    "category": "Seniors",
    "team": "CTTBAmri",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0262",
    "lastName": "HBIBI",
    "firstName": "Bilel",
    "day": 17,
    "month": 5,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTBAmri",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0340",
    "lastName": "HBIBI",
    "firstName": "Mahdi",
    "day": 17,
    "month": 9,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTBAmri",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0391",
    "lastName": "NAHDI",
    "firstName": "Imed",
    "day": 2,
    "month": 9,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTBAmri",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0436",
    "lastName": "HBIBI",
    "firstName": "Mouhamed",
    "day": 25,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTBAmri",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0659",
    "lastName": "DHAOUADI",
    "firstName": "Mouhamed",
    "day": 8,
    "month": 9,
    "year": 1960,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0005",
    "lastName": "SAFRAOUI",
    "firstName": "Samir",
    "day": 18,
    "month": 7,
    "year": 1962,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0008",
    "lastName": "ABID",
    "firstName": "Lotfi",
    "day": 29,
    "month": 1,
    "year": 1964,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0022",
    "lastName": "SAADANI",
    "firstName": "Tarek",
    "day": 14,
    "month": 7,
    "year": 1974,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0023",
    "lastName": "HADDED",
    "firstName": "Hsen",
    "day": 26,
    "month": 6,
    "year": 1974,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0147",
    "lastName": "NOUREDDINE",
    "firstName": "Med Hedi",
    "day": 5,
    "month": 11,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "  ",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0411",
    "lastName": "KAROUI",
    "firstName": "Ahmed",
    "day": 21,
    "month": 2,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0412",
    "lastName": "HAMMEMI",
    "firstName": "Youssef",
    "day": 14,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0491",
    "lastName": "CHERIF",
    "firstName": "Med Youssef",
    "day": 21,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0661",
    "lastName": "ARBI",
    "firstName": "Ahmed",
    "day": 30,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0660",
    "lastName": "KENI",
    "firstName": "Amenallah",
    "day": 17,
    "month": 7,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0662",
    "lastName": "GHARBI",
    "firstName": "Akrem",
    "day": 2,
    "month": 12,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0010",
    "lastName": "ABID",
    "firstName": "Walid",
    "day": 3,
    "month": 4,
    "year": 1966,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0113",
    "lastName": "BEN MANSOUR",
    "firstName": "Yassine",
    "day": 26,
    "month": 9,
    "year": 2001,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0128",
    "lastName": "HAMROUNI",
    "firstName": "Louay",
    "day": 19,
    "month": 3,
    "year": 2002,
    "category": "Seniors",
    "team": "CTTG",
    "sex": "M",
    "transfert": "MUT-CTTSoliman",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0489",
    "lastName": "AKECHA",
    "firstName": "Rayen",
    "day": 2,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0490",
    "lastName": "TRABELSI",
    "firstName": "Med Kilani",
    "day": 27,
    "month": 6,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0500",
    "lastName": "CHERIF",
    "firstName": "Yahiya",
    "day": 12,
    "month": 9,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0501",
    "lastName": "AMIRI",
    "firstName": "Zid",
    "day": 5,
    "month": 9,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0525",
    "lastName": "RAGOUBI",
    "firstName": "Helmi",
    "day": 22,
    "month": 8,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0541",
    "lastName": "AKECHA",
    "firstName": "Med Amine",
    "day": 10,
    "month": 6,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTG",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0576",
    "lastName": "FAYEDH",
    "firstName": "Mahdi",
    "day": 4,
    "month": 1,
    "year": 2002,
    "category": "Seniors",
    "team": "CTTHammamet",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0575",
    "lastName": "KACHKACHE",
    "firstName": "Med Amine",
    "day": 2,
    "month": 8,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTHammamet",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0577",
    "lastName": "KACHKACHE",
    "firstName": "Zakaria",
    "day": 13,
    "month": 3,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTHammamet",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0599",
    "lastName": "SOUISSI",
    "firstName": "Youssef",
    "day": 17,
    "month": 4,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0237",
    "lastName": "HANNECHI",
    "firstName": "Med Jaafar",
    "day": 29,
    "month": 3,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0269",
    "lastName": "STITI",
    "firstName": "Ibrahim",
    "day": 29,
    "month": 7,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0595",
    "lastName": "SOUISSI",
    "firstName": "Fares",
    "day": 2,
    "month": 7,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0101",
    "lastName": "HANNECHI",
    "firstName": "Essia",
    "day": 23,
    "month": 7,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTHL",
    "sex": "F",
    "transfert": "MUT-CSHL 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0139",
    "lastName": "KARBOUCHI",
    "firstName": "Ameni",
    "day": 23,
    "month": 7,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTHL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0401",
    "lastName": "TRIKI",
    "firstName": "Mouhamed",
    "day": 12,
    "month": 12,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0596",
    "lastName": "SOUISSI",
    "firstName": "Mahdi",
    "day": 10,
    "month": 6,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0598",
    "lastName": "TRIKI",
    "firstName": "Med Mehrez",
    "day": 8,
    "month": 6,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0207",
    "lastName": "STITI",
    "firstName": "Hajer",
    "day": 31,
    "month": 1,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTHL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0594",
    "lastName": "MOKHTAR",
    "firstName": "Omar",
    "day": 14,
    "month": 3,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0597",
    "lastName": "TRIKI",
    "firstName": "Yassine",
    "day": 7,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0213",
    "lastName": "KOUDHAAI",
    "firstName": "Mariem",
    "day": 26,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTHL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 15
  },
  {
    "number": "F0214",
    "lastName": "KOUDHAAI",
    "firstName": "Nourane",
    "day": 17,
    "month": 10,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTHL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 16
  },
  {
    "number": "M0632",
    "lastName": "KCHAOU",
    "firstName": "Adem",
    "day": 12,
    "month": 4,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 26
  },
  {
    "number": "M0139",
    "lastName": "AJMI",
    "firstName": "Ahmed",
    "day": 18,
    "month": 9,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0238",
    "lastName": "OUERDANI",
    "firstName": "OUERDANI Ahmed",
    "day": 25,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0270",
    "lastName": "BEN AISSA",
    "firstName": "Med Hedi",
    "day": 27,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0075",
    "lastName": "SBAII",
    "firstName": "Bochra",
    "day": 19,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTHL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0356",
    "lastName": "MEFTEH",
    "firstName": "Ahmed",
    "day": 28,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTHL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0200",
    "lastName": "SOUIHLI",
    "firstName": "Abderrazek",
    "day": 26,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0247",
    "lastName": "SASSI",
    "firstName": "Haydar",
    "day": 25,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0273",
    "lastName": "MAKHLOUF",
    "firstName": "Neji",
    "day": 12,
    "month": 6,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0304",
    "lastName": "SALAH",
    "firstName": "Youssef",
    "day": 1,
    "month": 8,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0328",
    "lastName": "BOUCETTA",
    "firstName": "Rayen",
    "day": 23,
    "month": 8,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0363",
    "lastName": "FADHEL",
    "firstName": "Iyed",
    "day": 10,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0373",
    "lastName": "ABED",
    "firstName": "Med Anas",
    "day": 10,
    "month": 11,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0374",
    "lastName": "MAKHLOUF",
    "firstName": "Ayoub",
    "day": 24,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0123",
    "lastName": "SASSI",
    "firstName": "Islem",
    "day": 8,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0148",
    "lastName": "LAMTI CHARGUI",
    "firstName": "Salma",
    "day": 22,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0458",
    "lastName": "SOUIHLI",
    "firstName": "Ibrahim",
    "day": 28,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0475",
    "lastName": "SANDID",
    "firstName": "Ayoub",
    "day": 16,
    "month": 10,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0168",
    "lastName": "ESSID",
    "firstName": "Maram",
    "day": 14,
    "month": 8,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0497",
    "lastName": "FADHEL",
    "firstName": "Yassine",
    "day": 13,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0175",
    "lastName": "LAMTI CHARGUI",
    "firstName": "Yassmine",
    "day": 2,
    "month": 8,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0543",
    "lastName": "SANDID",
    "firstName": "Med Malek",
    "day": 4,
    "month": 1,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0191",
    "lastName": "NAJAH",
    "firstName": "Meriem",
    "day": 24,
    "month": 6,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0610",
    "lastName": "BOUSRIH",
    "firstName": "Youssef",
    "day": 29,
    "month": 1,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 5
  },
  {
    "number": "M0611",
    "lastName": "BEN SALAH",
    "firstName": "Ahmed",
    "day": 8,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 6
  },
  {
    "number": "M0612",
    "lastName": "BOUSRIH",
    "firstName": "Mouhamed",
    "day": 13,
    "month": 7,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 7
  },
  {
    "number": "M0613",
    "lastName": "BEN IBRAHIM",
    "firstName": "Abderrahmen",
    "day": 17,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 8
  },
  {
    "number": "M0614",
    "lastName": "MABROUK",
    "firstName": "Yahiya",
    "day": 25,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 9
  },
  {
    "number": "M0615",
    "lastName": "SASSI",
    "firstName": "Ahmed",
    "day": 30,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 10
  },
  {
    "number": "M0616",
    "lastName": "BOUCETTA",
    "firstName": "Marouene",
    "day": 12,
    "month": 2,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 11
  },
  {
    "number": "M0617",
    "lastName": "MHENNI",
    "firstName": "Mourad",
    "day": 13,
    "month": 5,
    "year": 1968,
    "category": "Seniors",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 12
  },
  {
    "number": "M0149",
    "lastName": "ABED",
    "firstName": "Dhia",
    "day": 11,
    "month": 8,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0171",
    "lastName": "CHAKROUN",
    "firstName": "Amir",
    "day": 29,
    "month": 6,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTL",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0124",
    "lastName": "MAKHLOUF",
    "firstName": "Halima",
    "day": 15,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTL",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0165",
    "lastName": "RAHAL",
    "firstName": "Achref",
    "day": 13,
    "month": 4,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0192",
    "lastName": "CHEBIL",
    "firstName": "Hazem",
    "day": 26,
    "month": 4,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0193",
    "lastName": "MAHDOUI",
    "firstName": "Nasreddine",
    "day": 20,
    "month": 4,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0655",
    "lastName": "HEMADI",
    "firstName": "Raed",
    "day": 1,
    "month": 11,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0326",
    "lastName": "BOUFRIKHA",
    "firstName": "Abdelaziz",
    "day": 26,
    "month": 9,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0344",
    "lastName": "FADHLOUN",
    "firstName": "Yahiya",
    "day": 2,
    "month": 10,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0439",
    "lastName": "MAATOUG",
    "firstName": "Haroun",
    "day": 29,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0653",
    "lastName": "CHARFI",
    "firstName": "Med Hadi",
    "day": 24,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0556",
    "lastName": "MAATALLAH",
    "firstName": "Med Yassine",
    "day": 18,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0557",
    "lastName": "SASSI",
    "firstName": "Youssef",
    "day": 28,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0654",
    "lastName": "BEN ABDALLAH",
    "firstName": "Iyed",
    "day": 1,
    "month": 10,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0555",
    "lastName": "HASSeniors",
    "firstName": "Zayd",
    "day": 1,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0652",
    "lastName": "BEN HADJ RHOUMA",
    "firstName": "Oussama",
    "day": 28,
    "month": 7,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0651",
    "lastName": "BEN ABDALLAH",
    "firstName": "Wassim",
    "day": 6,
    "month": 5,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0558",
    "lastName": "ZAIER",
    "firstName": "Youssef",
    "day": 26,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 2
  },
  {
    "number": "M0559",
    "lastName": "MAATALLAH",
    "firstName": "Youssef",
    "day": 8,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 3
  },
  {
    "number": "M0164",
    "lastName": "BEN ABDALLAH",
    "firstName": "Iskander",
    "day": 22,
    "month": 7,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0191",
    "lastName": "BOUFRIKHA",
    "firstName": "Abdallah",
    "day": 7,
    "month": 6,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0227",
    "lastName": "AGUIREB",
    "firstName": "Yassine",
    "day": 11,
    "month": 3,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0228",
    "lastName": "RAHAL",
    "firstName": "Oussama",
    "day": 4,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0311",
    "lastName": "ACHOUR",
    "firstName": "Yahya",
    "day": 14,
    "month": 10,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0343",
    "lastName": "RASSAS",
    "firstName": "Youssef",
    "day": 15,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0511",
    "lastName": "TALBI",
    "firstName": "Seifeddine",
    "day": 5,
    "month": 8,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0536",
    "lastName": "TALBI",
    "firstName": "Koussay",
    "day": 15,
    "month": 12,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTM",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0584",
    "lastName": "SALLAMI",
    "firstName": "Firas",
    "day": 24,
    "month": 10,
    "year": 1999,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0109",
    "lastName": "SALAH",
    "firstName": "Atef",
    "day": 27,
    "month": 9,
    "year": 2000,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0185",
    "lastName": "CHAKROUN",
    "firstName": "Med Khalifa",
    "day": 28,
    "month": 7,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0186",
    "lastName": "BOUCHEKOUA",
    "firstName": "Med Walid",
    "day": 24,
    "month": 5,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0261",
    "lastName": "OUALI",
    "firstName": "Nasser Amine",
    "day": 19,
    "month": 7,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0300",
    "lastName": "LOUMI",
    "firstName": "Youssef",
    "day": 1,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0301",
    "lastName": "MASMOUDI",
    "firstName": "Youssef",
    "day": 7,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0303",
    "lastName": "BEN MASSOUD",
    "firstName": "Youssef",
    "day": 2,
    "month": 2,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0585",
    "lastName": "SAIALA",
    "firstName": "Mohamed",
    "day": 21,
    "month": 10,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0096",
    "lastName": "MASMOUDI",
    "firstName": "Tasnime",
    "day": 18,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0339",
    "lastName": "GHOZZI",
    "firstName": "Ayoub",
    "day": 23,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0387",
    "lastName": "AFFESS",
    "firstName": "Hassene",
    "day": 15,
    "month": 9,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0390",
    "lastName": "LOUMI",
    "firstName": "Yassine",
    "day": 10,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0396",
    "lastName": "CHARFI",
    "firstName": "Ahmed",
    "day": 19,
    "month": 11,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0586",
    "lastName": "SAIALA",
    "firstName": "Yassine",
    "day": 5,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0126",
    "lastName": "ZITOUNI",
    "firstName": "Nadine",
    "day": 25,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "F",
    "transfert": "MUT-AS 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0434",
    "lastName": "HAMMAMI",
    "firstName": "Youssef",
    "day": 16,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0435",
    "lastName": "SMAOUI",
    "firstName": "Riadh",
    "day": 10,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0441",
    "lastName": "BEN ARAB",
    "firstName": "Mouhamed",
    "day": 9,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0472",
    "lastName": "ABDELMOULA",
    "firstName": "Med Aziz",
    "day": 26,
    "month": 6,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0473",
    "lastName": "KSOMTINI",
    "firstName": "Mohsen",
    "day": 17,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0477",
    "lastName": "CHARFI",
    "firstName": "Yassine",
    "day": 24,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0478",
    "lastName": "CHARFI",
    "firstName": "Adem",
    "day": 26,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0540",
    "lastName": "BEN ARAB",
    "firstName": "Mahdi",
    "day": 19,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0547",
    "lastName": "LOUMI",
    "firstName": "Mouhamed",
    "day": 28,
    "month": 6,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0627",
    "lastName": "MOULAA",
    "firstName": "Med Amine",
    "day": 4,
    "month": 10,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 21
  },
  {
    "number": "M0628",
    "lastName": "SIALA",
    "firstName": "Ahmed",
    "day": 26,
    "month": 10,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 22
  },
  {
    "number": "M0629",
    "lastName": "AMOUS",
    "firstName": "Hamza Younes",
    "day": 8,
    "month": 9,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 23
  },
  {
    "number": "M0630",
    "lastName": "KAMMOUN",
    "firstName": "Mahdi",
    "day": 13,
    "month": 8,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 24
  },
  {
    "number": "M0631",
    "lastName": "SIALA",
    "firstName": "Mouhamed",
    "day": 2,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 25
  },
  {
    "number": "M0045",
    "lastName": "KCHAOU",
    "firstName": "Amor",
    "day": 3,
    "month": 4,
    "year": 1983,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0065",
    "lastName": "BELFEKKI",
    "firstName": "Rabia",
    "day": 23,
    "month": 4,
    "year": 1990,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0086",
    "lastName": "RAKIK",
    "firstName": "Haithem",
    "day": 18,
    "month": 5,
    "year": 1995,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0103",
    "lastName": "KRICHENE",
    "firstName": "Walid",
    "day": 28,
    "month": 5,
    "year": 1999,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0108",
    "lastName": "SALLEMI",
    "firstName": "Amor",
    "day": 19,
    "month": 5,
    "year": 2000,
    "category": "Seniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0160",
    "lastName": "CHERIF",
    "firstName": "Mouhamed",
    "day": 20,
    "month": 11,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0162",
    "lastName": "JMAL",
    "firstName": "Med Amine",
    "day": 8,
    "month": 4,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0187",
    "lastName": "BOUZID",
    "firstName": "Ahmed",
    "day": 23,
    "month": 7,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0265",
    "lastName": "BOUJELBEN",
    "firstName": "Ahmed",
    "day": 31,
    "month": 8,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0302",
    "lastName": "LOUZ",
    "firstName": "Amor",
    "day": 16,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0345",
    "lastName": "CHAARI",
    "firstName": "Ahmed",
    "day": 4,
    "month": 8,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0388",
    "lastName": "ALOULOU",
    "firstName": "Mouhamed",
    "day": 13,
    "month": 11,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0389",
    "lastName": "JMAL",
    "firstName": "Ahmed",
    "day": 20,
    "month": 2,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0395",
    "lastName": "BOUKHRIS",
    "firstName": "Hamdi",
    "day": 5,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0471",
    "lastName": "KAMMOUN",
    "firstName": "Fatma",
    "day": 25,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTMJAin",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0170",
    "lastName": "BOUJELBEN",
    "firstName": "Meriem",
    "day": 14,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTMJAin",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0180",
    "lastName": "BOUKHRIS",
    "firstName": "Yassmine",
    "day": 29,
    "month": 12,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTMJAin",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0013",
    "lastName": "BOUABIDI",
    "firstName": "Sami",
    "day": 15,
    "month": 10,
    "year": 1967,
    "category": "Seniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0026",
    "lastName": "DHIB",
    "firstName": "Atef",
    "day": 11,
    "month": 1,
    "year": 1976,
    "category": "Seniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0030",
    "lastName": "MASTOURI",
    "firstName": "Khalifa",
    "day": 4,
    "month": 8,
    "year": 1977,
    "category": "Seniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0034",
    "lastName": "RJAB",
    "firstName": "Ali",
    "day": 12,
    "month": 9,
    "year": 1979,
    "category": "Seniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0055",
    "lastName": "DHIFI",
    "firstName": "Seddik",
    "day": 18,
    "month": 11,
    "year": 1986,
    "category": "Seniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0120",
    "lastName": "RAMOUL",
    "firstName": "Jawher",
    "day": 23,
    "month": 8,
    "year": 2001,
    "category": "Seniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "MUT-PACT�",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0150",
    "lastName": "BOUABIDI",
    "firstName": "Youssef",
    "day": 23,
    "month": 4,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTMJDeg",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0012",
    "lastName": "STA",
    "firstName": "Mourad",
    "day": 9,
    "month": 4,
    "year": 1967,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0002",
    "lastName": "GHOURABI",
    "firstName": "Zahra",
    "day": 21,
    "month": 7,
    "year": 1977,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0570",
    "lastName": "CHAEFI",
    "firstName": "Walid",
    "day": 12,
    "month": 1,
    "year": 1977,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0041",
    "lastName": "FELISS",
    "firstName": "Aymen",
    "day": 3,
    "month": 4,
    "year": 1981,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "MUT-ASCB 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0044",
    "lastName": "MHAMDI",
    "firstName": "Adel",
    "day": 16,
    "month": 3,
    "year": 1982,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0569",
    "lastName": "LITAIEM",
    "firstName": "Mouhamed",
    "day": 26,
    "month": 2,
    "year": 1995,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0125",
    "lastName": "STA",
    "firstName": "Med Amine",
    "day": 22,
    "month": 7,
    "year": 2002,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0146",
    "lastName": "STA",
    "firstName": "Khalil",
    "day": 4,
    "month": 1,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0248",
    "lastName": "BEN ACHOUR",
    "firstName": "Yassine",
    "day": 18,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0286",
    "lastName": "OUARDA",
    "firstName": "Youssef",
    "day": 21,
    "month": 10,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0341",
    "lastName": "BOUAZIZI",
    "firstName": "Jasser",
    "day": 26,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0379",
    "lastName": "MBAREK",
    "firstName": "Taha",
    "day": 8,
    "month": 11,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0392",
    "lastName": "CHERIF",
    "firstName": "Omar",
    "day": 25,
    "month": 9,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0393",
    "lastName": "BOUATTOUR",
    "firstName": "Mouhamed",
    "day": 10,
    "month": 2,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0593",
    "lastName": "CHARFI",
    "firstName": "Mouhamed",
    "day": 11,
    "month": 1,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0132",
    "lastName": "BEN ACHOUR",
    "firstName": "Zeineb",
    "day": 2,
    "month": 6,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTR",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0133",
    "lastName": "MASMOUDI",
    "firstName": "Oumaima",
    "day": 17,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTR",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0461",
    "lastName": "STA",
    "firstName": "Anas",
    "day": 16,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0504",
    "lastName": "MBAREK",
    "firstName": "Adem",
    "day": 8,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0528",
    "lastName": "MASMOUDI",
    "firstName": "Yahiya",
    "day": 15,
    "month": 11,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0535",
    "lastName": "BOUAZIZI",
    "firstName": "Seddik",
    "day": 2,
    "month": 1,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0592",
    "lastName": "CHARFI",
    "firstName": "Nour",
    "day": 28,
    "month": 5,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0025",
    "lastName": "HMISSI",
    "firstName": "Amor",
    "day": 14,
    "month": 1,
    "year": 1975,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0033",
    "lastName": "BOUATTOUR",
    "firstName": "Karim",
    "day": 5,
    "month": 1,
    "year": 1979,
    "category": "Seniors",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0056",
    "lastName": "BOUKABRINE",
    "firstName": "Eya",
    "day": 6,
    "month": 12,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTR",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0108",
    "lastName": "BOUKABRINE",
    "firstName": "Rawen",
    "day": 15,
    "month": 12,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0111",
    "lastName": "MEZNED",
    "firstName": "Yosr",
    "day": 26,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTR",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0419",
    "lastName": "HABLI",
    "firstName": "Yassine",
    "day": 18,
    "month": 8,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0548",
    "lastName": "BEN MIME",
    "firstName": "Iskander",
    "day": 16,
    "month": 4,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTR",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0221",
    "lastName": "MNASRI",
    "firstName": "Abdelaziz",
    "day": 14,
    "month": 6,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTSBouzid",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0263",
    "lastName": "BOUZIDI",
    "firstName": "Walid",
    "day": 5,
    "month": 7,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTSBouzid",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0264",
    "lastName": "LAABIDI",
    "firstName": "Sejed",
    "day": 18,
    "month": 1,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTSBouzid",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0342",
    "lastName": "LAABIDI",
    "firstName": "Med Zakaria",
    "day": 3,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTSBouzid",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0136",
    "lastName": "MNASRI",
    "firstName": "Amel",
    "day": 8,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0169",
    "lastName": "BOUZIDI",
    "firstName": "Meriem",
    "day": 2,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0178",
    "lastName": "BOUZIDI",
    "firstName": "Nour",
    "day": 10,
    "month": 1,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0537",
    "lastName": "BOUZIDI",
    "firstName": "Taha",
    "day": 27,
    "month": 9,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTSBouzid",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0188",
    "lastName": "BOUZIDI",
    "firstName": "Nesrine",
    "day": 9,
    "month": 11,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0394",
    "lastName": "LAABIDIYA",
    "firstName": "Hamza",
    "day": 1,
    "month": 2,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTSBouzid",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0154",
    "lastName": "SAIDI",
    "firstName": "Rahaf",
    "day": 7,
    "month": 3,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0187",
    "lastName": "SAIDI",
    "firstName": "Yosr",
    "day": 3,
    "month": 10,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0193",
    "lastName": "JABALLI",
    "firstName": "Rahaf",
    "day": 2,
    "month": 7,
    "year": 2017,
    "category": "Poussins",
    "team": "CTTSBouzid",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0136",
    "lastName": "EL HIF",
    "firstName": "Youssef",
    "day": 1,
    "month": 9,
    "year": 2003,
    "category": "Juniors",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0137",
    "lastName": "HOUIDI",
    "firstName": "Mahdi",
    "day": 12,
    "month": 1,
    "year": 2003,
    "category": "Juniors",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0159",
    "lastName": "BEN ARFA",
    "firstName": "Hedi",
    "day": 30,
    "month": 3,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0257",
    "lastName": "BEN ARFA",
    "firstName": "Lotfi",
    "day": 26,
    "month": 2,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0258",
    "lastName": "HAZGUI",
    "firstName": "Med Amine",
    "day": 1,
    "month": 1,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0336",
    "lastName": "MOKLINE",
    "firstName": "Med Amine",
    "day": 13,
    "month": 5,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0429",
    "lastName": "BEN ALI",
    "firstName": "Abderrahmen",
    "day": 17,
    "month": 10,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0430",
    "lastName": "MEDDEB",
    "firstName": "Wadi",
    "day": 14,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0431",
    "lastName": "AMOURI",
    "firstName": "Iyed",
    "day": 18,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0465",
    "lastName": "HAMROUNI",
    "firstName": "Youssef",
    "day": 23,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0466",
    "lastName": "AOUNALLAH",
    "firstName": "Med Amine",
    "day": 18,
    "month": 2,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0467",
    "lastName": "SITI",
    "firstName": "Med Rayen",
    "day": 15,
    "month": 1,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0468",
    "lastName": "OUNI",
    "firstName": "Med Aziz",
    "day": 8,
    "month": 3,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTSoliman",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0166",
    "lastName": "LAKEHAL",
    "firstName": "Med Wassim",
    "day": 6,
    "month": 1,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0194",
    "lastName": "NEJI",
    "firstName": "Ayoub",
    "day": 29,
    "month": 6,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0573",
    "lastName": "KHAYAT",
    "firstName": "Omar",
    "day": 27,
    "month": 7,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0229",
    "lastName": "DALDOUL",
    "firstName": "Mezri",
    "day": 3,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0230",
    "lastName": "CHOUCHENE",
    "firstName": "Sedki",
    "day": 3,
    "month": 5,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0231",
    "lastName": "CHAIEB",
    "firstName": "Firas",
    "day": 29,
    "month": 6,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0099",
    "lastName": "CHAIEB",
    "firstName": "Ferdaws",
    "day": 3,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0346",
    "lastName": "DALDOUL",
    "firstName": "Med Aziz",
    "day": 20,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0347",
    "lastName": "MILI",
    "firstName": "Mooeyed",
    "day": 26,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0352",
    "lastName": "RIAHI",
    "firstName": "Rached",
    "day": 18,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0444",
    "lastName": "HENI",
    "firstName": "Jihed",
    "day": 25,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0445",
    "lastName": "DALDOUL",
    "firstName": "Med Amine",
    "day": 7,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0479",
    "lastName": "MILI",
    "firstName": "Iyed",
    "day": 14,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0485",
    "lastName": "BOUTARA",
    "firstName": "Med Akrem",
    "day": 3,
    "month": 2,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0486",
    "lastName": "DALDOUL",
    "firstName": "Rayen",
    "day": 30,
    "month": 9,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0487",
    "lastName": "RIAHI",
    "firstName": "Zayden",
    "day": 13,
    "month": 7,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0488",
    "lastName": "FERJANI",
    "firstName": "Med Takieddine",
    "day": 30,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0512",
    "lastName": "MILI",
    "firstName": "Med Manaa",
    "day": 29,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0513",
    "lastName": "CHOUCHENE",
    "firstName": "Mouheb",
    "day": 12,
    "month": 5,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0517",
    "lastName": "AOUN",
    "firstName": "Omar",
    "day": 5,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0181",
    "lastName": "MILI",
    "firstName": "Molka",
    "day": 20,
    "month": 1,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0538",
    "lastName": "CHOUBA",
    "firstName": "Med Yassine",
    "day": 5,
    "month": 11,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0539",
    "lastName": "GHARSALLAH",
    "firstName": "Ahmed",
    "day": 10,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0571",
    "lastName": "BOUTARA",
    "firstName": "Fady",
    "day": 9,
    "month": 9,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0574",
    "lastName": "HANI",
    "firstName": "Jawed",
    "day": 6,
    "month": 10,
    "year": 2014,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0183",
    "lastName": "DALDOUL",
    "firstName": "Eya",
    "day": 17,
    "month": 6,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0549",
    "lastName": "AOUN",
    "firstName": "Sajed",
    "day": 25,
    "month": 11,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0550",
    "lastName": "BEN HSeniors",
    "firstName": "RAYEN",
    "day": 12,
    "month": 10,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0551",
    "lastName": "FERJANI",
    "firstName": "Anes",
    "day": 21,
    "month": 5,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0552",
    "lastName": "LAKHEL",
    "firstName": "Ahmed",
    "day": 25,
    "month": 1,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0572",
    "lastName": "ZABBEDI",
    "firstName": "Mootaz",
    "day": 11,
    "month": 7,
    "year": 2016,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0399",
    "lastName": "NEJI",
    "firstName": "Youssef",
    "day": 8,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 13
  },
  {
    "number": "M0027",
    "lastName": "DALDOUL",
    "firstName": "Habib",
    "day": 19,
    "month": 1,
    "year": 1977,
    "category": "Seniors",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0268",
    "lastName": "BOUTARA",
    "firstName": "Rayen",
    "day": 9,
    "month": 6,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0312",
    "lastName": "BAATOUT",
    "firstName": "Youssef",
    "day": 31,
    "month": 5,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0351",
    "lastName": "HENI",
    "firstName": "Med Amine",
    "day": 18,
    "month": 3,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0397",
    "lastName": "GHALLEB",
    "firstName": "Med Taher",
    "day": 9,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0398",
    "lastName": "DALDOUL",
    "firstName": "Abdelhedi",
    "day": 25,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0443",
    "lastName": "KHAYAT",
    "firstName": "Med Ayoub",
    "day": 29,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0518",
    "lastName": "GUANDOULA",
    "firstName": "Youssef",
    "day": 27,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0182",
    "lastName": "KAROUI",
    "firstName": "Eya",
    "day": 8,
    "month": 4,
    "year": 2015,
    "category": "Poussins",
    "team": "CTTTouza",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0590",
    "lastName": "ABDENIBI",
    "firstName": "Ragheb",
    "day": 25,
    "month": 12,
    "year": 1994,
    "category": "Seniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0114",
    "lastName": "TOUILA",
    "firstName": "Aziz",
    "day": 17,
    "month": 9,
    "year": 2001,
    "category": "Seniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0115",
    "lastName": "HANNECHI",
    "firstName": "Montassar",
    "day": 14,
    "month": 12,
    "year": 2001,
    "category": "Seniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0579",
    "lastName": "CHEDLI",
    "firstName": "Wafik",
    "day": 12,
    "month": 3,
    "year": 2001,
    "category": "Seniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0153",
    "lastName": "BECHNI",
    "firstName": "Taieb",
    "day": 1,
    "month": 6,
    "year": 2004,
    "category": "Juniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0181",
    "lastName": "TOUILA",
    "firstName": "Moones",
    "day": 7,
    "month": 8,
    "year": 2005,
    "category": "Juniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0205",
    "lastName": "BEN ALI",
    "firstName": "Mootez",
    "day": 26,
    "month": 12,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0057",
    "lastName": "ABBES",
    "firstName": "Emna",
    "day": 28,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0215",
    "lastName": "HAMADI",
    "firstName": "Thawab",
    "day": 19,
    "month": 8,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0243",
    "lastName": "LAAMERI",
    "firstName": "Msaddak",
    "day": 9,
    "month": 1,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0244",
    "lastName": "ISMAIL",
    "firstName": "Mahdi",
    "day": 16,
    "month": 11,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0250",
    "lastName": "DGUECHI",
    "firstName": "Wael",
    "day": 28,
    "month": 2,
    "year": 2007,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0277",
    "lastName": "HMAD",
    "firstName": "Ahmed Yassine",
    "day": 23,
    "month": 9,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0278",
    "lastName": "RADHOUANI",
    "firstName": "Nader",
    "day": 2,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0324",
    "lastName": "HENI",
    "firstName": "Ahmed",
    "day": 21,
    "month": 11,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0325",
    "lastName": "KHALDI",
    "firstName": "Aziz",
    "day": 19,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0583",
    "lastName": "BEJI",
    "firstName": "Fares",
    "day": 23,
    "month": 2,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0370",
    "lastName": "TOUILA",
    "firstName": "Iyed",
    "day": 2,
    "month": 2,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0372",
    "lastName": "ISMAIL",
    "firstName": "Youssef",
    "day": 24,
    "month": 12,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0413",
    "lastName": "OTHMENI",
    "firstName": "Abdelmouheymen",
    "day": 11,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0553",
    "lastName": "MAKHLOUF",
    "firstName": "Moatez",
    "day": 7,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0580",
    "lastName": "KHEDHRI",
    "firstName": "Anas",
    "day": 7,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0582",
    "lastName": "BEN ARAB",
    "firstName": "Hedi",
    "day": 14,
    "month": 7,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0591",
    "lastName": "MAHJOUBI",
    "firstName": "Yamen",
    "day": 3,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0199",
    "lastName": "KAMMOUN",
    "firstName": "Fatma",
    "day": 25,
    "month": 5,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0578",
    "lastName": "HMISSI",
    "firstName": "Adem",
    "day": 3,
    "month": 8,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0581",
    "lastName": "BRASSI",
    "firstName": "Arslen",
    "day": 10,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0206",
    "lastName": "BEN AMED",
    "firstName": "Ouaiss",
    "day": 5,
    "month": 1,
    "year": 2006,
    "category": "Juniors",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0323",
    "lastName": "ZBIDI",
    "firstName": "Jebril",
    "day": 1,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0369",
    "lastName": "TLILI",
    "firstName": "Melek",
    "day": 4,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0371",
    "lastName": "BOUAGGA",
    "firstName": "Youssef",
    "day": 27,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "CTTTouzeur",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0208",
    "lastName": "Amri",
    "firstName": "Israa",
    "day": 9,
    "month": 7,
    "year": 2010,
    "category": "Minimes",
    "team": "EOSIGabes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0209",
    "lastName": "ABDERRAHIM",
    "firstName": "Ameni",
    "day": 8,
    "month": 1,
    "year": 2010,
    "category": "Minimes",
    "team": "EOSIGabes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0482",
    "lastName": "AMRI",
    "firstName": "Mohamed",
    "day": 4,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "EOSIGabes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0483",
    "lastName": "ABDERRAHIM",
    "firstName": "Thameur",
    "day": 2,
    "month": 7,
    "year": 2012,
    "category": "Pupilles",
    "team": "EOSIGabes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0484",
    "lastName": "BESSADEK",
    "firstName": "Med Hachem",
    "day": 24,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "EOSIGabes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0601",
    "lastName": "CHIHI",
    "firstName": "Adem",
    "day": 29,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "EOSIGabes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0210",
    "lastName": "LTAIEF",
    "firstName": "Salma",
    "day": 1,
    "month": 2,
    "year": 2013,
    "category": "Poussins",
    "team": "EOSIGabes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0061",
    "lastName": "MADANI",
    "firstName": "Chahrazed",
    "day": 15,
    "month": 8,
    "year": 2007,
    "category": "Cadets",
    "team": "EST",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0308",
    "lastName": "BEN JEDYENE",
    "firstName": "Hsine",
    "day": 8,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "EST",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0309",
    "lastName": "BEN JEDYENE",
    "firstName": "Hassen",
    "day": 8,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "EST",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0097",
    "lastName": "MADANI",
    "firstName": "Nour El Houda",
    "day": 19,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "EST",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0098",
    "lastName": "ARBI",
    "firstName": "Hajer",
    "day": 27,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "EST",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0348",
    "lastName": "MADANI",
    "firstName": "Ali",
    "day": 20,
    "month": 11,
    "year": 2009,
    "category": "Minimes",
    "team": "EST",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0155",
    "lastName": "MADANI",
    "firstName": "Balquis",
    "day": 15,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "EST",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0516",
    "lastName": "ARBI",
    "firstName": "Younes",
    "day": 3,
    "month": 11,
    "year": 2013,
    "category": "Poussins",
    "team": "EST",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0179",
    "lastName": "MADANI",
    "firstName": "Bayane",
    "day": 23,
    "month": 9,
    "year": 2014,
    "category": "Poussins",
    "team": "EST",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0008",
    "lastName": "NASR",
    "firstName": "Meriem",
    "day": 23,
    "month": 2,
    "year": 1997,
    "category": "Seniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0010",
    "lastName": "GARCI",
    "firstName": "Feriel",
    "day": 29,
    "month": 6,
    "year": 1998,
    "category": "Seniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0012",
    "lastName": "HAJ SALAH",
    "firstName": "Abir",
    "day": 6,
    "month": 8,
    "year": 2000,
    "category": "Seniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "MUT-AS 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0013",
    "lastName": "BEJI",
    "firstName": "Ghofrane",
    "day": 31,
    "month": 12,
    "year": 2001,
    "category": "Seniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0021",
    "lastName": "GARCI",
    "firstName": "Fadoua",
    "day": 6,
    "month": 2,
    "year": 2002,
    "category": "Seniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0024",
    "lastName": "MANNAA",
    "firstName": "Ferdaws",
    "day": 19,
    "month": 6,
    "year": 2003,
    "category": "Juniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0037",
    "lastName": "MRABET",
    "firstName": "Nadine",
    "day": 14,
    "month": 4,
    "year": 2005,
    "category": "Juniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0041",
    "lastName": "RIAHI",
    "firstName": "Molka",
    "day": 6,
    "month": 3,
    "year": 2006,
    "category": "Juniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "MUT-AS 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0054",
    "lastName": "MEJRI",
    "firstName": "Meriem",
    "day": 30,
    "month": 6,
    "year": 2007,
    "category": "Cadets",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0084",
    "lastName": "AGREBI",
    "firstName": "Tasnime",
    "day": 18,
    "month": 9,
    "year": 2009,
    "category": "Minimes",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0085",
    "lastName": "BEJI",
    "firstName": "Selma",
    "day": 31,
    "month": 5,
    "year": 2009,
    "category": "Minimes",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0086",
    "lastName": "TAYARI",
    "firstName": "Meriem",
    "day": 10,
    "month": 4,
    "year": 2009,
    "category": "Minimes",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0107",
    "lastName": "BEN SOUISSI",
    "firstName": "Alae",
    "day": 1,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0112",
    "lastName": "HARREK",
    "firstName": "Tasnime",
    "day": 31,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0127",
    "lastName": "SASSI",
    "firstName": "Arij",
    "day": 13,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0128",
    "lastName": "BANI",
    "firstName": "Arij",
    "day": 12,
    "month": 10,
    "year": 2011,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0129",
    "lastName": "BEN SOUISSI",
    "firstName": "Rioua",
    "day": 8,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0157",
    "lastName": "GHARBI",
    "firstName": "Lina",
    "day": 20,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0158",
    "lastName": "ATROUS",
    "firstName": "Mariem",
    "day": 6,
    "month": 1,
    "year": 2012,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0159",
    "lastName": "BEN HOUITA",
    "firstName": "Nour",
    "day": 3,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0219",
    "lastName": "HADDAD",
    "firstName": "Zaineb",
    "day": 20,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0020",
    "lastName": "BASTI",
    "firstName": "Oumaima",
    "day": 5,
    "month": 1,
    "year": 2002,
    "category": "Seniors",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0164",
    "lastName": "GHARSALLAH",
    "firstName": "Sarra",
    "day": 7,
    "month": 12,
    "year": 2013,
    "category": "Poussins",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0165",
    "lastName": "DAMERGI",
    "firstName": "Balsem",
    "day": 19,
    "month": 11,
    "year": 2013,
    "category": "Poussins",
    "team": "GOG",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0218",
    "lastName": "GANDOULA",
    "firstName": "Samar",
    "day": 15,
    "month": 12,
    "year": 2006,
    "category": "Juniors",
    "team": "NSTouza",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0648",
    "lastName": "GANDOULA",
    "firstName": "Med Sadok",
    "day": 15,
    "month": 10,
    "year": 2009,
    "category": "Minimes",
    "team": "NSTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0649",
    "lastName": "BEN HSeniors",
    "firstName": "Mouhamed",
    "day": 25,
    "month": 6,
    "year": 2013,
    "category": "Poussins",
    "team": "NSTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0650",
    "lastName": "BEN HSeniors",
    "firstName": "Moatez",
    "day": 21,
    "month": 5,
    "year": 2015,
    "category": "Poussins",
    "team": "NSTouza",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0092",
    "lastName": "BEN HAMMOUDA",
    "firstName": "Dhiaeddine",
    "day": 9,
    "month": 7,
    "year": 1996,
    "category": "Seniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0116",
    "lastName": "BOURAS",
    "firstName": "Boubaker",
    "day": 1,
    "month": 10,
    "year": 2001,
    "category": "Seniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "MUT-EST",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0141",
    "lastName": "RAMOUL",
    "firstName": "Med Islem",
    "day": 23,
    "month": 4,
    "year": 2004,
    "category": "Juniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0142",
    "lastName": "AMEUR",
    "firstName": "HABIB",
    "day": 30,
    "month": 8,
    "year": 2004,
    "category": "Juniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0174",
    "lastName": "NAJJAR NEYA",
    "firstName": "Haithem",
    "day": 17,
    "month": 3,
    "year": 2005,
    "category": "Juniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0175",
    "lastName": "BAKKARA",
    "firstName": "Seifeddine",
    "day": 24,
    "month": 5,
    "year": 2005,
    "category": "Juniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0203",
    "lastName": "SOUSSI",
    "firstName": "Ihsen",
    "day": 23,
    "month": 8,
    "year": 2006,
    "category": "Juniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0241",
    "lastName": "MOKNI",
    "firstName": "Islem",
    "day": 14,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0274",
    "lastName": "AMRI",
    "firstName": "Iyed",
    "day": 1,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0317",
    "lastName": "JANDOUBI",
    "firstName": "Med Aziz",
    "day": 22,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0318",
    "lastName": "FEHRI",
    "firstName": "Ahmed",
    "day": 29,
    "month": 8,
    "year": 2009,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0319",
    "lastName": "BAKKARA",
    "firstName": "Yahiya",
    "day": 16,
    "month": 5,
    "year": 2009,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0364",
    "lastName": "JMAIEL",
    "firstName": "Med Iyed",
    "day": 30,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0365",
    "lastName": "BDIRA",
    "firstName": "Alaeddine",
    "day": 13,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0366",
    "lastName": "GHARBI",
    "firstName": "Mahdi",
    "day": 26,
    "month": 1,
    "year": 2010,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0407",
    "lastName": "JMAIEL",
    "firstName": "Adem",
    "day": 12,
    "month": 9,
    "year": 2011,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0408",
    "lastName": "FEHRI",
    "firstName": "Oussama",
    "day": 26,
    "month": 10,
    "year": 2011,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0409",
    "lastName": "TRIKI",
    "firstName": "Slaheddine",
    "day": 27,
    "month": 12,
    "year": 2011,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0410",
    "lastName": "CHERIF",
    "firstName": "Rayen",
    "day": 3,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0450",
    "lastName": "CHOUIKHA",
    "firstName": "Ismael",
    "day": 20,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0656",
    "lastName": "ESSAYED",
    "firstName": "Mootaz",
    "day": 16,
    "month": 8,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0176",
    "lastName": "CHERIF",
    "firstName": "Ritej",
    "day": 15,
    "month": 11,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0657",
    "lastName": "MOKNI",
    "firstName": "Youssef",
    "day": 10,
    "month": 9,
    "year": 2015,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0192",
    "lastName": "BAKKARA",
    "firstName": "Zeineb",
    "day": 8,
    "month": 6,
    "year": 2017,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0635",
    "lastName": "KHIARI",
    "firstName": "Elyess",
    "day": 20,
    "month": 12,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 29
  },
  {
    "number": "M0636",
    "lastName": "BEN NASR",
    "firstName": "Ghassen",
    "day": 29,
    "month": 9,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 30
  },
  {
    "number": "M0637",
    "lastName": "BOUJMIL",
    "firstName": "Ahmed",
    "day": 29,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 31
  },
  {
    "number": "M0638",
    "lastName": "TIRA",
    "firstName": "Dhiaa",
    "day": 5,
    "month": 4,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 32
  },
  {
    "number": "M0639",
    "lastName": "TROUDI",
    "firstName": "Younes",
    "day": 4,
    "month": 10,
    "year": 2015,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 33
  },
  {
    "number": "M0640",
    "lastName": "BEN NASR",
    "firstName": "Raslene",
    "day": 8,
    "month": 7,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 34
  },
  {
    "number": "M0641",
    "lastName": "TROUDI",
    "firstName": "Med Yahya",
    "day": 1,
    "month": 12,
    "year": 2011,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 35
  },
  {
    "number": "M0642",
    "lastName": "JAZI",
    "firstName": "Obaid",
    "day": 7,
    "month": 11,
    "year": 2015,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 36
  },
  {
    "number": "M0643",
    "lastName": "SNOUSSI",
    "firstName": "Majd",
    "day": 6,
    "month": 9,
    "year": 2013,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 37
  },
  {
    "number": "M0644",
    "lastName": "BAKKARA",
    "firstName": "Amen Allah",
    "day": 19,
    "month": 3,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 38
  },
  {
    "number": "M0645",
    "lastName": "HMEM",
    "firstName": "Adem",
    "day": 3,
    "month": 10,
    "year": 2015,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 39
  },
  {
    "number": "M0646",
    "lastName": "BEN ABDALLAH",
    "firstName": "Amen Allah",
    "day": 19,
    "month": 10,
    "year": 2010,
    "category": "Minimes",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 40
  },
  {
    "number": "M0647",
    "lastName": "GLAM",
    "firstName": "Med Amine",
    "day": 27,
    "month": 1,
    "year": 1982,
    "category": "Seniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 41
  },
  {
    "number": "M0014",
    "lastName": "AMEUR",
    "firstName": "Selim",
    "day": 18,
    "month": 6,
    "year": 1968,
    "category": "Seniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0066",
    "lastName": "LAVEIGNE",
    "firstName": "Paul Armand",
    "day": 5,
    "month": 11,
    "year": 1991,
    "category": "Seniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "FRA",
    "isValid": null
  },
  {
    "number": "M0078",
    "lastName": "Hmem",
    "firstName": "Adem",
    "day": 11,
    "month": 11,
    "year": 1994,
    "category": "Seniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0202",
    "lastName": "AMEUR",
    "firstName": "Arafet",
    "day": 27,
    "month": 3,
    "year": 2006,
    "category": "Juniors",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0449",
    "lastName": "SGHAIER",
    "firstName": "Moomen",
    "day": 21,
    "month": 1,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0451",
    "lastName": "SAYED",
    "firstName": "Mootez",
    "day": 16,
    "month": 8,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0452",
    "lastName": "BDIRA",
    "firstName": "Haydar",
    "day": 15,
    "month": 8,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0453",
    "lastName": "BECHA",
    "firstName": "Yassine",
    "day": 23,
    "month": 2,
    "year": 2012,
    "category": "Pupilles",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0498",
    "lastName": "GHARBI",
    "firstName": "Iskander",
    "day": 5,
    "month": 10,
    "year": 2013,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0499",
    "lastName": "BECHA",
    "firstName": "Amenallah",
    "day": 27,
    "month": 11,
    "year": 2013,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0523",
    "lastName": "BEN MASSOUD",
    "firstName": "Adem",
    "day": 4,
    "month": 1,
    "year": 2014,
    "category": "Poussins",
    "team": "PACT�",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0081",
    "lastName": "SOUABNI",
    "firstName": "Abderrazek",
    "day": 11,
    "month": 12,
    "year": 1994,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0083",
    "lastName": "TRABELSI",
    "firstName": "Aymen",
    "day": 30,
    "month": 4,
    "year": 1995,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "MUT-ASCB 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0093",
    "lastName": "MAKHLOUF",
    "firstName": "Med Mahdi",
    "day": 17,
    "month": 5,
    "year": 1996,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0127",
    "lastName": "BEN ATTIA",
    "firstName": "Youssef",
    "day": 23,
    "month": 6,
    "year": 2002,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "MUT-CTTSoliman 2",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0029",
    "lastName": "ESSID",
    "firstName": "Ranim",
    "day": 17,
    "month": 6,
    "year": 2004,
    "category": "Juniors",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0030",
    "lastName": "MAHJOUB",
    "firstName": "Farah",
    "day": 8,
    "month": 1,
    "year": 2004,
    "category": "Juniors",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0031",
    "lastName": "WADI",
    "firstName": "Maram",
    "day": 26,
    "month": 10,
    "year": 2004,
    "category": "Juniors",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0036",
    "lastName": "HOUIMLI",
    "firstName": "Islem",
    "day": 19,
    "month": 4,
    "year": 2005,
    "category": "Juniors",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0217",
    "lastName": "BJAOUI",
    "firstName": "Yakine",
    "day": 23,
    "month": 5,
    "year": 2005,
    "category": "Juniors",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0047",
    "lastName": "GHARSALLI",
    "firstName": "Zeineb",
    "day": 29,
    "month": 7,
    "year": 2006,
    "category": "Juniors",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0216",
    "lastName": "BEN ISSA",
    "firstName": "Hadi",
    "day": 30,
    "month": 6,
    "year": 2006,
    "category": "Juniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "MUT-COS 2",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0217",
    "lastName": "GHARSALLI",
    "firstName": "Seifeddine",
    "day": 29,
    "month": 7,
    "year": 2006,
    "category": "Juniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0218",
    "lastName": "LAZREG",
    "firstName": "Mouheb",
    "day": 3,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0059",
    "lastName": "BEN KAHIA",
    "firstName": "Farah",
    "day": 1,
    "month": 11,
    "year": 2007,
    "category": "Cadets",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0060",
    "lastName": "HAMROUNI",
    "firstName": "Meriem",
    "day": 16,
    "month": 4,
    "year": 2007,
    "category": "Cadets",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0260",
    "lastName": "HSAIRI",
    "firstName": "Chedy",
    "day": 25,
    "month": 6,
    "year": 2007,
    "category": "Cadets",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0073",
    "lastName": "ZAYEN",
    "firstName": "Eya",
    "day": 31,
    "month": 3,
    "year": 2008,
    "category": "Cadets",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0298",
    "lastName": "DBOUKI",
    "firstName": "Dhiaeddine",
    "day": 20,
    "month": 1,
    "year": 2008,
    "category": "Cadets",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0299",
    "lastName": "ESSID",
    "firstName": "Wassim",
    "day": 17,
    "month": 2,
    "year": 2008,
    "category": "Cadets",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0093",
    "lastName": "BELKAHIA",
    "firstName": "Alma",
    "day": 7,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0094",
    "lastName": "BJAOUI",
    "firstName": "Tasnime",
    "day": 16,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0095",
    "lastName": "GHRIBI",
    "firstName": "Hajer",
    "day": 21,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0337",
    "lastName": "AIDLI",
    "firstName": "Youssef",
    "day": 28,
    "month": 8,
    "year": 2009,
    "category": "Minimes",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0338",
    "lastName": "OTHMANI",
    "firstName": "Aymen",
    "day": 18,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0386",
    "lastName": "ESSID",
    "firstName": "Med Amir",
    "day": 27,
    "month": 10,
    "year": 2010,
    "category": "Minimes",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0432",
    "lastName": "RIAHI",
    "firstName": "Houcine",
    "day": 20,
    "month": 10,
    "year": 2011,
    "category": "Pupilles",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0442",
    "lastName": "MERNISSI",
    "firstName": "Med Aziz",
    "day": 16,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0469",
    "lastName": "DAHDAH",
    "firstName": "Mahdi",
    "day": 8,
    "month": 3,
    "year": 2012,
    "category": "Pupilles",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0470",
    "lastName": "BEN MILED",
    "firstName": "Youssef",
    "day": 22,
    "month": 12,
    "year": 2012,
    "category": "Pupilles",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0481",
    "lastName": "ESSID",
    "firstName": "Fares",
    "day": 24,
    "month": 11,
    "year": 2012,
    "category": "Pupilles",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0506",
    "lastName": "BEN ABDALLAH",
    "firstName": "Med Amer",
    "day": 23,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0507",
    "lastName": "BOUCHOUICHA",
    "firstName": "Adem",
    "day": 30,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0508",
    "lastName": "OUNI",
    "firstName": "Med Amine",
    "day": 20,
    "month": 4,
    "year": 2013,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0545",
    "lastName": "ZARAI",
    "firstName": "Youssef",
    "day": 15,
    "month": 1,
    "year": 2015,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0546",
    "lastName": "BOUCHOUICHA",
    "firstName": "Amine",
    "day": 28,
    "month": 9,
    "year": 2015,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0621",
    "lastName": "NAJJAR",
    "firstName": "Yassine",
    "day": 10,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 16
  },
  {
    "number": "M0622",
    "lastName": "NAJJAR",
    "firstName": "Youssef",
    "day": 10,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 16
  },
  {
    "number": "M0620",
    "lastName": "MERNISSI",
    "firstName": "Yaakoub",
    "day": 27,
    "month": 5,
    "year": 2014,
    "category": "Poussins",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 16
  },
  {
    "number": "M0004",
    "lastName": "DOGHMEN",
    "firstName": "Samir",
    "day": 11,
    "month": 7,
    "year": 1960,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0058",
    "lastName": "KHROUF",
    "firstName": "Sami",
    "day": 15,
    "month": 11,
    "year": 1988,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0085",
    "lastName": "KABBOUDI",
    "firstName": "Mahdi",
    "day": 26,
    "month": 11,
    "year": 1995,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0126",
    "lastName": "DOGGUI",
    "firstName": "Ahmed",
    "day": 7,
    "month": 10,
    "year": 2002,
    "category": "Seniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0184",
    "lastName": "SANAA",
    "firstName": "Abderrahmen",
    "day": 2,
    "month": 12,
    "year": 2005,
    "category": "Juniors",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0259",
    "lastName": "BEN BARKA",
    "firstName": "Med Yassine",
    "day": 15,
    "month": 10,
    "year": 2007,
    "category": "Cadets",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0433",
    "lastName": "KBOUBI",
    "firstName": "Taha",
    "day": 16,
    "month": 6,
    "year": 2011,
    "category": "Pupilles",
    "team": "ROB",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0171",
    "lastName": "NAJJAR",
    "firstName": "Yassine",
    "day": 10,
    "month": 1,
    "year": 2013,
    "category": "Poussins",
    "team": "ROB",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0025",
    "lastName": "AGUEL",
    "firstName": "Ons",
    "day": 29,
    "month": 10,
    "year": 2003,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0026",
    "lastName": "SOUISSI",
    "firstName": "Takoua",
    "day": 20,
    "month": 3,
    "year": 2003,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0032",
    "lastName": "GHARBI",
    "firstName": "Salma",
    "day": 13,
    "month": 5,
    "year": 2004,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0163",
    "lastName": "AZZEZ",
    "firstName": "Mohamed",
    "day": 25,
    "month": 10,
    "year": 2004,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0049",
    "lastName": "MAKHLOUF",
    "firstName": "Tasnime",
    "day": 16,
    "month": 8,
    "year": 2006,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0224",
    "lastName": "GHARBI",
    "firstName": "Dhiaeddine",
    "day": 14,
    "month": 2,
    "year": 2006,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0225",
    "lastName": "AZZEZ",
    "firstName": "Riadh",
    "day": 2,
    "month": 10,
    "year": 2006,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0226",
    "lastName": "BEN FRADJ",
    "firstName": "Med Aziz",
    "day": 29,
    "month": 7,
    "year": 2006,
    "category": "Juniors",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0266",
    "lastName": "GHARBI",
    "firstName": "Med Rayen",
    "day": 11,
    "month": 11,
    "year": 2007,
    "category": "Cadets",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0074",
    "lastName": "HAJ SALAH",
    "firstName": "Zeineb",
    "day": 21,
    "month": 12,
    "year": 2008,
    "category": "Cadets",
    "team": "ROBoumerdes",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0349",
    "lastName": "MAKHLOUF",
    "firstName": "Med Amine",
    "day": 5,
    "month": 1,
    "year": 2009,
    "category": "Minimes",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0350",
    "lastName": "KHALIFA",
    "firstName": "Ahmed",
    "day": 26,
    "month": 10,
    "year": 2009,
    "category": "Minimes",
    "team": "ROBoumerdes",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0020",
    "lastName": "BOUKADIDA",
    "firstName": "Alaya",
    "day": 1,
    "month": 7,
    "year": 1973,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0028",
    "lastName": "SOUILEM",
    "firstName": "Mouhamed",
    "day": 19,
    "month": 3,
    "year": 1977,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0037",
    "lastName": "KILANI",
    "firstName": "Med Ali",
    "day": 2,
    "month": 10,
    "year": 1980,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0052",
    "lastName": "BEN FTIMA",
    "firstName": "Wael",
    "day": 16,
    "month": 12,
    "year": 1986,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0061",
    "lastName": "BOUTHAALAB",
    "firstName": "Chedly",
    "day": 17,
    "month": 4,
    "year": 1989,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0565",
    "lastName": "BEN AHMED",
    "firstName": "Maher",
    "day": 13,
    "month": 12,
    "year": 1990,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0197",
    "lastName": "LTAIEF",
    "firstName": "Chaima",
    "day": 16,
    "month": 6,
    "year": 1994,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0006",
    "lastName": "AMRI",
    "firstName": "Siwar",
    "day": 3,
    "month": 10,
    "year": 1995,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0094",
    "lastName": "BOUKADIDA",
    "firstName": "Aymen",
    "day": 9,
    "month": 12,
    "year": 1997,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0009",
    "lastName": "KHDHRI",
    "firstName": "Asma",
    "day": 4,
    "month": 12,
    "year": 1998,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0196",
    "lastName": "OUESLATI",
    "firstName": "Amina",
    "day": 13,
    "month": 3,
    "year": 1999,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0019",
    "lastName": "LAZREG",
    "firstName": "Amal",
    "day": 9,
    "month": 2,
    "year": 2002,
    "category": "Seniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0176",
    "lastName": "BEN FRADJ",
    "firstName": "Abdelkarim",
    "day": 4,
    "month": 12,
    "year": 2005,
    "category": "Juniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0038",
    "lastName": "GUERMANI",
    "firstName": "Azza",
    "day": 27,
    "month": 1,
    "year": 2006,
    "category": "Juniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0042",
    "lastName": "LAZREG",
    "firstName": "Ibtihel",
    "day": 6,
    "month": 1,
    "year": 2006,
    "category": "Juniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0252",
    "lastName": "BEN MOUSSA",
    "firstName": "Jihed",
    "day": 18,
    "month": 9,
    "year": 2007,
    "category": "Cadets",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0076",
    "lastName": "AMRI",
    "firstName": "AMRI Isra",
    "day": 12,
    "month": 6,
    "year": 2009,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0088",
    "lastName": "KHDHIRI",
    "firstName": "Israa",
    "day": 20,
    "month": 10,
    "year": 2009,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0104",
    "lastName": "BOUABID",
    "firstName": "Lina",
    "day": 13,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0357",
    "lastName": "AMRI",
    "firstName": "Med Mahdi",
    "day": 3,
    "month": 12,
    "year": 2010,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0358",
    "lastName": "BOUKADIDA",
    "firstName": "Youssef",
    "day": 5,
    "month": 7,
    "year": 2010,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0114",
    "lastName": "SOUAYAH",
    "firstName": "Dorra",
    "day": 7,
    "month": 4,
    "year": 2011,
    "category": "Pupilles",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0115",
    "lastName": "RJIBA",
    "firstName": "Yomna",
    "day": 30,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0147",
    "lastName": "GHARDALOU",
    "firstName": "Fatma Zahra",
    "day": 6,
    "month": 4,
    "year": 2012,
    "category": "Pupilles",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0448",
    "lastName": "BOUABID",
    "firstName": "Med Bechir",
    "day": 20,
    "month": 7,
    "year": 2012,
    "category": "Pupilles",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0162",
    "lastName": "AMRI",
    "firstName": "Eya",
    "day": 29,
    "month": 9,
    "year": 2013,
    "category": "Poussins",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0198",
    "lastName": "BEN KILANI",
    "firstName": "Ahed",
    "day": 3,
    "month": 10,
    "year": 2013,
    "category": "Poussins",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0530",
    "lastName": "BEN MOUSSA",
    "firstName": "Khalil",
    "day": 27,
    "month": 1,
    "year": 2014,
    "category": "Poussins",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0043",
    "lastName": "TLILI",
    "firstName": "Nadine",
    "day": 19,
    "month": 5,
    "year": 2006,
    "category": "Juniors",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0223",
    "lastName": "LAZREG",
    "firstName": "Rayen",
    "day": 28,
    "month": 6,
    "year": 2006,
    "category": "Juniors",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0109",
    "lastName": "BEN MOUSSA",
    "firstName": "Chaima",
    "day": 17,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0361",
    "lastName": "BEN CHARFEDDINE",
    "firstName": "Zayd",
    "day": 27,
    "month": 4,
    "year": 2010,
    "category": "Minimes",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0438",
    "lastName": "KARMANI",
    "firstName": "Youssef",
    "day": 19,
    "month": 12,
    "year": 2011,
    "category": "Pupilles",
    "team": "ROKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0222",
    "lastName": "SAIDI",
    "firstName": "Chahine",
    "day": 21,
    "month": 3,
    "year": 2006,
    "category": "Juniors",
    "team": "S-Club",
    "sex": "M",
    "transfert": "CTTSBouzid 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0305",
    "lastName": "SAIDI",
    "firstName": "Ayoub",
    "day": 10,
    "month": 4,
    "year": 2008,
    "category": "Cadets",
    "team": "S-Club",
    "sex": "M",
    "transfert": "CTTSBouzid 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0135",
    "lastName": "SAIDI",
    "firstName": "Ela",
    "day": 5,
    "month": 3,
    "year": 2011,
    "category": "Pupilles",
    "team": "S-Club",
    "sex": "F",
    "transfert": "CTTSBouzid 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0476",
    "lastName": "SAIDI",
    "firstName": "Ahmed",
    "day": 29,
    "month": 3,
    "year": 2012,
    "category": "Pupilles",
    "team": "S-Club",
    "sex": "M",
    "transfert": "CTTSBouzid 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0177",
    "lastName": "SAIDI",
    "firstName": "Eya",
    "day": 17,
    "month": 9,
    "year": 2014,
    "category": "Poussins",
    "team": "S-Club",
    "sex": "F",
    "transfert": "CTTSBouzid 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0015",
    "lastName": "REKHAIES",
    "firstName": "Salem",
    "day": 13,
    "month": 4,
    "year": 1969,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0024",
    "lastName": "BADREDDINE",
    "firstName": "Jamel",
    "day": 9,
    "month": 9,
    "year": 1974,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0046",
    "lastName": "ZHIOUA",
    "firstName": "Rached",
    "day": 12,
    "month": 4,
    "year": 1984,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "MUT-PACT� 1",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0077",
    "lastName": "ANTAR",
    "firstName": "Salem",
    "day": 5,
    "month": 3,
    "year": 1994,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0124",
    "lastName": "BARBOUCHI",
    "firstName": "Med Ali",
    "day": 21,
    "month": 2,
    "year": 2002,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0132",
    "lastName": "HAFIENE",
    "firstName": "Med Amine",
    "day": 9,
    "month": 11,
    "year": 2003,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0133",
    "lastName": "HAMROUNI",
    "firstName": "Adem",
    "day": 22,
    "month": 7,
    "year": 2003,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0170",
    "lastName": "CHAIEB",
    "firstName": "Elyes",
    "day": 13,
    "month": 11,
    "year": 2005,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0240",
    "lastName": "BEN CHAGRA",
    "firstName": "Oussama",
    "day": 4,
    "month": 9,
    "year": 2007,
    "category": "Cadets",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0272",
    "lastName": "KHALIFA",
    "firstName": "Fadi",
    "day": 15,
    "month": 10,
    "year": 2008,
    "category": "Cadets",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0079",
    "lastName": "HAFSA",
    "firstName": "Meriem",
    "day": 18,
    "month": 11,
    "year": 2009,
    "category": "Minimes",
    "team": "TJ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "F0080",
    "lastName": "HAFSA",
    "firstName": "Zeineb",
    "day": 18,
    "month": 11,
    "year": 2009,
    "category": "Minimes",
    "team": "TJ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0362",
    "lastName": "HAFSA",
    "firstName": "Yassine",
    "day": 18,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0658",
    "lastName": "ZID",
    "firstName": "Haabib",
    "day": 5,
    "month": 1,
    "year": 1966,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 2
  },
  {
    "number": "M0560",
    "lastName": "GHOULA",
    "firstName": "Yassine",
    "day": 26,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 4
  },
  {
    "number": "M0561",
    "lastName": "AJMI",
    "firstName": "Mohammed",
    "day": 29,
    "month": 11,
    "year": 2011,
    "category": "Pupilles",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 5
  },
  {
    "number": "F0195",
    "lastName": "AJMI",
    "firstName": "Aya",
    "day": 3,
    "month": 7,
    "year": 2009,
    "category": "Minimes",
    "team": "TJ",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": 7
  },
  {
    "number": "M0095",
    "lastName": "SELMI",
    "firstName": "Hsin",
    "day": 14,
    "month": 5,
    "year": 1997,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0100",
    "lastName": "BADREDDINE",
    "firstName": "Mouhamed",
    "day": 13,
    "month": 7,
    "year": 1999,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0111",
    "lastName": "AMOR",
    "firstName": "Sofiene",
    "day": 11,
    "month": 1,
    "year": 2001,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0112",
    "lastName": "CHAIEB",
    "firstName": "Anis",
    "day": 31,
    "month": 7,
    "year": 2001,
    "category": "Seniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0140",
    "lastName": "HAMROUNI",
    "firstName": "Rafik",
    "day": 12,
    "month": 11,
    "year": 2004,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0197",
    "lastName": "BEN SAID",
    "firstName": "Med Taher",
    "day": 28,
    "month": 3,
    "year": 2006,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0198",
    "lastName": "KHALIFA",
    "firstName": "Fredj",
    "day": 23,
    "month": 4,
    "year": 2006,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0199",
    "lastName": "ZED",
    "firstName": "Rayen",
    "day": 31,
    "month": 1,
    "year": 2006,
    "category": "Juniors",
    "team": "TJ",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0154",
    "lastName": "HAMZAOUI",
    "firstName": "Oubey",
    "day": 16,
    "month": 12,
    "year": 2004,
    "category": "Juniors",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0285",
    "lastName": "BOUOKKEZ",
    "firstName": "Khaled",
    "day": 2,
    "month": 8,
    "year": 2008,
    "category": "Cadets",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0330",
    "lastName": "BOUOKKEZ",
    "firstName": "Younes",
    "day": 18,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0376",
    "lastName": "BOUOKKEZ",
    "firstName": "Rayen",
    "day": 29,
    "month": 12,
    "year": 2010,
    "category": "Minimes",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0377",
    "lastName": "FEIDI",
    "firstName": "Omar",
    "day": 23,
    "month": 8,
    "year": 2010,
    "category": "Minimes",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0378",
    "lastName": "JBELI",
    "firstName": "Med Amine",
    "day": 3,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "F0131",
    "lastName": "ABIDI",
    "firstName": "Ayet Arrahmen",
    "day": 23,
    "month": 5,
    "year": 2011,
    "category": "Pupilles",
    "team": "TunAirC",
    "sex": "F",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0418",
    "lastName": "BOUOKKEZ",
    "firstName": "Nadhem",
    "day": 16,
    "month": 6,
    "year": 2011,
    "category": "Pupilles",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0544",
    "lastName": "BOUOKKEZ",
    "firstName": "Yesser",
    "day": 30,
    "month": 7,
    "year": 2015,
    "category": "Poussins",
    "team": "TunAirC",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0213",
    "lastName": "SAADAOUI",
    "firstName": "Dhia",
    "day": 28,
    "month": 12,
    "year": 2006,
    "category": "Juniors",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0214",
    "lastName": "ACHOUR",
    "firstName": "Adem",
    "day": 25,
    "month": 9,
    "year": 2006,
    "category": "Juniors",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0294",
    "lastName": "CHAKROUN",
    "firstName": "Med Amine",
    "day": 27,
    "month": 5,
    "year": 2008,
    "category": "Cadets",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0331",
    "lastName": "MAMIA",
    "firstName": "Mouhamed",
    "day": 24,
    "month": 12,
    "year": 2009,
    "category": "Minimes",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0381",
    "lastName": "BOUBAKER",
    "firstName": "Abdessalem",
    "day": 7,
    "month": 5,
    "year": 2010,
    "category": "Minimes",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0382",
    "lastName": "BOUBAKER",
    "firstName": "Med Ali",
    "day": 28,
    "month": 6,
    "year": 2010,
    "category": "Minimes",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0422",
    "lastName": "CHAKROUN",
    "firstName": "Bachar",
    "day": 27,
    "month": 1,
    "year": 2011,
    "category": "Pupilles",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0423",
    "lastName": "BEN HMIDA",
    "firstName": "Amenallah",
    "day": 1,
    "month": 8,
    "year": 2011,
    "category": "Pupilles",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0464",
    "lastName": "SELMEN",
    "firstName": "Yassine",
    "day": 11,
    "month": 9,
    "year": 2012,
    "category": "Pupilles",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0505",
    "lastName": "SAHLI",
    "firstName": "Ala",
    "day": 22,
    "month": 12,
    "year": 2013,
    "category": "Poussins",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0531",
    "lastName": "SALMEN",
    "firstName": "Youssef",
    "day": 26,
    "month": 4,
    "year": 2014,
    "category": "Poussins",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 1
  },
  {
    "number": "M0623",
    "lastName": "CHEBCHOUB",
    "firstName": "Alaa",
    "day": 29,
    "month": 7,
    "year": 2003,
    "category": "Juniors",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": 17
  },
  {
    "number": "M0031",
    "lastName": "GHARSALLAH",
    "firstName": "Karim",
    "day": 23,
    "month": 10,
    "year": 1978,
    "category": "Seniors",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0383",
    "lastName": "SALMEN",
    "firstName": "Ali",
    "day": 8,
    "month": 7,
    "year": 2010,
    "category": "Minimes",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  },
  {
    "number": "M0463",
    "lastName": "HAJ SALAH",
    "firstName": "Bassem",
    "day": 23,
    "month": 2,
    "year": 2012,
    "category": "Pupilles",
    "team": "ZKS",
    "sex": "M",
    "transfert": "",
    "nat": "TUN",
    "isValid": null
  }
]`;

  //     "number": "M0167",
  //     "transfert": "",
  //     "isValid": null

  // "number": 1,
  // "score": 164,
  // "xxx": "",
  // "indGenre": 1,
  // "UniqueNumber": "TUN2009101411"


  let db = JSON.parse(json);

  res.json({
    success: true,
    message: "it will take few minutes to complete"
  })

  let j = -1;

  for (const player of db) {

    j++;

    const firstName = player.firstName;
    const lastName = player.lastName;
    const number = parseInt(player.number.substring(1));
    const day = player.day;
    const month = player.month;
    const year = player.year;
    // const score = player.score;
    const sex = player.sex;
    // const indGenre = player.indGenre;
    const nat = player.nat;
    const changedTeam = player.transfert !== "" ? new Date() : null;
    const isValid = player.isValid ? true : false;

    // const UniqueNumber = player.UniqueNumber;

    let category = player.category;
    let team = player.team;


    let categoryInserted = await Category.findOneAndUpdate({ name: category }, { name: category }, { new: true, upsert: true });
    // console.log(categoryInserted);

    category = categoryInserted._id;



    let teamInserted = await Team.findOneAndUpdate({ name: team }, { name: team }, { new: true, upsert: true });
    // console.log(teamInserted);

    team = teamInserted._id;

    const newPlayer = new Player({
      firstName,
      lastName,
      number,
      day,
      month,
      year,
      category,
      // score,
      team,
      sex,
      // indGenre,
      nat,
      changedTeam,
      isValid
      // UniqueNumber
    });

    newPlayer.save()
      .then((insertedPlayer) => {

        Team.findOneAndUpdate({ _id: insertedPlayer.team }, { $push: { players: insertedPlayer._id } }, { new: true, upsert: true }, (err, teamX) => {
          console.log(err)
          console.log(teamX.name)

        });
        console.log("player inserted " + j);

        // team = teamInserted._id;

      })
      .catch(error => {
        console.log(error)

      })

  }


}


const createPlayer = async (req, res, next) => {
  // console.log(req.body.UniqueNumber)
  const alreadyexist = await Player.findOne({ number: req.body.number })
  try {
    const firstName = req.body.Nom;
    const lastName = req.body.Prenom;
    const number = req.body.Numero;
    const day = req.body.Date.slice(8, 10);
    const month = req.body.Date.slice(5, 7);
    const year = req.body.Date.slice(0, 4);
    const category2 = req.body.Category1._id;
    const score = req.body.Score;
    const team = req.body.Team._id;
    const sex = req.body.Gender._id;
    const indGenre = "1"

    const nat = req.body.Nationalité;

    let scores2 = [];
    let indivBonuses2 = [];
    const categories = await Category.find({}).sort({ __v: 1 })

    for (i = 0; i < categories.length; i++) {
      const element = categories[i];

      scores2.push({
        category: element._id.toString(),
        score: 500
      })

      indivBonuses2.push({
        category: element._id.toString(),
        bonus: 0
      })

    }

    // const UniqueNumber = req.body.UniqueNumber;
    if (!alreadyexist) {
      const newPlayer = new Player({
        firstName,
        lastName,
        number,
        day,
        month,
        year,
        category2,
        score,
        team,
        indGenre,
        sex,
        nat,
        scores2,
        indivBonuses2
        // UniqueNumber
      });

      newPlayer.save()
      // console.log(newPlayer)
      // const team1 = await Team.findOneAndUpdate({ _id: req.body.Team._id }, { $push: { players: newPlayer._id } })
      // console.log(team1)
      // console.log(req.body.Team._id)
      // console.log(newPlayer._id)

      res.json({
        success: true,
        newPlayer: newPlayer
      })
    } else if (alreadyexist) {
      res.json({
        success: false,
        message: " player with that number already exist"
      })
    }
  }
  catch (error) {
    console.log(error)
    res.json({
      message: 'mongoose-error',
      success: false
    })
  }
}

const readPlayer = async (req, res, next) => {
  console.log(req.params._id)
  const { id } = req.params._id;
  try {



    const player = await Player.findOne({ _id: req.params._id })
      .populate(`category${req.body.season == 2 ? req.body.season : ""}`)
      .populate({
        path: "team",
        populate: {
          path: 'players_v2',
          populate: {
            path: `category${req.body.season == 2 ? req.body.season : ""}`
          }
        }
      })
      .populate({
        path: `history${req.body.season == 2 ? req.body.season : ""}`,
        populate: {
          path: 'winner'
        }
      })
      .populate({
        path: `history${req.body.season == 2 ? req.body.season : ""}`,
        populate: {
          path: 'looser'
        }
      })
      .populate({
        path: `history${req.body.season == 2 ? req.body.season : ""}`,
        populate: {
          path: 'category'
        }
      })

    console.log(player)

    if (!player) return res.json({
      success: false,
      message: "Player-not-found"
    })
    else if (player) {

      if (req.body.season == 2) {

        return res.json({
          success: true,
          player: {
            ...JSON.parse(JSON.stringify(player)),
            category: player.category2,
            scores: player.scores2,
            isValid: player.isValid2,
            history: player.history2,
            indivBonuses: player.indivBonuses2,
          }
        })


      } else {
        return res.json({
          success: true,
          player: player
        })
      }

      // return res.json({
      //   success: true,
      //   player: player
      // })

    }
  } catch (error) {
    console.log(error)

    return res.json({
      success: false,
      message: "server-error",

    })
  }
}

const resetPlayersScores = async (req, res) => {
  return res.json({
    message: 'update-success',
    success: true
  });
  try {
    // const idPlayer = req.body.idPlayer;

    let scores = [];
    let indivBonuses = [];
    const categories = await Category.find({}).sort({ __v: 1 })

    for (i = 0; i < categories.length; i++) {
      const element = categories[i];

      scores.push({
        category: element._id.toString(),
        score: 500
      })

      indivBonuses.push({
        category: element._id.toString(),
        bonus: 0
      })

    }

    Player.updateMany({}, {
      scores: scores,
      indivBonuses: indivBonuses,
      history: []
    }, function (err, doc) {
      if (err) return res.json({
        message: 'mongoose-error',
        success: false,
        err
      });
      return res.json({
        message: 'update-success',
        success: true
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "server-error"
    })
  }
}


const nextSeason = async (req, res) => {
  return res.json({
    message: 'update-success',
    success: true
  });
  try {
    // const idPlayer = req.body.idPlayer;

    let scores = [];
    let indivBonuses = [];
    const categories = await Category.find({}).sort({ __v: 1 })

    for (i = 0; i < categories.length; i++) {
      const element = categories[i];

      scores.push({
        category: element._id.toString(),
        score: 500
      })

      indivBonuses.push({
        category: element._id.toString(),
        bonus: 0
      })

    }

    Player.updateMany({ "year": { $gte: 2014 } }, {
      scores2: scores,
      indivBonuses2: indivBonuses,
      history2: [],
      isValid2: false,
      category2: categories[0]._id
    }, function (err, doc) {
      if (err) return res.json({
        message: 'mongoose-error',
        success: false,
        err
      });
      return res.json({
        message: 'update-success',
        success: true
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "server-error"
    })
  }
}

const deletePlayers = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  await Player.findByIdAndRemove(id);



  res.json({ message: "Player deleted successfully." });
}


const readPlayers = async (req, res, next) => {

  try {

    let finalCategories = [];

    let i = 0;

    let filter = {};

    if (!req.body.sex.toUpperCase().includes("X")) {

      filter.sex = req.body.sex.toUpperCase();

    }
    let chosenCategory = {}

    if (!req.body.category.toUpperCase().includes("TOUT")) {


      const categories = await Category.find({}).sort({ __v: 1 })

      for (i = 0; i < categories.length; i++) {
        const element = categories[i];

        if (element.name.toUpperCase() == req.body.category.toUpperCase()) {
          chosenCategory = element;
          break;
        }

      }

      for (let j = 0; j <= i; j++) {
        const element = categories[j];

        finalCategories.push(element._id);

      }
      if (req.body.season == 2) {
        filter.category2 = { $in: finalCategories }
      } else {
        filter.category = { $in: finalCategories }
      }


    } else {
      const categories = await Category.find({}).sort({ __v: 1 })

      for (i = 0; i < categories.length; i++) {
        const element = categories[i];

        if (element.name.toUpperCase() == "Seniors".toUpperCase()) {
          chosenCategory = element;
          break;
        }

      }

      for (let j = 0; j <= i; j++) {
        const element = categories[j];

        finalCategories.push(element._id);

      }

      if (req.body.season == 2) {
        filter.category2 = { $in: finalCategories }
      } else {
        filter.category = { $in: finalCategories }
      }
    }

    console.log(finalCategories)
    // let filter = { sex: req.body.sex.toUpperCase(), category: { $in: finalCategories } }


    const players = await Player.find(filter)
      .sort({ score: -1 })
      .populate(`category${req.body.season == 2 ? req.body.season : ""}`)
      .populate("team")
      // .populate("history")
      .exec();

    console.log(players)

    if (!players) return res.json({
      success: false,
      message: "Players-not-found"
    })

    if (req.body.season == 2) {
      return res.json({
        success: true, players: JSON.parse(JSON.stringify(players)).map(pl => {
          return {
            ...pl,
            category: pl.category2,
            scores: pl.scores2,
            isValid: pl.isValid2,
            history: pl.history2,
            indivBonuses: pl.indivBonuses2,
          }
        }), chosenCategory
      });
    } else {
      return res.json({
        success: true, players: players, chosenCategory
      });
    }


  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "server-error"
    })
  }

}


const readAllPlayers = async (req, res, next) => {

  try {

    const categories = await Category.find({}).sort({ __v: 1 })

    let finalCategories = [];

    let i = 0;

    for (i = 0; i < categories.length; i++) {
      const element = categories[i];

      if (element.name == req.body.category.toUpperCase()) {
        break;
      }

    }

    for (let j = 0; j <= i; j++) {
      const element = categories[j];

      finalCategories.push(element._id);

    }

    console.log(finalCategories)

    const players = []

    if (req.body.season == 2) {
      players = await Player.find({ category2: { $in: finalCategories } })
        .sort({ score: -1 })
        .populate("team")
        .exec();
    } else {
      players = await Player.find({ category: { $in: finalCategories } })
        .sort({ score: -1 })
        .populate("team")
        .exec();
    }


    console.log(players)

    if (!players) return res.json({
      success: false,
      message: "Players-not-found"
    })


    if (req.body.season == 2) {
      return res.json({
        success: true, players: JSON.parse(JSON.stringify(players)).map(pl => {
          return {
            ...pl,
            category: pl.category2,
            scores: pl.scores2,
            isValid: pl.isValid2,
            history: pl.history2,
            indivBonuses: pl.indivBonuses2,
          }
        })
      });
    } else {
      return res.json({
        success: true, players: players
      });
    }

    // return res.json({ success: true, players: players });

  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "server-error"
    })
  }

}


const banPlayer = (req, res, next) => {

  try {
    const idPlayer = req.body.idPlayer;

    Player.findOneAndUpdate({ _id: idPlayer }, { isBanned: true }, function (err, doc) {
      if (err) return res.json({
        message: 'mongoose-error',
        success: false,
        err
      });
      return res.json({
        message: 'delete-success',
        success: true
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "server-error"
    })
  }

}

const updatePlayer = async (req, res) => {
  console.log(req.body)
  const { id } = req.params._id;

  // console.log(req.params._id)

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const number = req.body.number;
  const day = req.body.Date.slice(8, 10);
  const month = req.body.Date.slice(5, 7);
  const year = req.body.Date.slice(0, 4);
  const score = req.body.score;
  const team = req.body.team._id;
  const sex = req.body.sex._id;

  const category2 = req.body.Category1._id;
  const isValid2 = req.body.isValid._id == 0;



  // const sex = req.body.Gender._id;
  const indGenre = "1"

  const nat = req.body.nat;
  try {


    const player2 = await Player.findOne({ _id: req.params._id })


    console.log(isValid ? "0" : "1");

    if (number === player2.number) {
      console.log("here")

      let update = {
        firstName,
        lastName,
        number,
        day,
        month,
        year,
        category2,
        score,
        team,
        indGenre,
        sex,
        nat,
        isValid2
      };

      if (team != player2.team) {
        update.changedTeam = new Date();
      }

      const player1 = await Player.findOneAndUpdate({ _id: req.params._id }, {
        $set: update
      });


      return res.json({
        success: true,
        player: player1
      })

    } else {
      console.log("here2")

      const player3 = await Player.findOne({ number: req.body.number })
      if (player3) {
        return res.json({
          success: false,
          message: "UniqueNumber already exist "
        })
      } else if (!player3) {
        console.log("here3")


        let update = {
          firstName,
          lastName,
          number,
          day,
          month,
          year,
          category2,
          score,
          team,
          indGenre,
          sex,
          nat,
          isValid2
        };

        if (team != player2.team) {
          update.changedTeam = new Date();
        }

        const player4 = await Player.findOneAndUpdate({ _id: req.params._id }, {
          $set: update
        });

        return res.json({
          success: true,
          player: player4
        })
      }

    }
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "server-error"
    })
  }
}


const addBonuses = async (req, res, next) => {


  const category2 = req.body.category;

  const players1 = req.body.players1;
  const players2 = req.body.players2;
  const players3 = req.body.players3;
  const players4 = req.body.players4;
  const players5 = req.body.players5;
  const players6 = req.body.players6;
  const players7 = req.body.players7;
  const players8 = req.body.players8;

  const coef = req.body.coef;

  console.log({ coef })

  let scoreIndex = category.__v - 1;

  await Player.updateMany({ _id: { $in: [...players1] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 12 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players2] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 10 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players3] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 8 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players4] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 6 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players5] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 4 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players6] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 2 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players7] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": 1 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })

  await Player.updateMany({ _id: { $in: [...players8] }, "indivBonuses2.category": category2._id.toString() }, {
    $inc: {
      "indivBonuses2.$.bonus": -2.5 * coef
    }
  }, {}, (err, res) => {
    console.log(err)
    console.log(res)
  })



  res.json({
    success: true,
    // newMatch: newMatch
  })

  return;
}


const addChampionship = async (req, res, next) => {


  const category = req.body.category;

  const players1 = req.body.players1;
  const players2 = req.body.players2;
  const players3 = req.body.players3;
  const players4 = req.body.players4;
  const players5 = req.body.players5;
  const players6 = req.body.players6;
  const players7 = req.body.players7;
  const players8 = req.body.players8;

  const type = req.body.type;
  const gender = req.body.gender;

  let championship = new Championship({
    category: category,
    type: type,
    gender: gender,
    phase1: [...players1[0], ...players2[0], ...players3[0], ...players4[0], ...players5[0], ...players6[0], ...players7[0], ...players8[0]],
    phase2: [...players1[1], ...players2[1], ...players3[1], ...players4[1], ...players5[1], ...players6[1], ...players7[1], ...players8[1]],
    phase3: [...players1[2], ...players2[2], ...players3[2], ...players4[2], ...players5[2], ...players6[2], ...players7[2], ...players8[2]]
  })

  championship.save();

  res.json({
    success: true,
    // newMatch: newMatch
  })

  return;
}


const editChampionship = async (req, res, next) => {


  const players1 = req.body.players1;
  const players2 = req.body.players2;
  const players3 = req.body.players3;
  const players4 = req.body.players4;
  const players5 = req.body.players5;
  const players6 = req.body.players6;
  const players7 = req.body.players7;
  const players8 = req.body.players8;


  let championship = await Championship.findOneAndUpdate({ _id: req.body._id }, {
    phase1: [...players1[0], ...players2[0], ...players3[0], ...players4[0], ...players5[0], ...players6[0], ...players7[0], ...players8[0]],
    phase2: [...players1[1], ...players2[1], ...players3[1], ...players4[1], ...players5[1], ...players6[1], ...players7[1], ...players8[1]],
    phase3: [...players1[2], ...players2[2], ...players3[2], ...players4[2], ...players5[2], ...players6[2], ...players7[2], ...players8[2]]
  })

  // category: category,
  // type: type,
  // gender: gender,
  // phase1: [...players1[0], ...players2[0], ...players3[0], ...players4[0], ...players5[0], ...players6[0], ...players7[0], ...players8[0]],
  // phase2: [...players1[1], ...players2[1], ...players3[1], ...players4[1], ...players5[1], ...players6[1], ...players7[1], ...players8[1]],
  // phase3: [...players1[2], ...players2[2], ...players3[2], ...players4[2], ...players5[2], ...players6[2], ...players7[2], ...players8[2]]


  // championship.save();

  res.json({
    success: true,
    // newMatch: newMatch
  })

  return;
}

const readChampionships = async (req, res, next) => {

  try {

    let finalCategories = [];

    let i = 0;

    let filter = {};

    if (!req.body.sex.toUpperCase().includes("X")) {

      filter.sex = req.body.sex.toUpperCase();

    }
    let chosenCategory = {}

    if (!req.body.category.toUpperCase().includes("TOUT")) {


      const categories = await Category.find({}).sort({ __v: 1 })

      for (i = 0; i < categories.length; i++) {
        const element = categories[i];

        if (element.name.toUpperCase() == req.body.category.toUpperCase()) {
          chosenCategory = element;
          break;
        }

      }

      for (let j = 0; j <= i; j++) {
        const element = categories[j];

        finalCategories.push(element._id);

      }

      filter.category = { $in: finalCategories }

    } else {
      const categories = await Category.find({}).sort({ __v: 1 })

      for (i = 0; i < categories.length; i++) {
        const element = categories[i];

        if (element.name.toUpperCase() == "Seniors".toUpperCase()) {
          chosenCategory = element;
          break;
        }

      }

      for (let j = 0; j <= i; j++) {
        const element = categories[j];

        finalCategories.push(element._id);

      }

      filter.category = { $in: finalCategories }
    }



    const championships = await Championship.find(filter)
      .sort({ createdAt: -1 })
      .populate("phase1")
      .populate("phase2")
      .populate("phase3")
      .populate("category")
      .exec();

    if (!championships) return res.json({
      success: false,
      message: "Players-not-found"
    })

    return res.json({ success: true, championships: championships });

  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "server-error"
    })
  }

}


const deleteChampionship = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  await Championship.findByIdAndRemove(id);

  res.json({ message: "Championship deleted successfully." });
}


const readChampionship = async (req, res, next) => {
  console.log(req.params._id)
  const { id } = req.params._id;
  try {

    const championship = await Championship.findOne({ _id: req.params._id })
      .populate({
        path: "phase1",
        populate: {
          path: 'team'
        }
      })
      .populate({
        path: "phase2",
        populate: {
          path: 'team'
        }
      })
      .populate({
        path: "phase3",
        populate: {
          path: 'team'
        }
      })
      .populate("category")

      .exec();

    console.log(championship)

    if (!championship) return res.json({
      success: false,
      message: "Player-not-found"
    })
    else if (championship) {
      return res.json({
        success: true,
        championship: championship
      })

    }
  } catch (error) {
    console.log(error)

    return res.json({
      success: false,
      message: "server-error",

    })
  }
}

module.exports = {
  createPlayer,
  readPlayer,
  readPlayers,
  readAllPlayers,
  banPlayer,
  updatePlayer,
  resetDB,
  deletePlayers,
  resetPlayersScores,
  addBonuses,
  addChampionship,
  readChampionships,
  readChampionship,
  deleteChampionship,
  editChampionship,
  nextSeason
}