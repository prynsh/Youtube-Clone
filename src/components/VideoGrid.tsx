import { VideoCard } from "./VideoCard"

const Videos=[{
    title:"Crystal Chases- Empathy",
    image:"Crystal Chases.png",
    thumbImage:"Crystal logo.png",
    author:"Priyansh Verma",
    views:"10 Mn",
    timeStamp:"10 years ago"
},{
    title:"Crystal Chases- Empathy",
    image:"Crystal Chases.png",
    thumbImage:"Crystal logo.png",
    author:"Priyansh Verma",
    views:"10 Mn",
    timeStamp:"10 years ago"
},{
    title:"Crystal Chases- Empathy",
    image:"Crystal Chases.png",
    thumbImage:"Crystal logo.png",
    author:"Priyansh Verma",
    views:"10 Mn",
    timeStamp:"10 years ago"
},{
    title:"Crystal Chases- Empathy",
    image:"Crystal Chases.png",
    thumbImage:"Crystal logo.png",
    author:"Priyansh Verma",
    views:"10 Mn",
    timeStamp:"10 years ago"
}]


export const VideoGrid = ()=> {
    return<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Videos.map(video => <div> 
            <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timeStamp={video.timeStamp}></VideoCard>
        </div>) }

    </div>
}