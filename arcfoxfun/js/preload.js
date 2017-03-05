/***
date:1116
by:Huixian
****/

var manifest;//图片预加载变量
var preload;//图片预加载变量

$(function(){
	setupManifest();//图片资源加载
	startPreload();//图片资源加载
})

//定义相关JSON格式文件列表
function setupManifest() {
    manifest = [
    	 {src:'img/ar-1-title.png',id:'ar-1-title'},
    	 {src:'img/big-car-1.png',id:'big-car-1'},
    	 {src:'img/bigCar2.png',id:'bigCar2'},
    	 {src:'img/center.png',id:'center'},
    	 {src:'img/closeBtn.png',id:'closeBtn'},
    	 {src:'img/down.png',id:'down'},
    	 {src:'img/foot-text.png',id:'foot-text'},
    	 {src:'img/music.png',id:'music'},
    	 {src:'img/part-1.png',id:'part-1'},
    	 {src:'img/qlcs.png',id:'qlcs'},
    	 {src:'img/qlh-pic.png',id:'qlh-pic'},
    	 {src:'img/qlh-pic2.png',id:'qlh-pic2'},
    	 {src:'img/qlh-pic3.png',id:'qlh-pic3'},
         {src:'img/qlh-text.png',id:'qlh-text'},
         {src:'img/qlh-text2.png',id:'qlh-text2'},
         {src:'img/qlh-text3.png',id:'qlh-text3'},
         {src:'img/qxdd.png',id:'qxdd'},
         {src:'img/small2-car1.png',id:'small2-car1'},
         {src:'img/small2-car2.png',id:'small2-car2'},
         {src:'img/small2-car3.png',id:'small2-car3'},
         {src:'img/small2-car4.png',id:'small2-car4'},
         {src:'img/small-car1.png',id:'small-car1'},
         {src:'img/small-car2.png',id:'small-car2'},
         {src:'img/small-car3.png',id:'small-car3'},
         {src:'img/small-car4.png',id:'small-car4'},
         {src:'img/yuan.png',id:'yuan'},
         {src:'img/yuan2.png',id:'yuan2'},
         {src:'img/zcpt.png',id:'zcpt'},
         {src:'img/zhuan1.png',id:'zhuan1'},
         {src:'img/zhuan2.png',id:'zhuan2'},
         {src:'img/text_1.png',id:'text_1'},
         {src:'img/text_2.png',id:'text_2'},
         {src:'img/text_3.png',id:'text_3'},
         {src:'img/bgcar2.png',id:'bgcar2'},
         {src:'img/bigcar1.png',id:'bigcar1'},
         {src:'img/load1.png',id:'load1'},
         {src:'img/load2.png',id:'load2'},
         {src:'img/load-cen.png',id:'load-cen'},
         {src:'img/shadow.png',id:'shadow'},
         {src:'img/p11.png',id:'p11'},
         {src:'img/p12.png',id:'p12'},
         {src:'img/p13.png',id:'p13'},
         {src:'img/p14.png',id:'p14'},
         {src:'img/p21.png',id:'p21'},
         {src:'img/p22.png',id:'p22'},
         {src:'img/p23.png',id:'p23'},
         {src:'img/p24.png',id:'p24'}


    ];

    // for(var i=1; i<=36; i++)
    // {
    // 	manifest.push({src:'img/'+i+'.png',id:'car_'+i});
    // }


}

//开始预加载
function startPreload() {
    preload = new createjs.LoadQueue(true);
    //注意加载音频文件需要调用如下代码行
    preload.installPlugin(createjs.Sound);         
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
 
}

//处理单个文件加载
function handleFileLoad(event) {
    //console.log("文件类型: " + event.item.type);
    /*if(event.item.id == "logo"){
        console.log("logo图片已成功加载");
    }*/
}
 
//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！",evt.text);
}
 
//已加载完毕进度 
function handleFileProgress(event) {
    $('#loadpro').text((preload.progress*100|0) + "%");
}

//全度资源加载完毕
function loadComplete(event) {
    //console.log("已加载完毕全部资源");
    $('.loading').delay(500).fadeOut(500);
    $(".warp").delay(600).fadeIn(500);
    $(".part-1 .myChange").addClass("opaChange");
}

