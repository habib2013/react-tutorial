import React, { Component } from 'react';
import  Like  from "./common/like";
import TableHeader from './common/tableHeader';
class MoviesTable extends Component {

columns = [
   {path:'title',label: 'Title'},
   {path:'genre.name',label: 'Genre'},
   {path:'numberInStock',label: 'Stock'},
   {path:'dailyRentalRate',label: 'Rate'},
   {key:'like'},
   {key:'delete'},
];

   render() { 
    
      const {movies,onDelete,onLike,sortColumn,onSort,} = this.props;
      
         return ( 
            <table className="container table">
        <TableHeader 
        columns = {this.columns}
        sortColumn = {sortColumn}
        onSort = {onSort}
        />
         <tbody>
          
               {movies.map(item => 
            <tr key={item._id}>
        <td >{item.title}</td>
               <td >{item.genre.name}</td>
               <td >{item.numberInStock}</td> 
               <td >{item.dailyRentalRate}</td> 
               <td>
                  <Like liked={item.liked} onClick={() => onLike(item)}/>
               </td>
                <td><button className="btn btn-danger" onClick={()=> onDelete(item)}>DELETE</button></td>  
                  </tr>
               )}
         </tbody>
      </table>
          );
   }
}
 
export default MoviesTable;