export const createproject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    const creatorId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        FirstName: profile.firstName,
        LastName: profile.lastName,
        Id: creatorId,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_Error", err });
      });
  };
};
