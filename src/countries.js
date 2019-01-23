/**
  A list of countries with their appropriate flags (emojis),
  keyed by the country ISO code
*/
const COUNTRIES = {
  "AC":{"name":"Ascension Island","flag":"🇦🇨","code":"AC"},
  "AD":{"name":"Andorra","flag":"🇦🇩","code":"AD"},
  "AE":{"name":"United Arab Emirates","flag":"🇦🇪","code":"AE"},
  "AF":{"name":"Afghanistan","flag":"🇦🇫","code":"AF"},
  "AG":{"name":"Antigua & Barbuda","flag":"🇦🇬","code":"AG"},
  "AI":{"name":"Anguilla","flag":"🇦🇮","code":"AI"},
  "AL":{"name":"Albania","flag":"🇦🇱","code":"AL"},
  "AM":{"name":"Armenia","flag":"🇦🇲","code":"AM"},
  "AO":{"name":"Angola","flag":"🇦🇴","code":"AO"},
  "AQ":{"name":"Antarctica","flag":"🇦🇶","code":"AQ"},
  "AR":{"name":"Argentina","flag":"🇦🇷","code":"AR"},
  "AS":{"name":"American Samoa","flag":"🇦🇸","code":"AS"},
  "AT":{"name":"Austria","flag":"🇦🇹","code":"AT"},
  "AU":{"name":"Australia","flag":"🇦🇺","code":"AU"},
  "AW":{"name":"Aruba","flag":"🇦🇼","code":"AW"},
  "AX":{"name":"Åland Islands","flag":"🇦🇽","code":"AX"},
  "AZ":{"name":"Azerbaijan","flag":"🇦🇿","code":"AZ"},
  "BA":{"name":"Bosnia & Herzegovina","flag":"🇧🇦","code":"BA"},
  "BB":{"name":"Barbados","flag":"🇧🇧","code":"BB"},
  "BD":{"name":"Bangladesh","flag":"🇧🇩","code":"BD"},
  "BE":{"name":"Belgium","flag":"🇧🇪","code":"BE"},
  "BF":{"name":"Burkina Faso","flag":"🇧🇫","code":"BF"},
  "BG":{"name":"Bulgaria","flag":"🇧🇬","code":"BG"},
  "BH":{"name":"Bahrain","flag":"🇧🇭","code":"BH"},
  "BI":{"name":"Burundi","flag":"🇧🇮","code":"BI"},
  "BJ":{"name":"Benin","flag":"🇧🇯","code":"BJ"},
  "BL":{"name":"St. Barthélemy","flag":"🇧🇱","code":"BL"},
  "BM":{"name":"Bermuda","flag":"🇧🇲","code":"BM"},
  "BN":{"name":"Brunei","flag":"🇧🇳","code":"BN"},
  "BO":{"name":"Bolivia","flag":"🇧🇴","code":"BO"},
  "BQ":{"name":"Caribbean Netherlands","flag":"🇧🇶","code":"BQ"},
  "BR":{"name":"Brazil","flag":"🇧🇷","code":"BR"},
  "BS":{"name":"Bahamas","flag":"🇧🇸","code":"BS"},
  "BT":{"name":"Bhutan","flag":"🇧🇹","code":"BT"},
  "BV":{"name":"Bouvet Island","flag":"🇧🇻","code":"BV"},
  "BW":{"name":"Botswana","flag":"🇧🇼","code":"BW"},
  "BY":{"name":"Belarus","flag":"🇧🇾","code":"BY"},
  "BZ":{"name":"Belize","flag":"🇧🇿","code":"BZ"},
  "CA":{"name":"Canada","flag":"🇨🇦","code":"CA"},
  "CC":{"name":"Cocos (Keeling) Islands","flag":"🇨🇨","code":"CC"},
  "CD":{"name":"Congo - Kinshasa","flag":"🇨🇩","code":"CD"},
  "CF":{"name":"Central African Republic","flag":"🇨🇫","code":"CF"},
  "CG":{"name":"Congo - Brazzaville","flag":"🇨🇬","code":"CG"},
  "CH":{"name":"Switzerland","flag":"🇨🇭","code":"CH"},
  "CI":{"name":"Côte d’Ivoire","flag":"🇨🇮","code":"CI"},
  "CK":{"name":"Cook Islands","flag":"🇨🇰","code":"CK"},
  "CL":{"name":"Chile","flag":"🇨🇱","code":"CL"},
  "CM":{"name":"Cameroon","flag":"🇨🇲","code":"CM"},
  "CN":{"name":"China","flag":"🇨🇳","code":"CN"},
  "CO":{"name":"Colombia","flag":"🇨🇴","code":"CO"},
  "CP":{"name":"Clipperton Island","flag":"🇨🇵","code":"CP"},
  "CR":{"name":"Costa Rica","flag":"🇨🇷","code":"CR"},
  "CU":{"name":"Cuba","flag":"🇨🇺","code":"CU"},
  "CV":{"name":"Cape Verde","flag":"🇨🇻","code":"CV"},
  "CW":{"name":"Curaçao","flag":"🇨🇼","code":"CW"},
  "CX":{"name":"Christmas Island","flag":"🇨🇽","code":"CX"},
  "CY":{"name":"Cyprus","flag":"🇨🇾","code":"CY"},
  "CZ":{"name":"Czechia","flag":"🇨🇿","code":"CZ"},
  "DE":{"name":"Germany","flag":"🇩🇪","code":"DE"},
  "DG":{"name":"Diego Garcia","flag":"🇩🇬","code":"DG"},
  "DJ":{"name":"Djibouti","flag":"🇩🇯","code":"DJ"},
  "DK":{"name":"Denmark","flag":"🇩🇰","code":"DK"},
  "DM":{"name":"Dominica","flag":"🇩🇲","code":"DM"},
  "DO":{"name":"Dominican Republic","flag":"🇩🇴","code":"DO"},
  "DZ":{"name":"Algeria","flag":"🇩🇿","code":"DZ"},
  "EA":{"name":"Ceuta & Melilla","flag":"🇪🇦","code":"EA"},
  "EC":{"name":"Ecuador","flag":"🇪🇨","code":"EC"},
  "EE":{"name":"Estonia","flag":"🇪🇪","code":"EE"},
  "EG":{"name":"Egypt","flag":"🇪🇬","code":"EG"},
  "EH":{"name":"Western Sahara","flag":"🇪🇭","code":"EH"},
  "ER":{"name":"Eritrea","flag":"🇪🇷","code":"ER"},
  "ES":{"name":"Spain","flag":"🇪🇸","code":"ES"},
  "ET":{"name":"Ethiopia","flag":"🇪🇹","code":"ET"},
  "EU":{"name":"European Union","flag":"🇪🇺","code":"EU"},
  "FI":{"name":"Finland","flag":"🇫🇮","code":"FI"},
  "FJ":{"name":"Fiji","flag":"🇫🇯","code":"FJ"},
  "FK":{"name":"Falkland Islands","flag":"🇫🇰","code":"FK"},
  "FM":{"name":"Micronesia","flag":"🇫🇲","code":"FM"},
  "FO":{"name":"Faroe Islands","flag":"🇫🇴","code":"FO"},
  "FR":{"name":"France","flag":"🇫🇷","code":"FR"},
  "GA":{"name":"Gabon","flag":"🇬🇦","code":"GA"},
  "GB":{"name":"United Kingdom","flag":"🇬🇧","code":"GB"},
  "GD":{"name":"Grenada","flag":"🇬🇩","code":"GD"},
  "GE":{"name":"Georgia","flag":"🇬🇪","code":"GE"},
  "GF":{"name":"French Guiana","flag":"🇬🇫","code":"GF"},
  "GG":{"name":"Guernsey","flag":"🇬🇬","code":"GG"},
  "GH":{"name":"Ghana","flag":"🇬🇭","code":"GH"},
  "GI":{"name":"Gibraltar","flag":"🇬🇮","code":"GI"},
  "GL":{"name":"Greenland","flag":"🇬🇱","code":"GL"},
  "GM":{"name":"Gambia","flag":"🇬🇲","code":"GM"},
  "GN":{"name":"Guinea","flag":"🇬🇳","code":"GN"},
  "GP":{"name":"Guadeloupe","flag":"🇬🇵","code":"GP"},
  "GQ":{"name":"Equatorial Guinea","flag":"🇬🇶","code":"GQ"},
  "GR":{"name":"Greece","flag":"🇬🇷","code":"GR"},
  "GS":{"name":"South Georgia & South Sandwich Islands","flag":"🇬🇸","code":"GS"},
  "GT":{"name":"Guatemala","flag":"🇬🇹","code":"GT"},
  "GU":{"name":"Guam","flag":"🇬🇺","code":"GU"},
  "GW":{"name":"Guinea-Bissau","flag":"🇬🇼","code":"GW"},
  "GY":{"name":"Guyana","flag":"🇬🇾","code":"GY"},
  "HK":{"name":"Hong Kong SAR China","flag":"🇭🇰","code":"HK"},
  "HM":{"name":"Heard & McDonald Islands","flag":"🇭🇲","code":"HM"},
  "HN":{"name":"Honduras","flag":"🇭🇳","code":"HN"},
  "HR":{"name":"Croatia","flag":"🇭🇷","code":"HR"},
  "HT":{"name":"Haiti","flag":"🇭🇹","code":"HT"},
  "HU":{"name":"Hungary","flag":"🇭🇺","code":"HU"},
  "IC":{"name":"Canary Islands","flag":"🇮🇨","code":"IC"},
  "ID":{"name":"Indonesia","flag":"🇮🇩","code":"ID"},
  "IE":{"name":"Ireland","flag":"🇮🇪","code":"IE"},
  "IL":{"name":"Israel","flag":"🇮🇱","code":"IL"},
  "IM":{"name":"Isle of Man","flag":"🇮🇲","code":"IM"},
  "IN":{"name":"India","flag":"🇮🇳","code":"IN"},
  "IO":{"name":"British Indian Ocean Territory","flag":"🇮🇴","code":"IO"},
  "IQ":{"name":"Iraq","flag":"🇮🇶","code":"IQ"},
  "IR":{"name":"Iran","flag":"🇮🇷","code":"IR"},
  "IS":{"name":"Iceland","flag":"🇮🇸","code":"IS"},
  "IT":{"name":"Italy","flag":"🇮🇹","code":"IT"},
  "JE":{"name":"Jersey","flag":"🇯🇪","code":"JE"},
  "JM":{"name":"Jamaica","flag":"🇯🇲","code":"JM"},
  "JO":{"name":"Jordan","flag":"🇯🇴","code":"JO"},
  "JP":{"name":"Japan","flag":"🇯🇵","code":"JP"},
  "KE":{"name":"Kenya","flag":"🇰🇪","code":"KE"},
  "KG":{"name":"Kyrgyzstan","flag":"🇰🇬","code":"KG"},
  "KH":{"name":"Cambodia","flag":"🇰🇭","code":"KH"},
  "KI":{"name":"Kiribati","flag":"🇰🇮","code":"KI"},
  "KM":{"name":"Comoros","flag":"🇰🇲","code":"KM"},
  "KN":{"name":"St. Kitts & Nevis","flag":"🇰🇳","code":"KN"},
  "KP":{"name":"North Korea","flag":"🇰🇵","code":"KP"},
  "KR":{"name":"South Korea","flag":"🇰🇷","code":"KR"},
  "KW":{"name":"Kuwait","flag":"🇰🇼","code":"KW"},
  "KY":{"name":"Cayman Islands","flag":"🇰🇾","code":"KY"},
  "KZ":{"name":"Kazakhstan","flag":"🇰🇿","code":"KZ"},
  "LA":{"name":"Laos","flag":"🇱🇦","code":"LA"},
  "LB":{"name":"Lebanon","flag":"🇱🇧","code":"LB"},
  "LC":{"name":"St. Lucia","flag":"🇱🇨","code":"LC"},
  "LI":{"name":"Liechtenstein","flag":"🇱🇮","code":"LI"},
  "LK":{"name":"Sri Lanka","flag":"🇱🇰","code":"LK"},
  "LR":{"name":"Liberia","flag":"🇱🇷","code":"LR"},
  "LS":{"name":"Lesotho","flag":"🇱🇸","code":"LS"},
  "LT":{"name":"Lithuania","flag":"🇱🇹","code":"LT"},
  "LU":{"name":"Luxembourg","flag":"🇱🇺","code":"LU"},
  "LV":{"name":"Latvia","flag":"🇱🇻","code":"LV"},
  "LY":{"name":"Libya","flag":"🇱🇾","code":"LY"},
  "MA":{"name":"Morocco","flag":"🇲🇦","code":"MA"},
  "MC":{"name":"Monaco","flag":"🇲🇨","code":"MC"},
  "MD":{"name":"Moldova","flag":"🇲🇩","code":"MD"},
  "ME":{"name":"Montenegro","flag":"🇲🇪","code":"ME"},
  "MF":{"name":"St. Martin","flag":"🇲🇫","code":"MF"},
  "MG":{"name":"Madagascar","flag":"🇲🇬","code":"MG"},
  "MH":{"name":"Marshall Islands","flag":"🇲🇭","code":"MH"},
  "MK":{"name":"Macedonia","flag":"🇲🇰","code":"MK"},
  "ML":{"name":"Mali","flag":"🇲🇱","code":"ML"},
  "MM":{"name":"Myanmar (Burma)","flag":"🇲🇲","code":"MM"},
  "MN":{"name":"Mongolia","flag":"🇲🇳","code":"MN"},
  "MO":{"name":"Macau Sar China","flag":"🇲🇴","code":"MO"},
  "MP":{"name":"Northern Mariana Islands","flag":"🇲🇵","code":"MP"},
  "MQ":{"name":"Martinique","flag":"🇲🇶","code":"MQ"},
  "MR":{"name":"Mauritania","flag":"🇲🇷","code":"MR"},
  "MS":{"name":"Montserrat","flag":"🇲🇸","code":"MS"},
  "MT":{"name":"Malta","flag":"🇲🇹","code":"MT"},
  "MU":{"name":"Mauritius","flag":"🇲🇺","code":"MU"},
  "MV":{"name":"Maldives","flag":"🇲🇻","code":"MV"},
  "MW":{"name":"Malawi","flag":"🇲🇼","code":"MW"},
  "MX":{"name":"Mexico","flag":"🇲🇽","code":"MX"},
  "MY":{"name":"Malaysia","flag":"🇲🇾","code":"MY"},
  "MZ":{"name":"Mozambique","flag":"🇲🇿","code":"MZ"},
  "NA":{"name":"Namibia","flag":"🇳🇦","code":"NA"},
  "NC":{"name":"New Caledonia","flag":"🇳🇨","code":"NC"},
  "NE":{"name":"Niger","flag":"🇳🇪","code":"NE"},
  "NF":{"name":"Norfolk Island","flag":"🇳🇫","code":"NF"},
  "NG":{"name":"Nigeria","flag":"🇳🇬","code":"NG"},
  "NI":{"name":"Nicaragua","flag":"🇳🇮","code":"NI"},
  "NL":{"name":"Netherlands","flag":"🇳🇱","code":"NL"},
  "NO":{"name":"Norway","flag":"🇳🇴","code":"NO"},
  "NP":{"name":"Nepal","flag":"🇳🇵","code":"NP"},
  "NR":{"name":"Nauru","flag":"🇳🇷","code":"NR"},
  "NU":{"name":"Niue","flag":"🇳🇺","code":"NU"},
  "NZ":{"name":"New Zealand","flag":"🇳🇿","code":"NZ"},
  "OM":{"name":"Oman","flag":"🇴🇲","code":"OM"},
  "PA":{"name":"Panama","flag":"🇵🇦","code":"PA"},
  "PE":{"name":"Peru","flag":"🇵🇪","code":"PE"},
  "PF":{"name":"French Polynesia","flag":"🇵🇫","code":"PF"},
  "PG":{"name":"Papua New Guinea","flag":"🇵🇬","code":"PG"},
  "PH":{"name":"Philippines","flag":"🇵🇭","code":"PH"},
  "PK":{"name":"Pakistan","flag":"🇵🇰","code":"PK"},
  "PL":{"name":"Poland","flag":"🇵🇱","code":"PL"},
  "PM":{"name":"St. Pierre & Miquelon","flag":"🇵🇲","code":"PM"},
  "PN":{"name":"Pitcairn Islands","flag":"🇵🇳","code":"PN"},
  "PR":{"name":"Puerto Rico","flag":"🇵🇷","code":"PR"},
  "PS":{"name":"Palestinian Territories","flag":"🇵🇸","code":"PS"},
  "PT":{"name":"Portugal","flag":"🇵🇹","code":"PT"},
  "PW":{"name":"Palau","flag":"🇵🇼","code":"PW"},
  "PY":{"name":"Paraguay","flag":"🇵🇾","code":"PY"},
  "QA":{"name":"Qatar","flag":"🇶🇦","code":"QA"},
  "RE":{"name":"Réunion","flag":"🇷🇪","code":"RE"},
  "RO":{"name":"Romania","flag":"🇷🇴","code":"RO"},
  "RS":{"name":"Serbia","flag":"🇷🇸","code":"RS"},
  "RU":{"name":"Russia","flag":"🇷🇺","code":"RU"},
  "RW":{"name":"Rwanda","flag":"🇷🇼","code":"RW"},
  "SA":{"name":"Saudi Arabia","flag":"🇸🇦","code":"SA"},
  "SB":{"name":"Solomon Islands","flag":"🇸🇧","code":"SB"},
  "SC":{"name":"Seychelles","flag":"🇸🇨","code":"SC"},
  "SD":{"name":"Sudan","flag":"🇸🇩","code":"SD"},
  "SE":{"name":"Sweden","flag":"🇸🇪","code":"SE"},
  "SG":{"name":"Singapore","flag":"🇸🇬","code":"SG"},
  "SH":{"name":"St. Helena","flag":"🇸🇭","code":"SH"},
  "SI":{"name":"Slovenia","flag":"🇸🇮","code":"SI"},
  "SJ":{"name":"Svalbard & Jan Mayen","flag":"🇸🇯","code":"SJ"},
  "SK":{"name":"Slovakia","flag":"🇸🇰","code":"SK"},
  "SL":{"name":"Sierra Leone","flag":"🇸🇱","code":"SL"},
  "SM":{"name":"San Marino","flag":"🇸🇲","code":"SM"},
  "SN":{"name":"Senegal","flag":"🇸🇳","code":"SN"},
  "SO":{"name":"Somalia","flag":"🇸🇴","code":"SO"},
  "SR":{"name":"Suriname","flag":"🇸🇷","code":"SR"},
  "SS":{"name":"South Sudan","flag":"🇸🇸","code":"SS"},
  "ST":{"name":"São Tomé & Príncipe","flag":"🇸🇹","code":"ST"},
  "SV":{"name":"El Salvador","flag":"🇸🇻","code":"SV"},
  "SX":{"name":"Sint Maarten","flag":"🇸🇽","code":"SX"},
  "SY":{"name":"Syria","flag":"🇸🇾","code":"SY"},
  "SZ":{"name":"Swaziland","flag":"🇸🇿","code":"SZ"},
  "TA":{"name":"Tristan Da Cunha","flag":"🇹🇦","code":"TA"},
  "TC":{"name":"Turks & Caicos Islands","flag":"🇹🇨","code":"TC"},
  "TD":{"name":"Chad","flag":"🇹🇩","code":"TD"},
  "TF":{"name":"French Southern Territories","flag":"🇹🇫","code":"TF"},
  "TG":{"name":"Togo","flag":"🇹🇬","code":"TG"},
  "TH":{"name":"Thailand","flag":"🇹🇭","code":"TH"},
  "TJ":{"name":"Tajikistan","flag":"🇹🇯","code":"TJ"},
  "TK":{"name":"Tokelau","flag":"🇹🇰","code":"TK"},
  "TL":{"name":"Timor-Leste","flag":"🇹🇱","code":"TL"},
  "TM":{"name":"Turkmenistan","flag":"🇹🇲","code":"TM"},
  "TN":{"name":"Tunisia","flag":"🇹🇳","code":"TN"},
  "TO":{"name":"Tonga","flag":"🇹🇴","code":"TO"},
  "TR":{"name":"Turkey","flag":"🇹🇷","code":"TR"},
  "TT":{"name":"Trinidad & Tobago","flag":"🇹🇹","code":"TT"},
  "TV":{"name":"Tuvalu","flag":"🇹🇻","code":"TV"},
  "TW":{"name":"Taiwan","flag":"🇹🇼","code":"TW"},
  "TZ":{"name":"Tanzania","flag":"🇹🇿","code":"TZ"},
  "UA":{"name":"Ukraine","flag":"🇺🇦","code":"UA"},
  "UG":{"name":"Uganda","flag":"🇺🇬","code":"UG"},
  "UM":{"name":"U.S. Outlying Islands","flag":"🇺🇲","code":"UM"},
  "UN":{"name":"United Nations","flag":"🇺🇳","code":"UN"},
  "US":{"name":"United States","flag":"🇺🇸","code":"US"},
  "UY":{"name":"Uruguay","flag":"🇺🇾","code":"UY"},
  "UZ":{"name":"Uzbekistan","flag":"🇺🇿","code":"UZ"},
  "VA":{"name":"Vatican City","flag":"🇻🇦","code":"VA"},
  "VC":{"name":"St. Vincent & Grenadines","flag":"🇻🇨","code":"VC"},
  "VE":{"name":"Venezuela","flag":"🇻🇪","code":"VE"},
  "VG":{"name":"British Virgin Islands","flag":"🇻🇬","code":"VG"},
  "VI":{"name":"U.S. Virgin Islands","flag":"🇻🇮","code":"VI"},
  "VN":{"name":"Vietnam","flag":"🇻🇳","code":"VN"},
  "VU":{"name":"Vanuatu","flag":"🇻🇺","code":"VU"},
  "WF":{"name":"Wallis & Futuna","flag":"🇼🇫","code":"WF"},
  "WS":{"name":"Samoa","flag":"🇼🇸","code":"WS"},
  "XK":{"name":"Kosovo","flag":"🇽🇰","code":"XK"},
  "YE":{"name":"Yemen","flag":"🇾🇪","code":"YE"},
  "YT":{"name":"Mayotte","flag":"🇾🇹","code":"YT"},
  "ZA":{"name":"South Africa","flag":"🇿🇦","code":"ZA"},
  "ZM":{"name":"Zambia","flag":"🇿🇲","code":"ZM"},
  "ZW":{"name":"Zimbabwe","flag":"🇿🇼","code":"ZW"}
}

/**
  Frequently used aliases/misspellings for a fallback
*/
const COUNTRY_ALIASES = [
  [ 'U.S.A.', COUNTRIES['US'] ],
  [ 'U.K.', COUNTRIES['GB'] ],
]

/**
  Country look-up-table (map) generated for fast country look-up
*/
const LUT = new Map()
{
  // Map to all countries
  Object.values(COUNTRIES).forEach(c => {
    LUT.set(c.code.toLowerCase(), c)
    LUT.set(c.name.toLowerCase(), c)

    // Allow generating an alias with "."-s (dots) removed
    if (c.name.indexOf('.') >= 0) COUNTRY_ALIASES.push([ c.name, c])

    // Add a permutation for "&" expanded to "and"
    if (c.name.indexOf('&') >= 0) COUNTRY_ALIASES.push([ c.name.replace(/&/g,'and'), c])
  })

  // Map to all aliases
  COUNTRY_ALIASES.forEach(([from, to]) => {
    LUT.set(from.toLowerCase(), to)

    // If alias contains "."-s, also alias a version with dots removed
    if (from.indexOf('.') >= 0) {
      LUT.set( from.replace(/\./g,'').toLowerCase(), to )
    }
  })
}

/**
  Looks up a country by ISO code or country name and returns
  a copy of the lookup object (to avoid the country database
  to be modified by the caller)
*/
export function getCountry(country) {
  return Object.assign({}, LUT.get(country.toLowerCase()))
}


/**
  The unicode codepoint distance between "Regional Indicator Symbol Letter A"
  and the standard ASCII "Capital A" letter. Since regional indicator symbols
  are congruent with the ASCII letters there is an easy 1-to-1 conversion
  between the country codes (in ASCII) and their flags (expressed as the country
  code with regional indicators, displayed as flags on supporting systems)

  String.fromCodePoint(0x1f1e6) => "🇦"
  String.fromCodePoint(65)      => "A"
  0x1f1e6 - 65 = 127397
*/
const COUNTRY_INDICATOR_TO_ASCII_DIFF = 127397

/**
  Converts the country flag emoji to the ISO code
*/
export function flagToIso(flag) {
  return [
    flag.codePointAt(0)-COUNTRY_INDICATOR_TO_ASCII_DIFF,
    flag.codePointAt(2)-COUNTRY_INDICATOR_TO_ASCII_DIFF
  ].map(
    i => String.fromCodePoint(i)
  ).join('')
}

/**
  Converts the country ISO code into the country flag emoji
*/
export function isoToFlag(iso) {
  return iso.split('').map(
    s => s.charCodeAt(0)+COUNTRY_INDICATOR_TO_ASCII_DIFF
  ).reduce(
    (s, cp) => s+String.fromCodePoint(cp)
  , '')
}
