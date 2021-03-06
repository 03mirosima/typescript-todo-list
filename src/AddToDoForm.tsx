import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddToDoFormProps {
  addTodo: AddTodo;
}

const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <div>
      <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add To Do
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
