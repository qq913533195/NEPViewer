function init() {
  $api.setStorage('url', 'http://nep.nepviewer.com/pv_monitor/appservice');
  loadJson('init');
}
function initLang(callBack){
  // $api.setStorage('lang','zh');
  // lang = $api.getStorage('lang');
  // alert(lang);alert('122');
  // if(!lang)
  // {
    lang = checkLang();//alert(lang);alert('223');
    $api.setStorage('lang',lang);
  // }
  // alert(lang);
  // lang = "zh";
  loadScript(lang,function(ret,err){
    callBack(ret, err);
  });

}
function checkLang()
{

    lang = navigator.language.toLowerCase();
    // $api.setStorage('lang',lang);
    // alert('123');
    // alert(lang);
    var str = lang.substring(0,2);
    var str2 = lang.substring(0,3);
    // str = de;
    switch (str) {
      case "zh":
        return "zh";
        break;
      case "en":
        return "en";
        break;
      case "jp":
        return "ja";
        break;
      case "es":
        return "es";
        break;
      case "ge":
        if (str2 == "ger")  return "ger";
        return "ger";
        break;
      case "de":
        return "ger";
        break;
      default:
        return "en";
        break;
    }
}

function loadScript(name,callBack) {

    // alert(name);
    var localDir = api.wgtRootDir + '/language/';
    api.readFile({
      path: localDir + name + '.json'
    }, function(ret, err) {
      // alert(JSON.stringify(ret))
      if (ret.status) {
        localization = JSON.parse(ret.data);
        // alert(localization);
        $api.setStorage("localization", localization);
        callBack(ret, err);
      } else {
        loadScript("en",function(ret,err){
          callBack(ret, err);
        });
        // alert(err.msg);
      }
    });
}

function loadJson(name) {
 
  var localDir = api.wgtRootDir + '/res/json/';
  // console.log(localDir + name + '.json')
  api.readFile({
    path: localDir + name + '.json'
  }, function(ret, err) {
    if (ret.status) {     
      $api.setStorage(name, ret.data);
    } else {     
      alert(err.msg);
    }
  });

}
function openWin(name, pageparam) {
  var htmlDir = 'widget://html/';
  // alert(JSON.stringify(pageparam));
  api.openWin({
    name: '' + name + '_win',
    url: htmlDir + name + '_win.html',
    pageParam: pageparam
  });
}

function openFrame(name,bounces, x, y, w, h, pageparam) {
  // alert('widget://html/'+name+'_frm.html')  ;
  api.openFrame({
    name: '' + name + '_frm',
    url: 'widget://html/' + name + '_frm.html',
    bounces: bounces,
    rect: {
      x: x,
      y: y,
      w: w,
      h: h
    },
    pageParam: pageparam
  })

}


//ajax请求
function ajaxRequest(url, params, callBack) {
  
  var datas=params;
  datas["token"]= $api.getStorage('token');
  // alert(JSON.stringify(url))
  // alert(JSON.stringify(datas))
  api.ajax({
    url: url,
    method: 'post',
    cache: false,
    timeout: 30,
    dataType: 'json',
    data: {
      values: datas
    }
  }, function(ret, err) {
    // alert(JSON.stringify(ret))
    if (ret) {
      callBack(ret, err);
    } 
    // else {
    //   api.alert({
    //     msg: ('network error!')
    //   });
    //   api.openWin({
    //     name: 'login_win',
    //     url: 'login_win.html',
    //     slidBackEnabled:false
    //   });
    //   setTimeout(function() {
    //       closeWin();
    //   }, 1000);
    // }
  });
}


function ajaxUpload(url,datas,callBack){
  // alert(JSON.stringify(datas))
   api.ajax({
        url:url,
        method:"post",
        data: datas,
        cache: false,
        timeout: 30,
        dataType:'json',
        returnAll:false,
    },function(ret,err){
      // alert(JSON.stringify(err));
      callBack(ret,err);
    })
}


function setTitle(text)
{
  $api.text($api.dom('.aui-title'), unescape(text));
}

function showPopup(location){
    popup.init({
        frameBounces:true,//当前页面是否弹动，（主要针对安卓端）
        location:location,//位置，top(默认：顶部中间),top-left top-right,bottom,bottom-left,bottom-right
        buttons:[{
            image:'../image/share/clear.png',
            text:'切换账号',
            value:'clear'//可选
        }],
    },function(ret){
        if(ret){

            if(ret.buttonValue=="clear")
            {
                $api.clearStorage();
                // api.clearCache(function(ret, err) {

                // });
                init();
                window.location.reload();

            }

        }
    })
}

function closeWin() {
    api.closeWin({
    });
}

function jump_step(index) {    
    var  formSteps = $api.domAll('.eis-form-step'); 
    var formContents = $api.domAll('.eis-stepContents');
    var  progress = $api.dom('.eis-step-progress-new')   ;
    // console.log(JSON.stringify(formSteps)) 
    var width = 0;
    for(i=0; i<formSteps.length;i++) { 
      $api.addCls(formContents[i], 'aui-hide');
      if(i<index) {
        var offset = $api.offset(formSteps[i]);    
        // console.log(offset.w) ; 
        width += offset.w;
        $api.addCls(formSteps[i], 'is-finish-new');
      }    
      else if(i== index) { 
        $api.addCls(formSteps[i], 'is-finish-new');
        $api.removeCls(formContents[i], 'aui-hide');
        
      }else {
        $api.removeCls(formSteps[i], 'is-finish-new');
      }
    }
    // console.log(width)
    $api.css(progress,'width:' + width + 'px');
   
   
    
    // $api.attr('.eis-step-progress-new', 'width', width);
    
}

function pullRefresh(){

    api.setCustomRefreshHeaderInfo({
        bgColor : '#f0f0f0',
        image : {
            pull : [
                'widget://image/refresh/pull.png',
                'widget://image/refresh/pull_end_image_frame_01.png',
                'widget://image/refresh/pull_end_image_frame_02.png',
                'widget://image/refresh/pull_end_image_frame_03.png',
                'widget://image/refresh/pull_end_image_frame_04.png',
                'widget://image/refresh/pull_end_image_frame_05.png'
            ],
            load : [
                'widget://image/refresh/refreshing_image_frame_01.png',
                'widget://image/refresh/refreshing_image_frame_02.png',
                'widget://image/refresh/refreshing_image_frame_03.png',
                'widget://image/refresh/refreshing_image_frame_04.png',
                'widget://image/refresh/refreshing_image_frame_05.png',
                'widget://image/refresh/refreshing_image_frame_06.png'
            ]
        }
    }, function() {
        $api.val($api.byId('page'), 1);
        loadData(function(data){
            // alert(JSON.stringify(data));
            api.refreshHeaderLoadDone()
        });
        // api.refreshHeaderLoadDone() ;

    });
}


function encrypt()
{
  var signature = api.require('signature');
  signature.aes({
      data: api.getStorage('token'),
      key: 'NEPVIEW'
  }, function(ret, err) {
      if (ret.status) {
          alert(JSON.stringify(ret));
      } else {
          alert(JSON.stringify(err));
      }
  });
}


function saveStorage(storagename)
{
    var history=[];
    $api.rmStorage(storagename)
    var form_content=$api.domAll('input');
    var check_arr = [];
    for(i=0;i<form_content.length;i++)
    {
      var item_type = $api.attr(form_content[i], 'type');
      var item_id = $api.attr(form_content[i], 'id');
      var item_name =  $api.attr(form_content[i], 'name');
      var item_value ;
      form_name = $api.attr(form_content[i], 'name');
      if(form_content[i].type=='radio'  )
      {
        if(form_content[i].checked)
        {
          item_value=$api.val(form_content[i]);
          history.push({name:item_name,id:item_id,type:item_type,value:item_value}); 
        }
      }
      else if(form_content[i].type=='checkbox'){
        
        if(!check_arr[form_name])
            check_arr[form_name] = [];
        if(form_content[i].checked)
        {
          check_arr[form_name].push($api.val(form_content[i]));
          item_value = check_arr[form_name].join(',');
        }
        if(check_arr[form_name].length === 0) {
          item_value = '';
        }
        history.push({name:item_name,id:item_id,type:item_type,value:item_value});  
      }
      else
      {
        item_value=$api.val(form_content[i]);
        history.push({name:item_name,id:item_id,type:item_type,value:item_value}); 
      }
      
        
    }

    var  textarea_content= $api.domAll('textarea');
    for(i=0;i<textarea_content.length;i++)
    {
      var item_type =  'textarea';
      var item_id = $api.attr(textarea_content[i], 'id');
      var item_name =  $api.attr(textarea_content[i], 'name');
      var item_value = $api.val(textarea_content[i]);
      history.push({name:item_name,id:item_id,type:item_type,value:item_value});  
    }

    var select_content=$api.domAll('select');
    for(i=0;i<select_content.length;i++)
    {
     
      var item_type ='select';
      var item_id = $api.attr(select_content[i], 'id');
      var item_name =  $api.attr(select_content[i], 'name');
      var item_value = $api.val(select_content[i]);
      // console.log(item_name)
      // console.log(item_value)
      history.push({name:item_name,id:item_id,type:item_type,value:item_value});  
    }
    // history.push({type})
    $api.setStorage(storagename, history);
    $api.setStorage(storagename+'_img', mulimg_arr);
    // alert(JSON.stringify(history));

    // window.localStorage[storagename]=JSON.stringify(history);
}


function getStorage(storagename)
{
    // alert(storagename);
    var localMsg, localMsg_img;
    localMsg = $api.getStorage(storagename);

    // alert(JSON.stringify(localMsg));
    // if(window.localStorage[storagename]){
    //     localMsg=JSON.parse(window.localStorage[storagename]);
    // }
    // console.log(inputMsg);
    // console.log(localMsg)

    var input_arr = ['text','tel','hidden','number','password','textarea','date','select'];
  
    if(localMsg && localMsg.length > -1){
        for(var i=0;i<localMsg.length;i++){
            var item_id = localMsg[i].id;
            var item_name = localMsg[i].name;
            var item_type = localMsg[i].type;
            var item_value = localMsg[i].value;

            // var dom = item_id ? $("#"+item_id) : $("[name='"+item_name+"']");
            // var dom = item_id ? $api.byId(item_id) : $api.dom(el, selector);;
            if(input_arr.indexOf(item_type) > -1){
                $api.val($api.byId(item_id), item_value);
            }
            
            if(item_type == "radio") {
                radio_dom = $api.dom("input:radio[name='"+item_name+"'][value='" +item_value+ "']");
                $api.attr(radio_dom,'checked','checked');
                
            }
              
        }
    }

    localMsg_img = $api.getStorage(storagename + '_img');
    for(i in mulimg_arr)
    {
      loadImage(i);
    }
}

function setSelectVal(domid, value) {
    select = $api.byId(domid);                       
    for(j=0;j<select.length;j++) {
        if(value == $api.attr(select[j],'value')) {
            $api.attr(select[j],'selected',true);
            break;
        }
    }    
}

function setRadioVal(domname, value) {
  radio_dom = $api.dom("input[type=radio][name='"+domname+"'][value='" +value+ "']");
  $api.attr(radio_dom,'checked','checked');
}
