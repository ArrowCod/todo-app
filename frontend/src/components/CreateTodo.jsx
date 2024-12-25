import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDiscription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br/>
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDiscription(e.target.value);
        }}></input> <br/>
        
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo",{

                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }

            }).then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }} >Add a Todo</button>
    </div>
}