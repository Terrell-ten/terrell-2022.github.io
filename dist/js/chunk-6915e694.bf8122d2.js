(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6915e694"],{"2f88":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":t.pageSizesArr||t.pageSizesArrInit,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},r=[],i=(a("a9e3"),a("ac1f"),a("1276"),{props:{pageSize:{type:Number,default:10},pageSizesArr:{type:Array,default:null},layout:{type:String,default:"total,sizes,prev, pager, next"},total:Number,currentPage:Number},data:function(){return{pageSizesArrInit:[24,100,200,500,1e3]}},mounted:function(){var t=location.href.split("/")[2];"192.168.1.145:8080"===t&&(this.pageSizesArrInit=[2,24,100,200,500,1e3])},methods:{handleSizeChange:function(t){this.$emit("handleSizeChange",t)},handleCurrentChange:function(t){this.$emit("handleCurrentChange",t)}}}),o=i,u=a("2877"),s=Object(u["a"])(o,n,r,!1,null,"79dfe774",null);e["a"]=s.exports},3060:function(t,e,a){},4795:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));a("a434");function n(t){var e=new Date(t),a=e.getMonth()+1,n=e.getDate();a>=1&&a<=9&&(a="0"+a),n>=0&&n<=9&&(n="0"+n);var r=e.getFullYear()+"-"+a+"-"+n+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return r}function r(t,e){for(var a=t.length,n=0;n<a;n++)if(t[n].id===e)return 0===n?(t.shift(),t):n===a-1?(t.pop(),t):(t.splice(n,1),t)}},"7c58":function(t,e,a){"use strict";a.d(e,"C",(function(){return r})),a.d(e,"y",(function(){return i})),a.d(e,"R",(function(){return o})),a.d(e,"g",(function(){return u})),a.d(e,"gb",(function(){return s})),a.d(e,"D",(function(){return d})),a.d(e,"G",(function(){return l})),a.d(e,"F",(function(){return c})),a.d(e,"s",(function(){return p})),a.d(e,"N",(function(){return m})),a.d(e,"S",(function(){return f})),a.d(e,"m",(function(){return h})),a.d(e,"Z",(function(){return g})),a.d(e,"B",(function(){return b})),a.d(e,"H",(function(){return y})),a.d(e,"A",(function(){return v})),a.d(e,"L",(function(){return _})),a.d(e,"o",(function(){return D})),a.d(e,"u",(function(){return O})),a.d(e,"f",(function(){return P})),a.d(e,"n",(function(){return T})),a.d(e,"h",(function(){return w})),a.d(e,"bb",(function(){return j})),a.d(e,"z",(function(){return S})),a.d(e,"E",(function(){return G})),a.d(e,"k",(function(){return k})),a.d(e,"T",(function(){return x})),a.d(e,"I",(function(){return L})),a.d(e,"J",(function(){return C})),a.d(e,"j",(function(){return I})),a.d(e,"w",(function(){return $})),a.d(e,"v",(function(){return N})),a.d(e,"P",(function(){return E})),a.d(e,"x",(function(){return W})),a.d(e,"M",(function(){return Q})),a.d(e,"l",(function(){return z})),a.d(e,"K",(function(){return A})),a.d(e,"X",(function(){return U})),a.d(e,"e",(function(){return V})),a.d(e,"cb",(function(){return M})),a.d(e,"O",(function(){return B})),a.d(e,"db",(function(){return F})),a.d(e,"ib",(function(){return R})),a.d(e,"r",(function(){return J})),a.d(e,"Q",(function(){return H})),a.d(e,"U",(function(){return Y})),a.d(e,"Y",(function(){return q})),a.d(e,"W",(function(){return K})),a.d(e,"V",(function(){return X})),a.d(e,"eb",(function(){return Z})),a.d(e,"hb",(function(){return tt})),a.d(e,"b",(function(){return et})),a.d(e,"q",(function(){return at})),a.d(e,"fb",(function(){return nt})),a.d(e,"t",(function(){return rt})),a.d(e,"c",(function(){return it})),a.d(e,"d",(function(){return ot})),a.d(e,"i",(function(){return ut})),a.d(e,"a",(function(){return st})),a.d(e,"p",(function(){return dt})),a.d(e,"ab",(function(){return lt}));var n=a("83c3");function r(t){return Object(n["a"])({url:"/admin/purchase/plan/list/page",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/admin/purchase/plan/detail/list/page",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/admin/product/unit/getUnitsToPlan",method:"GET",params:t})}function u(t){return Object(n["a"])({url:"/admin/pack/material/conversionPrice",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/admin/purchase/plan/updatePurchasePlanUnit",method:"POST",data:t})}function d(t){return Object(n["a"])({url:"/admin/purchase/plan/getPurchaseMaterialList",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/admin/purchase/plan/merge",method:"post",data:t})}function c(t){return Object(n["a"])({url:"admin/purchase/plan/merge",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/admin/excel/operationPurchasePlanDetail",method:"GET",params:t})}function m(t){return Object(n["a"])({url:"/admin/purchase/plan/status/list",method:"GET",data:t})}function f(t){return Object(n["a"])({url:"/admin/excel/operationPurchasePlanDetail",method:"GET",params:t})}function h(t){return Object(n["a"])({url:"/admin/factory/getFactoryList",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/admin/purchase/plan/insert",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/admin/purchase/plan/get",method:"GET",params:t})}function y(t){return Object(n["a"])({url:"/admin/purchase/plan/update",method:"POST",data:t})}function v(t){return Object(n["a"])({url:"/admin/purchase/plan/delete",method:"POST",data:t})}function _(t){return Object(n["a"])({url:"/admin/purchase/plan/purchaseGoodsWarehousing",method:"POST",data:t})}function D(t){return Object(n["a"])({url:"/admin/factory/purchase/plan/all/list",method:"POST",data:t})}function O(t){return Object(n["a"])({url:"/admin/factory/purchase/plan/status/list",method:"GET",params:t})}function P(t){return Object(n["a"])({url:"admin/data/execProcedure/cm_list_batchout?pageNo=0",method:"post",data:t})}function T(t){return Object(n["a"])({url:"/admin/factory/getFactoryList",method:"GET",params:t})}function w(t){return Object(n["a"])({url:"/admin/data/execProcedure/create_prodplan?pageNo=0",method:"POST",data:t})}function j(t){return Object(n["a"])({url:"/admin/customer/detail/schedule/selectCustomerOrderList",method:"GET",params:t})}function S(t){return Object(n["a"])({url:"/productionPlan/getProductPlanstockList",method:"GET",params:t})}function G(t){return Object(n["a"])({url:"/admin/factory/purchase/plan/get",method:"GET",params:t})}function k(t){return Object(n["a"])({url:"/admin/factory/purchase/plan/confirmPurchase",method:"POST",data:t})}function x(t){return Object(n["a"])({url:"/admin/excel/prePurchasePlan",method:"GET",params:t})}function L(t){return Object(n["a"])({url:"/admin/pre/purchase/plan/all/list",method:"POST",data:t})}function C(t){return Object(n["a"])({url:"/admin/pre/purchase/plan/get",method:"GET",params:t})}function I(t){return Object(n["a"])({url:"/admin/pre/purchase/plan/confirmPurchase",method:"POST",data:t})}function $(t){return Object(n["a"])({url:"/admin/purchase/plan/getPurchaseArrangementList",method:"POST",data:t})}function N(t){return Object(n["a"])({url:"/admin/purchase/plan/getPlantmpList",method:"POST",data:t})}function E(t){return Object(n["a"])({url:"/admin/material/supplier/list",method:"GET",data:t})}function W(t){return Object(n["a"])({url:"/payment/getProdorderPaymentList",method:"GET",params:t})}function Q(t){return Object(n["a"])({url:"/payment/savePurchorderPayment",method:"POST",data:t})}function z(t){return Object(n["a"])({url:"/payment/deletePurchorderPayment",method:"POST",data:t})}function A(t){return Object(n["a"])({url:"/payment/getPurchorderPayment",method:"POST",params:t})}function U(t){return Object(n["a"])({url:"/admin/data/execProcedure/cm_list_batch?pageNo=1",method:"POST",data:t})}function V(t){return Object(n["a"])({url:"/admin/data/execProcedure/cm_list_batch?pageNo=0",method:"POST",data:t})}function M(t){return Object(n["a"])({url:"/product/selectProductList",method:"GET",params:t})}function B(t){return Object(n["a"])({url:"/admin/purchase/plan/getStatisticsList",method:"POST",data:t})}function F(t){return Object(n["a"])({url:"/admin/material/supplier/supplierList",method:"get",params:t})}function R(t){return Object(n["a"])({url:"/admin/purchase/plan/updateSupplier",method:"post",data:t})}function J(t){return Object(n["a"])({url:"/admin/purchase/plan/getMaterialPurchstockList",method:"post",data:t})}function H(t){return Object(n["a"])({url:"/admin/material/supplier/getSupplierListByProductId",method:"get",params:t})}function Y(t){return Object(n["a"])({url:"/admin/data/execProcedure/create_purchplan?pageNo=0",method:"POST",data:t})}function q(t){return Object(n["a"])({url:"/admin/purchase/plan/purchaseGoodsBatchWarehouse",method:"post",data:t})}function K(t){return Object(n["a"])({url:"/admin/purch/detail/materialsAreStoredInBatchesTwo",method:"post",data:t})}function X(t){return Object(n["a"])({url:"/admin/purch/detail/materialsAreStoredInBatches",method:"post",data:t})}function Z(t){return Object(n["a"])({url:"/admin/purchase/plan/updateDetailRemarks",method:"post",data:t})}function tt(t){return Object(n["a"])({url:"/admin/purchase/plan/updateRemarks",method:"post",data:t})}function et(t){return Object(n["a"])({url:"/admin/purchase/plan/auditPurchPlan",method:"post",data:t})}function at(t){return Object(n["a"])({url:"/admin/purchase/plan/getMaterialPurchstock",method:"get",params:t})}function nt(t){return Object(n["a"])({url:"/admin/purchase/plan/updatePurchPlanDetail",method:"post",data:t})}function rt(t){return Object(n["a"])({url:"/admin/factory/getPayeeInformation",method:"get",params:t})}function it(t){return Object(n["a"])({url:"/admin/purchase/plan/cancelPurchasePlan",method:"post",data:t})}function ot(t){return Object(n["a"])({url:"/admin/purchase/plan/cancelPurchasePlanDetail",method:"post",data:t})}function ut(t){return Object(n["a"])({url:"/admin/purchase/plan/confirmPurchase",method:"POST",data:t})}function st(t){return Object(n["a"])({url:"/admin/data/execProcedure/采购批量操作?pageNo=0",method:"post",data:t})}function dt(t){return Object(n["a"])({url:"/admin/purch/detail/getMaterialInStockRecordList",method:"get",params:t})}function lt(t){return Object(n["a"])({url:"/admin/purch/detail/saveDeliveryVoucher",method:"post",data:t})}},9653:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-conent main-conent-minheight"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formQuery}},[a("el-form-item",{staticStyle:{"margin-right":"30px"},attrs:{label:"日期从："}},[a("div",{staticClass:"block"},[a("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",align:"right",placeholder:"开始日期","value-format":"yyyy-MM-dd","picker-options":{disabledDate:t.starDataMax}},model:{value:t.formQuery.startTime,callback:function(e){t.$set(t.formQuery,"startTime",e)},expression:"formQuery.startTime"}}),t._v(" - "),a("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",align:"right",placeholder:"结束时间","value-format":"yyyy-MM-dd","picker-options":{disabledDate:t.endDataMin}},model:{value:t.formQuery.endTime,callback:function(e){t.$set(t.formQuery,"endTime",e)},expression:"formQuery.endTime"}})],1)]),a("el-form-item",{attrs:{label:"类型："}},[a("el-select",{attrs:{clearable:"",placeholder:"状态"},on:{change:t.onSubmit},model:{value:t.formQuery.nodeType,callback:function(e){t.$set(t.formQuery,"nodeType",e)},expression:"formQuery.nodeType"}},[a("el-option",{attrs:{label:"申请报溢",value:"102003"}}),a("el-option",{attrs:{label:"批准报溢",value:"102004"}}),a("el-option",{attrs:{label:"申请赠达",value:"102006"}}),a("el-option",{attrs:{label:"批准赠送 ",value:"102007"}})],1)],1),a("el-form-item",{attrs:{label:"报溢单号："}},[a("el-input",{attrs:{clearable:""},model:{value:t.formQuery.outturnPlanCode,callback:function(e){t.$set(t.formQuery,"outturnPlanCode",e)},expression:"formQuery.outturnPlanCode"}})],1),a("el-form-item",{staticClass:"overall",staticStyle:{"margin-right":"30px"}},[a("el-button",{attrs:{type:"primary",loading:t.loadingQuery},on:{click:t.onSubmit}},[t._v("查询")])],1),a("el-form-item",{staticClass:"overall",staticStyle:{"margin-right":"30px"}},[a("el-button",{attrs:{type:"primary",loading:t.loadingQuery},on:{click:t.clickTransfers}},[t._v("添加报溢单")])],1),a("el-form-item",{staticClass:"overall",staticStyle:{"margin-right":"30px"}})],1),a("el-table",{ref:"TableData",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{property:"id",label:"标识",width:"50",align:"center"}}),a("el-table-column",{attrs:{property:"namecode",label:" 报溢单号","show-overflow-tooltip":!0,align:"center"}}),a("el-table-column",{attrs:{property:"warehouseName",label:"工厂仓库",align:"center"}}),a("el-table-column",{attrs:{property:"data",label:"申请人",align:"center"}}),a("el-table-column",{attrs:{property:"iudex",label:"审核人",align:"center"}}),a("el-table-column",{attrs:{property:"optdate",label:"日期",align:"center"}}),a("el-table-column",{attrs:{property:"nodetype",label:"状态类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(102001==e.row.nodetype?"申请报损":102002==e.row.nodetype?"批准报损":102003==e.row.nodetype?"申请往期残留":102004==e.row.nodetype?"批准往期残留":102005==e.row.nodetype||102006==e.row.nodetype?"申请赠送":"批准赠送"))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.nodeTypeBool?a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.lossDetail(e.row.id,e.row)}}},[t._v("查看明细")])],1):a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.putLoss(e.row.id,e.row,2)}}},[t._v("修改")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleTableGoods(e.row.id)}}},[t._v("删除")])],1)]}}])})],1),a("div",{staticClass:"margin-t16 text-right"},[a("AppPaging",{attrs:{total:t.allTate,pageSize:t.paramData.pageSize,currentPage:t.paramData.page},on:{handleCurrentChange:t.handleCurrentChange,handleSizeChange:t.handleSizeChange}})],1),a("el-dialog",{attrs:{title:t.modifyNum?"修改报溢单":"添加报溢单",width:"60%",visible:t.innerVisibleGoods},on:{"update:visible":function(e){t.innerVisibleGoods=e}}},[t.modifyNum?t._e():a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formWarehouse}},[a("el-form-item",{attrs:{label:"工厂仓库:"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:t.gridData.length>0},model:{value:t.formWarehouse.warehouseId,callback:function(e){t.$set(t.formWarehouse,"warehouseId",e)},expression:"formWarehouse.warehouseId"}},t._l(t.dataWarehouse,(function(t){return a("el-option",{key:t.id,attrs:{label:t.namecode,value:t.id}})})),1)],1),a("el-form-item",{staticClass:"overall",staticStyle:{"margin-right":"30px"}}),a("el-button",{attrs:{type:"primary",disabled:100301==t.gridData_nodeType},on:{click:function(e){return t.addGoodslist(100303)}}},[t._v("添加商品报溢")]),a("el-button",{attrs:{type:"primary",disabled:100303==t.gridData_nodeType},on:{click:function(e){return t.addGoodslist(100301)}}},[t._v("添加包材报溢")])],1),a("el-table",{attrs:{data:t.gridData,border:"",stripe:""}},[a("el-table-column",{attrs:{property:"id",label:"标识",width:"50",align:"center"}}),a("el-table-column",{attrs:{property:"namecode",label:"成品名称","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{property:"specification",label:"规格"}}),a("el-table-column",{attrs:{property:"num",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{key:e.row.id,attrs:{type:"number"},model:{value:e.row.num,callback:function(a){t.$set(e.row,"num",a)},expression:"scope.row.num"}}),a("el-input-number",{staticStyle:{display:"none"},attrs:{min:0},model:{value:e.row.num,callback:function(a){t.$set(e.row,"num",a)},expression:"scope.row.num"}})]}}])}),a("el-table-column",{attrs:{property:"unit",label:"单位"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.UpdateUnit_sync(e.$index)}}},[t._v(t._s(e.row.unit))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.deleGoods(e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.innerVisibleGoods=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",loading:t.loadingFactory},on:{click:t.addFactory}},[t._v(t._s(t.modifyNum?"修 改":"添 加"))])],1)],1),a("el-dialog",{attrs:{width:"40%",title:"商品名称",visible:t.goods_data.sync,"append-to-body":""},on:{"update:visible":function(e){return t.$set(t.goods_data,"sync",e)}}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formGoods}},[a("el-form-item",{attrs:{label:"工厂名称:"}},[t._v(" "+t._s(t.formWarehouse.namecode)+" ")])],1),a("el-table",{attrs:{data:t.goods_data.goodsData,border:"","max-height":"360px"},on:{"selection-change":t.handleSelectionChangeGood}},[a("el-table-column",{attrs:{type:"selection",width:"50",selectable:t.checkSelectable}}),a("el-table-column",{attrs:{property:"productName",label:"名称",width:"240","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{property:"specification",label:"规格"}}),a("el-table-column",{attrs:{property:"unit",label:"单位"}}),a("el-table-column",{attrs:{property:"name",label:"操作",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",disabled:2===e.row.stateNum},nativeOn:{click:function(a){return t.addGoodsS_push(e.$index)}}},[t._v("添加")])]}}])})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.goods_data.sync=!1}}},[t._v("关 闭")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addGoodsS}},[t._v("添 加")])],1)],1),a("el-dialog",{attrs:{width:"60%",title:"商品名称",visible:t.innerVisibleGoodsDeailt,"append-to-body":""},on:{"update:visible":function(e){t.innerVisibleGoodsDeailt=e}}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formGoods}},[a("el-form-item",{attrs:{label:"工厂名称:"}},[t._v(" "+t._s(t.formWarehouse.namecode)+" ")]),a("el-form-item",{attrs:{label:"物品名称:"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:function(e){return t.goods_get()}},model:{value:t.formGoods.productId,callback:function(e){t.$set(t.formGoods,"productId",e)},expression:"formGoods.productId"}},t._l(t.optionsGoods,(function(t){return a("el-option",{key:t.id,attrs:{label:t.namecode,value:t.id}})})),1)],1)],1),a("el-table",{ref:"multipleTable",attrs:{"max-height":"360px",data:t.gridDataGoods,stripe:"",border:"","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChangeGood}},[a("el-table-column",{attrs:{type:"selection",selectable:t.checkSelectable,width:"55"}}),a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),a("el-table-column",{attrs:{property:"productName",label:"物品名称","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{property:"specification",label:"规格"}}),a("el-table-column",{attrs:{property:"price",label:"参考单价（元）"}}),a("el-table-column",{attrs:{property:"unit",label:"单位"}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.innerVisibleGoodsDeailt=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addGoodsS}},[t._v("添 加")])],1)],1),a("el-dialog",{attrs:{title:"查看明细",visible:t.dialogVisibleDetail,width:"80%"},on:{"update:visible":function(e){t.dialogVisibleDetail=e}}},[a("div",{staticStyle:{"padding-bottom":"30px",display:"flex"}},[a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[t._v("报溢单号:")]),a("span",[t._v(t._s(t.opinionData.namecode))])]),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[t._v("申请人:")]),a("span",[t._v(t._s(t.opinionData.data))])]),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[t._v("审核人:")]),a("span",[t._v(t._s(t.opinionData.iudex))])]),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[t._v("日期：")]),a("span",[t._v(t._s(t.opinionData.optdate))])]),a("div",{staticStyle:{"margin-right":"30px"}},[a("span",[t._v("总金额（元）：")]),a("span",[t._v(t._s(t.opinionData.amount))])])]),a("el-table",{attrs:{data:t.gridDataDetail,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),a("el-table-column",{attrs:{property:"namecode",label:"物品名称",width:"150","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{property:"num",label:"数量",width:"200"}}),a("el-table-column",{attrs:{property:"price",label:"金额（元）"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.price))])]}}])}),a("el-table-column",{attrs:{property:"specif",label:"规格"}}),a("el-table-column",{attrs:{property:"unit",label:"单位"}}),a("el-table-column",{attrs:{property:"vdata",label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.vdata?e.row.vdata.description:""))])]}}])})],1),a("div",{staticStyle:{"padding-top":"30px"}},[a("span",[t._v("审核意见：")]),a("span",[t._v(t._s(t.opinionData.opinion))])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisibleDetail=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleDetail=!1}}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改单位",visible:t.unit_data.sync,width:"30%"},on:{"update:visible":function(e){return t.$set(t.unit_data,"sync",e)}}},[a("p",[t._v("当前单位："+t._s(t.unit_data.unit_init))]),t._v(" 修改至："),a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.UpdateUnit_select},model:{value:t.unit_data.unit,callback:function(e){t.$set(t.unit_data,"unit",e)},expression:"unit_data.unit"}},t._l(t.unit_data.list,(function(e,n){return a("el-option",{key:e.id,attrs:{label:e.namecode,value:n}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.namecode))]),a("span",{staticStyle:{float:"right",color:"#999"}},[t._v(t._s(e.conversionRatio))])])})),1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.unit_data.sync=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.UpdateUnit}},[t._v("保 存")])],1)],1)],1)},r=[],i=a("5530"),o=(a("d81d"),a("d3b7"),a("159b"),a("b64b"),a("99af"),a("a4d3"),a("e01a"),a("b680"),a("2f62")),u=a("a80d"),s=a("7c58"),d=a("4795"),l=a("2f88"),c={components:{AppPaging:l["a"]},data:function(){return{scrollTop:0,scrollLeft:0,loadingTab:!1,loadingQuery:!1,currentPage:1,svalue1:"",svalue2:"",info:{isTrue:!1,isShow:!0},checked:!1,checked1:!1,checked2:!1,checked3:!1,value1:"",value2:"",allTate:24,tableData:[],formQuery:{endTime:"",startTime:"",dataTime:"",nodeType:"",outturnPlanCode:""},paramData:{page:1,pageSize:24},innerVisibleGoods:!1,loadingFactory:!1,innerVisibleGoodsDeailt:!1,editState:0,formGoods:{productId:""},formWarehouse:{warehouseId:"",namecode:""},rela:"",dataWarehouse:[],optionsGoods:[],options:[{value:"100303",label:"成品"},{value:"100301",label:"包材"}],gridData:[],gridData_nodeType:"",gridDataGoods:[],opinionData:"",modifyNum:"",newGridDataGoods:[],gridDataDetail:[],dialogVisibleDetail:!1,goods_data:{goodsData:[],nodeType:"",sync:!1},unit_data:{list:[],index:[],unit:"",unit_init:"",targetUnit:"",unitbit:"",sync:!1}}},computed:Object(i["a"])({},Object(o["c"])({userId:"user/userId"})),created:function(){this.getAllProductInfo();var t=this.changeData();this.formQuery.startTime=t[0],this.formQuery.endTime=t[1],this.onSubmit(),this.listWarehouse()},methods:{starDataMax:function(t){if(this.formQuery.endTime)return t.getTime()>=Date.parse(this.formQuery.endTime)},endDataMin:function(t){if(this.formQuery.startTime)return t.getTime()<=Date.parse(this.formQuery.startTime)-864e5},getOutturnPlanList:function(t){var e=this;this.paramData=t,this.loadingTab=!0,Object(u["e"])(t).then((function(t){if(e.loadingQuery=!1,e.loadingWeb=!1,e.loadingTab=!1,200===t.code){var a=t.data.list;e.currentPage=t.data.pageNum,e.allTate=t.data.total,e.tableData=a.map((function(t){return t.nodeTypeBool="102002"===t.nodetype||"102004"===t.nodetype||"102007"===t.nodetype?1:0,t}))}else e.$message({message:t.message,type:"warning"})}))},onSubmit:function(){var t=Object(i["a"])({outturnPlanType:2,page:1,pageSize:this.paramData.pageSize},this.formQuery);delete t.dataTime,Object.keys(t).forEach((function(e){var a=t[e];""===a&&delete t[e]})),this.getOutturnPlanList(t)},handleSizeChange:function(t){this.paramData.pageSize=t,this.handleCurrentChange(1)},handleCurrentChange:function(t){this.paramData.page=t,this.getOutturnPlanList(this.paramData)},UpdateUnit_sync:function(t){var e=this,a=this.gridData[t];this.unit_data.index=t,this.unit_data.list=[],this.unit_data.unit_init=a.unit,this.unit_data.unit=a.unit,this.unit_data.targetUnit=a.unit;var n={productId:a.productId,unit:a.unit};Object(s["R"])(n).then((function(t){200===t.code&&(t.data.length>0?(e.unit_data.list=t.data,e.unit_data.sync=!0):e.$message({message:"该商品暂无单位可换",type:"warning"}))}))},UpdateUnit_select:function(t){var e=this.unit_data.list[t];this.unit_data.targetUnit=e.namecode,this.unit_data.unitbit=e.data},UpdateUnit:function(){var t=this,e=this.unit_data.index,a=this.gridData[e];if(this.unit_data.unit_init!==this.unit_data.unit){var n={currentPrice:a.num||0,currentUnit:this.unit_data.targetUnit,productId:a.productId,targetUnit:this.unit_data.unit_init};Object(s["g"])(n).then((function(a){200===a.code&&(t.gridData[e].unit=t.unit_data.targetUnit,t.gridData[e].unitbit=t.unit_data.unitbit,t.gridData[e].num=a.data>0?a.data:1),t.unit_data.sync=!1}))}else this.unit_data.sync=!1},addGoodslist:function(t){if(this.formGoods.nodeType="",""===this.formWarehouse.warehouseId)this.$message({message:"未选择工厂,请先选择工厂！",type:"warning"});else{this.goods_data.sync=!0;for(var e=0;e<this.dataWarehouse.length;e++){var a=this.dataWarehouse[e];if(a.id===this.formWarehouse.warehouseId){this.formWarehouse.namecode=a.namecode;break}}this.goods_data.goodsData=[],this.gridDataGoods=[],this.formGoods.productId="",this.gridData_nodeType2=t,100303===t?this.getProductIdAndName({warehouseId:this.formWarehouse.warehouseId,type:100303,outturnPlanType:1}):this.getProductIdAndNameTwo({warehouseId:this.formWarehouse.warehouseId,type:100301,outturnPlanType:1}),this.formGoods.nodeType=t}},getProductIdAndNameTwo:function(t){var e=this;Object(u["i"])(t).then((function(t){if(200===t.code){t.data.forEach((function(t){t.productName=t.namecode,t.num=0,t.unitbit=1,t.sku=t.data}));var a=t.data;e.gridDataGoods_init(a)}}))},getProductIdAndName:function(t){var e=this;Object(u["h"])(t).then((function(t){if(200===t.code){t.data.forEach((function(t){t.producedate=t.producedate||"",t.productName=t.namecode,t.num=0,t.unitbit=1,t.sku=t.data}));var a=t.data;e.gridDataGoods_init(a)}}))},gridDataGoods_init:function(t){var e=t||[];this.goods_data.goodsData=[],e.length>0&&(e.forEach((function(t){t.stateNum=0,t.productId=t.id})),this.gridData.length>0&&this.gridData.forEach((function(t){e.forEach((function(e){t.id===e.id&&(e.stateNum=2)}))})),this.goods_data.goodsData=e)},addGoodsS_push:function(t){this.goods_data.goodsData[t].stateNum=2,this.goods_data.goodsData[t].producedate="",this.gridData.push(this.goods_data.goodsData[t]),this.gridData.length>0?this.gridData_nodeType=this.gridData_nodeType2:this.gridData_nodeType="";var e=this.goods_data.goodsData;this.goods_data.goodsData=[],this.goods_data.goodsData=this.goods_data.goodsData.concat(e)},addGoodsS:function(){if(this.newGridDataGoods.length<=0)this.$message({message:"请选择一条数据进行添加！",type:"warning"});else{this.newGridDataGoods.forEach((function(t){t.producedate=""}));var t=this.newGridDataGoods,e=this.gridData.concat(t);this.gridData=e,this.gridData.length>0?this.gridData_nodeType=this.gridData_nodeType2:this.gridData_nodeType="",this.innerVisibleGoodsDeailt=!1,this.goods_data.sync=!1,this.newGridDataGoods=[]}},handleSelectionChangeGood:function(t){for(var e=this.gridData,a=t,n=[],r=0;r<e.length;r++)for(var i=0;i<a.length;i++)a[i].id===e[r].productId&&n.push(a[i].id);this.deleteArray(e,n),this.newGridDataGoods=t},get_unit:function(t){t.units.forEach((function(e){e.namecode===t.unit&&(t.unitbit=e.data)}))},num_get:function(t){this.modifyNum||(this.gridData[t].price=this.gridData[t].num*this.gridData[t].priceA,this.gridData[t].price=Math.floor(100*this.gridData[t].price)/100)},listWarehouse:function(t){var e=this;Object(u["j"])(t).then((function(t){200===t.code?e.dataWarehouse=t.data:e.$message({message:t.message,type:"warning"})}))},getAllProductInfo:function(t){var e=this,a=Object(i["a"])({outturnPlanType:2},t);Object(u["d"])(a).then((function(t){200===t.code?e.optionsGoods=t.data:e.$message({message:t.message,type:"warning"})}))},clickTransfers:function(){this.innerVisibleGoods=!0,this.gridData=[],this.modifyNum=0},addGoods:function(){if(""===this.formWarehouse.warehouseId)this.$message({message:"未选择工厂,请先选择工厂！",type:"warning"});else{this.innerVisibleGoodsDeailt=!0;for(var t=this.gridDataGoods,e=this.gridData,a=0;a<t.length;a++){t[a].stateNum=0;for(var n=0;n<e.length;n++)e[n].productId===t[a].id&&(t[a].stateNum=2)}}},putLoss:function(t,e,a){this.rela=e.id,this.modifyNum=a,this.innerVisibleGoods=!0,this.getOutturnPlanListList(t,a)},lossDetail:function(t,e){this.dialogVisibleDetail=!0,this.opinionData=e,this.getOutturnPlanListList(t)},getOutturnPlanListList:function(t,e){var a=this,n={outturnPlanId:t,outturnPlanType:2},r=e;Object(u["f"])(n).then((function(t){200===t.code?2===r?a.gridData=t.data.list.map((function(t){return t.specification=t.specif,t.productName=t.namecode,t.id=t.id-0,t.modify=1,t})):a.gridDataDetail=t.data.list:a.$message({message:t.message,type:"warning"})}))},goods_get:function(){var t=this.formGoods;this.getProduct(t)},getProduct:function(t){var e=this;Object(u["g"])(t).then((function(t){var a;200===t.code?function(){var n=[t.data],r=e.gridData,i=function(){n[a].priceA=t.data.price,n[a].productName=t.data.namecode,n[a].stateNum=0,n[a].description="",r.forEach((function(t){t.id===n[a].id&&(n[a].stateNum=2)}));var e=n[a];e.units.forEach((function(t){t.namecode===e.unit&&(e.unitbit=t.data)}))};for(a=0;a<n.length;a++)i();e.gridDataGoods=n}():e.$message({message:t.message,type:"warning"})}))},saveOutturnPlan:function(t){var e=this;this.gridData.length>0?Object(u["m"])(t).then((function(t){200===t.code?(e.$message({message:"添加成功",type:"success"}),e.innerVisibleGoods=!1,e.paramData.page=1,e.getOutturnPlanList(e.paramData),e.gridData=[]):e.$message({message:t.message,type:"warning"})})):this.$message({message:"请先添加商品再进行后续操作!",type:"warning"})},clicGoods:function(){this.gridDataGoods},deleteArray:function(){},checkSelectable:function(t){return 2!==t.stateNum},deleteOutturnPlanListDetail:function(t){var e=this;Object(u["c"])({},t).then((function(a){200===a.code?(e.$message({message:"删除成功",type:"success"}),Object(d["a"])(e.gridData,t)):e.$message({message:a.message,type:"warning"})}))},deleteOutturnPlanList:function(t){var e=this;Object(u["b"])({id:t},t).then((function(t){200===t.code?(e.$message({message:"删除成功",type:"success"}),e.paramData.page=1,e.getOutturnPlanList(e.paramData)):e.$message({message:t.message,type:"warning"})}))},deleTableGoods:function(t){var e=this,a=t;this.$confirm("此操作将永久删除该内容, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.deleteOutturnPlanList(a)})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},deleGoods:function(t){var e=this,a=t;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){1===a.modify?e.deleteOutturnPlanListDetail(a.id):Object(d["a"])(e.gridData,t.id),e.gridData.length<=0&&(e.gridData_nodeType="")})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handlerPageNo:function(t){t.price=(t.num*t.price).toFixed(2)},changeUnit:function(t){if(t.price="",t.units.length)for(var e=0;e<t.units.length;e++)t.unit===t.units[e].namecode&&(t.unitData=t.units[e].data)},addFactory:function(){for(var t=this.gridData,e=!0,a=!0,n=!0,r=0;r<t.length;r++)this.gridData[r].num||(e=!1),this.gridData[r].unit||(n=!1);if(e)if(a)if(n){var i=this.modifyNum;if(i){for(var o=[],u=[],s=0;s<t.length;s++)1===this.gridData[s].modify?o.push(this.gridData[s]):u.push(this.gridData[s]);var d=o.map((function(t){return{id:t.id,num:t.num,sourceid:"0",unit:t.unit,unitbit:t.unitbit?t.unitbit:1,vdata:{description:t.description}}})),l=u.map((function(t){return{data:t.id,namecode:t.productName,num:t.num,sourceid:"0",specif:t.specification,unit:t.unit,unitbit:t.unitbit?t.unitbit:1,vdata:{description:t.description}}})),c={outturnPlanListDTOList:l,outturnPlanListInfoDTOS:d,outturnPlanId:this.rela};this.updateOutturnPlanList(c)}else{var p=this.gridData.map((function(t){return{data:t.id,namecode:t.productName,num:t.num,sourceid:"0",specif:t.specification,unit:t.unit,unitbit:t.unitbit?t.unitbit:1,vdata:{description:""}}})),m={outturnPlanListDTOList:p,nodetype:"102003",data:this.userId,rela:this.formWarehouse.warehouseId};this.saveOutturnPlan(m)}}else this.$message({message:"请填写单位",type:"warning"});else this.$message({message:"请填写金额",type:"warning"});else this.$message({message:"请填写数量",type:"warning"})},updateOutturnPlanList:function(t){var e=this;Object(u["n"])(t).then((function(t){200===t.code?(e.$message({message:"修改成功",type:"success"}),e.gridData=[],e.innerVisibleGoods=!1,e.paramData.page=1,e.getOutturnPlanList(e.paramData)):e.$message({message:t.message,type:"warning"})}))},dataGoods:function(){},clickExport:function(){this.$message({message:"正在开发中",type:"warning"})},clickSizeChangeGoods:function(t){},clickCurrentChangeGoods:function(t){},handleSelectionChange:function(t){this.batchList=t,this.multipleSelection=t},clickDetail:function(){this.innerVisibleGoods=!0},add:function(){this.info.isTrue=!0,this.info.isShow=!0},viewDetail:function(){this.info.isTrue=!0,this.info.isShow=!0}},mounted:function(){},activated:function(){var t=this;setTimeout((function(){t.$refs.TableData.bodyWrapper.scrollTop=t.scrollTop,t.$refs.TableData.bodyWrapper.scrollLeft=t.scrollLeft}),60)},beforeRouteLeave:function(t,e,a){this.scrollTop=this.$refs.TableData.bodyWrapper.scrollTop,this.scrollLeft=this.$refs.TableData.bodyWrapper.scrollLeft,a()}},p=c,m=(a("a4d7"),a("2877")),f=Object(m["a"])(p,n,r,!1,null,"74168c46",null);e["default"]=f.exports},a4d7:function(t,e,a){"use strict";a("3060")},a80d:function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"m",(function(){return i})),a.d(e,"j",(function(){return o})),a.d(e,"f",(function(){return u})),a.d(e,"n",(function(){return s})),a.d(e,"c",(function(){return d})),a.d(e,"l",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return p})),a.d(e,"h",(function(){return m})),a.d(e,"i",(function(){return f})),a.d(e,"b",(function(){return h})),a.d(e,"k",(function(){return g})),a.d(e,"g",(function(){return b}));var n=a("83c3");function r(t){return Object(n["a"])({url:"/outturnPlan/selectOutturnPlanList",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/outturnPlan/saveOutturnPlan",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/admin/shopper/warehouse/list",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/outturnPlan/getOutturnPlanListList",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/outturnPlan/updateOutturnPlanList",method:"post",data:t})}function d(t,e){return Object(n["a"])({url:"/outturnPlan/deleteOutturnPlanList?id=".concat(e),method:"post",data:t})}function l(t){return Object(n["a"])({url:"/outturnPlan/auditOutturnPlan",method:"POST",data:t})}function c(t){return Object(n["a"])({url:"/admin/data/deleteById/I_outturn_plan_list?dataId="+t,method:"post",data:[]})}function p(t){return Object(n["a"])({url:"/product/getAllProductInfo",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/product/getProductIdAndName",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/product/getProductIdAndNameTwo",method:"get",params:t})}function h(t,e){return Object(n["a"])({url:"/outturnPlan/deleteOutturnPlan?id="+e,method:"post",data:t})}function g(t){return Object(n["a"])({url:"/admin/excel/operationCausticExcessive2",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/product/getProduct",method:"get",params:t})}}}]);