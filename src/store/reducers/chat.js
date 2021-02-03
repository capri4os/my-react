import update from 'react-addons-update';
// import { SEND_MESSAGE } from '../actions/message';
import { ADD_CHAT } from '../actions/chat';

const initialStore = {
    // chats: {
    //     1: {title: 'Chat 1', messageList: [1]},
    //     2: {title: 'Chat 2', messageList: [2]},
    //     3: {title: 'Chat 3', messageList: []},
    // },
    chats: {
        1: {title: 'Chat 1'},
        2: {title: 'Chat 2'},
        3: {title: 'Chat 3'},
    },
};

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        // case SEND_MESSAGE: {
        //     return update (store, {
        //         chats: { $merge: { [action.chatId]: {
        //             title: store.chats[action.chatId].title,
        //                 messageList: [...store.chats[action.chatId].messageList, action.messageId]
        //         }}},
        //     });
        // }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                    }}},
            });
        }
        default:
            return store;
    }
}