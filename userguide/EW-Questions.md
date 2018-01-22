
> link gốc https://github.com/easywebhub/tasks/blob/master/docs/architect/EWDeploymentFlow.md



## EasyWeb tổng quan
> https://github.com/easywebhub/tasks/blob/master/docs/EasyWeb-howitworks-vn.pdf

- web admin => `easyCMS`
- API services => `api loopback`
- HTML, CSS, JS => `website`
- (Layout + Content) => `sourceCode`
- Generator: công cụ để build `sourceCode` thành `website`

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

## Đã thực hiện

- Demo Script: https://gist.github.com/nemesisqp/07689449bf526086fa6b6983e1053272
    - 101, 102:  clone từ `template git`, tạo source code, sau đó tạo `website`
    - thông tin được cấu hình trong `setting.conf`:
        - git repo link
        - git account 
        - name của thư muc 
        
- 001: ví dụ https://github.com/easywebhub/sumolanding,
    - trong này có config để thiết lập build server, deploy server, 
    - domain tương ứng: thiết lập trong file `/CNAME`
- 002: ví dụ https://github.com/vinaas/easyquiz-cms,  gh-pages branch
    - trong source này có file config, sẽ trỏ tới phần `001` hoặc `003` tương ứng
- 003: (API Loopback) là git url, ví dụ https://github.com/vinaas/easyquiztest/tree/master/backend
    1. pull source về server (VPS) có cài đặt NodeJS
    1. lệnh để cài đặt và chạy https://github.com/vinaas/easyquiztest/tree/master/backend#l%E1%BB%87nh
    1. các thông tin kết nối api looback với phần khác của website nằm trong file cấu hình nằm trong source trên, [sample](https://github.com/vinaas/easyquiztest/blob/master/backend/server/config.json)
- Nên đóng gói `001`, `002`, `003` vào 1 hoặc nhiều Docker image, để việc pull, push, cấu hình dễ dàng hơn

Giải thích workflow deployment? không hiểu luồng của deployment.

---------------------------------------------------------------------------------------

### Hỏi phần Initlitaztion.
+ Bước 101. Từ git repo cho ra web site. Nghĩa là lấy source git (thông tin từ config). và build lên website mới.? Các lệnh build là gì?
+ Bước 102. Từ website cho ra source-code? Nghĩa là gì?
+ 2 Bước này độc lập đúng không?

#### trả lời:
+ Initilzation: nghĩa là khởi tạo các thành phần của website,  (`sourcecode`, `website`, ...) từ template có sẵn. 
   - chủ yếu là pull từ template có sẵn
   - thiết lập các thông số riêng cho từng website: ví dụ: sub-domain sẽ sử dụng, ...
   
+ Sau đó mới chuyển qua các giai đoạn hoạt động
   - Synchronize: đồng bộ website giữa máy cá nhân <==> server
   - Generating: khi users thay đổi nội dung trong `sourceCode`, hệ thống tự sinh ra `website` với các thay đổi này
   - Deployment: Sau khi thay đổi xong, website cần triển khai vào thực tế
   
+ 001 : template nằm ở 1 git Url, chỉ việc clone (hoặc migration) về

    - `sourceCode` ở master 
    - `website` ở gh-pages
+ 101: sẽ clone (migrate) về và triển khai trên server `source.easywebhub.com`
+ 101: sẽ clone về máy cá nhân, nằm trong phần mềm `EasyBuilder`
   - download phần mềm tại easywebhub.com, xem video hướng dẫn để tạo website, hình dung quá trình 
 
```
+ Bước 121, 122.  Từ EasyCMS cho ra web-forms ?. Nghĩa là gì? Các lệnh build là gì?
+ Bước 131,132. Các lẹnh build suorce code cái mà được lấy từ template git?
+ Bước 141, 142. Có phải là lấy dockerfile từ api. và build docker container. cáclệnh để run docker.?`
```
  
+ tương tự cho các bước Initilzation khác
+ phần "đã thực hiện" ở trên có script minh họa cho 101 và 102, 
+ 122 giống 121, 132 giống 131, 142 giống 141, chỉ khác nhau thông số trong config, để triển khai lên server riêng của khách hàng 
thay vì trên server chung

+ danh sách các server hiện tại của chúng ta, https://github.com/easywebhub/tasks/wiki, 
-------------------------------------------------------------------------------------------------------------------
#### Hỏi thông tin để bắt đầu làm Initialization.
+ Bước 101.  Cung cấp url của template GIT và user, password để đưa vào script test thử. Khi có được suorce-code rồi. Cung cấp các lệnh build và triển khai trên server. Cách triển khai như thế nào?
+ Bước 102. Cung cấp url GIT để clone suorce-code về EASYBUILDER. Mà suorce-code ở EASYBUILDER để làm gì?
+ Bước 121, 122. Cung cấp cách thức gọi webform.(api, user, pass) . Các lệnh dùng để build lên source -code lên EASYCMS sau khi lấy được từ api.
+ Bước 131, 132. sử dụng template GIT như ở Bước 101 ??
+ Bước 122, 142. Cung cấp cách thức gọi API lookback ?. Các lệnh khi build run Docker container ?
-------------------------------------------------------------------------------------------------------------------
#### Hỏi về generate. (Đã trả lời.)
+ Bước 14. Chạy ở trên phần mềm EASYBUILDER? script này có rồi đúng ko? Nó là bat script.?
Nó làm nhiệm vụ build source code ?

+ Bước 42, 43. Cung cấp chi tiết từng lệnh npm start, npm watch  cho cái source đó.
Source 040. có phải kết quả của bước Init 131, 132 không?
+ Trả lời:
 - Nhiệm vụ của Build, hoặc watch, là kiểm tra có thay đổi trong files nằm trong thư mục source, sẽ sinh ra file html mới nằm trong thư mục /build (website)
 - Bản website mới, sẽ qua giai đoạn deploy, sẽ cập nhật lên hosting (hoặc github gh-pages) chứa website thực tế 
 - từ bên ngoài sẽ thấy được nội dung thay đổi
-------------------------------------------------------------------------------------------------------------------
#### Hỏi về deployment (Đã trả lời)
+ Bước 22 là ở deployment. là push code lên Easywebhub.com ?
 - Lên 1 git server. Theo url trong setting. Có thể phải giải quyết conflict code trước khi push lên git server.
+ Bước 51, 53 là deploy lên theo server...?
 - Đúng. Là git server có user pass. Deploy lên server demo hoặc product.
 - 051 là 1 git repository nằm trên server, Demo easywebhub.com
 - 052 là 1 git repo nằm trên github.com
 - bước 52, là đồng bộ, push code, từ 051 lên 052
 - dấu -> là đồng bộ, push code
 - 0xx là 1 thư mục git, nằm ở branch cụ thể, master hoặc là gh-pages
+ Bước 6x:
 - 6x là phần trỏ domain tới cách git server kia. Nếu là github.com, thì trỏ domain theo CNAME
 - Link cho subdomain: https://help.github.com/articles/setting-up-a-custom-subdomain/
 - Nếu là git server của mình, thì trỏ theo IP (A) hoặc theo CNAME
 - Mục đích của trỏ domain để bảo đảm, khi truy cập vào website theo domain, nó sẽ trỏ tới đúng website nằm trong thư mục .git
----------------------------------------------------------------------------------------------------------
#### Hỏi về synchronization.
+ Easycms là cục build có sẵn, trong đó đã call các api trong loopback cũng có sẵn luôn
+ 2 bên tự động call nhau, nếu cms biết được IP hoặc domain của api loopback
+ Cái này thay đổi tròn settingScript ko cần biết cms làm việc với api những gì
+ Bước 30, 32 làm gì?
 - Bước 30, 32 script sẽ không cần làm. CMS sẽ tư
+ Bước 41 là synchonize source giữa source tren server khách hàng vào trong server easywebhub ?
 - Sử dụng công nghệ gitweb-hook.
 - Đóng vai trò api listen gỉt trigger từ github, gitlab, …
 - Link https://github.com/easywebhub/ewh-listener

