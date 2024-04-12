import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "52 Bars",
    artist: "Karan Aujla",
    mp3: new Audio("/assets/mp3/52 Bars - Karan Aujla.mp3"),
    img: "/assets/52bars.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "kingpin",
    artist: "Tarsem jassar",
    mp3: new Audio("/assets/mp3/Kingpin - Tarsem Jassar.mp3"),
    img: "/assets/kingpin.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "100 Million",
    artist: "Karan Aujla",
    mp3: new Audio("/assets/mp3/100 Million - Karan Aujla.mp3"),
    img: "/assets/100m.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "P.O.V",
    artist: "Karan Aujla",
    mp3: new Audio("/assets/mp3/P.O.V (Point Of View) - Karan Aujla.mp3"),
    img: "/assets/pov.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Top Class",
    artist: "Karan Aujla",
    mp3: new Audio("/assets/mp3/Top Class Overseas - Karan Aujla.mp3"),
    img: "/assets/topclass.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Umbrella",
    artist: "Diljit Dosanjh",
    mp3: new Audio("/assets/mp3/Umbrella - Diljit Dosanjh.mp3"),
    img: "/assets/umb.jpg",
  },
];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
