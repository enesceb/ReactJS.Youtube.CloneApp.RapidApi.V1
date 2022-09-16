import { Box, Typography,Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIService } from '../utils/APIService'
import Sidebar from './Sidebar'


const NotFoundPage = () => {
    const [selectedCategory, setselectedCategory] = useState("New")
    const [videos, setVideos] = useState([])
    useEffect(() => {
        APIService(`search?part=snippet&q=${selectedCategory}`)
         .then((data)=>{setVideos(data.items)} )
       
       }, [selectedCategory])

  return (

    <Stack sx={{flexDirection: {sx:"column", md:"row"}}}>
    <Box minHeight="95vh">
     <Sidebar 
     selectedCategory={selectedCategory}
     setselectedCategory={setselectedCategory}
    /> 
    <Typography  className='copyright'
    variant='body2' sx={{mt:1.5, color:"#fff"}}>
      Copyright 2022 Enes ÇEB
    </Typography>
    </Box>  
    <Box
    p={2} sx={{overflowY: "auto", height: "90vh", flex:"2"}}>
    <Typography 
    variant='h4' 
    fontWeight="bold" mb={2} sx={{color: "white"}}
    >
    404<span style={{color: "#F31503"}}> Page Not Found</span>
    </Typography>

    <Typography>
        <Link to="/" >
        <span style={{color: "#f1f1f1"}}> Go Home</span>
        </Link>
    </Typography>
    </Box>  
    </Stack>
  )
}

export default NotFoundPage