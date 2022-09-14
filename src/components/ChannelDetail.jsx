import { Box, CardMedia } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIService } from "../utils/APIService"
import { demoProfilePicture } from "../utils/constants"
import {ChannelCard , Videos} from "./"




const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail, videos)

  useEffect(() => {
  APIService(`channels?part="snippet&id=${id}`)
    .then((data) => setchannelDetail(data?.items[0]))
   APIService(`search?channelId=${id}&part=snippet&order=date`)
   .then((data) => setVideos(data?.items))
  }, [id])
  
  return (
    <Box minHeight="95vh"  >
        <Box>
        <CardMedia
          image={channelDetail?.brandingSettings?.image?.bannerExternalUrl || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{width:'%95', height: '300px', mb:2, border: '1px solid #e3e3e3',  zIndex:10 }}
          />
          {/* <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(80,80,96,1) 48%, rgba(30,72,80,1) 100%)', zIndex:10, height: "300px"}}/> */}
          <ChannelCard channelDetail={channelDetail} marginTop="-150px"/>
        </Box>
        <Box display="flex" p="2"> 
          <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail