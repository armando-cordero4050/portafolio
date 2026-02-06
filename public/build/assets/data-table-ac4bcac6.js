import{_ as ne}from"./AppTextField.vue_vue_type_script_setup_true_lang-b9010814.js";import{as as me,at as ce,aY as de,az as ue,q as e,d as T,l as S,aQ as q,a6 as pe,r as ie,o as u,c as k,w as a,s,H as X,n as r,y as i,F as le,a as ve,b as y,z as U,Q as w,A as fe,t as B,aj as P,am as M,al as g,a0 as C,ak as H,ai as j,a1 as F,a2 as J,G as O,Z as ye}from"./main-3f772619.js";import{V as K,a as f}from"./VRow-0c7e6edd.js";import{d as Z,V as ae,b as te,c as se}from"./VCard-59875098.js";import{V as Y}from"./VImg-1135bfd9.js";import{V as R}from"./VAvatar-1d1d21c4.js";import{V as L}from"./VChip-2fda8c84.js";import{w as D}from"./VDataTable-4dab2c1b.js";import{a as z}from"./formatters-c683a4a2.js";import{V as N}from"./VTextField-0defed1e.js";import{V as ge}from"./VPagination-a261075b.js";import{V as _e}from"./VSelect-71e7b68e.js";import{V as Q}from"./VSpacer-95ea05c9.js";import{V as re}from"./VDialog-e23e7490.js";import{_ as xe}from"./AppCardCode.vue_vue_type_style_index_0_lang-16be0391.js";import"./VInput-e8e8f4b8.js";import"./transition-6332bc63.js";import"./VCheckboxBtn-6ff3878e.js";import"./VSelectionControl-3fa884ca.js";import"./VList-0fef076a.js";import"./ssrBoot-4dae7a50.js";import"./VDivider-13482bbd.js";import"./filter-4b6cadd9.js";import"./VTable-abc80424.js";import"./index-681711bc.js";/* empty css                   */import"./VField-95e14b22.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-f4b5b2c9.js";import"./dialog-transition-6d5a70b3.js";import"./VMenu-967601e6.js";import"./VOverlay-6f080a03.js";import"./lazy-8d4ca870.js";import"./vue.runtime.esm-bundler-cebdf7ba.js";const be=me()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...ce(),...de()},setup(b,c){let{slots:o}=c;return ue(()=>e(b.tag,{class:["v-container",{"v-container--fluid":b.fluid},b.class],style:b.style},o)),{}}}),he={class:"d-flex align-center"},we={class:"d-flex flex-column ms-3"},Ve={class:"d-block font-weight-medium text-truncate text--primary"},ke={class:"text-xs"},Ae={class:"d-flex align-center"},Te={class:"ms-1 text-no-wrap"},Ce={class:"d-flex align-center"},Se={key:1},De={class:"text-no-wrap font-weight-medium text--primary ms-2"},Ee={class:"d-flex flex-column"},Ie={class:"d-flex align-center"},Ye={class:"text-primary font-weight-medium"},Re={key:0},Pe={class:"text-xs text-no-wrap"},Me=T({__name:"DemoDataTableKitchenSink",setup(b){const c=S(""),o=S([]),m=[{title:"PRODUCT",key:"product.name"},{title:"DATE",key:"date"},{title:"CATEGORY",key:"product.category"},{title:"BUYERS",key:"buyer.name"},{title:"PAYMENT",key:"payment",sortable:!1},{title:"STATUS",key:"status",sortable:!1},{title:"DELETE",key:"delete",sortable:!1}],l=_=>{const h=o.value.findIndex(E=>E.product.id===_);o.value.splice(h,1)},t=[{name:"Mouse",icon:"tabler-mouse",color:"warning"},{name:"Glass",icon:"tabler-eyeglass",color:"primary"},{name:"Smart Watch",icon:"tabler-device-watch",color:"success"},{name:"Bag",icon:"tabler-briefcase",color:"info"},{name:"Storage Device",icon:"tabler-device-audio-tape",color:"warning"},{name:"Bluetooth",icon:"tabler-bluetooth",color:"error"},{name:"Gaming",icon:"tabler-device-gamepad-2",color:"warning"},{name:"Home",icon:"tabler-home",color:"error"},{name:"VR",icon:"tabler-badge-vr",color:"primary"},{name:"Shoes",icon:"tabler-shoe",color:"success"},{name:"Electronics",icon:"tabler-cpu",color:"info"},{name:"Projector",icon:"tabler-theater",color:"warning"},{name:"IPod",icon:"tabler-device-airpods",color:"error"},{name:"Keyboard",icon:"tabler-keyboard",color:"primary"},{name:"Smart Phone",icon:"tabler-device-mobile",color:"success"},{name:"Smart TV",icon:"tabler-device-tv",color:"info"},{name:"Google Home",icon:"tabler-brand-google",color:"warning"},{name:"Mac",icon:"tabler-brand-apple",color:"error"},{name:"Headphone",icon:"tabler-headphones",color:"primary"},{name:"IMac",icon:"tabler-device-imac",color:"success"},{name:"IPhone",icon:"tabler-brand-apple",color:"warning"}],v=_=>{if(_==="Confirmed")return"primary";if(_==="Completed")return"success";if(_==="Cancelled")return"error"},n=_=>{const h=t.findIndex(E=>E.name===_);return h!==-1?[{icon:t[h].icon,color:t[h].color}]:[{icon:"mdi-help-circle-outline",color:"primary"}]};return q(()=>{pe.get("pages/datatables").then(_=>{o.value=_.data})}),(_,h)=>{const E=ne,$=ie("IconBtn");return u(),k("div",null,[e(Z,null,{default:a(()=>[e(K,null,{default:a(()=>[e(f,{cols:"12","offset-md":"8",md:"4"},{default:a(()=>[e(E,{modelValue:s(c),"onUpdate:modelValue":h[0]||(h[0]=d=>X(c)?c.value=d:null),density:"compact",placeholder:"Search","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s(D),{headers:m,items:s(o),search:s(c),"items-per-page":5,class:"text-no-wrap"},{"item.product.name":a(({item:d})=>[r("div",he,[r("div",null,[e(Y,{src:d.raw.product.image,height:"40",width:"40"},null,8,["src"])]),r("div",we,[r("span",Ve,i(d.raw.product.name),1),r("span",ke,i(d.raw.product.brand),1)])])]),"item.product.category":a(({item:d})=>[r("div",Ae,[(u(!0),k(le,null,ve(n(d.raw.product.category),(I,W)=>(u(),y(R,{key:W,size:"26",color:I.color,variant:"tonal"},{default:a(()=>[e(U,{size:"20",color:I.color,class:"rounded-0"},{default:a(()=>[w(i(I.icon),1)]),_:2},1032,["color"])]),_:2},1032,["color"]))),128)),r("span",Te,i(d.raw.product.category),1)])]),"item.buyer.name":a(({item:d})=>[r("div",Ce,[e(R,{size:"1.875rem",color:d.raw.avatar?void 0:"primary",variant:d.raw.avatar?void 0:"tonal"},{default:a(()=>[d.raw.buyer.avatar?(u(),y(Y,{key:0,src:d.raw.buyer.avatar},null,8,["src"])):(u(),k("span",Se,i(d.raw.buyer.name.slice(0,2).toUpperCase()),1))]),_:2},1032,["color","variant"]),r("span",De,i(d.raw.buyer.name),1)])]),"item.payment":a(({item:d})=>[r("div",Ee,[r("div",Ie,[r("span",Ye,"$"+i(d.raw.payment.paid_amount),1),d.raw.payment.paid_amount!==d.raw.payment.total?(u(),k("span",Re,"/"+i(d.raw.payment.total),1)):fe("",!0)]),r("span",Pe,i(d.raw.payment.received_payment_status),1)])]),"item.status":a(({item:d})=>[e(L,{color:v(d.raw.payment.status),class:B([`text-${v(d.raw.payment.status)}`,"font-weight-medium"]),size:"small"},{default:a(()=>[w(i(d.raw.payment.status),1)]),_:2},1032,["color","class"])]),"item.delete":a(({item:d})=>[e($,{onClick:I=>l(d.raw.product.id)},{default:a(()=>[e(U,{icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["items","search"])])}}}),G=[{responsive_id:"",id:95,avatar:P,full_name:"Edwina Ebsworth",post:"Human Resources Assistant",email:"eebsworth2m@sbwire.com",city:"Puzi",start_date:"09/27/2018",salary:19586.23,age:"27",experience:"2 Years",status:1},{responsive_id:"",id:1,avatar:M,full_name:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",start_date:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:2},{responsive_id:"",id:7,avatar:"",full_name:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",start_date:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:3},{responsive_id:"",id:11,avatar:"",full_name:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",start_date:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:4},{responsive_id:"",id:3,avatar:g,full_name:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",start_date:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:5},{responsive_id:"",id:5,avatar:"",full_name:"Harmonia Nisius",post:"Senior Cost Accountant",email:"hnisius4@gnu.org",city:"Lucan",start_date:"08/25/2017",salary:10909.52,age:"33",experience:"3 Years",status:2},{responsive_id:"",id:6,avatar:"",full_name:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",start_date:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:1},{responsive_id:"",id:4,avatar:M,full_name:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",start_date:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:2},{responsive_id:"",id:8,avatar:g,full_name:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",start_date:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:3},{responsive_id:"",id:9,avatar:P,full_name:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",start_date:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:5},{responsive_id:"",id:10,avatar:g,full_name:"Merline Penhalewick",post:"Junior Executive",email:"mpenhalewick9@php.net",city:"Kanuma",start_date:"04/19/2019",salary:15939.52,age:"23",experience:"3 Years",status:2},{responsive_id:"",id:12,avatar:"",full_name:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",start_date:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:4},{responsive_id:"",id:13,avatar:"",full_name:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",start_date:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:4},{responsive_id:"",id:14,avatar:"",full_name:"Othilia Extill",post:"Associate Professor",email:"oextilld@theatlantic.com",city:"Brzyska",start_date:"02/01/2016",salary:18442.34,age:"43",experience:"3 Years",status:2},{responsive_id:"",id:15,avatar:"",full_name:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"Bích Động",start_date:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:5},{responsive_id:"",id:16,avatar:C,full_name:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",start_date:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:5},{responsive_id:"",id:17,avatar:"",full_name:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",start_date:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:1},{responsive_id:"",id:18,avatar:"",full_name:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",start_date:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:1},{responsive_id:"",id:19,avatar:C,full_name:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Polýkastro",start_date:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:4},{responsive_id:"",id:20,avatar:g,full_name:"Latashia Lewtey",post:"Actuary",email:"llewteyj@sun.com",city:"Hougong",start_date:"08/03/2017",salary:18303.87,age:"35",experience:"5 Years",status:1},{responsive_id:"",id:21,avatar:"",full_name:"Natalina Tyne",post:"Software Engineer",email:"ntynek@merriam-webster.com",city:"Yanguan",start_date:"03/16/2019",salary:15256.4,age:"30",experience:"0 Year",status:2},{responsive_id:"",id:22,avatar:"",full_name:"Faun Josefsen",post:"Analog Circuit Design manager",email:"fjosefsenl@samsung.com",city:"Wengyang",start_date:"07/08/2017",salary:11209.16,age:"40",experience:"0 Year",status:3},{responsive_id:"",id:23,avatar:g,full_name:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",start_date:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:5},{responsive_id:"",id:24,avatar:"",full_name:"Scott Jiran",post:"Graphic Designer",email:"sjirann@simplemachines.org",city:"Pinglin",start_date:"05/26/2016",salary:23081.71,age:"23",experience:"3 Years",status:1},{responsive_id:"",id:25,avatar:"",full_name:"Carmita Medling",post:"Accountant",email:"cmedlingo@hp.com",city:"Bourges",start_date:"07/31/2019",salary:13602.24,age:"47",experience:"7 Years",status:3},{responsive_id:"",id:26,avatar:P,full_name:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"Cà Mau",start_date:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:4},{responsive_id:"",id:27,avatar:"",full_name:"Onfroi Doughton",post:"Civil Engineer",email:"odoughtonq@aboutads.info",city:"Utrecht (stad)",start_date:"09/29/2018",salary:23796.62,age:"28",experience:"8 Years",status:3},{responsive_id:"",id:28,avatar:"",full_name:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",start_date:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:4},{responsive_id:"",id:29,avatar:"",full_name:"Devin Bridgland",post:"Tax Accountant",email:"dbridglands@odnoklassniki.ru",city:"Baoli",start_date:"07/17/2016",salary:13508.15,age:"48",experience:"8 Years",status:3},{responsive_id:"",id:30,avatar:H,full_name:"Gilbert McFade",post:"Biostatistician",email:"gmcfadet@irs.gov",city:"Deje",start_date:"08/28/2018",salary:21632.3,age:"20",experience:"0 Year",status:2},{responsive_id:"",id:31,avatar:"",full_name:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebrák",start_date:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:5},{responsive_id:"",id:32,avatar:"",full_name:"Marcelia Alleburton",post:"Safety Technician",email:"malleburtonv@amazon.com",city:"Basail",start_date:"06/02/2016",salary:23888.98,age:"53",experience:"3 Years",status:2},{responsive_id:"",id:33,avatar:g,full_name:"Aili De Coursey",post:"Environmental Specialist",email:"adew@etsy.com",city:"Łazy",start_date:"09/30/2016",salary:14082.44,age:"27",experience:"7 Years",status:5},{responsive_id:"",id:34,avatar:H,full_name:"Charlton Chatres",post:"Analyst Programmer",email:"cchatresx@goo.gl",city:"Reguengos de Monsaraz",start_date:"04/07/2016",salary:21386.52,age:"22",experience:"2 Years",status:3},{responsive_id:"",id:35,avatar:j,full_name:"Nat Hugonnet",post:"Financial Advisor",email:"nhugonnety@wufoo.com",city:"Pimentel",start_date:"09/11/2019",salary:13835.97,age:"46",experience:"6 Years",status:4},{responsive_id:"",id:36,avatar:"",full_name:"Lorine Hearsum",post:"Payment Adjustment Coordinator",email:"lhearsumz@google.co.uk",city:"Shuiying",start_date:"03/05/2019",salary:22093.91,age:"47",experience:"7 Years",status:4},{responsive_id:"",id:37,avatar:F,full_name:"Sheila-kathryn Haborn",post:"Environmental Specialist",email:"shaborn10@about.com",city:"Lewolang",start_date:"11/10/2018",salary:24624.23,age:"51",experience:"1 Year",status:3},{responsive_id:"",id:38,avatar:J,full_name:"Alma Harvatt",post:"Administrative Assistant",email:"aharvatt11@addtoany.com",city:"Ulundi",start_date:"11/04/2016",salary:21782.82,age:"41",experience:"1 Year",status:1},{responsive_id:"",id:39,avatar:P,full_name:"Beatrix Longland",post:"VP Quality Control",email:"blongland12@gizmodo.com",city:"Damu",start_date:"07/18/2016",salary:22794.6,age:"62",experience:"2 Years",status:2},{responsive_id:"",id:40,avatar:C,full_name:"Hammad Condell",post:"Project Manager",email:"hcondell13@tiny.cc",city:"Bulung’ur",start_date:"11/04/2018",salary:10872.83,age:"37",experience:"7 Years",status:4},{responsive_id:"",id:41,avatar:"",full_name:"Parker Bice",post:"Technical Writer",email:"pbice14@ameblo.jp",city:"Shanlian",start_date:"03/02/2016",salary:17471.92,age:"65",experience:"5 Years",status:5},{responsive_id:"",id:42,avatar:"",full_name:"Lowrance Orsi",post:"Biostatistician",email:"lorsi15@wp.com",city:"Dengteke",start_date:"12/10/2018",salary:24719.51,age:"64",experience:"4 Years",status:1},{responsive_id:"",id:43,avatar:M,full_name:"Ddene Chaplyn",post:"Environmental Tech",email:"dchaplyn16@nymag.com",city:"Lattes",start_date:"01/23/2019",salary:11958.33,age:"38",experience:"8 Years",status:2},{responsive_id:"",id:44,avatar:"",full_name:"Washington Bygraves",post:"Human Resources Manager",email:"wbygraves17@howstuffworks.com",city:"Zlaté Hory",start_date:"09/07/2016",salary:10552.43,age:"37",experience:"7 Years",status:1},{responsive_id:"",id:45,avatar:g,full_name:"Meghann Bodechon",post:"Operator",email:"mbodechon18@1und1.de",city:"Itō",start_date:"07/23/2018",salary:23024.28,age:"61",experience:"1 Year",status:4},{responsive_id:"",id:46,avatar:j,full_name:"Moshe De Ambrosis",post:"Recruiting Manager",email:"mde19@purevolume.com",city:"San Diego",start_date:"02/10/2018",salary:10409.9,age:"47",experience:"7 Years",status:5},{responsive_id:"",id:47,avatar:C,full_name:"Had Chatelot",post:"Cost Accountant",email:"hchatelot1a@usatoday.com",city:"Mercedes",start_date:"11/23/2016",salary:11446.3,age:"64",experience:"4 Years",status:4},{responsive_id:"",id:48,avatar:"",full_name:"Georgia McCrum",post:"Registered Nurse",email:"gmccrum1b@icio.us",city:"Nggalak",start_date:"04/19/2018",salary:14002.31,age:"63",experience:"3 Years",status:1},{responsive_id:"",id:49,avatar:F,full_name:"Krishnah Stilldale",post:"VP Accounting",email:"kstilldale1c@chronoengine.com",city:"Slavs’ke",start_date:"03/18/2017",salary:10704.29,age:"56",experience:"6 Years",status:1},{responsive_id:"",id:50,avatar:C,full_name:"Mario Umbert",post:"Research Assistant",email:"mumbert1d@digg.com",city:"Chorotis",start_date:"05/13/2019",salary:21813.54,age:"43",experience:"3 Years",status:1},{responsive_id:"",id:51,avatar:"",full_name:"Edvard Dixsee",post:"Graphic Designer",email:"edixsee1e@unblog.fr",city:"Rancharia",start_date:"04/23/2019",salary:18053.11,age:"46",experience:"6 Years",status:3},{responsive_id:"",id:52,avatar:g,full_name:"Tammie Davydoch",post:"VP Quality Control",email:"tdavydoch1f@examiner.com",city:"Mamedkala",start_date:"04/19/2016",salary:17617.08,age:"47",experience:"7 Years",status:3},{responsive_id:"",id:53,avatar:"",full_name:"Benito Rodolico",post:"Safety Technician",email:"brodolico1g@sciencedirect.com",city:"Wonosobo",start_date:"10/06/2018",salary:18866.55,age:"21",experience:"1 Year",status:5},{responsive_id:"",id:54,avatar:"",full_name:"Marco Pennings",post:"Compensation Analyst",email:"mpennings1h@bizjournals.com",city:"Umag",start_date:"06/15/2017",salary:13722.18,age:"30",experience:"0 Year",status:3},{responsive_id:"",id:55,avatar:"",full_name:"Tommie O'Corr",post:"Quality Engineer",email:"tocorr1i@nyu.edu",city:"Olhos de Água",start_date:"09/26/2018",salary:15228.8,age:"51",experience:"1 Year",status:1},{responsive_id:"",id:56,avatar:j,full_name:"Cybill Poyle",post:"Cost Accountant",email:"cpoyle1j@amazon.com",city:"Hamm",start_date:"01/03/2016",salary:13951.96,age:"29",experience:"9 Years",status:1},{responsive_id:"",id:57,avatar:H,full_name:"Norry Stoller",post:"Human Resources Manager",email:"nstoller1k@noaa.gov",city:"Ruukki",start_date:"02/04/2018",salary:15100,age:"27",experience:"7 Years",status:4},{responsive_id:"",id:58,avatar:"",full_name:"Wendi Somerlie",post:"Systems Administrator",email:"wsomerlie1l@accuweather.com",city:"Meicheng",start_date:"04/22/2016",salary:20023.52,age:"28",experience:"9 Years",status:5},{responsive_id:"",id:59,avatar:"",full_name:"Ferdie Georgeon",post:"Geologist",email:"fgeorgeon1m@nhs.uk",city:"Tanahbeureum",start_date:"04/08/2019",salary:12630.26,age:"28",experience:"1 Year",status:2},{responsive_id:"",id:60,avatar:"",full_name:"Jules Auten",post:"Desktop Support Technician",email:"jauten1n@foxnews.com",city:"Mojo",start_date:"08/13/2019",salary:13870.62,age:"48",experience:"5 Years",status:4},{responsive_id:"",id:61,avatar:J,full_name:"Nichole Dacres",post:"Mechanical Systems Engineer",email:"ndacres1o@apache.org",city:"Kimanuit",start_date:"11/06/2017",salary:18220.51,age:"20",experience:"0 Year",status:3},{responsive_id:"",id:62,avatar:j,full_name:"Holly Edgworth",post:"Junior Executive",email:"hedgworth1p@craigslist.org",city:"Pedreira",start_date:"08/05/2017",salary:13999.88,age:"37",experience:"0 Year",status:5},{responsive_id:"",id:63,avatar:g,full_name:"Henriette Croft",post:"Food Chemist",email:"hcroft1q@desdev.cn",city:"Taizhou",start_date:"09/12/2019",salary:11049.79,age:"53",experience:"1 Year",status:5},{responsive_id:"",id:64,avatar:"",full_name:"Annetta Glozman",post:"Staff Accountant",email:"aglozman1r@storify.com",city:"Pendawanbaru",start_date:"08/25/2017",salary:10745.32,age:"27",experience:"3 Years",status:5},{responsive_id:"",id:65,avatar:"",full_name:"Cletis Cervantes",post:"Health Coach",email:"ccervantes1s@de.vu",city:"Solnechnyy",start_date:"05/24/2018",salary:24769.08,age:"22",experience:"7 Years",status:1},{responsive_id:"",id:66,avatar:g,full_name:"Christos Kiley",post:"Geologist",email:"ckiley1t@buzzfeed.com",city:"El Bolsón",start_date:"02/27/2019",salary:16053.15,age:"46",experience:"2 Years",status:1},{responsive_id:"",id:67,avatar:g,full_name:"Silvain Siebert",post:"VP Sales",email:"ssiebert1u@domainmarket.com",city:"Cadiz",start_date:"09/23/2017",salary:23347.17,age:"47",experience:"8 Years",status:5},{responsive_id:"",id:68,avatar:"",full_name:"Sharla Ibberson",post:"Payment Adjustment Coordinator",email:"sibberson1v@virginia.edu",city:"Lamam",start_date:"11/01/2016",salary:15658.4,age:"51",experience:"8 Years",status:1},{responsive_id:"",id:69,avatar:g,full_name:"Ripley Rentcome",post:"Physical Therapy Assistant",email:"rrentcome1w@youtu.be",city:"Dashkawka",start_date:"07/15/2018",salary:15396.66,age:"41",experience:"8 Years",status:2},{responsive_id:"",id:70,avatar:"",full_name:"Chrisse Birrane",post:"Chemical Engineer",email:"cbirrane1x@google.com.br",city:"Las Toscas",start_date:"05/22/2016",salary:15823.4,age:"62",experience:"0 Year",status:5},{responsive_id:"",id:71,avatar:"",full_name:"Georges Tesyro",post:"Human Resources Manager",email:"gtesyro1y@last.fm",city:"Gabao",start_date:"01/27/2019",salary:19051.25,age:"37",experience:"7 Years",status:1},{responsive_id:"",id:72,avatar:"",full_name:"Bondon Hazard",post:"Geological Engineer",email:"bhazard1z@over-blog.com",city:"Llano de Piedra",start_date:"01/17/2019",salary:11632.84,age:"65",experience:"3 Years",status:4},{responsive_id:"",id:73,avatar:C,full_name:"Aliza MacElholm",post:"VP Sales",email:"amacelholm20@printfriendly.com",city:"Sosnovyy Bor",start_date:"11/17/2017",salary:16741.31,age:"64",experience:"7 Years",status:2},{responsive_id:"",id:74,avatar:P,full_name:"Lucas Witherdon",post:"Senior Quality Engineer",email:"lwitherdon21@storify.com",city:"Staré Křečany",start_date:"09/26/2016",salary:19387.76,age:"38",experience:"2 Years",status:3},{responsive_id:"",id:75,avatar:"",full_name:"Pegeen Peasegod",post:"Web Designer",email:"ppeasegod22@slideshare.net",city:"Keda",start_date:"05/21/2016",salary:24014.04,age:"59",experience:"6 Years",status:3},{responsive_id:"",id:76,avatar:"",full_name:"Elyn Watkinson",post:"Structural Analysis Engineer",email:"ewatkinson23@blogspot.com",city:"Osan",start_date:"09/30/2016",salary:14493.51,age:"55",experience:"7 Years",status:1},{responsive_id:"",id:77,avatar:M,full_name:"Babb Skirving",post:"Analyst Programmer",email:"bskirving24@cbsnews.com",city:"Balky",start_date:"09/27/2016",salary:24733.28,age:"39",experience:"1 Year",status:4},{responsive_id:"",id:78,avatar:"",full_name:"Shelli Ondracek",post:"Financial Advisor",email:"sondracek25@plala.or.jp",city:"Aoluguya Ewenke Minzu",start_date:"03/28/2016",salary:21922.17,age:"23",experience:"1 Year",status:3},{responsive_id:"",id:79,avatar:g,full_name:"Stanislaw Melloy",post:"Sales Associate",email:"smelloy26@fastcompany.com",city:"Funafuti",start_date:"04/13/2017",salary:16944.42,age:"30",experience:"2 Years",status:2},{responsive_id:"",id:80,avatar:"",full_name:"Seamus Eisikovitsh",post:"Legal Assistant",email:"seisikovitsh27@usgs.gov",city:"Cangkringan",start_date:"05/28/2018",salary:21963.69,age:"22",experience:"7 Years",status:1},{responsive_id:"",id:81,avatar:P,full_name:"Tammie Wattins",post:"Web Designer",email:"twattins28@statcounter.com",city:"Xilin",start_date:"08/07/2018",salary:16049.93,age:"36",experience:"5 Years",status:2},{responsive_id:"",id:82,avatar:F,full_name:"Aila Quailadis",post:"Technical Writer",email:"aquail29@prlog.org",city:"Shuangchahe",start_date:"02/11/2018",salary:24137.29,age:"43",experience:"4 Years",status:4},{responsive_id:"",id:83,avatar:"",full_name:"Myrvyn Gilogly",post:"Research Associate",email:"mgilogly2a@elpais.com",city:"Prince Rupert",start_date:"05/13/2018",salary:10089.96,age:"19",experience:"8 Years",status:4},{responsive_id:"",id:84,avatar:C,full_name:"Hanna Langthorne",post:"Analyst Programmer",email:"hlangthorne2b@stumbleupon.com",city:"Guaynabo",start_date:"11/11/2018",salary:14227.1,age:"21",experience:"7 Years",status:3},{responsive_id:"",id:85,avatar:"",full_name:"Ruby Gimblet",post:"Registered Nurse",email:"rgimblet2c@1688.com",city:"Nanyulinxi",start_date:"03/28/2016",salary:19562.59,age:"30",experience:"1 Year",status:2},{responsive_id:"",id:86,avatar:C,full_name:"Louis Paszak",post:"Programmer",email:"lpaszak2d@behance.net",city:"Chiscas",start_date:"04/25/2016",salary:17178.86,age:"51",experience:"7 Years",status:5},{responsive_id:"",id:87,avatar:"",full_name:"Glennie Riolfi",post:"Computer Systems Analyst",email:"griolfi2e@drupal.org",city:"Taung",start_date:"06/18/2018",salary:15089.83,age:"29",experience:"4 Years",status:3},{responsive_id:"",id:88,avatar:"",full_name:"Jemimah Morgan",post:"Staff Accountant",email:"jmorgan2f@nifty.com",city:"La Esperanza",start_date:"01/17/2016",salary:18330.72,age:"27",experience:"3 Years",status:1},{responsive_id:"",id:89,avatar:M,full_name:"Talya Brandon",post:"Food Chemist",email:"tbrandon2g@ucoz.com",city:"Zaječar",start_date:"10/08/2018",salary:16284.64,age:"28",experience:"6 Years",status:1},{responsive_id:"",id:90,avatar:H,full_name:"Renate Shay",post:"Recruiter",email:"rshay2h@tumblr.com",city:"Pueblo Viejo",start_date:"03/15/2017",salary:18523.75,age:"28",experience:"3 Years",status:1},{responsive_id:"",id:91,avatar:"",full_name:"Julianne Bartosik",post:"Senior Cost Accountant",email:"jbartosik2i@state.gov",city:"Botlhapatlou",start_date:"02/06/2017",salary:17607.66,age:"48",experience:"6 Years",status:3},{responsive_id:"",id:92,avatar:J,full_name:"Yvonne Emberton",post:"Recruiter",email:"yemberton2j@blog.com",city:"Nagcarlan",start_date:"02/13/2017",salary:17550.18,age:"20",experience:"1 Year",status:4},{responsive_id:"",id:93,avatar:F,full_name:"Danya Faichnie",post:"Social Worker",email:"dfaichnie2k@weather.com",city:"Taling",start_date:"07/29/2019",salary:18469.35,age:"37",experience:"3 Years",status:4},{responsive_id:"",id:94,avatar:"",full_name:"Ronica Hasted",post:"Software Consultant",email:"rhasted2l@hexun.com",city:"Gangkou",start_date:"07/04/2019",salary:24866.66,age:"53",experience:"7 Years",status:4},{responsive_id:"",id:96,avatar:"",full_name:"Alaric Beslier",post:"Tax Accountant",email:"abeslier2n@zimbio.com",city:"Ocucaje",start_date:"04/16/2017",salary:19366.53,age:"22",experience:"8 Years",status:4},{responsive_id:"",id:2,avatar:j,full_name:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",start_date:"05/20/2018",salary:13633.69,age:"63",experience:"3 Years",status:2},{responsive_id:"",id:97,avatar:"",full_name:"Reina Peckett",post:"Quality Control Specialist",email:"rpeckett2o@timesonline.co.uk",city:"Anyang",start_date:"05/20/2018",salary:16619.4,age:"46",experience:"8 Years",status:4},{responsive_id:"",id:98,avatar:g,full_name:"Olivette Gudgin",post:"Paralegal",email:"ogudgin2p@gizmodo.com",city:"Fujinomiya",start_date:"04/09/2019",salary:15211.6,age:"47",experience:"8 Years",status:2},{responsive_id:"",id:99,avatar:M,full_name:"Evangelina Carnock",post:"Cost Accountant",email:"ecarnock2q@washington.edu",city:"Doushaguan",start_date:"01/26/2017",salary:23704.82,age:"51",experience:"0 Year",status:4},{responsive_id:"",id:100,avatar:"",full_name:"Glyn Giacoppo",post:"Software Test Engineer",email:"ggiacoppo2r@apache.org",city:"Butha-Buthe",start_date:"04/15/2017",salary:24973.48,age:"41",experience:"7 Years",status:2}],Be={class:"d-flex align-center"},Le={key:1},Ge={class:"d-flex flex-column ms-3"},ze={class:"d-block font-weight-medium text--primary text-truncate"},je=T({__name:"DemoDataTableExternalPagination",setup(b){const c=S([]),o=S({page:1,itemsPerPage:5,sortBy:[""],sortDesc:[!1]}),m=[{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],l=t=>t===1?{color:"primary",text:"Current"}:t===2?{color:"success",text:"Professional"}:t===3?{color:"error",text:"Rejected"}:t===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return q(()=>{c.value=JSON.parse(JSON.stringify(G))}),(t,v)=>(u(),y(s(D),{headers:m,items:s(c),"items-per-page":s(o).itemsPerPage,page:s(o).page,"onUpdate:options":v[2]||(v[2]=n=>o.value=n)},{"item.full_name":a(({item:n})=>[r("div",Be,[e(R,{size:"32",color:n.raw.avatar?"":"primary",class:B(n.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:n.raw.avatar?void 0:"tonal"},{default:a(()=>[n.raw.avatar?(u(),y(Y,{key:0,src:n.raw.avatar},null,8,["src"])):(u(),k("span",Le,i(s(z)(n.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",Ge,[r("span",ze,i(n.raw.full_name),1),r("small",null,i(n.raw.post),1)])])]),"item.status":a(({item:n})=>[e(L,{color:l(n.raw.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[w(i(l(n.raw.status).text),1)]),_:2},1032,["color"])]),bottom:a(()=>[e(Z,{class:"pt-2"},{default:a(()=>[e(K,null,{default:a(()=>[e(f,{lg:"2",cols:"3"},{default:a(()=>[e(N,{modelValue:s(o).itemsPerPage,"onUpdate:modelValue":v[0]||(v[0]=n=>s(o).itemsPerPage=n),label:"Rows per page:",type:"number",min:"-1",max:"15","hide-details":"",variant:"underlined"},null,8,["modelValue"])]),_:1}),e(f,{lg:"10",cols:"9",class:"d-flex justify-end"},{default:a(()=>[e(ge,{modelValue:s(o).page,"onUpdate:modelValue":v[1]||(v[1]=n=>s(o).page=n),"total-visible":"5",length:Math.ceil(s(c).length/s(o).itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1},8,["items","items-per-page","page"]))}}),Ne={class:"d-flex align-center"},$e={key:1},Oe={class:"d-flex flex-column ms-3"},Ue={class:"d-block font-weight-medium text--primary text-truncate"},He={class:"d-flex gap-1"},Fe=r("span",{class:"headline"},"Edit Item",-1),Ke=T({__name:"DemoDataTableRowEditingViaDialog",setup(b){const c=S(!1),o=S(!1),m=S({responsive_id:"",id:-1,avatar:"",full_name:"",post:"",email:"",city:"",start_date:"",salary:-1,age:"",experience:"",status:-1}),l=S(m.value),t=S(-1),v=S([]),n=[{text:"Current",value:1},{text:"Professional",value:2},{text:"Rejected",value:3},{text:"Resigned",value:4},{text:"Applied",value:5}],_=[{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"},{title:"ACTIONS",key:"actions"}],h=A=>A===1?{color:"primary",text:"Current"}:A===2?{color:"success",text:"Professional"}:A===3?{color:"error",text:"Rejected"}:A===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"},E=A=>{t.value=v.value.indexOf(A),l.value={...A},c.value=!0},$=A=>{t.value=v.value.indexOf(A),l.value={...A},o.value=!0},d=()=>{c.value=!1,t.value=-1,l.value={...m.value}},I=()=>{o.value=!1,t.value=-1,l.value={...m.value}},W=()=>{t.value>-1?Object.assign(v.value[t.value],l.value):v.value.push(l.value),d()},oe=()=>{v.value.splice(t.value,1),I()};return q(()=>{v.value=JSON.parse(JSON.stringify(G))}),(A,x)=>{const ee=ie("IconBtn");return u(),k(le,null,[e(s(D),{headers:_,items:s(v),"items-per-page":5},{"item.full_name":a(({item:p})=>[r("div",Ne,[e(R,{size:"32",color:p.raw.avatar?"":"primary",class:B(p.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:p.raw.avatar?void 0:"tonal"},{default:a(()=>[p.raw.avatar?(u(),y(Y,{key:0,src:p.raw.avatar},null,8,["src"])):(u(),k("span",$e,i(s(z)(p.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",Oe,[r("span",Ue,i(p.raw.full_name),1),r("small",null,i(p.raw.post),1)])])]),"item.status":a(({item:p})=>[e(L,{color:h(p.raw.status).color,size:"small"},{default:a(()=>[w(i(h(p.raw.status).text),1)]),_:2},1032,["color"])]),"item.actions":a(({item:p})=>[r("div",He,[e(ee,{onClick:V=>E(p.raw)},{default:a(()=>[e(U,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(ee,{onClick:V=>$(p.raw)},{default:a(()=>[e(U,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])])]),_:1},8,["items"]),e(re,{modelValue:s(c),"onUpdate:modelValue":x[6]||(x[6]=p=>X(c)?c.value=p:null),"max-width":"600px"},{default:a(()=>[e(ae,null,{default:a(()=>[e(te,null,{default:a(()=>[Fe]),_:1}),e(Z,null,{default:a(()=>{var p;return[w(i((p=s(l))==null?void 0:p.full_name)+" ",1),e(be,null,{default:a(()=>[e(K,null,{default:a(()=>[e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(N,{modelValue:s(l).full_name,"onUpdate:modelValue":x[0]||(x[0]=V=>s(l).full_name=V),label:"User name"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(N,{modelValue:s(l).email,"onUpdate:modelValue":x[1]||(x[1]=V=>s(l).email=V),label:"Email"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(N,{modelValue:s(l).salary,"onUpdate:modelValue":x[2]||(x[2]=V=>s(l).salary=V),label:"Salary",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(N,{modelValue:s(l).age,"onUpdate:modelValue":x[3]||(x[3]=V=>s(l).age=V),label:"Age",type:"number"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(N,{modelValue:s(l).start_date,"onUpdate:modelValue":x[4]||(x[4]=V=>s(l).start_date=V),label:"Date"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_e,{modelValue:s(l).status,"onUpdate:modelValue":x[5]||(x[5]=V=>s(l).status=V),items:n,"item-title":"text","item-value":"value",label:"Standard",variant:"underlined",readonly:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]}),_:1}),e(se,null,{default:a(()=>[e(Q),e(O,{color:"error",variant:"outlined",onClick:d},{default:a(()=>[w(" Cancel ")]),_:1}),e(O,{color:"success",variant:"elevated",onClick:W},{default:a(()=>[w(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(re,{modelValue:s(o),"onUpdate:modelValue":x[7]||(x[7]=p=>X(o)?o.value=p:null),"max-width":"500px"},{default:a(()=>[e(ae,null,{default:a(()=>[e(te,null,{default:a(()=>[w(" Are you sure you want to delete this item? ")]),_:1}),e(se,null,{default:a(()=>[e(Q),e(O,{color:"error",variant:"outlined",onClick:I},{default:a(()=>[w(" Cancel ")]),_:1}),e(O,{color:"success",variant:"elevated",onClick:oe},{default:a(()=>[w(" OK ")]),_:1}),e(Q)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),We={class:"d-flex align-center"},Je={key:1},Qe={class:"d-flex flex-column ms-3"},Xe={class:"d-block font-weight-medium text--primary text-truncate"},qe=T({__name:"DemoDataTableGroupingRows",setup(b){const c=[{responsive_id:"",id:1,avatar:M,full_name:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",start_date:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:"Professional"},{responsive_id:"",id:2,avatar:j,full_name:"Bailie Coulman",post:"VP Quality Control",email:"bcoulman1@yolasite.com",city:"Hinigaran",start_date:"05/20/2018",salary:13633.69,age:"63",experience:"3 Years",status:"Professional"},{responsive_id:"",id:3,avatar:g,full_name:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",start_date:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:"Applied"},{responsive_id:"",id:4,avatar:M,full_name:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",start_date:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:"Professional"},{responsive_id:"",id:6,avatar:"",full_name:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",start_date:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:"Current"},{responsive_id:"",id:7,avatar:"",full_name:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",start_date:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:"Rejected"},{responsive_id:"",id:8,avatar:g,full_name:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",start_date:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:"Rejected"},{responsive_id:"",id:9,avatar:P,full_name:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",start_date:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:"Applied"},{responsive_id:"",id:11,avatar:"",full_name:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",start_date:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:"Resigned"},{responsive_id:"",id:12,avatar:"",full_name:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",start_date:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:"Resigned"},{responsive_id:"",id:13,avatar:"",full_name:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",start_date:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:"Resigned"},{responsive_id:"",id:15,avatar:"",full_name:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"Bích Động",start_date:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:"Applied"},{responsive_id:"",id:16,avatar:C,full_name:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",start_date:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:"Applied"},{responsive_id:"",id:17,avatar:"",full_name:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",start_date:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:"Current"},{responsive_id:"",id:18,avatar:"",full_name:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",start_date:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:"Current"},{responsive_id:"",id:19,avatar:C,full_name:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Polýkastro",start_date:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:"Resigned"},{responsive_id:"",id:23,avatar:g,full_name:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",start_date:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:"Applied"},{responsive_id:"",id:26,avatar:P,full_name:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"Cà Mau",start_date:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:"Resigned"},{responsive_id:"",id:28,avatar:"",full_name:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",start_date:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:"Resigned"},{responsive_id:"",id:31,avatar:"",full_name:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebrák",start_date:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:"Applied"}],o=[{title:"Group by status",key:"data-table-group"},{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],m=[{key:"status"}],l=t=>t==="Current"?{color:"primary"}:t==="Professional"?{color:"success"}:t==="Rejected"?{color:"error"}:t==="Resigned"?{color:"warning"}:{color:"info"};return(t,v)=>(u(),y(s(D),{headers:o,items:c,"items-per-page":10,"group-by":m},{"item.full_name":a(({item:n})=>[r("div",We,[e(R,{size:"32",color:n.raw.avatar?"":"primary",class:B(n.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:n.raw.avatar?void 0:"tonal"},{default:a(()=>[n.raw.avatar?(u(),y(Y,{key:0,src:n.raw.avatar},null,8,["src"])):(u(),k("span",Je,i(s(z)(n.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",Qe,[r("span",Xe,i(n.raw.full_name),1),r("small",null,i(n.raw.post),1)])])]),"item.status":a(({item:n})=>[e(L,{color:l(n.raw.status).color,size:"small",class:"font-weight-medium"},{default:a(()=>[w(i(n.raw.status),1)]),_:2},1032,["color"])]),"data-table-group":a(({props:n,item:_,count:h})=>[r("td",null,[e(O,ye(n,{variant:"text",density:"comfortable"}),{default:a(()=>[e(U,{class:"flip-in-rtl",icon:n.icon},null,8,["icon"])]),_:2},1040),r("span",null,i(_.value),1),r("span",null,"("+i(h)+")",1)])]),_:1}))}}),Ze={class:"v-data-table__tr"},ea=["colspan"],aa={class:"my-1"},ta={class:"my-1"},sa={class:"d-flex align-center"},ra={key:1},ia={class:"d-flex flex-column ms-3"},la={class:"d-block font-weight-medium text--primary text-truncate"},oa=T({__name:"DemoDataTableExpandableRows",setup(b){const c=[{title:"",key:"data-table-expand"},{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],o=m=>m===1?{color:"primary",text:"Current"}:m===2?{color:"success",text:"Professional"}:m===3?{color:"error",text:"Rejected"}:m===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(m,l)=>(u(),y(s(D),{headers:c,items:s(G),"items-per-page":5,"expand-on-click":""},{"expanded-row":a(t=>[r("tr",Ze,[r("td",{colspan:c.length},[r("p",aa," City: "+i(t.item.raw.city),1),r("p",ta," Experience: "+i(t.item.raw.experience),1),r("p",null,"Post: "+i(t.item.raw.post),1)],8,ea)])]),"item.full_name":a(({item:t})=>[r("div",sa,[e(R,{size:"32",color:t.raw.avatar?"":"primary",class:B(t.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:t.raw.avatar?void 0:"tonal"},{default:a(()=>[t.raw.avatar?(u(),y(Y,{key:0,src:t.raw.avatar},null,8,["src"])):(u(),k("span",ra,i(s(z)(t.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",ia,[r("span",la,i(t.raw.full_name),1),r("small",null,i(t.raw.post),1)])])]),"item.status":a(({item:t})=>[e(L,{color:o(t.raw.status).color,class:"font-weight-medium",size:"small"},{default:a(()=>[w(i(o(t.raw.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),na={class:"d-flex align-center"},ma={key:1},ca={class:"d-flex flex-column ms-3"},da={class:"d-block font-weight-medium text--primary text-truncate"},ua=T({__name:"DemoDataTableFixedHeader",setup(b){const c=[{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],o=m=>m===1?{color:"primary",text:"Current"}:m===2?{color:"success",text:"Professional"}:m===3?{color:"error",text:"Rejected"}:m===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(m,l)=>(u(),y(s(D),{headers:c,items:s(G),"items-per-page":10,height:"300","fixed-header":""},{"item.full_name":a(({item:t})=>[r("div",na,[e(R,{size:"32",color:t.raw.avatar?"":"primary",class:B(t.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:t.raw.avatar?void 0:"tonal"},{default:a(()=>[t.raw.avatar?(u(),y(Y,{key:0,src:t.raw.avatar},null,8,["src"])):(u(),k("span",ma,i(s(z)(t.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",ca,[r("span",da,i(t.raw.full_name),1),r("small",null,i(t.raw.post),1)])])]),"item.status":a(({item:t})=>[e(L,{color:o(t.raw.status).color,density:"comfortable",size:"small",class:"font-weight-medium"},{default:a(()=>[w(i(o(t.raw.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),pa={class:"d-flex align-center"},va={key:1},fa={class:"d-flex flex-column ms-3"},ya={class:"d-block font-weight-medium text--primary text-truncate"},ga=T({__name:"DemoDataTableRowSelection",setup(b){const c=[{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],o=m=>m===1?{color:"primary",text:"Current"}:m===2?{color:"success",text:"Professional"}:m===3?{color:"error",text:"Rejected"}:m===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(m,l)=>(u(),y(s(D),{headers:c,items:s(G),"items-per-page":5,"show-select":""},{"item.full_name":a(({item:t})=>[r("div",pa,[e(R,{size:"32",color:t.raw.avatar?"":"primary",class:B(t.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:t.raw.avatar?void 0:"tonal"},{default:a(()=>[t.raw.avatar?(u(),y(Y,{key:0,src:t.raw.avatar},null,8,["src"])):(u(),k("span",va,i(s(z)(t.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",fa,[r("span",ya,i(t.raw.full_name),1),r("small",null,i(t.raw.post),1)])])]),"item.status":a(({item:t})=>[e(L,{color:o(t.raw.status).color,density:"comfortable",class:"font-weight-medium",size:"small"},{default:a(()=>[w(i(o(t.raw.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),_a={class:"d-flex align-center"},xa={key:1},ba={class:"d-flex flex-column ms-3"},ha={class:"d-block font-weight-medium text--primary text-truncate"},wa=T({__name:"DemoDataTableCellSlot",setup(b){const c=[{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"SALARY",key:"salary"},{title:"AGE",key:"age"},{title:"STATUS",key:"status"}],o=m=>m===1?{color:"primary",text:"Current"}:m===2?{color:"success",text:"Professional"}:m===3?{color:"error",text:"Rejected"}:m===4?{color:"warning",text:"Resigned"}:{color:"info",text:"Applied"};return(m,l)=>(u(),y(s(D),{headers:c,items:s(G),"items-per-page":5},{"item.full_name":a(({item:t})=>[r("div",_a,[e(R,{size:"32",color:t.raw.avatar?"":"primary",class:B(t.raw.avatar?"":"v-avatar-light-bg primary--text"),variant:t.raw.avatar?void 0:"tonal"},{default:a(()=>[t.raw.avatar?(u(),y(Y,{key:0,src:t.raw.avatar},null,8,["src"])):(u(),k("span",xa,i(s(z)(t.raw.full_name)),1))]),_:2},1032,["color","class","variant"]),r("div",ba,[r("span",ha,i(t.raw.full_name),1),r("small",null,i(t.raw.post),1)])])]),"item.status":a(({item:t})=>[e(L,{color:o(t.raw.status).color,density:"comfortable",class:"font-weight-medium",size:"small"},{default:a(()=>[w(i(o(t.raw.status).text),1)]),_:2},1032,["color"])]),_:1},8,["items"]))}}),Va=T({__name:"DemoDataTableDense",setup(b){const c=[{title:"ID",sortable:!1,key:"id"},{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"EXPERIENCE",key:"experience"},{title:"AGE",key:"age"}];return(o,m)=>(u(),y(s(D),{headers:c,items:s(G),density:"compact","items-per-page":5},null,8,["items"]))}}),ka=T({__name:"DemoDataTableBasic",setup(b){const c=[{title:"ID",sortable:!1,key:"id"},{title:"NAME",key:"full_name"},{title:"EMAIL",key:"email"},{title:"DATE",key:"start_date"},{title:"EXPERIENCE",key:"experience"},{title:"AGE",key:"age"}];return(o,m)=>(u(),y(s(D),{headers:c,items:s(G),"items-per-page":5},null,8,["items"]))}}),Aa={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', sortable: false, key: 'id' },
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  />
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    sortable: false,
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  />
</template>
`},Ta={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Ca={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'ID', sortable: false, key: 'id' },
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'EXPERIENCE', key: 'experience' },
  { title: 'AGE', key: 'age' },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
  />
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'ID',
    sortable: false,
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'EXPERIENCE',
    key: 'experience',
  },
  {
    title: 'AGE',
    key: 'age',
  },
]
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    density="compact"
    :items-per-page="5"
  />
</template>
`},Sa={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

// Headers
const headers = [
  { title: '', key: 'data-table-expand' },
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.raw.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.raw.experience }}
          </p>
          <p>Post: {{ slotProps.item.raw.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: '',
    key: 'data-table-expand',
  },
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    expand-on-click
  >
    <!-- Expanded Row Data -->
    <template #expanded-row="slotProps">
      <tr class="v-data-table__tr">
        <td :colspan="headers.length">
          <p class="my-1">
            City: {{ slotProps.item.raw.city }}
          </p>
          <p class="my-1">
            Experience: {{ slotProps.item.raw.experience }}
          </p>
          <p>Post: {{ slotProps.item.raw.post }}</p>
        </td>
      </tr>
    </template>

    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Da={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import type { Data } from '@/@fake-db/types'
import data from '@/views/demos/forms/tables/data-table/datatable'

const userList = ref<Data[]>([])
const options = ref({ page: 1, itemsPerPage: 5, sortBy: [''], sortDesc: [false] })

// headers
const headers = [
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    @update:options="options = $event"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <VRow>
          <VCol
            lg="2"
            cols="3"
          >
            <VTextField
              v-model="options.itemsPerPage"
              label="Rows per page:"
              type="number"
              min="-1"
              max="15"
              hide-details
              variant="underlined"
            />
          </VCol>

          <VCol
            lg="10"
            cols="9"
            class="d-flex justify-end"
          >
            <VPagination
              v-model="options.page"
              total-visible="5"
              :length="Math.ceil(userList.length / options.itemsPerPage)"
            />
          </VCol>
        </VRow>
      </VCardText>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const userList = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [''],
  sortDesc: [false],
})

// headers
const headers = [
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="options.itemsPerPage"
    :page="options.page"
    @update:options="options = $event"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <VRow>
          <VCol
            lg="2"
            cols="3"
          >
            <VTextField
              v-model="options.itemsPerPage"
              label="Rows per page:"
              type="number"
              min="-1"
              max="15"
              hide-details
              variant="underlined"
            />
          </VCol>

          <VCol
            lg="10"
            cols="9"
            class="d-flex justify-end"
          >
            <VPagination
              v-model="options.page"
              total-visible="5"
              :length="Math.ceil(userList.length / options.itemsPerPage)"
            />
          </VCol>
        </VRow>
      </VCardText>
    </template>
  </VDataTable>
</template>
`},Ea={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    fixed-header
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="10"
    height="300"
    fixed-header
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},Ia={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@core/utils/formatters'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsive_id: '',
    id: 1,
    avatar: avatar8,
    full_name: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsive_id: '',
    id: 2,
    avatar: avatar1,
    full_name: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    start_date: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsive_id: '',
    id: 3,
    avatar: avatar7,
    full_name: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    start_date: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 4,
    avatar: avatar8,
    full_name: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    start_date: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsive_id: '',
    id: 6,
    avatar: '',
    full_name: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    start_date: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsive_id: '',
    id: 7,
    avatar: '',
    full_name: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    start_date: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsive_id: '',
    id: 8,
    avatar: avatar7,
    full_name: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    start_date: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsive_id: '',
    id: 9,
    avatar: avatar2,
    full_name: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    start_date: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 11,
    avatar: '',
    full_name: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    start_date: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 12,
    avatar: '',
    full_name: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    start_date: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 13,
    avatar: '',
    full_name: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    start_date: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 15,
    avatar: '',
    full_name: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    start_date: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 16,
    avatar: avatar4,
    full_name: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    start_date: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 17,
    avatar: '',
    full_name: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    start_date: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsive_id: '',
    id: 18,
    avatar: '',
    full_name: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    start_date: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsive_id: '',
    id: 19,
    avatar: avatar4,
    full_name: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    start_date: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 23,
    avatar: avatar7,
    full_name: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    start_date: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 26,
    avatar: avatar2,
    full_name: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    start_date: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 28,
    avatar: '',
    full_name: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    start_date: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 31,
    avatar: '',
    full_name: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    start_date: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  { title: 'Group by status', key: 'data-table-group' },
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = (status: string) => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"

        size="small"
        class="font-weight-medium"
      >
        {{ item.raw.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <!-- <VBtn v-bind="props" /> -->
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="props.icon"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@core/utils/formatters'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const userList = [
  {
    responsive_id: '',
    id: 1,
    avatar: avatar8,
    full_name: 'Korrie O'Crevy',
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 'Professional',
  },
  {
    responsive_id: '',
    id: 2,
    avatar: avatar1,
    full_name: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    start_date: '05/20/2018',
    salary: 13633.69,
    age: '63',
    experience: '3 Years',
    status: 'Professional',
  },
  {
    responsive_id: '',
    id: 3,
    avatar: avatar7,
    full_name: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    start_date: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 4,
    avatar: avatar8,
    full_name: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    start_date: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 'Professional',
  },
  {
    responsive_id: '',
    id: 6,
    avatar: '',
    full_name: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    start_date: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 'Current',
  },
  {
    responsive_id: '',
    id: 7,
    avatar: '',
    full_name: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    start_date: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 'Rejected',
  },
  {
    responsive_id: '',
    id: 8,
    avatar: avatar7,
    full_name: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    start_date: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 'Rejected',
  },
  {
    responsive_id: '',
    id: 9,
    avatar: avatar2,
    full_name: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    start_date: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 11,
    avatar: '',
    full_name: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    start_date: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 12,
    avatar: '',
    full_name: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    start_date: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 13,
    avatar: '',
    full_name: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    start_date: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 15,
    avatar: '',
    full_name: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    start_date: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 16,
    avatar: avatar4,
    full_name: 'Robinson Brazenor',
    post: 'General Manager',
    email: 'rbrazenorf@symantec.com',
    city: 'Gendiwu',
    start_date: '12/23/2017',
    salary: 11953.08,
    age: '66',
    experience: '6 Years',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 17,
    avatar: '',
    full_name: 'Nadia Bettenson',
    post: 'Environmental Tech',
    email: 'nbettensong@joomla.org',
    city: 'Chabařovice',
    start_date: '07/11/2018',
    salary: 20484.44,
    age: '64',
    experience: '4 Years',
    status: 'Current',
  },
  {
    responsive_id: '',
    id: 18,
    avatar: '',
    full_name: 'Titus Hayne',
    post: 'Web Designer',
    email: 'thayneh@kickstarter.com',
    city: 'Yangon',
    start_date: '05/25/2019',
    salary: 16871.48,
    age: '59',
    experience: '9 Years',
    status: 'Current',
  },
  {
    responsive_id: '',
    id: 19,
    avatar: avatar4,
    full_name: 'Roxie Huck',
    post: 'Administrative Assistant',
    email: 'rhucki@ed.gov',
    city: 'Polýkastro',
    start_date: '04/04/2019',
    salary: 19653.56,
    age: '41',
    experience: '1 Year',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 23,
    avatar: avatar7,
    full_name: 'Rosmunda Steed',
    post: 'Assistant Media Planner',
    email: 'rsteedm@xing.com',
    city: 'Manzanares',
    start_date: '12/23/2017',
    salary: 13778.34,
    age: '21',
    experience: '1 Year',
    status: 'Applied',
  },
  {
    responsive_id: '',
    id: 26,
    avatar: avatar2,
    full_name: 'Morgen Benes',
    post: 'Senior Sales Associate',
    email: 'mbenesp@ted.com',
    city: 'Cà Mau',
    start_date: '04/10/2016',
    salary: 16969.63,
    age: '42',
    experience: '2 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 28,
    avatar: '',
    full_name: 'Kliment McGinney',
    post: 'Chief Design Engineer',
    email: 'kmcginneyr@paginegialle.it',
    city: 'Xiaocheng',
    start_date: '07/09/2018',
    salary: 24027.81,
    age: '28',
    experience: '8 Years',
    status: 'Resigned',
  },
  {
    responsive_id: '',
    id: 31,
    avatar: '',
    full_name: 'Teressa Bleakman',
    post: 'Senior Editor',
    email: 'tbleakmanu@phpbb.com',
    city: 'Žebrák',
    start_date: '09/03/2016',
    salary: 24875.41,
    age: '37',
    experience: '7 Years',
    status: 'Applied',
  },
]

const headers = [
  {
    title: 'Group by status',
    key: 'data-table-group',
  },
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const groupBy = [{ key: 'status' }]

const resolveStatusVariant = status => {
  if (status === 'Current')
    return { color: 'primary' }
  else if (status === 'Professional')
    return { color: 'success' }
  else if (status === 'Rejected')
    return { color: 'error' }
  else if (status === 'Resigned')
    return { color: 'warning' }
  else
    return { color: 'info' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    :group-by="groupBy"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"

        size="small"
        class="font-weight-medium"
      >
        {{ item.raw.status }}
      </VChip>
    </template>

    <template #data-table-group="{ props, item, count }">
      <!-- <VBtn v-bind="props" /> -->
      <td>
        <VBtn
          v-bind="props"
          variant="text"
          density="comfortable"
        >
          <VIcon
            class="flip-in-rtl"
            :icon="props.icon"
          />
        </VBtn>

        <span>{{ item.value }}</span>
        <span>({{ count }})</span>
      </td>
    </template>
  </VDataTable>
</template>
`},Ya={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import type { SalesDetails } from '@/@fake-db/types'
import axios from '@axios'

const search = ref('')
const productList = ref<SalesDetails[]>([])

// headers
const headers = [
  { title: 'PRODUCT', key: 'product.name' },
  { title: 'DATE', key: 'date' },
  { title: 'CATEGORY', key: 'product.category' },
  { title: 'BUYERS', key: 'buyer.name' },
  { title: 'PAYMENT', key: 'payment', sortable: false },
  { title: 'STATUS', key: 'status', sortable: false },
  { title: 'DELETE', key: 'delete', sortable: false },
]

// 👉 methods
const deleteItem = (itemId: number) => {
  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  { name: 'Mouse', icon: 'tabler-mouse', color: 'warning' },
  { name: 'Glass', icon: 'tabler-eyeglass', color: 'primary' },
  { name: 'Smart Watch', icon: 'tabler-device-watch', color: 'success' },
  { name: 'Bag', icon: 'tabler-briefcase', color: 'info' },
  { name: 'Storage Device', icon: 'tabler-device-audio-tape', color: 'warning' },
  { name: 'Bluetooth', icon: 'tabler-bluetooth', color: 'error' },
  { name: 'Gaming', icon: 'tabler-device-gamepad-2', color: 'warning' },
  { name: 'Home', icon: 'tabler-home', color: 'error' },
  { name: 'VR', icon: 'tabler-badge-vr', color: 'primary' },
  { name: 'Shoes', icon: 'tabler-shoe', color: 'success' },
  { name: 'Electronics', icon: 'tabler-cpu', color: 'info' },
  { name: 'Projector', icon: 'tabler-theater', color: 'warning' },
  { name: 'IPod', icon: 'tabler-device-airpods', color: 'error' },
  { name: 'Keyboard', icon: 'tabler-keyboard', color: 'primary' },
  { name: 'Smart Phone', icon: 'tabler-device-mobile', color: 'success' },
  { name: 'Smart TV', icon: 'tabler-device-tv', color: 'info' },
  { name: 'Google Home', icon: 'tabler-brand-google', color: 'warning' },
  { name: 'Mac', icon: 'tabler-brand-apple', color: 'error' },
  { name: 'Headphone', icon: 'tabler-headphones', color: 'primary' },
  { name: 'IMac', icon: 'tabler-device-imac', color: 'success' },
  { name: 'IPhone', icon: 'tabler-brand-apple', color: 'warning' },
]

const resolveStatusColor = (status: string) => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = (categoryName: string): {
  icon: string
  color: string }[] => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)

  if (index !== -1)
    return [{ icon: categoryIcons[index].icon, color: categoryIcons[index].color }]

  return [{ icon: 'mdi-help-circle-outline', color: 'primary' }]
}

onMounted(() => {
  axios.get('pages/datatables').then(res => {
    productList.value = res.data
  })
})
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <AppTextField
            v-model="search"
            density="compact"
            placeholder="Search"
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.raw.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text--primary">{{ item.raw.product.name }}</span>
            <span class="text-xs">{{ item.raw.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.raw.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="20"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.raw.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.raw.avatar ? 'primary' : undefined"
            :variant="!item.raw.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.raw.buyer.avatar"
              :src="item.raw.buyer.avatar"
            />
            <span v-else>{{ item.raw.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text--primary ms-2">{{ item.raw.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-primary font-weight-medium">\${{ item.raw.payment.paid_amount }}</span>
            <span v-if="item.raw.payment.paid_amount !== item.raw.payment.total">/{{ item.raw.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.raw.payment.received_payment_status }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.raw.payment.status)"
          :class="\`text-\${resolveStatusColor(item.raw.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.raw.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn @click="deleteItem(item.raw.product.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import axios from '@axios'

const search = ref('')
const productList = ref([])

// headers
const headers = [
  {
    title: 'PRODUCT',
    key: 'product.name',
  },
  {
    title: 'DATE',
    key: 'date',
  },
  {
    title: 'CATEGORY',
    key: 'product.category',
  },
  {
    title: 'BUYERS',
    key: 'buyer.name',
  },
  {
    title: 'PAYMENT',
    key: 'payment',
    sortable: false,
  },
  {
    title: 'STATUS',
    key: 'status',
    sortable: false,
  },
  {
    title: 'DELETE',
    key: 'delete',
    sortable: false,
  },
]

const deleteItem = itemId => {
  const index = productList.value.findIndex(item => item.product.id === itemId)

  productList.value.splice(index, 1)
}

const categoryIcons = [
  {
    name: 'Mouse',
    icon: 'tabler-mouse',
    color: 'warning',
  },
  {
    name: 'Glass',
    icon: 'tabler-eyeglass',
    color: 'primary',
  },
  {
    name: 'Smart Watch',
    icon: 'tabler-device-watch',
    color: 'success',
  },
  {
    name: 'Bag',
    icon: 'tabler-briefcase',
    color: 'info',
  },
  {
    name: 'Storage Device',
    icon: 'tabler-device-audio-tape',
    color: 'warning',
  },
  {
    name: 'Bluetooth',
    icon: 'tabler-bluetooth',
    color: 'error',
  },
  {
    name: 'Gaming',
    icon: 'tabler-device-gamepad-2',
    color: 'warning',
  },
  {
    name: 'Home',
    icon: 'tabler-home',
    color: 'error',
  },
  {
    name: 'VR',
    icon: 'tabler-badge-vr',
    color: 'primary',
  },
  {
    name: 'Shoes',
    icon: 'tabler-shoe',
    color: 'success',
  },
  {
    name: 'Electronics',
    icon: 'tabler-cpu',
    color: 'info',
  },
  {
    name: 'Projector',
    icon: 'tabler-theater',
    color: 'warning',
  },
  {
    name: 'IPod',
    icon: 'tabler-device-airpods',
    color: 'error',
  },
  {
    name: 'Keyboard',
    icon: 'tabler-keyboard',
    color: 'primary',
  },
  {
    name: 'Smart Phone',
    icon: 'tabler-device-mobile',
    color: 'success',
  },
  {
    name: 'Smart TV',
    icon: 'tabler-device-tv',
    color: 'info',
  },
  {
    name: 'Google Home',
    icon: 'tabler-brand-google',
    color: 'warning',
  },
  {
    name: 'Mac',
    icon: 'tabler-brand-apple',
    color: 'error',
  },
  {
    name: 'Headphone',
    icon: 'tabler-headphones',
    color: 'primary',
  },
  {
    name: 'IMac',
    icon: 'tabler-device-imac',
    color: 'success',
  },
  {
    name: 'IPhone',
    icon: 'tabler-brand-apple',
    color: 'warning',
  },
]

const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}

const categoryIconFilter = categoryName => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)
  if (index !== -1)
    return [{
      icon: categoryIcons[index].icon,
      color: categoryIcons[index].color,
    }]
  
  return [{
    icon: 'mdi-help-circle-outline',
    color: 'primary',
  }]
}

onMounted(() => {
  axios.get('pages/datatables').then(res => {
    productList.value = res.data
  })
})
<\/script>

<template>
  <div>
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
        >
          <AppTextField
            v-model="search"
            density="compact"
            placeholder="Search"
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="productList"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap"
    >
      <!-- product -->
      <template #item.product.name="{ item }">
        <div class="d-flex align-center">
          <div>
            <VImg
              :src="item.raw.product.image"
              height="40"
              width="40"
            />
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text--primary">{{ item.raw.product.name }}</span>
            <span class="text-xs">{{ item.raw.product.brand }}</span>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #item.product.category="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            v-for="(category, index) in categoryIconFilter(item.raw.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            variant="tonal"
          >
            <VIcon
              size="20"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </VIcon>
          </VAvatar>
          <span class="ms-1 text-no-wrap">{{ item.raw.product.category }}</span>
        </div>
      </template>

      <!-- buyer -->
      <template #item.buyer.name="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="1.875rem"
            :color="!item.raw.avatar ? 'primary' : undefined"
            :variant="!item.raw.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="item.raw.buyer.avatar"
              :src="item.raw.buyer.avatar"
            />
            <span v-else>{{ item.raw.buyer.name.slice(0, 2).toUpperCase() }}</span>
          </VAvatar>
          <span class="text-no-wrap font-weight-medium text--primary ms-2">{{ item.raw.buyer.name }}</span>
        </div>
      </template>

      <!-- Payment -->
      <template #item.payment="{ item }">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="text-primary font-weight-medium">\${{ item.raw.payment.paid_amount }}</span>
            <span v-if="item.raw.payment.paid_amount !== item.raw.payment.total">/{{ item.raw.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.raw.payment.received_payment_status }}</span>
        </div>
      </template>

      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.raw.payment.status)"
          :class="\`text-\${resolveStatusColor(item.raw.payment.status)}\`"
          size="small"
          class="font-weight-medium"
        >
          {{ item.raw.payment.status }}
        </VChip>
      </template>

      <!-- Delete -->
      <template #item.delete="{ item }">
        <IconBtn @click="deleteItem(item.raw.product.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </template>
    </VDataTable>
  </div>
</template>
`},Ra={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import type { Data } from '@/@fake-db/types'
import data from '@/views/demos/forms/tables/data-table/datatable'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref<Data>({
  responsive_id: '',
  id: -1,
  avatar: '',
  full_name: '',
  post: '',
  email: '',
  city: '',
  start_date: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref<Data>(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref<Data[]>([])

// status options
const selectedOptions = [
  { text: 'Current', value: 1 },
  { text: 'Professional', value: 2 },
  { text: 'Rejected', value: 3 },
  { text: 'Resigned', value: 4 },
  { text: 'Applied', value: 5 },
]

// headers
const headers = [
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
  { title: 'ACTIONS', key: 'actions' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}

// 👉 methods
const editItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = (item: Data) => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)

  else
    userList.value.push(editedItem.value)

  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="editItem(item.raw)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn @click="deleteItem(item.raw)">
          <VIcon icon="mdi-delete-outline" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard>
      <VCardTitle>
        <span class="headline">Edit Item</span>
      </VCardTitle>

      <VCardText>
        {{ editedItem?.full_name }}
        <VContainer>
          <VRow>
            <!-- full_name -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.full_name"
                label="User name"
              />
            </VCol>

            <!-- email -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.email"
                label="Email"
              />
            </VCol>

            <!-- salary -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.salary"
                label="Salary"
                prefix="$"
                type="number"
              />
            </VCol>

            <!-- age -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.age"
                label="Age"
                type="number"
              />
            </VCol>

            <!-- start date -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.start_date"
                label="Date"
              />
            </VCol>

            <!-- status -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VSelect
                v-model="editedItem.status"
                :items="selectedOptions"
                item-title="text"
                item-value="value"
                label="Standard"
                variant="underlined"
                readonly
              />
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="close"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="save"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard>
      <VCardTitle>
        Are you sure you want to delete this item?
      </VCardTitle>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="closeDelete"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="deleteItemConfirm"
        >
          OK
        </VBtn>

        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const editDialog = ref(false)
const deleteDialog = ref(false)

const defaultItem = ref({
  responsive_id: '',
  id: -1,
  avatar: '',
  full_name: '',
  post: '',
  email: '',
  city: '',
  start_date: '',
  salary: -1,
  age: '',
  experience: '',
  status: -1,
})

const editedItem = ref(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref([])

// status options
const selectedOptions = [
  {
    text: 'Current',
    value: 1,
  },
  {
    text: 'Professional',
    value: 2,
  },
  {
    text: 'Rejected',
    value: 3,
  },
  {
    text: 'Resigned',
    value: 4,
  },
  {
    text: 'Applied',
    value: 5,
  },
]

// headers
const headers = [
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
  {
    title: 'ACTIONS',
    key: 'actions',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}

const editItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  editDialog.value = true
}

const deleteItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)
  else
    userList.value.push(editedItem.value)
  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
<\/script>

<template>
  <!-- 👉 Datatable  -->
  <VDataTable
    :headers="headers"
    :items="userList"
    :items-per-page="5"
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <!-- avatar -->
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>

        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>

    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="editItem(item.raw)">
          <VIcon icon="mdi-pencil-outline" />
        </IconBtn>
        <IconBtn @click="deleteItem(item.raw)">
          <VIcon icon="mdi-delete-outline" />
        </IconBtn>
      </div>
    </template>
  </VDataTable>

  <!-- 👉 Edit Dialog  -->
  <VDialog
    v-model="editDialog"
    max-width="600px"
  >
    <VCard>
      <VCardTitle>
        <span class="headline">Edit Item</span>
      </VCardTitle>

      <VCardText>
        {{ editedItem?.full_name }}
        <VContainer>
          <VRow>
            <!-- full_name -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.full_name"
                label="User name"
              />
            </VCol>

            <!-- email -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.email"
                label="Email"
              />
            </VCol>

            <!-- salary -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.salary"
                label="Salary"
                prefix="$"
                type="number"
              />
            </VCol>

            <!-- age -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.age"
                label="Age"
                type="number"
              />
            </VCol>

            <!-- start date -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VTextField
                v-model="editedItem.start_date"
                label="Date"
              />
            </VCol>

            <!-- status -->
            <VCol
              cols="12"
              sm="6"
              md="4"
            >
              <VSelect
                v-model="editedItem.status"
                :items="selectedOptions"
                item-title="text"
                item-value="value"
                label="Standard"
                variant="underlined"
                readonly
              />
            </VCol>
          </VRow>
        </VContainer>
      </VCardText>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="close"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="save"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- 👉 Delete Dialog  -->
  <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard>
      <VCardTitle>
        Are you sure you want to delete this item?
      </VCardTitle>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="closeDelete"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="deleteItemConfirm"
        >
          OK
        </VBtn>

        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Pa={ts:`<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  { title: 'NAME', key: 'full_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'DATE', key: 'start_date' },
  { title: 'SALARY', key: 'salary' },
  { title: 'AGE', key: 'age' },
  { title: 'STATUS', key: 'status' },
]

const resolveStatusVariant = (status: number) => {
  if (status === 1)
    return { color: 'primary', text: 'Current' }
  else if (status === 2)
    return { color: 'success', text: 'Professional' }
  else if (status === 3)
    return { color: 'error', text: 'Rejected' }
  else if (status === 4)
    return { color: 'warning', text: 'Resigned' }
  else
    return { color: 'info', text: 'Applied' }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`,js:`<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { avatarText } from '@/@core/utils/formatters'
import data from '@/views/demos/forms/tables/data-table/datatable'

const headers = [
  {
    title: 'NAME',
    key: 'full_name',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  {
    title: 'DATE',
    key: 'start_date',
  },
  {
    title: 'SALARY',
    key: 'salary',
  },
  {
    title: 'AGE',
    key: 'age',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
]

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'primary',
      text: 'Current',
    }
  else if (status === 2)
    return {
      color: 'success',
      text: 'Professional',
    }
  else if (status === 3)
    return {
      color: 'error',
      text: 'Rejected',
    }
  else if (status === 4)
    return {
      color: 'warning',
      text: 'Resigned',
    }
  else
    return {
      color: 'info',
      text: 'Applied',
    }
}
<\/script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
    show-select
  >
    <!-- full name -->
    <template #item.full_name="{ item }">
      <div class="d-flex align-center">
        <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
        >
          <VImg
            v-if="item.raw.avatar"
            :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
        </VAvatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text--primary text-truncate">{{ item.raw.full_name }}</span>
          <small>{{ item.raw.post }}</small>
        </div>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        density="comfortable"
        class="font-weight-medium"
        size="small"
      >
        {{ resolveStatusVariant(item.raw.status).text }}
      </VChip>
    </template>
  </VDataTable>
</template>
`},yt=T({__name:"data-table",setup(b){return(c,o)=>{const m=ka,l=xe,t=Va,v=wa,n=ga,_=ua,h=oa,E=qe,$=Ke,d=je,I=Me;return u(),y(K,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Basic",code:Aa},{default:a(()=>[e(m)]),_:1},8,["code"])]),_:1}),e(f,null,{default:a(()=>[e(l,{title:"Dense",code:Ca},{default:a(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Cell Slot",code:Ta},{default:a(()=>[e(v)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Row Selection",code:Pa},{default:a(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Fixed Header",code:Ea},{default:a(()=>[e(_)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Expandable Rows",code:Sa},{default:a(()=>[e(h)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Grouping Rows",code:Ia},{default:a(()=>[e(E)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Row Editing via Dialog",code:Ra},{default:a(()=>[e($)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"External Pagination",code:Da},{default:a(()=>[e(d)]),_:1},8,["code"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(l,{title:"Kitchen Sink",code:Ya},{default:a(()=>[e(I)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{yt as default};
