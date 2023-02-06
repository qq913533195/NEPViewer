// 请求工作动态列表的接口
function loadJobState(callback) {
    var url = initdata['url'] + '/workreport';
    var cate_params = Object.assign({}, pageSetting);

    cate_params.limit = 3;

    ajaxGet(url, cate_params, function(ret, err) {
        if(ret.code == 1)
        {
            createJobState(ret, function(data) {
                callback(data);
            });
        }
    });
}
// 请求最新需求列表的接口
function loadDemandList(callback){
    var url = initdata['url'] + '/demand';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    // cate_params.order = 'desc';
    cate_params.limit = 3;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createDemandList(ret, function(data) {
                callback(data);
            });
        }
    });
}
// 请求最新供应列表的接口
function loadSupplyList(callback){

    var url = initdata['url'] + '/supply/index_common';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    // cate_params.order = 'desc';
    cate_params.limit = 3;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createSupplyList(ret, function(data) {
                callback(data);
            });
        }
    });
}
// 请求 政策列表
function loadPolicyList(callback){
  // alert('2993');
    var url = initdata['url'] + '/policy';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    // cate_params.order = 'desc';
    cate_params.limit = 3;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createPolicyList(ret, function(data) {
                callback(data);
            });
        }
    });
}

function loadDemandCateList(callback) {
    // 需求大厅 前七个
    var url = initdata['url'] + '/demandcate4app';
    // console.log(JSON.stringify(initdata));
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    cate_params.sort = 'sort';
    cate_params.order = 'asc';
    cate_params.limit = 50;
    // alert(url);
    ajaxGet(url, cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createDemandCateList(ret, function(data) {
                callback(data);
            });

        }
    });
}



// loadElse();
function loadPolicyCateList(callback) {
    var url = initdata['url'] + '/policycate';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    cate_params.sort = 'sort';
    cate_params.order = 'asc';
    cate_params.limit = 50;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createPolicyCateList(ret, function(data) {
                callback(data);
            });

        }
    });
}



function loadIndustrysector(callback){
    var url = initdata['url'] + '/industrysector';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    cate_params.order = 'asc';
    cate_params.limit = 50;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createIndustrysector(ret, function(data) {
                callback(data);
            });
        }
    });
}
function loadNewsList(callback){
    var url = initdata['url'] + '/news';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    cate_params.order = 'desc';
    cate_params.limit = 3;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createNewsList(ret, function(data) {
                callback(data);
            });
        }
    });
}
function loadBusinesssector(callback){
    var url = initdata['url'] + '/businesssector';
    // var cate_params = {};
    var cate_params = Object.assign({}, pageSetting);
    cate_params.order = 'asc';
    cate_params.limit = 50;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createBusinesssector(ret, function(data) {
                callback(data);
            });
        }
    });
}

function loadStreet(callback){
    var url = initdata['url'] + '/street';
    var cate_params = Object.assign({}, pageSetting);
    cate_params.order = 'asc';
    cate_params.limit = 50;
    // alert(url);
    ajaxGet(url,cate_params, function(ret, err) {
        // alert(JSON.stringify(ret));
        if(ret.code == 1)
        {
            createStreet(ret, function(data) {
                callback(data);
            });
        }
    });
}

// 请求高层工业楼宇列表的接口
function loadHighList(callback) {
    var url = initdata['url'] + '/high';
    var cate_params = Object.assign({}, pageSetting);

    cate_params.limit = 3;

    ajaxGet(url, cate_params, function(ret, err) {
        if(ret.code == 1)
        {
            createhighState(ret, function(data) {
                callback(data);
            });
        }
    });
}

function createDemandPopButtons(ret)
{
    params=ret.data.rows;
    for(i=0;i<params.length;i++)
    {
        popupbuttons.push({text: params[i].name,value: params[i].id});
    }
}

function createSupplyPopButtons(ret)
{
    params=ret.data.rows;
    for(i=0;i<params.length;i++)
    {
        popupbuttons.push({text: params[i].namesup,value: params[i].id});
    }
}

function createPolicyPopupButtons(ret)
{
    params=ret.data.rows;
    for(i=0;i<params.length;i++)
    {
        popupbuttons.push({text: params[i].name,value: params[i].id});
    }
}
