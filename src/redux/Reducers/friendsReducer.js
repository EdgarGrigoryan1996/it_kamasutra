const initialState = {
    friends:[
        {
            id:1,
            name:"Edita",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qadN_4yVy8P4I5y2zBeKLJx0JmH2ZiaTP3Wt6HF1MnD-dqFXQ0ilx7ptPOGFAKQWz0M&usqp=CAU",
            gender:"female",
            age:19,
            posts:[
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:",
                },
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:2"
                }
            ]
        },
        {
            id:2,
            name:"Anna",
            imageUrl:"https://scontent.fevn6-1.fna.fbcdn.net/v/t39.30808-6/274339660_2111666822331038_5771271971251265046_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=szNCtc3vhQkAX_WMNxd&_nc_ht=scontent.fevn6-1.fna&oh=00_AT9Gcaik6sZS0a-aEHvIHlaRp5YrlBtnd8UccfIu10mglA&oe=635AF792",
            gender:"female",
            age:23,
            posts:[
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:",
                },
                {
                    id:Math.random(),
                    text:"Сегодня самый лучший день из всех... от ЦАРЯ! С днем рождения, Эт.. крепкого здоровья... Спасибо за столько радости, что ты подарил нам всем!! Да здравствует король 👑 🤙🏾"
                }
            ]
        },
        {
            id:3,
            name:"Vzgo",
            imageUrl:"https://scontent.fevn6-2.fna.fbcdn.net/v/t39.30808-6/307934237_5274623129317256_7222187463471192515_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FC_62Gx2A8MAX-mbdA0&_nc_ht=scontent.fevn6-2.fna&oh=00_AT82Jcn6miQKhjLfMcmqfUDFgVUsX9erTGCQvVXD3IdLwQ&oe=635B1E47",
            gender:"male",
            age:26,
            posts:[
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:",
                },
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:2"
                }
            ]
        },
        {
            id:4,
            name:"Damir",
            imageUrl:"https://scontent.fevn6-2.fna.fbcdn.net/v/t1.6435-9/37488387_2177962525782128_7229355150958133248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1f1cHISUgJoAX8tKkd4&_nc_ht=scontent.fevn6-2.fna&oh=00_AT-D1WJzRZZmmc7EZoTDRtmSjFwebHK0AlPHnUyRhXp4Xg&oe=637C19A3",
            gender:"male",
            age:26,
            posts:[
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:",
                },
                {
                    id:Math.random(),
                    text:"Сегодня самый лучший день из всех... от ЦАРЯ! С днем рождения, Эт.. крепкого здоровья... Спасибо за столько радости, что ты подарил нам всем!! Да здравствует король 👑 🤙🏾"
                }
            ]
        },
        {
            id:5,
            name:"Miqo",
            imageUrl:"https://scontent.fevn6-4.fna.fbcdn.net/v/t39.30808-6/311767462_5406272129489284_3250299304277496414_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Vt2MKJ-YC5wAX9KCkJV&_nc_ht=scontent.fevn6-4.fna&oh=00_AT9o4aS_mUzk8W7d6RqPtPwQNUT7fbo9jCv2JknZ5wzL8w&oe=6359D438",
            gender:"male",
            age:25,
            posts:[
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:",
                },
                {
                    id:Math.random(),
                    text:"Сегодня самый лучший день из всех... от ЦАРЯ! С днем рождения, Эт.. крепкого здоровья... Спасибо за столько радости, что ты подарил нам всем!! Да здравствует король 👑 🤙🏾"
                }
            ]
        },
        {
            id:6,
            name:"Qis",
            imageUrl:"https://scontent.fevn6-3.fna.fbcdn.net/v/t39.30808-6/311839657_2575734049236272_525031390714340664_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hETwKI_a8-gAX_yhmAu&_nc_ht=scontent.fevn6-3.fna&oh=00_AT8SUF550_z4QP-DVuBtMz3FacwaEX4I2B8B0JceGnaWTQ&oe=6359954D",
            gender:"female",
            age:25,
            posts:[
                {
                    id:Math.random(),
                    text:"Ներկայացնում ենք Fastex Web 3.0-ի վրա հիմնված էկոհամակարգը: Միացե՛ք մեզ համայնքների և բիզնեսի համար անսպասելի հնարավորությունների բացահայտման ճանապարհին:",
                },
                {
                    id:Math.random(),
                    text:"Сегодня самый лучший день из всех... от ЦАРЯ! С днем рождения, Эт.. крепкого здоровья... Спасибо за столько радости, что ты подарил нам всем!! Да здравствует король 👑 🤙🏾"
                }
            ]
        }
    ]
}
const friendsReducer = (state = initialState,action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default friendsReducer