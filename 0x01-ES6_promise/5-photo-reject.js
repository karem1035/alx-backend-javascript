export default function uploadPhoto(filename) {
  return new Promise((r, e) => {
    e(new Error(`${filename} cannot be processed`));
  });
}
