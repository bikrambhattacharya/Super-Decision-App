const appRoot = document.getElementById('app');
let visibilityState=false;
const toggle= () =>{
    visibilityState=!visibilityState;
    render();
};
const render= () =>
{ 
const template=
(
    <div>
       <h1>Visibility Control</h1>
       <button onClick={toggle}>
       {
                visibilityState ? 'Hide details':'Show details'
       }
       </button>
       {
           visibilityState &&(
               <p>hello world</p>
           )
       }
    </div>
);
ReactDOM.render(template,appRoot);
};
render();