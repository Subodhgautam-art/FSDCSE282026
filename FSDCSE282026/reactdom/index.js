//console.log("hello")
const container=document.getElementById('root');
console.log(container)
const root = ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React');
const h1=React.createElement('h2',{style:{color:'brown',backgroundColor:'white'}},'Abes Engineering college');
const img=React.createElement('img',{src:'https://tse4.mm.bing.net/th/id/OIP.aELimwOIEBtiAfEw5hAhQwHaGU?r=0&pid=Api&P=0&h=180',style:{height:'300px',width:'300px',borderRadius:'50px'}});
const Name=React.createElement('Name',{},'Name-Subodh gautam');
const year=React.createElement('year',{},'year-3rd');
const language=React.createElement('language',{},'lang-java');
const div=React.createElement('div',{style:{border:'2px dotted black',height:'500px',width:'700px'}},h1,h2,img,Name,year,language);
root.render(div);