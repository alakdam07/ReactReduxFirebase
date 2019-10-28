const initstate = {
  projects: []
};

const projectReducer = (state = initstate, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "CREATE_PROJECT":
      //console.log("create project", action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
