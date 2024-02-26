
import {useFormik} from "formik"

const data = [10, 20, 30]

data.map(function(i)
{

})

export function FormValidation()
{
    // initialValues --> alternateName --> values

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        // Any parameter given to omSubmit(), that parmeter will hold the value
        // present with initialValues key
        onSubmit: function(info)
        {
            // {username: 'Raju', email: 'raju5252@gmail.com', password: 'Welcome'}
            console.log(info)
        },
        validate: function(data)
        {
            // data = {username: 'Raju', email: 'raju5252@gmail.com', password: 'Welcome'}
            
            // if(data.username) // cond will be true if some username is present

            // data = {username: '', email: 'raju5252@gmail.com', password: 'Welcome'}

            let errors = { }

            if(!data.username)// cond will be true if username is not present
            {
                errors.error1 = "Username is required!!!"
            }
            if(!data.email)// cond will be true if email is not entered
            {
              errors.error2 = "Email is required!!!"
            }   
            if(!data.password)// cond will be true if password is not entered
            {
                errors.error3 = "Password is required"
            }
            if(data.password.length < 6 || data.password.length > 30 )
            {
                errors.error4 = "Password should be minimum 6 and maximum 30"   
            }
            return errors
        }
    })

    return(
        <div>
            <h2>Registration Form</h2>
            <form>
              
                Username: <input value={formik.values.username} onChange={formik.handleChange} 
                type="text" name="username"/><br/><br/>
                {formik.errors.error1 ? <div style={ {color: "red"} }>{formik.errors.error1}</div> : null  }



                Email: <input value={formik.values.email} onChange={formik.handleChange} 
                type="text" name="email"/><br/><br/>
                {formik.errors.error2 ? <div style={ {color: "green"} }>{formik.errors.error2}</div> : null}
              


                Password: <input value={formik.values.password} onChange={formik.handleChange} 
                type="password" name="password"/><br/><br/>
                {formik.errors.error3 ? <div style={ {color: "orange"} }>{formik.errors.error3}</div> : null}
                {formik.errors.error4 ? <div style={ {color: "orangered"} }>{formik.errors.error4}</div> : null}

                <button type="submit" onClick={formik.handleSubmit}>Register</button>
            </form>
        </div>
    )
}

// form validation in React --> 2 modules(formik, yup)

// npm install formik