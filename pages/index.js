import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import API from "./api/baseUrl";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Next.js Meetups vezba</title>
      </Head>
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
export async function getStaticProps() {
  const response = await API.get("meetups.json");

  let allMeetups = [];

  for (const key in response.data) {
    allMeetups.push({
      address: response.data[key].address,
      image: response.data[key].image,
      title: response.data[key].title,
      id: key.toString(),
    });
  }

  return {
    props: {
      meetups: allMeetups,
    },
    revalidate: 10,
  };
}

// ako zelim da refreshujem podatke koje page dobija pri svakom requestu
// koristim getServerSideProps, bolje je da koristim ovaj pristup
// ako mi se data menja vise puta u sekundi i ako mi treba request objekat (context)
// npr za autentikaciju

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   console.log(res);
//   console.log(req);

//   // fetch data from api...
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//   };
// }

export default HomePage;
