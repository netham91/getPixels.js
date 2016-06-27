# getPixels.js
A micro library to read pixel data of images.  
Note: The library is in early stage so error handling and many other aspects have not been taken care of for now.

### getPixels(img_path,callback(data))
 - Data is a 2D array.
 - No. of columns = width of image in pixels
 - No. of rows = height of image in pixels

##### To get rgba values of pixel at position x,y in the image  
  - Note: x=0,y=0 means top left of the image
  - data[x][y].rgba.r gives the red channel value of pixel at x,y
  - Similarly you can get values of other channels

##### To get hex value of pixel at position x,y in the image
data[x][y].hex will give the hex value with # prefix
