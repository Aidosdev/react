const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const NEW_MESSAGE_TEXT_BODY = 'NEW-MESSAGE-TEXT-BODY';

let initialState = {
    messagePage: [
        {
            id: 1,
            message: "Hello"
        },
        {
            id: 2,
            message: "Have a nice day!"
        },
        {
            id: 3,
            message: "Good weekend!"
        },
        {
            id: 4,
            message: "Hi)"
        },
        {
            id: 5,
            message: "Hello my friend!"
        },
        {
            id: 6,
            message: "Hi, how are you?"
        }
    ],
    newMessageText: "",
    dialogPage: [
        {
            id: 1,
            name: "John",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0yXxgpT5yREVlHBznYMVmwIDKOPaOiVCFaw&usqp=CAU"
        },
        {
            id: 2,
            name: "Steve",
            img: "https://ostagram1.ams3.digitaloceanspaces.com/uploads/style/image/470408/thumb_img_46986cd7b7.jpg"

        },
        {
            id: 3,
            name: "Johnny",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0yXxgpT5yREVlHBznYMVmwIDKOPaOiVCFaw&usqp=CAU"
        },
        {
            id: 4,
            name: "Sarah",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6U8sG_FyPiatEywQIQ35Ur-RW6O2wNxumrA&usqp=CAU"
        },
        {
            id: 5,
            name: "Helena",
            img: "https://ostagram1.ams3.digitaloceanspaces.com/uploads/style/image/470408/thumb_img_46986cd7b7.jpg"
        },
        {
            id: 6,
            name: "Margo",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6U8sG_FyPiatEywQIQ35Ur-RW6O2wNxumrA&usqp=CAU"
        }
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            state.messagePage.push({ message: state.newMessageText });
            state.newMessageText = "";
            return state;
        case NEW_MESSAGE_TEXT_BODY:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
}

export const addNewMessageCreator = () => {
    return {
        type: ADD_NEW_MESSAGE_TEXT
    }
}

export const updateNewMessageCreator = (body) => {
    return {
        type: NEW_MESSAGE_TEXT_BODY,
        body: body
    }
}

export default dialogReducer;




