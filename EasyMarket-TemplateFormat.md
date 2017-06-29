> Collect all templates of EasyMarket

### Where's it located
- Save on url https://easywebhub.com/website-marketplace.json, on source [github](https://github.com/easywebhub/easywebhub-com/tree/master/asset)

- Caching on the EasyBuilder locally, see  https://github.com/easywebhub/easyapp/blob/master/template.json

### Format

```json 
 "version"  : 5,
 "templates": [
	{
            "name"    : "Skeleton",
            "url"     : "https://sourcecode.easywebhub.com/templates/easyweb-skeleton.git",
            "branch"  : "master",
			"type"    : "code base",
			"tags"    : ["skeleton", "website"],
            "themeUrl": "https://blackrockdigital.github.io/startbootstrap-creative/",
            "price"   : "Free"
    },
    ...
 ]
``` 

#### Update the new templates
> use the version to check and update

- When enter EasyMarket (on EasyBuilder), check the version on server.
- if it larger than version on local files, update the list

