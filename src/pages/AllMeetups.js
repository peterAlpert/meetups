import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

import "../index.css";


function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://react-meetups-b7a98-default-rtdb.firebaseio.com/meetups.json')
        
        .then((res)=>{
            return res.json();
        })

        .then((data)=>{
            const meetups = [];

            for(const key in data){
                const meetup ={
                    id:key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    },[]);


    if(isLoading){
        return(
            <section className="loader">
            </section>
        )
    }

    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
 
}


export default AllMeetupsPage;





// const DUMMY_DATA=[
//     {
//         id:'m1',
//         title:'This the first meetups',
//         image:'https://www.shutterstock.com/image-vector/meet-on-speech-bubble-600w-1618832668.jpg',
//         description:'description of the first meetups'
//     },
//     {
//         id:'m2',
//         title:'This the second meetups',
//         image:'https://www.shutterstock.com/image-vector/meet-on-speech-bubble-600w-1618832668.jpg',
//         description:'description of the second meetups'
//     }
// ]