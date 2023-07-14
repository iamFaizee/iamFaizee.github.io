import adventour from './media/adventour.png'
import portfolio from './media/portfolio.png'
import expedia from './media/expedia.png'
import bigbasket from './media/bigbasket.png'
import instagram from './media/instagram.png'



export const details={
    firstname:"Faizan",
    lastname:"",
    // navList:["Home","About","Skills","Work","Contact"],
    navList:[{
        val1:"Home",
        val2:"nav-link home"
      },{
        val1:"About",
        val2:"nav-link about"
      },{
        val1:"Skills",
        val2:"nav-link skills"
      },{
        val1:"Work",
        val2:"nav-link projects"
      },{
        val1:"Contact",
        val2:"nav-link contact"
      }],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","about section","skillContainer","workDiv","contactDiv"],
    // className:["nav-link home","nav-link about","nav-link skills","nav-link projects"],
    linkedInLink:"https://www.linkedin.com/in/faizan-khan-455216261/",
    githubLink:"https://github.com/iamFaizee",
    phone: '9711481169',
    mailLink:'khanfaizan1123@gmail.com',
    techStack:[
            {
                name:"HTML",
                img:"https://img.icons8.com/color/512/html-5--v1.png"
            },
            {
                name:"CSS",
                img:"https://img.icons8.com/fluency/512/css3.png"
            },
            {
                name:"JavaScript",
                img:"https://img.icons8.com/color/512/javascript.png"
            },
            {
                name:"Java",
                img:"https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"
            },
            {
                name:"React",
                img:"https://img.icons8.com/office/512/react.png"
            },
            {
                name:"Material UI",
                img:"https://img.icons8.com/color/512/material-ui.png"
            },
            {
                name:"Chakra UI",
                img:"https://img.icons8.com/color/512/chakra-ui.png"
            },
            {
                name:"Node JS",
                img:"https://img.icons8.com/fluency/512/node-js.png"
            },
            {
                name:"BootStrap",
                img:"https://img.icons8.com/color/512/bootstrap.png",

            },
            {
                name:"Github",
                img:"https://img.icons8.com/glyph-neue/512/github.png"
            },
            {
                name:"Express JS",
                img:"https://img.icons8.com/ios/512/express-js.png"
            },
            {
                name:"Mongo DB",
                img:"https://img.icons8.com/color/512/mongodb.png"
            },
            {
                name:"Redux",
                img:"https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
            },
            {
                name:"Firebase",
                img:"https://img.icons8.com/?size=512&id=62452&format=png"
            }

    ],
    projects:[

        {
            name:"Adventour",
            github:"https://github.com/Bharat-Shaw/Adventour",
            live:"https://adventour-app.vercel.app/",
            type:"Colaborative",
            tech:["React","Redux","Chakra UI","Firebase"],
            img: adventour,
            description:"Adventour is an international site for discovering and booking your destinations with our user-friendly booking website."
        },
        
        {
            name:"Instagram Replica",
            github:"https://github.com/thisiskmv/instagram-clone",
            live:"https://instagram-clone-ten-indol.vercel.app/",
            type:"Collaborative",
            tech:["React","Redux","Chakra UI", "Firebase"],
            img: instagram,
            description:"Instagram is a free, online photo-sharing application and social network platform that was acquired by Facebook in 2012."
        },

        {
            name:"Portfolio",
            github:"https://github.com/iamFaizee/iamFaizee.github.io",
            live:"https://iamfaizee.github.io/",
            type:"Individual",
            tech:["React","Chakra UI"],
            img: portfolio,
            description:"It's a Portfolio App anyone can see my all project, skills, contact details, about section etc."
        },
    
        {
            name:"Expedia Replica",
            github:"https://github.com/seakash1204/expedia_clone",
            live:"https://effulgent-crostata-f624a5.netlify.app/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript","BootStrap"],
            img: expedia,
            description:"Expedia.com is an online travel agency owned by Expedia Group. The site book airline tickets, hotel reservations"
        },
        {
            name:"Big basket Replica",
            github:"https://github.com/kunalgoyat999/bigbasket",
            live:"https://dreamy-peony-b35dcc.netlify.app/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript"],
            img: bigbasket,
            description:"The best online grocery store in India. bigbasket is an online supermarket for all your daily needs."
        }

    ]

}