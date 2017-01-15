const keystone = require('keystone');
const Types = keystone.Field.Types;
const committees = [
  {
    "id": "HSAG",
    "name": "House Committee on Agriculture",
    "subcommittees": [
      {
        "id": "15",
        "name": "Conservation and Forestry"
      },
      {
        "id": "22",
        "name": "Commodity Exchanges, Energy, and Credit"
      },
      {
        "id": "16",
        "name": "General Farm Commodities and Risk Management"
      },
      {
        "id": "29",
        "name": "Livestock and Foreign Agriculture"
      },
      {
        "id": "14",
        "name": "Biotechnology, Horticulture, and Research"
      },
      {
        "id": "03",
        "name": "Nutrition"
      }
    ]
  },
  {
    "id": "HSAP",
    "name": "House Committee on Appropriations",
    "subcommittees": [
      {
        "id": "01",
        "name": "Agriculture, Rural Development, Food and Drug Administration, and Related Agencies"
      },
      {
        "id": "19",
        "name": "Commerce, Justice, Science, and Related Agencies"
      },
      {
        "id": "02",
        "name": "Defense"
      },
      {
        "id": "10",
        "name": "Energy and Water Development, and Related Agencies"
      },
      {
        "id": "23",
        "name": "Financial Services and General Government"
      },
      {
        "id": "15",
        "name": "Homeland Security"
      },
      {
        "id": "06",
        "name": "Interior, Environment, and Related Agencies"
      },
      {
        "id": "07",
        "name": "Labor, Health and Human Services, Education, and Related Agencies"
      },
      {
        "id": "24",
        "name": "Legislative Branch"
      },
      {
        "id": "18",
        "name": "Military Construction, Veterans Affairs, and Related Agencies"
      },
      {
        "id": "04",
        "name": "State, Foreign Operations, and Related Programs"
      },
      {
        "id": "20",
        "name": "Transportation, and Housing and Urban Development, and Related Agencies"
      }
    ]
  },
  {
    "id": "HSAS",
    "name": "House Committee on Armed Services",
    "subcommittees": [
      {
        "id": "25",
        "name": "Tactical Air and Land Forces"
      },
      {
        "id": "02",
        "name": "Military Personnel"
      },
      {
        "id": "06",
        "name": "Oversight and Investigations"
      },
      {
        "id": "03",
        "name": "Readiness"
      },
      {
        "id": "28",
        "name": "Seapower and Projection Forces"
      },
      {
        "id": "29",
        "name": "Strategic Forces"
      },
      {
        "id": "26",
        "name": "Emerging Threats and Capabilities"
      }
    ]
  },
  {
    "id": "HSBA",
    "name": "House Committee on Financial Services",
    "subcommittees": [
      {
        "id": "16",
        "name": "Capital Markets and Government Sponsored Enterprises"
      },
      {
        "id": "15",
        "name": "Financial Institutions and Consumer Credit"
      },
      {
        "id": "04",
        "name": "Housing and Insurance"
      },
      {
        "id": "20",
        "name": "Monetary Policy and Trade"
      },
      {
        "id": "09",
        "name": "Oversight and Investigations"
      }
    ]
  },
  {
    "id": "HSBU",
    "name": "House Committee on the Budget",
    "subcommittees": []
  },
  {
    "id": "HSED",
    "name": "House Committee on Education and the Workforce",
    "subcommittees": [
      {
        "id": "14",
        "name": "Early Childhood, Elementary, and Secondary Education"
      },
      {
        "id": "02",
        "name": "Health, Employment, Labor, and Pensions"
      },
      {
        "id": "13",
        "name": "Higher Education and Workforce Training"
      },
      {
        "id": "10",
        "name": "Workforce Protections"
      }
    ]
  },
  {
    "id": "HSFA",
    "name": "House Committee on Foreign Affairs",
    "subcommittees": [
      {
        "id": "16",
        "name": "Africa, Global Health, Global Human Rights, and International Organizations"
      },
      {
        "id": "05",
        "name": "Asia and the Pacific"
      },
      {
        "id": "14",
        "name": "Europe, Eurasia, and Emerging Threats"
      },
      {
        "id": "18",
        "name": "Terrorism, Nonproliferation, and Trade"
      },
      {
        "id": "13",
        "name": "The Middle East and North Africa"
      },
      {
        "id": "07",
        "name": "The Western Hemisphere"
      }
    ]
  },
  {
    "id": "HSGO",
    "name": "House Committee on Oversight and Government Reform",
    "subcommittees": [
      {
        "id": "25",
        "name": "Information Technology"
      },
      {
        "id": "24",
        "name": "Government Operations"
      },
      {
        "id": "06",
        "name": "National Security"
      },
      {
        "id": "27",
        "name": "Health Care, Benefits and Administrative Rules"
      },
      {
        "id": "28",
        "name": "The Interior"
      },
      {
        "id": "29",
        "name": "Transportation and Public Assets"
      }
    ]
  },
  {
    "id": "HSHA",
    "name": "House Committee on House Administration",
    "subcommittees": []
  },
  {
    "id": "HSHM",
    "name": "House Committee on Homeland Security",
    "subcommittees": [
      {
        "id": "11",
        "name": "Border and Maritime Security"
      },
      {
        "id": "12",
        "name": "Emergency Preparedness, Response, and Communications"
      },
      {
        "id": "08",
        "name": "Cybersecurity, Infrastructure Protection, and Security Technologies"
      },
      {
        "id": "05",
        "name": "Counterterrorism and Intelligence"
      },
      {
        "id": "09",
        "name": "Oversight and Management Efficiency"
      },
      {
        "id": "07",
        "name": "Transportation Security"
      }
    ]
  },
  {
    "id": "HSIF",
    "name": "House Committee on Energy and Commerce",
    "subcommittees": [
      {
        "id": "17",
        "name": "Commerce, Manufacturing, and Trade"
      },
      {
        "id": "16",
        "name": "Communications and Technology"
      },
      {
        "id": "03",
        "name": "Energy and Power"
      },
      {
        "id": "14",
        "name": "Health"
      },
      {
        "id": "02",
        "name": "Oversight and Investigations"
      },
      {
        "id": "18",
        "name": "Environment and the Economy"
      }
    ]
  },
  {
    "id": "HSII",
    "name": "House Committee on Natural Resources",
    "subcommittees": [
      {
        "id": "06",
        "name": "Energy and Mineral Resources"
      },
      {
        "id": "10",
        "name": "Federal Lands"
      },
      {
        "id": "13",
        "name": "Water, Power and Oceans"
      },
      {
        "id": "22",
        "name": "Fisheries, Wildlife, Oceans and Insular Affairs"
      },
      {
        "id": "24",
        "name": "Indian, Insular and Alaska Native Affairs"
      },
      {
        "id": "15",
        "name": "Oversight and Investigations"
      }
    ]
  },
  {
    "id": "HLIG",
    "name": "House Permanent Select Committee on Intelligence",
    "subcommittees": [
      {
        "id": "09",
        "name": "Oversight and Investigations"
      },
      {
        "id": "05",
        "name": "Technical and Tactical Intelligence"
      },
      {
        "id": "08",
        "name": "Terrorism, Human Intelligence, Analysis, and Counterintelligence"
      },
      {
        "id": "01",
        "name": "Central Intelligence Agency"
      },
      {
        "id": "02",
        "name": "National Security Agency and Cybersecurity"
      },
      {
        "id": "03",
        "name": "Emerging Threats"
      },
      {
        "id": "04",
        "name": "Department of Defense Intelligence and Overhead Architecture"
      }
    ]
  },
  {
    "id": "HSJU",
    "name": "House Committee on the Judiciary",
    "subcommittees": [
      {
        "id": "10",
        "name": "The Constitution and Civil Justice"
      },
      {
        "id": "03",
        "name": "Courts, Intellectual Property, and the Internet"
      },
      {
        "id": "08",
        "name": "Crime, Terrorism, Homeland Security, and Investigations"
      },
      {
        "id": "01",
        "name": "Immigration and Border Security"
      },
      {
        "id": "05",
        "name": "Regulatory Reform, Commercial, and Antitrust Law"
      }
    ]
  },
  {
    "id": "HSPW",
    "name": "House Committee on Transportation and Infrastructure",
    "subcommittees": [
      {
        "id": "05",
        "name": "Aviation"
      },
      {
        "id": "07",
        "name": "Coast Guard and Maritime Transportation"
      },
      {
        "id": "13",
        "name": "Economic Development, Public Buildings, and Emergency Management"
      },
      {
        "id": "12",
        "name": "Highways and Transit"
      },
      {
        "id": "14",
        "name": "Railroads, Pipelines, and Hazardous Materials"
      },
      {
        "id": "02",
        "name": "Water Resources and Environment"
      }
    ]
  },
  {
    "id": "HSRU",
    "name": "House Committee on Rules",
    "subcommittees": [
      {
        "id": "02",
        "name": "Legislative and Budget Process"
      },
      {
        "id": "04",
        "name": "Rules and Organization of the House"
      }
    ]
  },
  {
    "id": "HSSM",
    "name": "House Committee on Small Business",
    "subcommittees": [
      {
        "id": "23",
        "name": "Contracting and Workforce"
      },
      {
        "id": "24",
        "name": "Investigations, Oversight and Regulations"
      },
      {
        "id": "25",
        "name": "Agriculture, Energy and Trade"
      },
      {
        "id": "26",
        "name": "Health and Technology"
      },
      {
        "id": "27",
        "name": "Economic Growth, Tax and Capital Access"
      }
    ]
  },
  {
    "id": "HSSO",
    "name": "House Committee on Ethics",
    "subcommittees": []
  },
  {
    "id": "HSSY",
    "name": "House Committee on Science, Space, and Technology",
    "subcommittees": [
      {
        "id": "20",
        "name": "Energy"
      },
      {
        "id": "21",
        "name": "Oversight"
      },
      {
        "id": "16",
        "name": "Space"
      },
      {
        "id": "18",
        "name": "Environment"
      },
      {
        "id": "15",
        "name": "Research and Technology"
      }
    ]
  },
  {
    "id": "HLZI",
    "name": "House Select Committee on the Events Surrounding the 2012 Terrorist Attack in Benghazi",
    "subcommittees": []
  },
  {
    "id": "HSVR",
    "name": "House Committee on Veterans' Affairs",
    "subcommittees": [
      {
        "id": "09",
        "name": "Disability Assistance and Memorial Affairs"
      },
      {
        "id": "10",
        "name": "Economic Opportunity"
      },
      {
        "id": "03",
        "name": "Health"
      },
      {
        "id": "08",
        "name": "Oversight and Investigations"
      }
    ]
  },
  {
    "id": "HSWM",
    "name": "House Committee on Ways and Means",
    "subcommittees": [
      {
        "id": "02",
        "name": "Health"
      },
      {
        "id": "03",
        "name": "Human Resources"
      },
      {
        "id": "06",
        "name": "Oversight"
      },
      {
        "id": "05",
        "name": "Tax Policy"
      },
      {
        "id": "01",
        "name": "Social Security"
      },
      {
        "id": "04",
        "name": "Trade"
      }
    ]
  },
  {
    "id": "JCSE",
    "name": "Commission on Security and Cooperation in Europe",
    "subcommittees": []
  },
  {
    "id": "JSEC",
    "name": "Joint Economic Committee",
    "subcommittees": []
  },
  {
    "id": "JSLC",
    "name": "Joint Committee on the Library",
    "subcommittees": []
  },
  {
    "id": "JSPR",
    "name": "Joint Committee on Printing",
    "subcommittees": []
  },
  {
    "id": "JSTX",
    "name": "Joint Committee on Taxation",
    "subcommittees": []
  },
  {
    "id": "SCNC",
    "name": "United States Senate Caucus on International Narcotics Control",
    "subcommittees": []
  },
  {
    "id": "SLET",
    "name": "Senate Select Committee on Ethics",
    "subcommittees": []
  },
  {
    "id": "SLIA",
    "name": "Senate Committee on Indian Affairs",
    "subcommittees": []
  },
  {
    "id": "SLIN",
    "name": "Senate Select Committee on Intelligence",
    "subcommittees": []
  },
  {
    "id": "SPAG",
    "name": "Senate Special Committee on Aging",
    "subcommittees": []
  },
  {
    "id": "SSAF",
    "name": "Senate Committee on Agriculture, Nutrition, and Forestry",
    "subcommittees": [
      {
        "id": "13",
        "name": "Commodities, Risk Management and Trade"
      },
      {
        "id": "14",
        "name": "Conservation, Forestry and Natural Resources"
      },
      {
        "id": "15",
        "name": "Rural Development and Energy"
      },
      {
        "id": "16",
        "name": "Nutrition, Specialty Crops, and Agricultural Research"
      },
      {
        "id": "17",
        "name": "Livestock, Marketing and Agriculture Security"
      }
    ]
  },
  {
    "id": "SSAP",
    "name": "Senate Committee on Appropriations",
    "subcommittees": [
      {
        "id": "16",
        "name": "Commerce, Justice, Science, and Related Agencies"
      },
      {
        "id": "22",
        "name": "Energy and Water Development"
      },
      {
        "id": "23",
        "name": "Financial Services and General Government"
      },
      {
        "id": "14",
        "name": "Department of Homeland Security"
      },
      {
        "id": "17",
        "name": "Department of the Interior, Environment, and Related Agencies"
      },
      {
        "id": "18",
        "name": "Departments of Labor, Health and Human Services, and Education, and Related Agencies"
      },
      {
        "id": "19",
        "name": "Military Construction and Veterans Affairs, and Related Agencies"
      },
      {
        "id": "20",
        "name": "State, Foreign Operations, and Related Programs"
      },
      {
        "id": "24",
        "name": "Transportation, Housing and Urban Development, and Related Agencies"
      },
      {
        "id": "01",
        "name": "Agriculture, Rural Development, Food and Drug Administration, and Related Agencies"
      },
      {
        "id": "02",
        "name": "Department of Defense"
      },
      {
        "id": "08",
        "name": "Legislative Branch"
      }
    ]
  },
  {
    "id": "SSAS",
    "name": "Senate Committee on Armed Services",
    "subcommittees": [
      {
        "id": "14",
        "name": "Airland"
      },
      {
        "id": "20",
        "name": "Emerging Threats and Capabilities"
      },
      {
        "id": "17",
        "name": "Personnel"
      },
      {
        "id": "15",
        "name": "Readiness and Management Support"
      },
      {
        "id": "13",
        "name": "SeaPower"
      },
      {
        "id": "16",
        "name": "Strategic Forces"
      }
    ]
  },
  {
    "id": "SSBK",
    "name": "Senate Committee on Banking, Housing, and Urban Affairs",
    "subcommittees": [
      {
        "id": "12",
        "name": "Economic Policy"
      },
      {
        "id": "05",
        "name": "National Security and International Trade and Finance"
      },
      {
        "id": "04",
        "name": "Securities, Insurance, and Investment"
      },
      {
        "id": "09",
        "name": "Housing, Transportation, and Community Development"
      },
      {
        "id": "08",
        "name": "Financial Institutions and Consumer Protection"
      }
    ]
  },
  {
    "id": "SSBU",
    "name": "Senate Committee on the Budget",
    "subcommittees": []
  },
  {
    "id": "SSCM",
    "name": "Senate Committee on Commerce, Science, and Transportation",
    "subcommittees": [
      {
        "id": "26",
        "name": "Communications, Technology, Innovation, and the Internet"
      },
      {
        "id": "27",
        "name": "Tourism, Competitiveness, and Innovation"
      },
      {
        "id": "20",
        "name": "Consumer Protection, Product Safety, Insurance, and Data Security"
      },
      {
        "id": "22",
        "name": "Oceans, Atmosphere, Fisheries, and Coast Guard"
      },
      {
        "id": "24",
        "name": "Space, Science, and Competitiveness"
      },
      {
        "id": "25",
        "name": "Surface Transportation and Merchant Marine Infrastructure, Safety and Security"
      },
      {
        "id": "01",
        "name": "Aviation Operations, Safety, and Security"
      }
    ]
  },
  {
    "id": "SSEG",
    "name": "Senate Committee on Energy and Natural Resources",
    "subcommittees": [
      {
        "id": "07",
        "name": "Water and Power"
      },
      {
        "id": "04",
        "name": "National Parks"
      },
      {
        "id": "01",
        "name": "Energy"
      },
      {
        "id": "03",
        "name": "Public Lands, Forests, and Mining"
      }
    ]
  },
  {
    "id": "SSEV",
    "name": "Senate Committee on Environment and Public Works",
    "subcommittees": [
      {
        "id": "10",
        "name": "Clean Air and Nuclear Safety"
      },
      {
        "id": "09",
        "name": "Superfund, Waste Management, and Regulatory Oversight"
      },
      {
        "id": "16",
        "name": "Green Jobs and the New Economy"
      },
      {
        "id": "18",
        "name": "Oversight"
      },
      {
        "id": "08",
        "name": "Transportation and Infrastructure"
      },
      {
        "id": "15",
        "name": "Fisheries, Water, and Wildlife"
      }
    ]
  },
  {
    "id": "SSFI",
    "name": "Senate Committee on Finance",
    "subcommittees": [
      {
        "id": "12",
        "name": "Energy, Natural Resources, and Infrastructure"
      },
      {
        "id": "10",
        "name": "Health Care"
      },
      {
        "id": "13",
        "name": "International Trade, Customs, and Global Competitiveness"
      },
      {
        "id": "14",
        "name": "Fiscal Responsibility and Economic Growth"
      },
      {
        "id": "11",
        "name": "Taxation and IRS Oversight"
      },
      {
        "id": "02",
        "name": "Social Security, Pensions, and Family Policy"
      }
    ]
  },
  {
    "id": "SSFR",
    "name": "Senate Committee on Foreign Relations",
    "subcommittees": [
      {
        "id": "12",
        "name": "International Development and Foreign Assistance, Economic Affairs, International Environmental Protection, and Peace Corps"
      },
      {
        "id": "13",
        "name": "International Operations and Organizations, Human Rights, Democracy, and Global Women's Issues"
      },
      {
        "id": "01",
        "name": "Europe and Regional Security Cooperation"
      },
      {
        "id": "09",
        "name": "Africa and Global Health Policy"
      },
      {
        "id": "02",
        "name": "East Asia, the Pacific, and International Cybersecurity Policy"
      },
      {
        "id": "07",
        "name": "Near East, South Asia, Central Asia, and Counterterrorism"
      },
      {
        "id": "06",
        "name": "Western Hemisphere, Transnational Crime, Civilian Security, Democracy, Human Rights, and Global Women's Issues"
      },
      {
        "id": "15",
        "name": "Multilateral International Development, Multilateral Institutions, and International Economic, Energy, and Environmental Policy"
      },
      {
        "id": "14",
        "name": "State Department and USAID Management, International Operations, and Bilateral International Development"
      }
    ]
  },
  {
    "id": "SSGA",
    "name": "Senate Committee on Homeland Security and Governmental Affairs",
    "subcommittees": [
      {
        "id": "01",
        "name": "Permanent Subcommittee on Investigations"
      },
      {
        "id": "17",
        "name": "Emergency Management, Intergovernmental Relations, and the District of Columbia"
      },
      {
        "id": "15",
        "name": "Financial and Contracting Oversight"
      },
      {
        "id": "16",
        "name": "the Efficiency and Effectiveness of Federal Programs and the Federal Workforce"
      },
      {
        "id": "18",
        "name": "Federal Spending Oversight and Emergency Management"
      },
      {
        "id": "19",
        "name": "Regulatory Affairs and Federal Management"
      }
    ]
  },
  {
    "id": "SSHR",
    "name": "Senate Committee on Health, Education, Labor, and Pensions",
    "subcommittees": [
      {
        "id": "11",
        "name": "Employment and Workplace Safety"
      },
      {
        "id": "12",
        "name": "Primary Health and Retirement Security"
      },
      {
        "id": "09",
        "name": "Children and Families"
      }
    ]
  },
  {
    "id": "SSJU",
    "name": "Senate Committee on the Judiciary",
    "subcommittees": [
      {
        "id": "21",
        "name": "the Constitution"
      },
      {
        "id": "22",
        "name": "Crime and Terrorism"
      },
      {
        "id": "23",
        "name": "Privacy, Technology and the Law"
      },
      {
        "id": "01",
        "name": "Antitrust, Competition Policy and Consumer Rights"
      },
      {
        "id": "04",
        "name": "Immigration and the National Interest"
      },
      {
        "id": "24",
        "name": "Bankruptcy and the Courts"
      },
      {
        "id": "25",
        "name": "Oversight, Agency Action, Federal Rights and Federal Courts"
      }
    ]
  },
  {
    "id": "SSRA",
    "name": "Senate Committee on Rules and Administration",
    "subcommittees": []
  },
  {
    "id": "SSSB",
    "name": "Senate Committee on Small Business and Entrepreneurship",
    "subcommittees": []
  },
  {
    "id": "SSVA",
    "name": "Senate Committee on Veterans' Affairs",
    "subcommittees": []
  }
]
/**
 * User Model
 * ==========
 */

const Task = new keystone.List('Task');

const committeeField = {
  committee: {
    type: Types.Select,
    dependsOn: { template: 'CallCommittee' },
    options: committees.map(committee => ({
      label: 'committee',
      value: committee.id, label: committee.name
    }))
  },
};
const subcommitteeFields = {};

committees.forEach((committee) => {
  subcommitteeFields[committee.id + '_subcommittee'] = {
    type: Types.Select,
    label: 'subcommittee',
    dependsOn: { 'templateProps.committee': committee.id },
    options: committee.subcommittees.map(subcommittee => ({
      value: subcommittee.id, label: subcommittee.name
    }))
  }
});

const callScriptFields = {
  requestedAction: {
    label: 'Requested Action',
    type: String,
    dependsOn: { template: ['CallSenate', 'CallCommittee', 'CallHouse', 'CallCongress'] }
  },
  petitionScript: {
    label: 'Petition Script',
    type: Types.Html,
    wysiwyg: true,
    dependsOn: { template: ['CallSenate', 'CallCommittee', 'CallHouse', 'CallCongress'] }
  },
  thankYouScript: {
    label: 'Thank You Script',
    type: Types.Html,
    wysiwyg: true,
    dependsOn: { template: ['CallSenate', 'CallCommittee', 'CallHouse', 'CallCongress'] }
  }
}

const genericMultipleFields = {
  steps: {
    label: 'Generic Template Steps',
    type: Types.TextArray,
    required: false,
    dependsOn: { template: 'GenericMultiple' }
  },
}

const genericSingleFields = {
  step: {
    label: 'Generic Template Step',
    type: Types.Html,
    wysiwyg: true,
    required: false,
    dependsOn: { template: 'GenericSingle' }
  },
}

const helpfulTipsField = {
  tips: {
    label: 'Helpful Tips',
    type: Types.Html,
    wysiwyg: true,
    required: false,
    dependsOn: { template: ['GenericSingle', 'GenericMultiple'] }
  },
}

// const templates = {
//   CallCongress: {

//   },
//   CallCommittee: {

//   },
//   CallSenate: {

//   },
//   CallHouse: {

//   },
// }

Task.add({
	name: { type: Types.Text, required: true, index: true },
  issue: { type: Types.Relationship, ref: 'Issue', initial: true, required: true },
  tags: { type: Types.TextArray, required: false },
  location: {
    label: 'leave blank to use user\'s location',
    type: Types.Location,
    defaults: { country: 'us' },
    improve: true,
    enableMapsAPI: true,
  },
  duration: {
    type: Types.Select,
    required: true,
    default: 30,
    numeric: true,
    options: [
      { value: 30, label: '30 minutes' },
      { value: 60, label: 'One hour' },
      { value: 180, label: 'Half day' },
      { value: 360, label: 'Full day' }
    ]
  },
  startDate: { label: 'Start Date', type: Types.Date, default: Date.now },
  endDate: { label: 'End Date', type: Types.Date },
  template: {
    type: Types.Select,
    required: true,
    default: 'CallCongress',
    options: [
      { value: 'CallCongress', label: 'Call your congressmen and congresswomen' },
      { value: 'CallCommittee', label: 'Call a committee or subcommittee' },
      { value: 'CallSenate', label: 'Call your senators' },
      { value: 'CallHouse', label: 'Call your representatives' },
      { value: 'GenericSingle', label: 'Generic with Single Step' },
      { value: 'GenericMultiple', label: 'Generic with Multiple Step' }
    ]
  },
  templateProps: Object.assign(
    committeeField,
    subcommitteeFields,
    callScriptFields,
    genericSingleFields,
    genericMultipleFields,
    helpfulTipsField,
  ),
});

// Provide access to Keystone
// Task.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });


/**
 * Relationships
 */

// Task.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

Task.defaultColumns = 'name, issue, template';
Task.register();
