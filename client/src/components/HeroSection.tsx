import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import pizza from '../assets/pizza.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>('')
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto md:p-10 rounded-lg items-center justify-center m-2 gap-20">
      <div className="flex flex-col gap-10 md:w-[50%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food any time anywhere
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea
            molestiae tempora amet, mollitia vero!
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            placeholder="Search restaurant by name , city & country"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button className="bg-Orange hover:bg-hoverOrange" onClick={() => navigate(`/search/${searchText}`)}>Search</Button>
        </div>
      </div>
      <div className="" >
        <img src={pizza} alt="" className="object-cover w-full max-h-[500px]" />
      </div>
    </div>
  )
}

export default HeroSection
