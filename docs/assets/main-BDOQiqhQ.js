const b={photo:"profile1.png",fullName:"Karthik SR",profession:"UX/UI Designer",email:"srkarthik.designscape@gmail.com",languages:[{name:"English",lvl:5},{name:"Malayalam",lvl:4},{name:"Hindi",lvl:3}],experience:[{date:"Jun. 2023 - Present",position:"Marketing Manager",place:"Pankayam",type:"Full-time",details:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"]},{date:"2017 - Present",position:"Graphic / Web designer",place:"Freelancer",details:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{date:"Sep. 2021 - Jun. 2023",position:"Legal Assistant",place:"Law Firm",type:"Intern",details:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","repare case briefs and summarize depositions, interrogatories and testimony"]}],tools:{design:["figma","photoshop","illustrator","premiere","notion","meet"],"no-code":["zapier","webflow","framer","wordpress"],"artiffical intelligence":["chatgpt","copilot","midjourney"]},education:[{profession:"UI/UX",date:"2023",school:"Coursera",tags:["UX","UI","research","DesignSystem","Ui","wireframing","figma","Ux"]},{profession:"UI/UX",date:"2023",school:"University of Kerala",tags:["UX","UI","research","DesignSystem","Ui","wireframing","figma","Ux"]},{profession:"Law",date:"2017-2022",school:"University of Kerala",tags:["law","legalStudies","contracts","internationalLaws"]}],interests:["branding","design","photography","artificial intelligence","illustration","typography","social networks","research","dron pilot","games"]},L={photo:"profile2.png",fullName:"Graham Hunt",profession:"Brand/Logo Designer",email:"ivann19bj@gmail.com",phone:"+34 666 666 666",languages:[{name:"English",lvl:5},{name:"Spanish",lvl:4},{name:"French",lvl:3}],experience:[{date:"Jul. 2023 - Ago. 2023",position:"Senior Graphic Designer",place:"Pinnacle",type:"Full-time",details:["Research and brainstorm various design ideas for content and marketing.","Review the work submitted by Junior Designers and sharing feedback"]},{date:"Ene. 2021 - Jul. 2023",position:"Graphic / Web designer",place:"Double Square",type:"Full-time",details:["Development of internal projects from scratch, product design of brands.","Landing page, webapps and hybrid apps","Taking decisions with stakeholders for the future of products such as Beagle labs, myur.."]},{date:"Feb. 2021 - Jul. 2023",position:"Graphic Designer",place:"Freelance",details:["Visual design for Events, Brands and Products.","Product design, Packaging Design","Logo Design"]}],tools:{design:["figma","creativecloud","miro","notion","meet","analytics"],"no-code":["zapier","webflow","framer","wordpress"],"artiffical intelligence":["chatgpt","copilot","midjourney"]},education:[{profession:"UI/UX",date:"2024",school:"Neoland",tags:["UX","UI","research","DesignSystem","Agile","wireframing","figma","IA"]},{profession:"Product designer",date:"2022",school:"Coursera",tags:["analytics","research","prototype","wireframes"]},{profession:"Graphic design",date:"2017-2021",school:"Cali Institute of the Arts",tags:["branding","web","illustration","adobe"]}],interests:["branding","identity","logo","typography","photography","designing","poster design","research","social networks","illustration"]};function p(n){const{email:t,fullName:o,photo:e,profession:i,languages:s,interests:a,experience:r,education:_,tools:$}=n;E(e),S({fullName:o,profession:i}),x(t),k(a),U(_),I(s),q(r),D($)}function S(n){const t=document.querySelector("#short-info");t&&(t.innerHTML=`
    <h4>Hello👋 I'm</h4>
    <div>
      <h2 id="name" class="editable">${n==null?void 0:n.fullName}</h2>
      <h3 id="profession" class="editable">${n==null?void 0:n.profession}</h3>
    </div>`)}function E(n){const t=document.querySelector("#person-photo");t&&(t.style["background-image"]=`url("/${n}")`)}function x(n){document.querySelector("#email")&&(document.querySelector("#email").innerHTML=`
    <h2>Let´s chat! I´m ready to work on excinting projects</h2>
    <h4 id="email" class="editable">${n}</h4>`)}function k(n){const t=document.querySelector("#interests");t&&(t.innerHTML=`
    <h2>Interests</h2>
    <ul class="interests__content">
      ${n.reduce((o,e,i)=>o+=`<li id="interest-${i}" class="editable">${e}</li>`,"")}
    </ul>
  `)}function U(n){const t=document.querySelector("#education");t&&(t.innerHTML=`
    <h2>Education</h2>
    <div class="education__content">
      ${n.reduce((o,e,i)=>o+=`<div class="education__content__card">
            <h4 id="edu-date-${i}" class="editable">${e==null?void 0:e.date}</h4>
            <div>
              <h4 id="edu-professtion-${i}" class="editable">${e==null?void 0:e.profession}</h4>
              <p class="tags">
                ${((e==null?void 0:e.tags)??[]).map(s=>"#"+s).join(" ")}
              </p>
            </div>
      <p id="edu-school-${i}" class="editable">${e==null?void 0:e.school}</p>
    </div>`,"")}
</div>
`)}function q(n){const t=document.querySelector("#experience");t&&(t.innerHTML=`
    <h2>Experience</h2>
    <div class="experience__content">
      ${n.reduce((o,e,i)=>o+=`<div class="experience__content__card">
        <p class="editable" id="exp-${i}-date">${e==null?void 0:e.date}t</p>
      <div>
        <div>
          <h4 id="exp-position-${i}" class="editable">${e==null?void 0:e.position}</h4>
          <p>
            ${(e==null?void 0:e.place)+(e!=null&&e.type?" | "+(e==null?void 0:e.type):"")}
          </p>
        </div>
        <ul>
          ${((e==null?void 0:e.details)??[]).reduce((s,a,r)=>s+=`<li id="exp-${i}-${r}-details" class="editable">${a}</li>`,"")}
        </ul>
      </div>
      </div>`,"")}
    </div>
  `)}function I(n){const t=document.querySelector("#languages");if(t){const o=document.createElement("table");o.classList.add("languages__content"),t.innerHTML="<h2>Languages</h2>",t.append(o);for(let e=0;e<n.length;e++){const i=n[e],s=document.createElement("td");s.classList.add("languages__content__"+(i==null?void 0:i.lvl)),s.innerHTML=`<div class="languages__content__${i==null?void 0:i.lvl}"></div>`;const a=document.createElement("tr");a.innerHTML=`<td><h4 id="language-${e}" class="editable">${i==null?void 0:i.name}</h4></td>`,a.append(s),o.append(a)}}}function D(n){const t=document.querySelector("#tools"),o=Object.entries(n);t&&(t.innerHTML=`
    <h2>Tools</h2>
    <div class="tools__content">${o.reduce((e,[i,s])=>e+`<h5 class="tools__content__label">${i}</h5><div class="tools__content__group"><h5 class="tools__content__label-sm">${i}</h5>${s.reduce((a,r)=>a+`<img
                src="/toolsIcons/${r}.svg"
                alt="${r}"
                loading="lazy"
              />`,"")}</div>`,"")}</div>`)}const l=document.querySelector("#switch"),u="Karthik SR",c="Graham Hunt";let d=u;l.textContent=c;p(b);const C=document.querySelector("#print-button"),h=document.querySelector("#experience"),m=document.querySelector("#tools"),f=document.querySelector("#education"),y=document.querySelector("#interests"),v=document.querySelector("#email");C.addEventListener("click",()=>{window.print()});l.addEventListener("click",()=>{d===c?(l.textContent=c,h.style.order=4,m.style.order=5,f.style.order=6,y.style.order=7,v.style.order=8,p(b),g(),d=u):(l.textContent=u,f.style.order=4,y.style.order=5,v.style.order=6,m.style.order=7,h.style.order=8,p(L),g(),d=c)});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".editable").forEach(t=>{t.addEventListener("dblclick",()=>{t.contentEditable=!0,t.classList.add("editing"),t.focus()}),t.addEventListener("blur",()=>{t.contentEditable=!1,t.classList.remove("editing"),H(t.id,t.innerText)}),t.addEventListener("click",function(o){M(o,t)})}),g()});function H(n,t){localStorage.setItem(n,t)}function g(){document.querySelectorAll(".editable").forEach(t=>{const o=localStorage.getItem(t.id);o&&(t.innerText=o)})}function M(n,t){const o=document.createElement("span");o.classList.add("ripple");const e=t.getBoundingClientRect(),i=Math.max(e.width,e.height);o.style.width=o.style.height=i+"px",o.style.left=n.clientX-e.left-i/2+"px",o.style.top=n.clientY-e.top-i/2+"px",t.appendChild(o),o.addEventListener("animationend",()=>{o.remove()})}
