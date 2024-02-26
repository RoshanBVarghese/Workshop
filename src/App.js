import React from 'react';
import Dashboard from './components/Dashboard';
import Listitems from './components/Listitems';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import MaleIcon from '@mui/icons-material/Male';
import PublicIcon from '@mui/icons-material/Public';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PlaceIcon from '@mui/icons-material/Place';
import './App.css'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NoteIcon from '@mui/icons-material/Note';

function App() {
  return (
    <div>
      <Dashboard />
      <Listitems />
      {/* Details */}
      <div style={{marginLeft: '20%', marginRight: '25%', marginTop: '-53%', paddingLeft: '20px', paddingRight: '20px' }}>
        <div className="card">
          <div className="card-body" style={{ position:'relative',textAlign: 'left', alignItems: 'flex-start' }}>
            <AccountCircleIcon className="icon me-2" />Pet3011 Par3011
            <EditIcon style={{ marginRight: '5px', fontSize: '14px', color: 'orange' }} />
            <MoreVertIcon style={{ marginLeft: '-10px', fontSize: '14px', color: 'orange' }} />
            <button
              className="btn btn-primary rounded-pill me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Chart"
              aria-controls="chart"
              aria-expanded="false"
              aria-label="Toggle Chart"
              style={{ padding: '1px 10px', fontSize: '10px' }}
            >
              <AddIcon style={{ fontSize: '12px' }} />
              Chart
            </button>
            <button
              className="btn btn-primary rounded-pill me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Enroll"
              aria-controls="enroll"
              aria-expanded="false"
              aria-label="Toggle Enroll"
              style={{ padding: '1px 10px', fontSize: '10px' }}
            >
              <AddIcon style={{ fontSize: '12px' }} />
              Enroll
            </button>
            <br />
            <p>
              <MaleIcon /> Male <b>DOB:</b> 01-jan-1980 (42 Yrs)
              <br />
              <PublicIcon /> <b>Ethnicity:</b> Caucasian (European)
              <br />
              <ApartmentIcon /> <b>Occupation:</b> Management
              <br />
              <RecentActorsIcon />: 14251541825 <b>MRN :</b> (EBS Demo facility - 350)
            </p>
            {/* Box section */}
            <div className="box-section">
      <div className="box" >
        <h5 style={{fontSize:'15px' ,backgroundColor:'blue',color:'white'}}>Risk</h5>
        <p style={{fontSize:'10px'}}>This Year: <b>N/A</b></p>
        <p style={{fontSize:'10px'}}>Last Year: <b>N/A</b></p>
      </div>
      <div className="box" style={{width:'12%', textAlign:'center'}}>
        <h5 style={{fontSize:'15px' ,backgroundColor:'blue',color:'white'}}>Care Gaps</h5>
        <p style={{fontSize:'15px'}}>3</p><br/>
      </div>
      <div className="box" >
        <h5 style={{fontSize:'15px',backgroundColor:'blue',color:'white'}}>ASCVD</h5>
        <p style={{fontSize:'10px'}}>Current Risk: <b>2.70</b></p>
        <p style={{fontSize:'10px'}}>Lowest Risk: <b>0.20</b></p>
      </div>
      <div className="box" >
        <h5 style={{fontSize:'15px', backgroundColor:'blue',color:'white'}}>SDOH</h5>
        <p style={{fontSize:'10px'}}>This Year: <b>0.57</b></p>
        <p style={{fontSize:'10px'}}>Last Year: <b>0.60</b></p>
      </div>
    </div>
          </div>

          <div className="card-body" style={{ textAlign: 'left', alignItems: 'flex-start', marginLeft: '60%' }}>
            <p style={{ marginTop: '-105%' }}>
              <PlaceIcon style={{ fontSize: '20px' }} /> No details provided <br />
              <b>Primary:</b> +91 8622825778 <br />
              <b>Emergency:</b> +14 456020418<br />
              <b>Policy Number:</b> 9999999999<br />
              <b>Insurer:</b> Medicare
            </p>
            {/* Screenings */}
            <div className="screenings-card">
              <p><b>Screenings</b><br />
                <input type='radio' value={'DM'} />DM <input type='radio' value={'BP'} />BP <input type='radio' value={'Depression'} />Depression<br />
                <input type='radio' value={'Colorectal'} />Colorectal <input type='radio' value={'Breast cancer'} />Breast cancer<br />
                <input type='radio' value={'Fall Risk'} />Fall Risk <input type='radio' value={'Tobacco'} />Tobacco
              </p>
            </div>
          </div>

        </div>
        {/* Recent activity */}
        <div className="recent-activity-card">
          <div className="card-body">
            <div className="recent-activity-header">
              <h5><BusinessCenterIcon style={{ fontSize: '20px' }} /> Recent Activity <AddIcon style={{ fontSize: '20px' }} /></h5>
            </div>
            <p style={{ marginTop: '8px' }}>Follow Up</p>
          </div>
        </div>
        {/* Latest note */}
        <div className="latest-note-card">
          <div className="card-body">
            <div className="latest-note-header">
              <h5><NoteIcon style={{ fontSize: '20px' }} /> Latest Note <AddIcon style={{ fontSize: '20px' }} /></h5>
            </div>
            <p style={{ marginTop: '8px' }}>5. Type of Wellness Exam: IPPE -<br />
              Welcome to Medicare - Select<br />
              G0402, G0403, G0404 or G0405</p>
          </div>
        </div>
        {/* Other tabs */}
        <div className="other-tabs-container">
        <div className="other-tabs">
            <div className="other-tabs-box" >
              <p>
                <b>Primary Physician</b><br/>
                TEST ONLY<br/><br/>
                <b>Primary Location</b><br/>
                EBS Demo Facility-35<br/><br/>
                <b>Referred by</b><br/>
                Not provided<br/><br/>
                <b>Last Visit</b> 15-Nov-2019<br/><br/>
                <b>No of visit</b> 7<br/>
                (in last 12 months)<br/><br/>
                <b>No of Hospitalizations</b> 0<br/>
                (in last 3 months)<br/>
                <span style={{color:'red'}}><b>Readmissions </b> 0</span>
              </p>
            </div>
          </div>

          <div className="other-tabs">
            <div className="other-tabs-box" style={{width:'100%',height:'99%',border: '3px solid green' }}>
              <p>
                <b>Condition</b><br/>
                Heart Failure, Hypertension, Ischemic, Heart Disease<br/><br/>
                <b>Habits</b><br/>
                Smoking<br/><br/>
                <b>Vitals</b><br/>
                BMI: NA, Systolic/Diastolic: 127/84, Glucose: NA, o2 Saturation: NA<br/><br/>
                <b>Lab</b><br/><br/>
                <b>HDL</b>&nbsp; N/A &nbsp;&nbsp; <b>LDL</b> &nbsp;N/A<br/>
                <b>HbA1c</b>&nbsp; N/A<br/>
              </p>
            </div>
          </div>

          <div className="other-tabs">
            <div className="other-tabs-box" style={{width:'100%', height:'99%',border: '3px solid orange' }}>
              <p>
                <b>Allergy</b><br/>
                Env (Fungicide),Food (Egg),Food(Tree Nut)<br/><br/>
                <b>Medications</b><br/>
                DIA-EZE<br/><br/>
                <b>Immunization</b><br/>
                1122 (dtpp)<br/><br/>
                
              </p>
            </div>
          </div>

          <div className="other-tabs">
            <div className="other-tabs-box" style={{width:'100%', height:'99%',border: '3px solid red' }}>
              <p>
                <b>Programs</b><br/>
                Remote Monitoring, disease management program, CCM, AWV<br/><br/>
                <b>Service Category</b><br/>
                High Acuity, Straight Medicare<br/><br/>
                <b>Measures</b><br/>
                Adult Access to Preventive/Ambulatory Health Services ALL, Adult BMI Assesment,
                Controlling High Blood Pressure with 18-59 years of age<br/><br/>
                
              </p>
            </div>
          </div>
          </div>

      </div>
    </div>
  );
}

export default App;
