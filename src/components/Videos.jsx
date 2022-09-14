import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'


const Videos = ({videos}) => {

  return (
     <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        
        {console.log(videos)}
        {videos.map((item, idx) => (
          <Box key={idx}>
              {item?.id?.videoId && <VideoCard video={item}/>}
              {item?.id?.playlistId && <VideoCard video={item}/>}
              {item?.id?.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))}
     </Stack>
  )
}

export default Videos