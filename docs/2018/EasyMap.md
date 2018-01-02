# Trang Bản Đồ Thông Tin Dành Cho Du Lịch

## Khái niệm
- Bản đồ (Map) gồm nhiều   Places, List, Area
    - Place: là một điểm trên bản đồ. 
        - Cùng một tọa độ GPS vẫn cho phép nhiều Place, Place có tọa độ 3D (x,y,z) và bán kính giới hạn. 
    - Tour: là liên kết nhiều Places có cùng chủ đề (Tags). 
        - Tour là List có thứ tự và có Start Place, End Place
        - Round là List kết nối thành vòng kín 
    - Area: là tập hợp nhiều Place trong một khu vực giới hạn 
        - Area chứa nhiều List bên trong

- Topic : nội dung dùng để mô tả Place, List và Area, gồm nhiều hashtags, tags, article, 
        - Hashtags: keyword trong nội dung mô tả
        - Tag : nội dung gồm title, image | video, linkedUrl
        - Article: bài viết , review | video

- (Private | Group)  Topic
- (Public | Group | Private) Map: Place | List | Area: 
    - Private Map: tạo ra bởi mỗi cá nhân, clone từ Group hoặc Public Maps có sẵn
    - Group: 
        - tạo bởi các Partners hoặc Members của group(Rating | Verified)
        - Nâng cấp từ Private
    - Public: tạo mới hoặc chuyển đổi từ Group bởi Admin Team,

- User: người sử dụng, chia thành 2 nhóm
    - normal : người dùng bình thường, chủ đề tạo ra giá trị tin tưởng không cao
    - guru: chuyên gia trong lĩnh vực nào đó, chủ đề do nhóm này tạo ra có khả năng chia sẻ cao 

    

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

### Content Rating | Validation

- **Rating**: users rating các nội dung người khác tạo ra
    - like | comment
    - trust : tính chính xác | giá trị của nội dụng

- **Validation**: xác thực, kiểm tra nội dung     

### Share: Chia sẻ
- **Group Sharing**: chia sẻ theo group, giới hạn Spam trong cộng đồng public

- **SharePoints**: điểm để được chia sẻ: 
    - điểm càng cao, chủ đề tạo ra chia sẻ dễ dàng
    - điểm tạo bởi số lượt `Trust` của `Normal` và `Guru` users
    

   
    
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
- người dùng sẽ tạo nội dung cho 1 địa điểm 

- người dùng sẽ tạo 1 tour chọn ra từ danh sách địa điểm đang có

 
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


