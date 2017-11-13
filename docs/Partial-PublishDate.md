

### Tính năng
- public trang website sau 1 thời điểm xác định trước

### Thiết lập
- End-users chỉ cần thiết lập ngày giờ sẽ trang web sẽ public cho thuộc tính `publishDate`
- Developers cần thêm tính năng này 
   - field `publishDate` mặc định bị ẩn, hãy thiết lập trong Config để hiển thị 
   - nếu chưa có Partial này, thì sử dụng Script code bên dưới để tạo mới
   - Sử dụng F1 để insert `:Partial]` hoặc thêm bằng handlebars code `{{> partial-publishDate }}` vào layout trang web muốn áp dụng
   
### Cơ chế xử lý
- nếu `publishDate` khác rỗng, thì thêm đoạn script vào trong trang web
- script sẽ kiểm tra current url để hiển thị bình thường hoặc chuyển sang trang 404 Not Found
- cần điền thông tin demo Url vào field `demoUrl` trong Meta Global

### Script Code

```javascript
{{#if publishDate}}
<script>
    var now = new Date();
    var is404 = false;
    var publishDate = new Date('{{publishDate}}');
    var isValidDate = !isNaN(publishDate.getTime());
    if (isValidDate && publishDate >= now)
        is404 = true;

    if (is404) {
        window.location.replace('/404');
    }
</script>
{{/if}}
``` 