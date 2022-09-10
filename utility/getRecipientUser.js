const getRecipientUser = (users, userLoggedIn)=>
    users?.filter(userToFilter => userToFilter !== userLoggedIn)[0]

export default getRecipientUser