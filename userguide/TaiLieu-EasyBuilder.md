Tài liệu hướng dẫn sử dụng EasyBuilder trực quan, dễ hiểu và dễ thực hành.

### Hướng dẫn tốt nên là

- video (ưu tiên hình gif) minh hoạ ngắn gọn, dễ hiểu 
- chi tiết từng bước với ví dụ thực tế + source code
- link tham khảo, mở rộng 

### Tính năng cần làm hướng dẫn
#### 1. [ ] Tạo mới một trang từ themes có sẵn, không bị lỗi css, js 
- [ ] edit layout có sẵn như index.html, hoặc tạo layout mới,
   - dựa trên html source (page source) của theme có sẵn
   - [ ] tạo page với layout vừa tạo
- [ ] bổ sung assets files mà theme đang sử dụng, như css, js, ... 
   - copy vào phần Asset của website 
   - [ ] điều chỉnh đường dẫn để trang hiển thị đúng layout 

#### 2. [ ] tách dữ liệu ra khỏi layout để users co thể điều chỉnh 
- [ ] tạo biến trong Config
   - sử dụng F2 để tạo biến nhanh trong phần layout 
- [ ] binding biến vừa tạo vào trong layout
   - [ ] sử dụng F1 để tìm kiếm với prefix `:DATA` và insert nhanh 

- [ ] config biến để hiển thị input phù hợp, 
   - [ ] ví dụ datetime picker, upload form, true/false, ...
   - [ ] đổi sang object và định nghĩa các thuộc tính bên trong 

#### 3. [ ] tạo partial các phần dùng chung giữa các trang
- [ ] partial cho header, footer, nav-bar, ...
   - [ ] dùng F3 để tạo nhanh partial 
   - [ ] dùng F1 để insert nhanh partial có sẵn `:Partial` 

- [ ] extend partial có sẵn, ví dụ `partial/default.html`
     
   - khai báo block tên "main" sẽ mở rộng trong default.html `{{#block "main"}} {{{contents}}} {{/block}}`
   - kế thừa trong layout với cú pháp 
```
{{#extend "body"}} 
  {{#content "main"}} 
    ... 
  {{/content}}
{{/extend}}
```
- [ ] tạo biến global trong phần meta và binding và partial
   - [ ] dùng F1 để insert nhanh biến global `:Meta` 


#### 4. Danh Mục (Category)
> tham khảo  [Category](/EasyWeb-Category.md)

- [ ] tạo Danh mục (category)
   - [ ] tạo category và sub-category
   - [ ] layout mặc định của trang danh mục `default.category.html` 
  

- [ ] hiển thị trang danh mục
   - [ ] hiển thị danh sách bài viết cùng 1 category
   - [ ] hiển thị phần phân trang 
   - [ ] tạo layout mới cho trang danh mục
   - [ ] cấu hình cho category sử dụng layout mới
  
### Tham khảo thêm
- Danh sách tính năng https://github.com/easywebhub/tasks/blob/master/doc/EasyBuilder.md
- [Category](/EasyWeb-Category.md)
- 