import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Crystal Chases- Empathy"}
        image={"Crystal Chases.png"}
        thumbImage={"Crystal logo.png"}
        author={"Priyansh Verma"}
        views={"10 Mn"}
        timeStamp={"10 years ago"}
      ></VideoCard>
    </div>
  );
}
