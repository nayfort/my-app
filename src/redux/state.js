let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: 'It is my first post.', likesCount: 21},
        ],
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Max'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Jan'},
        ],
    },

}

export default state;