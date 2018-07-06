
## Sử dụng EasyBuilder để deploy nhanh Aurelia lên github.com


### Các bước thực hiện
1. tạo website mới trên easybuilder
    - vào thư mục `/sites/{websiteName}/build`, xem file CNAME chưa link demo

2. copy `/build` vào source của Aurelia
    - vào thư mục `/ewbuild` để tránh trùng với `build` có sẵn

3. cập nhật bản build mới của aurelia
    - kết quả build của Aurelia lưu vào `/dist`
    - copy `/dist/*.*` bỏ vào `/ewbuild`

4. Deploy
    - sử dụng `git push` hoặc gui GUI tùy ý
    - `username`, `password` đã lưu sẵn trong `/build/.git` 
    
### Lưu ý:
- có thể áp dụng cho bất cứ build tĩnh nào
    - web page tĩnh
    - web spa tĩnh 

### Ưu điểm EasyBuilder

- thiết lập sẵn free domain  `websiteName.userName.easywebhub.me`
    - demo link dễ dàng chia sẻ, preview
    - dễ dàng chuyển sang domain thực khi cần

- triển khai dễ dàng bằng git
    - button `Sync` hoặc `Deploy` trực quan, deploy nhanh chóng
    - sử dụng `git push` để sync code, hoặc deploy trong thư mục `/build`

- lưu trữ code nhanh chóng
    - source lưu trên server của vinaas:  `sourcecode.easywebhub.com`
    - bản build lưu trên github.com, branch `gh-pages
