const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
const Post = require('./models/Post');
const User = require('./models/User');

const user = new User({
  fullName: 'First Middle Last',
  isPrivate: true,
  isVerified: false,
  userName: 'userid/username1',
  email: 'mail1@gmail.com',
  phoneNumber: '7275648242',
  password: 'passasdsfsdfsaddf',
  profilePic:
    'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png',
  posts: [],
  followers: [],
  following: [],
});

const post = new Post({
  caption: 'caption',
  description: 'description',
  imageUrl:
    'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png',
  likes: [],
  dislikes: [],
  comments: [],
  author: '63dce20bd68e4b654b7dd6c7',
});

mongoose.connect(process.env.DB_URL, (error) => {
  if (!error) {
    console.log('connected to mongoDB!');

    user.save().then(result=>{
        console.log(result)
    }).catch(error => console.log(error))

    // post
    //   .save()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => console.log(error));
  } else {
    console.log('connection to mongoDB failed \n' + error);
  }
});
