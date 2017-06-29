
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

- `(lookupCategory  AllCategory param-1  param-2)` : tìm Danh mục của website
   - `param-1`: tên của Danh mục cần tìm, ví dụ `thoi-su`, hoặc thuộc tính `category` nếu ở 
   - `param-2`: tên của thuộc tính của danh mục, 
      - `children` : danh sách Danh Mục con 
      - `files` : danh sách trang thuộc danh mục này
      - `href` : đường dẫn của trang Danh Mục này
      - `displayName` tên hiển thị của danh mục này 

  

### Một số trường hợp thông dụng 
- ví dụ: kiểm tra và hiển thị hình ảnh 
```js 
{{#if anh-dai-dien}} //nếu ảnh đại diện (anh-dai-dien) được nhập vào, thì hiển thị ra
    <img src="{{anh-dai-dien}}" alt="{{ghi-chu-anh-dai-dien}}"/>
{{else}}  //nếu không nhập, hiển thị hình mặc định 
    <img src="https://easywebhub.com//img/no-available-image.png" alt="no image available"/>
{{/if}}
```
### 

```js 
{{#with (lookupCategory ../AllCategory category)}}
    <a class="tip" href="/{{href}}">{{displayName}}</a>
{{/with}}
```

```js     
{{#each (first AllCategory.files 6)}}
{{#lt @key 2}}
    <div class="block-top block-top-4">
    </div>
{{else}}
    <div class="block-top block-top-3">
    
    </div>
{{/lt}}
{{/each}}
```

```js  
"menu-order": ["thoi-su","kinh-doanh",  "van-hoa-giai-tri", "suc-khoe", "hitech", "tivi" , "nothing"]

{{#each global.menu-order}}
    <!--<li class="menu-dien-thoai"><a href="/{{href}}" title="{{displayName}}">{{this}}</a></li>-->
    {{#each ../AllCategory.children }}
        <!--<li class="menu-dien-thoai"><a href="/{{href}}" title="{{displayName}}">{{../this}}</a></li>-->
        {{#is this.category ../this}}
        <li class="menu-dien-thoai"><a href="/{{href}}" title="{{displayName}}">{{displayName}}</a></li>
        {{/is}}
    {{/each}}    
{{/each}}
```

```js
   {{moment date lang="vi" format="dddd, DD MM YYYY HH:mm"}}
```


