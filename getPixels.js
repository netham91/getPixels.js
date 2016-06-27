function getPixels(img_path, callback) {
    var img = new Image();
    img.src = img_path;
    var data = [];
    var buffer = document.createElement('canvas');
    buffer.width = img.width;
    buffer.height = img.height;
    ctx = buffer.getContext('2d');

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        console.log("done");

        var pixels = ctx.getImageData(0, 0, img.width, img.height).data; 
        var data = [];
        for (x = 0; x < img.width; x++) {
            data[x] = [];
            for (y = 0; y < img.height; y++) {
                currentPos = y * img.height * 4 + x * 4; //maps x,y to Uint8ClampedArray pos
                var pData = new getPixels_Pixels();
                pData.pos(x, y);
                pData.fill(pixels[currentPos], pixels[currentPos + 1], pixels[currentPos + 2], pixels[currentPos + 3]);
                data[x][y] = pData;
            }
        }
        callback(data);
        return data;
    };
    
}

//defining a pixel
var getPixels_Pixel = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
};
var getPixels_Pos = function() {
    this.x = 0;
    this.y = 0;
};
//defining pixelData
var getPixels_Pixels = function() {};


getPixels_Pixels.prototype.pos = function(x, y) {
    this.pos = new getPixels_Pos();
    this.pos.x = x;
    this.pos.y = y;
    return this.pos;
};
//function to fill r,g,b,a values
getPixels_Pixels.prototype.fill = function(r, g, b, a) {
    this.rgba = new getPixels_Pixel(r, g, b, a);
    return this.rgba;
};