import { Button } from "./ui/button"

const FilterPage = () => {
  return (
    <div className="md:w-72">
        <div  className="flex items-center justify-between">
            <h1 className="font-medium text-lg">Filter by cuisines</h1>
            <Button>Reset</Button>
        </div>
    </div>
  )
}

export default FilterPage