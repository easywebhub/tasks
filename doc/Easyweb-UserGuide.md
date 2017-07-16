

# Tính năng của EasyWeb 
<!-- TOC -->

- [Tính năng của EasyWeb](#tính-năng-của-easyweb)
    - [I. Dành cho users](#i-dành-cho-users)
        - [1. Getting Started:  (1 video)](#1-getting-started--1-video)
        - [2. Quản trị nội dung](#2-quản-trị-nội-dung)
            - [Thêm trang mới](#thêm-trang-mới)
            - [Nội dung của trang](#nội-dung-của-trang)
            - [Upload hình ảnh, files đính kèm](#upload-hình-ảnh-files-đính-kèm)
            - [Thêm Danh mục mới](#thêm-danh-mục-mới)
            - [Thêm Chủ đề mới](#thêm-chủ-đề-mới)
        - [3.Quản trị nâng cao](#3quản-trị-nâng-cao)
            - [Meta: dữ liệu chung của website](#meta-dữ-liệu-chung-của-website)
            - [Đổi sang domain mới](#đổi-sang-domain-mới)
    - [II. Dành cho Website Creator](#ii-dành-cho-website-creator)
        - [Giải thích sơ lược](#giải-thích-sơ-lược)
            - [Website, web pages](#website-web-pages)
            - [Danh Mục (Category), Chủ Đề (Tags)](#danh-mục-category-chủ-đề-tags)
        - [Giải thích về EasyWeb websites](#giải-thích-về-easyweb-websites)
            - [1. Chuẩn bị themes có sẵn với đầy đủ asset](#1-chuẩn-bị-themes-có-sẵn-với-đầy-đủ-asset)
            - [2. Layout của trang web](#2-layout-của-trang-web)
                - [2.2 Các loại layout](#22-các-loại-layout)
                - [2.1 Thêm layout mới vào easybuilder](#21-thêm-layout-mới-vào-easybuilder)
            - [3. Dữ liệu của 1 trang](#3-dữ-liệu-của-1-trang)
            - [3.1. Default fields của trang](#31-default-fields-của-trang)
            - [3.2 Các thuộc tính (fields) mới](#32-các-thuộc-tính-fields-mới)
            - [3.3 Cách binding thuộc tính (fields) vào normal layout](#33-cách-binding-thuộc-tính-fields-vào-normal-layout)
        - [Tạo Cây Danh Mục  (Category Tree)](#tạo-cây-danh-mục--category-tree)
        - [Thay đổi layout cho Trang Danh Mục  (Category Pages)](#thay-đổi-layout-cho-trang-danh-mục--category-pages)
        - [Thay đổi layout cho Trang Chủ Đề (Tags Pages)](#thay-đổi-layout-cho-trang-chủ-đề-tags-pages)
        - [Sử dụng Partial Layouts](#sử-dụng-partial-layouts)

<!-- /TOC -->

## I. Dành cho users 

### 1. Getting Started:  (1 video)
- đăng ký / đăng nhập
- tạo mới website dựa trên mẫu có sẵn 
- build website và xem hoạt động trên máy local
- thay đổi một số nội dung sử dụng inline editing
- Deploy vào thực tế 

### 2. Quản trị nội dung 
> thường có tài liệu đính kèm theo từng website mẫu 

#### Thêm trang mới 
- điền `title` cho trang mới
    - `slug` sẽ sinh ra tự động dựa trên `title`, và chính là id duy nhất của trang
    - `title` có thể thay đổi cho phù hợp sau này
- chọn `layout` từ danh sách có sẵn
- phân loại trang vào một Danh Mục (Category) (có thể để trống)
   - có thể thay đổi sau này 
- phân loại trang vào nhiều Chủ đề, `Tag` có sẵn (có thể để trống)
   - có thể thay đổi sau này 

#### Nội dung của trang 
> Dữ liệu của trang được định nghĩa sẵn theo `layout` mà trang sử dụng 

- Sử dụng Form để nhập từng trường thông tin
- Một số trường thông tin cho phép `Inline Edit` trên chính trang đó
    - tuỳ theo website mẫu đang sử dụng 

#### Upload hình ảnh, files đính kèm
> có 2 cách 
1. dùng Browse, Upload button trong Form 

2. upload vào website sử dụng "Add Files" trong Asset 
    - thư mục mặc định là `/img` 
    - đường dẫn của files vừa thêm vào ở trên cùng
    - cho phép upload các files khác ngoài hình ảnh

#### Thêm Danh mục mới 
> lưu ý phân quyền user thực hiện 

- bấm vào "+ Category" để thêm Danh Mục
    - lựa chọn Danh Mục Cha (hoặc chọn trống)

- thêm các trang chi tiết cho Danh Mục vừa tạo
- hiển thị tất cả Danh Mục theo cấp 
    - cấp 1 là các danh mục thuộc `AllCategory.children` 

#### Thêm Chủ đề mới
- bấm vào "+ Tags" để thêm mới Chủ Đề
- điều chỉnh trang chi tiết vào Chủ Đề vừa tạo 

###  3.Quản trị nâng cao 

#### Meta: dữ liệu chung của website 
- Thay đổi logo 
- Thay đổi menu 

#### Đổi sang domain mới
- điều chỉnh trong phần quản lý DNS
- `set domain` trong easybuilder 
- `Deploy` để cập nhật domain mới 

## II. Dành cho Website Creator

### Giải thích sơ lược 
#### Website, web pages
- Website là tập hợp nhiều trang web (web pages), phân biệt bởi thuộc tính url, cũng là địa chỉ để truy cập vào trang web đó. Url (còn gọi là link) là sự kết hợp giữa domain của website và slug của trang đó 

- Mỗi trang web có một giao diện hiển thị (layout) và dữ liệu (content) riêng cho trang đó. 

#### Danh Mục (Category), Chủ Đề (Tags)
- Để dễ dàng khám phá, nắm bắt nội dung của websites, các trang web (gọi là Normal pages) sẽ được phân loại và một Danh Mục cụ thể hoặc vào nhiều Chủ đề cùng lúc. Từ đó chỉ cần truy cập vào trang Danh Mục (Category pages) hoặc trang Chủ Đề (Tag pages) người xem có thể biết được danh sách các trang (Normal pages) cùng 1 Danh Mục hoặc Chủ Đề cụ thể. 

- Danh mục của website là cấu trúc cây, trong đó 1 Danh Mục sẽ thuộc 1 Danh Mục cha (Parent Category) và nhiều Danh Mục con (Childen Category) 

- Mỗi Danh Mục đều có 1 trang Danh Mục (Category page) tương ứng, liệt kê danh sách các trang web (Normal pages) được xếp vào Danh Mục đó. Danh sách này sẽ được phân trang (Pagination) trong trường hợp chứa nhiều trang cùng Danh Mục. 

- Các Trang Danh Mục (Category page) thường dùng chung 1 giao diện,`default.category.html`, hoặc có giao diện riêng theo nhu cầu, và cho phép có dữ liệu riêng theo từng Danh Mục. 

- Tag (Chủ đề), khác với Danh Mục, không có cấu trúc cây, mà ngang cấp với nhau. 

- Tương tự, mỗi Chủ Đề cũng đều có 1 trang Chủ đề (Tag pages) riêng, và cũng phân trang (Pagination) để hiển thị danh sách Normal pages. Các Trang Chủ Đề cũng thường dùng chung 1 giao diện, `default.tag.html`, hoặc có giao diện riêng theo nhu cầu, và cho phép dữ liệu riêng theo từng Chủ đề. 

### Giải thích về EasyWeb websites 

> Easyweb's website được tạo thành từ 2 phần chính, gọi là Layout và Content 

- Layout gọi chung là giao diện 

#### 1. Chuẩn bị themes có sẵn với đầy đủ asset
- mua / download themes có đầy đủ asset
- clone layout có sẵn + asset sử dụng tools

#### 2. Layout của trang web 

##### 2.2 Các loại layout  
> Chi tiết tham khảo [link]()

- (normal) layout của trang web
- partial layout: sử dụng chung của giữa nhiều layouts
    - extend layout: 
- category layout: layout của trang Danh Mục
    - mặc định: có sẵn 1 layout, tên `default.category.html` 
- tags layout: layout của trang Chủ Đề 

##### 2.1 Thêm layout mới vào easybuilder 
- `Add Layout` và copy đầy đủ HTML code
- trỏ đúng đường dẫn cho các asset files (css, js, image, …)
- hot-fix bằng cách thêm `<base href=“/“ >` hoặc điều chỉnh đường dẫn tương đối trong html code
   - ví dụ:
   ```html 
   <html lang="en">
    <head>
        <base href="/">
        <meta charset="utf-8">
        ... 
   ```
- lưu ý đường dẫn tương đối cho các files asset 
  - sử dụng `/` để trỏ về domain url, 
  - ví dụ `<img src="/img/sample-image.png" alt />` 


#### 3. Dữ liệu của 1 trang 
> Cấu trúc dữ liệu theo layout  của trang. 

#### 3.1. Default fields của trang
- `title` (string):  tiêu đề của mỗi trang, 
    - thiết lập khi tạo ra trang mới
    - cho phép thay đổi sau này
- `slug`:  duy nhất theo từng trang,  sinh ra dựa trên title gõ vào
    - nếu trùng với slug có sẵn, sẽ báo lỗi 
    - không được phép thay đổi
- `layout`: là layout mà trang này sẽ sử dụng
    - users sẽ lựa chọn trong danh sách có sẵn
    - không hiển thị trong phần nhập liệu 
- `date` (datetime): thời điểm trang được tạo ra, thường dùng để sort, sắp xếp thứ tự
    - cho phép điều chỉnh giá trị
- `contents` (string: html): nội dung chính của trang, dùng trong trang chi tiết
    - mặc định là ẩn, cần điều chỉnh để hiển thị trong trang chi tiết
    - trong phần Config, sử dụng tên  `__contents___` để tránh bị trùng lặp
    - binding vào layout của trang chi tiết, sử dụng tên `{{{contents}}}`
    - CKEditor sử dụng để nhập liệu
- `category` (string): lưu id của Danh mục của trang chi tiết
- `tags` (array): danh sách các Chủ Đề của trang chi tiết  

#### 3.2 Các thuộc tính (fields) mới 

- thiết lập theo từng layout để áp dụng chung cho tất cả các trang sử dụng layout này 
- cho phép đổi thuộc tính number, boolean, ….
- đổi sang object, chứa các thuộc tính con bên trong
- đổi sang array, là danh sách object giống nhau
    - mỗi object con này chứa nhiều thuộc tính bên trong 

#### 3.3 Cách binding thuộc tính (fields) vào normal layout

- `{{  }}`: hiển thị giá trị 
    - {{ thuoc-tinh }}  
    - {{ doi-tuong.thuoc-tinh }} :  truy cập thuộc tính của đối tượng 
    - {{ danh-sach.[x] }}  :  x: là phần tử thứ x trong danh sách 
- `{{{ … }}}`: khi giá trị có kí tự đặc biệt, html code
    - {{{contents}}}:   là bài viết chính của trang, dùng CKEditor cho nhập html code
- Sử dụng các lệnh `each`, `with` để truy cập dữ liệu trong đối tượng, danh sách 
    - chi tiết tham khảo [link]()

### Tạo Cây Danh Mục  (Category Tree)
- Tạo cấu trúc, quan hệ Danh Mục Cha - Con (Parent-Children) 
- tạo trang chi tiết cho từng Danh mục
    - Danh mục không có trang chi tiết sẽ không hiển thị 

### Thay đổi layout cho Trang Danh Mục  (Category Pages) 
- Default layout cho trang danh mục, `default.category.html` 
- Hiển thị danh sách cho phép phân trang trong trang danh mục 
    - Điều chỉnh cách sort của danh sách
    - điều chỉnh số lượng từng trang khi phân trang 
- Dữ liệu riêng cho trang Danh Mục (Category Content)
    - Thay đổi trong json format
- Custom layout riêng theo từng Danh Mục
- Hiển thị breadcrumb của danh mục
   
### Thay đổi layout cho Trang Chủ Đề (Tags Pages)
 
- Default layout cho trang Chủ Đề
- Hiển thị danh sách cho phép phân trang trong trang Chủ Đề
    - Điều chỉnh cách sort
    - điều chỉnh số lượng từng trang khi phân trang 
- Dữ liệu riêng theo từng Chủ đề (Tag content)
    - thay đổi dùng json format
- Custom layout riêng theo từng Chủ đề
- hiển thị breadcrumb của chủ đề
- hiển thị tất cả chủ đề đang có

### Sử dụng Partial Layouts

- Extend layout : 
    - `{{{contents}}}` partials





  