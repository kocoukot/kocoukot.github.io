var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// var QuestionTutorial = (function (_super) {
//     __extends(QuestionTutorial, _super);
//     function QuestionTutorial() {
//         var _this = this;
//         _super.call(this);
//         this.showed = false;
//         this.onNextClick = function () {
//             _this.hide();
//         };
//         this.show = function () {
//             if (_this.showed)
//                 return;
//             _this.showed = true;
//             _this.visible = true;
//             //TweenLite.to(this, 0.5, { alpha: 1 });
//             _this.alpha = 1;
//             new StoryLine().setVar('invoke_hideplayer');
//         };
//         this.hide = function () {
//             //TweenLite.to(this, 0.5, { alpha: 0, onComplete: this.onHideComplete });
//             _this.visible = false;
//             _this.alpha = 0;
//             new StoryLine().setVar('invoke_showplayer');
//         };
//         this.onHideComplete = function () {
//             _this.visible = false;
//         };
//         this.visible = false;
//         this.alpha = 0;
//         this.data = AssetsManager.instance.getObject('data');
//         this.addChild(AssetsManager.instance.getSprite('question_tutorial'));
//         var btn = new ImageMarginButton('btn_tutorial_close');
//         this.addChild(btn).position.set(90, 931);
//         btn.addListener('pointerdown', this.onNextClick);
//         this.interactive = true;
//     }
//     return QuestionTutorial;
// }(PIXI.Container));
//---------- Point ----------
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.x = Number(x);
        this.y = Number(y);
    }
    Point.prototype.toString = function () {
        return 'x:' + this.x.toString() + ', y:' + this.y.toString();
    };
    return Point;
}());
//---------- Rectangle ----------
var Rectangle = (function () {
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "left", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "right", {
        get: function () {
            return this.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "top", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom", {
        get: function () {
            return this.y + this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "top_left", {
        get: function () {
            return new Point(this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "top_right", {
        get: function () {
            return new Point(this.right, this.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom_left", {
        get: function () {
            return new Point(this.x, this.bottom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom_right", {
        get: function () {
            return new Point(this.right, this.bottom);
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.toString = function () {
        return 'x:' + this.x.toString() + ', y:' + this.y.toString() + ', w:' + this.width.toString() + ', h:' + this.height.toString() + ', r:' + this.right.toString() + ', b:' + this.bottom.toString();
    };
    Rectangle.prototype.hasPoint = function (point) {
        if (this.x <= point.x && this.right >= point.x && this.y <= point.y && this.bottom >= point.y)
            return true;
        return false;
    };
    Rectangle.prototype.intersects = function (rectangle) {
        return (rectangle.x <= this.x + this.width && this.x <= rectangle.x + rectangle.width && rectangle.y <= this.y + this.height && this.y <= rectangle.y + rectangle.height);
    };
    Rectangle.prototype.intersection = function (rectangle) {
        var x1 = rectangle.x, y1 = rectangle.y, x2 = x1 + rectangle.width, y2 = y1 + rectangle.height;
        if (this.x > x1) {
            x1 = this.x;
        }
        if (this.y > y1) {
            y1 = this.y;
        }
        if (this.x + this.width < x2) {
            x2 = this.x + this.width;
        }
        if (this.y + this.height < y2) {
            y2 = this.y + this.height;
        }
        return (x2 <= x1 || y2 <= y1) ? new Rectangle() : new Rectangle(x1, y1, x2 - x1, y2 - y1);
    };
    return Rectangle;
}());
var Base64 = (function () {
    function Base64() {
    }
    Base64.prototype.decode = function (data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '';
        do {
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;
            if (h3 == 64)
                enc += String.fromCharCode(o1);
            else if (h4 == 64)
                enc += String.fromCharCode(o1, o2);
            else
                enc += String.fromCharCode(o1, o2, o3);
        } while (i < data.length);
        return enc;
    };
    return Base64;
}());
var Trigonometry = (function () {
    function Trigonometry() {
    }
    Trigonometry.deg2rad = function (value) {
        return value * Math.PI / 180;
    };
    Trigonometry.rad2deg = function (value) {
        return value * 180 / Math.PI;
    };
    return Trigonometry;
}());
var TransparencyHitArea = (function () {
    function TransparencyHitArea(source) {
        var _this = this;
        this.width = 0;
        this.height = 0;
        this.createTextureData = function () {
            var canvas = document.createElement('canvas');
            var texture = _this.source.texture.baseTexture.source;
            var frame = _this.source.texture.frame;
            _this.width = frame.width;
            _this.height = frame.height;
            canvas.width = frame.width;
            canvas.height = frame.height;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, frame.width, frame.height);
            ctx.drawImage(texture, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);
            _this.pixelData = ctx.getImageData(0, 0, frame.width, frame.height).data;
        };
        this.getPixel = function (x, y) {
            var index = (x + y * _this.width) * 4 + 3;
            var value = _this.pixelData[index];
            return value;
        };
        this.contains = function (x, y) {
            if (x < 0 || y < 0 || x > _this.width || y > _this.height)
                return false;
            x = Math.floor(x);
            y = Math.floor(y);
            var index = (x + y * _this.width) * 4 + 3;
            var value = _this.pixelData[index];
            if (value > 0)
                return true;
            return false;
        };
        this.source = source;
        this.createTextureData();
    }
    return TransparencyHitArea;
}());
var DottedLine = (function (_super) {
    __extends(DottedLine, _super);
    function DottedLine(distance, direction, color, weight, strong) {
        if (strong === void 0) { strong = 3; }
        _super.call(this);
        this.distance = distance;
        this.direction = direction;
        var graph = new PIXI.Graphics();
        graph.lineStyle(weight, color);
        if (this.direction == 'horizontal') {
            var last_x = 0;
            while (last_x < distance) {
                graph.moveTo(last_x, 0);
                graph.lineTo(last_x + strong, 0);
                last_x = last_x + strong * 2;
            }
        }
        else {
            var last_y = 0;
            while (last_y < distance) {
                graph.moveTo(0, last_y);
                graph.lineTo(0, last_y + strong);
                last_y = last_y + strong * 2;
            }
        }
        this.texture = graph.generateCanvasTexture();
        this.addChild(graph);
    }
    return DottedLine;
}(PIXI.Sprite));
var TextureHelper = (function () {
    function TextureHelper() {
    }
    TextureHelper.roundRect = function (ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        if (typeof radius === 'number') {
            radius = { tl: radius, tr: radius, br: radius, bl: radius };
        }
        else {
            var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
            for (var side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    };
    TextureHelper.createGradientCanvas = function (size, colors, points, shadow) {
        if (shadow === void 0) { shadow = null; }
        var canvas = document.createElement('canvas');
        canvas.width = size.x;
        canvas.height = size.y;
        if (shadow != null) {
            canvas.width = canvas.width + shadow.shadowOffsetX + shadow.shadowBlur;
            canvas.height = canvas.height + shadow.shadowOffsetY + shadow.shadowBlur;
        }
        var ctx = canvas.getContext('2d');
        var grd = ctx.createLinearGradient(points[0].x, points[0].y, points[1].x, points[1].y);
        grd.addColorStop(0, colors[0]);
        grd.addColorStop(1, colors[1]);
        ctx.fillStyle = grd;
        if (shadow != null) {
            ctx.shadowColor = shadow.shadowColor;
            ctx.shadowBlur = shadow.shadowBlur;
            ctx.shadowOffsetX = shadow.shadowOffsetX;
            ctx.shadowOffsetY = shadow.shadowOffsetY;
        }
        ctx.fillRect(0, 0, size.x, size.y);
        return canvas;
    };
    TextureHelper.createRoudedGradientCanvas = function (size, colors, points, radius, shadow) {
        if (radius === void 0) { radius = 0; }
        if (shadow === void 0) { shadow = null; }
        var canvas = document.createElement('canvas');
        canvas.width = size.x;
        canvas.height = size.y;
        if (shadow != null) {
            canvas.width = canvas.width + shadow.shadowOffsetX + shadow.shadowBlur;
            canvas.height = canvas.height + shadow.shadowOffsetY + shadow.shadowBlur;
        }
        var ctx = canvas.getContext('2d');
        var grd = ctx.createLinearGradient(points[0].x, points[0].y, points[1].x, points[1].y);
        grd.addColorStop(0, colors[0]);
        grd.addColorStop(1, colors[1]);
        ctx.fillStyle = grd;
        if (shadow != null) {
            ctx.shadowColor = shadow.shadowColor;
            ctx.shadowBlur = shadow.shadowBlur;
            ctx.shadowOffsetX = shadow.shadowOffsetX;
            ctx.shadowOffsetY = shadow.shadowOffsetY;
        }
        if (radius == 0)
            ctx.fillRect(0, 0, size.x, size.y);
        else
            TextureHelper.roundRect(ctx, 0, 0, size.x, size.y, radius, grd, false);
        return canvas;
    };
    TextureHelper.createRoundedCanvas = function (size, fill, strokeColor, strokeWidth, radius, offset) {
        if (offset === void 0) { offset = 0; }
        var canvas = document.createElement('canvas');
        canvas.width = size.x;
        canvas.height = size.y;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = fill;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        if (offset != 0) {
            ctx.setLineDash([7, 7]);
            ctx.lineDashOffset = offset;
        }
        TextureHelper.roundRect(ctx, 0, 0, size.x, size.y, radius, fill, true);
        return canvas;
    };
    TextureHelper.createFillCanvas = function (size, color, shadow) {
        if (shadow === void 0) { shadow = null; }
        var canvas = document.createElement('canvas');
        canvas.width = size.x;
        canvas.height = size.y;
        if (shadow != null) {
            canvas.width = canvas.width + shadow.shadowOffsetX + shadow.shadowBlur;
            canvas.height = canvas.height + shadow.shadowOffsetY + shadow.shadowBlur;
        }
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        if (shadow != null) {
            ctx.shadowColor = shadow.shadowColor;
            ctx.shadowBlur = shadow.shadowBlur;
            ctx.shadowOffsetX = shadow.shadowOffsetX;
            ctx.shadowOffsetY = shadow.shadowOffsetY;
        }
        ctx.fillRect(0, 0, size.x, size.y);
        return canvas;
    };
    TextureHelper.createFillCanvasEx = function (size, color, shadow) {
        if (shadow === void 0) { shadow = null; }
        var canvas = document.createElement('canvas');
        canvas.width = size.x;
        canvas.height = size.y;
        if (shadow != null) {
            canvas.width = canvas.width + shadow.shadowOffsetX + 2 * shadow.shadowBlur;
            canvas.height = canvas.height + shadow.shadowOffsetY + 2 * shadow.shadowBlur;
        }
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        if (shadow != null) {
            ctx.shadowColor = shadow.shadowColor;
            ctx.shadowBlur = shadow.shadowBlur;
            ctx.shadowOffsetX = shadow.shadowOffsetX;
            ctx.shadowOffsetY = shadow.shadowOffsetY;
            ctx.fillRect(shadow.shadowBlur - shadow.shadowOffsetX, shadow.shadowBlur - shadow.shadowOffsetY, size.x, size.y);
        }
        else {
            ctx.fillRect(0, 0, size.x, size.y);
        }
        return canvas;
    };
    TextureHelper.createGradientTexture = function (size, colors, points, shadow) {
        if (shadow === void 0) { shadow = null; }
        var canvas = TextureHelper.createGradientCanvas(size, colors, points, shadow);
        var texture = PIXI.Texture.fromCanvas(canvas);
        return texture;
    };
    TextureHelper.createFillTexture = function (size, color, shadow) {
        if (shadow === void 0) { shadow = null; }
        var canvas = TextureHelper.createFillCanvas(size, color, shadow);
        var texture = PIXI.Texture.fromCanvas(canvas);
        return texture;
    };
    TextureHelper.createFillTextureEx = function (size, color, shadow) {
        if (shadow === void 0) { shadow = null; }
        var canvas = TextureHelper.createFillCanvasEx(size, color, shadow);
        var texture = PIXI.Texture.fromCanvas(canvas);
        return texture;
    };
    return TextureHelper;
}());
var GraphicsHelper = (function () {
    function GraphicsHelper() {
    }
    GraphicsHelper.createLine = function (width, height, color, alpha) {
        if (alpha === void 0) { alpha = 1; }
        var line = new PIXI.Graphics();
        line.beginFill(color, alpha);
        line.drawRect(0, 0, width, height);
        line.endFill();
        return line;
    };
    GraphicsHelper.createRect = function (width, height, fillColor, fillAlpha, borderWidth, borderColor, borderAlpha) {
        if (fillColor === void 0) { fillColor = 0xffffff; }
        if (fillAlpha === void 0) { fillAlpha = 1; }
        if (borderWidth === void 0) { borderWidth = 0; }
        if (borderColor === void 0) { borderColor = 0; }
        if (borderAlpha === void 0) { borderAlpha = 1; }
        var rect = new PIXI.Graphics();
        rect.beginFill(fillColor, fillAlpha);
        rect.drawRect(0, 0, width, height);
        rect.endFill();
        var line;
        line = GraphicsHelper.createLine(borderWidth, height, borderColor, borderAlpha);
        rect.addChild(line).position.set(0, 0);
        line = GraphicsHelper.createLine(borderWidth, height, borderColor, borderAlpha);
        rect.addChild(line).position.set(width - borderWidth, 0);
        line = GraphicsHelper.createLine(width, borderWidth, borderColor, borderAlpha);
        rect.addChild(line).position.set(0, 0);
        line = GraphicsHelper.createLine(width, borderWidth, borderColor, borderAlpha);
        rect.addChild(line).position.set(0, height - borderWidth);
        return rect;
    };
    GraphicsHelper.createDottedRect = function (width, height, fillColor, fillAlpha, borderWidth, borderColor, borderAlpha, borderGap) {
        if (borderGap === void 0) { borderGap = 6; }
        var rect = GraphicsHelper.createRect(width, height, fillColor, fillAlpha, borderWidth, borderColor, 0);
        rect.addChild(new DottedLine(width, 'horizontal', borderColor, borderWidth, borderGap)).position.set(0, 0);
        rect.addChild(new DottedLine(width, 'horizontal', borderColor, borderWidth, borderGap)).position.set(0, height);
        rect.addChild(new DottedLine(height, 'vertical', borderColor, borderWidth, borderGap)).position.set(0, 0);
        rect.addChild(new DottedLine(height, 'vertical', borderColor, borderWidth, borderGap)).position.set(width, 0);
        return rect;
    };
    GraphicsHelper.createMask = function (width, height, radius) {
        if (radius === void 0) { radius = 0; }
        var rect = new PIXI.Graphics();
        rect.beginFill(0xffffff);
        if (radius == 0)
            rect.drawRect(0, 0, width, height);
        else
            rect.drawRoundedRect(0, 0, width, height, radius);
        rect.endFill();
        return rect;
    };
    GraphicsHelper.createRoundedRect = function (width, height, fillColor, fillAlpha, radius, border) {
        if (fillColor === void 0) { fillColor = 0xffffff; }
        if (fillAlpha === void 0) { fillAlpha = 1; }
        if (radius === void 0) { radius = 0; }
        if (border === void 0) { border = null; }
        var rect = new PIXI.Graphics();
        if (border != null)
            rect.lineStyle(border['width'], border['fill'], border['alpha']);
        rect.beginFill(fillColor, fillAlpha);
        if (radius == 0)
            rect.drawRect(0, 0, width, height);
        else
            rect.drawRoundedRect(0, 0, width, height, radius);
        rect.endFill();
        return rect;
    };
    GraphicsHelper.createCircle = function (width, fillColor, fillAlpha, border) {
        if (fillColor === void 0) { fillColor = 0xffffff; }
        if (fillAlpha === void 0) { fillAlpha = 1; }
        if (border === void 0) { border = null; }
        var rect = new PIXI.Graphics();
        if (border != null)
            rect.lineStyle(border['width'], border['fill'], border['alpha']);
        rect.beginFill(fillColor, fillAlpha);
        rect.drawCircle(width / 2, width / 2, width / 2);
        rect.endFill();
        return rect;
    };
    GraphicsHelper.createPoligon = function (points, fillColor, fillAlpha, border) {
        if (fillColor === void 0) { fillColor = 0xffffff; }
        if (fillAlpha === void 0) { fillAlpha = 1; }
        if (border === void 0) { border = null; }
        var rect = new PIXI.Graphics();
        if (border != null)
            rect.lineStyle(border['width'], border['fill'], border['alpha']);
        rect.beginFill(fillColor, fillAlpha);
        for (var i = 0; i < points.length; i++) {
            if (i == 0)
                rect.moveTo(points[i].x, points[i].y);
            else
                rect.lineTo(points[i].x, points[i].y);
        }
        rect.endFill();
        return rect;
    };
    return GraphicsHelper;
}());
var Shadow = (function (_super) {
    __extends(Shadow, _super);
    function Shadow() {
        _super.call(this);
        this.shadowColor = 'rgba(0, 0, 0, 0.5)';
        this.shadowBlur = 7;
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 2;
    }
    return Shadow;
}(Object));
var SaveImage = (function () {
    function SaveImage() {
        var _this = this;
        this.save = function (path, fileName) {
            _this.fileName = fileName;
            var img = document.createElement('img');
            img.onload = _this.onImageLoad;
            img.src = path;
        };
        this.saveCanvas = function (canvas, fileName) {
            _this.fileName = fileName;
            var binStr = atob(canvas.toDataURL('image/png').split(',')[1]);
            var len = binStr.length;
            var arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
            }
            var blob = new Blob([arr]);
            if (navigator.msSaveBlob == undefined) {
                _this.saveData(blob, _this.fileName);
            }
            else {
                navigator.msSaveBlob(blob, _this.fileName);
            }
        };
        this.onImageLoad = function (event) {
            var img = event.currentTarget;
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            var binStr = atob(canvas.toDataURL('image/png').split(',')[1]);
            var len = binStr.length;
            var arr = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
            }
            var blob = new Blob([arr]);
            if (navigator.msSaveBlob == undefined) {
                _this.saveData(blob, _this.fileName);
            }
            else {
                navigator.msSaveBlob(blob, _this.fileName);
            }
        };
        this.saveData = function (data, fileName) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        };
        this.saveCanvasToPDF = function (canvas, fileName) {
            console.log('canvas', canvas.width, canvas.height);
            _this.fileName = fileName;
            var bin = canvas.toDataURL('image/png');
            var pdf = new jsPDF({ orientation: canvas.width < canvas.height ? 'p' : 'l', unit: 'pt', format: [canvas.width / 1.33, canvas.height / 1.33] });
            pdf.addImage(bin, 'PNG', 0, 0);
            pdf.save(_this.fileName);
        };
    }
    return SaveImage;
}());
function parse_point(value) {
    var tmp = value.split(':');
    return new PIXI.Point(Number(tmp[0]), Number(tmp[1]));
}
var rgba_create = function (color, alpha) {
    if (alpha === void 0) { alpha = 1; }
    var r = (color >> 16) & 255;
    var g = (color >> 8) & 255;
    var b = color & 255;
    var a = alpha;
    return 'rgba(' + [r, g, b, a].join(',') + ')';
};
var SpriteGraphics = (function (_super) {
    __extends(SpriteGraphics, _super);
    function SpriteGraphics(source) {
        var _this = this;
        _super.call(this);
        this.data_width = 0;
        this.data_height = 0;
        this.createTextureData = function () {
            var canvas = document.createElement('canvas');
            var texture = _this.source.texture.baseTexture.source;
            var frame = _this.source.texture.frame;
            _this.data_width = frame.width;
            _this.data_height = frame.height;
            canvas.width = frame.width;
            canvas.height = frame.height;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, frame.width, frame.height);
            ctx.drawImage(texture, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);
            _this.pixelData = ctx.getImageData(0, 0, frame.width, frame.height).data;
        };
        this.getPixel = function (x, y) {
            var index = (x + y * _this.data_width) * 4 + 3;
            var value = _this.pixelData[index];
            return value;
        };
        this.drawData = function () {
            var t = new Date().getTime();
            _this.lineStyle(0x000000);
            for (var x = 0; x < _this.data_width; x++) {
                for (var y = 0; y < _this.data_height; y++) {
                    var value = _this.getPixel(x, y);
                    if (value == 0)
                        continue;
                    _this.moveTo(x, y);
                    _this.lineTo(x, y);
                }
            }
            _this.endFill();
            console.log(new Date().getTime() - t, 'ms');
        };
        this.source = source;
        this.createTextureData();
        this.drawData();
    }
    return SpriteGraphics;
}(PIXI.Graphics));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(label, width) {
        var _this = this;
        if (width === void 0) { width = -1; }
        _super.call(this);
        this.borderColor = 0;
        this.borderAlpha = 0;
        this.onMouseEvent = function (event) {
            switch (event.type) {
                case 'mouseover':
                    _this.update('over');
                    break;
                case 'mouseout':
                    _this.update('normal');
                    break;
            }
        };
        this.update = function (type) {
            _this.back.clear();
            if (type == 'normal') {
                _this.back.lineStyle(2, _this.borderColor, _this.borderAlpha);
                _this.back.beginFill(_this.buttonColor);
                if (_this.buttonWidth == -1)
                    _this.back.drawRect(0, 0, _this.txtLabel.x + _this.txtLabel.width + 50, 65);
                else
                    _this.back.drawRect(0, 0, _this.buttonWidth, 65);
                _this.back.endFill();
            }
            else {
                _this.back.lineStyle(2, _this.borderColor, _this.borderAlpha);
                _this.back.beginFill(_this.buttonColorOver);
                if (_this.buttonWidth == -1)
                    _this.back.drawRect(0, 0, _this.txtLabel.x + _this.txtLabel.width + 50, 65);
                else
                    _this.back.drawRect(0, 0, _this.buttonWidth, 65);
                _this.back.endFill();
            }
            _this.texture = _this.back.generateCanvasTexture();
        };
        this.buttonWidth = width;
        this.back = new PIXI.Graphics();
        this.addChild(this.back);
        this.txtLabel = new PIXI.Text(label, { fill: 0x000000, fontSize: 25, fontFamily: 'Semibold', align: 'center' });
        if (this.buttonWidth == -1)
            this.txtLabel.position.set(50, (65 - this.txtLabel.height) / 2);
        else
            this.txtLabel.position.set((this.buttonWidth - this.txtLabel.width) / 2, (65 - this.txtLabel.height) / 2);
        this.addChild(this.txtLabel);
        this.update('normal');
        this.type = 'orange';
        this.interactive = true;
        this.buttonMode = true;
        this.addListener('mouseover', this.onMouseEvent);
        this.addListener('mouseout', this.onMouseEvent);
    }
    Object.defineProperty(Button.prototype, "label", {
        set: function (value) {
            this.txtLabel.text = value;
            if (this.buttonWidth == -1)
                this.back.drawRect(0, 0, this.txtLabel.x + this.txtLabel.width + 50, 65);
            else
                this.back.drawRect(0, 0, this.buttonWidth, 65);
            this.update('normal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "type", {
        set: function (value) {
            if (value == 'orange') {
                this.txtLabel.style.fill = 0xffffff;
                this.buttonColor = 0xff871f;
                this.buttonColorOver = 0xec6400;
            }
            else if (value == 'white') {
                this.txtLabel.style.fill = 0x000000;
                this.buttonColor = 0xffffff;
                this.buttonColorOver = 0xeeeeee;
            }
            else if (value == 'again') {
                this.txtLabel.style.fill = 0x000000;
                this.buttonColor = 0xffffff;
                this.buttonColorOver = 0xeeeeee;
                this.borderColor = 0x000000;
                this.borderAlpha = 1;
            }
            this.update('normal');
        },
        enumerable: true,
        configurable: true
    });
    return Button;
}(PIXI.Sprite));
var ImageButton = (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton(type) {
        var _this = this;
        _super.call(this);
        this.onMouseEvent = function (event) {
            switch (event.type) {
                case 'mouseover':
                    _this.alpha = 0.8;
                    break;
                case 'mouseout':
                    _this.alpha = 1;
                    break;
                case 'pointerdown':
                    break;
            }
        };
        this.texture = AssetsManager.instance.getTexture(type);
        this.addListener('mouseover', this.onMouseEvent);
        this.addListener('mouseout', this.onMouseEvent);
        this.enabled = true;
    }
    Object.defineProperty(ImageButton.prototype, "enabled", {
        set: function (value) {
            this.interactive = value;
            this.buttonMode = value;
            this.alpha = value ? 1 : 0.5;
        },
        enumerable: true,
        configurable: true
    });
    return ImageButton;
}(PIXI.Sprite));



var ImageMarginButton = (function (_super) {
    __extends(ImageMarginButton, _super);
    function ImageMarginButton(type, margin) {
        var _this = this;
        if (margin === void 0) { margin = 0; }
        _super.call(this);
        this.onMouseEvent = function (event) {
            switch (event.type) {
                case 'mouseover':
                    _this.texture = AssetsManager.instance.getTexture(_this.type + '_over');
                    break;
                case 'mouseout':
                    _this.texture = AssetsManager.instance.getTexture(_this.type);
                    break;
            }
        };
        this.type = type;
        this.texture = AssetsManager.instance.getTexture(this.type);
        this.enabled = true;
        this.hitArea = new PIXI.Rectangle(margin, margin, this.width - margin * 2, this.height - margin * 2);
        /*
        let area: PIXI.Graphics = GraphicsHelper.createRect(this.width - margin * 2, this.height - margin * 2, 0xffffff, 0, 1, 0xff0000);
        this.addChild(area).position.set(margin, margin);
        */
    }
    Object.defineProperty(ImageMarginButton.prototype, "enabled", {
        set: function (value) {
            if (value) {
                this.interactive = true;
                this.buttonMode = true;
                this.addListener('mouseover', this.onMouseEvent);
                this.addListener('mouseout', this.onMouseEvent);
                this.texture = AssetsManager.instance.getTexture(this.type);
                this.alpha = 1;
            }
            else {
                this.interactive = false;
                this.buttonMode = false;
                this.removeAllListeners('mouseover');
                this.removeAllListeners('mouseout');
                this.texture = AssetsManager.instance.getTexture(this.type);
                this.alpha = 0.5;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ImageMarginButton;
}(PIXI.Sprite));




var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(type) {
        var _this = this;
        _super.call(this);
        this.public_type = '';
        this.selected = false;
        this.over = false;
        this._enabled = true;
        this.onAdded = function () {
            _this.removeListener('added', _this.onAdded);
            _this.parent.addListener('_select', _this.onSelectButton);
        };
        this.onSelectButton = function (button) {
            if (_this._enabled == false)
                return;
            if (button == _this)
                _this.selected = true;
            else
                _this.selected = false;
            _this.update();
        };
        this.onMouseEvent = function (event) {
            switch (event.type) {
                case 'pointerover':
                    _this.over = true;
                    break;
                case 'pointerout':
                    _this.over = false;
                    break;
                case 'pointerdown':
                    _this.parent.emit('_select', _this);
                    _this.emit('select', _this.public_type);
                    break;
            }
            _this.update();
        };
        this.update = function () {
            if (_this._enabled == false) {
                _this.texture = AssetsManager.instance.getTexture(_this.type + '_disabled');
                return;
            }
            if (_this.over == true)
                _this.texture = AssetsManager.instance.getTexture(_this.type + '_over');
            else {
                if (_this.selected == true)
                    _this.texture = AssetsManager.instance.getTexture(_this.type + '_selected');
                else {
                    _this.texture = AssetsManager.instance.getTexture(_this.type + '_normal');
                }
            }
        };
        this.select = function () {
            _this.parent.emit('_select', _this);
            _this.emit('select', _this.public_type);
            _this.update();
        };
        this.public_type = type;
        this.type = 'btn_' + type;
        this.texture = AssetsManager.instance.getTexture(this.type + '_normal');
        this.enabled = true;
        this.addListener('pointerover', this.onMouseEvent);
        this.addListener('pointerout', this.onMouseEvent);
        this.addListener('pointerdown', this.onMouseEvent);
        this.addListener('added', this.onAdded);
    }
    Object.defineProperty(RadioButton.prototype, "enabled", {
        set: function (value) {
            this._enabled = value;
            this.interactive = value;
            this.buttonMode = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    return RadioButton;
}(PIXI.Sprite));



var ImageStateButton = (function (_super) {
    __extends(ImageStateButton, _super);
    function ImageStateButton(type, useHitArea) {
        var _this = this;
        if (useHitArea === void 0) { useHitArea = false; }
        _super.call(this);
        this.useHitArea = false;
        this.onMouseEvent = function (event) {
            switch (event.type) {
                case 'mouseover':
                    _this.texture = AssetsManager.instance.getTexture(_this.type + '_over');
                    if (_this.useHitArea == true)
                        _this.hitArea = new TransparencyHitArea(_this);
                    break;
                case 'mouseout':
                    _this.texture = AssetsManager.instance.getTexture(_this.type);
                    if (_this.useHitArea == true)
                        _this.hitArea = new TransparencyHitArea(_this);
                    break;
            }
        };
        this.type = type;
        this.useHitArea = useHitArea;
        this.texture = AssetsManager.instance.getTexture(this.type);
        this.enabled = true;
    }
    Object.defineProperty(ImageStateButton.prototype, "enabled", {
        set: function (value) {
            if (value) {
                this.interactive = true;
                this.buttonMode = true;
                this.addListener('mouseover', this.onMouseEvent);
                this.addListener('mouseout', this.onMouseEvent);
                this.texture = AssetsManager.instance.getTexture(this.type);
                this.alpha = 1;
            }
            else {
                this.interactive = false;
                this.buttonMode = false;
                this.removeAllListeners('mouseover');
                this.removeAllListeners('mouseout');
                this.texture = AssetsManager.instance.getTexture(this.type);
                this.alpha = 0.5;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ImageStateButton;
}(PIXI.Sprite));




var LinkButton = (function (_super) {
    __extends(LinkButton, _super);
    function LinkButton(label, color, over_color) {
        var _this = this;
        if (color === void 0) { color = 0xd8d8d8; }
        if (over_color === void 0) { over_color = -1; }
        _super.call(this);
        this.onMouseEvent = function (event) {
            switch (event.type) {
                case 'mouseover':
                    if (_this.over_color == _this.color)
                        _this.alpha = 0.8;
                    else
                        _this.label.style.fill = _this.over_color;
                    _this.line.visible = false;
                    break;
                case 'mouseout':
                    _this.alpha = 1;
                    _this.label.style.fill = _this.color;
                    _this.line.visible = true;
                    break;
            }
        };
        this.color = color;
        this.over_color = over_color;
        if (this.over_color == -1)
            this.over_color = this.color;
        this.label = new PIXI.Text(label, { fill: color, fontSize: 25, fontFamily: 'Semibold' });
        this.addChild(this.label);
        //if (this.label.height / this.label.style.lineHeight == 1)
        {
            this.line = GraphicsHelper.createLine(this.label.width, 2, color);
            this.line.position.set(0, this.label.height - 2);
            this.addChild(this.line);
        }
        this.enabled = true;
    }
    Object.defineProperty(LinkButton.prototype, "enabled", {
        set: function (value) {
            if (value) {
                this.interactive = true;
                this.buttonMode = true;
                this.addListener('mouseover', this.onMouseEvent);
                this.addListener('mouseout', this.onMouseEvent);
                this.alpha = 1;
            }
            else {
                this.interactive = false;
                this.buttonMode = false;
                this.removeAllListeners('mouseover');
                this.removeAllListeners('mouseout');
                this.alpha = 0.5;
            }
        },
        enumerable: true,
        configurable: true
    });
    return LinkButton;
}(PIXI.Sprite));



var ArgumentsItem = (function (_super) {
    __extends(ArgumentsItem, _super);
    function ArgumentsItem(data) {
        var _this = this;
        _super.call(this);
        this.over = false;
        this.selected = false;
        this.fixed = false;
        this.onAddedEvent = function (event) {
            _this.removeListener('added', _this.onAddedEvent);
            _this.parent.addListener('_select', _this.onSelectItem);
        };
        this.onSelectItem = function (item) {
            if (item == _this)
                _this.selected = true;
            else
                _this.selected = false;
            _this.data['selected'] = _this.selected;
            _this.update();
        };
        this.onPointerEvent = function (event) {
            switch (event.type) {
                case 'pointerover':
                    _this.over = true;
                    break;
                case 'pointerout':
                    _this.over = false;
                    break;
                case 'pointerdown':
                    _this.parent.emit('_select', _this);
                    _this.parent.emit('update');
                    break;
            }
            _this.update();
        };
        this.update = function () {
            if (_this.fixed == true)
                return;
            if (_this.selected == true)
                _this.texture = _this.texture_selected;
            else {
                if (_this.over == true)
                    _this.texture = _this.texture_over;
                else {
                    _this.texture = _this.texture_normal;
                }
            }
        };
        this.fix = function () {
            _this.interactive = false;
            _this.buttonMode = false;
            _this.fixed = true;
            if (_this.data.hasOwnProperty('selected'))
                _this.selected = _this.data['selected'];
            if (_this.selected == true && _this.data['correct'] == true)
                _this.texture = _this.texture_right;
            else if (_this.selected == true && _this.data['correct'] == false)
                _this.texture = _this.texture_wrong;
            else if (_this.selected == false && _this.data['correct'] == true)
                _this.texture = _this.texture_missed;
            else if (_this.selected == false && _this.data['correct'] == false)
                _this.texture = _this.texture_normal;
        };
        this.reset = function () {
            _this.over = false;
            _this.selected = false;
            _this.texture = _this.texture_normal;
        };
        this.data = data;
        if (this.data.hasOwnProperty('selected') == false)
            this.data['selected'] = false;
        this.texture_normal = AssetsManager.instance.getTexture('arguments_normal');
        this.texture_selected = AssetsManager.instance.getTexture('arguments_selected');
        this.texture_right = AssetsManager.instance.getTexture('arguments_right');
        this.texture_wrong = AssetsManager.instance.getTexture('arguments_wrong');
        this.texture_over = AssetsManager.instance.getTexture('arguments_over');
        this.texture_missed = AssetsManager.instance.getTexture('arguments_missed');
        this.texture = this.texture_normal;
        this.text = new PIXI.Text(this.data['text'], { fontFamily: 'Regular', fontSize: 30, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH, align: 'left' });
        this.addChild(this.text);
        this.text.position.set(55, this.height / 2);
        this.text.anchor.set(0, 0.5);
        this.text.alpha = 1;
        this.interactive = true;
        this.buttonMode = true;
        this.addListener('pointerover', this.onPointerEvent);
        this.addListener('pointerout', this.onPointerEvent);
        this.addListener('pointerdown', this.onPointerEvent);
        this.addListener('added', this.onAddedEvent);
    }
    Object.defineProperty(ArgumentsItem.prototype, "correct", {
        get: function () {
            return this.selected == this.data['correct'];
        },
        enumerable: true,
        configurable: true
    });
    return ArgumentsItem;
}(PIXI.Sprite));

// Args page
var ArgumentsPage = (function (_super) {
    __extends(ArgumentsPage, _super);
    function ArgumentsPage(data) {
        var _this = this;
        _super.call(this);
        this.onItemUpdate = function () {
            _this.btn_check.visible = true;
        };
        this.onCheckClick = function () {
            _this.emit('complete');
        };
        this.fix = function () {
            _this.btn_check.visible = false;
            var res = true;
            for (var i = 0; i < _this.items.length; i++) {
                _this.items[i].fix();
                if (_this.items[i].correct == false)
                    res = false;
            }
            return res;
        };
        this.show = function (reset_arguments) {
            console.log('reset_arguments', reset_arguments);
            _this.visible = true;
            if (reset_arguments == true) {
                _this.btn_check.visible = false;
                for (var i = 0; i < _this.items.length; i++) {
                    _this.items[i].reset();
                }
            }
        };
        this.hide = function () {
            _this.visible = false;
        };
        this.randomize = function (val1, val2) {
            if (Math.random() > 0.5)
                return 1;
            return -1;
        };
        this.data = data;
        this.addChild(AssetsManager.instance.getSprite(this.data['background']));

        var title = new PIXI.Text(this.data['title'], { fontFamily: 'Bold', fontSize: 42, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH });
        this.addChild(title).position.set(98, 60);

        var subtitle = new MultiStyleText(this.data['subtitle'], { default: { fontFamily: 'Regular', fontSize: 30, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH, lineHeight: 44 }, b: { fontFamily: 'Bold' } });
        this.addChild(subtitle).position.set(98, 148);

        var task = new MultiStyleText(this.data['task'], { default: { fontFamily: 'Italic', fontSize: 28, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH }, b: { fontFamily: 'Bold' } });
        this.addChild(task).position.set(98, 206);
        this.hide();
        this.items = new Array();
        var items = this.data['items'];
        items.sort(this.randomize);
        for (var i = 0; i < items.length; i++) {
            var item = new ArgumentsItem(items[i]);
            this.addChild(item).position.set(104, 378 + i * 114);
            this.items.push(item);
        }
        this.addListener('update', this.onItemUpdate);
        this.btn_check = new ImageMarginButton('btn_check_answer');
        this.addChild(this.btn_check).position.set(Application.WIDTH / 2 - this.btn_check.width / 2, 922);
        this.btn_check.addListener('pointerdown', this.onCheckClick);
        this.btn_check.visible = false;
    }
    return ArgumentsPage;
}(PIXI.Container));

// var IntroItem = (function (_super) {
//     __extends(IntroItem, _super);
//     function IntroItem(data) {
//         var _this = this;
//         _super.call(this);
//         this.selected = false;
//         this.onPointerOver = function () {
//             _this.texture = AssetsManager.instance.getTexture('intro_item_over');
//         };
//         this.onPointerOut = function () {
//             if (_this.selected)
//                 _this.texture = AssetsManager.instance.getTexture('intro_item_selected');
//             else
//                 _this.texture = AssetsManager.instance.getTexture('intro_item_normal');
//         };
//         this.onPointerDown = function () {
//             _this.selected = true;
//             _this.emit('select', _this.data['page']);
//             _this.texture = AssetsManager.instance.getTexture('intro_item_selected');
//         };
//         this.show = function () {
//             _this.visible = true;
//         };
//         this.hide = function () {
//             _this.visible = false;
//         };
//         this.data = data;
//         this.texture = AssetsManager.instance.getTexture('intro_item_normal');
//         var title = new PIXI.Text(this.data['name'], { fontFamily: 'Regular', fontSize: 30, fill: 0xffffff, wordWrap: true, wordWrapWidth: Application.WIDTH });
//         this.addChild(title).position.set(221, this.height / 2);
//         title.anchor.set(0, 0.5);
//         var icon = AssetsManager.instance.getSprite(this.data['icon']);
//         this.addChild(icon);
//         this.interactive = true;
//         this.addListener('pointerover', this.onPointerOver);
//         this.addListener('pointerout', this.onPointerOut);
//         this.addListener('pointerdown', this.onPointerDown);
//     }
//     return IntroItem;
// }(PIXI.Sprite));


var IntroPopup = (function (_super) {
    __extends(IntroPopup, _super);
    function IntroPopup() {
        var _this = this;
        _super.call(this);
        this.show = function (page) {
            _this.texture = AssetsManager.instance.getTexture(page);
            _this.visible = true;
            _this.alpha = 1;
            new StoryLine().setVar('invoke_hideplayer');
        };
        this.hide = function () {
            _this.alpha = 0;
            _this.visible = false;
            new StoryLine().setVar('invoke_showplayer');
        };
        this.onHideComplete = function () {
            _this.visible = false;
        };
        this.onCloseClick = function () {
            _this.emit('complete');
            _this.hide();
        };
        this.visible = false;
        this.alpha = 0;
        this.interactive = true;
        this.btnClose = new ImageMarginButton('btn_reflection_close');
        this.addChild(this.btnClose).position.set(1666, 75);
        this.btnClose.addListener('pointerdown', this.onCloseClick);
    }
    return IntroPopup;
}(PIXI.Sprite));

// Intro page
var IntroPage = (function (_super) {
    __extends(IntroPage, _super);
    function IntroPage(data) {
        var _this = this;
        _super.call(this);
        this.showed_pages = [];
        this.onItemSelect = function (page) {
            _this.emit('show_intro_popup', page);
            if (_this.showed_pages.indexOf(page) == -1)
                _this.showed_pages.push(page);
            if (_this.showed_pages.length == 3)
                _this.emit('complete');
        };
        this.show = function () {
            _this.visible = true;
        };
        this.hide = function () {
            _this.visible = false;
        };
        this.data = data;
        this.addChild(AssetsManager.instance.getSprite(this.data['background']));

        var title = new PIXI.Text(this.data['title'], { fontFamily: 'Bold', fontSize: 42, fill: 0x000000, wordWrap: true, wordWrapWidth: Application.WIDTH });
        this.addChild(title).position.set(98, 60);

        // this.btn_check = new ImageMarginButton('btn_to_question');
        // this.addChild(this.btn_check).position.set(Application.WIDTH / 2 - this.btn_check.width / 2, 922);

        // var subtitle = new MultiStyleText(this.data['subtitle'], { default: { fontFamily: 'Regular', fontSize: 30, fill: 0x595876, wordWrap: true, wordWrapWidth: Application.WIDTH, lineHeight: 44 }, b: { fontFamily: 'Bold' } });
        // this.addChild(subtitle).position.set(62, 346);



        // var pages = this.data['pages'];
        // for (var i = 0; i < pages.length; i++) {
        //     var item = new IntroItem(pages[i]);
        //     this.addChild(item).position.set(171 + i * 531, 489);
        //     item.addListener('select', this.onItemSelect);
        // }
        this.hide();
    }
    return IntroPage;
}(PIXI.Container));



// var QuestionItem = (function (_super) {
//     __extends(QuestionItem, _super);
//     function QuestionItem(data, pos) {
//         var _this = this;
//         _super.call(this);
//         this.moved = false;
//         this.fixed = false;
//         this.onPointerEvent = function (event) {
//             switch (event.type) {
//                 case 'pointerdown':
//                     if (_this.fixed == true)
//                         return;
//                     _this.moved = true;
//                     _this.delta.set(event.data.global.x - _this.position.x, event.data.global.y - _this.position.y);
//                     _this.parent.setChildIndex(_this, _this.parent.children.length - 1);
//                     if (_this.place != null) {
//                         _this.place.free();
//                         _this.place = null;
//                     }
//                     break;
//                 case 'pointerupoutside':
//                 case 'pointerup':
//                     if (_this.moved == false)
//                         return;
//                     _this.moved = false;
//                     _this.emit('drop', _this);
//                     break;
//                 case 'pointermove':
//                     if (_this.moved == false)
//                         return;
//                     //this.texture = this.normal_texture;
//                     _this.x = Math.round(event.data.global.x - _this.delta.x);
//                     _this.y = Math.round(event.data.global.y - _this.delta.y);
//                     _this.emit('move', _this);
//                     break;
//                 case 'pointerover':
//                     _this.texture = _this.over_texture;
//                     break;
//                 case 'pointerout':
//                     _this.texture = _this.normal_texture;
//                     break;
//             }
//         };
//         this.dropTo = function (position) {
//             TweenLite.to(_this.position, 0.25, { x: position.x, y: position.y });
//             _this.texture = _this.placed_texture;
//         };
//         this.right = function () {
//             _this.texture = _this.right_texture;
//             //this.text.style.fill = 0xffffff;
//             _this.interactive = false;
//         };
//         this.wrong = function () {
//             _this.texture = _this.wrong_texture;
//             //this.text.style.fill = 0xffffff;
//             _this.interactive = false;
//         };
//         this.fix = function () {
//         };
//         this.return = function () {
//             _this.texture = _this.normal_texture;
//             //this.text.style.fill = 0x000000;
//             if (_this.place != null)
//                 _this.place.free();
//             _this.place = null;
//             TweenLite.to(_this.position, 0.25, { x: _this.orig_pos.x, y: _this.orig_pos.y, onComplete: _this.onReturnComplete });
//             _this.enable();
//         };
//         this.onReturnComplete = function () {
//             _this.emit('return');
//         };
//         this.enable = function () {
//             _this.interactive = true;
//         };
//         this.disable = function () {
//             _this.interactive = false;
//         };
//         this.data = data;
//         this.position.copy(pos);
//         this.orig_pos = new PIXI.Point();
//         this.orig_pos.copy(pos);
//         this.text = new PIXI.Text(this.data['text'], { fontFamily: 'Regular', fontSize: 28, fill: 0xffffff, wordWrap: true, wordWrapWidth: Application.WIDTH });
//         this.addChild(this.text);
//         this.text.position.set(40, QuestionItem.ITEM_HEIGHT / 2);
//         this.text.anchor.set(0, 0.5);
//         this.placed_texture = AssetsManager.instance.getTexture('question_item_normal');
//         this.over_texture = AssetsManager.instance.getTexture('question_item_over');
//         this.normal_texture = AssetsManager.instance.getTexture('question_item_normal');
//         this.right_texture = AssetsManager.instance.getTexture('question_item_right');
//         this.wrong_texture = AssetsManager.instance.getTexture('question_item_wrong');
//         this.texture = this.normal_texture;
//         this.interactive = true;
//         this.buttonMode = true;
//         this.addListener('pointerover', this.onPointerEvent);
//         this.addListener('pointerout', this.onPointerEvent);
//         this.addListener('pointerdown', this.onPointerEvent);
//         this.addListener('pointerup', this.onPointerEvent);
//         this.addListener('pointermove', this.onPointerEvent);
//         this.addListener('pointerupoutside', this.onPointerEvent);
//         this.delta = new PIXI.Point();
//     }
//     Object.defineProperty(QuestionItem.prototype, "rect", {
//         get: function () {
//             return new Rectangle(this.position.x, this.position.y, QuestionItem.ITEM_WIDTH, QuestionItem.ITEM_HEIGHT);
//         },
//         enumerable: true,
//         configurable: true
//     });
//     Object.defineProperty(QuestionItem.prototype, "correct", {
//         get: function () {
//             return false;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     Object.defineProperty(QuestionItem.prototype, "type", {
//         get: function () {
//             return this.data['type'];
//         },
//         enumerable: true,
//         configurable: true
//     });
//     QuestionItem.ITEM_WIDTH = 685;
//     QuestionItem.ITEM_HEIGHT = 110;
//     return QuestionItem;
// }(PIXI.Sprite));


// var Place = (function (_super) {
//     __extends(Place, _super);
//     function Place(position, data) {
//         var _this = this;
//         _super.call(this);
//         this.fixed = false;
//         this.add = function (item) {
//             if (_this.item != null) {
//                 _this.item.return();
//             }
//             _this.item = item;
//             _this.item.place = _this;
//             _this.item.dropTo(new PIXI.Point(_this.x, _this.y));
//         };
//         this.clear = function () {
//             if (_this.item != null)
//                 _this.item.return();
//             _this.item = null;
//         };
//         this.free = function () {
//             _this.item = null;
//         };
//         this.fix = function () {
//             if (_this.item == null)
//                 return;
//             _this.fixed = true;
//             _this.item.right();
//         };
//         this.wrong = function () {
//             if (_this.item == null)
//                 return;
//             _this.item.wrong();
//         };
//         this.data = data;
//         this.position = position;
//     }
//     Object.defineProperty(Place.prototype, "empty", {
//         get: function () {
//             if (this.item == null)
//                 return true;
//             return false;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     Object.defineProperty(Place.prototype, "correct", {
//         get: function () {
//             if (this.item == null)
//                 return true;
//             if (this.item.type == this.data['type'])
//                 return true;
//             return false;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     return Place;
// }(Rectangle));

var QuestionPageNew = (function (_super) {
    __extends(QuestionPageNew, _super);
    function QuestionPageNew(data) {
        var _this = this;
        _super.call(this);
        this.onItemUpdate = function () {
            _this.btn_check.visible = true;
        };
        this.onCheckClick = function () {
            _this.emit('complete');
        };
        this.fix = function () {
            _this.btn_check.visible = false;
            var res = true;
            for (var i = 0; i < _this.items.length; i++) {
                _this.items[i].fix();
                if (_this.items[i].correct == false)
                    res = false;
            }
            return res;
        };
        this.show = function (reset_arguments) {
            console.log('reset_arguments', reset_arguments);
            _this.visible = true;
            if (reset_arguments == true) {
                _this.btn_check.visible = false;
                for (var i = 0; i < _this.items.length; i++) {
                    _this.items[i].reset();
                }
            }
        };
        this.hide = function () {
            _this.visible = false;
        };
        this.randomize = function (val1, val2) {
            if (Math.random() > 0.5)
                return 1;
            return -1;
        };
        this.data = data;
        this.addChild(AssetsManager.instance.getSprite(this.data['background']));

        var title = new PIXI.Text(this.data['title'], { fontFamily: 'Bold', fontSize: 42, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH });
        this.addChild(title).position.set(98, 60);

        var subtitle = new MultiStyleText(this.data['subtitle'], { default: { fontFamily: 'Regular', fontSize: 30, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH, lineHeight: 44 }, b: { fontFamily: 'Bold' } });
        this.addChild(subtitle).position.set(98, 148);

        var task = new MultiStyleText(this.data['task'], { default: { fontFamily: 'Italic', fontSize: 28, fill: 0x000001, wordWrap: true, wordWrapWidth: Application.WIDTH }, b: { fontFamily: 'Bold' } });
        this.addChild(task).position.set(98, 206);
        this.hide();
        this.items = new Array();
        var items = this.data['items'];
        items.sort(this.randomize);
        for (var i = 0; i < items.length; i++) {
            var item = new ArgumentsItem(items[i]);
            this.addChild(item).position.set(104, 378 + i * 114);
            this.items.push(item);
        }
        this.addListener('update', this.onItemUpdate);
        this.btn_check = new ImageMarginButton('btn_check_answer');
        this.addChild(this.btn_check).position.set(Application.WIDTH / 2 - this.btn_check.width / 2, 922);
        this.btn_check.addListener('pointerdown', this.onCheckClick);
        this.btn_check.visible = false;
    }
    return QuestionPageNew;
}(PIXI.Container));

// var QuestionPage = (function (_super) {
//     __extends(QuestionPage, _super);
//     function QuestionPage(data) {
//         var _this = this;
//         _super.call(this);
//         this.filled = false;
//         this.fixed = false;
//         this.sort_areas = function (val1, val2) {
//             if (val1['area'] < val2['area'])
//                 return 1;
//             return -1;
//         };
//         this.onItemDrop = function (item) {
//             var areas = new Array();
//             for (var i = 0; i < _this.places.length; i++) {
//                 if (_this.places[i].fixed == true)
//                     continue;
//                 if (_this.places[i].intersects(item.rect) == false)
//                     continue;
//                 areas.push({ 'place': _this.places[i], 'area': _this.places[i].intersection(item.rect).area });
//             }
//             areas.sort(_this.sort_areas);
//             if (areas.length == 0) {
//                 item.return();
//                 return;
//             }
//             var place = areas[0]['place'];
//             place.add(item);
//             _this.check_filled();
//         };
//         this.check_filled = function () {
//             _this.btn_check.visible = false;
//             for (var i = 0; i < _this.places.length; i++) {
//                 if (_this.places[i].empty)
//                     return;
//             }
//             _this.btn_check.visible = true;
//         };
//         this.onCheckClick = function () {
//             _this.btn_check.visible = false;
//             var res = true;
//             for (var i = 0; i < _this.places.length; i++) {
//                 var place = _this.places[i];
//                 if (place.correct == true)
//                     place.fix();
//                 else {
//                     place.wrong();
//                     res = false;
//                 }
//             }
//             //if (res == false) setTimeout(this.retry, 1000);
//             //else this.emit('complete');
//             _this.fix_res = res;
//             for (var i = 0; i < _this.items.length; i++)
//                 _this.items[i].disable();
//             setTimeout(_this.complete, 1000);
//         };
//         this.retry = function () {
//             for (var i = 0; i < _this.places.length; i++) {
//                 var place = _this.places[i];
//                 if (place.correct == true)
//                     place.fix();
//                 else
//                     place.clear();
//             }
//         };
//         this.fix_res = false;
//         this.fix = function () {
//             return _this.fix_res;
//         };
//         this.show = function () {
//             _this.visible = true;
//         };
//         this.hide = function () {
//             _this.visible = false;
//         };
//         this.randomize = function (val1, val2) {
//             if (Math.random() > 0.5)
//                 return 1;
//             return -1;
//         };
//         this.complete = function () {
//             _this.emit('complete');
//         };
//         this.data = data;
//         this.addChild(AssetsManager.instance.getSprite(this.data['background']));
//         var title = new PIXI.Text(this.data['title'], { fontFamily: 'Bold', fontSize: 48, fill: 0xffffff, wordWrap: true, wordWrapWidth: Application.WIDTH });
//         this.addChild(title).position.set(90, 61);
//         var subtitle = new MultiStyleText(this.data['subtitle'], { default: { fontFamily: 'Regular', fontSize: 30, fill: 0xffffff, wordWrap: true, wordWrapWidth: Application.WIDTH, lineHeight: 44 }, b: { fontFamily: 'Bold' } });
//         this.addChild(subtitle).position.set(90, 179);
//         var task = new MultiStyleText(this.data['task'], { default: { fontFamily: 'Italic', fontSize: 32, fill: 0x595876, wordWrap: true, wordWrapWidth: Application.WIDTH }, b: { fontFamily: 'Bold' } });
//         this.addChild(task).position.set(62, 223);
//         this.hide();
//         var places = this.data['places'];
//         this.places = new Array();
//         for (var i = 0; i < places.length; i++) {
//             var place = new Place(i, places[i]);
//             place.x = parse_point(places[i]['position']).x;
//             place.y = parse_point(places[i]['position']).y;
//             place.width = QuestionItem.ITEM_WIDTH;
//             place.height = QuestionItem.ITEM_HEIGHT;
//             this.places.push(place);
//         }
//         this.items = new Array();
//         var items = this.data['items'];
//         items.sort(this.randomize);
//         for (var i = 0; i < items.length; i++) {
//             var item = new QuestionItem(items[i], new PIXI.Point(1131, 282 + i * 237));
//             this.addChild(item);
//             item.addListener('drop', this.onItemDrop);
//             this.items.push(item);
//             item = new QuestionItem(items[i], new PIXI.Point(1131, 282 + i * 237));
//             this.addChild(item);
//             item.addListener('drop', this.onItemDrop);
//             this.items.push(item);
//             item = new QuestionItem(items[i], new PIXI.Point(1131, 282 + i * 237));
//             this.addChild(item);
//             item.addListener('drop', this.onItemDrop);
//             this.items.push(item);
//         }
//         //his.addListener('update', this.onItemUpdate);
//         this.btn_check = new ImageMarginButton('btn_check_answer');
//         this.addChild(this.btn_check).position.set(Application.WIDTH / 2 - this.btn_check.width / 2, 931);
//         this.btn_check.addListener('pointerdown', this.onCheckClick);
//         this.btn_check.visible = false;
//     }
//     return QuestionPage;
// }(PIXI.Container));
var Reflection = (function (_super) {
    __extends(Reflection, _super);
    function Reflection() {
        var _this = this;
        _super.call(this);
        this.show = function (data) {
            /*
            switch (data['type'])
            {
                case 'right':
                    this.btnNext.position.y = 832;
                    this.btnClose.position.set(1477, 137);
                    this.text.position.y = 503;
                    break;
    
                case 'wrong':
                    this.btnNext.position.y = 875;
                    this.btnClose.position.set(1477, 93);
                    this.text.position.y = 454;
                    break;
                    
                case 'notquite':
                    this.btnNext.position.y = 895;
                    this.btnClose.position.set(1477, 74);
                    this.text.position.y = 454;
                    break;
                    
            }
            */
            _this.texture = AssetsManager.instance.getTexture(data['background']);
            _this.text.text = data['text'];
            _this.visible = true;
            _this.alpha = 1;
            //TweenLite.to(this, 0.5, { alpha: 1 });
            new StoryLine().setVar('invoke_hideplayer');
        };
        this.hide = function () {
            //TweenLite.to(this, 0.5, { alpha: 0, onComplete: this.onHideComplete });
            _this.alpha = 0;
            _this.visible = false;
            new StoryLine().setVar('invoke_showplayer');
        };
        this.onHideComplete = function () {
            _this.visible = false;
        };
        this.onNextClick = function () {
            _this.emit('next');
        };
        this.onCloseClick = function () {
            _this.emit('complete');
        };
        this.visible = false;
        this.alpha = 0;
        this.interactive = true;
        this.btnNext = new ImageMarginButton('btn_next');
        this.addChild(this.btnNext).position.set(Application.WIDTH / 2 - this.btnNext.width / 2, 743);
        this.btnNext.addListener('pointerdown', this.onNextClick);

        //this.btnNext.visible = false;
        this.btnClose = new ImageMarginButton('btn_reflection_close');
        this.addChild(this.btnClose).position.set(1456, 218);
        this.btnClose.addListener('pointerdown', this.onCloseClick);


        this.text = new PIXI.Text('', { fontFamily: 'Regular', fontSize: 30, fill: 0x232323, wordWrap: true, wordWrapWidth: Application.WIDTH, align: 'left' });
        this.addChild(this.text).position.set(435, 450);
        this.text.anchor.set(0, 0);
    }
    return Reflection;
}(PIXI.Sprite));
var Tutorial = (function (_super) {
    __extends(Tutorial, _super);
    function Tutorial() {
        var _this = this;
        _super.call(this);
        this.onNextClick = function () {
            _this.emit('complete');
        };
        this.show = function () {
            if (_this.data['tutorial'] == '') {
                _this.emit('complete');
                return;
            }
            if (new StoryLine().getVar(_this.data['showhelp_var']) == 0) {
                _this.emit('complete');
                return;
            }
            _this.visible = true;
            //TweenLite.to(this, 0.5, { alpha: 1 });
            _this.alpha = 1;
            new StoryLine().setVar('invoke_hideplayer');
            new StoryLine().setVar(_this.data['showhelp_var'], 0);
        };
        this.hide = function () {
            //TweenLite.to(this, 0.5, { alpha: 0, onComplete: this.onHideComplete });
            _this.visible = false;
            _this.alpha = 0;
            new StoryLine().setVar('invoke_showplayer');
        };
        this.onHideComplete = function () {
            _this.visible = false;
        };
        this.visible = false;
        this.alpha = 0;
        this.data = AssetsManager.instance.getObject('data');
        if (this.data['tutorial'] == '') {
            //   this.emit('complete');
            return;
        }
        if (new StoryLine().getVar(this.data['showhelp_var']) == 0)
            return;
        this.addChild(AssetsManager.instance.getSprite(this.data['tutorial']));
        var btn = new ImageMarginButton('btn_tutorial_close');
        this.addChild(btn).position.set(1350, 922);
        btn.addListener('pointerdown', this.onNextClick);
        this.interactive = true;
    }
    return Tutorial;
}(PIXI.Container));
var Coursmos = (function () {
    function Coursmos() {
        var _this = this;
        this.externalCourseId = '';
        this.externalLessonId = '';
        this.status = function (lesson_id) {
            if (lesson_id === void 0) { lesson_id = 'skoda_services'; }
            var id;
            if (_this.externalCourseId != '')
                id = _this.externalCourseId;
            else
                id = _this.externalLessonId;
            var url = _this.baseUrl + '/lms/external-lessons/' + id + '/status';
            console.log('status course: ', url);
            var headers = new Object();
            headers['Accept'] = 'application/json';
            headers['content-type'] = 'application/json';
            headers['x-access-token'] = _this.accessToken;
            var response_json = $.ajax({
                type: "GET",
                url: url,
                headers: headers,
                async: true,
                success: _this.onStatusComplete,
                error: _this.onError
            });
        };
        this.start = function (lesson_id) {
            if (lesson_id === void 0) { lesson_id = 'skoda_services'; }
            var id;
            if (_this.externalCourseId != '')
                id = _this.externalCourseId;
            else
                id = _this.externalLessonId;
            var url = _this.baseUrl + '/lms/external-lessons/' + id + '/start';
            console.log('start course: ', url);
            var headers = new Object();
            headers['Accept'] = 'application/json';
            headers['content-type'] = 'application/json';
            headers['x-access-token'] = _this.accessToken;
            var response_json = $.ajax({
                type: "POST",
                url: url,
                headers: headers,
                async: true,
                success: _this.onStartComplete,
                error: _this.onError
            });
        };
        this.complete = function (lesson_id) {
            if (lesson_id === void 0) { lesson_id = 'skoda_services'; }
            var id;
            if (_this.externalCourseId != '')
                id = _this.externalCourseId;
            else
                id = _this.externalLessonId;
            var url = _this.baseUrl + '/lms/external-lessons/' + id + '/complete';
            console.log('complete course: ', url);
            var headers = new Object();
            headers['Accept'] = 'application/json';
            headers['content-type'] = 'application/json';
            headers['x-access-token'] = _this.accessToken;
            var response_json = $.ajax({
                type: "POST",
                url: url,
                headers: headers,
                async: false,
                success: _this.onStartComplete,
                error: _this.onError
            });
        };
        this.onStatusComplete = function (data, textStatus) {
            console.log(data);
            console.log(textStatus);
        };
        this.onStartComplete = function (data, textStatus) {
            console.log(data);
            console.log(textStatus);
        };
        this.onCompleteComplete = function (data, textStatus) {
            console.log(data);
            console.log(textStatus);
        };
        this.onError = function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            }
            else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            }
            else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            }
            else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            }
            else if (exception === 'timeout') {
                msg = 'Time out error.';
            }
            else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
        };
        var params = window.location.search.replace('?', '').split('&').reduce(function (p, e) { var a = e.split('='); p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]); return p; }, {});
        console.log(window.location.search);
        console.log(params);
        this.type = params['type'];
        if (params.hasOwnProperty('externalCourseId'))
            this.externalCourseId = params['externalCourseId'];
        if (params.hasOwnProperty('externalLessonId'))
            this.externalLessonId = params['externalLessonId'];
        if (params.hasOwnProperty('courseId'))
            this.courseId = params['courseId'];
        this.baseUrl = params['baseUrl'];
        this.accessToken = params['accessToken'];
    }
    Object.defineProperty(Coursmos, "instance", {
        get: function () {
            if (Coursmos._instance == null)
                Coursmos._instance = new Coursmos();
            return Coursmos._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Coursmos;
}());
var CompilationParams = (function () {
    function CompilationParams() {
    }
    CompilationParams.COMPILATION_DATE = "20.12.2022 07:04:34";
    return CompilationParams;
}());
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        var _this = this;
        _super.call(this);
        this.init = function (data) {
            _this.loader.add('preloader', AssetsManager.PRELOADER + data['preloader']);
            if (typeof (data['background']) == 'string') {
                _this.loader.add('background', AssetsManager.PRELOADER + data['background']);
            }
            else {
                _this.background.texture = GraphicsHelper.createRect(Application.WIDTH, Application.HEIGHT, data['background']).generateCanvasTexture();
            }
            _this.loader.load(_this.onLoad);
        };
        this.onLoad = function () {
            //this.background.texture = this.loader.resources['background'].texture;
            _this.preloader.texture = _this.loader.resources['preloader'].texture;
            _this.emit('ready');
            _this.timer = setInterval(_this.rotate, 10);
        };
        this.progress = function (current, max) {
            /* this.counter.text = Math.floor(100 * current / max).toString() + '%';
     
             this.arc.clear();
             this.arc.lineStyle(6, 0x00a7c9);
             
     
             let radius: number = 185;
             */
            var count = Math.floor(360 * current / max);
            /*
            
            for (let i: number = 0; i < count; i++)
            {
                let x: number = radius * Math.sin(Math.PI * i / 180);
                let y: number = -radius * Math.cos(Math.PI * i / 180);
                if (i == 0) this.arc.moveTo(x, y);
                else this.arc.lineTo(x, y);
            }
            */
            // this.preloader.rotation = this.preloader.rotation + 0.05;
        };
        this.stop = function () {
            _this.visible = false;
            clearInterval(_this.timer);
        };
        this.rotate = function () {
            _this.preloader.rotation = _this.preloader.rotation + 0.025;
        };
        this.loader = new PIXI.loaders.Loader();
        this.addChild(this.background = new PIXI.Sprite());
        this.addChild(this.preloader = new PIXI.Sprite());
        this.preloader.position.set(Application.WIDTH / 2, Application.HEIGHT / 2);
        this.preloader.anchor.set(0.5, 0.5);
    }
    return Preloader;
}(PIXI.Sprite));
var Scorm = (function () {
    function Scorm(wnd, version, local) {
        var _this = this;
        if (version === void 0) { version = '2004'; }
        if (local === void 0) { local = false; }
        this.findAttemptLimit = 5;
        this.findAttempts = 0;
        this.available = false;
        this.local = false;
        this.findAPI = function (wnd) {
            _this.findAttempts++;
            /*
            if (wnd.API_1484_11 == undefined && wnd.opener != null)
            {
                this.findAPI(wnd.opener);
            }
    
            if (wnd.API_1484_11 == undefined && wnd.opener == null && wnd.parent != null && wnd.parent != wnd)
            {
                this.findAPI(wnd.parent);
            }
    
            if (wnd.API_1484_11 == undefined && wnd.opener == null)
            {
                return false;
            }
            */
            if (wnd == undefined) {
                return false;
            }
            if (wnd.API_1484_11 == undefined &&
                wnd.parent != undefined &&
                wnd.parent != null &&
                wnd.parent != wnd) {
                _this.findAPI(wnd.parent);
            }
            else {
                return false;
            }
            _this.API = wnd.API_1484_11;
            return true;
        };
        this.getValue = function (key) {
            if (_this.local) {
                return window.localStorage.getItem(key);
            }
            if (_this.available)
                return pipwerks.SCORM.get(key);
            return null;
        };
        this.setValue = function (key, value) {
            var res = true;
            if (key != 'cmi.session_time')
                console.log(key, value);
            if (_this.local) {
                console.log('use localStorage');
                window.localStorage.setItem(key, value);
                return;
            }
            if (_this.available) {
                //console.log('use SCORM API')
                res = pipwerks.SCORM.set(key, value);
                setTimeout(_this.commit, 1000);
            }
            else {
                if (key != 'cmi.session_time')
                    console.log('SCORM API нету');
            }
            return res;
        };
        this.commit = function () {
            pipwerks.SCORM.save();
        };
        this.unloadHandler = function () {
            pipwerks.SCORM.quit();
        };
        this.local = local;
        wnd.onbeforeunload = this.unloadHandler;
        /*
        if (this.findAPI(wnd) == true)
        {

            console.log('find API:', this.API);
            console.log('attempts:', this.findAttempts);

            console.log(this.API['LMSGetValue']('cmi.learner_name'));

        }
        else
        {
           /* if (this.findAPI(wnd.top.opener) == true)
            {
                console.log('find API:', this.API);
                console.log('attempts:', this.findAttempts);

                console.log(this.API['LMSGetValue']('cmi.learner_name'));
            }
            else
            {
                console.log('API not found');
                console.log('attempts:', this.findAttempts);
            }
        }
    */
        try {
            pipwerks.SCORM.version = version;
            var res = pipwerks.SCORM.init();
            if (res == true) {
                this.available = true;
                console.log('SCORM API найден');
            }
            else {
                console.log('SCORM API не найден 2');
            }
        }
        catch (e) {
            console.log('SCORM API не найден 3');
        }
    }
    return Scorm;
}());
var UrlManager = (function () {
    function UrlManager() {
        var _this = this;
        this.show = function (url_type) {
            var url = AssetsManager.FILES + _this.data[url_type];
            window.open(url, '_blank');
        };
        this.data = AssetsManager.instance.getResource('urls').data;
    }
    Object.defineProperty(UrlManager, "instance", {
        get: function () {
            if (UrlManager._instance == null)
                UrlManager._instance = new UrlManager();
            return UrlManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    UrlManager._instance = null;
    return UrlManager;
}());
var StoryLine = (function () {
    function StoryLine() {
        var _this = this;
        this.storyLine = window.parent;
        this.goNext = function () {
            var currentTime = new Date();
            var uniqueTime = currentTime.getTime();
            if (_this.player != null)
                _this.player.SetVar('goNext', uniqueTime);
            console.log('goNext invoked');
        };
        this.setVar = function (variable, value) {
            if (value === void 0) { value = null; }
            var currentTime = new Date();
            if (value == null)
                value = currentTime.getTime();
            if (_this.player != null)
                _this.player.SetVar(variable, value);
            console.log(variable, 'set to value:', value);
        };
        this.getVar = function (variable) {
            var value = null;
            if (_this.player != null)
                value = _this.player.GetVar(variable);
            console.log(variable, 'get value:', value);
            return value;
        };
        if (this.storyLine != null) {
            try {
                this.player = this.storyLine.GetPlayer();
            }
            catch (e) {
                this.player = null;
            }
        }
    }
    Object.defineProperty(StoryLine.prototype, "inPlayer", {
        get: function () {
            return this.player == null ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    return StoryLine;
}());
var AssetsManager = (function (_super) {
    __extends(AssetsManager, _super);
    function AssetsManager() {
        var _this = this;
        _super.call(this);
        this.maxItems = 0;
        this.start = function (callback) {
            _this.callback = callback;
            _this.loader.load(_this.onPreloaderConfigLoad);
        };
        this.onPreloaderConfigLoad = function () {
            var preloader_config = _this.getResource('preloader').data;
            _this.preloader.init(preloader_config);
        };
        this.onPreloaderReady = function () {
            _this.loader.add('configs', AssetsManager.SYSTEM + 'configs.json');
            _this.loader.load(_this.onConfigsLoad);
        };
        this.onProgressLoad = function (loader, resource) {
            _this.maxItems = Math.max(loader._numToLoad, _this.maxItems);
            var current = _this.maxItems - loader._numToLoad;
            _this.preloader.progress(current, _this.maxItems);
        };
        this.onConfigsLoad = function () {
            var configs = _this.loader.resources['configs'].data;
            for (var key in configs) {
                var config = configs[key];
                _this.loader.add(key, AssetsManager.DATA + config);
            }
            _this.loader.add('system_images', AssetsManager.SYSTEM + 'system_images.json');
            _this.loader.add('images', AssetsManager.DATA + 'images.json');
            _this.loader.load(_this.onLoad);
        };
        this.onLoad = function () {
            var images = _this.loader.resources['images'].data;
            var system_images = _this.loader.resources['system_images'].data;
            for (var key in system_images) {
                var image = system_images[key];
                var dotIndex = image.lastIndexOf('.');
                var ext = image.substr(dotIndex + 1);
                if (ext != 'svg')
                    _this.loader.add(key, AssetsManager.SYSTEM_IMAGE + image);
                _this.keys[key] = ext;
                _this.keys[key + '_url'] = AssetsManager.SYSTEM_IMAGE + image;
            }
            for (var key in images) {
                var image = images[key];
                var dotIndex = image.lastIndexOf('.');
                var ext = image.substr(dotIndex + 1);
                if (ext != 'svg')
                    _this.loader.add(key, AssetsManager.IMAGE + image);
                _this.keys[key] = ext;
                _this.keys[key + '_url'] = AssetsManager.IMAGE + image;
            }
            _this.loader.on('progress', _this.onProgressLoad);
            _this.loader.load(_this.callback);
        };
        this.getResource = function (name) {
            return _this.loader.resources[name];
        };
        this.getObject = function (name) {
            return _this.loader.resources[name].data;
        };
        this.getTexture = function (name) {
            if (_this.keys[name] == 'svg') {
                var texture = PIXI.Texture.fromImage(_this.keys[name + '_url']);
                return texture;
            }
            return _this.loader.resources[name].texture;
        };
        this.getSprite = function (name) {
            return new PIXI.Sprite(_this.getTexture(name));
        };
        this.stopPreloader = function () {
            _this.preloader.stop();
        };
        this.loader = new PIXI.loaders.Loader();
        this.keys = new Object();
        this.loader.add('preloader', AssetsManager.PRELOADER + 'preloader.json');
        this.preloader = new Preloader();
        this.addChild(this.preloader);
        this.preloader.addListener('ready', this.onPreloaderReady);
    }
    Object.defineProperty(AssetsManager, "instance", {
        get: function () {
            if (AssetsManager._instance == null)
                AssetsManager._instance = new AssetsManager();
            return AssetsManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    AssetsManager._instance = null;
    AssetsManager.DATA = 'data/';
    AssetsManager.IMAGE = 'data/image/';
    AssetsManager.AUDIO = 'data/audio/';
    AssetsManager.VIDEO = 'data/video/';
    AssetsManager.FILES = 'data/files/';
    AssetsManager.SYSTEM = 'system/';
    AssetsManager.SYSTEM_IMAGE = 'system/image/';
    AssetsManager.PRELOADER = 'system/preloader/';
    return AssetsManager;
}(PIXI.Container));
var Music = (function () {
    function Music() {
        /*
        let url: string = Application.AUDIO_URL + 'background_music.mp3';

        this.sound = new Howl({
            src: [url],
            autoplay: false,
            loop: true,
            volume: 0.25,

        });
        */
    }
    Music.prototype.play = function () {
        //this.sound.play();
    };
    Music.prototype.stop = function () {
        //this.sound.stop();
    };
    return Music;
}());
var Sound = (function () {
    function Sound() {
        /* this.answer_wrong = new Howl({ src: Application.AUDIO_URL + 'answer_wrong.mp3', autoplay: false, preload: true });
        this.case_right = new Howl({ src: Application.AUDIO_URL + 'case_right.mp3', autoplay: false, preload: true });
        this.case_wrong = new Howl({ src: Application.AUDIO_URL + 'case_wrong.mp3', autoplay: false, preload: true });
        this.test_right = new Howl({ src: Application.AUDIO_URL + 'test_right.mp3', autoplay: false, preload: true });
        this.test_wrong = new Howl({ src: Application.AUDIO_URL + 'test_wrong.mp3', autoplay: false, preload: true });
        this.over = new Howl({ src: Application.AUDIO_URL + 'over.mp3', autoplay: false, preload: true });
        this.click = new Howl({ src: Application.AUDIO_URL + 'click.mp3', autoplay: false, preload: true });

        this.sounds = new Object();

        this.sounds['over'] = this.over;
        this.sounds['click'] = this.click;
        this.sounds['test_wrong'] = this.test_wrong;
        this.sounds['test_right'] = this.test_right;
        this.sounds['case_wrong'] = this.case_wrong;
        this.sounds['case_right'] = this.case_right;
        this.sounds['answer_wrong'] = this.answer_wrong;
        this.sounds['answer_right'] = this.answer_right;


        this.sounds = new Object();
        this.sounds['skype'] = this.skype;
                */
    }
    return Sound;
}());
var FontsManager = (function () {
    function FontsManager() {
        (function (d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'libs/webfontloader.js';
            s.parentNode.insertBefore(wf, s);
        })(document);
    }
    Object.defineProperty(FontsManager, "instance", {
        get: function () {
            if (FontsManager._instance == null)
                FontsManager._instance = new FontsManager();
            return FontsManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    FontsManager.prototype.setFonts = function (value, onLoad) {
        WebFontConfig =
        {
            custom: {
                families: value,
                urls: ['fonts/fonts.css']
            },
            active: function () {
                onLoad();
            }
        };
    };
    FontsManager._instance = null;
    return FontsManager;
}());
var FullScreenManager = (function () {
    function FullScreenManager() {
        this.canvas = null;
        this.backgroundColor = '#000000';
    }
    Object.defineProperty(FullScreenManager, "instance", {
        get: function () {
            if (FullScreenManager._instance == null)
                FullScreenManager._instance = new FullScreenManager();
            return FullScreenManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    FullScreenManager.prototype.init = function (canvas, backgroundColor) {
        if (backgroundColor === void 0) { backgroundColor = '#000000'; }
        this.canvas = canvas;
        this.backgroundColor = backgroundColor;
    };
    FullScreenManager.prototype.centerFit = function () {
        var scaleX = window.innerWidth / this.canvas.offsetWidth;
        var scaleY = window.innerHeight / this.canvas.offsetHeight;
        var scale = Math.min(scaleX, scaleY);
        if (scale >= 1)
            this.center();
        else
            this.scale();
    };
    FullScreenManager.prototype.centerFit2 = function () {
        var parent = this.canvas.parentElement;
        var pw = parent.clientWidth;
        var ph = parent.clientHeight;
        var scaleX = pw / this.canvas.offsetWidth;
        var scaleY = ph / this.canvas.offsetHeight;
        var scale = Math.min(scaleX, scaleY);
        if (FullScreenManager.currentScale == scale)
            return;
        this.canvas.style.transformOrigin = '0 0';
        this.canvas.style.transform = 'scale(' + scale + ')';
        document.body.style.backgroundColor = this.backgroundColor;
        FullScreenManager.currentScale = scale;
    };
    FullScreenManager.prototype.center = function () {
        if (this.canvas == null)
            return;
        var marginW;
        var marginH;
        this.canvas.style.transform = 'scale(1)';
        marginW = (window.innerWidth - this.canvas.offsetWidth) / 2;
        this.canvas.style.marginLeft = marginW + 'px';
        this.canvas.style.marginRight = marginW + 'px';
        marginH = (window.innerHeight - this.canvas.offsetHeight) / 2;
        this.canvas.style.marginTop = marginH + 'px';
        this.canvas.style.marginBottom = marginH + 'px';
        this.canvas.style.paddingLeft = '0';
        this.canvas.style.paddingRight = '0';
        this.canvas.style.paddingTop = '0';
        this.canvas.style.paddingBottom = '0';
        this.canvas.style.display = 'block';
        document.body.style.backgroundColor = this.backgroundColor;
        FullScreenManager.currentScale = 1;
    };
    FullScreenManager.prototype.scale = function () {
        if (this.canvas == null)
            return;
        var scaleX;
        var scaleY;
        var scale;
        var center;
        var margin;
        scaleX = window.innerWidth / this.canvas.offsetWidth;
        scaleY = window.innerHeight / this.canvas.offsetHeight;
        scale = Math.min(scaleX, scaleY);
        if (FullScreenManager.currentScale == scale)
            return;
        this.canvas.style.transformOrigin = '0 0';
        this.canvas.style.transform = 'scale(' + scale + ')';
        if (this.canvas.offsetWidth > this.canvas.offsetHeight) {
            if (this.canvas.offsetWidth * scale < window.innerWidth) {
                center = 'horizontally';
            }
            else {
                center = 'vertically';
            }
        }
        else {
            if (this.canvas.offsetHeight * scale < window.innerHeight) {
                center = 'vertically';
            }
            else {
                center = 'horizontally';
            }
        }
        if (center === 'horizontally') {
            margin = (window.innerWidth - this.canvas.offsetWidth * scale) / 2;
            this.canvas.style.marginTop = '0';
            this.canvas.style.marginBottom = '0';
            this.canvas.style.marginLeft = margin + 'px';
            this.canvas.style.marginRight = margin + 'px';
        }
        if (center === 'vertically') {
            margin = (window.innerHeight - this.canvas.offsetHeight * scale) / 2;
            this.canvas.style.marginTop = margin + 'px';
            this.canvas.style.marginBottom = margin + 'px';
            this.canvas.style.marginLeft = '0';
            this.canvas.style.marginRight = '0';
        }
        this.canvas.style.paddingLeft = '0';
        this.canvas.style.paddingRight = '0';
        this.canvas.style.paddingTop = '0';
        this.canvas.style.paddingBottom = '0';
        this.canvas.style.display = 'block';
        document.body.style.backgroundColor = this.backgroundColor;
        //Fix some quirkiness in scaling for Safari
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
            }
            else {
            }
        }
        FullScreenManager.currentScale = scale;
    };
    FullScreenManager.prototype.scale_check_mobile = function () {
        var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
        console.log('iOS', iOS);
        if (iOS == true) {
            this.scale_mobile();
        }
        else {
            this.scale_desktop();
        }
    };
    FullScreenManager.prototype.scale_mobile = function () {
        if (this.canvas == null)
            return;
        var scaleX;
        var scaleY;
        var scale;
        var center;
        var margin;
        scaleX = parent.innerWidth / this.canvas.offsetWidth;
        scaleY = parent.innerHeight / this.canvas.offsetHeight;
        scale = Math.min(scaleX, scaleY);
        //if (FullScreenManager.currentScale == scale) return;
        console.log(scale);
        this.canvas.style.transformOrigin = '0 0';
        this.canvas.style.transform = 'scale(' + scale + ')';
        this.canvas.style.marginTop = '0';
        this.canvas.style.marginLeft = '0';
        this.canvas.style.paddingLeft = '0';
        this.canvas.style.paddingRight = '0';
        this.canvas.style.paddingTop = '0';
        this.canvas.style.paddingBottom = '0';
        this.canvas.style.display = 'block';
        document.body.style.backgroundColor = this.backgroundColor;
        FullScreenManager.currentScale = scale;
    };
    FullScreenManager.prototype.scale_desktop = function () {
        if (this.canvas == null)
            return;
        var scaleX;
        var scaleY;
        var scale;
        var center;
        var margin;
        /*
        console.log(parent);
        console.log('parent.innerWidth:', parent.innerWidth);
        console.log('parent.innerHeight:', parent.innerHeight);
        console.log('parent.outerWidth:', parent.outerWidth);
        console.log('parent.outerHeight:', parent.outerHeight);

        let par: HTMLBodyElement = this.canvas.parentElement as HTMLBodyElement;
        console.log(par);
        console.log('body.offsetWidth:', par.offsetWidth);
        console.log('body.offsetHeight:', par.offsetHeight);
        console.log('body.clientWidth:', par.clientWidth);
        console.log('body.clientHeight:', par.clientHeight);
        console.log('body.scrollWidth:', par.scrollWidth);
        console.log('body.scrollHeight:', par.scrollHeight);

        console.log(window);
        console.log('window.innerWidth:', window.innerWidth);
        console.log('window.innerHeight:', window.innerHeight);
        console.log('window.outerWidth:', window.outerWidth);
        console.log('window.outerHeight:', window.outerHeight);
        */
        scaleX = window.innerWidth / Application.WIDTH;
        scaleY = window.innerHeight / Application.HEIGHT;
        scale = Math.min(scaleX, scaleY);
        //if (FullScreenManager.currentScale == scale) return;
        console.log(scale);
        this.canvas.style.transformOrigin = '0 0';
        this.canvas.style.transform = 'scale(' + scale + ')';
        this.canvas.style.marginTop = '0';
        this.canvas.style.marginLeft = '0';
        this.canvas.style.paddingLeft = '0';
        this.canvas.style.paddingRight = '0';
        this.canvas.style.paddingTop = '0';
        this.canvas.style.paddingBottom = '0';
        this.canvas.style.display = 'block';
        document.body.style.backgroundColor = this.backgroundColor;
        FullScreenManager.currentScale = scale;
    };
    FullScreenManager._instance = null;
    FullScreenManager.currentScale = 1;
    return FullScreenManager;
}());
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = this;
        _super.call(this);
        this.q_res = false;
        this.a_res = false;
        this.onAssetsLoadComplete = function () {
            _this.removeChild(AssetsManager.instance);
            Main.instance = _this;
            _this.createChildren();
        };
        this.createChildren = function () {
            _this.data = AssetsManager.instance.getObject('data');
            var stored_data = _this.restore_data();
            if (stored_data != null)
                _this.data = stored_data;

            _this.question_page = new QuestionPageNew(_this.data['question']);
            _this.addChild(_this.question_page);
            _this.question_page.addListener('complete', _this.onQuestionComplete);

            _this.arguments_page = new ArgumentsPage(_this.data['arguments']);
            _this.addChild(_this.arguments_page);
            _this.arguments_page.addListener('complete', _this.onArgumentsComplete);

            _this.btn_look = new ImageMarginButton('btn_look');
            _this.addChild(_this.btn_look).position.set(Application.WIDTH / 2 - _this.btn_look.width / 2, 934);
            _this.btn_look.addListener('pointerdown', _this.onLookClick);
            _this.btn_look.visible = false;
            _this.intro_page = new IntroPage(_this.data['intro']);
            _this.addChild(_this.intro_page);
            _this.intro_page.addListener('complete', _this.onIntroComplete);
            _this.intro_page.addListener('show_intro_popup', _this.onIntroShowPopup);
            _this.addChild(_this.buttons_holder = new PIXI.Container);

            _this.btn_intro = new RadioButton('intro');
            _this.buttons_holder.addChild(_this.btn_intro).position.set(611, 33);
            _this.btn_intro.addListener('select', _this.onSelectPage);

            _this.btn_question = new RadioButton('question');
            _this.buttons_holder.addChild(_this.btn_question).position.set(1008, 33);
            _this.btn_question.addListener('select', _this.onSelectPage);

            _this.btn_arguments = new RadioButton('arguments');
            _this.buttons_holder.addChild(_this.btn_arguments).position.set(1265, 33);
            _this.btn_arguments.addListener('select', _this.onSelectPage);

            _this.btn_to_question = new ImageButton('btn_to_question');
            _this.addChild(_this.btn_to_question).position.set(748, 922);
            _this.btn_to_question.addListener('click', () => {
                _this.btn_question.select();
                _this.btn_to_question.visible = false

            });

            _this.btn_arguments.enabled = false;
            _this.btn_intro.select();
            _this.tutorial = new Tutorial();
            _this.addChild(_this.tutorial).addListener('complete', _this.onTutorialComplete);
            // _this.question_tutorial = new QuestionTutorial();
            // _this.addChild(_this.question_tutorial);

            _this.reflection = new Reflection();
            _this.addChild(_this.reflection).addListener('complete', _this.onReflectionComplete);
            _this.reflection.addListener('next', _this.onReflectionNext);
            _this.intro_popup = new IntroPopup();
            _this.addChild(_this.intro_popup);
            /*
            if (stored_data != null)
            {
                this.q_res = this.question_page.fix();
                this.a_res = this.arguments_page.fix();
                this.btn_look.visible = true;
                this.btn_arguments.enabled = true;
                this.save_data();
                new StoryLine().setVar(this.data['completed_var'], 1);
            }
            */
            if (stored_data == null) {
                _this.tutorial.show();
            }
        };
        this.onSelectPage = function (type, reset_arguments) {
            if (reset_arguments === void 0) { reset_arguments = false; }
            _this.intro_page.hide();
            _this.question_page.hide();
            _this.arguments_page.hide();
            switch (type) {
                case 'intro':
                    _this.intro_page.show();
                    break;
                case 'question':
                    _this.question_page.show();
                    // _this.question_tutorial.show();
                    break;
                case 'arguments':
                    _this.arguments_page.show(reset_arguments);
                    break;
            }
        };
        this.onIntroShowPopup = function (page) {
            console.log('onIntroShowPopup', page);
            _this.intro_popup.show(page);
        };
        this.onIntroComplete = function () {
            _this.btn_question.enabled = true;
        };
        this.onQuestionComplete = function (reset_arguments) {
            _this.btn_arguments.enabled = true;
            _this.btn_arguments.select();
            _this.onSelectPage('arguments', reset_arguments);
        };
        this.onArgumentsComplete = function () {
            _this.q_res = _this.question_page.fix();
            _this.a_res = _this.arguments_page.fix();
            _this.complete();
            _this.btn_look.visible = true;
        };
        this.onReflectionComplete = function () {
            _this.reflection.hide();
        };
        this.onReflectionNext = function () {
            new StoryLine().setVar('invoke_jumptonextslide');
        };
        this.onLookClick = function () {
            if (_this.q_res == true && _this.a_res == true)
                _this.reflection.show(_this.data['reflection']['right']);
            else if ((_this.q_res == true && _this.a_res == false) || (_this.q_res == false && _this.a_res == true))
                _this.reflection.show(_this.data['reflection']['notquite']);
            else if (_this.q_res == false)
                _this.reflection.show(_this.data['reflection']['wrong']);
        };
        this.onTutorialComplete = function () {
            _this.tutorial.hide();
        };
        this.complete = function () {
            _this.onLookClick();
            new StoryLine().setVar(_this.data['completed_var'], 1);
            _this.save_data();
        };
        this.restore_data = function () {
            var data = new StoryLine().getVar(_this.data['state_var']);
            //let data: string = localStorage.getItem(this.data['state_var']);
            if (data != null && data != '')
                return JSON5.parse(data);
            return null;
        };
        this.save_data = function () {
            var data = JSON5.stringify(_this.data);
            new StoryLine().setVar(_this.data['state_var'], data);
            //localStorage.setItem(this.data['state_var'], data);
        };
        this.addChild(AssetsManager.instance).start(this.onAssetsLoadComplete);
    }
    Main.DEBUG = true;
    return Main;
}(PIXI.Container));
var Application = (function () {
    function Application() {
        var _this = this;
        this.init = function () {
            Application.STAGE.addChild(_this.main = new Main());
            Application.RENDERER.view.style.display = '';
            _this.gameLoop();
        };
        this.run = function () {
            _this.init();
        };
        this.terminate = function () {
            window.close();
        };
        this.gameLoop = function () {
            Application.RENDERER.render(Application.STAGE);
            _this.storyLine.inPlayer ? FullScreenManager.instance.scale() : FullScreenManager.instance.centerFit();
            requestAnimationFrame(_this.gameLoop);
        };
        //Application.RENDERER = PIXI.autoDetectRenderer(Application.WIDTH, Application.HEIGHT, { antialias: true, backgroundColor: 0xffffff, roundPixels: true, resolution: 1 }, true) as PIXI.CanvasRenderer;
        Application.RENDERER = PIXI.autoDetectRenderer(Application.WIDTH, Application.HEIGHT, { antialias: true, backgroundColor: 0xffffff, roundPixels: true, resolution: 1 }, false);
        Application.RENDERER.view.style.display = 'none';
        Application.STAGE = new PIXI.Container();
        Application.RENDERER.view.style.border = 'solid 1px #d2d2d2';
        document.body.appendChild(Application.RENDERER.view);
        document.documentElement.style.overflow = 'hidden';
        FullScreenManager.instance.init(Application.RENDERER.view, '#ffffff');
        this.storyLine = new StoryLine();
        console.info('Build time:', CompilationParams.COMPILATION_DATE);
        console.info('mailto:admin@flex-dev.ru');
    }
    Object.defineProperty(Application, "instance", {
        get: function () {
            if (Application._instance == null)
                Application._instance = new Application();
            return Application._instance;
        },
        enumerable: true,
        configurable: true
    });
    Application._instance = null;
    Application.WIDTH = 1920;
    Application.HEIGHT = 1080;
    return Application;
}());
window.onload = function () {
    FontsManager.instance.setFonts(['Regular', 'Bold', 'Italic'], Application.instance.run);
};
var VideoPreloader = (function (_super) {
    __extends(VideoPreloader, _super);
    function VideoPreloader(width, height) {
        var _this = this;
        if (width === void 0) { width = Application.WIDTH; }
        if (height === void 0) { height = Application.HEIGHT; }
        _super.call(this);
        this.timer = 0;
        this.counter = 0;
        this.init = function () {
        };
        this.start = function () {
            _this.visible = true;
            _this.progress();
        };
        this.stop = function () {
            _this.visible = false;
            clearTimeout(_this.timer);
        };
        this.progress = function () {
            _this.counter += 5;
            var radius = 50;
            var x = radius * Math.sin(Math.PI * _this.counter / 180) + _this.preloader_width / 2;
            var y = -radius * Math.cos(Math.PI * _this.counter / 180) + _this.preloader_height / 2;
            var item = new VideoPreloaderItem();
            _this.addChild(item).position.set(x, y);
            item.show();
            _this.timer = setTimeout(_this.progress, 15);
        };
        this.preloader_width = width;
        this.preloader_height = height;
        this.addChild(GraphicsHelper.createRect(this.preloader_width, this.preloader_height, 0x000000, 0.25));
    }
    return VideoPreloader;
}(PIXI.Sprite));
var VideoPreloaderItem = (function (_super) {
    __extends(VideoPreloaderItem, _super);
    function VideoPreloaderItem() {
        var _this = this;
        _super.call(this);
        this.show = function () {
            _this.alpha = 1;
            TweenLite.to(_this, 0.5, { alpha: 0, onComplete: _this.onComplete });
            TweenLite.to(_this.scale, 0.5, { x: 0.5 });
            TweenLite.to(_this.scale, 0.5, { y: 0.5 });
        };
        this.onComplete = function () {
            if (_this.parent != null)
                _this.parent.removeChild(_this);
        };
        var circle = new PIXI.Graphics();
        circle.beginFill(0xffffff);
        circle.drawCircle(0, 0, 9);
        circle.endFill();
        this.addChild(circle);
        this.alpha = 0;
    }
    return VideoPreloaderItem;
}(PIXI.Sprite));
//# sourceMappingURL=game.js.map