import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((result) => {
    const [photoresult, userresult] = result;
    console.log(`${photoresult.body} ${userresult.firstName} ${userresult.lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
