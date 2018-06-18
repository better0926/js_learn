/**
 * Created by HUCC on 2018/5/7.
 */
//创建一个食物的构造函数
//  function Food(width, height, bgColor, x, y) {
//    this.width = width || 20;//食物默认宽度20
//    this.height = height || 20;
//    this.bgColor = bgColor || "blue";
//    this.x = x || 0;
//    this.y = y || 0;
//  }
function Food(options) {
  //保证options如果不传递参数的情况下，也是一个对象。
  options = options || {};
  this.width = options.width || 20;//食物默认宽度20
  this.height = options.height || 20;
  this.bgColor = options.bgColor || "blue";
  this.x = options.x || 0;
  this.y = options.y || 0;
}


//给食物增加一个方法：render, 把食物显示到指定的div中
//把食物显示到指定的元素上。
Food.prototype.render = function (target) {
  //1. 先创建一个div
  var div = document.createElement("div");
  //2. 设置div的宽度、高度、背景颜色、位置
  div.style.width = this.width + "px";
  div.style.height = this.height + "px";
  div.style.backgroundColor = this.bgColor;

  //设置位置，随机x和y
  //范围： target.offsetWidth/this.width = 40
  this.x = parseInt( Math.random() * target.offsetWidth/this.width );
  this.y = parseInt( Math.random() * target.offsetHeight/this.height );
  //设置div的left和top
  div.style.position = "absolute";
  div.style.left = this.x * this.width + "px";
  div.style.top = this.y * this.height + "px";

  //3. 把食物添加到target中
  target.appendChild(div);

}