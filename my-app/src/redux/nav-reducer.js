let initialState = {
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
};

const navReducer = (state = initialState, action) => {
    return state;
}

export default navReducer;