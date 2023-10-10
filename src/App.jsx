import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { API } from '../global'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <PhoneList /> 
   </div>
  )
}

function PhoneList(){
  const [mobileList, setMobileList ]= useState([]);
  useEffect(()=>{
    fetch(`${API}/mobiles`)
    .then((res) => res.json())
    .then((result) => setMobileList(result));
  },[]);
 
  
  return(
    <div className='phone-list-container'>
     {mobileList.map((mbl, index) => (
     <Phone mobile={mbl} key={index}/>
     ))}
    </div>
  )
}

//component declaration
function Phone({mobile}){
//  const mobile =  {
//     "model": "OnePlus 9 5G",
//     "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     "company": "Oneplus"
//   }
return(
  <div className='phone-container'>
    <img className='phone-picture' src={mobile.img} alt={mobile.model} />
    <h2 className='phone-name'>{mobile.model}</h2>
    <p className='phone-company'>{mobile.company}</p>
  </div>
)
}
export default App
