(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c2dd7a"],{"1d1d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team-int"},[n("div",{staticClass:"container match-submit-box"},[n("h1",[t._v("发布意向")]),n("div",{staticClass:"match-submit-list"},[n("p",[t._v("个人介绍：")]),n("el-input",{model:{value:t.introduct,callback:function(e){t.introduct=e},expression:"introduct"}})],1),n("div",{staticClass:"match-submit-list"},[n("p",[t._v("组队意向：")]),n("el-input",{attrs:{type:"textarea",rows:4,placeholder:"输入你想要加入怎样的队伍"},model:{value:t.intention,callback:function(e){t.intention=e},expression:"intention"}})],1),n("div",{staticClass:"match-submit-btn"},[n("el-button",{on:{click:t.releaseTeam}},[t._v("提交")]),n("router-link",{attrs:{to:"/secondPage/manage",tag:"el-button"}},[t._v("返回大厅")])],1)])])},s=[],i=n("365c"),c={data(){return{intention:"",introduct:""}},methods:{releaseTeam(){let t=localStorage.getItem("token");i["a"].teamint({type:"teamint",data:{user_id:t,introduct:this.introduct,intention:this.intention,requirement:""}}).then(t=>{0==t.data.status?this.$message({message:"发布成功",type:"success",offset:100}):this.$message({message:"发布失败",type:"error",offset:100})})}}},o=c,r=(n("3f45"),n("2877")),u=Object(r["a"])(o,a,s,!1,null,"5a7fc8b8",null);e["default"]=u.exports},"3f45":function(t,e,n){"use strict";var a=n("8040"),s=n.n(a);s.a},8040:function(t,e,n){}}]);