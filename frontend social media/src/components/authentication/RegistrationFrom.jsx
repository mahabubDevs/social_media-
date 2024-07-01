

const RegistrationFrom = () => {
  return (
    <div>
      <div className='w-full rounded-md shadow-md px-11 py-7 box-border'>
        <div>
            <form >
                <input className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='Frist Name'/>
                <input className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='Last Name'/>
                <input className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='Email Address'/>
                <input className='w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none' placeholder='Password'/>
                <div className="flex gap-x-7 ">
                    <select className="border border-line_color w-[33%] font-gilroy p-2">
                        <option>Birthday Year</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                    </select>
                    <select className="border border-line_color w-[33%] font-gilroy p-2">
                        <option>Birthday Month</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                    <select className="border border-line_color w-[33%] font-gilroy p-2">
                        <option>Birthday Day</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <div className="mt-5">
                    <input id="Male" type="radio" name="Gender" />
                    <label  className="font-gilroy ml-2 mr-5">
                        Male
                    </label>
                    <input id="Male" type="radio" name="Gender" />
                    <label  className="font-gilroy ml-2">
                        Female
                    </label>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button type="submit" className="px-6 py-2 bg-secondary_bg rounded-full text-white font-gilroy">Submit</button>
                    <p className="font-gilroy text-base">Already have an account? 
                         {/* <link to='/' className="text-primary_color underline"> Sign In</link>  */} 
                         <span className="text-primary_color underline">Sign IN</span>
                    </p>
                </div>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationFrom
