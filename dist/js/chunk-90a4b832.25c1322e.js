(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90a4b832"],{"9f2f":function(e,t,a){"use strict";a("e93c")},e93c:function(e,t,a){},fd14:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-conent main-conent-minheight flex-main-conent"},[a("div",{staticClass:"flex-box"},[a("div",{staticClass:"flex-top"},[a("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-bottom":"0px"},attrs:{inline:!0,model:e.formQuery}},[a("el-form-item",{staticStyle:{"margin-right":"30px"},attrs:{label:"公司名称："}},[a("el-input",{attrs:{clearable:""},model:{value:e.logisticsNamestr,callback:function(t){e.logisticsNamestr=t},expression:"logisticsNamestr"}})],1),a("el-form-item",{staticStyle:{"margin-right":"30px"},attrs:{label:"所在区域："}},[a("AppRegion",{ref:"child",attrs:{state:101},on:{valueRegion:e.chengRegion}})],1),a("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),a("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary"},on:{click:e.onSubmit2}},[e._v("添加物流公司")])],1)],1),a("div",{staticClass:"flex-cont"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTab,expression:"loadingTab"}],ref:"TableData",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:"",height:"100%","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{property:"id",label:"标识",width:"50",align:"center"}}),a("el-table-column",{attrs:{property:"namecode",label:"公司名称",align:"center"}}),a("el-table-column",{attrs:{property:"area",label:"所在区域",align:"center"}}),a("el-table-column",{attrs:{property:"address",label:"详细地址",align:"center"}}),a("el-table-column",{attrs:{property:"contact",label:"联系人",align:"center"}}),a("el-table-column",{attrs:{property:"phone",label:"联系人电话",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.ManagementAddressUpdate(t.row)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.ManagementAddressDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("div",{staticClass:"flex-button"},[a("div",{staticClass:"margin-t16 text-right"},[a("AppPaging",{attrs:{total:e.allTate,pageSize:e.paramData.pageSize,currentPage:e.paramData.page},on:{handleCurrentChange:e.handleCurrentChange,handleSizeChange:e.handleSizeChange}})],1)])]),a("AddLogistics",{ref:"AddLogistics",on:{change:e.AddLogisticsGet}})],1)},i=[],s=a("5530"),r=(a("d3b7"),a("159b"),a("b64b"),a("2f62")),l=a("2f88"),o=a("3f39"),c=a("970d"),d=a("fd5c"),g=a("f8fb"),p={components:{AddLogistics:g["a"],AppPaging:l["a"],AppRegion:o["a"]},data:function(){return{scrollTop:0,scrollLeft:0,logisticsNamestr:"",bianpai:[],AddAddressVisible:!1,tableData:[],formQuery:{customerName:"",value2:"",productName:"",status:"100504",skuCode:"",logisticsNum:"",logisticsId:""},paramData:{page:1,pageSize:24},loadingTab:!1,chengRegionObje:{},allTate:0,currentPage:1}},computed:Object(s["a"])({},Object(r["c"])({userId:"user/userId",name:"user/name"})),created:function(){this.onSubmit()},methods:{AddLogisticsGet:function(e){this.paramData.page=1,this.getTable(this.paramData)},onSubmit2:function(){this.$refs.AddLogistics.init_value(),this.AddAddressVisible=!0},ManagementAddressUpdate:function(e){this.$refs.AddLogistics.update_value(e)},handleSelectionChange:function(e){this.bianpai=e},chengRegion:function(e){var t=e;this.chengRegionObje=t},ManagementAddressDelete:function(e){var t=this;this.$confirm("此操作将删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(d["a"])({id:e.id}).then((function(e){200===e.code?(t.$message({message:e.message,type:"success"}),t.getTable(t.paramData)):t.$message({message:e.message,type:"fail"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getTable:function(e){var t=this;this.paramData=e,this.loadingTab=!0,Object(c["d"])(e).then((function(e){t.loadingTab=!1,200===e.code&&(t.allTate=e.data.total,t.currentPage=e.data.pageNum,t.tableData=e.data.list)}))},onSubmit:function(){var e={page:1,pageSize:this.paramData.pageSize,cityId:this.chengRegionObje.cityId,provinceId:this.chengRegionObje.provinceId,countyId:this.chengRegionObje.countyId,logisticsName:this.logisticsNamestr};Object.keys(e).forEach((function(t){var a=e[t];""===a&&delete e[t]})),this.getTable(e)},handleSizeChange:function(e){this.paramData.pageSize=e,this.handleCurrentChange(1)},handleCurrentChange:function(e){this.paramData.page=e,this.getTable(this.paramData)}},mounted:function(){},name:"CustomerManagement-CarrierCompany",activated:function(){var e=this;setTimeout((function(){e.$refs.TableData.bodyWrapper.scrollTop=e.scrollTop,e.$refs.TableData.bodyWrapper.scrollLeft=e.scrollLeft}),60)},beforeRouteLeave:function(e,t,a){this.scrollTop=this.$refs.TableData.bodyWrapper.scrollTop,this.scrollLeft=this.$refs.TableData.bodyWrapper.scrollLeft,a()}},u=p,m=(a("9f2f"),a("2877")),h=Object(m["a"])(u,n,i,!1,null,"49d41678",null);t["default"]=h.exports}}]);