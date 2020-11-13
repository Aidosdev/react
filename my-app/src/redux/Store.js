import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePosts: {
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
        },
        dialog: {
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
            ],
        },
        nav: {
            navLinks: [
                {
                    to: "/profile",
                    text: "Profile"
                },
                {
                    to: "/dialogs",
                    text: "Dialogs"
                },
                {
                    to: "/news",
                    text: "News"
                },
                {
                    to: "/music",
                    text: "Music"
                },
                {
                    to: "/settings",
                    text: "Settings"
                }
            ],
            friends: [
                {
                    name: "Johnny",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0yXxgpT5yREVlHBznYMVmwIDKOPaOiVCFaw&usqp=CAU"
                },
                {
                    name: "Sarah",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6U8sG_FyPiatEywQIQ35Ur-RW6O2wNxumrA&usqp=CAU"
                },
                {
                    name: "Helena",
                    img: "https://ostagram1.ams3.digitaloceanspaces.com/uploads/style/image/470408/thumb_img_46986cd7b7.jpg"
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
    },
    dispatch(action) {
        this._state.profilePosts = profileReducer(this._state.profilePosts, action);
        this._state.dialog = dialogReducer(this._state.dialog, action);
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
}






export default store;