import React, { useEffect, useState } from "react";
import SavedCard from "./SavedCard";

function Saved({id}){
    const[scholar, setScholar] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9292/saved_scholarships')
        .then(response => response.json())
        .then(data => setScholar(data))
    },[scholar]);

    function handleDelete(n){
        const filtered = scholar.filter(item => item.id !== n)
        setScholar(filtered)
    }

    // console.log(scholar)
    const newSaved = scholar.filter((item) => {
        return item.user.id === id
        // if (item.user.id === id ){
        //     return item
        // } 

    })
    const saved_s = newSaved.map((it,index) =>{
        return <SavedCard key={index} name = {it.scholarship.name} description={it.scholarship.description} organizer={it.scholarship.organizer} deadline = {it.scholarship.deadline} link={it.scholarship.link} id={it.id} handleDelete ={handleDelete}/>
    })
    console.log(saved_s)
    // const saved = <Card key={data[0].id} name={data[0].scholarship.name} description={data[0].scholarship.description} organizer={data[0].scholarship.organizer} deadline={data[0].scholarship.deadline} link={data[0].scholarship.link} />

    return <div className="card" id="saves">{saved_s}</div>
}
export default Saved