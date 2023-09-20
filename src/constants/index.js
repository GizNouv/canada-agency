import {Brain , CurrencyEth , Smiley , FlyingSaucer , CrownSimple , PhoneCall , EnvelopeSimple , MapTrifold , InstagramLogo , TelegramLogo , LinkedinLogo} from '../assets/icons';
import {person1 , person2 , person3 , portfolio1 , portfolio2 , portfolio3 , portfolio4 , portfolio5 , portfolio6} from '../assets/images';

export const navLinks = [
    {
        label : "Home",
        href : "#home",
        downIcon : false
    },
    {
        label : "Servies",
        href : "#servies",
        downIcon : true
    }
]

export const statistics = [
    {value : "120" , label : "Successful project"},
    {value : "4" , label : "years of experience"}
]

export const servies = [
    {
        imgURL : Brain,
        label : "Visual identity design" ,
        subtext : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elit, sed do", 
    },
    {
        imgURL : CurrencyEth,
        label : "Web design" ,
        subtext : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elit, sed do", 
    }
]

export const benefits = [
    {
        imgURL : Smiley,
        label : "Customer Satisfaction",
        subtext : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        borderBottom : true
    },
    {
        imgURL : FlyingSaucer,
        label : "24 hour support",
        subtext : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        borderBottom : true
    },
    {
        imgURL : CrownSimple,
        label : "Several years of experience",
        subtext : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        borderBottom : false
    }
]

export const portfolio = [
    {
        label : "Digital marketing illustration design",
        imgURL : portfolio1
    },
    {
        label : "Digital marketing illustration design",
        imgURL : portfolio2
    },
    {
        label : "Digital marketing illustration design",
        imgURL : portfolio3
    },
    {
        label : "Digital marketing illustration design",
        imgURL : portfolio4
    },
    {
        label : "Digital marketing illustration design",
        imgURL : portfolio5
    },
    {
        label : "Digital marketing illustration design",
        imgURL : portfolio6
    },
]

export const colleagues = [
    {
        label : "Robert Fox",
        position : "Marketing Manager of Bindo",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae ",
        imgURL : person1,
        margin : 'auto'
    },
    {
        label : "Robert Fox",
        position : "Marketing Manager of Bindo",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae ",
        imgURL : person2,
        margin : '-12px'
    },
    {
        label : "Robert Fox",
        position : "Marketing Manager of Bindo",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae ",
        imgURL : person3,
        margin : '-12px'
    }
]

export const inputs = [
    {
        placeholder : 'Full name',
        type : 'text',
        name : 'fullname'
    },
    {
        placeholder : 'Phone number',
        type : 'number',
        name : 'phonenumber'
    },
    {
        placeholder : 'Email',
        type : 'email',
        name : 'email'
    },
]

export const contactUs = [
    {
        label : "Phone number",
        info : "(406) 555-0120",
        imgURL : PhoneCall
    },
    {
        label : "Email",
        info : "Info@digitalmarketing.com",
        imgURL : EnvelopeSimple
    },
    {
        label : "Address",
        info : "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
        imgURL : MapTrifold
    }
]

export const usefulLinks = [
    {
        label : "Services"
    },
    {
        label : "About us"
    },
    {
        label : "Weblog"
    },
    {
        label : "Contact us"
    },
    {
        label : "FAQ"
    },
]

export const socialMedia = [
    {
        label : "InstagramLogo",
        imgURL : InstagramLogo
    },
    {
        label : "TelegramLogo",
        imgURL : TelegramLogo
    },
    {
        label : "LinkedinLogo",
        imgURL : LinkedinLogo
    },
]