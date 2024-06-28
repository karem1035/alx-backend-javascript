export default function signUpUser(firstName, lastName) {
  return new Promise((r) => {
    r({
      firstName,
      lastName,
    });
  });
}
