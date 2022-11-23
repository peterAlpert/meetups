import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA=[
    {
        id:'m1',
        title:'This the first meetups',
        image:'https://www.shutterstock.com/image-vector/meet-on-speech-bubble-600w-1618832668.jpg',
        description:'description of the first meetups'
    },
    {
        id:'m2',
        title:'This the second meetups',
        image:'https://www.shutterstock.com/image-vector/meet-on-speech-bubble-600w-1618832668.jpg',
        description:'description of the second meetups'
    }
]

function AllMeetupsPage(){
    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
 
}

export default AllMeetupsPage;