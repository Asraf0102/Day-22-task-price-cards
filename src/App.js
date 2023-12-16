import './App.css'


function App(){
  
  return(
    
    <div className = "App">
    <div className = "heading">
      <h1>React Price Card Task</h1>
    </div>

     
    <div className = "cards">
     <Card/>
     <Card1/> 
     <Card2/>  
     
    </div> 
    </div> 
    
   
    )
  }

function Card() {

  const card ={

    pack             : "FREE",
    price            : "$0/month",
    user             : "Single User",
    storage          : "50GB Storage",
    project_public   : "Unlimited Public Projects",
    access           : "Community Access",
    project_private  : "Unlimited Private Projects",
    support          : "Dedicated Phone support",
    free             : "Free subdomain",
    reports          : "Monthly static reports"

  }
  return(
    <div className = "card-outer">
      <div className = 'card-container'>
      
      <p className = 'card-pack'> {card.pack}</p>
      <p className = 'card-price'> {card.price}</p>
      <hr/>
      <div className= 'card-userList'>
      <p className = 'card-users'>✔ {card.user}</p>
      <p className = 'card-storage'>✔ {card.storage}</p>
      <p className = 'card-public-projects'>✔ {card.project_public}</p>
      <p className = 'card-access'>✔ {card.access}</p>
      </div>
      <p className = 'card-private-projects' >✘ {card.project_private}</p>
      <p className = 'card-support'>✘ {card.support}</p>
      <p className = 'card-free'>✘ {card.free}</p>
      <p className = 'card-reports'>✘ {card.reports}</p>
      <button className = 'button'>Button</button>

    </div>
  </div>

     
    
  )
}
function Card1() {

  const card ={

    pack             : "PLUS",
    price            : "$9/month",
    user             : "5 Users",
    storage          : "50GB Storage",
    project_public   : "Unlimited Public Projects",
    access           : "Community Access",
    project_private  : "Unlimited Private Projects",
    support          : "Dedicated Phone support",
    free             : "Free subdomain",
    reports          : "Monthly static reports"

  }
  return(
    <div className = "card-outer">
      <div className = 'card-container'>
      
      <p className = 'card-pack'> {card.pack}</p>
      <p className = 'card-price'> {card.price}</p>
      <hr/>
      <div className= 'card-userList'>
      <p className = 'card-user'>✔ {card.user}</p>
      <p className = 'card-storage'>✔ {card.storage}</p>
      <p className = 'card-public-projects'>✔ {card.project_public}</p>
      <p className = 'card-access'>✔ {card.access}</p>
      </div>
      <p className = 'card-private-projects1'>✔ {card.project_private}</p>
      <p className = 'card-support1'>✔ {card.support}</p>
      <p className = 'card-free1'>✔ {card.free}</p>
      <p className = 'card-reports1'>✘ {card.reports}</p>
      <button className = 'button'>Button</button>

    </div>
  </div>
  )
}


function Card2() {

  const card ={

    pack             : "PRO",
    price            : "$49/month",
    user             : "Unlimited User",
    storage          : "50GB Storage",
    project_public   : "Unlimited Public Projects",
    access           : "Community Access",
    project_private  : "Unlimited Private Projects",
    support          : "Dedicated Phone support",
    free             : "Free subdomain",
    reports          : "Monthly static reports"

  }
  return(
    <div className = "card-outer">
      <div className = 'card-container'>
      
      <p className = 'card-pack'> {card.pack}</p>
      <p className = 'card-price'> {card.price}</p>
      <hr/>
      <div className= 'card-userList'>
      <p className = 'card-user'>✔ {card.user}</p>
      <p className = 'card-storage'>✔ {card.storage}</p>
      <p className = 'card-public-projects'>✔ {card.project_public}</p>
      <p className = 'card-access'>✔ {card.access}</p>
      </div>
      <p className = 'card-private-projects2'>✔ {card.project_private}</p>
      <p className = 'card-support2'>✔ {card.support}</p>
      <p className = 'card-free2'>✔ {card.free}</p>
      <p className = 'card-reports2'>✔ {card.reports}</p>
      <button className = 'button'>Button</button>

    </div>
  </div>

     
    
  )
}
export default App;
