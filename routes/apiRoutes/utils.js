// const { model } = require('mongoose');
// const User = model('users');
// const { userProfileFields } = require('../../utils');

// const copyAndSaveUser = async (user, password) => {
//   const oldUserObject = user.toObject();
//   const { username, email } = oldUserObject;
//   await User.findByIdAndDelete(user.id);

//   const newUser = await User.register(
//     new User({
//       username,
//       email,
//     }),
//     password
//   );

//   Object.entries(oldUserObject).forEach(([key, value]) => {
//     if (userProfileFields.includes(key)) {
//       newUser[key] = value;
//     }
//   });

//   return await newUser.save();
// };

// module.exports = { copyAndSaveUser };
