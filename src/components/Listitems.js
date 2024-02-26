import PersonIcon from '@mui/icons-material/Person';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PlaceIcon from '@mui/icons-material/Place';
import ContactsIcon from '@mui/icons-material/Contacts';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import * as React from 'react';

function MainListItems() {
    return (
        <div style={{ padding: '-1px', width: '200px' }}>
            
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <SpeedIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
                <PersonIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <GroupsIcon sx={{ fontSize: 40 }} /><hr />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <SecurityIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <LocalShippingIcon sx={{ fontSize: 40 }} /><hr />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <MedicalServicesIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <ArticleIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <BusinessIcon sx={{ fontSize: 40 }} /><hr />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <NewspaperIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <DeviceThermostatIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <ChatBubbleIcon sx={{ fontSize: 40 }} /><hr />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <HomeRepairServiceIcon sx={{ fontSize: 40 }} />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <PlaceIcon sx={{ fontSize: 40 }} /><hr />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <ContactsIcon sx={{ fontSize: 40 }} /><hr />
            </button><br />
            <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer' }}>
                <ArticleIcon primary="Articleicon" sx={{ fontSize: 40 }} />
            </button>
        </div>
    );
}

export default MainListItems;

