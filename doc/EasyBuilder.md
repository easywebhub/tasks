
## List of Features
> some status of features: `todo`, `improve`, `test`, `docs`, `done`

### Authentication 
- [ ] `improve` registry with EasyWeb account
  - [ ] username, check for existing, add sub-fix `number` to make it unique 
  - [ ] email, check for existing and reject 
  - [ ] password
  - [ ] registry with facebook, github, google+

- [ ] `test` login with username & password 

### Local Building & Preview (Admin)
- [ ] `test` build local 
- [ ] `test` preview local 

### Layout Management 
- [ ] `Docs` add new layouts, with selection: normal, partial, category, tags 
- [ ] `test` F1: quick add existing partial layouts
- [ ] `test` F3: quick create partial layouts from selected (html) string 

### Content Model Configuration 
- [ ] `test` F1: quick add existing fields
- [ ] `test` F2: quick create fields (at root or belong of an object)
- [ ] `test` Configure properties of fields by `Config` tab, such as type, format, title, hidden, ...
- [ ] `test` re-arrange order of fields
- [ ] `todo` add code for inline fields 

### Content Management (Admin)

- [ ] `test` create pages, select it's layout, category or tags 
- [ ] `test` define category or sub-category
- [ ] `test` define tags 
- [ ] delete pages, 
   - [ ] `test` change it's layout to `404.html` 
   - [ ] `todo` hide or mark deleted when showing on sidebar  
   - [ ] `todo` hide when listing or pagination on `AllCategory`, `AllTag`, ... 

### Asset Management
- [ ] `test` import files, folders 
- [ ] `test` delete files, folders 
- [ ] `todo` editor for css, js files

### Source Management (Admin)
- [ ] `test` synchronize source among PCs 
- [ ] `todo` synchronize with building server and EasyCMS
- [ ] `todo` history of source changing 
- [ ] `todo` realtime change notification, 
  - [ ] easyweb api using socket.io 

### Website Publication (Admin)
- [ ] `test` 1-click to publish to production
- [ ] `todo` auto the process of make websites public on github gh-pages or on EasyWeb servers


### Website Management
- [ ] `improve` request for (free or custom) domain 
- [ ] `todo` assign for others, Dev or Admin
- [ ] `todo` update website info, 
- [ ] `todo` request for delete current website