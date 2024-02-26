import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import NoteIcon from '@mui/icons-material/Note';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Dashboard() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="icon me-4" style={{ backgroundColor: 'lightblue', margin:'-12px',marginTop:'-2%',marginBottom:'-2%'}}>
                        <MenuIcon style={{ fontSize: '51px' }} />
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="input-group rounded-pill me-2">
                            <span className="input-group-text"><SearchIcon /></span>
                            <input type="text" className="form-control rounded-pill" placeholder="Last name / First name" />
                        </div>
                        <button className="btn btn-primary rounded-pill me-2" type="button" data-bs-toggle="collapse" data-bs-target="#advancedSearch" aria-controls="advancedSearch" aria-expanded="false" aria-label="Toggle Advanced Search">
                            <SearchIcon /> Advanced Search
                        </button>
                        <button className="btn btn-primary rounded-pill me-2" type="button" data-bs-toggle="collapse" data-bs-target="#patientForm" aria-controls="patientForm" aria-expanded="false" aria-label="Toggle Patient Form">
                            <AddIcon /> Patient
                        </button>
                    </div>
                    <div className="d-flex align-items-center ms-auto">
                        <p className="navbar-brand mb-0 me-2">Medicare</p>
                        <NotificationsIcon className='icon me-4' />
                        <SettingsIcon className="icon me-4" />
                        <NoteIcon className="icon me-4" />
                        <CampaignIcon className="icon me-4" />
                        <AccountCircleIcon className="icon" />
                    </div>
                </div>
            </nav>
            <hr className="my-0" />
        </React.Fragment>
    );
}

export default Dashboard;
