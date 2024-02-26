
import {useFormik} from "formik"

export function FormValidation()
{
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        }
    })

    return(
        <div>
            <h2>Registration Form</h2>
            <form>
              
                Username: <input value={formik.initialValues.username} onChange={formik.handleChange} 
                type="text" name="username"/><br/><br/>
              
                Email: <input value={formik.initialValues.email} onChange={formik.handleChange} 
                type="text" name="email"/><br/><br/>
              
                Password: <input value={formik.initialValues.password} onChange={formik.handleChange} 
                type="password" name="password"/><br/><br/>
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

// form validation in React --> 2 modules(formik, yup)

// npm install formik