(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6879e1c4"],{"3b4a5":function(e,t,a){},"58c2":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"categories"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品分类")])],1),a("el-card",[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加分类")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.newList,border:"","row-key":"cat_id","tree-props":{children:"children",hasChildren:"cat_deleted"}}},[a("el-table-column",{attrs:{type:"index",width:"80",label:"#"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.index))])]}}])}),a("el-table-column",{attrs:{prop:"cat_name",label:"分类名称"}}),a("el-table-column",{attrs:{prop:"cat_deleted",label:"是否有效"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.cat_deleted?e._e():a("el-result",{attrs:{icon:"success"}}),t.row.cat_deleted?a("el-result",{attrs:{icon:"error"}}):e._e()]}}])}),a("el-table-column",{attrs:{prop:"cat_level",label:"排序"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.cat_level?a("el-tag",{attrs:{size:"mini"}},[e._v("一级")]):1===t.row.cat_level?a("el-tag",{attrs:{type:"success",size:"mini"}},[e._v("二级")]):a("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v("三级")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return e.edit(t.row)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return e.del(t.row.cat_id)}}})]}}])})],1),a("el-pagination",{attrs:{background:"","page-sizes":[5,10,15,20],"page-size":e.query.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1),a("CategoriesDialog",{attrs:{dialogVisible:e.dialogVisible,ruleForm:e.ruleForm},on:{"update:dialogVisible":function(t){e.dialogVisible=t},"update:dialog-visible":function(t){e.dialogVisible=t}}})],1)},r=[],i=a("5530"),l=(a("d3b7"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cate-dialog"},[a("el-dialog",{attrs:{title:"添加分类",visible:e.dialogVisible,width:"50%"},on:{close:function(t){return e.$emit("update:dialogVisible",!1)}}},[a("el-form",{ref:"form",attrs:{model:e.ruleForm,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{model:{value:e.ruleForm.cat_name,callback:function(t){e.$set(e.ruleForm,"cat_name",t)},expression:"ruleForm.cat_name"}})],1),e.ruleForm.cat_id?e._e():a("el-form-item",{attrs:{label:"父级分类"}},[a("el-cascader",{attrs:{options:e.categoryAllList,props:e.props,clearable:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.$emit("update:dialogVisible",!1)}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.sure}},[e._v("确 定")])],1)],1)],1)}),s=[],n=a("2f62"),c={props:["dialogVisible","ruleForm"],data:function(){return{value:[],props:{label:"cat_name",value:"cat_id",expandTrigger:"hover",checkStrictly:!0},rules:{cat_name:{required:!0,message:"请输入分类名称",trigger:"blur"}}}},computed:Object(i["a"])({},Object(n["c"])({categoryAllList:function(e){return e.goodsCategory.categoryAllList}})),methods:Object(i["a"])({sure:function(){var e=this;this.$refs.form.validate((function(t){if(t){if(e.ruleForm.cat_id)console.log(e.ruleForm.cat_id),e.editCategoriesGoodItem({id:e.ruleForm.cat_id,cat_name:e.ruleForm.cat_name}).then((function(t){e.$message.success("修改成功")}),(function(t){e.$message.error(t)}));else{var a=0;a=0===e.value.length?0:e.value[e.value.length-1],e.addCategoriesGoodItem({cat_name:e.ruleForm.cat_name,cat_pid:a,cat_level:e.value.length}).then((function(t){e.$message.success("添加成功")}),(function(t){e.$message.error(t)}))}e.$emit("update:dialogVisible",!1)}}))}},Object(n["b"])(["addCategoriesGoodItem","editCategoriesGoodItem"]))},u=c,d=(a("f35f"),a("2877")),g=Object(d["a"])(u,l,s,!1,null,null,null),m=g.exports,f={components:{CategoriesDialog:m},data:function(){return{query:{pagenum:1,pagesize:5},dialogVisible:!1,ruleForm:{}}},created:function(){this.getGoodsCategory(this.query)},computed:Object(i["a"])({newList:function(){return this.categoryList.forEach((function(e,t){e.index=t+1})),this.categoryList}},Object(n["c"])({categoryList:function(e){return e.goodsCategory.categoryList},total:function(e){return e.goodsCategory.total}})),methods:Object(i["a"])({currentChange:function(e){this.query.pagenum=e,this.getGoodsCategory(this.query)},sizeChange:function(e){this.query.pagesize=e,this.getGoodsCategory(this.query)},add:function(){this.dialogVisible=!0,this.ruleForm={},this.getGoodsCategory({type:2})},edit:function(e){this.dialogVisible=!0,this.ruleForm=Object(i["a"])({},e)},del:function(e){var t=this;this.delCategoriesGoodItem(e).then((function(e){t.$message.success("删除成功")}),(function(e){t.$message.error(e)}))}},Object(n["b"])(["getGoodsCategory","delCategoriesGoodItem"]))},p=f,b=(a("f25d"),Object(d["a"])(p,o,r,!1,null,null,null));t["default"]=b.exports},"7f94":function(e,t,a){},f25d:function(e,t,a){"use strict";a("7f94")},f35f:function(e,t,a){"use strict";a("3b4a5")}}]);
//# sourceMappingURL=chunk-6879e1c4.a5d17990.js.map