export default (state = [], action) => {
    // return document.querySelector('input'); // bad
    // return axios.get('/posts'); // bad

    // return state + action; // good



    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload;
    // }

    // return state;


    switch (action.type) {
        case 'FETCH_POSTS': 
            return action.payload;
        default:
            return state;
    }
};

// never update/mutate/change/remove state arg
// DON'T need to worry about mutation rule if return value is Number or String
// Worry about if return value is Array or Object
