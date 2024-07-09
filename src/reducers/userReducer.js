const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define your action types and handlers
      default:
        return state;
    }
  };
  
  export default userReducer;
  