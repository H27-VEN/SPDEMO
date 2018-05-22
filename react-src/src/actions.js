import axios from "axios";

const action = store => ({
    fetchProfileData: state => {
        console.log("In fetchProfileData");
        let newState;
        axios
            .get("http://localhost:8000/data/profiles")
            .then(response => {
                console.log("response: ", response);
                if (Array.isArray(response.data)) {
                    newState = {
                        ...state.profile,
                        data: response.data,
                        error: null
                    };

                    store.setState({
                        profile: newState
                    });
                }
            })
            .catch(error => {
                console.log("error: ", error);
                newState = { ...state.profile, data: [], error: error };
            });
    },

    fetchPostData: state => {
        console.log("In fetchPostData");
        let newState;
        return axios
            .get("http://localhost:8000/data/posts")
            .then(response => {
                console.log("response: ", response);
                if (Array.isArray(response.data)) {
                    newState = {
                        ...state.post,
                        data: response.data,
                        error: null
                    };

                    store.setState({ post: newState });
                }
            })
            .catch(error => {
                console.log("error: ", error);
                newState = { ...state.post, data: [], error: error };
                store.setState({ post: newState });
            });
    }
});

export default action;
