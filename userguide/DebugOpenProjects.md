
## Open Projects
- là những dự án open source được chia sẻ công khai trên github.com, hoặc được share giữa các thành viên trên gitlab.com, bitbucket.com. 
- Các dự án này sử dụng git để quản lý thay đổi, cập nhật giữa nhiều thành viên.


## Cách để tìm hiểu nhanh open projects
- tìm hiểu thông tin cơ bản mô tả ở `README.md`
- tìm kiếm để khoanh vùng, giới hạn phạm vi
- đọc thay đổi, `code different` dựa trên lịch sử `commit` của source code
- trao đổi với các thành viên khác

### Thông tin cơ bản, `README.md`
- các giới thiệu cơ bản về dự án
- cách cài đặt, build, run source code
- các frameworks, libraries đang sử dụng
- liên kết tới các tài liệu chi tiết hơn

> Lưu ý: Một số dự án, các thông tin này đã cũ, không còn phù hợp nữa.
- với các projects sử dụng npm, thì có thể xem qua file `packpage.json` để biết thêm các frameworks, libraries thực sự đang sử dụng 
```json
 "dependencies": {
    "bluebird": "^3.4.6",
    "electron": "^1.4.16",
    "electron-shortcut-normalizer": "^1.0.0",
    "fs-extra": "^1.0.0",
    "gray-matter": "^2.1.1",
    "jsftp": "^1.5.4",
    "lodash": "^4.17.4",
    "moment": "^2.18.1",
    "nodemailer": "^2.6.4"
  }
``` 

### Tìm kiếm để khoanh vùng, giới hạn
> dựa vào giao diện vận hành để tìm kiếm các dòng text hiển thị đặc trưng. Bằng kinh nghiệm, lựa chọn
dòng text nằm trong code, thay vì nằm trong database.

> kĩ năng tìm kiếm cần luyện tập, thực hành nhiều.

#### Công cụ tìm kiếm 
- công cụ search trên github.com, [tham khảo](https://help.github.com/articles/searching-code/)
- công cụ trên các Editor, như VS Code, ...

#### Các bước tìm kiếm cơ bản
- Tìm kiếm các "text" đặc trưng trên giao diện
   - kết quả tìm thấy: một số files chứa các text này.
   - lựa chọn các files dạng source, như `.html, .js, .json, .css,...`

- **Thử sai, loại trừ** để tìm ra file chứa source chính xác
   - sửa nội dung text, chạy lại chương trình để xem thay đổi có được cập nhật không
   - nên sửa cùng lúc với các keyword riêng cho từng files, nhìn giao diện thay đổi để biết được chính xác file đã sửa.

- Vọc code trong file source để hiểu hơn cách thức thực hiện
   - tìm hiểu các code gần kề text đã tìm để biết được cơ chế hoạt động

### Dựa trên danh sách Commits
- danh sách `Commits` trên github.com, ví dụ https://github.com/easywebhub/easyapp/commits/master
   - xem chi tiết thay đổi theo files trong mỗi commit, ví dụ [split-view](https://github.com/easywebhub/easyapp/commit/2e76ac31848ef6fa209d4f8d18e013fa00331355?diff=split)
   - cho phép trao đổi trên từng dòng code bằng cách `Comment` và `Mention` 

- xem `Commits` dễ dàng trên local, dùng các phần mêm git client, [list](https://git-scm.com/downloads/guis/), như [SourceTree](https://www.sourcetreeapp.com), GitExtension, ... 

- Tìm kiếm lịch sử thay đổi, `commits` của files chứa source cần tìm hiểu. 
   - ví dụ [HistoryOfREADME.md](https://github.com/easywebhub/easyapp/commits/master/README.md), hoặc xem ở dạng Blame [link](https://github.com/easywebhub/easyapp/blame/master/README.md)
   
