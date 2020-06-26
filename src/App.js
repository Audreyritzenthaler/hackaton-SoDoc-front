import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LogBook from './components/patients/LogBook';
import Dashboard from './components/practicioner/Dashboard'
import Connection from './components/Connection';
import PatientPageDoctor from './components/practicioner/PatientPageDoctor'
import './components/patients/BurgerMenuPatient.css'
import MessagesContainerUrgent from './components/practicioner/MessagesContainerUrgent'
import DosagePatient from './components/patients/DosagePatient'
import AppointmentPatient from './components/patients/AppointmentPatient';
import InfosDoctor from './components/practicioner/InfosDoctor';
import PatientPageMobile from './components/patients/PatientPageMobile'
import AllPatientsPageMobile from './components/practicioner/AllPatientsPageMobile'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Connection} />
        {/* patients routes */}
        {width < 640 ? <Route path="/logbook" component={PatientPageMobile} /> : <Route path="/logbook" component={LogBook} />}
        {/* <Route path="/logbook" component={LogBook} />
        <Route path="/mymessages" component={MessageContainerPatient} /> */}
        {/* <Route path="/logbook" component={LogBook} />
        <Route path="/mymessages" component={PatientPageMobile} /> */}
        <Route path="/mydosages" component={DosagePatient} />
        <Route path="/myappointements" component={AppointmentPatient} />
        {/* <Route path="/myinfos" component={MyInfos} /> */}


        {/* practicioner routes */}
        <Route path="/dashboard/patient/:id" component={PatientPageDoctor} />
        {width < 640 ? <Route path="/dashboard" component={MessagesContainerUrgent} /> : <Route path="/dashboard" component={Dashboard} />}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/practitioner/messages" component={MessagesContainerUrgent} />
        <Route path="/practitioner/patients" component={AllPatientsPageMobile} />
        {/* <Route path="/practiotioner/infos" component={MyInfos} /> */}
      </Switch>
    </div>
  );
}

export default App;
