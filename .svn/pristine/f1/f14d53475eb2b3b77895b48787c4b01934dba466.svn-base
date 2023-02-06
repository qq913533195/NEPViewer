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
            this.selectvalue = params.selectvalue ;
            this.buttons = params.buttons;
            this.maskDiv;
            this.columnBarDiv;
            var self = this;
            self.open(params,callback);
        },
        open: function(params,callback) {
            var columnbarHtml='',buttonsHtml = '',btn_class = '';
        	var self = this;
            // if(self.columnBarDiv || !self.buttons)return;
            //
            if(self.columnBarDiv){
                var actionsheetHeight = self.columnBarDiv.offsetHeight;
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
                buttonsHtml = '<div class="aui-row aui-row-padded">';
                for(var i = 0; i < self.buttons.length;i++){
                    if(self.selectvalue == self.buttons[i].value)
                        btn_class = 'aui-btn-backgroud';
                    else
                        btn_class = '';
                    buttonsHtml += ' <div class="aui-col aui-col-span-6 aui-colunmbar-btn">';
                    // buttonsHtml += '<i class="aui-iconfont aui-icon-home"></i>';
                    // buttonsHtml += ' <div class="aui-grid-label">'+self.buttons[i].text+'</div>';
                    buttonsHtml += '<div class="aui-btn '+ btn_class + '" >' +self.buttons[i].text+'</div>';
                    buttonsHtml += '</div>';
                }
                buttonsHtml += '</div>';
            }
            self.columnBarDiv.innerHTML = buttonsHtml;
            var actionsheetHeight = self.columnBarDiv.offsetHeight;
            self.maskDiv.classList.add("aui-mask-in");
            self.columnBarDiv.style.webkitTransform = self.columnBarDiv.style.transform = "translate3d(0,0,0)";
            self.columnBarDiv.style.opacity = 1;
            self.columnBarDiv.addEventListener("touchmove", function(event){
                event.preventDefault();
            })
            self.maskDiv.addEventListener("touchmove", function(event){
                event.preventDefault();
            })
            // api.sendEvent({
            //     name: 'opencolumnbar',
            //     extra: {
            //         winname: api.winName
            //     }
            // });
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
                                if(self.buttons[e].value){
                                    var _value = self.buttons[e].value;
                                }else{
                                    var _value = null;
                                }
                                if(callback){
                                    callback({
                                        buttonIndex: e+1,
                                        buttonValue:_value
                                    });
                                };
                                // colunmbarButtons.querySelector(".aui-btn-backgroud").classList.remove("aui-btn-backgroud");
                                // colunmbarButtons[e].classList.add("aui-btn-backgroud");
                                self.close();
                                return;
                            }
                        })(ii)
                    }
                }, 350)
            }
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
                self.columnBarDiv.style.webkitTransform = self.columnBarDiv.style.transform = "translate3d(0,-"+actionsheetHeight+"px,0)";
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