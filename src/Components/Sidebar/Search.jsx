import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchLogo } from '../../assets/Constants'
import useSearchUser from '../../hooks/useSearchUser'
import SearchModal from '../Modal/SearchModal'
import { toast } from 'react-toastify'
import SuggestedUser from '../SuggestedUsers/SuggestedUser'

const Search = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [inputValue, setInputValue] = useState('');
  const {loading,user,getUserProfile,setUser}= useSearchUser();
  const navigate=useNavigate();

  const handleSearch = (e) => {
    
    // setInputValue('');
    
    // console.log(user);
    if(!loading && user){
      setIsOpen(false);
      toast.success("User found");
    }
    else setUser(null)

    setInputValue('')
    
    
  };
  return (
    <>
     <button onClick={()=>setIsOpen(true)} className='w-full hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <SearchLogo/>
                <span>Search</span>
        </button>  

        <SearchModal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
          <div className="p-6 flex flex-col">
              <div className="mb-4">
                <label className="block text-white mb-2">Search</label>
                <input
                  onChange={(e)=>setInputValue(e.target.value)}
                  value={inputValue}
                  type="text"
                  placeholder="Enter Username"
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-between ">
                
                <button
                  onClick={()=>getUserProfile(inputValue)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>
               <div  onClick={handleSearch} className='w-full hover:bg-slate-900 p-2 rounded-md shadow-lg '>
              {
                user && <SuggestedUser user={user} setUser={setUser}/>
              }
              </div>
              
           
          </div>
          
        </SearchModal>
        
    </>
  )
}

export default Search
