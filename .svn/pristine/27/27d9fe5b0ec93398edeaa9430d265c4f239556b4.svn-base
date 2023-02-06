/**
 * aui-sharebox.js
 * @author 流浪男
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function( window, undefined ) {
    "use strict";
    var auiColumnBar = function() {
    };
    var isShow = false;
    auiColumnBar.prototype = {
        init: function(params,callback){
            this.frameBounces = params.frameBounces;
            this.selectvalue = params.selectvalue?params.selectvalue:[] ;
            this.buttons = params.buttons;
            this.maskDiv;
            this.cols = params.cols?params.cols:2;
            this.columnBarDiv;
            this.top = params.top?params.top:0;
            var self = this;
            self.open(params,callback);
        },
        open: function(params,callback) {
            var columnbarHtml='',buttonsHtml = '',btn_class = '';
        	var self = this;

            // if(self.columnBarDiv || !self.buttons)return;
            var cols_classname = "aui-col-span-" + (24/this.cols);
            if(self.columnBarDiv){
                var actionsheetHeight = self.columnBarDiv.offsetHeight;
                // alert(actionsheetHeight)
                self.columnBarDiv.style.webkitTransform = self.columnBarDiv.style.transform = "translate3d(0,-"+actionsheetHeight+"px,0)";
                self.maskDiv.style.opacity = 0;

                if(self.maskDiv){
                    self.maskDiv.parentNode.removeChild(self.maskDiv);
                }
                self.columnBarDiv.parentNode.removeChild(self.columnBarDiv);
                self.maskDiv = self.columnBarDiv = false;

            }

            if(!self.maskDiv){
                self.maskDiv = document.createElement("div");

                self.maskDiv.className = "aui-mask";

                document.body.appendChild(self.maskDiv);

            }

            self.columnBarDiv = document.createElement("div");
            self.columnBarDiv.className = "aui-columnbar aui-grid";
            document.body.appendChild(self.columnBarDiv);
            if(self.buttons && self.buttons.length){
                buttonsHtml = '<div class="aui-row ">';
                for(var i = 0; i < self.buttons.length;i++){
                    if(self.selectvalue.indexOf(self.buttons[i].value) > -1 )
                        btn_class = 'aui-btn-backgroud';
                    else
                        btn_class = '';
                    buttonsHtml += ' <div class="aui-col  aui-colunmbar-btn aui-text-left aui-padded-l-10 '+cols_classname+'">';
                    // buttonsHtml += '<i class="aui-iconfont aui-icon-home"></i>';
                    // buttonsHtml += ' <div class="aui-grid-label">'+self.buttons[i].text+'</div>';
                    buttonsHtml += '<div class="aui-btn '+ btn_class + '" id="aui-btn-'+self.buttons[i].value+'" >' +self.buttons[i].text+'</div>';
                    buttonsHtml += '</div>';
                }
                buttonsHtml += '</div>';
            }
            buttonsHtml += '<div class="aui-row aui-border-t" style="padding:0px;margin:0px;">';
            buttonsHtml += ' <div class="aui-col aui-col-offset-3 aui-col-span-18 aui-text-center ">';
            // buttonsHtml += 'aaaa';
                    // buttonsHtml += '<i class="aui-iconfont aui-icon-home"></i>';
                    // buttonsHtml += ' <div class="aui-grid-label">'+self.buttons[i].text+'</div>';
            buttonsHtml += '<div class="aui-btn aui-btn-orange btn-select"  style="display: block;width: 100%;height: 2rem;line-height: 2rem;margin-bottom: 0;font-size: 0.8rem;"><span class="aui-iconfont aui-icon-edit" style="font-size:0.8rem"></span>查看政策</div>';
            buttonsHtml += '</div>';
            buttonsHtml += '</div>';
            // // alert(buttonsHtml);
            self.columnBarDiv.innerHTML = buttonsHtml;

            var actionsheetHeight = self.columnBarDiv.offsetHeight;
            self.maskDiv.classList.add("aui-mask-in");
            self.columnBarDiv.style.webkitTransform = self.columnBarDiv.style.transform = "translate3d(0,"+self.top+",0)";
            self.columnBarDiv.style.opacity = 1;
            self.columnBarDiv.addEventListener("touchmove", function(event){
                event.preventDefault();
            })
            self.maskDiv.addEventListener("touchmove", function(event){
                event.preventDefault();
            })

            if(typeof(api) != 'undefined' && typeof(api) == 'object' && self.frameBounces){
                api.setFrameAttr({
                    bounces:false
                });
            }
            var colunmbarButtons = document.querySelectorAll(".aui-colunmbar-btn");
            if(colunmbarButtons && colunmbarButtons.length > 0){
                setTimeout(function(){
                    self.maskDiv.onclick = function(){self.close();return;};
                    for(var ii = 0; ii < colunmbarButtons.length; ii++){
                        (function(e){
                            colunmbarButtons[e].onclick = function(){
                                // console.log(e);
                                var select_index = self.selectvalue.indexOf(self.buttons[e].value);
                                if(select_index > -1)
                                {
                                    self.selectvalue.splice(select_index,1);
                                    colunmbarButtons[e].querySelector(".aui-btn").classList.remove("aui-btn-backgroud");
                                }
                                else
                                {
                                    self.selectvalue.push(self.buttons[e].value);
                                    colunmbarButtons[e].querySelector(".aui-btn").classList.add("aui-btn-backgroud");
                                }

                                return;
                            }
                        })(ii)
                    }
                }, 350)
            }
            // // var selectButton = document.querySelector(".btn-select");
            var columnbar = document.querySelector(".aui-columnbar")
            var columnbarStyle=window.getComputedStyle(columnbar,null);
            console.log(columnbarStyle.height)
            document.querySelector(".btn-select").onclick = function(){
                if(callback){
                    callback({
                        selectids: self.selectvalue,
                    });
                };
                self.close();
            };

        },
        close: function(){
            var self = this;
            if(typeof(api) != 'undefined' && typeof(api) == 'object' && self.frameBounces){
                api.setFrameAttr({
                    bounces:true
                });
            }

            if(self.columnBarDiv){
                var actionsheetHeight = self.columnBarDiv.offsetHeight;
                // alert(actionsheetHeight)
                // self.columnBarDiv.style.webkitTransform = self.columnBarDiv.style.transform = "translate3d(0,-"+actionsheetHeight+"px,0)";
                self.maskDiv.style.opacity = 0;
                setTimeout(function(){
                    if(self.maskDiv){
                        self.maskDiv.parentNode.removeChild(self.maskDiv);
                    }
                    self.columnBarDiv.parentNode.removeChild(self.columnBarDiv);
                    self.maskDiv = self.columnBarDiv = false;
                }, 300)
                // api.sendEvent({
                //     name: 'closecolumnbar',
                //     extra: {
                //         winname: api.winName
                //     }
                // });
            }
        }
    };
	window.auiColumnBar = auiColumnBar;
})(window);