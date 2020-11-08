// const { Pool, Client } = require("pg");
// var connectionString = "postgres://postgres:123@localhost:5432/BattleShip";
// var pool = new Pool({
//     connectionString: connectionString,
// })

let fakePalace = [{
    id : 1, 
    name : "Nhà hàng Sứ Bia",
    cost : 200000,
    address : "Địa chỉ: số 23 Nguyễn Đình Chiểu, Quận Hai Bà Trưng, Hà Nội",
    image : "https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg",
    description : `Nếu chưa biết nhà hàng nào có không gian đẹp ở Hà Nội thì quý khách hãy chọn Sứ Bia. 
                    Nhà hàng có kiến trúc độc đáo và thân thiện với thiên nhiên. Trong không gian ăn uống có thêm cây cỏ,
                     hoa lá trông rất thơ mộng, hữu tình. Đến với Sứ Bia du khách sẽ có những trải nghiệm mới lạ và ấn tượng.`,
    vote : 4,
}, {
    id : 2, 
    name : "Buffet Sứ - Nguyễn Du",
    cost : 120000,
    address : "số 64 Nguyễn Du, Quận Hai Bà Trưng, Hà Nội",
    image : "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/11/25/16/caractere-2511.jpg?w968",
    description : `Buffet Sứ là một trong những nhà hàng buffet hàng đầu Hà Nội với không gian sang trọng, 
                    hiện đại nhưng không kém phần quyến rũ. Nhà hàng phục vụ các món tươi sống như sushi, sashimi…, 
                    các món Âu – Á và các món ăn truyền thống của người Việt Nam.`,
    vote : 5,
},{
    id : 3,
    name : "Sum Villa",
    cost : 320000,
    address : "Địa chỉ: số 10 Đặng Thai Mai, Quận Tây Hồ, Hà Nội",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg",
    description : `Buffet Sứ là một trong những nhà hàng buffet hàng đầu Hà Nội với không gian sang trọng, 
                    hiện đại nhưng không kém phần quyến rũ. Nhà hàng phục vụ các món tươi sống như sushi, sashimi…, 
                    các món Âu – Á và các món ăn truyền thống của người Việt Nam.`,
    vote : 2,
},{
    id : 4,
    name : "Moon BBQ – Nguyễn Khánh Toàn",
    cost : 250000,
    address : "Ngõ 92 Nguyễn Khánh Toàn, số 32, quận Cầu Giấy, Hà Nội",
    image : "https://cdn1.clickthecity.com/wp-content/uploads/2020/06/11111125/Resto-min-768x384.jpg",
    description : `Buffet Sứ là một trong những nhà hàng buffet hàng đầu Hà Nội với không gian sang trọng, 
                    hiện đại nhưng không kém phần quyến rũ. Nhà hàng phục vụ các món tươi sống như sushi, sashimi…, 
                    các món Âu – Á và các món ăn truyền thống của người Việt Nam.`,
    vote : 5,
}
]
class Palace {
    createNew(user, callback) {
    
    }
    getAll(callback){
        let err = false
        callback(err, fakePalace)
    }

    getById(id, callback) {
        let err = false
        for(let i = 0; i < fakePalace.length; i++){
            if(id==fakePalace[i].id){
                callback(false, fakePalace[i])
                return
            }
        }
        callback(err, null)
    }
}
module.exports =  Palace;