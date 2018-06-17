/**
 * Created by HUCC on 2018/4/27.
 */
function animate(element, obj, fn) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {

    //假设所有的动画都执行完了
    var flag = true;
    for(var k in obj) {
      var attr = k;
      var target = obj[k];

      var current = window.getComputedStyle(element)[attr];
      current = parseInt(current);

      var step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);


      current += step;

      element.style[attr] = current + "px";

      //有样式没到达终点
      if (current != target) {
        flag = false;
      }
    }

    //判断flag是不是true
    if(flag) {
      clearInterval(element.timeId);

      //如果传了fn，就调用fn，如果没传，就不掉
      //        if(fn) {
      //          fn();
      //        }
      //假值短路
      fn && fn();

    }

  }, 15);

}