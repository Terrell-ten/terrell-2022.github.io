(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e864095"],{"0626":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-conent main-conent-minheight",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formQuery}},[n("el-form-item",{staticStyle:{"margin-right":"30px"},attrs:{label:"标题："}},[n("el-input",{attrs:{clearable:""},model:{value:e.formQuery.nameCode,callback:function(t){e.$set(e.formQuery,"nameCode",t)},expression:"formQuery.nameCode"}})],1),n("el-form-item",{staticClass:"overall",staticStyle:{"margin-right":"30px"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),n("el-form-item",{staticClass:"overall",staticStyle:{"margin-right":"30px"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.UploadVideo(1)}}},[e._v("视频上传")])],1)],1),n("el-card",{directives:[{name:"show",rawName:"v-show",value:0!=e.VideoList,expression:"VideoList != 0"}],staticClass:"box-card"},[e._l(e.VideoList,(function(t){return n("div",{key:t.id,staticClass:"box_item"},[n("el-row",[n("el-col",{attrs:{span:20}},[n("div",{staticClass:"box_item_title"},[n("p",{staticStyle:{"font-weight":"700","font-size":"16px",margin:"0"}},[e._v(e._s(t.namecode))]),n("p",{staticStyle:{"font-size":"14px",color:"#999"}},[e._v(e._s(t.optdate))])])]),n("el-col",{staticClass:"col_item",attrs:{span:4}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.editorClick(t,2)}}},[e._v("修改")]),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return e.deleteClick(t.id)}}},[e._v("删除")])],1)])],1)],1)})),n("div",{staticClass:"margin-t16 text-right"},[n("pagination",{attrs:{"current-page":e.queryInfo.page,total:e.total,pageSize:e.queryInfo.pageSize},on:{handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange}})],1)],2),n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.VideoList,expression:"VideoList == 0"}],staticClass:"VideoList"},[e._v("------------------------------   抱歉暂无数据   ------------------------------")]),n("el-dialog",{attrs:{title:e.VideoName,visible:e.dialogUploadVideo,width:"80%"},on:{"update:visible":function(t){e.dialogUploadVideo=t}}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.video}},[n("el-form-item",{attrs:{label:"视频标题："}},[n("el-input",{staticStyle:{width:"800px"},model:{value:e.video.namecode,callback:function(t){e.$set(e.video,"namecode",t)},expression:"video.namecode"}})],1),n("el-form-item",{staticStyle:{"margin-right":"10px"},attrs:{label:"内容说明："}},[n("Tinymce",{attrs:{defaultContent:e.contentAll},on:{change:e.change1}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.UploadVideoclick}},[e._v("确 定 提 交")]),n("el-button",{on:{click:function(t){e.dialogUploadVideo=!1}}},[e._v("取 消")])],1)],1)],1)},i=[],o=n("5530"),s=n("e72c"),c=n("888b"),l=n("1d9a"),r=n("2f62"),d={components:{pagination:c["a"],Tinymce:s["a"]},data:function(){return{queryInfo:{page:1,pageSize:20},contentAll:"<p style='color: #999'>请输入内容</p>",total:0,formQuery:{nameCode:""},loading:!1,dialogUploadVideo:!1,VideoList:[],video:{namecode:""},dialogEditVideo:!1,videoItem:{namecode:""},videoItems:"",videoItemsId:"",VideoName:""}},computed:Object(o["a"])({},Object(r["c"])({userId:"user/userId",name:"user/name"})),created:function(){var e={page:1,pageSize:20};this.getSelectTeachingVideoList(e)},methods:{change:function(e){},getSelectTeachingVideoList:function(e){var t=this;Object(l["f"])(e).then((function(e){200===e.code?(t.VideoList=e.data.list,t.total=e.data.total):t.$message({type:"warning",message:e.message})}))},onSubmit:function(){var e=this.formQuery,t=Object(o["a"])({page:1,pageSize:20},e);this.queryInfo={page:1,pageSize:20},t.nameCode||delete t.nameCode,this.getSelectTeachingVideoList(t)},UploadVideo:function(e){this.video.namecode="",1===e?this.VideoName="培训视频上传":2===e&&(this.VideoName="修改培训视频内容"),this.dialogUploadVideo=!0},editorClick:function(e,t){this.video.namecode=e.namecode,1===t?this.VideoName="培训视频上传":2===t&&(this.VideoName="修改培训视频内容"),this.dialogUploadVideo=!0,this.contentAll=e.conscript||"",this.videoItemsId=e.id},deleteClick:function(e){var t=this;this.$confirm("此是否确认删除该视频？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={videoId:e};Object(l["a"])(n).then((function(e){200===e.code?(t.$message({type:"success",message:e.message}),t.getSelectTeachingVideoList()):t.$message({type:"warning",message:e.message})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},UploadVideoclick:function(){var e=this;if("培训视频上传"===this.VideoName){var t=Object(o["a"])(Object(o["a"])({conscript:this.contentAll},this.video),{},{rela:this.userId,nodetype:6});Object(l["b"])(t).then((function(t){200===t.code?(e.$message({type:"success",message:t.message}),e.dialogUploadVideo=!1,e.contentAll="",e.video.namecode="",e.getSelectTeachingVideoList()):e.$message({type:"warning",message:t.message})}))}else if("修改培训视频内容"===this.VideoName){var n={conscript:this.contentAll,rela:this.userId,nodetype:8,id:this.videoItemsId,namecode:this.video.namecode};Object(l["j"])(n).then((function(t){200===t.code?(e.$message({type:"success",message:t.message}),e.dialogUploadVideo=!1,e.contentAll="",e.video.namecode="",e.getSelectTeachingVideoList()):e.$message({type:"warning",message:t.message})}))}},getVideoDesc:function(e){},change1:function(e){this.contentAll=e},handleSizeChange:function(e){this.queryInfo.pageSize=e},handleCurrentChange:function(e){this.queryInfo.page=e;var t=Object(o["a"])({page:this.queryInfo.page,pageSize:20},this.formQuery);delete t.timeData}},mounted:function(){}},u=d,m=(n("1623"),n("2877")),g=Object(m["a"])(u,a,i,!1,null,"3a25b3b3",null);t["default"]=g.exports},"0f45":function(e,t,n){n("d3b7"),n("159b"),n("ddb0");var a=function(e){return e.keys().forEach(e)};try{a(!function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}())}catch(i){}},1623:function(e,t,n){"use strict";n("52fd")},"52fd":function(e,t,n){},"888b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,2,5,10],"page-size":e.pageSize,layout:"prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},i=[],o=(n("a9e3"),{props:{pageSize:{type:Number,default:10},total:Number,currentPage:Number},data:function(){return{}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChange",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)}}}),s=o,c=n("2877"),l=Object(c["a"])(s,a,i,!1,null,"d9ee0590",null);t["a"]=l.exports},d76b:function(e,t,n){"use strict";(function(e){var a=n("1da1"),i=(n("96cf"),n("a9e3"),n("a15b"),n("99af"),n("1d9a")),o=(n("e562"),n("bc3a")),s=n.n(o),c=n("9917"),l=(n("0d68"),n("fc39"),n("4ea8"),n("3aea"),n("07d1"),n("84ec"),n("2cd9")),r=n("df7c"),d=n.n(r);n("0f45");t["a"]={name:"TinymceEditor",props:{vdata:{type:String,default:""},defaultContent:{type:String,default:""},height:{type:Number,default:500},width:{type:Number,default:void 0},upload_url:{type:String,default:""},showMenubar:{type:Boolean,default:!0},toolbar:{type:String,default:" undo redo |formatselect |fullscreen  bold italic strikethrough forecolor backcolor formatpainter  link image media code | fontsizeselect |fontselect| alignleft aligncenter alignright alignjustify  |numlist bullist |  outdent indent  | removeformat preview"},baseUrl:{type:String,default:""}},components:{Editor:c["a"]},data:function(){return{tinymceFlag:1,tinymceInit:{},content:this.vdata||"",resimg:"",resVideo:"",uploaded:!1,qiniuToken:"",domain:null,loading:!1}},created:function(){var t=this,n=(d.a.join(e,"./front"),window.location.host);this.tinymceInit={selector:"#tinymce",file_picker_types:"image media",language_url:"192.168.1.24:9081"===n?"/invoicing/tinymce/langs/zh_CN.js":"/tinymce/langs/zh_CN.js",skin_url:"192.168.1.24:9081"===n?"/invoicing/tinymce/skins/ui/oxide":"/tinymce/skins/ui/oxide",content_css:"192.168.1.24:9081"===n?"/invoicing/tinymce/skins/content/default/content.css":"/tinymce/skins/content/default/content.css",language:"zh_CN",min_height:350,width:1200,browser_spellcheck:!0,branding:!1,elementpath:!1,statusbar:!1,paste_data_images:!0,menubar:!1,contextmenu:!1,plugins:"fontselect fullpage searchreplace directionality visualblocks visualchars template codesample charmap pagebreak nonbreaking anchor toc insertdatetime fullscreen wordcount textpattern help advlist table lists paste preview  image media imagetools code link ",toolbar:this.toolbar,convert_urls:!1,images_upload_handler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n,a){var i,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=new File([n.blob()],n.filename(),{type:"image/png"}),o=new FormData,o.append("multipartFiles",i),c=i.size/1024/1024<2,c){e.next=7;break}return t.$message.error("上传头像图片大小不能超过 2MB!,点击ESC退出，重新上传"),e.abrupt("return");case 7:s.a.post(l["b"],o).then((function(e){var t=e.data.data[0];a(t)})).catch((function(e){}));case 8:case"end":return e.stop()}}),e)})));function n(t,n){return e.apply(this,arguments)}return n}(),file_picker_callback:function(e,n,o){if("media"===o.filetype){var c=document.createElement("input");c.setAttribute("type","file"),c.onchange=function(){var n=this;t.loading=!0;var o=document.querySelector(".tox-dialog");o.style.display="none";var c=this.files[0];Object(i["k"])().then((function(i){if(200===i.code){n.qiniuToken=i.data.token,n.domain=i.data.domain;var l=new FormData,r="token",d=n.qiniuToken;l[r]=d,l.append("token",n.qiniuToken),l.append("file",c),s.a.post("https://upload.qiniup.com",l).then(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!1,o.style.display="block",n.next=4,e("http://filets.520shq.com/".concat(a.data.key));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){}))}else n.$message({type:"warning",message:i.message})}))},c.click(),t.loading=!0}},media_url_resolver:function(e,t){try{var n=encodeURI(e.url),a='<p>\n            <span\n                class="mce-object mce-object-video"\n                data-mce-selected="1"\n                data-mce-object="video"\n                data-mce-p-width="100%"\n                data-mce-p-height="auto"\n                data-mce-p-controls="controls"\n                data-mce-p-controlslist="nodownload"\n                data-mce-p-allowfullscreen="true"\n                data-mce-p-src='.concat(n," >\n                <video src=").concat(e.url,' width="100%" height="auto" controls="controls" controlslist="nodownload">\n                </video>\n            </span>\n            </p>\n            <p style="text-align: left;"></p>');t({html:a})}catch(i){t({html:""})}}}},methods:{},mounted:function(){this.defaultContent&&(this.content=this.defaultContent)},watch:{content:{handler:function(){this.$emit("change",this.content)}},defaultContent:{handler:function(){this.content=this.defaultContent},immediate:!0}},activated:function(){this.tinymceFlag++}}}).call(this,"/")},e72c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("editor",{key:e.tinymceFlag,attrs:{id:"tinymce",init:e.tinymceInit},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},i=[],o=n("d76b"),s=o["a"],c=n("2877"),l=Object(c["a"])(s,a,i,!1,null,null,null);t["a"]=l.exports}}]);