
// We need a function that will turn our JS Objects into an Object
// that Firestore can work with
export function firebaseSerialize<T>(object: T) {
    return JSON.parse(JSON.stringify(object));
}
  