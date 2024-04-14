import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-200 p-4 lg:text-lg justify-center gap-6 '>
        <NavBarItem title="Trending" param="now_playing" />
        <NavBarItem title="Popular" param="popular" />
        <NavBarItem title="Top Rated" param="top_rated" />
        <NavBarItem title="Upcoming" param="upcoming" />
   
    </div>
  )
}
