(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49635ef2"],{"062d":function(t,e,a){"use strict";a.d(e,"z",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"I",(function(){return u})),a.d(e,"F",(function(){return d})),a.d(e,"n",(function(){return l})),a.d(e,"m",(function(){return s})),a.d(e,"o",(function(){return p})),a.d(e,"u",(function(){return m})),a.d(e,"C",(function(){return f})),a.d(e,"x",(function(){return h})),a.d(e,"y",(function(){return g})),a.d(e,"E",(function(){return b})),a.d(e,"k",(function(){return y})),a.d(e,"g",(function(){return v})),a.d(e,"l",(function(){return D})),a.d(e,"j",(function(){return O})),a.d(e,"G",(function(){return S})),a.d(e,"w",(function(){return C})),a.d(e,"K",(function(){return _})),a.d(e,"s",(function(){return x})),a.d(e,"L",(function(){return j})),a.d(e,"J",(function(){return I})),a.d(e,"H",(function(){return w})),a.d(e,"B",(function(){return k})),a.d(e,"d",(function(){return z})),a.d(e,"f",(function(){return T})),a.d(e,"A",(function(){return E})),a.d(e,"e",(function(){return P})),a.d(e,"p",(function(){return L})),a.d(e,"D",(function(){return Q})),a.d(e,"r",(function(){return N})),a.d(e,"q",(function(){return M})),a.d(e,"t",(function(){return $})),a.d(e,"v",(function(){return A})),a.d(e,"h",(function(){return F})),a.d(e,"i",(function(){return W})),a.d(e,"c",(function(){return R})),a.d(e,"a",(function(){return B}));var n=a("83c3"),r=a("4328"),o=a.n(r);function i(t){return Object(n["a"])({url:"/product/selectProductList",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/admin/data/selectByCond/I_packmaterial?pageNo=0",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/product/selectProductInventory",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/product/getReturnConfiguration",method:"get",params:t})}function l(){return Object(n["a"])({url:"/admin/factory/getFactoryList",method:"get"})}function s(t){return Object(n["a"])({url:"/admin/factory/getFactoryIdAndName",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/admin/factory/getFactoryByPrincipal",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/admin/purchase/temp/getProductMaterial",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/admin/purchase/temp/materialsOutbound",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/product/saveProduct",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/product/updateProduct",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/product/saveReturnConfiguration",method:"POST",data:t})}function y(t){return Object(n["a"])({url:"/product/deleteProductUnit",method:"post",data:o.a.stringify(t)})}function v(t){return Object(n["a"])({url:"/admin/shopper/warehouse/getWarehouseIdAndname",method:"get",params:t})}function D(t){return Object(n["a"])({url:"/product/deleteProductWdata",method:"post",data:o.a.stringify(t)})}function O(t){return Object(n["a"])({url:"/product/copyProductToNewFactory",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/product/selectProductInfo",method:"get",params:t})}function C(t){return Object(n["a"])({url:"/admin/data/execProcedure/getgood_inventory?pageNo=0",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/admin/data/execProcedure/st_stock_procdct?pageNo=0",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/product/isUpdate",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/product/updeteProductInventory",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/product/updateMaterialInventory",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/admin/data/execProcedure/st_stock_packmaterial?pageNo=0",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/product/isUpdateMaterialInventory",method:"get",params:t})}function z(t){return Object(n["a"])({url:"/admin/data/selectByCond/I_product_wdata?pageNo=0",method:"post",data:t})}function T(t,e){return Object(n["a"])({url:"/admin/data/updateById/I_product_wdata?dataId="+e,method:"post",data:t})}function E(t){return Object(n["a"])({url:"/product/isUpdateMaterialInventory",method:"GET",params:t})}function P(t){return Object(n["a"])({url:"/admin/data/insert/I_product_wdata",method:"post",data:t})}function L(t){return Object(n["a"])({url:"/productionPlan/getFactoryPurchasePlanDetailList",method:"get",params:t})}function Q(t){return Object(n["a"])({url:"/admin/factory/purchase/plan/purchaseStatistics",method:"get",params:t})}function N(t){return Object(n["a"])({url:"/goodsWarehouse/getInventoryList",method:"get",params:t})}function M(t){return Object(n["a"])({url:"/goodsWarehouse/getInWarehouse",method:"get",params:t})}function $(t){return Object(n["a"])({url:"/goodsOutbound/getOntWarehouse",method:"get",params:t})}function A(t){return Object(n["a"])({url:"/admin/hxhouse/gethxhouseList",method:"get",params:t})}function F(t){return Object(n["a"])({url:"/goodsWarehouse/amendmentCurrentInventory",method:"post",data:t})}function W(t){return Object(n["a"])({url:"/admin/hxhouse/amendmentHxCurrentInventory",method:"post",data:t})}function R(t){var e={getColumns:[{nameCode:"id"},{nameCode:"data",vdata:{DISPNAME:"sku"}},{nameCode:"namecode"},{nameCode:"specification",vdata:{DISPNAME:"specif"}},{nameCode:"unit"}],Condition:[{nameCode:"nodetype",data:t.nodetype},{nameCode:"namecode",nodetype:"LIKE",data:"%"+t.namecode+"%"}]};return Object(n["a"])({url:"/admin/data/selectByCond/I_product?pageNo=0",method:"post",data:e})}function B(t){return Object(n["a"])({url:"/admin/data/execProcedure/Confirm_favtory_purchase?pageNo=0",method:"post",data:t})}},"15e6":function(t,e,a){},"2f88":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":t.pageSizesArr||t.pageSizesArrInit,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},r=[],o=(a("a9e3"),a("ac1f"),a("1276"),{props:{pageSize:{type:Number,default:10},pageSizesArr:{type:Array,default:null},layout:{type:String,default:"total,sizes,prev, pager, next"},total:Number,currentPage:Number},data:function(){return{pageSizesArrInit:[24,100,200,500,1e3]}},mounted:function(){var t=location.href.split("/")[2];"192.168.1.145:8080"===t&&(this.pageSizesArrInit=[2,24,100,200,500,1e3])},methods:{handleSizeChange:function(t){this.$emit("handleSizeChange",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChange",t)}}}),i=o,c=a("2877"),u=Object(c["a"])(i,n,r,!1,null,"79dfe774",null);e["a"]=u.exports},"7db0":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").find,o=a("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},"85a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warehouse main-conent flex-main-conent"},[a("div",{staticClass:"flex-box"},[a("div",{staticClass:"flex-top"},[a("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-bottom":"15px"},attrs:{inline:!0,model:t.formQuery}},[a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:"盘存日期："}},[a("el-select",{staticStyle:{width:"160px"},attrs:{filterable:"",clearable:"",placeholder:"请选择"},on:{change:t.ClickEndDate},model:{value:t.formQuery.endDate,callback:function(e){t.$set(t.formQuery,"endDate",e)},expression:"formQuery.endDate"}},t._l(t.endDateList,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:"日期："}},[a("el-date-picker",{staticStyle:{width:"160px"},attrs:{align:"right","value-format":"yyyy-MM-dd","picker-options":{disabledDate:t.starDataMax},clearable:!1},model:{value:t.formQuery.day,callback:function(e){t.$set(t.formQuery,"day",e)},expression:"formQuery.day"}})],1),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:"生产日期："}},[a("el-date-picker",{staticStyle:{width:"160px"},attrs:{align:"right","value-format":"yyyy-MM-dd"},model:{value:t.formQuery.productDate,callback:function(e){t.$set(t.formQuery,"productDate",e)},expression:"formQuery.productDate"}})],1),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:"生产工厂："}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:function(e){return t.onSubmit()}},model:{value:t.formQuery.factoryId,callback:function(e){t.$set(t.formQuery,"factoryId",e)},expression:"formQuery.factoryId"}},t._l(t.FactoryNameList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.factoryName,value:t.id}})})),1)],1),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:"商品名称："}},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.formQuery.namecode,callback:function(e){t.$set(t.formQuery,"namecode",e)},expression:"formQuery.namecode"}})],1),a("el-form-item",{staticStyle:{"margin-right":"20px"}},[a("el-button",{attrs:{type:"primary",size:"small",disabled:t.loadingTab},on:{click:function(e){return t.onSubmit()}}},[t._v("查询")])],1),a("el-form-item",{staticStyle:{"margin-right":"20px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.pcadd()}}},[t._v("盘存")])],1),a("el-form-item",{staticStyle:{"margin-right":"20px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.pacClick(1)}}},[t._v("盘存日期管理")])],1),a("el-form-item",{staticStyle:{"margin-right":"20px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.set_daochu()}}},[t._v("导出查询结果到EXCEL")])],1)],1)],1),a("div",{staticClass:"flex-cont"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingTab,expression:"loadingTab"}],key:t.keyTimestamp,ref:"listData",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"100%",stripe:"",border:"","span-method":t.objectSpanMethod,"highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{property:"productId",label:"编号",align:"center",width:"60"}}),a("el-table-column",{attrs:{property:"namecode",label:"商品名称","min-width":"250",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{property:"specif",label:"规格",align:"center","min-width":"150"}}),a("el-table-column",{attrs:{property:"unit",label:"商品单位",align:"center"}}),a("el-table-column",{attrs:{property:"producedate",label:"生产日期","min-width":"100",align:"center"}}),a("el-table-column",{attrs:{property:"remainder",label:t.pacData_p+"盘点后的库存","min-width":"120",align:"center"}}),a("el-table-column",{attrs:{property:"currentInCount",label:"总入库数","min-width":"120",align:"center"}}),a("el-table-column",{attrs:{property:"currentOutCount",label:"总出库数","min-width":"120",align:"center"}}),a("el-table-column",{attrs:{property:"currentRemainder",label:"当前库存",align:"center","min-width":"120"}}),t.tableData.length?t._l(t.tableData[0].inAndOutInfoVOS,(function(e,n){return a("el-table-column",{key:n,staticStyle:{"font-size":"12px"},attrs:{label:e.day,align:"center"}},[a("el-table-column",{attrs:{prop:"unit",label:"入库数",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.inAndOutInfoVOS[n].inCount))]}}],null,!0)}),a("el-table-column",{attrs:{prop:"unit",label:"出库数",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.inAndOutInfoVOS[n].outCount))]}}],null,!0)})],1)})):t._e()],2)],1),a("div",{staticClass:"flex-button"},[t.total?a("div",{staticClass:"margin-t16 text-right"},[a("AppPaging",{attrs:{total:t.total,pageSize:t.paramData.pageSize,currentPage:t.paramData.page},on:{handleCurrentChange:t.handleCurrentChange,handleSizeChange:t.handleSizeChange}})],1):t._e()])]),a("el-dialog",{staticClass:"dazdcl",attrs:{title:t.pacData.namecode,visible:t.pacSync,width:"420px"},on:{"update:visible":function(e){t.pacSync=e}}},[a("div",[a("p",[t._v(" 上一次盘存日期: "+t._s(t.pacDataD.vdata))]),a("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-bottom":"15px"},attrs:{inline:!0,model:t.formQuery}},[a("el-form-item",{staticStyle:{"margin-right":"20px","margin-bottom":"0"},attrs:{label:"选择下次盘存日期："}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{align:"right","value-format":"yyyy-MM-dd","picker-options":{disabledDate:t.starDataMax2},clearable:!1},model:{value:t.pacData.data,callback:function(e){t.$set(t.pacData,"data",e)},expression:"pacData.data"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.pacClick(2)}}},[t._v("保存")]),a("el-button",{on:{click:function(e){t.pacSync=!1}}},[t._v("关闭")])],1)]),a("el-dialog",{staticStyle:{"margin-top":"15vh"},attrs:{title:"导出提示",visible:t.dialogExport,width:"30%"},on:{"update:visible":function(e){t.dialogExport=e}}},[a("span",[t._v(t._s("请在浏览器的“下载”中查看"))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.dialogExport=!1}}},[t._v("确 定")])],1)])],1)},r=[],o=a("5530"),i=(a("d3b7"),a("159b"),a("b64b"),a("a9e3"),a("7db0"),a("c740"),a("da87")),c=a("062d"),u=a("2f62"),d=a("2f88"),l={components:{AppPaging:d["a"]},data:function(){return{scrollTop:0,scrollLeft:0,dialogExport:!1,pacSync:!1,pacData:{},pacDataD:{},pacData_p:"",endDateList:[],keyTimestamp:1,FactoryNameList:[],formQuery:{day:"",factoryId:"",supplierId:"",namecode:""},supplerData:{radio:0,sync:!1,title:"指定供应商",dataID:{},row:{},list:[],loading:!1,formQuery:{},paramData:{}},paramData:{page:1,pageSize:24},total:0,tableData:[],loadingTab:!1,dateValue:"",tableType:1,tableCheckedIds:[],index_name:"warehouse"}},computed:Object(o["a"])({},Object(u["c"])({userId:"user/userId",name:"user/name"})),created:function(){this.formQuery.day=this.get_dateTime(),this.get_getEndDateList(),this.getFactoryName()},mounted:function(){},methods:{set_daochu:function(){var t=this,e=Object(o["a"])({page:this.paramData.page,pageSize:this.paramData.pageSize},this.formQuery);e.content||delete e.type,Object.keys(e).forEach((function(t){var a=e[t];""===a&&delete e[t]})),this.ExcelLoad=!0,Object(i["b"])("/admin/excel/exportInventoryReport",e).then((function(e){t.ExcelLoad=!1,t.ObtainExcel(e,"盘存出入库报表 "),t.dialogExport=!0}))},get_getEndDateList:function(){var t=this;Object(i["a"])("/inventory/getEndDateList").then((function(e){200===e.code&&(t.endDateList=e.data)}))},handleClose:function(){},starDataMax2:function(t){if(this.pacData.data)return t.getTime()<=Date.parse(this.pacDataD.dataMin)},pacClick:function(t){var e=this;if(1===t&&Object(i["a"])("/admin/department/getInventoryDate",{}).then((function(t){if(200===t.code){e.pacSync=!0,e.pacData=t.data;var a=e.get_dateTime();e.pacDataD=Object(o["a"])(Object(o["a"])({},t.data),{},{dataMin:t.data.vdata<a?t.data.vdata:a})}})),2===t){var a={dateTime:this.pacData.data,id:this.pacData.id};Object(i["c"])("/admin/department/updateApplicationParments",a).then((function(t){200===t.code&&(t.data?(e.$message.success(t.message),e.pacSync=!1,e.ToUpDate(),e.get_getEndDateList()):e.$message.warning("修改失败"))}))}},pcadd:function(){var t=this;Object(i["a"])("/operational/saveOperationalRecord",{}).then((function(e){200===e.code&&t.$message.success(e.message)}))},ClickEndDate:function(t){t&&(this.formQuery.day=t),this.onSubmit()},starDataMax:function(t){if(this.formQuery.day)return t.getTime()<Date.parse(this.formQuery.endDate)-864e5||t.getTime()>Date.parse(this.get_dateTime())},getFactoryName:function(){var t=this;Object(c["o"])({}).then((function(e){if(200===e.code){var a=[];e.data.forEach((function(t){1===t.data&&a.push(t)})),t.FactoryNameList=a,t.formQuery.factoryId=t.FactoryNameList[0].id,t.onSubmit()}}))},input_focus:function(t){this.$refs[t].focus()},kafizhon:function(){this.$confirm("功能开发中...","提示",{confirmButtonText:"确定"}).then((function(){}))},inputNumber:function(t,e,a){if("-"!==t.num){var n=Number(e)||0,r=a||!1;t.num=t.num<n?n:t.num,r&&r>n&&(t.num=t.num>r?r:t.num)}},searchCle:function(t){this.formQuery.productId=t},count_price:function(t,e){return t<=0||0===e?0:1===e?t:e>0?Math.floor(t/e*1e4)/1e4:t*e*-1},handleSelectionChange:function(t){var e=this;this.table_id_arr=[],this.table_plan_arr=[],t.length>0&&t.forEach((function(t){e.table_id_arr.push(t.ids),t.isProduction&&e.table_plan_arr.push(t)}))},handleCurrentChange:function(t){this.paramData.page=t,this.getTables(this.paramData)},handleSizeChange:function(t){this.paramData.pageSize=t,this.handleCurrentChange(1)},onSubmit:function(){this.paramData.page=1,this.dateValue&&(this.paramData.startDate=this.dateValue[0],this.paramData.endDate=this.dateValue[1]);var t=Object(o["a"])({page:this.paramData.page,pageSize:this.paramData.pageSize},this.formQuery);Object.keys(t).forEach((function(e){var a=t[e];""===a&&delete t[e]})),this.paramData=t,this.getTables(this.paramData)},ToUpDate:function(){this.getTables(this.paramData)},getTables:function(t){var e=this;this.loadingTab=!0,this.pacData_p="",Object(i["a"])("/inventory/getInventoryReport",t).then((function(t){e.loadingTab=!1;var a=t.data;200===t.code&&(a=t.data.list,e.pacData_p="",a.length&&(e.pacData_p=a[0].preEndDate||""),e.total=t.data.total||0),e.tableData=e.SpanMethodData(a),e.keyTimestamp=Date.parse(new Date)}))},objectSpanMethod:function(t){var e=t.row,a=t.columnIndex,n=e.rowspan||0===e.rowspan?e.rowspan:1,r=this.$refs.listData.$children.find((function(t,e){return a===e}));if(r&&["编号","商品名称","规格","商品单位"].indexOf(r.label)>=0){var o={rowspan:n,colspan:1};return e.rowspan>1&&(o={rowspan:n,colspan:1}),o}},SpanMethodData:function(t){var e=t,a=[];return e.forEach((function(t,e){var n=a.findIndex((function(e){return e.productId===t.productId}));t.rowspan=1,n<0?a.push({productId:t.productId,index:e,rowspan:1}):(t.rowspan=0,a[n].rowspan++)})),a.forEach((function(t){var a=e.findIndex((function(e){return e.productId===t.productId}));e[a].rowspan=t.rowspan})),e}},name:"getInventoryReport",activated:function(){var t=this;setTimeout((function(){t.$refs.listData.bodyWrapper.scrollTop=t.scrollTop,t.$refs.listData.bodyWrapper.scrollLeft=t.scrollLeft}),60)},beforeRouteLeave:function(t,e,a){this.scrollTop=this.$refs.listData.bodyWrapper.scrollTop,this.scrollLeft=this.$refs.listData.bodyWrapper.scrollLeft,a()}},s=l,p=(a("fba2"),a("2877")),m=Object(p["a"])(s,n,r,!1,null,"763dd6af",null);e["default"]=m.exports},fba2:function(t,e,a){"use strict";a("15e6")}}]);