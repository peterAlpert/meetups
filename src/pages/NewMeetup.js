import NewMeetupForm  from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    function addMeetupHandler(meetupData){
        fetch('https://react-meetups-b7a98-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers: { 'Content-Type' : 'application/json'}
            }
        )

    }
    return(
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddmeetup={addMeetupHandler}/>
        </section>
    )

}

export default NewMeetupsPage;