import './App.css';


const Header = () =>{
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' 
        src='https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg'></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <li>
            Contact Us
          </li>
          <li>
            Cart
          </li>
        </ul>
      </div>
    </div>
  )
}

const ReastrauntCard = () =>{
  return (
    <div className='res-card'>
      <img className='res-logo'
      alt="food-image" src='https://tse2.mm.bing.net/th?id=OIP.maQpFJiRuDMauaTZ3N7KiQHaEo&pid=Api&P=0&h=180'></img>
      <h3>Meghana Foods</h3>
      <h4>Biryani, cuisine, North Indian</h4>
      <h4>4.2</h4>
    </div>
  )
}

const Body = () =>{
  return(
  <div className='body'>
    <div className='search'>Search</div>
    <div className='res-conatiner'>
      <ReastrauntCard/>
    </div>
  </div>    
  )
}



function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
