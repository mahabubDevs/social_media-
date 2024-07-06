import React from 'react'

const Gender = ({formik,errors,touched}) => {
  return (
    <>
        <div className="mt-5">
                    <input 
                    id="Male" 
                    type="radio" 
                    name="gender" 
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value="male"
                    onBlur={formik.handleBlur}
                    
                    />
                    <label htmlFor="Male" className="font-gilroy ml-2 mr-5">
                        Male
                    </label>
                    <input 
                    id="Female" 
                    type="radio" 
                    name="gender" 
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value="female"
                    onBlur={formik.handleBlur}
                    
                    />
                    <label htmlFor="Female" className="font-gilroy ml-2">
                        Female
                    </label>
                    {
                    errors.gender && touched.gender && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.gender}</p>
                }
                </div>
    </>
  )
}

export default Gender
