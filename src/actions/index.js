import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// }

// This code is bad => async await => not plain JS
// It doesn't return our action but return jsonPlaceholder.get('/posts')
// The action is return { type: 'FETCH_POSTS', payload: response } that's what we wanted

// Action creators must return plain JS objects with a type property - we are not!
// By the time our action gets to a reducer, we won't have fetched our data!

export const fetchPosts = () => async (dispatch, getState) => { // simply added return function(){}
    // dispatch: change data
    // getState: read or access to data we want
        const response = await jsonPlaceholder.get('/posts');

        // return {
        //     type: 'FETCH_POSTS',
        //     payload: response
        // }

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }

// if return action is "function",
// Function invoked with 'dispatch'
// We wait for our request to finish
// Request complete, dispatch action manually => call dispatch function manually in action
// New action (plain JS or func)



export const fetchUser = (id) => dispatch => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};




// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// // _function means private func
// // memoize helps not repeat the api calls
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });





// export const fetchUser = function(id) {

//     return _.memoize(async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch({ type: 'FETCH_USER', payload: response.data });
//     });
// };