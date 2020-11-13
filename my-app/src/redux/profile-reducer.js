const ADD_POST = 'ADD-POST';
const ADD_TEXT = 'ADD-TEXT';

let initialState = {
    post: [
        {
            id: 1,
            message: "Hi, how are you?",
            like: 85
        },
        {
            id: 2,
            message: "Hello! It's my first post!",
            like: 45
        },
        {
            id: 3,
            message: "Hello World!",
            like: 15
        },
        {
            id: 4,
            message: "Hey guys! Have a nice weekend!",
            like: 102
        },
        {
            id: 5,
            message: "Good day, my friends!",
            like: 37
        },
        {
            id: 6,
            message: "Hello!",
            like: 15
        }
    ],
    newPostText: "write new post"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                like: 0
            }
            switch (state.newPostText) {
                case "":
                    return state;
                default:
                    state.post.push(newPost);
            }
            state.newPostText = "";
            return state;
        case ADD_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return ({
        type: ADD_POST
    })
}

export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: ADD_TEXT,
        text: text
    })
}


export default profileReducer;