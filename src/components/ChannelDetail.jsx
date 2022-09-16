import { Box, CardMedia } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIService } from "../utils/APIService"
import { demoProfilePicture } from "../utils/constants"
import {ChannelCard , Videos} from "./"




const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setchannelDetail] = useState()
  const [videos, setVideos] = useState(null)
 

  useEffect(() => {
    const fetchResults = async () => {
      const data = await APIService(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await APIService(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
  }
  fetchResults()
  }, [id,videos,channelDetail])

  return (
    <Box minHeight="95vh"  >
        <Box>
        <CardMedia
          image={channelDetail?.brandingSettings?.image?.bannerExternalUrl || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{width:'%95', height: '300px', mb:2, border: '1px solid #e3e3e3',  zIndex:10 }}
          />
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