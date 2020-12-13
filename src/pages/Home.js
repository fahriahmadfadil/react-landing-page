import React from 'react';
import '../assets/css/Home.css';
import Main from '../components/Home/Main';
import Feature from '../components/Home/Feature';
import Update from '../components/Home/Update';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import Contact from '../components/Home/Contact';

class Home extends React.Component{
  render(){
    const dataFeature = [
      {'title' : 'Automatic Threat Detection','body' : 'Siphome reacts the moment your equipment fails, alerting you to the problem.','img': 'icon-detection.png'},
      {'title' : 'Smart Diagnostics','body' : 'See exactly what is malfunctioning and compare your maintenance options on the same screen.','img':'icon-diagnostic.png'},
      {'title' : 'Disaster Prevention','body' : 'Predictive analytics lets you see what needs maintenance before it fails.','img':'icon-disaster.png'},
      {'title' : '24/7 Service​','body' : 'Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.','img':'icon-call.png'},
    ];
    
    const dataUpdate = [
      {icon:'icon-monitor.png',title: 'Monitor',text: 'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.'},
      {icon:'icon-maintenance.png',title: 'Maintenance',text: 'Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.'},
      {icon:'icon-repair.png',title: 'Repair',text: 'Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.'},
      {icon:'icon-replace.png',title: 'Replace',text: 'Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.'}
    ];

    const dataServices = [
      {icon:'icon-mcm.png',title:'Mobile Command Management'},
      {icon:'icon-eqo.png',title:'Equipment Optimizer'},
      {icon:'icon-lp.png',title:'Lifecycle Prediction'},
      {icon:'icon-tg.png',title:'Troubleshooting Guide'},
      {icon:'icon-eno.png',title:'Energy Optimizer'},
      {icon:'icon-sd.png',title:'Smart Diagnostics'},
      {icon:'icon-ves.png',title:'Vital Equipment Scan'},
      {icon:'icon-sa.png',title:'Smart Alerts'},
      {icon:'icon-pm.png',title:'Preventive Maintenance'}
    ];

    const dataTestimonials = [
      {img:'testi-ryan.png',text:'“We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm.”',person:'Ryan Oliver',personPosition:'Design Manager Kiluna'},
      {img:'testi-gladina.png',text:'“Thank you for introducing me to Siphome!  We like how the system gives updates to us and the homeowner as well to give us a real time update on how everything is working.”',person:'Gladina Samantha',personPosition:'CEO JobDesk United, LLC'}
    ];

    return(
      <div className="wrapper">
        <Main/>
        <Feature dataFeature={dataFeature}/>
        <Update dataUpdate={dataUpdate}/>
        <div className="gradient">
          <Services dataServices={dataServices}/>
          <Testimonials dataTestimonials={dataTestimonials}/>
        </div>
        <Contact/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Home;