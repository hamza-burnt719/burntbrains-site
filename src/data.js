// Import team member images
import hamzaAlvi from "./Assets/hamza_alvi.png";
import hasanAlvi from "./Assets/hasan_alvi.png";
import rahim from "./Assets/rahim.png";
import zeerik from "./Assets/zeerik.png";
import ameer_hamza from "./Assets/ameer_hamza.png";
import hamza_jawad from "./Assets/hamza_jawad.png";
import huzaifa from "./Assets/huzaifa.png";
import talha from "./Assets/talha.png";
import hassan from "./Assets/hassan.png";
import faizan from "./Assets/faizan.png";
import tahir from "./Assets/tahir.png";
import nouman from "./Assets/nouman.png";
import laiba from "./Assets/laiba.png";
import asad from "./Assets/asad.png";

// Import client logos
import accu_ranker from "./Assets/clients/accu_ranker.png";
import jobsite_care from "./Assets/clients/jobsite_care.png";
import it_pipes from "./Assets/clients/it_pipes.png";
import vossen from "./Assets/clients/vossen.png";
import vso from "./Assets/clients/vso.png";
import cable_finder from "./Assets/clients/cable_finder.png";
import lisc from "./Assets/clients/lisc.png";
import world_clinic from "./Assets/clients/world_clinic.png";
import cat from "./Assets/clients/cat.png";
import science_coach from "./Assets/clients/science_coach.png";
import neonmonki from "./Assets/clients/neonmonki.png";
import mercy from "./Assets/clients/mercy.png";
import fujitsu from "./Assets/clients/fujitsu.png";
import cona from "./Assets/clients/cona.png";
import zucchetti from "./Assets/clients/zucchetti.png";
import visual_lime from "./Assets/clients/visual_lime.png";
import mortgage_centre from "./Assets/clients/mortgage_centre.png";
import assembly_industries from "./Assets/clients/assembly_industries.png";
import greater from "./Assets/clients/greater.png";
import prodege from "./Assets/clients/prodege.png";
import locaided from "./Assets/clients/locaided.png";
import felipe from "./Assets/clients/felipe.png";
import fyllo from "./Assets/clients/fyllo.png";
import stratus from "./Assets/clients/stratus.png";
import innovative from "./Assets/clients/innovative.png";
import koda_health from "./Assets/clients/koda_health.png";

// Import client logos
import salesforce from "./Assets/Services/salesforce.png";
import rails from "./Assets/Services/rails.png";
import pardot from "./Assets/Services/pardot.png";
import mern from "./Assets/Services/mern.png";
import hubspot from "./Assets/Services/hubspot.png";
import zoho from "./Assets/Services/zoho.png";
import power from "./Assets/Services/power.png";

//Import Certifications Logo
import professional from "./Assets/Certifications/professional.png";
import developer_1 from "./Assets/Certifications/developer_1.png";
import developer_2 from "./Assets/Certifications/developer_2.png";
import administrator from "./Assets/Certifications/administrator.png";
import app_builder from "./Assets/Certifications/app_builder.png";
import associate from "./Assets/Certifications/associate.png";

//Import Testimonials Images

// Team members array
const teamData = [
  {
    image: hasanAlvi,
    name: "Muhammad Hasan Alvi",
    position: "Co-Founder",
  },
  {
    image: hamzaAlvi,
    name: "Muhammad Hamza Alvi",
    position: "Co-Founder",
  },
  {
    image: zeerik,
    name: "Zeerik Raza",
    position: "Senior Salesforce Developer",
  },
  {
    image: nouman,
    name: "M. Nouman Latif",
    position: "Senior Salesforce Developer",
  },
  {
    image: rahim,
    name: "Muhammad Rahim",
    position: "Salesforce Developer",
  },
  {
    image: faizan,
    name: "Muhammad Faizan Alvi",
    position: "Associate UI/UX Designer",
  },
  {
    image: ameer_hamza,
    name: "M. Ameer Hamza",
    position: "Associate Salesforce Developer",
  },
  {
    image: huzaifa,
    name: "Muhammad Huzaifa",
    position: "Associate Software Engineer",
  },
  {
    image: tahir,
    name: "Tahir Hassan",
    position: "Associate Full Stack Developer",
  },
  {
    image: hassan,
    name: "Hassan Raza",
    position: "Associate Salesforce Developer",
  },
  {
    image: talha,
    name: "Muhammad Talha",
    position: "Associate Full Stack Developer",
  },
  {
    image: asad,
    name: "Asad Ur Rehman",
    position: "Power BI Developer",
  },
  {
    image: laiba,
    name: "Laiba Aslam",
    position: "HR Manager",
  },
  {
    image: hamza_jawad,
    name: "Hamza Jawad",
    position: "Project Manager / SQA",
  },
];

// Clients array
const clients = [
  {
    logo: accu_ranker,
    name: "Accu Ranker",
  },
  {
    logo: jobsite_care,
    name: "JobSite Care",
  },
  {
    logo: it_pipes,
    name: "It Pipes",
  },
  {
    logo: vossen,
    name: "Vossen",
  },
  {
    logo: vso,
    name: "VSO",
  },
  {
    logo: cable_finder,
    name: "Cable Finder",
  },
  {
    logo: lisc,
    name: "LISC",
  },
  {
    logo: world_clinic,
    name: "World Clinic",
  },
  {
    logo: cat,
    name: "CAT",
  },
  {
    logo: science_coach,
    name: "Science Coach",
  },
  {
    logo: neonmonki,
    name: "Neon Monki",
  },
  {
    logo: mercy,
    name: "Mercy",
  },
  {
    logo: fujitsu,
    name: "Fujitsu",
  },
  {
    logo: cona,
    name: "CONA",
  },
  {
    logo: zucchetti,
    name: "Zucchetti",
  },
  {
    logo: visual_lime,
    name: "Visual Lime",
  },
  {
    logo: mortgage_centre,
    name: "Mortgage Centre",
  },
  {
    logo: assembly_industries,
    name: "Assembly Industries",
  },
  {
    logo: greater,
    name: "Greater",
  },
  {
    logo: koda_health,
    name: "Koda Health",
  },
  {
    logo: prodege,
    name: "Prodege",
  },
  {
    logo: locaided,
    name: "Locaided",
  },
  {
    logo: felipe,
    name: "Felipe",
  },
  {
    logo: fyllo,
    name: "Fyllo",
  },
  {
    logo: stratus,
    name: "Stratus",
  },
  {
    logo: innovative,
    name: "Innovative",
  },
];

//Services Data
const services = [
  {
    logo: salesforce,
    title: "SalesForce",
  },
  {
    logo: rails,
    title: "Ruby On Rails",
  },
  {
    logo: pardot,
    title: "SalesForce Pardot",
  },
  {
    logo: power,
    title: "Power BI",
  },
  {
    logo: mern,
    title: "MERN Stack",
  },
  {
    logo: hubspot,
    title: "HubSpot",
  },
  {
    logo: zoho,
    title: "ZOHO",
  },
];

// Certifications Data

const certifications = [
  {
    logo: professional,
    name: "Professional",
  },
  {
    logo: developer_1,
    name: "Developer I",
  },
  {
    logo: developer_2,
    name: "Developer II",
  },
  {
    logo: administrator,
    name: "Administrator",
  },
  {
    logo: app_builder,
    name: "App Builder",
  },
  {
    logo: associate,
    name: "Associate",
  },
];

//Testimonials Data
const testimonials = [
  {
    name: "Hasan Alvi",
    title: "Managing Director",
    image: hasanAlvi,
    rating: 5,
    testimonial:
      "BurntBrains' dedication to our project was unmatched. Their team, led by Hasan, went above and beyond to ensure our satisfaction and delivered results that exceeded our expectations.",
  },
  {
    name: "Hamza Alvi",
    title: "Managing Director",
    image: hamzaAlvi,
    rating: 5,
    testimonial:
      "I was blown away by BurntBrains' software development services! Their team of experts, led by Hasan, listened closely to our needs and delivered customized solutions that exceeded our expectations.",
  },
  {
    name: "Zeerik Raza",
    title: "Marketing Consultant",
    image: zeerik,
    rating: 4,
    testimonial:
      "I cannot recommend BurntBrains enough! Their team, led by Amanda, provided exceptional software development services that have helped us streamline our operations and save on costs.",
  },
  {
    name: "Nouman Latif",
    title: "Managing Director",
    image: nouman,
    rating: 5,
    testimonial:
      "Working with BurntBrains has been a pleasure from start to finish. Their team, managed by Hasan, helped us improve customer experience and drive business growth through innovative software solutions.",
  },
  {
    name: "Muhammad Rahim",
    title: "CTO",
    image: rahim,
    rating: 5,
    testimonial:
      "BurntBrains has been a true partner in our digital transformation journey. Their remote talent, managed by Hasan, seamlessly integrated with our internal team to help us achieve our goals on time and within budget.",
  },
];

export { teamData, clients, services, certifications, testimonials };
