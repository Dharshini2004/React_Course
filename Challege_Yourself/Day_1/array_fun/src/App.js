import logo from './logo.svg';
import './App.css';

// import{Arrbutton} from './Components/component'
const App=()=> {
  const array=["North","East","West","South"];
  const Con=()=>
  {
      // const newarr=array.map(array=>array+' News');
      // console.log(newarr)
      // document.getElementById("mylist").innerHTML=array.join(', ');
      // let list=document.getElementById("mylist");
      // for(let i=0;i<array.length;i++)
      // {
      //   let li=document.createElement('li');
      //   li.innerHTML=array[i];
      //   list.appendChild(li);
      // }
      // document.getElementById("mylist").innerHTML=array;
      
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Refereshing Array Function</p>
        {/* <ul id="mylist">
          <li>North</li>
          <li>East</li>
          <li>West</li>
          <li>South</li> 
        </ul> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={Con} >Array</button>
        <button>Refreshing Array</button>
      </header>
    </div>
  );
}

export default App;
