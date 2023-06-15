import { Box, Button, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./About.css"
import profilePic from '../../media/profilePic.jpg';
import LinearDeterminate from '../MiniComponent/ProgressComp';

const About = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [scrolled, setScrolled] = useState(0);

    window.addEventListener("scroll", () => {
        setScrolled(document.documentElement.scrollTop);
    })

    if (scrolled >= 56) {
        setTimeout(() => {
            setChecked1(true)
        }, 600)
        setTimeout(() => {
            setChecked2(true)
        }, 800)
    }

    const openResume = () => {
        window.open(
            "https://drive.google.com/file/d/10TNuZZeJbtnzHW0oCSiJ5I7f1n0MMbqf/view?usp=sharing",
            "_blank"
        );
    };

    // id="about" class="about section" 

    // id="aboutDiv" className='aboutContainer'
    return (
        <Box id="about" className='about section' sx={{ width: "80%", margin: "10% auto", padding: "0% 10px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "25px" }}>
            <Box sx={{ borderTop: "2px solid rgb(35,53,84)", position: "relative" }} >
                <Zoom in={checked1}>
                    <Typography className='aboutHeading' variant='h4' sx={{ color: "#00FF41", backgroundColor: "rgb(11,24,47)", position: "absolute", top: "-25px", padding: "0% 5% 0% 0%", fontFamily: "Poppins" }} >About Me</Typography>
                </Zoom>
                <Zoom in={checked2}>

                    <Typography className='aboutText' sx={{ marginTop: "8%", color: "#008F11", fontFamily: "Poppins" }}>
                        Hello! My name is <span style={{ color: "#00FF41" }}>Faizan</span> and I enjoy creating things that live on the internet. My interest in computers and technology started back in  when I was in my 6th grade and my father brought me a computer and after that day i kept doing lot of new things on that.
                        <br />
                        <br />
                        After my graduation i was finding something to start my carrer in tech field and gratefully i came into know about <span style={{ color: "#00FF41" }}>Web Development</span> and started my journey from there.
                        Fast-forward to today, and I’ve worked in many projects with lot of tech stacks.My main focus these days is building accessible, inclusive products.
                    </Typography>

                </Zoom>
                <Box onClick={openResume} marginTop='1.5rem'>
                    <Button variant="outlined"
                        id="resume-button-2"
                        sx={{
                            border: "1px solid #008F11",
                            color: "#00FF41",
                            fontSize: "0.8rem",
                            fontFamily: "Poppins"
                        }}>Resume</Button>
                    <LinearDeterminate color={"transparent"} />
                </Box>
            </Box>
            <Zoom in={checked2}>

                <Box className='imageContainer' sx={{ display: "grid", justifyContent: "right" }}>


                    <img className='home-img' style={{ display: "block", margin: "auto", borderRadius: "5px" }} width={"60%"} src={profilePic} />


                </Box>
            </Zoom>
            <div id="About"></div>

        </Box>
        // 151951
    )
}

export default About