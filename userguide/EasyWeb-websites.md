
### Cấu trúc Website cơ bản
> tham khảo ở [Website Skeleton](https://github.com/easywebhub/easymarket/blob/master/README.md)

> 2 phần chính của websites là `Layout` và `Content`

- Layout: (`/layout/*.html`) là giao diện cho từng trang của website
   - mỗi trang website phải thuộc 1 layout cụ thể
   - những phần dùng chung giữa các layouts được gọi là Partial (`/layout/partial/*.html`)
   - có thêm Category layouts (`/layout/default.category.html`) và Tags layouts để làm giao diện riêng cho các trang Categories hoặc Tags
   - chứa `html, css, js` code nên phù hợp với lập trình viên

- Content: chứa thông tin của websites gồm 2 loại: Page và Meta
   - Page: (`/content/*.md`) thông tin thuộc 1 trang cụ thể
   - Meta: (`/content/metadata/*.json`) thông tin chung có thể sử dụng ở nhiều trang hoặc trên tất cả các trang của websites
   - để điều chỉnh, thay đổi nội dung trên web, người dùng sử dụng Công cụ nhập liệu (dạng Form, Inline Editor) đơn giản

- Lưu ý: Những phần cho phép điều chỉnh phải nằm trên `Content`, không được nằm ở `Layout` 


### OnePage Website
> Là trang website chỉ có 1 trang duy nhất, ví dụ [startbootstrap-creative](https://blackrockdigital.github.io/startbootstrap-creative/) 

- có menu nhưng các phần trên menu vẫn nằm trên chính trang đó
- không cần sử dụng Partial layouts như footer, header, ... vì chỉ có 1 layout

- Binding dữ liệu giữa Content và Layout : [expressions](http://handlebarsjs.com/expressions.html)

### SinglePage Website 
> phức tạp hơn OnePage, gồm nhiều trang, mỗi trang có 1 layout riêng

- có phần  dùng chung giữa các trang này
   - footer, header, ... nằm trong các Partial layouts tương ứng
   - Tham khảo Partial của handlebar [partials](http://handlebarsjs.com/partials.html)
   

- dữ liệu dùng chung nằm 
   - trong Global Meta `/metadata/global.json` 
   - nếu phức tạp thì nằm trong Meta riêng `/metadata/file-name.json`
   - cú pháp binding:  `{{meta-file-name.field-path}}`, ví dụ `{{global.title}}` 

### MultiplePage Website
> phức tạp hơn SinglePage websites, gồm nhiều trang sử dụng chung 1 layout, như trang bài viết chi tiết, trang sản phẩm chi tiết, ...

- trang chi tiết, ví dụ
   - bài viết chi tiết, http://vnexpress.net/tin-tuc/thoi-su/thai-binh-xay-thap-bieu-tuong-300-ty-dong-3579568.html
   - sản phẩm chi tiết https://vienthonga.vn/iphone-7-plus-128gb-red.html
   - bài viết  thuộc 1 danh mục (category) duy nhất  nhưng có thể thuộc nhiều chủ đề (tags) khác nhau
- Các trang dùng chung 1 layout sẽ được tóm lượt trong trang Danh mục (Category Page) và được sắp xếp theo thứ tự: mới cập nhật, ...
   - danh mục tin tức: http://vnexpress.net/tin-tuc/thoi-su
   - danh mục sản phẩm: https://vienthonga.vn/dien-thoai-smartphones/apple-iphone
   - có mối quan hệ thứ tự cha-con (`category.sub-category`)
   
- Trường hợp trang Danh mục có nhiều trang chi tiết, thì sẽ cần Phân Trang (Pagination) thành từng page 
   - xem phân trang dưới cùng http://vnexpress.net/tin-tuc/thoi-su
   
- Các trang chi tiết có thể được phân chia theo nhiều chủ đề (Tags) khác nhau của trang web
   - các chủ đề là đồng đẳng, không có quan hệ cha-con
    
- Các trang có cùng chung 1 chủ đề, sẽ thuộc trang Chủ đề (Tags Page) riêng và được sắp xếp theo thứ tự, cũng như được Phân Trang tương tự trang Danh Mục (Category)

- Các trang Danh Muc, hoặc Chủ đề có thể có giao diện riêng, bằng cách sử dụng Category, Tags Layouts tương ứng.

## Cấu trúc dữ liệu Content

### Dữ liệu của Page
> tham khao chi tiet tai [EasyWeb-ContentOfPage](/EasyWeb-ContentofPage.md)

#### Dữ liệu mặc định của Page
```json 
    "slug" : "xxx",   
    "title" : "title of this page",
    "layout" : "",   
    "category" : "",  
    "tag" : [],   
    "date" : "create-of-time",    
    
    //page defined fields
    "__content__" : "main content for detail page"
```

#### Các loại cấu trúc dữ liệu
- `title`: tiêu đề của một trang 
- `slug`: id của trang, không dấu, sinh ra tự động từ `title`, sử dụng để tạo url theo dạng  `http://your-domain.com/slug-value`
- `category`:  dropdown box, users lựa chọn
   - giá trị là  `category.sub-category.sub-sub-cate`
   - mối quan hệ sử dụng dấu `.` để tách biệt
- `tags` :  multiple checkbox, cho users chọn
   - default là array rỗng `[]`
- `__content__`: mặc định không hiển thị, chứa nội dung chính của trang chi tiết, như bài viết 
- fields :  `tittle`, `slug`, `layout`, ...
   - `{{title}}`
   
- objects : biến chứa nhiều fields, hoặc objects bên trong:  

   - binding theo đường dẫn  `{{object-path.field-name}}`
   - hoặc binding fields trong một object cụ thể 
   ``` 
   {{#with object-name}}
      {{@key}} : {{field-name}}
   {{/with}}
   ```
- array: biến chứa danh sách đối tượng giống nhau
   - lặp các phần từ trong array
   ```
   <ul>
    {{#each array-item}}
       <li> {{@index}} : {{this}} </li>
    {{/each}}
   </ul>
   ``` 
   - sử dụng `@first`, `@last` cho phần tử đầu tiên hoặc cuối cùng trong 
   ```
    {{#each array-item}}
       {{#if @first}}
         {{field-of-1st-item}}
       {{/if}}
    {{/each}}
    ``` 
> Tham khảo cú pháp chi tiết của [Handlebars](http://handlebarsjs.com/builtin_helpers.html)
  
### Dữ liệu của trang Danh Mục (Category)

> chi tiết tham khảo [Category](/EasyWeb-Category.md)

- mặc định có `default` (root) Category, được truy cập qua biến `AllCategory` 
- mỗi quan hệ (cha-con) trong category định nghĩa theo cú pháp `sub-cate.parent-category` 
- fields mặc định của mỗi category

### Dữ liệu của trang Chủ Đề (Tags)
> nằm trong biến `AllTags`
