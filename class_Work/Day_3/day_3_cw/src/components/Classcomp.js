import {Component} from 'react';
export default class Classcomp extends Component{
    render()
    {
        function arrbut()
        {
            // let array=["North","East","west","south"];
            // for(let i=0;i<array.length;i++)
            // {
            //     console.log(array[i]);
            //     <p>${array[i]}</p>
            // }
            var ele=document.getElementById('demo');
            if(ele)
            {
                ele.innerHTML="new";
            }
            // const string = JSON.stringify(array);
            // document.querySelector(".output").innerHTML = string;
        }
        return(
            <div className="demo">
                <h1>Example of components</h1>
                <h2>Another Example</h2>
                <div>
                   <button onClick={arrbut} className="output" >click</button>
                </div>
            </div>
            
        )
    }
}