exports.ids=[4],exports.modules={109:function(t,e,r){"use strict";r.r(e);var o={layout:"blog",components:{},data:()=>({}),computed:{},watch:{},mounted(){this.drawCanvas()},methods:{drawCanvas(){const t=document.querySelector(".colorful-balls").clientWidth-20,canvas=document.getElementById("canvas"),e=canvas.getContext("2d");canvas.width=t,canvas.height=500,canvas.style.backgroundColor="#000";class r{constructor(t,e,r){this.x=t,this.y=e,this.color=r,this.r=40}render(){e.save(),e.beginPath(),e.arc(this.x,this.y,this.r,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.restore()}}class o extends r{constructor(t,e,r){super(t,e,r),this.dX=10*Math.random()-5,this.dY=10*Math.random()-5,this.dR=2*Math.random()+1}upDate(){this.x+=this.dX,this.y+=this.dY,this.r-=this.dR,this.r<0&&(this.r=0)}}const n=[],l=["red","green","yellow","purple","blue","pink","orange"];canvas.addEventListener("mousemove",t=>{n.push(new o(t.offsetX,t.offsetY,l[Math.floor(Math.random()*(l.length-1))]))}),setInterval(()=>{e.clearRect(0,0,canvas.width,canvas.height);for(let i=0;i<n.length;i++)n[i].render(),n[i].upDate(),0===n[i].r&&n.splice(i,1)},50)}}},n=r(1);var component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"colorful-balls"},[this._ssrNode('<h1>ES6面向对象: 绚丽小球</h1> <canvas id="canvas">当前浏览器不支持canvas</canvas>')])}),[],!1,(function(t){var e=r(81);e.__inject__&&e.__inject__(t)}),null,"79865add");e.default=component.exports},63:function(t,e,r){var content=r(82);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("2fff55cb",content,!0,t)}},81:function(t,e,r){"use strict";r.r(e);var o=r(63),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},82:function(t,e,r){var o=r(2);(t.exports=o(!1)).push([t.i,".colorful-balls{width:100%;padding:10px;margin:10px 0;min-height:calc(100vh - 100px);background-color:#fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.colorful-balls,.colorful-balls #canvas{border-radius:4px}",""])}};