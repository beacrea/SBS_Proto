var stateList = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },{
        "name": "Alaska",
        "abbreviation": "AK"
    },{
        "name": "Arizona",
        "abbreviation": "AZ"
    },{
        "name": "Arkansas",
        "abbreviation": "AR"
    },{
        "name": "California",
        "abbreviation": "CA"
    },{
        "name": "Colorado",
        "abbreviation": "CO"
    },{
        "name": "Connecticut",
        "abbreviation": "CT"
    },{
        "name": "Delaware",
        "abbreviation": "DE"
    },{
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },{
        "name": "Florida",
        "abbreviation": "FL"
    },{
        "name": "Georgia",
        "abbreviation": "GA"
    },{
        "name": "Hawaii",
        "abbreviation": "HI"
    },{
        "name": "Idaho",
        "abbreviation": "ID"
    },{
        "name": "Illinois",
        "abbreviation": "IL"
    },{
        "name": "Indiana",
        "abbreviation": "IN"
    },{
        "name": "Iowa",
        "abbreviation": "IA"
    },{
        "name": "Kansas",
        "abbreviation": "KS"
    },{
        "name": "Kentucky",
        "abbreviation": "KY"
    },{
        "name": "Louisiana",
        "abbreviation": "LA"
    },{
        "name": "Maine",
        "abbreviation": "ME"
    },{
        "name": "Maryland",
        "abbreviation": "MD"
    },{
        "name": "Massachusetts",
        "abbreviation": "MA"
    },{
        "name": "Michigan",
        "abbreviation": "MI"
    },{
        "name": "Minnesota",
        "abbreviation": "MN"
    },{
        "name": "Mississippi",
        "abbreviation": "MS"
    },{
        "name": "Missouri",
        "abbreviation": "MO"
    },{
        "name": "Montana",
        "abbreviation": "MT"
    },{
        "name": "Nebraska",
        "abbreviation": "NE"
    },{
        "name": "Nevada",
        "abbreviation": "NV"
    },{
        "name": "New Hampshire",
        "abbreviation": "NH"
    },{
        "name": "New Jersey",
        "abbreviation": "NJ"
    },{
        "name": "New Mexico",
        "abbreviation": "NM"
    },{
        "name": "New York",
        "abbreviation": "NY"
    },{
        "name": "North Carolina",
        "abbreviation": "NC"
    },{
        "name": "North Dakota",
        "abbreviation": "ND"
    },{
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },{
        "name": "Ohio",
        "abbreviation": "OH"
    },{
        "name": "Oklahoma",
        "abbreviation": "OK"
    },{
        "name": "Oregon",
        "abbreviation": "OR"
    },{
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },{
        "name": "Rhode Island",
        "abbreviation": "RI"
    },{
        "name": "South Carolina",
        "abbreviation": "SC"
    },{
        "name": "South Dakota",
        "abbreviation": "SD"
    },{
        "name": "Tennessee",
        "abbreviation": "TN"
    },{
        "name": "Texas",
        "abbreviation": "TX"
    },{
        "name": "Utah",
        "abbreviation": "UT"
    },{
        "name": "Vermont",
        "abbreviation": "VT"
    },{
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },{
        "name": "Virginia",
        "abbreviation": "VA"
    },{
        "name": "Washington",
        "abbreviation": "WA"
    },{
        "name": "West Virginia",
        "abbreviation": "WV"
    },{
        "name": "Wisconsin",
        "abbreviation": "WI"
    },{
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

var contactInfo = [
    {
        "picture": "http://placehold.it/32x32",
        "company": "Sequitur",
        "street": "849 Kimball Street",
        "city": "Marienthal",
        "state": "Louisiana",
        "zip": 5597,
        "phone": "+1 (859) 511-2850",
        "fax": "+1 (871) 510-2441"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Corecom",
        "street": "324 Elm Place",
        "city": "Yonah",
        "state": "Illinois",
        "zip": 6527,
        "phone": "+1 (858) 593-3993",
        "fax": "+1 (840) 514-3873"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Zytrek",
        "street": "952 Elliott Place",
        "city": "Carlton",
        "state": "California",
        "zip": 2572,
        "phone": "+1 (992) 597-2396",
        "fax": "+1 (937) 446-2585"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Isotrack",
        "street": "796 Woodside Avenue",
        "city": "Juntura",
        "state": "North Carolina",
        "zip": 8580,
        "phone": "+1 (997) 504-3498",
        "fax": "+1 (971) 455-3005"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Tubalum",
        "street": "638 Wilson Street",
        "city": "Hegins",
        "state": "Pennsylvania",
        "zip": 4230,
        "phone": "+1 (838) 416-2316",
        "fax": "+1 (917) 465-2353"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Bovis",
        "street": "447 Coyle Street",
        "city": "Eureka",
        "state": "Arizona",
        "zip": 6495,
        "phone": "+1 (886) 510-3062",
        "fax": "+1 (865) 554-2180"
    }
];

var stateServices = [
    'Address Change Request (Business Entities) via OLS',
    'Address Change Request (Individuals) via NIPR',
    'Company Lookup',
    'Course Lookup with Offerings',
    'Email Maintenance',
    'Generate a Report', 
    'Licensee Lookup',
    'NIPR Attachment Warehouse',
    'Nonresident Original Application',
    'Nonresident Renewals',
    'Print Your Education Transcript',
    'Print Your License',
    'Prometric (Check Your CE)',
    'PSI (Exam Information)',
    'Resident Original Application',
    'Resident Renewals'
];

var stateWrite = function (array) {
    var statesHTML = "<option class=\'option-default\'>Choose a State</option>";
    
    for (var i=0; i<array.length; i++){
        statesHTML += "<option>" + stateList[i].name + "</option>";
    }
    
    return statesHTML;
};

var stateData = stateWrite(stateList);

var contactWrite = function (obj, index) {
    var contactHTML =
        "<p class='contact-address'>" + 
            "<span class='dataTitle'>Mailing Address</span>" +
            "<span>" + obj[index].state + " Division of Insurance" + "</span>" + 
            "<span>" + obj[index].street +"</span>" +
            "<span>" + obj[index].city + ", " + obj[index].state + " " + obj[index].zip + "</span>" +
        "</p>" +
        "<p class='contact-phone'>" +
            "<span class='dataTitle'>Phone</span>" +
            "<span>" + obj[index].phone +"</span>" +
        "</p>" +
        "<p class='contact-fax'>" +
            "<span class='dataTitle'>Fax</span>" +
            "<span>" + obj[index].fax +"</span>" +
        "</p>" +
        "<p class='contact-email'>" +
            "<span class='dataTitle'>Email</span>" +
            "<span>insurance@" + obj[index].state.toLowerCase().replace(/\s/g, '') + ".gov</span>" +
        "</p>" +
        "<p class='contact-website'>" +
            "<span class='dataTitle'>Website</span>" +
            "<span>http://insurance." + obj[index].state.toLowerCase().replace(/\s/g, '') + ".gov</span>" + 
        "<p>";
    
    return contactHTML;
};

var contactData = contactWrite(contactInfo, 3);           

$( ".listofStates" ).html(stateData);
$( ".state-contact" ).html(contactData);