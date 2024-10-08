import Homey from 'homey';

const TIMEZONES = {
  "Africa/Abidjan": {
    "title": "Abidjan",
    "short": "ABI"
  },
  "Africa/Accra": {
    "title": "Accra",
    "short": "ACC"
  },
  "Africa/Addis_Ababa": {
    "title": "Addis Ababa",
    "short": "ADD"
  },
  "Africa/Algiers": {
    "title": "Algiers",
    "short": "ALG"
  },
  "Africa/Asmara": {
    "title": "Asmara",
    "short": "ASM"
  },
  "Africa/Asmera": {
    "title": "Asmera",
    "short": "ASM"
  },
  "Africa/Bamako": {
    "title": "Bamako",
    "short": "BAM"
  },
  "Africa/Bangui": {
    "title": "Bangui",
    "short": "BAN"
  },
  "Africa/Banjul": {
    "title": "Banjul",
    "short": "BAN"
  },
  "Africa/Bissau": {
    "title": "Bissau",
    "short": "BIS"
  },
  "Africa/Blantyre": {
    "title": "Blantyre",
    "short": "BLA"
  },
  "Africa/Brazzaville": {
    "title": "Brazzaville",
    "short": "BRA"
  },
  "Africa/Bujumbura": {
    "title": "Bujumbura",
    "short": "BUJ"
  },
  "Africa/Cairo": {
    "title": "Cairo",
    "short": "CAI"
  },
  "Africa/Casablanca": {
    "title": "Casablanca",
    "short": "CAS"
  },
  "Africa/Ceuta": {
    "title": "Ceuta",
    "short": "CEU"
  },
  "Africa/Conakry": {
    "title": "Conakry",
    "short": "CON"
  },
  "Africa/Dakar": {
    "title": "Dakar",
    "short": "DAK"
  },
  "Africa/Dar_es_Salaam": {
    "title": "Dar es Salaam",
    "short": "DAR"
  },
  "Africa/Djibouti": {
    "title": "Djibouti",
    "short": "DJI"
  },
  "Africa/Douala": {
    "title": "Douala",
    "short": "DOU"
  },
  "Africa/El_Aaiun": {
    "title": "El Aaiun",
    "short": "EL_"
  },
  "Africa/Freetown": {
    "title": "Freetown",
    "short": "FRE"
  },
  "Africa/Gaborone": {
    "title": "Gaborone",
    "short": "GAB"
  },
  "Africa/Harare": {
    "title": "Harare",
    "short": "HAR"
  },
  "Africa/Johannesburg": {
    "title": "Johannesburg",
    "short": "JOH"
  },
  "Africa/Juba": {
    "title": "Juba",
    "short": "JUB"
  },
  "Africa/Kampala": {
    "title": "Kampala",
    "short": "KAM"
  },
  "Africa/Khartoum": {
    "title": "Khartoum",
    "short": "KHA"
  },
  "Africa/Kigali": {
    "title": "Kigali",
    "short": "KIG"
  },
  "Africa/Kinshasa": {
    "title": "Kinshasa",
    "short": "KIN"
  },
  "Africa/Lagos": {
    "title": "Lagos",
    "short": "LAG"
  },
  "Africa/Libreville": {
    "title": "Libreville",
    "short": "LIB"
  },
  "Africa/Lome": {
    "title": "Lome",
    "short": "LOM"
  },
  "Africa/Luanda": {
    "title": "Luanda",
    "short": "LUA"
  },
  "Africa/Lubumbashi": {
    "title": "Lubumbashi",
    "short": "LUB"
  },
  "Africa/Lusaka": {
    "title": "Lusaka",
    "short": "LUS"
  },
  "Africa/Malabo": {
    "title": "Malabo",
    "short": "MAL"
  },
  "Africa/Maputo": {
    "title": "Maputo",
    "short": "MAP"
  },
  "Africa/Maseru": {
    "title": "Maseru",
    "short": "MAS"
  },
  "Africa/Mbabane": {
    "title": "Mbabane",
    "short": "MBA"
  },
  "Africa/Mogadishu": {
    "title": "Mogadishu",
    "short": "MOG"
  },
  "Africa/Monrovia": {
    "title": "Monrovia",
    "short": "MON"
  },
  "Africa/Nairobi": {
    "title": "Nairobi",
    "short": "NAI"
  },
  "Africa/Ndjamena": {
    "title": "Ndjamena",
    "short": "NDJ"
  },
  "Africa/Niamey": {
    "title": "Niamey",
    "short": "NIA"
  },
  "Africa/Nouakchott": {
    "title": "Nouakchott",
    "short": "NOU"
  },
  "Africa/Ouagadougou": {
    "title": "Ouagadougou",
    "short": "OUA"
  },
  "Africa/Porto-Novo": {
    "title": "Porto-Novo",
    "short": "POR"
  },
  "Africa/Sao_Tome": {
    "title": "Sao Tome",
    "short": "SAO"
  },
  "Africa/Timbuktu": {
    "title": "Timbuktu",
    "short": "TIM"
  },
  "Africa/Tripoli": {
    "title": "Tripoli",
    "short": "TRI"
  },
  "Africa/Tunis": {
    "title": "Tunis",
    "short": "TUN"
  },
  "Africa/Windhoek": {
    "title": "Windhoek",
    "short": "WIN"
  },
  "America/Adak": {
    "title": "Adak",
    "short": "ADA"
  },
  "America/Anchorage": {
    "title": "Anchorage",
    "short": "ANC"
  },
  "America/Anguilla": {
    "title": "Anguilla",
    "short": "ANG"
  },
  "America/Antigua": {
    "title": "Antigua",
    "short": "ANT"
  },
  "America/Araguaina": {
    "title": "Araguaina",
    "short": "ARA"
  },
  "America/Argentina/Buenos_Aires": {
    "title": "Buenos Aires",
    "short": "BUE"
  },
  "America/Argentina/Catamarca": {
    "title": "Catamarca",
    "short": "CAT"
  },
  "America/Argentina/ComodRivadavia": {
    "title": "ComodRivadavia",
    "short": "COM"
  },
  "America/Argentina/Cordoba": {
    "title": "Cordoba",
    "short": "COR"
  },
  "America/Argentina/Jujuy": {
    "title": "Jujuy",
    "short": "JUJ"
  },
  "America/Argentina/La_Rioja": {
    "title": "La Rioja",
    "short": "LA_"
  },
  "America/Argentina/Mendoza": {
    "title": "Mendoza",
    "short": "MEN"
  },
  "America/Argentina/Rio_Gallegos": {
    "title": "Rio Gallegos",
    "short": "RIO"
  },
  "America/Argentina/Salta": {
    "title": "Salta",
    "short": "SAL"
  },
  "America/Argentina/San_Juan": {
    "title": "San Juan",
    "short": "SAN"
  },
  "America/Argentina/San_Luis": {
    "title": "San Luis",
    "short": "SAN"
  },
  "America/Argentina/Tucuman": {
    "title": "Tucuman",
    "short": "TUC"
  },
  "America/Argentina/Ushuaia": {
    "title": "Ushuaia",
    "short": "USH"
  },
  "America/Aruba": {
    "title": "Aruba",
    "short": "ARU"
  },
  "America/Asuncion": {
    "title": "Asuncion",
    "short": "ASU"
  },
  "America/Atikokan": {
    "title": "Atikokan",
    "short": "ATI"
  },
  "America/Atka": {
    "title": "Atka",
    "short": "ATK"
  },
  "America/Bahia": {
    "title": "Bahia",
    "short": "BAH"
  },
  "America/Bahia_Banderas": {
    "title": "Bahia Banderas",
    "short": "BAH"
  },
  "America/Barbados": {
    "title": "Barbados",
    "short": "BAR"
  },
  "America/Belem": {
    "title": "Belem",
    "short": "BEL"
  },
  "America/Belize": {
    "title": "Belize",
    "short": "BEL"
  },
  "America/Blanc-Sablon": {
    "title": "Blanc-Sablon",
    "short": "BLA"
  },
  "America/Boa_Vista": {
    "title": "Boa Vista",
    "short": "BOA"
  },
  "America/Bogota": {
    "title": "Bogota",
    "short": "BOG"
  },
  "America/Boise": {
    "title": "Boise",
    "short": "BOI"
  },
  "America/Buenos_Aires": {
    "title": "Buenos Aires",
    "short": "BUE"
  },
  "America/Cambridge_Bay": {
    "title": "Cambridge Bay",
    "short": "CAM"
  },
  "America/Campo_Grande": {
    "title": "Campo Grande",
    "short": "CAM"
  },
  "America/Cancun": {
    "title": "Cancun",
    "short": "CAN"
  },
  "America/Caracas": {
    "title": "Caracas",
    "short": "CAR"
  },
  "America/Catamarca": {
    "title": "Catamarca",
    "short": "CAT"
  },
  "America/Cayenne": {
    "title": "Cayenne",
    "short": "CAY"
  },
  "America/Cayman": {
    "title": "Cayman",
    "short": "CAY"
  },
  "America/Chicago": {
    "title": "Chicago",
    "short": "CHI"
  },
  "America/Chihuahua": {
    "title": "Chihuahua",
    "short": "CHI"
  },
  "America/Ciudad_Juarez": {
    "title": "Ciudad Juarez",
    "short": "CIU"
  },
  "America/Coral_Harbour": {
    "title": "Coral Harbour",
    "short": "COR"
  },
  "America/Cordoba": {
    "title": "Cordoba",
    "short": "COR"
  },
  "America/Costa_Rica": {
    "title": "Costa Rica",
    "short": "COS"
  },
  "America/Creston": {
    "title": "Creston",
    "short": "CRE"
  },
  "America/Cuiaba": {
    "title": "Cuiaba",
    "short": "CUI"
  },
  "America/Curacao": {
    "title": "Curacao",
    "short": "CUR"
  },
  "America/Danmarkshavn": {
    "title": "Danmarkshavn",
    "short": "DAN"
  },
  "America/Dawson": {
    "title": "Dawson",
    "short": "DAW"
  },
  "America/Dawson_Creek": {
    "title": "Dawson Creek",
    "short": "DAW"
  },
  "America/Denver": {
    "title": "Denver",
    "short": "DEN"
  },
  "America/Detroit": {
    "title": "Detroit",
    "short": "DET"
  },
  "America/Dominica": {
    "title": "Dominica",
    "short": "DOM"
  },
  "America/Edmonton": {
    "title": "Edmonton",
    "short": "EDM"
  },
  "America/Eirunepe": {
    "title": "Eirunepe",
    "short": "EIR"
  },
  "America/El_Salvador": {
    "title": "El Salvador",
    "short": "EL_"
  },
  "America/Ensenada": {
    "title": "Ensenada",
    "short": "ENS"
  },
  "America/Fort_Nelson": {
    "title": "Fort Nelson",
    "short": "FOR"
  },
  "America/Fort_Wayne": {
    "title": "Fort Wayne",
    "short": "FOR"
  },
  "America/Fortaleza": {
    "title": "Fortaleza",
    "short": "FOR"
  },
  "America/Glace_Bay": {
    "title": "Glace Bay",
    "short": "GLA"
  },
  "America/Godthab": {
    "title": "Godthab",
    "short": "GOD"
  },
  "America/Goose_Bay": {
    "title": "Goose Bay",
    "short": "GOO"
  },
  "America/Grand_Turk": {
    "title": "Grand Turk",
    "short": "GRA"
  },
  "America/Grenada": {
    "title": "Grenada",
    "short": "GRE"
  },
  "America/Guadeloupe": {
    "title": "Guadeloupe",
    "short": "GUA"
  },
  "America/Guatemala": {
    "title": "Guatemala",
    "short": "GUA"
  },
  "America/Guayaquil": {
    "title": "Guayaquil",
    "short": "GUA"
  },
  "America/Guyana": {
    "title": "Guyana",
    "short": "GUY"
  },
  "America/Halifax": {
    "title": "Halifax",
    "short": "HAL"
  },
  "America/Havana": {
    "title": "Havana",
    "short": "HAV"
  },
  "America/Hermosillo": {
    "title": "Hermosillo",
    "short": "HER"
  },
  "America/Indiana/Indianapolis": {
    "title": "Indianapolis",
    "short": "IND"
  },
  "America/Indiana/Knox": {
    "title": "Knox",
    "short": "KNO"
  },
  "America/Indiana/Marengo": {
    "title": "Marengo",
    "short": "MAR"
  },
  "America/Indiana/Petersburg": {
    "title": "Petersburg",
    "short": "PET"
  },
  "America/Indiana/Tell_City": {
    "title": "Tell City",
    "short": "TEL"
  },
  "America/Indiana/Vevay": {
    "title": "Vevay",
    "short": "VEV"
  },
  "America/Indiana/Vincennes": {
    "title": "Vincennes",
    "short": "VIN"
  },
  "America/Indiana/Winamac": {
    "title": "Winamac",
    "short": "WIN"
  },
  "America/Indianapolis": {
    "title": "Indianapolis",
    "short": "IND"
  },
  "America/Inuvik": {
    "title": "Inuvik",
    "short": "INU"
  },
  "America/Iqaluit": {
    "title": "Iqaluit",
    "short": "IQA"
  },
  "America/Jamaica": {
    "title": "Jamaica",
    "short": "JAM"
  },
  "America/Jujuy": {
    "title": "Jujuy",
    "short": "JUJ"
  },
  "America/Juneau": {
    "title": "Juneau",
    "short": "JUN"
  },
  "America/Kentucky/Louisville": {
    "title": "Louisville",
    "short": "LOU"
  },
  "America/Kentucky/Monticello": {
    "title": "Monticello",
    "short": "MON"
  },
  "America/Knox_IN": {
    "title": "Knox IN",
    "short": "KNO"
  },
  "America/Kralendijk": {
    "title": "Kralendijk",
    "short": "KRA"
  },
  "America/La_Paz": {
    "title": "La Paz",
    "short": "LA_"
  },
  "America/Lima": {
    "title": "Lima",
    "short": "LIM"
  },
  "America/Los_Angeles": {
    "title": "Los Angeles",
    "short": "LOS"
  },
  "America/Louisville": {
    "title": "Louisville",
    "short": "LOU"
  },
  "America/Lower_Princes": {
    "title": "Lower Princes",
    "short": "LOW"
  },
  "America/Maceio": {
    "title": "Maceio",
    "short": "MAC"
  },
  "America/Managua": {
    "title": "Managua",
    "short": "MAN"
  },
  "America/Manaus": {
    "title": "Manaus",
    "short": "MAN"
  },
  "America/Marigot": {
    "title": "Marigot",
    "short": "MAR"
  },
  "America/Martinique": {
    "title": "Martinique",
    "short": "MAR"
  },
  "America/Matamoros": {
    "title": "Matamoros",
    "short": "MAT"
  },
  "America/Mazatlan": {
    "title": "Mazatlan",
    "short": "MAZ"
  },
  "America/Mendoza": {
    "title": "Mendoza",
    "short": "MEN"
  },
  "America/Menominee": {
    "title": "Menominee",
    "short": "MEN"
  },
  "America/Merida": {
    "title": "Merida",
    "short": "MER"
  },
  "America/Metlakatla": {
    "title": "Metlakatla",
    "short": "MET"
  },
  "America/Mexico_City": {
    "title": "Mexico City",
    "short": "MEX"
  },
  "America/Miquelon": {
    "title": "Miquelon",
    "short": "MIQ"
  },
  "America/Moncton": {
    "title": "Moncton",
    "short": "MON"
  },
  "America/Monterrey": {
    "title": "Monterrey",
    "short": "MON"
  },
  "America/Montevideo": {
    "title": "Montevideo",
    "short": "MON"
  },
  "America/Montreal": {
    "title": "Montreal",
    "short": "MON"
  },
  "America/Montserrat": {
    "title": "Montserrat",
    "short": "MON"
  },
  "America/Nassau": {
    "title": "Nassau",
    "short": "NAS"
  },
  "America/New_York": {
    "title": "New York",
    "short": "NEW"
  },
  "America/Nipigon": {
    "title": "Nipigon",
    "short": "NIP"
  },
  "America/Nome": {
    "title": "Nome",
    "short": "NOM"
  },
  "America/Noronha": {
    "title": "Noronha",
    "short": "NOR"
  },
  "America/North_Dakota/Beulah": {
    "title": "Beulah",
    "short": "BEU"
  },
  "America/North_Dakota/Center": {
    "title": "Center",
    "short": "CEN"
  },
  "America/North_Dakota/New_Salem": {
    "title": "New Salem",
    "short": "NEW"
  },
  "America/Nuuk": {
    "title": "Nuuk",
    "short": "NUU"
  },
  "America/Ojinaga": {
    "title": "Ojinaga",
    "short": "OJI"
  },
  "America/Panama": {
    "title": "Panama",
    "short": "PAN"
  },
  "America/Pangnirtung": {
    "title": "Pangnirtung",
    "short": "PAN"
  },
  "America/Paramaribo": {
    "title": "Paramaribo",
    "short": "PAR"
  },
  "America/Phoenix": {
    "title": "Phoenix",
    "short": "PHO"
  },
  "America/Port-au-Prince": {
    "title": "Port-au-Prince",
    "short": "POR"
  },
  "America/Port_of_Spain": {
    "title": "Port of Spain",
    "short": "POR"
  },
  "America/Porto_Acre": {
    "title": "Porto Acre",
    "short": "POR"
  },
  "America/Porto_Velho": {
    "title": "Porto Velho",
    "short": "POR"
  },
  "America/Puerto_Rico": {
    "title": "Puerto Rico",
    "short": "PUE"
  },
  "America/Punta_Arenas": {
    "title": "Punta Arenas",
    "short": "PUN"
  },
  "America/Rainy_River": {
    "title": "Rainy River",
    "short": "RAI"
  },
  "America/Rankin_Inlet": {
    "title": "Rankin Inlet",
    "short": "RAN"
  },
  "America/Recife": {
    "title": "Recife",
    "short": "REC"
  },
  "America/Regina": {
    "title": "Regina",
    "short": "REG"
  },
  "America/Resolute": {
    "title": "Resolute",
    "short": "RES"
  },
  "America/Rio_Branco": {
    "title": "Rio Branco",
    "short": "RIO"
  },
  "America/Rosario": {
    "title": "Rosario",
    "short": "ROS"
  },
  "America/Santa_Isabel": {
    "title": "Santa Isabel",
    "short": "SAN"
  },
  "America/Santarem": {
    "title": "Santarem",
    "short": "SAN"
  },
  "America/Santiago": {
    "title": "Santiago",
    "short": "SAN"
  },
  "America/Santo_Domingo": {
    "title": "Santo Domingo",
    "short": "SAN"
  },
  "America/Sao_Paulo": {
    "title": "Sao Paulo",
    "short": "SAO"
  },
  "America/Scoresbysund": {
    "title": "Scoresbysund",
    "short": "SCO"
  },
  "America/Shiprock": {
    "title": "Shiprock",
    "short": "SHI"
  },
  "America/Sitka": {
    "title": "Sitka",
    "short": "SIT"
  },
  "America/St_Barthelemy": {
    "title": "St Barthelemy",
    "short": "ST_"
  },
  "America/St_Johns": {
    "title": "St Johns",
    "short": "ST_"
  },
  "America/St_Kitts": {
    "title": "St Kitts",
    "short": "ST_"
  },
  "America/St_Lucia": {
    "title": "St Lucia",
    "short": "ST_"
  },
  "America/St_Thomas": {
    "title": "St Thomas",
    "short": "ST_"
  },
  "America/St_Vincent": {
    "title": "St Vincent",
    "short": "ST_"
  },
  "America/Swift_Current": {
    "title": "Swift Current",
    "short": "SWI"
  },
  "America/Tegucigalpa": {
    "title": "Tegucigalpa",
    "short": "TEG"
  },
  "America/Thule": {
    "title": "Thule",
    "short": "THU"
  },
  "America/Thunder_Bay": {
    "title": "Thunder Bay",
    "short": "THU"
  },
  "America/Tijuana": {
    "title": "Tijuana",
    "short": "TIJ"
  },
  "America/Toronto": {
    "title": "Toronto",
    "short": "TOR"
  },
  "America/Tortola": {
    "title": "Tortola",
    "short": "TOR"
  },
  "America/Vancouver": {
    "title": "Vancouver",
    "short": "VAN"
  },
  "America/Virgin": {
    "title": "Virgin",
    "short": "VIR"
  },
  "America/Whitehorse": {
    "title": "Whitehorse",
    "short": "WHI"
  },
  "America/Winnipeg": {
    "title": "Winnipeg",
    "short": "WIN"
  },
  "America/Yakutat": {
    "title": "Yakutat",
    "short": "YAK"
  },
  "America/Yellowknife": {
    "title": "Yellowknife",
    "short": "YEL"
  },
  "Antarctica/Casey": {
    "title": "Casey",
    "short": "CAS"
  },
  "Antarctica/Davis": {
    "title": "Davis",
    "short": "DAV"
  },
  "Antarctica/DumontDUrville": {
    "title": "DumontDUrville",
    "short": "DUM"
  },
  "Antarctica/Macquarie": {
    "title": "Macquarie",
    "short": "MAC"
  },
  "Antarctica/Mawson": {
    "title": "Mawson",
    "short": "MAW"
  },
  "Antarctica/McMurdo": {
    "title": "McMurdo",
    "short": "MCM"
  },
  "Antarctica/Palmer": {
    "title": "Palmer",
    "short": "PAL"
  },
  "Antarctica/Rothera": {
    "title": "Rothera",
    "short": "ROT"
  },
  "Antarctica/South_Pole": {
    "title": "South Pole",
    "short": "SOU"
  },
  "Antarctica/Syowa": {
    "title": "Syowa",
    "short": "SYO"
  },
  "Antarctica/Troll": {
    "title": "Troll",
    "short": "TRO"
  },
  "Antarctica/Vostok": {
    "title": "Vostok",
    "short": "VOS"
  },
  "Arctic/Longyearbyen": {
    "title": "Longyearbyen",
    "short": "LON"
  },
  "Asia/Aden": {
    "title": "Aden",
    "short": "ADE"
  },
  "Asia/Almaty": {
    "title": "Almaty",
    "short": "ALM"
  },
  "Asia/Amman": {
    "title": "Amman",
    "short": "AMM"
  },
  "Asia/Anadyr": {
    "title": "Anadyr",
    "short": "ANA"
  },
  "Asia/Aqtau": {
    "title": "Aqtau",
    "short": "AQT"
  },
  "Asia/Aqtobe": {
    "title": "Aqtobe",
    "short": "AQT"
  },
  "Asia/Ashgabat": {
    "title": "Ashgabat",
    "short": "ASH"
  },
  "Asia/Ashkhabad": {
    "title": "Ashkhabad",
    "short": "ASH"
  },
  "Asia/Atyrau": {
    "title": "Atyrau",
    "short": "ATY"
  },
  "Asia/Baghdad": {
    "title": "Baghdad",
    "short": "BAG"
  },
  "Asia/Bahrain": {
    "title": "Bahrain",
    "short": "BAH"
  },
  "Asia/Baku": {
    "title": "Baku",
    "short": "BAK"
  },
  "Asia/Bangkok": {
    "title": "Bangkok",
    "short": "BAN"
  },
  "Asia/Barnaul": {
    "title": "Barnaul",
    "short": "BAR"
  },
  "Asia/Beirut": {
    "title": "Beirut",
    "short": "BEI"
  },
  "Asia/Bishkek": {
    "title": "Bishkek",
    "short": "BIS"
  },
  "Asia/Brunei": {
    "title": "Brunei",
    "short": "BRU"
  },
  "Asia/Calcutta": {
    "title": "Calcutta",
    "short": "CAL"
  },
  "Asia/Chita": {
    "title": "Chita",
    "short": "CHI"
  },
  "Asia/Choibalsan": {
    "title": "Choibalsan",
    "short": "CHO"
  },
  "Asia/Chongqing": {
    "title": "Chongqing",
    "short": "CHO"
  },
  "Asia/Chungking": {
    "title": "Chungking",
    "short": "CHU"
  },
  "Asia/Colombo": {
    "title": "Colombo",
    "short": "COL"
  },
  "Asia/Dacca": {
    "title": "Dacca",
    "short": "DAC"
  },
  "Asia/Damascus": {
    "title": "Damascus",
    "short": "DAM"
  },
  "Asia/Dhaka": {
    "title": "Dhaka",
    "short": "DHA"
  },
  "Asia/Dili": {
    "title": "Dili",
    "short": "DIL"
  },
  "Asia/Dubai": {
    "title": "Dubai",
    "short": "DUB"
  },
  "Asia/Dushanbe": {
    "title": "Dushanbe",
    "short": "DUS"
  },
  "Asia/Famagusta": {
    "title": "Famagusta",
    "short": "FAM"
  },
  "Asia/Gaza": {
    "title": "Gaza",
    "short": "GAZ"
  },
  "Asia/Harbin": {
    "title": "Harbin",
    "short": "HAR"
  },
  "Asia/Hebron": {
    "title": "Hebron",
    "short": "HEB"
  },
  "Asia/Ho_Chi_Minh": {
    "title": "Ho Chi Minh",
    "short": "HO_"
  },
  "Asia/Hong_Kong": {
    "title": "Hong Kong",
    "short": "HON"
  },
  "Asia/Hovd": {
    "title": "Hovd",
    "short": "HOV"
  },
  "Asia/Irkutsk": {
    "title": "Irkutsk",
    "short": "IRK"
  },
  "Asia/Istanbul": {
    "title": "Istanbul",
    "short": "IST"
  },
  "Asia/Jakarta": {
    "title": "Jakarta",
    "short": "JAK"
  },
  "Asia/Jayapura": {
    "title": "Jayapura",
    "short": "JAY"
  },
  "Asia/Jerusalem": {
    "title": "Jerusalem",
    "short": "JER"
  },
  "Asia/Kabul": {
    "title": "Kabul",
    "short": "KAB"
  },
  "Asia/Kamchatka": {
    "title": "Kamchatka",
    "short": "KAM"
  },
  "Asia/Karachi": {
    "title": "Karachi",
    "short": "KAR"
  },
  "Asia/Kashgar": {
    "title": "Kashgar",
    "short": "KAS"
  },
  "Asia/Kathmandu": {
    "title": "Kathmandu",
    "short": "KAT"
  },
  "Asia/Katmandu": {
    "title": "Katmandu",
    "short": "KAT"
  },
  "Asia/Khandyga": {
    "title": "Khandyga",
    "short": "KHA"
  },
  "Asia/Kolkata": {
    "title": "Kolkata",
    "short": "KOL"
  },
  "Asia/Krasnoyarsk": {
    "title": "Krasnoyarsk",
    "short": "KRA"
  },
  "Asia/Kuala_Lumpur": {
    "title": "Kuala Lumpur",
    "short": "KUA"
  },
  "Asia/Kuching": {
    "title": "Kuching",
    "short": "KUC"
  },
  "Asia/Kuwait": {
    "title": "Kuwait",
    "short": "KUW"
  },
  "Asia/Macao": {
    "title": "Macao",
    "short": "MAC"
  },
  "Asia/Macau": {
    "title": "Macau",
    "short": "MAC"
  },
  "Asia/Magadan": {
    "title": "Magadan",
    "short": "MAG"
  },
  "Asia/Makassar": {
    "title": "Makassar",
    "short": "MAK"
  },
  "Asia/Manila": {
    "title": "Manila",
    "short": "MAN"
  },
  "Asia/Muscat": {
    "title": "Muscat",
    "short": "MUS"
  },
  "Asia/Nicosia": {
    "title": "Nicosia",
    "short": "NIC"
  },
  "Asia/Novokuznetsk": {
    "title": "Novokuznetsk",
    "short": "NOV"
  },
  "Asia/Novosibirsk": {
    "title": "Novosibirsk",
    "short": "NOV"
  },
  "Asia/Omsk": {
    "title": "Omsk",
    "short": "OMS"
  },
  "Asia/Oral": {
    "title": "Oral",
    "short": "ORA"
  },
  "Asia/Phnom_Penh": {
    "title": "Phnom Penh",
    "short": "PHN"
  },
  "Asia/Pontianak": {
    "title": "Pontianak",
    "short": "PON"
  },
  "Asia/Pyongyang": {
    "title": "Pyongyang",
    "short": "PYO"
  },
  "Asia/Qatar": {
    "title": "Qatar",
    "short": "QAT"
  },
  "Asia/Qostanay": {
    "title": "Qostanay",
    "short": "QOS"
  },
  "Asia/Qyzylorda": {
    "title": "Qyzylorda",
    "short": "QYZ"
  },
  "Asia/Rangoon": {
    "title": "Rangoon",
    "short": "RAN"
  },
  "Asia/Riyadh": {
    "title": "Riyadh",
    "short": "RIY"
  },
  "Asia/Saigon": {
    "title": "Saigon",
    "short": "SAI"
  },
  "Asia/Sakhalin": {
    "title": "Sakhalin",
    "short": "SAK"
  },
  "Asia/Samarkand": {
    "title": "Samarkand",
    "short": "SAM"
  },
  "Asia/Seoul": {
    "title": "Seoul",
    "short": "SEO"
  },
  "Asia/Shanghai": {
    "title": "Shanghai",
    "short": "SHA"
  },
  "Asia/Singapore": {
    "title": "Singapore",
    "short": "SIN"
  },
  "Asia/Srednekolymsk": {
    "title": "Srednekolymsk",
    "short": "SRE"
  },
  "Asia/Taipei": {
    "title": "Taipei",
    "short": "TAI"
  },
  "Asia/Tashkent": {
    "title": "Tashkent",
    "short": "TAS"
  },
  "Asia/Tbilisi": {
    "title": "Tbilisi",
    "short": "TBI"
  },
  "Asia/Tehran": {
    "title": "Tehran",
    "short": "TEH"
  },
  "Asia/Tel_Aviv": {
    "title": "Tel Aviv",
    "short": "TEL"
  },
  "Asia/Thimbu": {
    "title": "Thimbu",
    "short": "THI"
  },
  "Asia/Thimphu": {
    "title": "Thimphu",
    "short": "THI"
  },
  "Asia/Tokyo": {
    "title": "Tokyo",
    "short": "TOK"
  },
  "Asia/Tomsk": {
    "title": "Tomsk",
    "short": "TOM"
  },
  "Asia/Ujung_Pandang": {
    "title": "Ujung Pandang",
    "short": "UJU"
  },
  "Asia/Ulaanbaatar": {
    "title": "Ulaanbaatar",
    "short": "ULA"
  },
  "Asia/Ulan_Bator": {
    "title": "Ulan Bator",
    "short": "ULA"
  },
  "Asia/Urumqi": {
    "title": "Urumqi",
    "short": "URU"
  },
  "Asia/Ust-Nera": {
    "title": "Ust-Nera",
    "short": "UST"
  },
  "Asia/Vientiane": {
    "title": "Vientiane",
    "short": "VIE"
  },
  "Asia/Vladivostok": {
    "title": "Vladivostok",
    "short": "VLA"
  },
  "Asia/Yakutsk": {
    "title": "Yakutsk",
    "short": "YAK"
  },
  "Asia/Yangon": {
    "title": "Yangon",
    "short": "YAN"
  },
  "Asia/Yekaterinburg": {
    "title": "Yekaterinburg",
    "short": "YEK"
  },
  "Asia/Yerevan": {
    "title": "Yerevan",
    "short": "YER"
  },
  "Atlantic/Azores": {
    "title": "Azores",
    "short": "AZO"
  },
  "Atlantic/Bermuda": {
    "title": "Bermuda",
    "short": "BER"
  },
  "Atlantic/Canary": {
    "title": "Canary",
    "short": "CAN"
  },
  "Atlantic/Cape_Verde": {
    "title": "Cape Verde",
    "short": "CAP"
  },
  "Atlantic/Faeroe": {
    "title": "Faeroe",
    "short": "FAE"
  },
  "Atlantic/Faroe": {
    "title": "Faroe",
    "short": "FAR"
  },
  "Atlantic/Jan_Mayen": {
    "title": "Jan Mayen",
    "short": "JAN"
  },
  "Atlantic/Madeira": {
    "title": "Madeira",
    "short": "MAD"
  },
  "Atlantic/Reykjavik": {
    "title": "Reykjavik",
    "short": "REY"
  },
  "Atlantic/South_Georgia": {
    "title": "South Georgia",
    "short": "SOU"
  },
  "Atlantic/St_Helena": {
    "title": "St Helena",
    "short": "ST_"
  },
  "Atlantic/Stanley": {
    "title": "Stanley",
    "short": "STA"
  },
  "Australia/ACT": {
    "title": "ACT",
    "short": "ACT"
  },
  "Australia/Adelaide": {
    "title": "Adelaide",
    "short": "ADE"
  },
  "Australia/Brisbane": {
    "title": "Brisbane",
    "short": "BRI"
  },
  "Australia/Broken_Hill": {
    "title": "Broken Hill",
    "short": "BRO"
  },
  "Australia/Canberra": {
    "title": "Canberra",
    "short": "CAN"
  },
  "Australia/Currie": {
    "title": "Currie",
    "short": "CUR"
  },
  "Australia/Darwin": {
    "title": "Darwin",
    "short": "DAR"
  },
  "Australia/Eucla": {
    "title": "Eucla",
    "short": "EUC"
  },
  "Australia/Hobart": {
    "title": "Hobart",
    "short": "HOB"
  },
  "Australia/LHI": {
    "title": "LHI",
    "short": "LHI"
  },
  "Australia/Lindeman": {
    "title": "Lindeman",
    "short": "LIN"
  },
  "Australia/Lord_Howe": {
    "title": "Lord Howe",
    "short": "LOR"
  },
  "Australia/Melbourne": {
    "title": "Melbourne",
    "short": "MEL"
  },
  "Australia/NSW": {
    "title": "NSW",
    "short": "NSW"
  },
  "Australia/North": {
    "title": "North",
    "short": "NOR"
  },
  "Australia/Perth": {
    "title": "Perth",
    "short": "PER"
  },
  "Australia/Queensland": {
    "title": "Queensland",
    "short": "QUE"
  },
  "Australia/South": {
    "title": "South",
    "short": "SOU"
  },
  "Australia/Sydney": {
    "title": "Sydney",
    "short": "SYD"
  },
  "Australia/Tasmania": {
    "title": "Tasmania",
    "short": "TAS"
  },
  "Australia/Victoria": {
    "title": "Victoria",
    "short": "VIC"
  },
  "Australia/West": {
    "title": "West",
    "short": "WES"
  },
  "Australia/Yancowinna": {
    "title": "Yancowinna",
    "short": "YAN"
  },
  "Brazil/Acre": {
    "title": "Acre",
    "short": "ACR"
  },
  "Brazil/DeNoronha": {
    "title": "DeNoronha",
    "short": "DEN"
  },
  "Brazil/East": {
    "title": "East",
    "short": "EAS"
  },
  "Brazil/West": {
    "title": "West",
    "short": "WES"
  },
  "CET": {
    "title": "CET",
    "short": "CET"
  },
  "CST6CDT": {
    "title": "CST6CDT",
    "short": "CST"
  },
  "Canada/Atlantic": {
    "title": "Atlantic",
    "short": "ATL"
  },
  "Canada/Central": {
    "title": "Central",
    "short": "CEN"
  },
  "Canada/Eastern": {
    "title": "Eastern",
    "short": "EAS"
  },
  "Canada/Mountain": {
    "title": "Mountain",
    "short": "MOU"
  },
  "Canada/Newfoundland": {
    "title": "Newfoundland",
    "short": "NEW"
  },
  "Canada/Pacific": {
    "title": "Pacific",
    "short": "PAC"
  },
  "Canada/Saskatchewan": {
    "title": "Saskatchewan",
    "short": "SAS"
  },
  "Canada/Yukon": {
    "title": "Yukon",
    "short": "YUK"
  },
  "Chile/Continental": {
    "title": "Continental",
    "short": "CON"
  },
  "Chile/EasterIsland": {
    "title": "EasterIsland",
    "short": "EAS"
  },
  "Cuba": {
    "title": "Cuba",
    "short": "CUB"
  },
  "EET": {
    "title": "EET",
    "short": "EET"
  },
  "EST": {
    "title": "EST",
    "short": "EST"
  },
  "EST5EDT": {
    "title": "EST5EDT",
    "short": "EST"
  },
  "Egypt": {
    "title": "Egypt",
    "short": "EGY"
  },
  "Eire": {
    "title": "Eire",
    "short": "EIR"
  },
  "Etc/GMT": {
    "title": "GMT",
    "short": "GMT"
  },
  "Etc/GMT+0": {
    "title": "GMT+0",
    "short": "GMT"
  },
  "Etc/GMT+1": {
    "title": "GMT+1",
    "short": "GMT"
  },
  "Etc/GMT+10": {
    "title": "GMT+10",
    "short": "GMT"
  },
  "Etc/GMT+11": {
    "title": "GMT+11",
    "short": "GMT"
  },
  "Etc/GMT+12": {
    "title": "GMT+12",
    "short": "GMT"
  },
  "Etc/GMT+2": {
    "title": "GMT+2",
    "short": "GMT"
  },
  "Etc/GMT+3": {
    "title": "GMT+3",
    "short": "GMT"
  },
  "Etc/GMT+4": {
    "title": "GMT+4",
    "short": "GMT"
  },
  "Etc/GMT+5": {
    "title": "GMT+5",
    "short": "GMT"
  },
  "Etc/GMT+6": {
    "title": "GMT+6",
    "short": "GMT"
  },
  "Etc/GMT+7": {
    "title": "GMT+7",
    "short": "GMT"
  },
  "Etc/GMT+8": {
    "title": "GMT+8",
    "short": "GMT"
  },
  "Etc/GMT+9": {
    "title": "GMT+9",
    "short": "GMT"
  },
  "Etc/GMT-0": {
    "title": "GMT-0",
    "short": "GMT"
  },
  "Etc/GMT-1": {
    "title": "GMT-1",
    "short": "GMT"
  },
  "Etc/GMT-10": {
    "title": "GMT-10",
    "short": "GMT"
  },
  "Etc/GMT-11": {
    "title": "GMT-11",
    "short": "GMT"
  },
  "Etc/GMT-12": {
    "title": "GMT-12",
    "short": "GMT"
  },
  "Etc/GMT-13": {
    "title": "GMT-13",
    "short": "GMT"
  },
  "Etc/GMT-14": {
    "title": "GMT-14",
    "short": "GMT"
  },
  "Etc/GMT-2": {
    "title": "GMT-2",
    "short": "GMT"
  },
  "Etc/GMT-3": {
    "title": "GMT-3",
    "short": "GMT"
  },
  "Etc/GMT-4": {
    "title": "GMT-4",
    "short": "GMT"
  },
  "Etc/GMT-5": {
    "title": "GMT-5",
    "short": "GMT"
  },
  "Etc/GMT-6": {
    "title": "GMT-6",
    "short": "GMT"
  },
  "Etc/GMT-7": {
    "title": "GMT-7",
    "short": "GMT"
  },
  "Etc/GMT-8": {
    "title": "GMT-8",
    "short": "GMT"
  },
  "Etc/GMT-9": {
    "title": "GMT-9",
    "short": "GMT"
  },
  "Etc/GMT0": {
    "title": "GMT0",
    "short": "GMT"
  },
  "Etc/Greenwich": {
    "title": "Greenwich",
    "short": "GRE"
  },
  "Etc/UCT": {
    "title": "UCT",
    "short": "UCT"
  },
  "Etc/UTC": {
    "title": "UTC",
    "short": "UTC"
  },
  "Etc/Universal": {
    "title": "Universal",
    "short": "UNI"
  },
  "Etc/Zulu": {
    "title": "Zulu",
    "short": "ZUL"
  },
  "Europe/Amsterdam": {
    "title": "Amsterdam",
    "short": "AMS"
  },
  "Europe/Andorra": {
    "title": "Andorra",
    "short": "AND"
  },
  "Europe/Astrakhan": {
    "title": "Astrakhan",
    "short": "AST"
  },
  "Europe/Athens": {
    "title": "Athens",
    "short": "ATH"
  },
  "Europe/Belfast": {
    "title": "Belfast",
    "short": "BEL"
  },
  "Europe/Belgrade": {
    "title": "Belgrade",
    "short": "BEL"
  },
  "Europe/Berlin": {
    "title": "Berlin",
    "short": "BER"
  },
  "Europe/Bratislava": {
    "title": "Bratislava",
    "short": "BRA"
  },
  "Europe/Brussels": {
    "title": "Brussels",
    "short": "BRU"
  },
  "Europe/Bucharest": {
    "title": "Bucharest",
    "short": "BUC"
  },
  "Europe/Budapest": {
    "title": "Budapest",
    "short": "BUD"
  },
  "Europe/Busingen": {
    "title": "Busingen",
    "short": "BUS"
  },
  "Europe/Chisinau": {
    "title": "Chisinau",
    "short": "CHI"
  },
  "Europe/Copenhagen": {
    "title": "Copenhagen",
    "short": "COP"
  },
  "Europe/Dublin": {
    "title": "Dublin",
    "short": "DUB"
  },
  "Europe/Gibraltar": {
    "title": "Gibraltar",
    "short": "GIB"
  },
  "Europe/Guernsey": {
    "title": "Guernsey",
    "short": "GUE"
  },
  "Europe/Helsinki": {
    "title": "Helsinki",
    "short": "HEL"
  },
  "Europe/Isle_of_Man": {
    "title": "Isle of Man",
    "short": "ISL"
  },
  "Europe/Istanbul": {
    "title": "Istanbul",
    "short": "IST"
  },
  "Europe/Jersey": {
    "title": "Jersey",
    "short": "JER"
  },
  "Europe/Kaliningrad": {
    "title": "Kaliningrad",
    "short": "KAL"
  },
  "Europe/Kiev": {
    "title": "Kiev",
    "short": "KIE"
  },
  "Europe/Kirov": {
    "title": "Kirov",
    "short": "KIR"
  },
  "Europe/Kyiv": {
    "title": "Kyiv",
    "short": "KYI"
  },
  "Europe/Lisbon": {
    "title": "Lisbon",
    "short": "LIS"
  },
  "Europe/Ljubljana": {
    "title": "Ljubljana",
    "short": "LJU"
  },
  "Europe/London": {
    "title": "London",
    "short": "LON"
  },
  "Europe/Luxembourg": {
    "title": "Luxembourg",
    "short": "LUX"
  },
  "Europe/Madrid": {
    "title": "Madrid",
    "short": "MAD"
  },
  "Europe/Malta": {
    "title": "Malta",
    "short": "MAL"
  },
  "Europe/Mariehamn": {
    "title": "Mariehamn",
    "short": "MAR"
  },
  "Europe/Minsk": {
    "title": "Minsk",
    "short": "MIN"
  },
  "Europe/Monaco": {
    "title": "Monaco",
    "short": "MON"
  },
  "Europe/Moscow": {
    "title": "Moscow",
    "short": "MOS"
  },
  "Europe/Nicosia": {
    "title": "Nicosia",
    "short": "NIC"
  },
  "Europe/Oslo": {
    "title": "Oslo",
    "short": "OSL"
  },
  "Europe/Paris": {
    "title": "Paris",
    "short": "PAR"
  },
  "Europe/Podgorica": {
    "title": "Podgorica",
    "short": "POD"
  },
  "Europe/Prague": {
    "title": "Prague",
    "short": "PRA"
  },
  "Europe/Riga": {
    "title": "Riga",
    "short": "RIG"
  },
  "Europe/Rome": {
    "title": "Rome",
    "short": "ROM"
  },
  "Europe/Samara": {
    "title": "Samara",
    "short": "SAM"
  },
  "Europe/San_Marino": {
    "title": "San Marino",
    "short": "SAN"
  },
  "Europe/Sarajevo": {
    "title": "Sarajevo",
    "short": "SAR"
  },
  "Europe/Saratov": {
    "title": "Saratov",
    "short": "SAR"
  },
  "Europe/Simferopol": {
    "title": "Simferopol",
    "short": "SIM"
  },
  "Europe/Skopje": {
    "title": "Skopje",
    "short": "SKO"
  },
  "Europe/Sofia": {
    "title": "Sofia",
    "short": "SOF"
  },
  "Europe/Stockholm": {
    "title": "Stockholm",
    "short": "STO"
  },
  "Europe/Tallinn": {
    "title": "Tallinn",
    "short": "TAL"
  },
  "Europe/Tirane": {
    "title": "Tirane",
    "short": "TIR"
  },
  "Europe/Tiraspol": {
    "title": "Tiraspol",
    "short": "TIR"
  },
  "Europe/Ulyanovsk": {
    "title": "Ulyanovsk",
    "short": "ULY"
  },
  "Europe/Uzhgorod": {
    "title": "Uzhgorod",
    "short": "UZH"
  },
  "Europe/Vaduz": {
    "title": "Vaduz",
    "short": "VAD"
  },
  "Europe/Vatican": {
    "title": "Vatican",
    "short": "VAT"
  },
  "Europe/Vienna": {
    "title": "Vienna",
    "short": "VIE"
  },
  "Europe/Vilnius": {
    "title": "Vilnius",
    "short": "VIL"
  },
  "Europe/Volgograd": {
    "title": "Volgograd",
    "short": "VOL"
  },
  "Europe/Warsaw": {
    "title": "Warsaw",
    "short": "WAR"
  },
  "Europe/Zagreb": {
    "title": "Zagreb",
    "short": "ZAG"
  },
  "Europe/Zaporozhye": {
    "title": "Zaporozhye",
    "short": "ZAP"
  },
  "Europe/Zurich": {
    "title": "Zurich",
    "short": "ZUR"
  },
  "GB": {
    "title": "GB",
    "short": "GB"
  },
  "GB-Eire": {
    "title": "GB-Eire",
    "short": "GB-"
  },
  "GMT": {
    "title": "GMT",
    "short": "GMT"
  },
  "GMT+0": {
    "title": "GMT+0",
    "short": "GMT"
  },
  "GMT-0": {
    "title": "GMT-0",
    "short": "GMT"
  },
  "GMT0": {
    "title": "GMT0",
    "short": "GMT"
  },
  "Greenwich": {
    "title": "Greenwich",
    "short": "GRE"
  },
  "HST": {
    "title": "HST",
    "short": "HST"
  },
  "Hongkong": {
    "title": "Hongkong",
    "short": "HON"
  },
  "Iceland": {
    "title": "Iceland",
    "short": "ICE"
  },
  "Indian/Antananarivo": {
    "title": "Antananarivo",
    "short": "ANT"
  },
  "Indian/Chagos": {
    "title": "Chagos",
    "short": "CHA"
  },
  "Indian/Christmas": {
    "title": "Christmas",
    "short": "CHR"
  },
  "Indian/Cocos": {
    "title": "Cocos",
    "short": "COC"
  },
  "Indian/Comoro": {
    "title": "Comoro",
    "short": "COM"
  },
  "Indian/Kerguelen": {
    "title": "Kerguelen",
    "short": "KER"
  },
  "Indian/Mahe": {
    "title": "Mahe",
    "short": "MAH"
  },
  "Indian/Maldives": {
    "title": "Maldives",
    "short": "MAL"
  },
  "Indian/Mauritius": {
    "title": "Mauritius",
    "short": "MAU"
  },
  "Indian/Mayotte": {
    "title": "Mayotte",
    "short": "MAY"
  },
  "Indian/Reunion": {
    "title": "Reunion",
    "short": "REU"
  },
  "Iran": {
    "title": "Iran",
    "short": "IRA"
  },
  "Israel": {
    "title": "Israel",
    "short": "ISR"
  },
  "Jamaica": {
    "title": "Jamaica",
    "short": "JAM"
  },
  "Japan": {
    "title": "Japan",
    "short": "JAP"
  },
  "Kwajalein": {
    "title": "Kwajalein",
    "short": "KWA"
  },
  "Libya": {
    "title": "Libya",
    "short": "LIB"
  },
  "MET": {
    "title": "MET",
    "short": "MET"
  },
  "MST": {
    "title": "MST",
    "short": "MST"
  },
  "MST7MDT": {
    "title": "MST7MDT",
    "short": "MST"
  },
  "Mexico/BajaNorte": {
    "title": "BajaNorte",
    "short": "BAJ"
  },
  "Mexico/BajaSur": {
    "title": "BajaSur",
    "short": "BAJ"
  },
  "Mexico/General": {
    "title": "General",
    "short": "GEN"
  },
  "NZ": {
    "title": "NZ",
    "short": "NZ"
  },
  "NZ-CHAT": {
    "title": "NZ-CHAT",
    "short": "NZ-"
  },
  "Navajo": {
    "title": "Navajo",
    "short": "NAV"
  },
  "PRC": {
    "title": "PRC",
    "short": "PRC"
  },
  "PST8PDT": {
    "title": "PST8PDT",
    "short": "PST"
  },
  "Pacific/Apia": {
    "title": "Apia",
    "short": "API"
  },
  "Pacific/Auckland": {
    "title": "Auckland",
    "short": "AUC"
  },
  "Pacific/Bougainville": {
    "title": "Bougainville",
    "short": "BOU"
  },
  "Pacific/Chatham": {
    "title": "Chatham",
    "short": "CHA"
  },
  "Pacific/Chuuk": {
    "title": "Chuuk",
    "short": "CHU"
  },
  "Pacific/Easter": {
    "title": "Easter",
    "short": "EAS"
  },
  "Pacific/Efate": {
    "title": "Efate",
    "short": "EFA"
  },
  "Pacific/Enderbury": {
    "title": "Enderbury",
    "short": "END"
  },
  "Pacific/Fakaofo": {
    "title": "Fakaofo",
    "short": "FAK"
  },
  "Pacific/Fiji": {
    "title": "Fiji",
    "short": "FIJ"
  },
  "Pacific/Funafuti": {
    "title": "Funafuti",
    "short": "FUN"
  },
  "Pacific/Galapagos": {
    "title": "Galapagos",
    "short": "GAL"
  },
  "Pacific/Gambier": {
    "title": "Gambier",
    "short": "GAM"
  },
  "Pacific/Guadalcanal": {
    "title": "Guadalcanal",
    "short": "GUA"
  },
  "Pacific/Guam": {
    "title": "Guam",
    "short": "GUA"
  },
  "Pacific/Honolulu": {
    "title": "Honolulu",
    "short": "HON"
  },
  "Pacific/Johnston": {
    "title": "Johnston",
    "short": "JOH"
  },
  "Pacific/Kanton": {
    "title": "Kanton",
    "short": "KAN"
  },
  "Pacific/Kiritimati": {
    "title": "Kiritimati",
    "short": "KIR"
  },
  "Pacific/Kosrae": {
    "title": "Kosrae",
    "short": "KOS"
  },
  "Pacific/Kwajalein": {
    "title": "Kwajalein",
    "short": "KWA"
  },
  "Pacific/Majuro": {
    "title": "Majuro",
    "short": "MAJ"
  },
  "Pacific/Marquesas": {
    "title": "Marquesas",
    "short": "MAR"
  },
  "Pacific/Midway": {
    "title": "Midway",
    "short": "MID"
  },
  "Pacific/Nauru": {
    "title": "Nauru",
    "short": "NAU"
  },
  "Pacific/Niue": {
    "title": "Niue",
    "short": "NIU"
  },
  "Pacific/Norfolk": {
    "title": "Norfolk",
    "short": "NOR"
  },
  "Pacific/Noumea": {
    "title": "Noumea",
    "short": "NOU"
  },
  "Pacific/Pago_Pago": {
    "title": "Pago Pago",
    "short": "PAG"
  },
  "Pacific/Palau": {
    "title": "Palau",
    "short": "PAL"
  },
  "Pacific/Pitcairn": {
    "title": "Pitcairn",
    "short": "PIT"
  },
  "Pacific/Pohnpei": {
    "title": "Pohnpei",
    "short": "POH"
  },
  "Pacific/Ponape": {
    "title": "Ponape",
    "short": "PON"
  },
  "Pacific/Port_Moresby": {
    "title": "Port Moresby",
    "short": "POR"
  },
  "Pacific/Rarotonga": {
    "title": "Rarotonga",
    "short": "RAR"
  },
  "Pacific/Saipan": {
    "title": "Saipan",
    "short": "SAI"
  },
  "Pacific/Samoa": {
    "title": "Samoa",
    "short": "SAM"
  },
  "Pacific/Tahiti": {
    "title": "Tahiti",
    "short": "TAH"
  },
  "Pacific/Tarawa": {
    "title": "Tarawa",
    "short": "TAR"
  },
  "Pacific/Tongatapu": {
    "title": "Tongatapu",
    "short": "TON"
  },
  "Pacific/Truk": {
    "title": "Truk",
    "short": "TRU"
  },
  "Pacific/Wake": {
    "title": "Wake",
    "short": "WAK"
  },
  "Pacific/Wallis": {
    "title": "Wallis",
    "short": "WAL"
  },
  "Pacific/Yap": {
    "title": "Yap",
    "short": "YAP"
  },
  "Poland": {
    "title": "Poland",
    "short": "POL"
  },
  "Portugal": {
    "title": "Portugal",
    "short": "POR"
  },
  "ROC": {
    "title": "ROC",
    "short": "ROC"
  },
  "ROK": {
    "title": "ROK",
    "short": "ROK"
  },
  "Singapore": {
    "title": "Singapore",
    "short": "SIN"
  },
  "Turkey": {
    "title": "Turkey",
    "short": "TUR"
  },
  "UCT": {
    "title": "UCT",
    "short": "UCT"
  },
  "US/Alaska": {
    "title": "Alaska",
    "short": "ALA"
  },
  "US/Aleutian": {
    "title": "Aleutian",
    "short": "ALE"
  },
  "US/Arizona": {
    "title": "Arizona",
    "short": "ARI"
  },
  "US/Central": {
    "title": "Central",
    "short": "CEN"
  },
  "US/East-Indiana": {
    "title": "East-Indiana",
    "short": "EAS"
  },
  "US/Eastern": {
    "title": "Eastern",
    "short": "EAS"
  },
  "US/Hawaii": {
    "title": "Hawaii",
    "short": "HAW"
  },
  "US/Indiana-Starke": {
    "title": "Indiana-Starke",
    "short": "IND"
  },
  "US/Michigan": {
    "title": "Michigan",
    "short": "MIC"
  },
  "US/Mountain": {
    "title": "Mountain",
    "short": "MOU"
  },
  "US/Pacific": {
    "title": "Pacific",
    "short": "PAC"
  },
  "US/Samoa": {
    "title": "Samoa",
    "short": "SAM"
  },
  "UTC": {
    "title": "UTC",
    "short": "UTC"
  },
  "Universal": {
    "title": "Universal",
    "short": "UNI"
  },
  "W-SU": {
    "title": "W-SU",
    "short": "W-S"
  },
  "WET": {
    "title": "WET",
    "short": "WET"
  },
  "Zulu": {
    "title": "Zulu",
    "short": "ZUL"
  }
};

export default class App extends Homey.App {

  async onInit() {
    this.homey.dashboards.getWidget('analog-clocks-1').registerSettingAutocompleteListener('clock1', this.onTimezoneAutocomplete);
    this.homey.dashboards.getWidget('analog-clocks-1').registerSettingAutocompleteListener('clock2', this.onTimezoneAutocomplete);
    this.homey.dashboards.getWidget('analog-clocks-1').registerSettingAutocompleteListener('clock3', this.onTimezoneAutocomplete);

    this.homey.dashboards.getWidget('analog-clocks-2').registerSettingAutocompleteListener('clock1', this.onTimezoneAutocomplete);
    this.homey.dashboards.getWidget('analog-clocks-2').registerSettingAutocompleteListener('clock2', this.onTimezoneAutocomplete);
    this.homey.dashboards.getWidget('analog-clocks-2').registerSettingAutocompleteListener('clock3', this.onTimezoneAutocomplete);
    this.homey.dashboards.getWidget('analog-clocks-2').registerSettingAutocompleteListener('clock4', this.onTimezoneAutocomplete);
  }

  onTimezoneAutocomplete = async (query) => {
    const result = Object.entries(TIMEZONES)
      .map(([key, value]) => ({
        id: key,
        name: value.title,
        short: value.short,
      }))
      .filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    result.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return result;
  }

}