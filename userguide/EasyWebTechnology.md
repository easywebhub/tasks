
## Các công nghệ đã lựa chọn và đang sử dụng 
> Bao gồm 3 phần lớn: Prototype, Front-end Web, Backend API sử dụng xây dựng website hướng tới 2 đối tượng chính:
- Web Front: là website hướng tới người dùng cuối (end-users), ví dụ website công ty, trang blog, trang ecommerce,...
- Web Admin: còn gọi là ứng dụng web, hướng tới ngườtysử dụng là nhân viên nội bộ của công ty (internal users), hoặc nhân viên đối tác để quản lý vận hành các hoạt động của công ty 

- Xây dựng hệ thống gồm các giai đoạn sau: 
  1. thu thập yêu cầu, phác thảo mockup 
  2. xây dựng Prototype cho yêu cầu
  3. chuyển đổi Prototype thành Front-end Webs 
  4. Xây dựng Backend API 
  5. Tích hợp Front-end và Backend thành hệ thống hoàn chỉnh 

### Prototype: 
> là giao diện hệ thống giống thực tế cho phép người dùng tương tác, sửthống cơ bản với các dữ liệu mẫu

- chủ yếu là code html, css 
- sử dụng [HandlebarJS](http://handlebarsjs.com),  để cấu trúc layouts
   - layout cho từng trang 
   - partial layout cho phần dùng chung 

- [Metalsmith](http://www.metalsmith.io) 
   - định nghĩa dữ liệu trong file .md
   - binding dữ liệu vào layout 

- kế thừa các template có sẵn, ví dụ [PagesAdmin](http://preview.themeforest.net/item/pages-admin-dashboard-template-web-app/full_screen_preview/9694847?_ga=2.56625578.1422652329.1494831637-1025025626.1494493651) hoặc lập trình layout dựa trên thiết kế Photoshop, ...
   - mức cơ bản: cắt html, css
   - mức nâng cao: lập trìnhtrình sass, less, ... 
### Dự án đã thực hiện:

- Web Front dự án [Medihub](http://medihub-forum.vinaas.com)
   - sử dụng metalsmith, handlebars, và thiết kế từ đầu dựa trên tham khảo một số theme 
   - source code [link](https://github.com/vinaas/medihub-forum)

- Web Admin: dự án [Kieu-hoi](https://vinaas.github.io/admin-page-template/doitac.html) 
   - sử dụng metalsmith, handlebars, và dùng Pages Admin themes mua từ themeforest
   - source code [link](https://github.com/vinaas/admin-page-template)
   
### Front-end web
> hoạt động trên môi trường Client (Browsers, Software, Mobile App) 
> kế thừa các kết quả từ Prototype bên trên 

- nền Web: sử dụng các framework SPA, hoạt động trên Browsers Chrome, Firefox, ... cho các mục đích
   - web front: sử dụng [VueJS](http://handlebarsjs.com)
   - web admin: sử dụng [Aurelia](http://aurelia.io) ,
   - hoạt động trên tablets, smartphones 

- Software: 
   - Electron: hoạt động trên nhiều nền tảng Win, Linux, Mac OS
   - kết hợp với nền web để kế thừa tính năng đang có 

- mobileapp: cho phép kế thừa, mở rộng từ web front 

#### Dự án đã thực hiện 
- Web Front: thường cũng chính là Prototype  
   - website Daksong: http://daksong.daknong.gov.vn, source: 

- Web Admin: [kieu-hoi](http://kieuhoi.vinaas.com)
   - source, ẩn trên gitlab.com 
- Software: [EasyQuiz]
   - source code (https://github.com/vinaas/easyquiztest)
   - cài đặt: build từ source code theo hướng dẫn
 
### Back-end API
> cung cấp tính năng, dữ liệu để Front-end sử dụng 



