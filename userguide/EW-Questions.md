
> link gốc https://github.com/easywebhub/tasks/blob/master/docs/architect/EWDeploymentFlow.md

## Câu hỏi và giải thích

### Câu hỏi
```
Synchronization
- EasyBuilder (bước 20, 21)
  + SourceCode (011) là gì?
  +SourceCode (020) là gì?
	+Account git để pull , push.
	+Bước git push (011) có khẳ năng bị conflict code không?
```
#### Trả lời
- Các số màu vàng, `0xx`, gồm 3 loại chính: `SourceCode`, `Website`, `API Loobackup`
- Mỗi loại chính là thư mục chứa nhiều loại files:
    - `SourceCode`: chủ yếu `.md, json, html, css,...`: ví dụ  `https://github.com/easywebhub/easy-websites`
    - `WebSite`: chủ yếu là `.html, .css, image`, ví dụ `https://github.com/easywebhub/daksong_website/tree/gh-pages`
    - `EasyCMS`: webform: là 1 trang quản trị trên web, đây là ví du http://magazine-cms.vinaas.com/
    - `API loopback`: là nodejs source code, khi triển khai ví dụ: http://backend.thoibaophuongdong.vn/explorer/#/
        - tài liệu loopback: http://loopback.io/

- `SourceCode` và `Website` thường nằm trong 1 git, nhưng khác nhau branch
    - `SourceCode` : branch `master`
    - `Website`: branch `gh-pages` (viết tắt của github pages)    
- `Account git` thì tùy vào hệ thống đang chạy
    - nếu push lên github, thì dùng 1 account chung, hiện tại là `ewh-support`, https://github.com/ewh-support?tab=repositories
    - push lên git server rieng, thì dùng account cung cấp: hiện tại, https://sourcecode.easywebhub.com/

- Conflict khi pull & push sẽ được xử lý trong chính scripts sẽ viết, theo quy trình
    1. merge trước
    1. nếu conflict, thì xóa `local`, lấy `remote`

### Câu hỏi         
```
EasyCMS:
	+bước 30 gọi api ?
	+Bước 32 write md, json, html ? để làm gì?
	+Không thể hiểu bước 020, 040, 041 ?
```
#### Trả lời
- `030` (API loopback) : khi triển khi sẽ cung cấp nhiều API cho bước `30` gọi. 
    - được cấu hình trong `web form`: **Không cần quan tâm**

- bước `32` ghi ra file là chức nang của `030`, để thay đổi : thêm | xóa | sửa các files trong `SourceCode` hoặc `Website`

- `020`, `040`, `041`: là dạng `0xxx`: đây không phải là bước script, mà là thư mục

### Câu hỏi
```
Generating
	+Bước 14: source code lấy ở đâu ra? các lệnh hướng build source code.
	+Bước 42, 43: generating, watch metasmith là gì?

Initilization
	+Template Git : là gì? dùng để lấy source code . Cho ví dụ ?
	+Bước thứ 102 là bước chạy các lệnh build source để start website easyweb?
	+EasyBuilder là dạng phần mềm kiểu winform hay dạng trang web chạy trên máy cá nhân?

	+Bước 121: là chạy cái gì? gọi api hay gọi webform? để làm gì?
	+Template Docker loopback? Là gì?
	+Api loopback là gì?
	+Bước 122?
```
#### Trả lời
- `Template git`: là git repository do mình tạo ra sẵn, 
    - chứa đựng `SourceCode` ở master, và `Website` ở `gh-pages`
- `Buoc 14` source code là `011`, kết quả của bước `101` , lấy từ `template git`
- `bước 42, 43` là các nodejs lệnh, ví dụ `npm start` , `npm watch`, ... 

- `EasyBuilder` là phần mềm đa nền trên Win, Linux, Mac, viết trên nền tảng Electron
    - download  http://easywebhub.com/ 
- `EasyCMS` là phiên bản Web của EasyBuilder

- bước 122: 
    - 004: là bản build chuẩn của EasyCMS (để trên server chúng ta)
    - 122: lấy build về tạo thành EasyCMS cho website mới 

- `Template git`, `EasyCMS`, `API loopback` bản build: nên để trong Docker để tiện cho việc triển khai, clone     

## Đã thực hiẹne

- Demo Script: https://gist.github.com/nemesisqp/07689449bf526086fa6b6983e1053272
    - 101, 102:  clone từ `template git`, tạo source code, sau đó tạo `website`
    - thông tin được cấu hình trong `setting.conf`:
        - git repo link
        - git account 
        - name của thư muc 
        
    

Giải thích workflow deployment? không hiểu luồng của deployment.

---------------------------------------------------------------------------------------

### Hỏi phần Initlitaztion.
+ Bước 101. Từ git repo cho ra web site. Nghĩa là lấy source git (thông tin từ config). và build lên website mới.? Các lệnh build là gì?
+ Bước 102. Từ website cho ra source-code? Nghĩa là gì?
+ 2 Bước này độc lập đúng không?

+ Bước 121, 122.  Từ EasyCMS cho ra web-forms ?. Nghĩa là gì? Các lệnh build là gì?
+ Bước 131,132. Các lẹnh build suorce code cái mà được lấy từ template git?
+ Bước 141, 142. Có phải là lấy dockerfile từ api. và build docker container. cáclệnh để run docker.?
