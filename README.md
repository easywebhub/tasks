
### Nguyên tắc chung trong quản lý công việc

1. Công việc phải có mô tả, có trạng thái , và phải có liên kết với Công việc khác
 - Trạng thái được mô tả bởi `Label`
 - Liên kết với công việc khác phải có `Issue Url` của công việc đó

2. Trao đổi được thực hiện qua `Comment` kết hợp với `Code Commit`, Issues đính kèm.

3. Trách nhiệm tạo Công việc cho mình
 - từ yêu cầu do cấp trên **trực tiếp** đưa ra (hoặc đã được phân công)
 - tự đề ra để cải thiện công việc.
 - Không chỉ áp dụng cho cá nhân, mà cho nhóm hoặc tổ chức lớn hơn

2. Yêu cầu được chia nhỏ và giao từ `cấp trên` xuống `cấp dưới` . 

4. Báo cáo Công Việc sẽ cập nhật từ `cấp dưới`, đánh giá, tổng hợp và thông báo lên `cấp trên`.

# General Information for EasyWeb system
### EasyWeb MicroServices

#### EasyWeb API: `api.easywebhub.com`
> Cung cấp microservices API cho EasyBuilder and AdminCenter

- ~~VPS: 104.140.14.140   Win 2012: 2GB RAM US location (fair)~~
- VPS: 107.175.56.236   win 2012 4GB RAM  US location  
- Couchbase VPS:  104.168.94.152 Ubuntu 14: 8GB RAM US (fair)

### EasyWeb AdminCenter `easyadmincp.com`
- US location 107.175.56.236 win 2012 4GB RAM
- same with `api.easywebhub.com`

### EasyWeb Website Servers

> Git và Production VPS nên nằm riêng ở 2 VPS khác nhau, nhưng cùng chung 1 Datacenter. 
Hiện tại Gogs Git nằm ở Vurlt Singapore, cần thống nhất PushToDeploy VPS luôn.

#### Git Servers:  (Gogs git) `source.easywebhub.com`
> Git servers cần có SSD (HDD) lớn và mở rộng dễ dàng. CPU ko cần nhiều

- Paris: Gogs Ubuntu 14: ARM 2G RAM, 50SSD, 212.47.253.180

#### Production Servers
> Production dùng để pull source từ Git, sau đó push lên `github` hoặc sử dụng như server triển khai
website thực tế luôn.

> Production servers cần có SSD (HDD) lớn và mở rộng dễ dàng. Tương ứng với Git servers

- Cập nhật thông tin

### Sơ đồ chung

![](https://github.com/easywebhub/easyapp/blob/semantic-ui/documents/EasyWeb%20Components.png?raw=true)
