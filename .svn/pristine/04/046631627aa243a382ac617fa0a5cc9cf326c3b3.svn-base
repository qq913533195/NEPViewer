    var searchBar = document.querySelector(".aui-searchbar");
    var searchBarInput = document.querySelector(".aui-searchbar input");
    var searchBarBtn = document.querySelector(".aui-searchbar .aui-searchbar-btn");
    var searchBarClearBtn = document.querySelector(".aui-searchbar .aui-searchbar-clear-btn");
    var searchBarInputId = searchBarInput.id;
    if(searchBar){
        searchBarInput.onclick = function(){
            searchBarBtn.style.marginRight = 0;
        }
        searchBarInput.oninput = function(){
            if(this.value.length){
                searchBarClearBtn.style.display = 'block';


                // searchBarBtn.classList.add("aui-text-info");
                searchBarBtn.textContent = "搜索";
            }else{
                searchBarClearBtn.style.display = 'none';
                searchBarBtn.textContent = "取消";
            }
        }
    }
    searchBarClearBtn.onclick = function(){
        this.style.display = 'none';
        searchBarInput.value = '';

        // searchBarBtn.classList.remove("aui-text-background");
        searchBarBtn.textContent = "取消";
        searchBarBtn.style.marginRight="-"+searchBarBtn.offsetWidth+"px";
        searchBarInput.value = '';
        searchBarInput.blur();
        api.sendEvent({
                name: 'searchkeywords',
                extra: {
                    keywords: '',
                    frmname: api.frameName,
                    winname: api.winName,
                    inputid: searchBarInputId
                }
        });
    }
    searchBarBtn.onclick = function(){
        var keywords = searchBarInput.value;
        // alert(searchBarInput.id)
        if(keywords.length){
            searchBarInput.blur();
            // document.getElementById("search-keywords").textContent = keywords;
            api.sendEvent({
                    name: 'searchkeywords',
                    extra: {
                        keywords: keywords,
                        frmname: api.frameName,
                        winname: api.winName,
                        inputid: searchBarInputId
                    }
            });
        }else{
            this.style.marginRight = "-"+this.offsetWidth+"px";
            searchBarInput.value = '';
            searchBarInput.blur();
            api.sendEvent({
                    name: 'searchkeywords',
                    extra: {
                        keywords: '',
                        frmname: api.frameName,
                        winname: api.winName,
                        inputid: searchBarInputId
                    }
            });

        }
    }