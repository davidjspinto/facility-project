import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState,
  } from "react";
  import {useNavigate} from "react-router-dom"
  import appReducer from "./appReducer";
  import Axios from "axios";
  
  const FacilityContext = createContext();
  
  const facilityPageState = {
    isLegionellaEvaluationOpen: false,
    isRegisterLoginModalOpen: false,
    isRegisterTabOpen: false,
    isCompanyFormOpen: false
  }
  
  const FacilityProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(appReducer, facilityPageState);
    const [companyID, setCompanyID] = useState([])
    const [loginInput, setLoginInput] = useState([])
    const [registerInput, setRegisterInput] = useState([])
    const [companyInputs, setCompanyInputs] = useState([])
  
    const startRegisterLogin = () => dispatch({ type: "OPEN_REGISTER_LOGIN_WINDOW" })

    const openRegisterTab = () => dispatch({ type: "OPEN_REGISTER_TAB"});

    const openLoginTab = () => dispatch({ type: "OPEN_LOGIN_TAB"});

    const addCompanyInfo = () => dispatch({ type: "OPEN_COMPANY_FORM"});

    const startLegionellaAssessment = () => dispatch({ type: "START_LEGIONELLA_EVALUATION"});

    const handleRegisterInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setRegisterInput((values) => ({ ...values, [name]: value }));
    }

    const handleLoginInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setLoginInput((values) => ({ ...values, [name]: value }));
    }
 
    let user = document.cookie;
    let navigate = useNavigate(); 
    let path = `dashboard`; 
    Axios.defaults.withCredentials=true;
    
    useEffect(() => {
      const getCompanyID = async () => {
        const result = await Axios(
         "http://localhost:4000/reports"
        );
        setCompanyID(result.data);
      };
      getCompanyID();
    }, []);
    console.log(companyID)

    const submitRegisterForm = (event) => {
      event.preventDefault();
      Axios.post("http://localhost:4000/auth/register", {
        username: registerInput.username,
        email: registerInput.email,
        password: registerInput.password,
      })
        .then((response) => {
          console.log(response)
          setRegisterInput([]) 
          navigate(path);
        })
        .catch((err) => console.log(err));
    }
    
    const submitLoginForm = async (event) => {
      event.preventDefault();
      await Axios.post("http://localhost:4000/auth/login", {
        email: loginInput.email,
        password: loginInput.password,
      })
        .then((response) => {
          console.log(response)
          navigate(path);
        })
        .catch((err) => console.log(err));
    }
    

    const [facilityList, setFacilityList] = useState([])

    const [facilityInputs, setFacilityInputs] = useState([])

    const [isNewFacilityDataOpen, setIsNewFacilityDataOpen] = useState(false)

    const handleButtonAddFacility = (event) => {
        setIsNewFacilityDataOpen(true)
    }

    const handleFacilityInputChange = (event) => {
        setFacilityInputs({ ...facilityInputs, [event.target.name]: event.target.value });
    }

    const handleCompanyInputsChange = (event) => {
      setCompanyInputs({ ...companyInputs, [event.target.name]: event.target.value });
    }


    const handleAddFacilityFormSubmit = (event) => {
        event.preventDefault()
        setFacilityList([...facilityList, facilityInputs])
        setIsNewFacilityDataOpen(false)
        Axios.post("http://localhost:4000/reports/facility", {
          name: facilityInputs.facilityName,
          address: facilityInputs.facilityLocation,
          company_id: companyID[0].id
        })
          .then((response) => {
            console.log(response) 
          })
          .catch((err) => console.log(err));
    }

    const submitCompanyInformation = (event) => {
      event.preventDefault()
        Axios.post("http://localhost:4000/reports", {
          name: companyInputs.companyName,
          address:companyInputs.companyAddress,
          nif: companyInputs.companyNIF
        })
          .then((response) => {
            console.log(response) 
          })
          .catch((err) => console.log(err));
    }
    

   return (
    <FacilityContext.Provider
      value={{
        ...state,
        addCompanyInfo,
        startLegionellaAssessment,
        submitCompanyInformation,
        startRegisterLogin,
        
        openRegisterTab,
        openLoginTab,
        submitRegisterForm,
        submitLoginForm,
        handleLoginInput,
        handleRegisterInput,
        handleCompanyInputsChange,
        loginInput,
        user,
        registerInput,
        facilityList,
        facilityInputs,
        isNewFacilityDataOpen,
       
        handleButtonAddFacility, 
        handleAddFacilityFormSubmit, 
        handleFacilityInputChange,
      }}
    >
      {children}
    </FacilityContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FacilityContext);
};

export { FacilityProvider };
