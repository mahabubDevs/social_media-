import React from 'react'

const DateofBirth = ({formik,years,month,getDates,errors}) => {
  return (
    <>
        <div className="flex gap-x-1 lg:gap-x-7 ">
                    <select 
                    className={
                        errors.bYear ? "border border-line_color w-[33%] font-gilroy p-2"
                        : "border border-line_color w-[33%] font-gilroy p-2"
                    }
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value={formik.values.bYear}
                    onBlur={formik.handleBlur}
                    name="bYear"
                    >
                        <option> Year</option>
                        {
                        years.map((year, index)=>{
                                <option key={index}>{year} </option>
                        })

                        }
                        
                        
                    </select>
                    {
                    errors.bYear && touched.bYear && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.bYear}</p>
                }
                    <select 
                    className={
                        errors.bMonth ? "border border-line_color w-[33%] font-gilroy p-2"
                        : "border border-line_color w-[33%] font-gilroy p-2"
                    }
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value={formik.values.bMonth}
                    onBlur={formik.handleBlur}
                    name="bMonth"
                    >
                        <option> Month</option>
                      
                        {
                        month.map((month, index)=>{
                                <option key={index}>{month} </option>
                        })

                        }
                        
                    </select>
                    {
                    errors.bMonth && touched.bMonth && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.bMonth}</p>
                }
                    <select 
                   className={
                    errors.bDay ? "border border-line_color w-[33%] font-gilroy p-2"
                    : "border border-line_color w-[33%] font-gilroy p-2"
                }
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value={formik.values.password}
                    onBlur={formik.bDay}
                    name="bDay"
                    >
                        <option>Day</option>
                        
                        {
                        getDates.map((date, index)=>{
                                <option key={index}>{date} </option>
                        })

                        }
                        
                    </select>
                    {
                    errors.bDay && touched.bDay && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.bDay}</p>
                }
                </div>
    </>
  )
}

export default DateofBirth
