
### A Category Node

#### Json Schema
```json
{
    "children": [],
    "parent": null,
    "href": "url",
    "files": [],
    "category": "cacbenh.mat",	
    "sortBy": "date",
    "reverse": false,
    "metadata": 
    {
	 "ten": "Các bệnh mat "
    },
    "displayName": "các bệnh.mắt",
    "perPage": 10,
    "noPageOne": true,
    "layout": "forum-chuyentrang.category.html",
    "first": ":categoryPath/index.htm",
    "path": ":categoryPath/page/:num/index.html"
}
```
- `children`: list of children category, each of them have the same data schema of paren
- `parent`: name of parent category, `null` if current category is default (root)
- `href`: of this category
- `files`: list of detail page belonged to current category

#### Handlebarjs Binding
- Access using {{#with}} syntax
```
{{#with (lookupCategory AllCategory 'path-of-category') }}
   {{href}}
   {{metadata.ten}}
   {{children.[0]}}  // or {{children.0}}
   {{#each files}}
      {{path}}
      {{slug}}
      {{title}}
   {{/each}}
{{/with}}
```

- Access allItems of Category
```
{{#each AllCategory.files}}
      {{path}}
      {{slug}}
      {{title}}
{{/each}}
```
 
 **A child category node is have structure as same as above**

#### Sample Code

- Lấy tất cả bài viết thuộc danh mục `default.news` (đã được sắp xếp theo thứ tự mới nhất)
```
<h5>All posts of Category "default.news"<h5>
<ul>
   {{#each (lookupCategory AllCategory 'default.news' 'files')}} 
     <li><a href="/{{ this.path }}">{{ this.title }}</a></li>
   {{/each}}
</ul>
```

```
<h5>Other way to get posts of Category "default.news"<h5>
{{#with (lookupCategory AllCategory 'default.news') }}
 <ul>
   {{#each this.files}} 
   <li><a href="/{{ this.path }}">{{ this.title }}</a></li>
   {{/each}}
</ul>
{{/with}}
```

- Lấy 4 bài viết đầu tiên thuộc danh mục 'default.news'
```
<h5>Get first 4 posts of Category 'default.news'<h5>
<ul>
{{#each (first (lookupCategory AllCategory 'default.news' 'files') 4) }}
   <li><a href="/{{ this.path }}">{{ this.title }}</a></li>
{{/each}}
</ul>
```

### Pagination
> Lưu ý: Phân trang chỉ hoạt động trong trang Danh Mục của nó

> Trong mỗi trang danh mục đều có biến mặc định `pagination` để quản lý việc phân trang. Sử dụng biến `pagination` để truy cập các thuộc tính liên quan tới phân trang

#### pagination structure
```S
{
    pagination: {
        name: name,
        category: category,
        displayName: pageOptions.displayName,
        categoryPath: categoryPath,
        index: length,
        num: length + 1,
        pages: pages,
        files: [],
        getPages: createPagesUtility(pages, length),
        previous: ,
        next: ,
        first: ,
        last: ,
    }
}
```
- **Lưu ý**
  - `pagination.files` chứa danh sách bài viết chi tiết đã được phân trang
  - `pagination.num` tổng số trang

#### Sample Code

```
<h5>PAGE FILES OF {{pagination.category}} - {{pagination.categoryDisplayName}}<h5>

<ul>
{{#each pagination.files}}
	<li><a href="/{{ this.path }}">{{ this.title }}</a></li>
{{/each}}
</ul>

{{#if pagination.previous}}
	<a href="/{{pagination.previous.path}}">Previous page</a>
{{/if}}
{{#if pagination.next}}
	<a href="/{{pagination.next.path}}">Next page</a>
{{/if}}
```

### Handlebar helpers

#### lookupCategory
```
/**
  lookupCategory
    @param {object} [AllCategory] - category tree object
    @param {string} [categoryPath] - category full path
    @param {string} [propertyPath] - string object path like in lookupEx
    @returns {object} - a category object
*/
```
- `AllCategory` is a root Category, which contains all Categories of current website

- Ví dụ: `tin-tuc.thoi-su.quoc-te` is a Category, which has children (its sub-categories). To get its children, use the bellow syntax

`lookupCategory AllCategory 'tin-tuc.thoi-su.quoc-te' 'children'`

return:  array of categories

#### genBreadcrumb AllCategory `category-path`

- syntax `getBreadcrumb AllCategory 'tin-tuc.thoi-su.quoc-te'`

- return array of categories

#### lookupEx Object 'aa.bb.cc'

return value of Object.aa.bb.cc

#### handlebar array access:

- `.[:number]`, ví dụ:   `array-items.[0]` the first items of array

		
