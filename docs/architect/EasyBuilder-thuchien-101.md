# 101: StaffAdminCP sử dụng EasyBuilder


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

#### Trang chi tiết:

- Form nhập liệu:
    - input UI tùy theo định nghĩa nhập liệu: upload files, boolean checkbox, ...
    - kết nối với các đối tượng Danh Mục khác: thông qua API call (có thể sinh ra sẵn)

    - Submit dữ liệu thông qua API | upload file services

- Cấu trúc: HTML pages trả về client 
    - layout binding với json data 
    - json data dùng để submit lên api 

```
<body>
    <div>
        //2way-data binding tại đây

        <button submit="save()">        
    </div>

    <script>
        var model = data //binding với layout bên trên

        activate = function{
            model.category  = api.call()    
        }
        save = function() {
            post (data)    {
            }
        }

    </script>
</body>
```

- Trang Danh sách :
    - danh sách đối tượng cho phép phân trang 
    - hỗ trợ filter | Search qua api 


- Phân quyền truy cập
    - login | logout pages
    - 404 pages 
    - menu hiển thị dựa trên phân quyền


     


        