import Link from "next/link";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Card({result}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`} >
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt={result.title ||result.name} width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-300 " >
        </Image>
       <div className="">
          <h2 className="text-lg font-bold truncate">{result.title ||result.name}</h2>
          <p className="line-clamp-2 text-md">{result.overview}</p> 
          <p className="flex items-center">{result.release_date || result.first_air_date}
          <FaRegThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          <FaStar className="h-5 mr-1 ml-3" />{result.vote_average.toFixed(2)}

          </p>

       </div>



      </Link>


    </div>
  )
}
