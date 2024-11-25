import { siteConfig } from "../site-config";
import { T_Action, T_NavLink, T_Partner, T_Person, T_Pillar, T_Social, T_Statistic } from "../types";


const partners: T_Partner[] = [
    {
        name: "Play Hand Ball",
        logoUrl: "/play-handball-logo.png",
        externalLink: "https://playhandball1.com",
        logoSize: 100,
    },
    {
        name: "Ministry of Youth Affairs, Creative Economy and Sports",
        logoUrl: "/youth affairs-LOGO.jpg",
        externalLink: "https://playhandball2.com",
        logoSize: 600,
    },
    {
        name: "Strathmore University",
        logoUrl: "/strathmore logo.png",
        externalLink: "https://playhandball3.com",
        logoSize: 500,
    },
    {
        name: "Daystar University",
        logoUrl: "/daystar logo.png",
        externalLink: "https://playhandball4.com",
        logoSize: 150,
    },
    {
        name: "Masinde Muliro University of Science and Technology",
        logoUrl: "/masinde-muliro logo.jpg",
        externalLink: "https://playhandball5.com",
        logoSize: 250,
    },
    {
        name: "Kenyatta University",
        logoUrl: "/ku logo.png",
        externalLink: "https://playhandball6.com",
        logoSize: 250,
    },
    {
        name: "Moi Forces Academy Nairobi",
        logoUrl: "/Moi-Forces-Academy-Nairobi.jpg",
        externalLink: "https://playhandball7.com",
        logoSize: 70,
    },
];


const navLinks: T_NavLink[] = [
    {
        name: "Home",
        link: `/`,
    },
    {
        name: "About us",
        link: `${siteConfig.url}/about`,
    },
    {
        name: "Gallery",

        link: `${siteConfig.url}/gallery`,
    },
];


const statistics: T_Statistic[] = [
    {
        name: "UPLIFTED",
        value: 300,
    },
    {
        name: "ALLIANCES",
        value: 10,
    },
    {
        name: "GRANTS",
        value: 10,
    },
    {
        name: "ENGADED",
        value: 290,
    },
];


const benefits: string[] = [
    "Test themselves in peaceful competition against opponents",
    "Dealing with victory and defeat",
    "Accepting rules",
    "Pushing past their limits and gain resilience",
    "Fostering teamwork, collaboration and good sportsmanship",
    "Acquire academic scholarship opportunities",
];


const socials: T_Social[] = [
    {
        text: "info@kidsbeyondlimit.co.ke",
        logoUrl: "/social-icons/instagram.png",
    },
    {
        text: "+254712345678",
        logoUrl: "/social-icons/instagram.png",
    },
    {
        text: "Facebook",
        logoUrl: "/social-icons/instagram.png",
    },
    {
        text: "Instagram",
        logoUrl: "/social-icons/instagram.png",
    },
];


const team: T_Person[] = [
    {
        fullName: "Fredrick Olonde",
        role: "Founder and Project Manager",
        profilePictureUrl: "/team/fred.jpg",
        linkedInUrl: "https://linkedin.com",
    },
    {
        fullName: "Doreen Makaka",
        role: "Head of Communications and Director of External Affairs",
        profilePictureUrl: "/team/doreen.jpg",
        linkedInUrl: "https://linkedin.com",
    },
    {
        fullName: "Victor Siero",
        role: "Programmes Coordinator",
        profilePictureUrl: "/team/victor.jpg",
        linkedInUrl: "https://linkedin.com",
    },
];


const actions: T_Action[] = [
    {
        imageUrl: "/actions/education.png",
        title: "EDUCATION",
        description: "We provide scholarships to secondary schools and universities",
    },
    {
        imageUrl: "/actions/leadership.png",
        title: "LEADERSHIP",
        description: "We give training for future careers in coaching, refereeing and management",
    },
    {
        imageUrl: "/actions/mentorship.png",
        title: "MENTORSHIP",
        description: "We provide lifelong support to help children navigate through challenges and achieve their dreams",
    },
];


const pillars: T_Pillar[] = [
    {
        title: "Sports for Empowerment",
        description: "Through handball, children learn the value of hard work, leadership, and teamwork.",
        imageUrl: "/pillars/sports-for-empowerment.jpg",
    },
    {
        title: "Education for change",
        description: "We offer sports scholarships that open doors to secondary and higher education",
        imageUrl: "/pillars/education-for-change.jpg",
    },
    {
        title: "Youth Leadership",
        description: "We guide young people to take charge of their futures, whether in sports, environmental conservation, or career paths.",
        imageUrl: "/pillars/youth-leadership.jpg",
    },
    {
        title: "Mentorship",
        description: "We’re here every step of the way, providing the support children need to succeed in life.",
        imageUrl: "/pillars/mentorship.jpg",
    },
];


export {
    partners,
    navLinks,
    statistics,
    benefits,
    socials,
    team,
    actions,
    pillars,
}
