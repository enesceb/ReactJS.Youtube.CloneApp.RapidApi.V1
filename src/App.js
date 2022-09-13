import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components' 

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
    <Navbar/>

    <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id" exact element={<VideoDetail/>} />
        <Route path="/video/:id" exact element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed/>} />
    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App