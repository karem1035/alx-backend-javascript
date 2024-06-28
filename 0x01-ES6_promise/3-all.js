import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((resolveArray) => {
      console.log(
        `${resolveArray[0].body} ${resolveArray[1].firstName} ${resolveArray[1].lastName}`
      );
    })
    .catch(() => console.log('Signup system offline'));
}
