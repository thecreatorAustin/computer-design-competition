(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b47acf5c"],{"46ab":function(e,t,s){"use strict";var a=s("9def"),i=s.n(a);i.a},"9def":function(e,t,s){},abdc:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"personal-skill"},[s("div",{staticClass:"container"},[s("div",{staticClass:"person-skill-box"},[s("p",[e._v("个人技能：")]),s("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入您的个人技能"},model:{value:e.specialty,callback:function(t){e.specialty=t},expression:"specialty"}})],1),s("div",{staticClass:"person-skill-box"},[s("p",[e._v("成果：")]),s("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入您的成果"},model:{value:e.achievements,callback:function(t){e.achievements=t},expression:"achievements"}})],1),s("div",{staticClass:"person-skill-box"},[s("p",[e._v("兴趣：")]),s("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入您的兴趣"},model:{value:e.interest,callback:function(t){e.interest=t},expression:"interest"}})],1)]),s("el-button",{on:{click:e.addinfo}},[e._v("修改信息")])],1)},i=[],n=s("365c"),l={data(){return{specialty:"",achievements:"",interest:"",infoList:{}}},methods:{addinfo(){let e=localStorage.getItem("token");n["a"].addinfo({type:"info",data:{user_id:e,specialty:this.specialty,achievements:this.achievements,interest:this.interest}}).then(e=>{console.log(e),0==e.data.status&&this.$message({message:"修改成功",type:"success",offset:100})})}},created(){let e=localStorage.getItem("token");n["a"].getaddinfo({type:"info",data:{user_id:e}}).then(e=>{console.log(e);let t=e.data.data.info_list;this.specialty=t.specialty,this.achievements=t.achievements,this.interest=t.interest})}},c=l,o=(s("46ab"),s("2877")),r=Object(o["a"])(c,a,i,!1,null,"5d22ffb5",null);t["default"]=r.exports}}]);