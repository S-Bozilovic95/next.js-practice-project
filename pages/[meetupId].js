import Head from "next/head";
import MeetupDetail from "../components/meetups/MeetupDetail";
import API from "./api/baseUrl";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title} Details</title>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

// ako imam dinamicnu stranicu(prima props preko linka npr)
// i u njoj koristim getStaticProps
// onda moram da imam i getStaticPaths, ovo ce pre-renderovati sve verzije
// ove stranice (s obzirom da se menjaju u skladu sa id-ijem koje primaju)
// da bi mogao da ih brzo izbaci
export async function getStaticPaths() {
  const response = await API.get("meetups.json");

  let allMeetupId = [];

  for (const key in response.data) {
    allMeetupId.push({
      id: key.toString(),
    });
  }

  return {
    // blocking radi isto sto i true
    fallback: "blocking",
    paths: allMeetupId.map((meetup) => ({ params: { meetupId: meetup.id } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const response = await API.get("meetups.json");

  // ovo moze drugacije da se resi kada postoji api za odredjeni id
  // samo je ovaj nacin bio najzgodniji za firebase
  let allMeetups = [];

  for (const key in response.data) {
    allMeetups.push({
      address: response.data[key].address,
      image: response.data[key].image,
      title: response.data[key].title,
      description: response.data[key].description,
      id: key.toString(),
    });
  }
  const selectedMeet = allMeetups.filter((item) => item.id === meetupId)[0];

  return {
    props: {
      meetupData: selectedMeet,
    },
  };
}

export default MeetupDetails;
