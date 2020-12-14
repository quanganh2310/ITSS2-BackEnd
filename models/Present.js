let fakeCombo =  [
    {
        "id": "1",
        "name": "Đồng hồ Aries Gold",
        "img": "https://www.dangquangwatch.vn/upload/product/2004667614_dong-ho-chinh-hang-88.jpg",
        "event": "Ngày của bố",
        "description": "Đồng hồ Aries Gold AG-G9005 G-BK Bảo hành quốc tế 02 năm.",
        "shop": "Đăng Quang Watch"
    },
    {
        "id": "2",
        "name": "Cốc Sứ The Coffee House Gợn Sóng",
        "img": "https://product.hstatic.net/1000075078/product/merchandise_hinh_len_webly_gon_song_d9efc6093e564e2faa302ed59ef5cdd8_master.jpg",
        "event": "Ngày bạn bè",
        "description": "Một chiếc ly mới, mang lại cảm hứng mới mỗi ngày cho bạn hoặc cho ai đó khi nhận được món quà xịn sò này.",
        "shop": "Cà phê Gia đình"
    },
    {
        "id": "3",
        "name": "Tai Nghe Bluetooth Apple Airpods 2019",
        "img": "https://techland.com.vn/wp-content/uploads/2019/03/tai-nghe-khong-day-apple-airpod-2019-1.jpg",
        "event": "Ngày hội Apple",
        "description": "TecHland chuyên cung cấp các sản phẩm Tai nghe Bluetooth Liền Mic Apple Airpods chính hãng với chất lượng đảm bảo giá thành cạnh tranh tại Việt Nam.",
        "shop": "TecHlane"
    },
    {
        "id": "4",
        "name": "PHIẾU QUÀ TẶNG OEDO VND100,000",
        "img": "https://lh3.googleusercontent.com/proxy/5zk64CvSnmT9MWKL7J4k8BiaIIhJLwmaWWs7YhPWZimclw1rbvHHNSoRpdEQFsiKtvfVZ2AyceDtxzqo2KerL6e0NQ4Rzc6QRmJ5FX3AGXanKGIPMOWKcKC7Byv8mT4CM8rDnaose4W3EihL4oCfV2qWnrMpV2F93JAtLauDcQnPAToQcw0",
        "event": "Black Friday",
        "description": "Tập trung 6 nhà hàng Nhật từ đường phố đến nhà hàng sang trọng, Oedo Alley đang là địa điểm ăn uống để thực khách có thể thỏa thích trải nghiệm các món ngon Nhật Bản. Trải nghiệm Oedo Alley ngay bằng phiếu quà tặng 100.000 đồng chỉ với 25.000 điểm Rewards+.",
        "shop": "Saigon Centre"
    },
    {
        "id": "5",
        "name": "Bộ Ấm Trà Tử Sa Bát Tràng Tống Chữ Tâm 500ml",
        "img": "https://cuahanggomsu.com/wp-content/uploads/2019/12/bo-am-tra-tu-sa-09.jpg",
        "event": "Ngày trà",
        "description": "Bộ Ấm Trà Tử Sa Bát Tràng Tống Chữ Tâm 500ml được các giới trà cụ ưa chuộng dùng làm ấm pha trà. Được chế tác từ nghệ nhân Lương Mạnh Tuấn từ làng gốm sứ Bát Tràng. Loại trà cụ “tuyệt đỉnh”  này với những huyền thoại như pha trà không cần trà, lưu trà 5 ngày không hỏng… luôn luôn mê hoặc giới trà nhân.",
        "shop": "Cửa hàng gốm sứ"
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
