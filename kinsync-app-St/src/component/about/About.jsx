import { useState } from "react";

const About = () =>{

    const [formData, setFormData] = useState({
    name:"",
    email:"",
    feedback:"",
    });

    const handleFormData= (e) => {
    const{ name, value} = e.target;

    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));

    }

    return(
        <div className="about">
            <p>Welcome to Kinsync.</p>
            <p>This app was created to make family planning easier, safer, and more reliable. </p>
            <div>
                <h1>User Feedback Form</h1>
                <form>
                    <label>
                        Name:
                        <input
                        type="text" 
                        name="name"
                        value= {formData.name} 
                        placeholder="Enter Your Name"
                        onChange= {handleFormData} />
                    </label><br />
                    <label>
                        Email:
                        <input 
                        type="text" 
                        name="email"
                        value= {formData.email}
                        placeholder="Enter Your Email"
                        onChange= {handleFormData} />
                    </label><br />
                    <label>
                        Feedback:
                        <textarea name="feedback"
                        value= {formData.feedback}
                        placeholder="Please provide your feedback(max 200 Characters"
                        onChange= {handleFormData} rows="5" cols="33" 
                            maxLength={200}
                        />
                        <p className = "counter"> {formData.feedback.length}/200 Characters</p>
                    </label>
                    <button type="submit">Submit</button>
                </form>
    
            </div>
        </div>
    );
};

export default About;