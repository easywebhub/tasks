

### Overview
> Xem hình tổng quan

- ![flow](DeploymentWorkflow.png)

## Giải thích

### Script tự động
- là số màu đỏ 
- Thiết lập website mới: 3 chữ số bắt đầu bởi 1
- Website vận hành: 2 chữ số 
- Chuyển đổi giữa các hình thực triển khai 

### 3 đối tượng khách hàng
- Free EasyWeb cloud miễn phí 
- Premium EasyWeb: dịch vụ cloud tính phí
- EasyWeb OnPremise: triển khai trên server khách hàng

### 3 hình thức triển khai
- EasyBuider: Phần mềm trên máy tính cá nhân
- EasyCMS: web page chung cho tất cả account EasyWeb
- CustomerCMS: cms riêng cho từng khách hàng

### Câu hỏi để hiểu về DeploymentWorkflow

#### Phần Synchronization
- EasyBuilder (bước 20, 21) 
	+ SourceCode (011) là gì? 
	+ SourceCode (020) là gì? 
	+ Account git để pull , push source-code. 
	+ Bước git push (011) có khả năng bị conflict code không? 
	
- EasyCMS:
	+ bước 30 gọi api ?
	+ Bước 32 write md, json, html ? để làm gì?
	+ Không thể hiểu bước 020, 040, 041 ?

- Generating
	+ Bước 14: source code lấy ở đâu ra? các lệnh hướng build source code.
	+ Bước 42, 43: generating, watch metasmith là gì?

#### Phần Initilization
	+ Template Git : là gì? dùng để lấy source code . Cho ví dụ ?
	+ Bước thứ 102 là bước chạy các lệnh build source để start website easyweb?
	+ EasyBuilder là dạng phần mềm kiểu winform hay dạng trang web chạy trên máy cá nhân?
	+ Bước 121: là chạy cái gì? gọi api hay gọi webform? để làm gì?
	+ Template Docker loopback? Là gì?
	+ Api loopback là gì?
	+ Bước 122 là gì?
	
#### Phần workflow deployment? Giải thích cụ thể hơn về luồng của deployment.


    
    
