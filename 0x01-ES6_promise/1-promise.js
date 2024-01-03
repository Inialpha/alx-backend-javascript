export default function getFullResponseFromAP(Isuccess) {
  const promise = new Promise((resolve, reject) => {
    if (Isuccess) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return (promise);
}
