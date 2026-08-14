# File System (FS Module)
- FS module directly communicate with operating system rather than browser.
## The common operation on a file or folder are:
1. File -> readFile, writeFile, 
2. Folder -> kmdir/md, rmdir/rm, readdir
3. File Metadat -> stat, lstat, rstat
4. Watch -> watch, unwatch
5. Stream -> readStream(), writeStream()


# Crud Project
- C- Create
- R- Retrieve
- U- Update
- D- Delete

assume we are making a cart related project
1. user can add any product (id,name,price,qty) into cart
2. user can see all the items of cart
3. user can remove item from cart
4. user can also update quantity of product
5. all the items should e stored after termination of project