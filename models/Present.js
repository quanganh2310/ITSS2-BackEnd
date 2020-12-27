let fakeCombo =  [
    {
        "id": "1",
        "name": "Đồng hồ Aries Gold",
        "image": "https://www.dangquangwatch.vn/upload/product/2004667614_dong-ho-chinh-hang-88.jpg",
        "type": "Ngày phụ nữ",
        "description": "Đồng hồ Aries Gold AG-G9005 G-BK Bảo hành quốc tế 02 năm.",
        "shop": "Đăng Quang Watch",
        "cost": 4225000
    },
    {
        "id": "2",
        "name": "Cốc Sứ The Coffee House Gợn Sóng",
        "image": "https://product.hstatic.net/1000075078/product/merchandise_hinh_len_webly_gon_song_d9efc6093e564e2faa302ed59ef5cdd8_master.jpg",
        "type": "Sinh nhật",
        "description": "Một chiếc ly mới, mang lại cảm hứng mới mỗi ngày cho bạn hoặc cho ai đó khi nhận được món quà xịn sò này.",
        "shop": "Cà phê Gia đình",
        "cost": 100000
    },
    {
        "id": "3",
        "name": "Tai Nghe Bluetooth Apple Airpods 2019",
        "image": "https://techland.com.vn/wp-content/uploads/2019/03/tai-nghe-khong-day-apple-airpod-2019-1.jpg",
        "type": "Quà sinh nhật",
        "description": "TecHland chuyên cung cấp các sản phẩm Tai nghe Bluetooth Liền Mic Apple Airpods chính hãng với chất lượng đảm bảo giá thành cạnh tranh tại Việt Nam.",
        "shop": "TecHlane",
        "cost": 3550000
    },
    {
        "id": "4",
        "name": "PHIẾU QUÀ TẶNG OEDO VND100,000",
        "image": "https://lh3.googleusercontent.com/proxy/IpxaK4ygkjczyse4Z2JOKKXlVeR6orspL5Q7120JOt0A0c_iXNR1IdrovQ_rrcRZWBsTGbLtxqcqwX1ZV2tomODQVTi-jvv8_Jq_6zCcsv9thLLselPgD0Oxqy5hgA1k_CJP3BbYzVyjDfdjg5eJczkUcc_yPA4PAq-OAryb9AqMcYIVI75d6qBmi3s",
        "type": "Giáng sinh",
        "description": "Tập trung 6 nhà hàng Nhật từ đường phố đến nhà hàng sang trọng, Oedo Alley đang là địa điểm ăn uống để thực khách có thể thỏa thích trải nghiệm các món ngon Nhật Bản. Trải nghiệm Oedo Alley ngay bằng phiếu quà tặng 100.000 đồng chỉ với 25.000 điểm Rewards+.",
        "shop": "Saigon Centre",
        "cost": 100000
    },
    {
        "id": "5",
        "name": "Bộ Ấm Trà Tử Sa Bát Tràng Tống Chữ Tâm 500ml",
        "image": "https://cuahanggomsu.com/wp-content/uploads/2019/12/bo-am-tra-tu-sa-09.jpg",
        "type": "Giáng sinh",
        "description": "Bộ Ấm Trà Tử Sa Bát Tràng Tống Chữ Tâm 500ml được các giới trà cụ ưa chuộng dùng làm ấm pha trà. Được chế tác từ nghệ nhân Lương Mạnh Tuấn từ làng gốm sứ Bát Tràng. Loại trà cụ “tuyệt đỉnh”  này với những huyền thoại như pha trà không cần trà, lưu trà 5 ngày không hỏng… luôn luôn mê hoặc giới trà nhân.",
        "shop": "Cửa hàng gốm sứ",
        "cost": 289000
    }
]


class Combo {
    createNew(user, callback) {
    
    }
    getAll(callback){
        let err = false
        callback(err, fakeCombo)
    }

    getById(id, callback) {
        let err = false
        for(let i = 0; i < fakeCombo.length; i++){
            if(id==fakeCombo[i].id){
                callback(false, fakeCombo[i])
                return
            }
        }
        callback(err, null)
    }
}
module.exports =  Combo;
