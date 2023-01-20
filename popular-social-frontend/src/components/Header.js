import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { Avatar, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Flag'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <img src="logo192.png" alt="Popular" />
            </HeaderLeft>
            <HeaderInput>
                <SearchIcon />
                <input placeholder="Search Popular" type="text" />
            </HeaderInput>
            <HeaderCenter>
                <div className="header__option header__option--active">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontsize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontsize="large" />
                </div>
            </HeaderCenter>
            <HeaderRight>
                <div className="header__info">
                    <Avatar src="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg " />
                    <h4>Nabendu</h4>
                </div>
                <IconButton><AddIcon /></IconButton>
                <IconButton><ForumIcon /></IconButton>
                <IconButton><NotificationsActiveIcon /></IconButton>
                <IconButton><ExpandMoreIcon /></IconButton>
            </HeaderRight>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`
const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-evenly;
    img { 
        height: 40px; 
    }
`
const HeaderInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 33px;
    input {
        border: none;
        background-color: transparent;
        outline-width: 0;
    }
`
const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    .header__option{
        display: flex;
        align-items: center;
        padding: 10px 30px;
        cursor: pointer;
        .MuiSvgIcon-root{
            color: gray;
        }
        &:hover{
            background-color: #eff2f5;
            border-radius: 10px;
            align-items: center;
            padding: 0 30px;
            border-bottom: none;
            .MuiSvgIcon-root{
                color: #2e81f4;
            }
        }
    }
    .header__option--active{
        border-bottom: 4px solid #2e81f4;
        .MuiSvgIcon-root{
            color: #2e81f4;
        }
    }
`
const HeaderRight = styled.div`
    display: flex;
    .header__info {
        display: flex;
        align-items: center;
        h4 {
            margin-left: 10px;
        }
    }
`

export default Header