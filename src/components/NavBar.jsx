import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-200 p-4 lg:text-lg justify-center gap-6 '>
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Popular" param="fetchPopular" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
        <NavBarItem title="Upcoming" param="fetchUpcoming" />
   
    </div>
  )
}
