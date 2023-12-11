
const App=()=> {
  const Compare=()=>
  {
    const name1="kabil";
    const name2="kabil";
    if(name1===name2)
    {
      console.log(true);
    }
    else
    {
      console.log(false);
    }
  }
  return(
    <div id="root" >
      <h1>Challege Yourself 1</h1>
      <button  onClick={Compare} >Click</button>
    </div>
  );
}
export default App;
