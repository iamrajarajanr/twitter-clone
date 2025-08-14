/*
Challenge:
1. Put all of the data in its own file called
   data.js, and export it back into index.js.
   Make any changes to index.html that are
   necessary to make this work.
2. console Log tweetsData.
*/

import {tweetsData} from "./data.js";

console.log(tweetsData)

const tweetInput = document.getElementById("tweet-input")
const tweetBtn = document.getElementById("tweet-btn")
const feed = document.getElementById("feed")
document.addEventListener("click", function(e){
    if(e.target.dataset.reply){
        console.log(e.target.dataset.reply)
    }else if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }else if (e.target.dataset.retweet){
        console.log(e.target.dataset.retweet)
    }


})

function handleLikeClick (tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId;
    })[0]

targetTweetObj.likes++;
if (islike === false){

}
render()
}




tweetBtn.addEventListener("click", function(){
    console.log(tweetInput.value)
    tweetInput.value =""
})

function getfeedHtml(){

    let feedHtml=""
    tweetsData.forEach(function(tweet){
        feedHtml +=`<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                   ${tweet.likes}
                </span>
                <span class="tweet-detail" >
                <i class="fa-solid fa-retweet" data-retweet="${tweet.uuid}"></i>
                    ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
</div>`

    })

return feedHtml
}

getfeedHtml()


function render (){
feed.innerHTML = getfeedHtml()

}

render()













