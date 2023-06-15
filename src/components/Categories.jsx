import React from 'react';

export class Categories  extends React.Component{
    state={
        activeItems:3,
    };

    onSelectItem=(index)=>{
       this.setState({
           activeItems:index
       })
    }

   render() {
       const {onClick,items}=this.props
       return (
           <div className="categories">
               <ul>
                   <li >Все</li>
                   {items.map((name,index)=> (
                       <li
                           className={this.state.activeItems===index?"active":''}
                           key={`${name}_${index}`}
                           onClick={()=>this.onSelectItem(index)}
                       >{name}</li>))}
               </ul>
           </div>
       );
   }
}

/*export const Categories = ({items,onClick}) => {
    console.log(items)
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name,index)=> (
                    <li
                        key={`${name}_${index}`}
                        onClick={()=>onClick(name)}
                    >{name}</li>))}
            </ul>
        </div>
    );
};*/

