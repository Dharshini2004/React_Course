import "./Carcomp.css"
import {Component} from 'react';
import myImg from "../assets/images/car.jpeg";
export default class Carcomp extends Component
{
    render ()
    {
        return(
            <div className="car">
                <p >Tesla</p>
                <div>
                    <img src={myImg} alt="car"/>
                    {/* <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2023%2F10%2F29%2F09%2F50%2Fai-generated-8349299_640.jpg&tbnid=llBomNiwxvbhjM&vet=12ahUKEwjMlYCql4eDAxVTSWwGHU8eBMwQMyhHegUIARCUAg..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ftesla%2520car%2F&docid=Np2KTkxlcb6ACM&w=640&h=640&q=tesla%20car%20images&ved=2ahUKEwjMlYCql4eDAxVTSWwGHU8eBMwQMyhHegUIARCUAg" alt="carimage" /> */}
                </div>
            </div>
        );
    }
}