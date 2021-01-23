import React, {useState} from 'react';
import './Card.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaEdit, FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

function Card(props){

    return (
        <div className='Card'>
            <div className='upper-container'>
                <FaEdit style={{ width:'50px', margin:'20px 15px', float:'right'}}/>
                <div className='image-container'>
                    <img src= {props.img} className="App-logo" alt="logo" />

                </div>
            </div>
            <div className="lower-container">
                <h3>{props.name}</h3>
                <h4>{props.job}</h4>
                <p>{props.about}</p>
                <div>
                    <span className="input-group=text"> <a href="https://www.facebook.com/" ><FaFacebook  style= {{ width:'40px'}} /> </a></span>
                    <span><a href="https://www.instagram.com/"> <FaInstagram style= {{ width:'40px'}}/></a></span>
                    <span> <a href="https://github.com/"><FaGithub style= {{ width:'40px'}}/></a> </span></div>

                <button>visit profile</button>
            </div>
        </div>
    )
}

export default Card;