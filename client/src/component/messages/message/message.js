import React from 'react'

import './message.css';

import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimeNamed = name.trim().toLowerCase();

    if (user === trimeNamed) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimeNamed}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text) }</p>
                    </div>
                </div>
            ) : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{text}</p>
                    </div>
                    <p className="sentText pl-10">{ReactEmoji.emojify(text) }</p>
                </div>
            )
    )
}

export default Message
