import Results from "@/components/Results";

const API_KEY=process.env.API_KEY
export default async function Home({searchParams}) {
    const genre=searchParams.genre || 'now_playing'
    console.log(genre);
           const res= await fetch(`https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`)
          const data = await res.json();
          console.log(data);
        if(!res.ok) 
        {
          throw new Error('Failed to fetch data')
        }
       const results=data.results
  return (
       
    <div>
     <Results results={results} />
    </div>
       
  )
}