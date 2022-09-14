import React from "react";

function SavedCard({name,organizer,deadline,description, link,id, handleDelete}){
    function handleClick(e){
        
        fetch(`https://guarded-earth-32848.herokuapp.com/saved_scholarships/${id}`,{
            method:"DELETE",
        })
        .then(resp => resp.json())
        .then((data) => handleDelete(id))
        
    }
    return(
        <div className="scholar">
            <h2>{name}</h2>
            <h3> Organizer: {organizer}</h3>
            <p>Deadline: {deadline}</p>
            <p>{description}</p>

            <div id="btns" className="buttons">
                <a href={link} targe="_blank" rel="noreferrer">Apply now</a>
                <p className="btns" onClick={handleClick}>Discard</p>
            </div>
        </div>
    )
}

export default SavedCard