
// We need a function that will turn our JS Objects into an Object
// that Firestore can work with
export function firebaseSerialize<T>(object: T) {
    return JSON.parse(JSON.stringify(object));
}
  
export function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1))
    } else{
        return new Date(randomValueBetween(date1, date2))

    }
}