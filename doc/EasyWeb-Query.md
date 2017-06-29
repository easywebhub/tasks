
### Câu lệnh thường sử dụng
> cấu trúc bắt đầu băng `{{#  }}` và kết thúc bằng `{{/ }}`

- `if` : Câu điều kiện if 
```js
{{#if thuoc-tinh }} 
    ...
{{else}}  
    ... 
{{/if}}
```

- `with` : Câu lệnh lấy từng thuộc tính (fields) của 1 đối tượng (object)
```js
{{#with object }}
   {{field-of-object}}
   {{this}} 
{{/with}} 
```

- `each`: Câu lệnh lặp từng phần tử trong danh sách 
    - `@key` chỉ thứ tự mỗi phần tử trong danh sách, từ 0 tới phần tử cuối cùng
    - `@first` phần tử đầu tiên
    - `@last` phần tử cuối cùng trong danh sách 

```js 
{{#each danh-sach }} 
   {{@key}}  
   {{#if @first}} 
      ...
   {{/if}} 
{{/each }} 
``` 
- `first` , `last` : lấy danh sách phần tử đầu, hoặc cuối cùng của danh sách, thường kết hợp với `each`
   - lặp 2 phần tử đầu tiên trong danh sách 
    ```js
    {{#each (first danh-sach 2) }}
        ... 
    {{/each}} 
    ``` 

- `lt` : bé hơn, `gt`: lớn hơn, `is`: giống nhau  
   - kiểm tra giá trị bé hơn 2,  
   ```js
     {{#lt gia-tri-so 2}}
     {{/lt}} 
   ```
- `moment` hiển thị thời gian theo cấu trúc, ngôn ngữ 
   - `lang`: ngôn ngữ,  `vi` việt nam, `en` tiếng anh 
   - `format="   " `   : cấu trúc hiển thị    
   - ví dụ: hiển thị format theo tiếng việt,  `thứ ba, 27 06 2017 22:01` 
   ```js 
      {{moment date lang="vi" format="dddd, DD MM YYYY HH:mm"}}
   ```

- `../` để lấy biến bên ngoài 1 cấp, ví dụ vòng lặp (`each`), hoặc (`with`)
   - ví dụ 
    ```js 
    {{AllCategory.children}}   //Notes:  truy cap AllCategory, lấy danh sách children 
    {{#each ...}}
        {{../AllCategory.children}}  //Notes: dùng 1 lần  `../` để truy cập AllCategory 
        {{#with ...}}
            {{../../AllCategory.children}}  //Notes: dùng 2 lần `../`  để truy cập AllCategory 
        {{/each}}
    {{/each}} 
    ```

### Biến toàn cục, cho phép truy cập trong mọi trang 

- `AllCategory` : chứa Danh Mục root trên cùng chưa toàn bộ Danh Mục bên trong 
- `AllTags`:  chứa danh sách Chủ đề đang có của website 


- `(lookupCategory  AllCategory param-1  param-2)` : tìm Danh mục của website
   - `param-1`: tên của Danh mục cần tìm, ví dụ `thoi-su`, hoặc thuộc tính `category` nếu ở 
   - `param-2` (tuỳ chọn): tên của thuộc tính của danh mục,  
      - `children` : danh sách Danh Mục con 
      - `files` : danh sách trang thuộc danh mục này
      - `href` : đường dẫn của trang Danh Mục này
      - `displayName` tên hiển thị của danh mục này 

### Một số trường hợp thông dụng 
- ví dụ: kiểm tra và hiển thị hình ảnh 
```js 
{{#if anh-dai-dien}} //Notes: nếu ảnh đại diện (anh-dai-dien) được nhập vào, thì hiển thị ra
    <img src="{{anh-dai-dien}}" alt="{{ghi-chu-anh-dai-dien}}"/>
{{else}}  //Notes: nếu không nhập, hiển thị hình mặc định 
    <img src="https://easywebhub.com//img/no-available-image.png" alt="no image available"/>
{{/if}}
```

#### Hiển thị tên Danh Mục của 1 trang chi tiết 
- Lấy tên đầy đủ `displayName` của Danh Mục của 1 trang  
   - `href` : đường dẫn của Danh Mục
   - `displayName`: tên đầy đủ của Danh Mục 

```js 
{{#with (lookupCategory AllCategory category)}}
    <a class="tip" href="/{{href}}">{{displayName}}</a>
{{/with}}
```

#### Hiển thị các bài viết mới nhất trong Trang Chủ 
  - Lấy 6 bài viết mới nhất của website 
  - 2 bài đầu tiên hiển thị kiểu nổi bật
  - 4 bài còn lại hiển thị ít nổi bật hơn 
  
```js     
{{#each (first AllCategory.files 6)}}
{{#lt @key 2}}
    <div class="block-top block-top-4">
      //Notes: hiển thị hai bài viết đầu tiên
    </div>
{{else}}
    <div class="block-top block-top-3">
       //Notes:  hiển thị 4 bài viết tiếp theo 
    </div>
{{/lt}}
{{/each}}
```

#### Danh sách Danh Mục đang có của website 

- hiển thị Danh Mục cấp 1 
```js 
<ul> 
{{#each AllCategory.children }}
   <li><a href="/{{href}}" title="{{displayName}}">{{displayName}}</a></li>
{{/each}}   
</ul>     
```
- hiển thị Danh Mục cấp 1 và cấp 2
```js 
{{#each AllCategory.children }}
   <li><a href="/{{href}}" title="{{displayName}}">{{displayName}}</a></li>
   <ul> 
      {{#each this.children}} //Notes: lặp danh sách danh mục con cấp 2 
          <li><a href="/{{href}}" title="{{displayName}}">{{displayName}}</a></li>
      {{/each}}
   </ul> 
{{/each}}   

```

#### Sắp xếp danh sách theo thứ tự định sẵn
> thường áp dụng cho menu

- Danh Mục trên menu cần sắp xếp theo thứ tự cho sẵn 
- Cách 1: Sử dụng 1 array có thứ tự định trước
    - ví dụ `menu-order` , đặt trong meta/global để truy cập khắp website 
    ```js  
    "menu-order": ["thoi-su","kinh-doanh",  "van-hoa-giai-tri", "suc-khoe", "hitech"]
    ```
    - lặp theo array `menu-order` 
```js 
{{#each global.menu-order}}  //Notes: lặp dựa trên danh sách đã sắp thứ tự 
    {{#each ../AllCategory.children }}  //Notes: lặp tất cả Danh Mục cấp 1 
        {{#is this.category ../this}} 
          //Notes: nếu giống nhau thì hiển thị , ../this là phần tử thuộc menu-order 
         <li><a href="/{{href}}" title="{{displayName}}">{{displayName}}</a></li>
        {{/is}}
    {{/each}}    
{{/each}}
    - Link demo : http://trang-tin-tuc.leanhdudu.easywebhub.me  
```
- Cách 2: thêm 1 thuộc tính `order` trong từng Danh Mục, nằm trong `meta: ` 
   - sắp xếp dựa theo thuộc tính này. 



