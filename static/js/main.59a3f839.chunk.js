(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),a=n(14),c=n.n(a),o=(n(23),n(12)),l=n(3),r=n(6),d=n(15),j=n(16),b=n(4),m=n(18),p=n(17),h=n(5),u=n.n(h),x=(n(24),n(0)),O=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"side-name",children:e.name}),Object(x.jsx)("p",{className:"side-position",children:e.position})]})},y=function(e){var t=e.email,n=e.phone,i=e.linkedIn;return Object(x.jsxs)("div",{className:"contact-info",children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("p",{children:n}),Object(x.jsx)("p",{children:i})]})},g=(n(26),n(7)),f=n(8),k=function(e){var t=e.items,n=e.category;return Object(x.jsx)("ul",{className:"".concat(n,"-list ").concat(e.editMode?"skill-edit":""),children:t.map((function(t){return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:t.name||t.content}),e.editMode?Object(x.jsx)("button",{name:n,value:t.id,onClick:e.onDelete,children:Object(x.jsx)(g.a,{icon:f.b})}):""]},t.id)}))})},v=function(e){return Object(x.jsx)("div",{className:"summary",children:Object(x.jsx)("p",{children:e.summary})})},N=(n(31),function(e){var t=e.items;return Object(x.jsx)("div",{className:"experience-wrapper ".concat(e.editMode?"experience-edit":""),children:t.map((function(t){return Object(x.jsxs)("div",{className:"experience",children:[Object(x.jsx)("div",{className:"dates",children:Object(x.jsxs)("p",{children:[t.startDate," - ",t.endDate||"Present"]})}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("h4",{className:"experience-label",children:[t.position||t.degree,t.degree?", ".concat(t.major):""]}),Object(x.jsx)("p",{className:"experience-institution",children:t.institution||t.company}),Object(x.jsx)("p",{className:"experience-location",children:t.location}),0===t.responsibilities.length?Object(x.jsx)(k,{items:[t.responsibility],category:"experience"}):Object(x.jsx)(k,{items:t.responsibilities,category:"experience"})]}),e.editMode?Object(x.jsxs)("div",{className:"experience-btn-wrapper",children:[Object(x.jsx)("button",{name:e.section,value:t.id,onClick:e.onEdit,children:Object(x.jsx)(g.a,{icon:f.a})}),Object(x.jsx)("button",{name:e.section,value:t.id,onClick:e.onDelete,children:Object(x.jsx)(g.a,{icon:f.b})})]}):""]},t.id)}))})}),C=(n(32),function(e){var t=e.general,n=e.skill,i=e.job,s=e.school,a=e.skills,c=e.jobs,o=e.schools;return Object(x.jsxs)("div",{className:"resume-page",children:[Object(x.jsxs)("section",{className:"side-bar",children:[Object(x.jsx)(O,{name:t.name,position:t.position}),Object(x.jsxs)("div",{className:"contact-section preview-contact",children:[Object(x.jsx)("h3",{className:"side-heading",children:"Contact"}),Object(x.jsx)("hr",{}),Object(x.jsx)(y,{email:t.email,phone:t.phone,linkedIn:t.linkedIn})]}),Object(x.jsxs)("div",{className:"skills-section",children:[Object(x.jsx)("h3",{className:"side-heading",children:"Skills"}),Object(x.jsx)("hr",{}),0===a.length?Object(x.jsx)(k,{items:[n],category:"skill"}):Object(x.jsx)(k,{items:a,category:"skill"})]})]}),Object(x.jsxs)("main",{children:[Object(x.jsxs)("section",{className:"summary-section",children:[Object(x.jsx)("h3",{className:"summary-heading",children:"Summary"}),Object(x.jsx)("hr",{}),Object(x.jsx)(v,{summary:t.description})]}),Object(x.jsxs)("section",{className:"work-section",children:[Object(x.jsx)("h3",{className:"experience-heading",children:"Professional Experience"}),Object(x.jsx)("hr",{}),0===c.length?Object(x.jsx)(N,{items:[i]}):Object(x.jsx)(N,{items:c})]}),Object(x.jsxs)("section",{className:"education-section",children:[Object(x.jsx)("h3",{className:"experience-heading",children:"Education"}),Object(x.jsx)("hr",{}),0===o.length?Object(x.jsx)(N,{items:[s]}):Object(x.jsx)(N,{items:o})]})]})]})}),D=(n(33),function(e){var t=e.attributes,n=e.onChange,i=e.content;return Object(x.jsx)("input",{className:"input-field",name:t.name,type:t.type,value:i[t.name.split("-")[1]],placeholder:t.placeholder,onChange:n,required:"endDate"!==t.name.split("-")[1]})}),S=(n(34),function(e){var t=e.attributes,n=e.onChange,i=e.content;return Object(x.jsx)("textarea",{name:t.name,placeholder:t.placeholder,value:void 0!==i[t.name.split("-")[1]].content?i[t.name.split("-")[1]].content:i[t.name.split("-")[1]],onChange:n,required:!0})}),E=(n(35),function(e){var t=e.items,n=e.btnDisplay,i=e.onChange,s=e.content;return Object(x.jsxs)("form",{onSubmit:e.onSubmit||void 0,autoComplete:"off",name:e.sectionName||void 0,"data-index":void 0!==s.index?s.index:void 0,children:[t.map((function(e,t){return Object(x.jsxs)("div",{className:"input-wrapper ".concat("date"===e.type?"date-input":""),children:[e.label&&Object(x.jsx)("label",{htmlFor:e.name,children:e.label}),"text-area"===e.type?Object(x.jsx)(S,{attributes:e,content:s,onChange:i}):Object(x.jsx)(D,{attributes:e,content:s,onChange:i})]},t)})),n&&Object(x.jsxs)("div",{className:"form-btn-wrapper",children:[Object(x.jsx)("button",{type:"reset",name:e.sectionName,onClick:e.onClick,children:"Cancel"}),Object(x.jsx)("button",{type:"submit",children:"Add"})]})]})}),I=(n(36),function(e){var t=e.formDisplay,n=e.headerInput,i=e.contactInput,s=e.skillInput,a=e.summaryInput,c=e.workInput,o=e.schoolInput,l=e.general,r=e.skill,d=e.job,j=e.school,b=e.skills,m=e.jobs,p=e.schools,h=e.editMode,u=e.onSubmit,O=e.onChange,y=e.onClick,g=e.onEdit,f=e.onDelete;return Object(x.jsxs)("div",{className:"resume-page",children:[Object(x.jsxs)("section",{className:"side-bar",children:[Object(x.jsx)(E,{items:n,content:l,btnDisplay:!1,onChange:O}),Object(x.jsxs)("div",{className:"contact-section",children:[Object(x.jsx)("h3",{className:"side-heading",children:"Contact"}),Object(x.jsx)("hr",{}),Object(x.jsx)(E,{items:i,content:l,btnDisplay:!1,onChange:O})]}),Object(x.jsxs)("div",{className:"skills-section",children:[Object(x.jsx)("h3",{className:"side-heading",children:"Skills"}),Object(x.jsx)("hr",{}),b.length>0?Object(x.jsx)(k,{items:b,category:"skill",editMode:h,onDelete:f}):"",t.skill?Object(x.jsx)(E,{items:s,btnDisplay:!0,content:r,onSubmit:u,onChange:O,onClick:y,sectionName:"skill"}):Object(x.jsx)("button",{type:"submit",name:"skill",onClick:y,children:"Add skills"})]})]}),Object(x.jsxs)("main",{children:[Object(x.jsxs)("section",{className:"summary-section",children:[Object(x.jsx)("h3",{className:"summary-heading",children:"Summary"}),Object(x.jsx)("hr",{}),Object(x.jsx)(E,{items:a,content:l,btnDisplay:!1,onChange:O})]}),Object(x.jsxs)("section",{className:"work-section",children:[Object(x.jsx)("h3",{className:"experience-heading",children:"Professional Experience"}),Object(x.jsx)("hr",{}),m.length>0?Object(x.jsx)(N,{items:m,editMode:h,section:"job",onEdit:g,onDelete:f}):"",t.job?Object(x.jsx)(E,{items:c,btnDisplay:!0,content:d,onSubmit:u,onChange:O,onClick:y,sectionName:"job"}):Object(x.jsx)("button",{type:"submit",name:"job",onClick:y,children:"Add job"})]}),Object(x.jsxs)("section",{className:"education-section",children:[Object(x.jsx)("h3",{className:"experience-heading",children:"Education"}),Object(x.jsx)("hr",{}),p.length>0?Object(x.jsx)(N,{items:p,editMode:h,section:"school",onEdit:g,onDelete:f}):"",t.school?Object(x.jsx)(E,{items:o,btnDisplay:!0,content:j,onSubmit:u,onChange:O,onClick:y,sectionName:"school"}):Object(x.jsx)("button",{type:"submit",name:"school",onClick:y,children:"Add school"})]})]})]})}),M=n(39),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,i=n.name,s=n.value,a=i.split("-"),c=Object(r.a)({},e.state[a[0]]);"responsibility"===a[1]?c.responsibility.content=s:c[a[1]]=s,e.setState(Object(l.a)({},a[0],c))},e.onSubmit=function(t){var n;t.preventDefault();var i=t.target,s=i.name,a=i.dataset,c=s,d=c+"s",j=Object(r.a)({},e.state[c]);j.responsibility&&j.responsibility.content.split(";").map((function(e){return j.responsibilities.push({content:e,id:u()()})}));for(var b=Object(r.a)({},e.state[c]),m=0,p=Object.keys(b);m<p.length;m++){var h=p[m];"id"===h?b[h]=u()():"responsibility"===h?(b[h].id=u()(),b[h].content=""):b[h]="responsibilities"===h?[]:"index"===h?b[h]+1:""}e.state[d].length<a.index+1&&(j.index=e.state[d].length),e.setState((n={},Object(l.a)(n,d,e.state[d].length<a.index+1?e.state[d].concat(j):Object(o.a)(e.state[d]).splice(a.index,0,j)),Object(l.a)(n,c,b),n))},e.toggleFormDisplay=function(t){for(var n=t.target.name,i=Object(r.a)({},e.state.formDisplay),s=0,a=Object.keys(i);s<a.length;s++){var c=a[s];c===n&&(i[c]?i[c]=!1:i[c]=!0)}e.setState({formDisplay:i})},e.toggleEditMode=function(){e.setState({mode:{edit:!e.state.mode.edit}})},e.editExperience=function(t){var n,i,s=t.currentTarget,a=s.name,c=s.value,r=Object(o.a)(e.state[a+"s"]).reduce((function(e,t){return t.id===c?(i=t,e):(e.push(t),e)}),[]);if(i.responsibilities.length>0){var d=i.responsibilities.reduce((function(e,t,n,i){return n<i.length-1?e=e+t.content+";":e+=t.content}),"");i.responsibility.content=d,i.responsibilities=[]}e.setState((n={},Object(l.a)(n,a+"s",r),Object(l.a)(n,a,i),n))},e.deleteItem=function(t){var n=t.currentTarget,i=n.name,s=n.value,a=e.state[i+"s"].reduce((function(e,t){return t.id===s||e.push(t),e}),[]);e.setState(Object(l.a)({},i+"s",a))},e.state={mode:{edit:!0},formDisplay:{skill:!1,job:!1,school:!1},general:{name:"YOUR FULL NAME",position:"Your Current Position",phone:"(555) 555-5555",email:"myemail@gmail.com",linkedIn:"linkedin.com/in/myname",description:"Summary of your professional background and objectives"},job:{index:0,id:u()(),startDate:Object(M.a)(new Date(2021,0,1),"yyyy-MM-dd"),endDate:"",position:"Position",company:"Company name",location:"City, State/Country",responsibility:{content:"Description of key accomplishments and responsibilities",id:u()()},responsibilities:[]},jobs:[],school:{index:0,id:u()(),startDate:Object(M.a)(new Date(2021,0,1),"yyyy-MM-dd"),endDate:"",institution:"Name of Educational Institution",degree:"Diploma or degree earned",major:"Your Major",location:"City, State/Country",responsibility:{content:"Description of key accomplishments",id:u()()},responsibilities:[]},schools:[],skill:{index:0,name:"Name of skill",id:u()()},skills:[]},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.onSubmit=e.onSubmit.bind(Object(b.a)(e)),e.toggleFormDisplay=e.toggleFormDisplay.bind(Object(b.a)(e)),e.toggleEditMode=e.toggleEditMode.bind(Object(b.a)(e)),e.editExperience=e.editExperience.bind(Object(b.a)(e)),e.deleteItem=e.deleteItem.bind(Object(b.a)(e)),e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.general,n=e.skill,i=e.job,s=e.school,a=e.mode,c=e.skills,o=e.jobs,l=e.schools,d=e.formDisplay,j=[{name:"location",label:"Location",type:"text",placeholder:"City, State/Country"},{name:"startDate",label:"From",type:"date"},{name:"endDate",label:"To",type:"date"},{name:"responsibility",label:"Responsibilities",type:"text-area",placeholder:"Describe some of your key responsibilities and/or accomplishments. Separate each one with a semi-colon."}];return Object(x.jsxs)("div",{className:"content-wrapper",children:[Object(x.jsxs)("label",{className:"toggle-preview",children:[Object(x.jsx)("input",{type:"checkbox",className:"toggle-input",onClick:this.toggleEditMode}),Object(x.jsx)("span",{className:"toggle-slider"})]}),a.edit?Object(x.jsx)(I,{formDisplay:d,headerInput:[{name:"general-name",type:"text",placeholder:"Enter your full name"},{name:"general-position",type:"text",placeholder:"Enter your current position"}],contactInput:[{name:"general-email",type:"email",placeholder:"Enter your email address"},{name:"general-phone",type:"tel",placeholder:"Enter your phone number"},{name:"general-linkedIn",type:"text",placeholder:"Enter link to your LinkedIn account"}],skillInput:[{name:"skill-name",type:"text",placeholder:"Add your top 5 skills"}],summaryInput:[{name:"general-description",type:"text-area",placeholder:"Write a short summary of your background and professional goals"}],workInput:[{name:"job-company",label:"Company",type:"text",placeholder:"Company name"},{name:"job-position",label:"Position",type:"text",placeholder:"Position"}].concat(j.map((function(e){var t=Object(r.a)({},e);return t.name="job-"+e.name,t}))),schoolInput:[{name:"school-institution",label:"Educational institution",type:"text",placeholder:"Name of school or university"},{name:"school-degree",label:"Diploma or degree earned",type:"text",placeholder:"Name of diploma or degree"},{name:"school-major",label:"Major (if any)",type:"text",placeholder:"Name of major discipline"}].concat(j.map((function(e){var t=Object(r.a)({},e);return t.name="school-"+e.name,t}))),general:t,skill:n,job:i,school:s,skills:c,jobs:o,schools:l,editMode:a.edit,onSubmit:this.onSubmit,onChange:this.handleChange,onClick:this.toggleFormDisplay,onEdit:this.editExperience,onDelete:this.deleteItem}):Object(x.jsx)(C,{general:t,skill:n,job:i,school:s,skills:c,jobs:o,schools:l})]})}}]),n}(i.Component);c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.59a3f839.chunk.js.map