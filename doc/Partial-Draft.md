

### Tính năng
- Hiển thị trang tại local, hoặc trên trang demo, nhưng không hiển thị, mà chuyển thành 404 Not Found khi triển khai lên Production

### Thiết lập
- End-users chỉ cần thiết lập True/False cho thuộc tính `draft` trên 1 trang cụ thể
- Developers cần thêm tính năng này 
   - field `draft` mặc định bị ẩn, hãy thiết lập trong Config để hiển thị 
   - nếu chưa có Partial này, thì sử dụng Script code bên dưới để tạo mới
   - Sử dụng F1 để insert `:Partial]` hoặc thêm bằng handlebars code `{{> partial-draft }}` vào layout trang web muốn áp dụng
### Cơ chế xử lý
- nếu `draft` = true, thì thêm đoạn script vào trong trang web
- script sẽ kiểm tra current url để hiển thị bình thường hoặc chuyển sang trang 404 Not Found
- cần điền thông tin demo Url vào field `demoUrl` trong Meta Global

### Partial Draft Code

```javascript
{{#if draft}}
<script type="text/javascript">
    var is404 = false;
    var demoUrl = document.createElement('a');
    demoUrl.href = '{{global.demoUrl}}';

    if (draft === true && 
        location.hostname !== 'localhost' && 
        location.hostname !== '127.0.0.1' && 
        location.hostname !== demoUrl.hostname) 
    {
        is404 = true;
    }

    if (is404) {
        window.location.replace('/404');
    }
</script>
{{/if}}
``` 