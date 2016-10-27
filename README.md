# General Information for EasyWeb system
### EasyWeb MicroServices

#### EasyWeb API: http://api.easywebhub.com
> Cung cấp microservices API cho EasyBuilder and AdminCenter

- VPS: 104.140.14.140   Win 2012: 2GB RAM US location (fair)
- Couchbase VPS:  104.168.94.152 Ubuntu 14: 8GB RAM US (fair)

### EasyWeb AdminCenter
- Hiện tại: easyadmincp.com  => 104.140.14.140
- VPS: Singapore: Centos 7 x64: 1GB RAM: 45.76.150.222  (good)
- Test VPS: 
   centos 7: 2GB: 104.140.15.38 

### EasyWeb Website Servers

> Git và Production VPS nên nằm riêng ở 2 VPS khác nhau, nhưng cùng chung 1 Datacenter. 
Hiện tại Gogs Git nằm ở Vurlt Singapore, cần thống nhất PushToDeploy VPS luôn.

#### Git Servers: git.easywebhub.com (Gogs git)
> Git servers cần có SSD (HDD) lớn và mở rộng dễ dàng. CPU ko cần nhiều

- VPS: Singapore: Centos 7 x64: 1GB RAM: 45.76.150.222 

#### Production Servers
> Production dùng để pull source từ Git, sau đó push lên `github` hoặc sử dụng như server triển khai
website thực tế luôn.

> Production servers cần có SSD (HDD) lớn và mở rộng dễ dàng. Tương ứng với Git servers

- Cập nhật thông tin

### Sơ đồ chung

![](https://github.com/easywebhub/easyapp/blob/semantic-ui/documents/EasyWeb%20Components.png?raw=true)
