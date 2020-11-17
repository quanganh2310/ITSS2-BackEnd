// const { Pool, Client } = require("pg");
// var connectionString = "postgres://postgres:123@localhost:5432/BattleShip";
// var pool = new Pool({
//     connectionString: connectionString,
// })

let fakePalace =  [
    {
        "id": 1,
        "name": "Nhà hàng Sứ Bia",
        "cost": 200000,
        "address": "Số 23 Nguyễn Đình Chiểu, Quận Hai Bà Trưng, Hà Nội",
        "image": "https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg",
        "description": "Nếu chưa biết nhà hàng nào có không gian đẹp ở Hà Nội thì quý khách hãy chọn Sứ Bia. Nhà hàng có kiến trúc độc đáo và thân thiện với thiên nhiên. Trong không gian ăn uống có thêm cây cỏ,hoa lá trông rất thơ mộng, hữu tình. Đến với Sứ Bia du khách sẽ có những trải nghiệm mới lạ và ấn tượng.",
        "vote": 4
    },
    {
        "id": 2,
        "name": "Buffet Sứ",
        "cost": 300000,
        "address": "Số 64 Nguyễn Du, Quận Hai Bà Trưng, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-2.png",
        "description": "Buffet Sứ là một trong những nhà hàng buffet hàng đầu Hà Nội với không gian sang trọng, hiện đại nhưng không kém phần quyến rũ. Nhà hàng phục vụ các món tươi sống như sushi, sashimi…, các món Âu – Á và các món ăn truyền thống của người Việt Nam.",
        "vote": 5
    },
    {
        "id": 3,
        "name": "Sum Villa",
        "cost": 220000,
        "address": "Số 10 Đặng Thai Mai, Quận Tây Hồ, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-4.jpg",
        "description": "Nằm trong khu biệt thự Tây Hồ thơ mộng, nhà hàng Sum Villa là điểm đến hấp dẫn của nhiều du khách. Nhà hàng được thiết kế bởi kiến trúc sư tài hoa người Pháp theo phong cách Việt Nam đương đại hòa hợp với phong cảnh thiên nhiên.",
        "vote": 4
    },
    {
        "id": 4,
        "name": "Moon BBQ",
        "cost": 300000,
        "address": "Ngõ 92 Nguyễn Khánh Toàn, số 32, quận Cầu Giấy, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-5.jpg",
        "description": "Moon BBQ có không gian châu Âu cổ điển, được nhiều người yêu thích. Dù là ban ngày hay ban đêm, nhà hàng luôn mang một vẻ đẹp cổ điển mơ màng dưới ánh đèn vàng ấm áp. Bàn ghế trong nhà hàng được thiết kế kiểu cách, tạo hình độc đáo.",
        "vote": 4
    },
    {
        "id": 5,
        "name": "Tiêu Dao Quán",
        "cost": 130000,
        "address": "Số 59 Hoàng Cầu Mới, Quận Đống Đa, Hà Nội",
        "image": "https://pasgo.vn/Upload/anh-chi-tiet/tieu-dao-quan-kdt-van-quan-ha-dong-2-normal-1034350639419.jpg",
        "description": "Đến với Tiêu Dao Quán du khách như lạc vào miền quê đích thực với những ngôi nhà mái lá đơn sơ, những ao hồ nhỏ nhắn, những tiểu cảnh làng quê xinh xắn… Hình ảnh mộc mạc cùng không gian thoáng đãng gần gũi với thiên nhiên đã thu hút nhiều du khách đến với Tiêu Dao Quán.",
        "vote": 5
    },
    {
        "id": 6,
        "name": "Nhà hàng Long Đình",
        "cost": 800000,
        "address": "Số 64B Quán Sứ, Quận Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-7.jpg",
        "description": "Nhà hàng Long Đình nổi bật với không gian văn hóa đặc trưng của người Hong Kong vừa cầu kỳ, thẩm mỹ vừa đầy tinh tế, lãng mạn. Các vật dụng trong nhà hàng như bức tranh, bàn ghế hay bộ ấm trà, bức bình phong, đèn lồng... đều được lựa chọn kỹ càng, hài hòa nhằm mang đến cho thực khách những trải nghiệm thật nhất.",
        "vote": 5
    },
    {
        "id": 7,
        "name": "Nhà hàng Hương Quê",
        "cost": 350000,
        "address": "Số 298 Nghi Tàm, Quận Tây Hồ, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-8.jpg",
        "description": "Nhà hàng Hương Quê Nghi Tàm được thiết kế theo phong cách truyền thống pha lẫn chút hiện đại. Đến với Hương Quê, du khách sẽ bắt gặp đâu đó hình ảnh của làng quê Việt với những cây tre, cây trúc đan xen trong không gian của nhà hàng. Quán phục vụ nhiều món ăn ngon nên được nhiều du khách yêu thích và lựa chọn.",
        "vote": 4
    },
    {
        "id": 8,
        "name": "Nhà hàng Sen Đầm Trị",
        "cost": 400000,
        "address": "Số 2 Đặng Thai Mai, Quận Tây Hồ, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-9.jpg",
        "description": "Nằm gần khu Đầm Trị thoáng mát, nhà hàng Sen Đầm Trị là địa chỉ lý tưởng cho những du khách thích phong cảnh thiên nhiên. Nhà hàng có không gian rộng lớn, có thể chứa đến 1.000 khách. Đặc biệt, ở đây còn có sảnh VIP dành cho các buổi tổ chức sự kiện, tất niên…",
        "vote": 3
    },
    {
        "id": 9,
        "name": "Buffet Việt",
        "cost": 350000,
        "address": "Số 1A Tăng Bạt Hổ, Quận Hai Bà Trưng, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-10.jpg",
        "description": "Nhà hàng Tăng Bạt Hổ nằm ngay vị trí đắc địa, nơi nhộn nhịp nhất thủ đô Hà Nội. Nhà hàng được thiết kế theo lối cổ kính xen lẫn hiện đại nên rất đặc sắc. Nhà hàng có 2 tầng, mỗi tầng đều có không gian rộng lớn để tiếp đón thực khác. Đến với Tăng Bạt Hổ, thực khách sẽ cảm nhận được sự ấm cúng khi thưởng thức cùng gia đình của mình",
        "vote": 3
    },
    {
        "id": 10,
        "name": "Nhà hàng Carnaval",
        "cost": 200000,
        "address": "Số 145 Trung Hòa, Tầng 1, 2, 3 Quận Cầu Giấy, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nha-hang-co-khong-gian-dep-ha-noi-11.jpg",
        "description": "Carnaval – Trung Hòa có thiết kế mái vòm ấn tượng. Bước vào nhà hàng du khách sẽ bị thu hút từ cái bàn, cái ghế, mái vòm cho đến những bức tranh tường nổi bật, sống động.",
        "vote": 4
    },
    {
        "id": 11,
        "name": "La Verticale",
        "cost": 900000,
        "address": "Số 19 Ngô Văn Sở, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-1.jpg",
        "description": " La Verticale mang đến một không gian hoàn toàn mới lạ mang phong cách châu Âu. Bước vào nhà hàng, từ cách bày trí cho đến các vật dụng trang trí ở đây đều khiến du khách không thể rời mắt.",
        "vote": 5
    },
    {
        "id": 12,
        "name": "Green Tangerina",
        "cost": 700000,
        "address": "Số 48 Hàng Bè, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-2.jpg",
        "description": "Green Tangerine nổi tiếng là một trong những nhà hàng sang trọng ở Hà Nội. Đến với Green Tangerina du khách cảm nhận được không gian yên tĩnh của hoa cỏ, cây xanh hài hòa với không gian cổ kính của nhà hàng.",
        "vote": 4
    },
    {
        "id": 13,
        "name": "La Badiane",
        "cost": 1000000,
        "address": "Số 10 Nam Ngư, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-3.jpg",
        "description": "Nhắc đến các nhà hàng sang trọng ở Hà Nội không thể thiếu La Badiane - tên gọi tiếng Pháp của hoa hồi, loại gia vị đặc biệt trong ẩm thực. La Badiane được thiết kế theo phong cách Châu Âu, không gian sang trọng, ấm cúng.",
        "vote": 5
    },
    {
        "id": 14,
        "name": " El Gaucho",
        "cost": 600000,
        "address": "Số 11 Tràng Tiền, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-4.jpg",
        "description": "El Gaucho có không gian rộng rãi, thoải mái; thích hợp cho những bữa tiệc gia đình, bạn bè. Nhân viên trong quán khá dễ thương và phục vụ tốt. El Gaucho chuyên các món bít tết bò rất ngon.",
        "vote": 5
    },
    {
        "id": 15,
        "name": "Nhà hàng Dã Liên",
        "cost": 500000,
        "address": "Số 55A Nguyễn Du, Hai Bà Trưng, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-5.jpg",
        "description": "Nhà hàng có 3 tầng, các tầng được trang trí với phong cách khá cầu kỳ, chăm chút từng chi tiết. Trong khuôn viên nhà hàng còn có vườn thiền, ao sen…",
        "vote": 3
    },
    {
        "id": 16,
        "name": "Ming Restaurant ",
        "cost": 1500000,
        "address": "Khách sạn Hotel Sofitel Plaza, số 1 Thanh Niên, Tây Hồ, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-6.jpg",
        "description": "Ming Restaurant là nhà hàng sang trọng bậc nhất Hà Nội, chuyên phục vụ các món ăn Trung Quốc.Đến với Ming Restaurant du khách sẽ được thưởng thức các món ăn hấp dẫn như há cảo, xíu mại, hoành thánh, mì vịt tiềm, vịt quay Bắc Kinh, bánh mì phá lấu, chè trứng Thượng Hải…",
        "vote": 5
    },
    {
        "id": 17,
        "name": "Jacksons Steakhouse",
        "cost": 400000,
        "address": "Số 23J Hai Bà Trưng, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-7.jpg",
        "description": "Jacksons Steakhouse tọa lạc ngay trên phố Hai Bà Trưng, thủ đô Hà Nội. Nhà hàng chuyên phục vụ các món ăn và đồ uống thượng hạng với 3 khu riêng biệt.",
        "vote": 4
    },
    {
        "id": 18,
        "name": "Press Club",
        "cost": 800000,
        "address": "Số 12 Lý Đạo Thành, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-8.jpg",
        "description": "Press Club là nơi diễn ra các cuộc hẹn của giới doanh nhân, ngoại giao và khách quốc tế. Đây cũng là địa điểm ăn ngon với khung cảnh thoải mái, sang trọng và thanh lịch.",
        "vote": 5
    },
    {
        "id": 19,
        "name": "Madame Hien",
        "cost": 700000,
        "address": "Số 14 Chân Cầm, Hoàn Kiếm, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-9.jpg",
        "description": "Nếu muốn tận hưởng một không gian sang trọng và ấm cúng ở Hà Nội thì du khách hãy đến với Madame Hien. Không giống các nhà hàng khác, Madame nằm thu mình trong một căn biệt thự kiểu Pháp ở phố Chân Cầm.",
        "vote": 5
    },
    {
        "id": 20,
        "name": "The Vin Steak",
        "cost": 300000,
        "address": "Số 7 Xuân Diệu, Tây Hồ, Hà Nội",
        "image": "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/am-thuc-ha-noi/tat-ca-nhung-nha-hang-sang-trong-o-ha-noi-10.jpg",
        "description": "Tọa lạc ngay góc Hồ Tây – Hà Nội, The Vin Steak mang đến cho du khách một không gian hoàn toàn mới mẻ, sang trọng. Các món ăn ở đây được bày trí đơn giản nhưng không kém phần đẹp mắt. Đặc biệt hương vị các món ăn thơm ngon mang đến cho du khách những bữa ăn ngon, đậm đà.",
        "vote": 5
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
