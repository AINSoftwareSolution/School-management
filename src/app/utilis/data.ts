import { MdOutlineSportsSoccer, MdSportsEsports } from 'react-icons/md';
import { FaMusic, FaPaintBrush } from 'react-icons/fa';

export const admissionClassoption = [
  { value: "nursery", label: "Nursery" },
  { value: "playGroup", label: "Play Group" },
  { value: "k1", label: "k1" },
  { value: "k2", label: "k2" },
  { value: "1", label: "Grade 1" },
  { value: "2", label: "Grade 2" },
  { value: "3", label: "Grade 3" },
  { value: "4", label: "grade 4" },
];

export const GenderOptions = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Other", value: "other" },
];

export const YesNoOption = [
  { value: "Yes", label: "yes" },
  { value: "No", label: "no" },
];

export const BloodGroupOptions = [
  { value: "A +ve", label: "A +ve" },
  { value: "A -ve", label: "A -ve" },
  { value: "B +ve", label: "B +ve" },
  { value: "B -ve", label: "B -ve" },
  { value: "O +ve", label: "O +ve" },
  { value: "O -ve", label: "O -ve" },
  { value: "AB +ve", label: "AB +ve" },
  { value: "AB -ve", label: "AB -ve" },
  { value: "A1 +ve", label: "A1 +ve" },
  { value: "A1 -ve", label: "A1 -ve" },
  { value: "A1B +ve", label: "A1B +ve" },
  { value: "A1B -ve", label: "A1B -ve" },
  { value: "A2 +ve", label: "A2 +ve" },
  { value: "A2B +ve", label: "A2B +ve" },
];

export const MotherTongueOptions = [
  { value: "hindi", label: "Hindi" },
  { value: "marathi", label: "Marathi" },
  { value: "english", label: "English" },
];

export const CategoryOption = [
  { value: "general", label: "General" },
  { value: "OBC", label: "OBC" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
];

export const CasteOption = [
  { value: "muslim", label: "Muslim" },
  { value: "maratha", label: "Maratha" },
];

export const Religionoptions = [
  { value: "bahai", label: "Bahai" },
  { value: "buddhism", label: "Buddhism" },
  { value: "cao_dai", label: "Cao Dai" },
  { value: "christianity", label: "Christianity" },
  { value: "confucian", label: "Confucian" },
  { value: "hinduism", label: "Hinduism" },
  { value: "islam", label: "Islam" },
  { value: "jainism", label: "Jainism" },
  { value: "jew", label: "Jew" },
  { value: "neo-pagan", label: "Neo-Pagan" },
  { value: "rastafarian", label: "Rastafarian" },
  { value: "secular_agnostic_atheist", label: "Secular/Agnostic/Atheist" },
  { value: "shinto", label: "Shinto" },
  { value: "sikhism", label: "Sikhism" },
  { value: "spiritualist", label: "Spiritualist" },
  { value: "taoist", label: "Taoist" },
  { value: "tenrikyo", label: "Tenrikyo" },
  { value: "zoroastrianism", label: "Zoroastrianism" },
];

export const registerIntialData = {
  first_name: "",
  middle_name: "",
  last_name: "",
  academic_year: "2024-2025",
  admission_class: "",
  gender: "",
  dob: "",
  about_school: "",
  primary_contact_name: "",
  primary_contact_relation: "",
  primary_email_id: "",
  primary_contact_number: "",
  secondary_contact_number: "",
  address_1: "",
  address_2: "",
  country: "",
  state: "",
  city: "",
  pin_code: "",
};

export const initialDetailsData = {
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: "",
  dob: null, // Assuming date is represented as null initially
  nationality: "",
  mother_tongue: "",
  place_of_birth: "",
  religion: "",
  category: "",
  identification_marks: "",
  blood_group: "",
  differently_abled: "",
  remarks: "",

  father_first_name: "",
  father_middle_name: "",
  father_last_name: "",
  father_email: "",
  father_dob: null,
  father_education: "",
  father_occupation: "",
  father_organization: "",
  father_designation: "",
  father_annual_income: "",
  father_primary_contact_no: "",
  father_secondary_contact_no: "",
  mother_first_name: "",
  mother_middle_name: "",
  mother_last_name: "",
  mother_email: "",
  mother_dob: null,
  mother_education: "",
  mother_occupation: "",
  mother_organization: "",
  mother_designation: "",
  mother_annual_income: "",
  mother_primary_contact_no: "",
  mother_secondary_contact_no: "",
  guardian_first_name: "",
  guardian_middle_name: "",
  guardian_last_name: "",
  guardian_email: "",
  guardian_relation: "",
  guardian_primary_contact_no: "",
  guardian_secondary_contact_no: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  country: "",
  pin_code: "",

  academic_year: "",
  class: "",
  medium: "",
  second_language: "",
  previous_school_name: "",
  board: "",
  passing_out_school: "",
  percentage_achieved: "",
  year_of_passing: "",
  reason_of_withdrawal: "",
};


export const faqData = [
  {
      question: "Why is Preschool education important?",
      answer: "Research has proved that up to the age of 5 years, the brain forms as many as 700 neural connections per second. As the pace of development in these early years is extremely rapid, it becomes crucial to give the right knowledge, exposure and experiences to the children at this stage. The impressions formed in their minds during these formative years are known to last a lifetime."
  },
  {
      question: "What is the right time to send a child to preschool?",
      answer: "Ideally you should start sending your child to preschools between the age of 18 months to 2 years."
  },
  {
      question: "What makes Wisdom Waves School unique?",
      answer: "At Wisdom Waves School, we prioritize holistic development by offering a range of activities, including cognitive development, social and emotional well-being, and exposure to technology through our coding program with KUBO."
  },
  {
      question: "Does Wisdom Waves School have a proper apparatus for teaching coding?",
      answer: "Yes, we do! Meet KUBO — a simple plug-and-learn robot that makes teaching and learning coding as easy as solving a puzzle. KUBO is a new multi-award-winning classroom solution that breaks down barriers to teaching technology to children as young as four years old."
  }
];


export const activitiesData = [
  {
      // icon: <MdOutlineSportsSoccer />,
      color: 'bg-red-500',
      title: 'Sport',
      description: 'Engage in physical activities and sportsmanship. Participating in sports activities promotes physical fitness and overall well-being among students. Sports teach the value of collaboration and teamwork.'
  },
  {
      // icon: <FaMusic />,
      color: 'bg-blue-500',
      title: 'Music',
      description: 'Explore the world of music and rhythm. Music offers children a creative outlet for self-expression, fosters cognitive development, and promotes social skills through collaborative activities.'
  },
  {
      // icon: <FaPaintBrush />,
      color: 'bg-yellow-400',
      title: 'Painting',
      description: 'Express yourself through colors and creativity. Painting activities encourage children to unleash their creativity and imagination, develop fine motor skills and coordination, and engage in sensory exploration.'
  },
  {
      // icon: <MdSportsEsports />,
      color: 'bg-green-500',
      title: 'Playground',
      description: 'Enjoy recreational activities and outdoor fun. Playground activities promote physical development, social interaction, and imaginative play. Children engage in various outdoor activities such as climbing.'
  }
];

