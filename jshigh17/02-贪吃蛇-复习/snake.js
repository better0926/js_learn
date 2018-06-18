/*

 蛇的属性： 蛇是由一个一个的小的盒子组成（关节）
 width:
 height:
 headColor:
 bodyColor:
 body: [] 存放的就是蛇的每一个关节的位置。
 蛇的方法：
 render
 move
 */
function Snake(options) {
  options = options || {};
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.headColor = options.headColor || "green";
  this.bodyColor = options.bodyColor || "red";

  //蛇的方向，默认往右走   left  up  right  down
  this.direction = "right";

  //约定：第0项指的就是蛇头
  this.body = [
    {x:2, y:0},
    {x:1, y:0},
    {x:0, y:0}
  ];
}


//蛇的渲染方法
Snake.prototype.render = function (target) {
  for(var i = 0; i < this.body.length; i++) {
    //1. 创建span
    var span = document.createElement("span");
    //2. 设置span的样式
    //2.1 宽度和高度
    span.style.width = this.width + "px";
    span.style.height = this.height + "px";
    //2.2 颜色
    span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;
    //2.3 位置
    span.style.position = "absolute";
    span.style.left = this.body[i].x * this.width + "px";
    span.style.top = this.body[i].y * this.height + "px";
    //3. 把span添加target中
    target.appendChild(span);
  }
}


//蛇的移动方法
Snake.prototype.move = function () {
  //核心思路：
  //1. 给蛇增加一个新的节点
  var newNode = {
    x: this.body[0].x,
    y: this.body[0].y
  }
  //2. 新的节点跟蛇头的位置一致，但是要根据方向来控制位置
  switch (this.direction) {
    case "left":
      //让新节点的x--
      newNode.x--;
      break;
    case "up":
      newNode.y--;
      break;
    case "right":
      newNode.x++;
      break;
    case "down":
      newNode.y++;
      break;
  }

  //3. 把新节点添加到unshift数组的最前面
  this.body.unshift(newNode);
  //4. 把数组最后一个节点删除即可。
  this.body.pop();



}

