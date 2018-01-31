

## Build servers

### API Backends
> Loopback 3 using nodejs

1. tạo ra folder riêng dựa vào `websiteName` và `userName`
    - e.g: `websiteName.userName` 

1. trong folder này, tạo ra file cấu hình, `easyweb.json`, cho 4 đối tượng chính 
    - `040`: source
    - `042`: build (website)
    - `030`: api (loopback)
    - `012`: admin (easyCMS)

1. các tham số cho config 1 đối tượng, tham khảo [link](https://github.com/easywebhub/git-hook-listener/blob/master/README.md#repository)

    * [status](#):  `xxx_CREATED | PROGRESS | DONE | ...` trạng thái hiện tại của đối tượng, `xxx` là hành động
    * [repoUrl](#):  Url git repository sẽ pull hiện tại chỉ hỗ trợ http(s) url có username và password đi kèm (required)
    * [branch](#):  Tên branch của webhook event mặc định là `master` (required)
    * [cloneBranch](#):  Tên branch app sẽ clone `repoUrl` về local mặc định là sẽ bằng giá trị của `branch` option (optional)
    * [args](#):  Các tham số truyền thêm cho lệnh `git clone` ví dụ `--depth=1`,  `--single-branch` (optional)
    * [then](#action):  Mảng các lệnh sẽ chạy sau khi git clone hoặc pull xong (optional) 


1. kích hoạt Scripts bên dưới để thực hiện

### Scripts 
> 1 script chính kiểm soát các scripts chi tiết theo thứ tự

- script chính có  thể chạy nhiều lần, dựa vào `status` để tiếp tục từ các bước trước đó

#### Source & build 
> các script chạy theo thứ tự, mỗi bước cần cập nhật vào `status` trong config

> thành công bước trước, mới tiếp tục bước sau

> chung thư mục con  `/front` : source, `/front/build` : build

1. `105` : git clone source
    - ví dụ kết thúc thành công `status` : **105_DONE**
1. `106` : git clone source
    - ví dụ kết thúc thành công `status` : **106_DONE**

1. `420`: các lệnh cài đặt sau khi clone, được thiết lập trong `then` của `easyweb.json -> source : {}`

    - kết thúc, change `status`: **420_DONE**
1. `42`: tạo `042` (website) trực tiếp từ source, và có thể tạo commit mới

1. `22` : đồng bộ `042` lên `021`
    - merge OK (xử lý confict ổn) : status : **22_DONE**

    
#### API backend
> phải nằm chung build server với Source và build

> thư mục con `/api`

- `141` : git clone từ api source
- `142` : chạy các lệnh cài đặt, chạy
    - ví dụ `npm install`, 
    - `node .` : chạy api backend
    - được thiết lập trong `then` của `easyweb.json -> api : {}`

#### Admin CMS (tùy chọn)
> cho phép nằm ở server khác (hoặc github.com) và trỏ tới api backend

> thư mục con `/admin` 

- 


### Test Data

- config mẫu

```
easyweb.json
{
    "userName" : "user01",
    "websiteName" : "web01",    
    "source" : { 
        "status" : "CREATED",
        "repoUrl": "https://:user:pass@github.com/nemesisqp/test-gh2.git",
        "branch": "master",
        "cloneBranch": "master",
        "path": "front",
        "args": [],
        "then": [
            {
            "command": "npm install",
            "args": [
                "aa"
            ],
            "options": {}
            }
        ]
    },
    "build" : { 
        "status" : "CREATED",
        "repoUrl": "https://:user:pass@github.com/nemesisqp/test-gh2.git",
        "branch": "gh-pages",
        "cloneBranch": "gh-pages",
        "path": "front/build",
        "args": [],
        "then": [
            {
            "command": "git",
            "args": [
                "aa"
            ],
            "options": {}
            }
        ]
    }
    "api" : {
        "status" : "CREATED",
        "repoUrl": "https://:user:pass@github.com/nemesisqp/test-gh2.git",
        "branch": "master",
        "cloneBranch": "master",
        "path": "api",
        "args": [],
        "then": [
            {
            "command": "npm install",
            "args": [
                "aa"
            ],
            "options": {}
            }, {
            "command": "node .",
            "args": [
                "aa"
            ],
            "options": {}
            }
        ]
    },
    "admin" : {

    }
}
```

- thư mục tạo ra

```
/web01.user01
    |__ easyweb.json
    |__ /front/.git
        |__ ...
        |__build/.git
            |__ ...
    |__ /api/.git
        |__ ...
    |__ /admin/.git
        |__ ...

    |__ main_script.sh
    |__ *.sh (scripts)
|    
/web02.user01    
    |__ .. 

```