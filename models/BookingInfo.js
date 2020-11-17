let bookingInfo =  [

]

class BookingInfo {
    createNew(bookingData, callback) {
        let err = false
        if (bookingData == {}) {
            callback(false, bookingInfo)
            return
        } else {
            bookingData["id"] = bookingInfo.length + 1
            bookingInfo.push(bookingData)
            callback(err, bookingInfo)
        } 
    }
    
    getAll(callback){
        let err = false
        callback(err, bookingInfo)
    }

    getById(id, callback) {
        let err = false
        for(let i = 0; i < bookingInfo.length; i++){
            if(id==bookingInfo[i].id){
                callback(false, bookingInfo[i])
                return
            }
        }
        callback(err, null)
    }
}
module.exports =  BookingInfo;
