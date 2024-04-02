import { SearchBar } from "./SearchBar"

export const Appbar=() =>{
    return <div>
        <div className="flex justify-between pt-1 p-3">
            <div className="inline-flex items-center text-md pb-2">
                Youtube
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                Sign In
            </div>
        </div>
    </div>
}