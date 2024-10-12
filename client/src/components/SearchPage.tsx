import { useParams } from 'react-router'
import { Button } from './ui/button'
import { Input } from './ui/input'
import FilterPage from './FilterPage'
import { useState } from 'react'

const SearchPage = () => {
  const params = useParams();
  const [searchQuery , setSearchQuery] = useState<string>("");
//   alert(params.text)

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Search by restaurant & cuisines" />
            <Button className="bg-Orange hover:bg-hoverOrange">Search</Button>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
            <h1 className="font-medium text-lg">Search result found</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
