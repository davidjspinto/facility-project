import React from "react";
import { useGlobalContext } from "../../Context/appContext";

const ProfileForm = () => {

    const {handleCompanyInputsChange, isCompanyFormOpen, submitCompanyInformation} = useGlobalContext()

    return(
        <div>
            {isCompanyFormOpen ? (
                <form onSubmit={submitCompanyInformation}>
                    <label for ="Company">Company</label>
                        <input type="text" name="companyName" onChange={handleCompanyInputsChange}/>
                    <label for ="Address">Address</label>
                        <input type="text" name="companyAddress" onChange={handleCompanyInputsChange}/>
                    <label for ="Company">nif</label>
                        <input type="text" name="companyNIF" onChange={handleCompanyInputsChange}/>
                    <button type="submit">Submit</button>
                </form>
            ) : 
                null
            }
        </div>
    )
}

export default ProfileForm;