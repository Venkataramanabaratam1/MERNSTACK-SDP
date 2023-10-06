import { Profiler, useState } from 'react';
import '../App.css';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
import Navbar from '../pages/Navbar';
import pic from '../pages/img/pics.jpeg'
import { Avatar } from '@mui/material';
import { width } from '@mui/system';
const animals = [
    "Aardvark"
]

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1 ;;
}

function randomName() {
    return "Anonymous " + animals[Math.floor(Math.random() * animals.length)]
}


function Profile() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [fname, setFName] = useState(randomName());
    const [lname, setLName] = useState(randomName());
    const [age, setAge] = useState(randomNumber());
    const [address, setAddress] = useState(randomName());
    const [gender, setGender] = useState(randomName());
    const [nation, setNation] = useState(randomName());
    const [contact, setContact] = useState(randomNumber());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [color, setColor] = useState(randomColor());

    const stored = {fname,lname,age, address,gender,nation,contact, month, day, color};
    const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setFName(result.fname);
            setLName(result.lname);
            setAge(result.age);
            setAddress(result.address);
            setGender(result.gender);
            setNation(result.nation);
            setContact(result.contact);
            setMonth(result.month);
            setDay(result.day);
            setColor(result.color);
        }        
        setEditMode(false);
    }

    return (
        <div>
        <Navbar/>    
        <div className="container">
            <div className="profile"> 
            <center><h1>My Profile</h1></center> 
           <center> <Avatar style={{height:260, width:260}}> <img src={pic}/></Avatar>   </center>
                {
                    editMode
                        ? <>
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            {
                                isBirthdayToday
                                    ? <div className="birthday">Happy Birthday!</div>
                                    : <h1>My Profile</h1>
                            }
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
        </div>
    );
}

export default Profile;
