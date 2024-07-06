import React from 'react'

const DateofBirth = ({formik,years,month,getDates,ageError}) => {
  return (
    <>
       <div className="flex gap-x-1 lg:gap-x-7 ">
                    <select 
                    
                    
                    onChange={formik.handleChange}
                    autoComplete="off"
                    onBlur={formik.handleBlur}
                    value={formik.values.bYear}
                    name="bYear"
                    className=
                        // errors.bYear ? "border border-line_color w-[33%] font-gilroy p-2":
                         "border border-line_color w-[33%] font-gilroy p-2"
                    >
                        <option> Year</option>
                        {
                        years.map((year, index)=>(
                          
                           <option key={index}> {year} </option>
                                    
                           
                        ))

                        }
                    
                        
                    </select>

                    {/* {
                    errors.bYear && touched.bYear && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.bYear}</p>
                } */}
                    <select 
                    className={
                        // errors.bMonth ? "border border-line_color w-[33%] font-gilroy p-2":
                        "border border-line_color w-[33%] font-gilroy p-2"
                    }
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value={formik.values.bMonth}
                    onBlur={formik.handleBlur}
                    name="bMonth"
                    >
                        <option> Month</option>
                      
                        {
                        month.map((month, index)=>(
                                <option key={index}>{month} </option>
                            ))

                        }
                        
                    </select>
                    {/* {
                    errors.bMonth && touched.bMonth && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.bMonth}</p>
                } */}
                     <select 
                    
                    
                    onChange={formik.handleChange}
                    autoComplete="off"
                    onBlur={formik.handleBlur}
                    value={formik.values.bDay}
                    name="bDay"
                    className=
                        // errors.bYear ? "border border-line_color w-[33%] font-gilroy p-2":
                         "border border-line_color w-[33%] font-gilroy p-2"
                    >
                        <option> Day</option>
                        {
                        getDates.map((date, index)=>(
                          
                           <option key={index}> {date} </option>
                                    
                           
                        ))

                        }
                    
                        
                    </select>
                    {/* {
                    errors.bDay && touched.bDay && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.bDay}</p>
                } */}
                
                </div>
                {
                    ageError && (
                        <p className="text-red text-sm my-2">{ageError}</p>
                    )
                }
    </>
  )
}

export default DateofBirth
