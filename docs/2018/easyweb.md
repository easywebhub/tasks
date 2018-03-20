
## EasyWeb: (1-1-1)

- 1 website (UserFront): dành cho người xem thông tin
    - source: `011, 020, 040, 041`
    - build : `014, 021, 042, 051, 052, 053`

- 1 apibackend (ApiBackend): `030, 031`
- 1 admincp (StaffAdmin) `012, 013` : dành cho nhân viên quản trị và cần đăng nhập

- tùy theo môi trường triển khai mà có sự khác biệt

### Máy cá nhân 
> Sử dụng phần mềm EasyBuilder 

- chỉ gồm website UserFront
    - gồm source, `011`, 
    - website `014`
- đóng 1 phần vai trò của admincp
- không có apibackend 

- Dành cho lập trình viên 
    - xây dựng website trên giao diện (HTML, CSS, ...) có sẵn
    - điều chỉnh, bổ sung giao diện hiện có
    - định nghĩa cấu trúc dữ liệu mà users sẽ nhập 

- Dành cho nhập liệu ban đầu 

- Các phần này có thể thực hiện trên AdminCP 
    - tốc độ và tương tác sẽ không bằng máy cá nhân

### Build servers








