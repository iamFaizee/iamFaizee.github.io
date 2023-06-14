import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
        <Typography className='contactheading' sx={{textAlign:"center",fontWeight:"600",color:"#00FF41",marginBottom:"2%",fontFamily:"Poppins"}} variant='h2' >My Contributions</Typography>
    <Box sx={{textAlign:"center",width:"fit-content",margin:"auto auto 10% auto",color:"#00FF41",borderRadius:"8px",padding:"3% 1%",border:"2px solid #008F11"}}>
      <GitHubCalendar
          
          color="skyblue"
          username="iamFaizee" />
    </Box>
          </>
  );
}