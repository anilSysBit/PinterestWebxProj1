import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
// import Clear from '@mui/icons-material/Clear';

const Navigation = () => {
  const [searchState,setSearchState] = useState(false);


  const buttonSx  = {
    // width:'20px',
    borderRadius:'50%',
    color:'var(--darkIcon)',
    height:'60px',
    // border:'2px solid black'
  }

  useEffect(()=>{
    window.onScroll =()=>{
      setSearchState(false)
    }
  },[])
  return (
    <div className="navigation_container">
      <div className="size_manager">
        <div className="nav logo">
          <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" alt="logo" height={40}/>
        </div>
        <div className="nav list">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Create</a></li>
          </ul>
        </div>
        <div className="nav search_box">
          <div className="search_size_manager" onClick={()=>{
            setSearchState(!searchState)
          }} style={{
            outline:searchState?'5px solid skyblue':'none'
          }}>
          <SearchIcon sx={{mx:'5px'}}/>
          <input type="text" placeholder='Search your pins..' className='searchbox'/>
         {searchState?  <Button variant='text' sx={{width:'20px',borderRadius:'30px',color:'black',height:'30px' }}><ClearIcon sx={{mx:'5px'}}/></Button> : null}
          </div>
        </div>
        <div className="nav icons">
          <Button variant='text' sx={buttonSx}><NotificationsIcon className='icon_item'/></Button>
          <Button variant='text' sx={buttonSx}><SmsRoundedIcon className='icon_item'/></Button>
          <Button variant='text' sx={buttonSx}><AccountCircleRoundedIcon className='icon_item'/></Button>
          <Button variant='text' sx={buttonSx}><KeyboardArrowDownRoundedIcon className='icon_item'/></Button>
        </div>
      </div>
    </div>
  )
}

export default Navigation