import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "first meetup",
    address: "Some street 45, Nis",
    description: "This is first meetup",
    image:
      "https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg",
  },
  {
    id: "m2",
    title: "second meetup",
    address: "Some street 45, Nis",
    description: "This is second  meetup",
    image:
      "https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg",
  },
  {
    id: "m3",
    title: "third meetup",
    address: "Some street 45, Nis",
    description: "This is third meetup",
    image:
      "https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg",
  },
  {
    id: "m4",
    title: "fourth meetup",
    address: "Some street 45, Nis",
    description: "This is fourth meetup",
    image:
      "https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg",
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// funkcija je rezervisana samo za pages folder
// radi prerender jer next ne ceka da se dobiju podaci sa http poziva recimo
// nego odmah renderuje stranicu
// tako da moze da se desi da dobijemo praznu stranicu kao rezultat jer ne uzima
// asinhroni poziv u razmatranje odmah pri renderovanju
// ova funkcija garantuje da next ceka podatke i prikazuje ih istovremeno kad i stranicu
// na ovaj nacin mnogo brze dobijam podatke i mogu da izbegnem loading i slicne
// stvari kod asinhronog koda

// revalidate sluzi da posle builda refreshuje podatke i updateuje build
// na uneti broj sekundi, tako da ne moramo da pravimo novi build
// export async function getStaticProps() {
//   // fetch data from an api
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//     revalidate: 10,
//   };
// }

// ako zelim da refreshujem podatke koje page dobija pri svakom requestu
// koristim getServerSideProps

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  console.log(res);
  console.log(req);

  // fetch data from api...
  return {
    props: {
      meetups: dummy_meetups,
    },
  };
}

export default HomePage;
