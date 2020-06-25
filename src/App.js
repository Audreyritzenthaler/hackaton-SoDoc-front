import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LogBook from './components/patients/LogBook';
import Dashboard from './components/practicioner/Dashboard'
import Connection from './components/Connection';
import BurgerMenuPatient from './components/patients/BurgerMenuPatient';
import BurgerMenuPractitioner from './components/practicioner/BurgerMenuPractitioner';
import './components/patients/BurgerMenuPatient.css'

function App() {
  return (
    <div className="App">
      <BurgerMenuPractitioner />
      <Switch>
        <Route exact path="/" component={Connection}/>
        {/* patients routes */}
        <Route path="/logbook" component={LogBook}/>
        {/* <Route path="/mymessage" component={MyMessage} />
        <Route path="/mydosages" component={MyDosages} />
        <Route path="/myappointements" component={MyAppointements} />
        <Route path="/myinfos" component={MyInfos} /> */}
        

        {/* practicioner routes */}
        <Route path="/practiotioner/messages" component={Dashboard} />
        {/* <Route path="/practiotioner/patients" component={AllPatients} />
        <Route path="/practiotioner/infos" component={MyInfos} /> */}
      </Switch>
    </div>
  );
}

export default App;
