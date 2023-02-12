import MeetupList from "@/components/meetups/MeetupList";

const dummyMeetups = [
  {
    id: 'm1',
    title: 'm1 meetup',
    image: '',
    address: 'meetup address',
    description: 'meetup desc'
  },
  {
    id: 'm2',
    title: 'm2 meetup',
    image: '',
    address: 'meetup address',
    description: 'meetup desc'
  }
]

function HomePage() {
  return <MeetupList meetups={dummyMeetups} />
}

export default HomePage;