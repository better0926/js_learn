//注意：沙箱的好处：里面定义的变量全是局部变量，不用担心会影响到全局变量。
//沙箱如何对外暴漏变量。window.属性名 = 暴露的变量
(function (window) {
  var num = 123;
  var ul = 11;

//给每个属性添加默认值，new食物的时候，就可以不传参数  想要创建一条绿色的食物
  function Food(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.bgColor = options.bgColor || "blue";
    this.x = options.x || 0;
    this.y = options.y || 0;
  }


//应该把实例的方法都存储到原型上
  Food.prototype.render = function (target) {

    //1. 创建一个div
    var div = document.createElement("div");

    //2. 设置div的样式
    //2.1 宽度和高度
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    //2.2 颜色
    div.style.backgroundColor = this.bgColor;
    //2.3 设置位置
    //随机一个x和y
    this.x = parseInt(Math.random() * target.offsetWidth/this.width);
    this.y = parseInt(Math.random() * target.offsetHeight/this.height);

    //定位  left top
    div.style.position = "absolute";
    div.style.left = this.x * this.width + "px";
    div.style.top = this.y * this.height + "px";

    //3. 把div添加到target
    target.appendChild(div);
  }


  window.Food = Food;



})(window);
