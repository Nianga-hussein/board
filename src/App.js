import React from "react";
import About from "./pages/about";
import Candidateappliedjob from "./pages/candidate-applied-job";
import Candidatecvmanager from "./pages/candidate-cv-manager";
import Candidatedashboard from "./pages/candidate-dashboard";
import Candidatejobalert from "./pages/candidate-job-alert";
import Candidatemessage from "./pages/candidate-message";
import Candidateprofile from "./pages/candidate-profile";
import Candidateresume from "./pages/candidate-resume";
import Candidatesavedjob from "./pages/candidate-saved-job";
import Candidatesettings from "./pages/candidate-settings";
import Candidateshortlistedjob from "./pages/candidate-shortlisted-job";
import Contact from "./pages/contact";
import Employercandidate from "./pages/employer-candidate";
import Employerdashboard from "./pages/employer-dashboard";
import Employermanagejob from "./pages/employer-manage-job";
import Employermessage from "./pages/employer-message";
import Employerpostjob from "./pages/employer-post-job";
import Employerprofile from "./pages/employer-profile";
import Employerresumealert from "./pages/employer-resume-alert";
import Employersettings from "./pages/employer-settings";
import Employershortlistedresume from "./pages/employer-shortlisted-resume";
import Employersingle from "./pages/employer-single";
import Employertransaction from "./pages/employer-transaction";
import Forgotpassword from "./pages/forgot-password";
import Index2 from "./pages/index-2";
import Jobgrid from "./pages/job-grid";
import Login from "./pages/login";
import Register from "./pages/register";
import Team from "./pages/team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
        <Route path="/About" element={<About/>} />
<Route path="/Candidate-applied-job" element={<Candidateappliedjob />} />
<Route path="/Candidate-cv-manager" element={<Candidatecvmanager />} />
<Route path="/candidate-dashboard" element={<Candidatedashboard />} />
<Route path="/candidate-job-alert" element={<Candidatejobalert />} />
<Route path="/candidate-message" element={<Candidatemessage />} />
<Route path="/candidate-profile" element={<Candidateprofile />} />
<Route path="/candidate-resume" element={<Candidateresume />} />
<Route path="/candidate-saved-job" element={<Candidatesavedjob />} />
<Route path="/candidate-settings" element={<Candidatesettings />} />
<Route path="/candidate-shortlisted-job" element={<Candidateshortlistedjob />} />
<Route path="/contact" element={<Contact />} />
<Route path="/employer-candidate" element={<Employercandidate />} />
<Route path="/employer-dashboard" element={<Employerdashboard />} />
<Route path="/employer-manage-job" element={<Employermanagejob />} />
<Route path="/employer-message" element={<Employermessage />} />
<Route path="/employer-post-job" element={<Employerpostjob />} />
<Route path="/employer-profile" element={<Employerprofile />} />
<Route path="/employer-resume-alert" element={<Employerresumealert />} />
<Route path="/employer-settings" element={<Employersettings />} />
<Route path="/employer-shortlisted-resume" element={<Employershortlistedresume />} />
<Route path="/employer-single" element={<Employersingle />} />
<Route path="/employer-transaction" element={<Employertransaction />} />
<Route path="/forgot-password" element={<Forgotpassword />} />
<Route path="/" element={<Index2 />} />
<Route path="/job-grid" element={<Jobgrid />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/team" element={<Team />} />

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
