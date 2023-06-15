import esqido from "./media/esqido.mp4"
import flixy from "./media/flixy.mp4"
import nykaa from "./media/nykaa.mp4"
import zomato from "./media/zomato.mp4"
import hebeboutique from "./media/hebeboutique.mp4"



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
        val2:"nav-link work"
      },{
        val1:"Contact",
        val2:"nav-link contact"
      }],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","about section","skillContainer","workDiv","contactDiv"],
    // className:["nav-link home","nav-link about","nav-link skills","nav-link projects"],
    linkedInLink:"https://www.linkedin.com/in/faizan-khan-455216261/",
    githubLink:"https://github.com/iamFaizee",
    phone: 9711481169,
    mailLink:"mailto:khanfaizan1123@gmail.com",
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
            }

    ],
    projects:[

        {
            name:"HebeBoutique Replica",
            github:"https://github.com/MohitIndoriya/hebefullstack",
            live:"https://hebeboutique.netlify.app/",
            type:"Colaborative",
            tech:["React","Chakra UI","Node JS","Mongo DB","Express JS"],
            img:hebeboutique,
            description:"Full Stack Application of E-Commerce Website That deals with Clothing and accessories"
        },

        {
            name:"Esqido Replica",
            github:"https://github.com/AnkitRana26/esqido-clone",
            live:"https://esqido.netlify.app/",
            type:"Colaborative",
            tech:["React","Chakra UI"],
            img:esqido,
            description:"E-Commerce Web Application of Cosmetics,User can order products from Application"
        },

        {
            name:"Zomato Replica",
            github:"https://media1.tenor.com/images/c4e7e3d30058ef3f2cb9901a50527696/tenor.mp4?itemid=27241143",
            live:"https://clone-zomato-project.netlify.app/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript"],
            img:zomato,
            description:"Food Ordering Platform where user can order food easily"
        },
    
        {
            name:"Nykaa Replica",
            github:"https://github.com/Raghvendra2811/Nykaa-Web-Clone",
            live:"https://naykaa.netlify.app/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript","BootStrap"],
            img:nykaa,
            description:"E-Commerce Web Application of Cosmetics,User can order products from Application"
        },
        {
            name:"Flixy Movie",
            github:"https://github.com/AnkitRana26/Flixy",
            live:"https://flixymovie.netlify.app/index.html",
            type:"Individual",
            tech:["HTML","CSS","JavaScript"],
            img:flixy,
            description:"Movie Related Information Application,Gives all Information and related Media of Movies,Shows"
        }

    ]

}