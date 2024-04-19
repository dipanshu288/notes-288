import React, {useState} from 'react'

function List(){

    const [list, setList] = useState(["Example Note"]);
    const [newNote, setNewNote] = useState("");

    function handleAddNoteInput(event){
        setNewNote(event.target.value);
    }

    function handleAddNote(){
        if(newNote.trim() !== ""){
            setList(l => [...l, newNote]);
            setNewNote("");
        }
        
    }

    function handleRemoveNote(index){
        const updatedList = list.filter((_, i) => i !==index);
        setList(updatedList); 
    }

    function handleNoteUp(index) {
        if (index > 0){
            const updatedList = [...list];
            [updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]];
            setList(updatedList);
        }
    }

    function handleNoteDown(index) {
        if (index < list.length - 1){
            const updatedList = [...list];
            [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]];
            setList(updatedList);
        }
        
    }

    return (
        <>
            <h1>Notes</h1>
            <ul>
                {list.map((note, index) => 
                <li key={index}>
                    <div className='note'>
                        <span>{note}</span>
                        <div className='list-buttons'>
                            <button className='move-button' onClick={() => handleNoteUp(index)}>Move Up</button>
                            <button className='move-button' onClick={() => handleNoteDown(index)}>Move Down</button>
                            <button className='delete-button' onClick={() => handleRemoveNote(index)}>Delete</button>
                        </div>
                    </div>
                </li>
                )}
                <li id="add-note">
                    <div className='note'>
                        <textarea onChange={handleAddNoteInput} type='text' value={newNote} id='add-note-input' placeholder='Enter Note'/>
                        <div>
                            <button className='add-button' onClick={handleAddNote}>Add Note</button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default List;