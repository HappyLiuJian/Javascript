function factorial (num) {
	if (num <=1) {
		return -1;
	} else {
		return num * arguments.callee(num-1);
	}
}

window.color = "red";
var o = { color: "blue"};

function sayColor() {
	alert(this.color);
}

sayColor();		//"red"，返回window执行环境中的color
o.sayColor = sayColor;	//访问函数但不执行，使o对象实例的方法sayColor指向函数sayColor
o.sayColor;		//"blue"，返回o执行环境中的color

function outer() {
	inner();
}

function inner() {
	alert(inner.caller);
}

outer();			//输出outer函数的代码

function sum(sum1,sum2) {
	return num1 + num2;
}

function callSum1(num1,num2) {
	return sum.apply(this,arguments);		//apply()的参数有两个，一个是作用域，另一个是参数数组
}

function callsum2(num1,num2) {
	return sum.apply(this,[num1,num2]);		//数组的第二种表示
}

alert(callSum1(10,10));		//20
alert(callsum2(10,10));		//20

function callSum(num1,num2) {
	return sum.call(this,num1,num2);		//call()的参数第一个为this，后面为运行函数所有的参数，作用与apply相同
}

alert(callSum(10,10));		//20

window.color = "red";
var o = { color: "blue"};

function sayColor() {
	alert(this.color);
}

sayColor();		//red
sayColor.call(this);	//red
sayColor.call(window);	//red
sayColor.call(o);		//blue

window.color = "red";
var o = { color: "blue"};

function sayColor() {
	alert(this.color);
}

var sayColor2 = sayColor.bind(o);
sayColor2();	//blue
