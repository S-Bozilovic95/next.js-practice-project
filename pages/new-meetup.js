import axios from "axios";
import Head from "next/head";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = async (enteredMeetupData) => {
    await axios({
      url: "./api/new-meetup",
      method: "POST",
      data: enteredMeetupData,
    });
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetup;
