## Tóm gọn

- Metalsmith: để sinh ra web pages
- HandlebarJS: sinh ra layouts
- Data: lưu trong file .md 


## Mục đích
- xây dựng website sử dụng công nghệ EasyWeb

### Yêu Cầu 
- Sử dụng được với tất cả HTML frontend themes
- Dễ dàng triển khai: automation 
- Dễ dàng cho việc phát triển


## Giải pháp
### Sử dụng được với tất cả HTML themes
> chủ yếu trên themesforest 

- chuyển đổi dễ dàng từ source html, css, js có sẵn
   - độc lập với tools build themes, ví dụ `SASS, LESS`
   - chỉ sử dụng html, css, js sau khi build

- hỗ trợ nhiều CSS framework như bootstrap, foundation, semanticui

### Dễ dàng cho việc triển khai
- push to deploy 
  - trên github.com
  - trên server easyweb, cấu hình nhanh chóng dễ dàng 


### Dễ dàng cho việc phát triển
#### Generator framework
- sử dụng metalsmith
  - build static pages 
- handlebars cho template engine
  - layout dùng chung: partials, extend 

- data binding engine: VueJS | Riots 

#### Hot Reload 
- sử dụng webpack 

#### Dữ liệu hoạt động
> json format, json schema 

- dữ liệu cho từng trang
    - lưu độc lập trong file .md đính kèm
    -  
- dữ liệu danh sách
    - lưu trong biên js 
    - inline trong html: sinh ra bởi Handlebar 
    - get động từ API

