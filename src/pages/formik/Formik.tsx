import React from 'react'
import { Formik,Field,ErrorMessage } from 'formik';

const Form=()=>{
    const validate=(values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 15) {
            errors.password = 'Must be 15 characters or less';
        }
        return errors;
    }
    return(
    <div>
        <h1>FORMIK</h1>
        <Formik initialValues={{email:'',password:'',gender:'',class:'',comment:'',location:''}} validate={validate}
        
        onSubmit={(values)=>{
            console.log(Formik.IsSubmitting)
            alert(JSON.stringify(values,null,2))
        }}>
            {
            formik=>(
                    <form onSubmit={formik.handleSubmit}>
                        {/* <input autoComplete='off' type="email" id='email' {...formik.getFieldProps("email")}/>
                        {formik.errors.email && formik.touched.email && formik.errors.email}
                        <input autoComplete='off' type="password" id="password" {...formik.getFieldProps("password")} />
                        {formik.errors.password && formik.touched.password && formik.errors.password} */}
                        
                        <label htmlFor="email">Enter Email</label>
                        <Field name="email" type='email'/>
                        <ErrorMessage name='email'/>

                        <label htmlFor="password">Enter Password</label>
                        <Field name="password" type='password'/>
                        <ErrorMessage name='password'/>

                        
                        
                        <div>
                        <span><b>Gender</b></span>
                        <label><Field type="radio" name="gender" value="male"/>Male</label>
                        <label><Field type="radio" name="gender" value="female"/>Female</label>
                        </div>

                        <div>
                            <span>select location:</span>
                            <label><Field type='checkbox' name='location' value='vizag'/>Vizag</label>
                            <label><Field type='checkbox' name='location' value='hyderabad'/>Hyderabad</label>
                            <label><Field type='checkbox' name='location' value='chennai'/>Chennai</label>
                            <label><Field type='checkbox' name='location' value='banglore'/>Banglore</label>
                            <label><Field type='checkbox' name='location' value='abroad'/>Abroad</label>
                        </div>
                        

                        <Field name='class' as='select'>
                            <option value='red'>Red</option> 
                            <option value='green'>Green</option>
                            <option value='blue'>Blue</option>
                        </Field>

                        <Field name='comment' as='textarea'/> 

                        <button type="submit">Submit</button>
                    </form>
                )
            }

        </Formik>
    </div>
    )
}

export default Form;
