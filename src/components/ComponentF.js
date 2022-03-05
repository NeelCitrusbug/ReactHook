import React from "react";
import {userContext,channelContext} from '../App'

export default function componentF(){
    return(
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return(
                        <channelContext.Consumer>
                            {
                                channel => {
                                    return(
                                        <div>My name is {user} and channel is {channel}</div>
                                    )
                                }
                            }
                        </channelContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}