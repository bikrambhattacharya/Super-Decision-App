class VisibilityToggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            visibilityState:false
        };
    }
    toggle()
    {
        this.setState((prevState)=>{
            return{
            visibilityState: !prevState.visibilityState
            }
        });
    }
    render()
    {
        return (
            <div>
            <button onClick={this.toggle}>{
                this.state.visibilityState ? 'hide details':'show details'
            }</button>
            {
                           this.state.visibilityState &&(
                               <p>hello world</p>
                           )
                       } 
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
// const appRoot = document.getElementById('app');
// let visibilityState=false;
// const toggle= () =>{
//     visibilityState=!visibilityState;
//     render();
// };
// const render= () =>
// { 
// const template=
// (
//     <div>
//        <h1>Visibility Control</h1>
//        <button onClick={toggle}>
//        {
//                 visibilityState ? 'Hide details':'Show details'
//        }
//        </button>
//        {
//            visibilityState &&(
//                <p>hello world</p>
//            )
//        }
//     </div>
// );
// ReactDOM.render(template,appRoot);
// };
// render();