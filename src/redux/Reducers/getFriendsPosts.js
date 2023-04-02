export const getFriendsPosts = (state) => {
    const friendsPosts = state.friendsPage.friends.map((friend) => {
        return {
            id:Math.random(),
            name:friend.name,
            imageUrl:friend.imageUrl,
            posts:[...friend.posts]
        }
    })
    return friendsPosts
}