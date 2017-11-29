# 101: StaffAdminCP sử dụng EasyBuilder

## Tóm lượt

### Xây dựng giao diện trang StaffAdminCP
> EasyBuilder, HTML admin themes, *.schema.json

- Kế thừa:
    - data `*.md` files
    - *.schema.json 
    - *.html layout files (empty)

- html admin files
    - thiết lập databinding sử dụng VueJS
    - data: sinh ra bởi `handlebar query`

### ExpressJS tích hợp với api backend    
- thiết lập router 
- Áp dụng Vue và API backend
    - thay thế phần `handlebarJS query` thành các api backend
    - bổ sung api cho `submit` function


### Vuejs with HTML admin themes

- Input forms
- Table 
- Dùng chung theo css framework
    - bootstrap
    - semantic ui
    - framework 7 

### Công cụ đang có

- Dữ liệu : phần content của easyweb
    - `*.md` files: dữ liệu chi tiết từng trang
    - `*.category.json` dữ liệu chuyên mục


- Layouts: sử dụng EasyBuilder & HandlebarJS
    - phân chia partial


- ExpressJS | NodeJS: tính năng của Web server
    - hỗ trợ template engine: có `handelbarjs` và `pug | ...`
    - router: authentication | security
    - tương tác với các files dễ dàng


### StaffAdminCP: tính năng cơ bản

#### Trang chi tiết: HTML pages trả về cho Client

- Cấu trúc: 
    - layout binding với json data 
    - json data dùng để submit lên api 

```html 
<div id="inputForm">
    <input type="text" v-model="title" >
    <label v-html="slug" >
    <button v-on:click="post" class="btn btn-primary">Submit</button> 
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script> <!-- include vuejs lib -->

<script>
    //lấy dữ liệu dùng handlebar query 
    var page = {
        title: '{{title}}',
        slug: '{{slug}}',
        category: '{{category}}'
    };

    var AllCategory = [] //'{{#each AllCategory.children}} {{displayName}} {{/each}}';

    var app = new Vue({
        el: '#inputForm',
        data: {
            item: page,
            AllCategory: AllCategory
        },
        methods: {
            post: function () {
                console.log('input data is: ', this.item);
                //call API here
            }
        }
    })
</script>
```
- Hướng mở rộng:
    1. sử dụng trực tiếp dữ liệu .md files khi phát triển website
    1. thay thế bằng API backend khi triển khai thực tế

- Form nhập liệu:
    - input UI tùy theo định nghĩa nhập liệu: upload files, boolean checkbox, ...
    - kết nối với các Danh Mục khác:
        - thông qua API call (có thể sinh ra sẵn)
        - lúc DEV | TEST thì sinh ra tĩnh sử dụng lệnh Handlebar
    - Submit dữ liệu thông qua API | upload file services

- Trang Danh sách :
    - danh sách đối tượng cho phép phân trang 
    - hỗ trợ filter | Search qua api 


- Phân quyền truy cập
    - login | logout pages
    - 404 pages 
    - menu hiển thị dựa trên phân quyền


     
### Lý do chọn static generating 

#### Đáp ứng yêu cầu thực tế
1. complex input forms, ko dùng auto generate
1. inline edit
1. layouts tùy biến sử dụng easybuilder

#### Tối ưu quy trình phát triển:
- Ưu điểm của EasyBuilder 
- Json Schema | fake jsonData: kế thừa từ dữ liệu websites có sẵn
- Handlebar query để hiển thị nhanh chóng
