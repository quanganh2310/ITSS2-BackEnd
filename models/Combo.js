let fakePresent =  [
    {
        "id": 1,
        "startTime": '19:00',
        "endTime": '22:00',
        "places": [
            {
                "address": "Số 23 Nguyễn Đình Chiểu, Quận Hai Bà Trưng, Hà Nội",
                "cost": 200000,
                "description": "Nếu chưa biết nhà hàng nào có không gian đẹp ở Hà Nội thì quý khách hãy chọn Sứ Bia. Nhà hàng có kiến trúc độc đáo và thân thiện với thiên nhiên. Trong không gian ăn uống có thêm cây cỏ,hoa lá trông rất thơ mộng, hữu tình. Đến với Sứ Bia du khách sẽ có những trải nghiệm mới lạ và ấn tượng.",
                "id": 1,
                "image": "https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg",
                "name": "Nhà hàng Sứ Bia",
                "type": "restaurant",
                "vote": 4
            },
            {
                "address": "Số 23 Huynh Thuc Khang, Quận Hoang Mai, Hà Nội",
                "cost": 200000,
                "description": "Nếu chưa biết nhà hàng nào có không gian đẹp ở Hà Nội thì quý khách hãy chọn Sứ Bia. Nhà hàng có kiến trúc độc đáo và thân thiện với thiên nhiên. Trong không gian ăn uống có thêm cây cỏ,hoa lá trông rất thơ mộng, hữu tình. Đến với Sứ Bia du khách sẽ có những trải nghiệm mới lạ và ấn tượng.",
                "id": 1,
                "image": "https://cdn.vietnambiz.vn/2020/2/14/ticketview-15816704441281296608294.jpg",
                "name": "CGV Time City",
                "type": "cinema",
                "vote": 5
            }
        ]
    }
]


class Present {
    createNew(user, callback) {
    
    }
    getAll(callback){
        let err = false
        callback(err, fakePresent)
    }

    getById(id, callback) {
        let err = false
        for(let i = 0; i < fakePresent.length; i++){
            if(id==fakePresent[i].id){
                callback(false, fakePresent[i])
                return
            }
        }
        callback(err, null)
    }
}
module.exports =  Present;
