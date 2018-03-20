# Trang Bản Đồ Thông Tin Dành Cho Du Lịch

## Khái niệm

### Về Địa điểm 
- Bản đồ (Map) gồm nhiều   Places, List, Area
    - Place: là một điểm trên bản đồ. 
        - Cùng một tọa độ GPS vẫn cho phép nhiều Place, Place có tọa độ 3D (x,y,z) và bán kính giới hạn. 
    - Tour: là liên kết nhiều Places có cùng chủ đề (Tags). 
        - Tour là List có thứ tự và có Start Place, End Place
        - Round là tour kết nối thành vòng kín 
    - Area: là tập hợp nhiều Place trong một khu vực giới hạn 
        - Area chứa nhiều List bên trong

{
    id : string 
    level : number
    type : string //LocationTypes: PLACE | TOUR | AREA
    title : string 
    description : string 
    location : [number, number] //[-122.270833, 37.804444]
	status : string
    topicIds : []  //các chủ đề liên quan
    placeIds : [string] //dùng cho Tour | Area  hasPlaces
    tourIds : [string] // dùng cho Area hasTours
}

- topic
{
    id : string;
    type : keyword | article | video 
    keyword: [ string ]
    title : string 
    description : string
    placeIds : [string]  //topic for places
    tourIds : [string]    //topic for tours
    areaIds : [string]		//topic for area
    parentTopicId: string //chủ đề cha 
	rootTopicId: string	//thuộc nhóm chủ đề
    relatedTopicIds : [] // chủ đề liên quan ngang hàng
}


### Về Nội Dung Topic:
- Topic : nội dung dùng để mô tả Place, List và Area, gồm nhiều hashtags, tags, article, 
    - Hashtags: keyword trong nội dung mô tả
    - Tag : nội dung gồm title, image | video, linkedUrl
    - Article: bài viết , review | video
    - Trends: xu hướng nội dung 
    - công đồng ngôn ngữ
    
- Liên kết Chủ Đề:
    - Theo Cấu trúc Cây: từ tổng quát tới chi tiết
    - Liên kết ngang hàng

### Về User | Group | Community
- User: cá nhân thông thường, chia thành 2 nhóm
    - `normal` : người dùng bình thường, chủ đề tạo ra giá trị tin tưởng không cao
    - `guru`: chuyên gia trong lĩnh vực, chủ đề nào đó, phản hồi của họ có giá trị tin tưởng, xác thực cao hơn normal khá nhiều

- Group: gắn kết theo Chủ Đề (Topic) liên quan, ngôn ngữ sử dụng
    - Group theo cấu trúc cây: có thứ bật với quản trị đứng đầu
    - Group phẳng: ngang nhau với mọi cá nhân, nhưng phân biệt theo mức độ `normal` hoặc `guru`

- Community: gắn kết theo Vị trí địa lý, ngôn ngữ sử dụng
    - chia thành group nhỏ

### Về quyền truy cập: Permission
- 3 cấp chính: Private | Group | Community 

- (Private | Group)  Topic: 
    - chủ đề riêng theo từng cá nhân Users
    - chủ đề chia sẻ trong groups 
- (Public | Group | Private) Map: Place | List | Area: 
    - Private Map: tạo ra bởi mỗi cá nhân, clone từ Group hoặc Public Maps có sẵn
    - Group: 
        - tạo bởi các Partners hoặc Members của group(Rating | Verified)
        - Nâng cấp từ Private
    - Public: tạo mới hoặc chuyển đổi từ Group bởi Admin Team,

## Tính năng chính:
### Search
- **Search**: với từ khóa (keyword) | tọa độ GPS (Place) | khu vực  (Area)
    1. theo Chủ Đề (Topic)  => kết quả trả ra: Place, Tour, Area thuộc | liên quan tới chủ đề
    1. theo địa điểm (Place) => danh sách Chủ Đề (Topic) mà users được phép xem
    1. theo khu vực (Area) => danh sách chủ đề (Topic) được phép xem

### Explorer | Filter

- **Explorer**: theo Chủ Đề
    1. Các điểm Place cùng chủ đề
    1. Các Tour
    1. Area cùng chủ đề

- **Explorer** : khám phá theo Điểm Place
    1. Các Tour đi qua điểm đó
    1. Area chứa điểm đó

### Follow: theo dõi
- **Place Followers** : theo dõi các sự kiện mới liên quan tới địa điểm đó. 
Có thể giới hạn theo Topic cụ thể

- **Tour Followers**: theo dõi các sự kiện liên quan 
    - Bổ sung Place vào Tour
    - Bổ sung Chủ đề vào Tour

- **Area** : theo dõi các sự kiện theo khu vực

### Rating | Validation

- **Rating**: users rating các nội dung người khác tạo ra
    - like | comment

- **Validation**: xác thực, kiểm tra nội dung     
    - `trust` : tin tưởng vào giá trị của nội dung 
    - `confirm`: xác nhận nội dung đúng

### Share: Chia sẻ
- **Group Sharing**: giới hạn Spam trong cộng đồng public
    - chia sẻ trong Group liên quan

- **Topic Sharing**: chia sẻ trong phần cùng chủ đề

- **Place Sharing**: chia sẻ cho Users     

- **SharePoints**: điểm để được chia sẻ: 
    - điểm càng cao, chủ đề tạo ra chia sẻ dễ dàng
    - điểm tạo bởi số lượt `Trust` của `Normal` và `Guru` users

### Create Content 
- **Create**: tạo Chủ Đề 
    1. Nội dung đa dạng: từ đơn giản: hashtags, keyword, tới phức tạp như bài viết, review, ... 
        - đa dạng form nhập liệu tùy hoàn cảnh 
        
    1. Nội dung cho Điểm (Place), Tour, Khu Vực (Area)   
        - các bước nhập liệu khác nhau
    1. Đa dạng đối tượng tạo nội dung:
        - end user: tập trung đơn giản, nhanh chóng
        - blogger: cá nhân có kĩ năng viết tốt
        - content parter | company: công ty, nhóm chuyên tạo Nội dung: agency, ...


   
    
## Ngữ cảnh thực tế:

### Chọn 1 điểm Place trên bản đồ

- phân loai theo chủ đề
    - Hiển thị thông tin cho điểm Place này phân loại theo chủ đề 
    - hiển thị các điểm Place lân cận và cùng chủ đề. Khoanh vùng theo bán kính chọn lựa
    - hiển thị các tour qua điểm này và cùng chủ đề

- chủ đề liên quan 

### Chọn 1 chủ đề
- giới hạn trong 1 khu vực (area)
    - các điểm Place cùng chủ đề này
    - các tour cùng chủ đề này

### Tạo nội dung
- Admin | Partner sẽ ra Place:

- Partner | Users sẽ tạo nội dung (Chủ Đề) cho 1 địa điểm 

- Partner | Users sẽ tạo 1 tour chọn ra từ danh sách địa điểm đang có

 
### Place: chia sẻ về một điạ điểm:
- tạo nội dung : từ ngữ, hình ảnh, video
- phân vào một hoặc nhiều Topics : có sẵn hoặc tạo mới 
- share trong group (Group Places)
### List: chia sẻ về Tour:
- chọn từ danh sách Place có sẵn
- tạo nội dung cho tour: từ ngữ ,hình ảnh, video
- phân vào một hoặc nhiều Topic 
- tạo thêm (Private) Place nếu chưa có
- share trong Group (Group List)

### Map:
- tạo ra (private) map bằng cách chọn khu vực giới hạn
- chọn các List theo topic mong muốn
- share trong group (group map)


## Công nghệ
### Google Maps API 
- https://google-developers.appspot.com/maps/documentation/javascript/examples/directions-waypoints