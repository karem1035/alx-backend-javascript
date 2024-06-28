import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((resolveArray) => {
      let text = `${resolveArray[0].body} ${resolveArray[1].firstName} ${resolveArray[1].lastName}`;

      console.log(text);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
