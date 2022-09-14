import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIService } from "../utils/APIService"
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
    <Box sx={{flexDirection: {sx:"column", md:"row"}}}>

 
    </Box>
  )
}

export default ChannelDetail