(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(3),i=n.n(a),c=(n(16),n(1)),o=n(4),u=n(5),s=n(6),h=n(8),m=n(7),d=n(9),f=function(){return fetch("https://ghibliapi.herokuapp.com/films").then(function(e){return e.json()})},E=(n(18),n(20),function(e){var t=e.filterKey,n=e.placeholder,r=e.value,a=e.onChange;return l.a.createElement("input",{className:"filter",type:"search",placeholder:n,value:r,onChange:function(e){a(t,e)}})}),p=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleFilters=function(e,t){var r=t.target.value;n.setState(function(t){var n=t.filters;return{filters:Object(o.a)({},n,Object(c.a)({},e,r))}})},n.filterMovies=function(){var e=n.state,t=e.movies,r=e.filters,l=Object.keys(r).filter(function(e){return""!==r[e]});return 0===l.length?t:t.filter(function(e){return l.every(function(t){return e[t].toLowerCase().includes(r[t].toLowerCase())})})},n.state={movies:[],filters:{title:"",description:"",director:"",producer:""}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f().then(function(t){e.setState({movies:t})})}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.filters,r=this.filterMovies(t);return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Ghibli movies"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Director"),l.a.createElement("th",null,"Producer"),l.a.createElement("th",null,"Release year"),l.a.createElement("th",null,"Score (Rotten Tomatoes)")),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement(E,{placeholder:"Filter by title",filterKey:"title",value:n.title,onChange:this.handleFilters})),l.a.createElement("th",null,l.a.createElement(E,{placeholder:"Filter by description",filterKey:"description",value:n.description,onChange:this.handleFilters})),l.a.createElement("th",null,l.a.createElement(E,{placeholder:"Filter by director",filterKey:"director",value:n.director,onChange:this.handleFilters})),l.a.createElement("th",null,l.a.createElement(E,{placeholder:"Filter by producer",filterKey:"producer",value:n.producer,onChange:this.handleFilters})),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,r.map(function(e){var t=e.id,n=e.title,r=e.description,a=e.director,i=e.producer,c=e.release_date,o=e.rt_score;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,a),l.a.createElement("td",null,i),l.a.createElement("td",{className:"number"},c),l.a.createElement("td",{className:"number"},o))}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(function(){return l.a.createElement("div",null,l.a.createElement(p,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.8ecff676.chunk.js.map