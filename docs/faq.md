---
sidebar_position: 2
---

# FAQ

## 1. When I drag and drop a model into a world nothing happens?

One of the following issues is likely occuring:

1. If this is not a world you own or one you are running locally, you likely do not have admin privledges. 

2. If you own the world and have assigned an `ADMIN_CODE` in your `.env` you will need to give yourself priviledges with `/admin <admin-key>`. By default if you do not assign an `<admin-key>` all users have admin privledges.

3. There is currently an error involving some models with draco textures.