import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Curd() {
  const [first,setFirst] = useState("")
  const [last,setLast] = useState("")
  const [allData,setAllData] = useState([])
   
  const SaveData = () => {
     if( first ) {
       const change = [...allData,{FirstName : first ,LastName : last}]
       setAllData(change)
     }  
  }
  const DeleteAllData = () => {
    setAllData([]) 
  }

  return (
    <div className="container p-4" style={{border:'2px solid',backgroundColor:'black',color: 'white',width:'40%',fontSize : '20px',borderRadius:'10px',letterSpacing : '2px'}}>
        <div className="row">
            <div className="col text-center mb-4">
               <h2>Curd Operation</h2>
            </div>
        </div>
        <div className="row justify-content-center"> 
            <div className="col">
               <span>First Name</span>
            </div>
            <div className="col">
               <input type="text" value={first} 
                  onChange={ (e) => setFirst(e.target.value) } className="ps-4" style={{width:'400px'}}/>  
            </div>
        </div>
        <div className="row py-3">
            <div className="col">
               <span>Last Name</span>
            </div>
            <div className="col">
               <input type="text" value={last} 
                  onChange={ (e) => setLast(e.target.value) } className="ps-4" style={{width:'400px'}}/>
            </div>
            <div className="row py-3 m-auto">
               <div className="col btn-group">
                  <button className="btn btn-outline-light btn-sm" onClick={() => SaveData()}>Save</button>
                  <button className="btn btn-outline-light btn-sm" onClick={ () => {
                     return (
                        setFirst(""),
                        setLast("")
                     )
                  }}>Clear</button>
                  <button className="btn btn-outline-light btn-sm" onClick={() => DeleteAllData()}>Delete All</button>
               </div>
            </div>
        </div>
        <table className="table table-hover table-streped table-bordered table-responsive">
            <thead className="thead-light">
               <tr>
                  <th>S.No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody className="tbl">
               {
                 allData.map( ( dt, index ) => {
                    return (
                       <tr>
                          <td>{index+1}</td>
                          <td>{dt.FirstName}</td>
                          <td>{dt.LastName}</td>
                          <td>
                              <button className="btn btn-outline-secondary btn-sm me-1"
                              onClick={ () => {
                                 return (
                                    setFirst(allData[[index]].FirstName),
                                    setLast(allData[[index]].LastName)
                                 )
                              } }
                              >Update</button>
                              <button className="btn btn-outline-secondary btn-sm"
                              onClick={ () => {
                                return (
                                   setAllData(allData.filter( (dt,ind) => ind!==index))
                                )
                             } }>Delete</button>
                          </td>
                       </tr>
                    )
                 })
               }
            </tbody>
        </table>
   </div>
  );
}

export default Curd;
