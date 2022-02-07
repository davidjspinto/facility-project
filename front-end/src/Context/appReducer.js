const appReducer = (state, action) => {
  if (action.type === "OPEN_REGISTER_LOGIN_WINDOW") {
    return {
      ...state,
      isRegisterLoginModalOpen: true,
    };
  }
  if (action.type === "OPEN_REGISTER_TAB") {
    return {
      ...state,
      isRegisterTabOpen: true,
    };
  }
  if (action.type === "OPEN_LOGIN_TAB") {
    return {
      ...state,
      isRegisterTabOpen: false,
    };
  }
  if (action.type === "OPEN_COMPANY_FORM") {
    return {
      ...state,
      isCompanyFormOpen: true,
    };
  }
  if (action.type === "START_LEGIONELLA_EVALUATION") {
    return {
      ...state,
      isLegionellaEvaluationOpen: true,
    };
  }
  /*
  if (action.type === "SUBMIT_LOGIN") {
    return {
      ...state,
      isRegisterTabOpen: false,
    };
  }*/
}

export default appReducer;