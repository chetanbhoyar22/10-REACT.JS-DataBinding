import React, {useState} from 'react';
import './Chetan.css';
function App() {
  
  const [myCity, ChangeMyCity] = useState("Pune");

  const changeInputValue = (event) =>
  {
    ChangeMyCity(event.target.value);

  }
  return (
    <div className="main_body">
      <h1>{myCity}</h1>
      <b>1.Text</b> <input 
      type="text" 
      onChange={changeInputValue}
      />
      <br/><br/>
      <b>2.Number</b> <input 
      type="number"
      onChange={changeInputValue}
      />
      <br/><br/>
      <b>3.Email</b> <input 
      type="email"
      onChange={changeInputValue} 
      />
      <br/><br/>
      <b>4.Password</b> <input 
      type="password" 
      />
      <br/><br/>
      <b>5.Date</b> <input 
      type="date" 
      min="2021-03-01"
      max="2021-04-30"
      onChange={changeInputValue}
      />
      <br/><br/>
      <b>6.Time</b> <input 
      type="time" 
      onChange={changeInputValue}
      />
      <br/><br/>
      <b>7.Checkbox</b> <input 
      type="checkbox" 
      value='10th'
      onChange={changeInputValue}
      />10th
       <input 
      type="checkbox" 
      value='12th'
      onChange={changeInputValue}
      />12th
       <input 
      type="checkbox" 
      value='Gradution'
      onChange={changeInputValue}
      />Gradution
      <br/><br/>
      <b>8.Radio</b>
      <input 
      type="radio" 
      value="Male"
      name="Gender"
      onChange={changeInputValue}
      />Male
      <input 
      type="radio" 
      value="Female"
      name="Gender"
      onChange={changeInputValue}
      />Female
      <br/><br/>
      <b>9.Select </b>
      <b>City : </b>
      <select onChange={changeInputValue}>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Aurangabad</option>
        <option>Amravati</option>
        <option>Nagpur</option>
        <option>Goa</option>
        
      </select>

      
    </div>
  );
}

export default App;
