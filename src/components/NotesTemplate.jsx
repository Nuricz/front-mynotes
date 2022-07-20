import React from 'react';
import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import FormNote from './FormNote';
import { Button } from 'react-bootstrap';
import { saveNote, getNotes, deleteNote, updateNote, getCategories, createCategory, deleteCategory } from '../services';
import CategoriesDropdown from './CategoriesDropdown'
import CategoryForm from './CategoryForm';

const NotesTemplate = ({ archive }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleCloseNoteForm = () => setShow(false);
  
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const handleCloseCategoryForm = () => setShowCategoryForm(false);
  const handleOpenCategoryForm = () => setShowCategoryForm(true);

  const [selectedCategory, setSelectedCategory] = useState(0)
  
  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const handleSubmit = async (data) => {
    await saveNote(data)
    loadNotes()
  }

  const handleSubmitCategory = async (data) => {
    console.log(data)
    await createCategory(data.name)
    loadCategories()
  }

  const handleDelete = async (noteID) => {
			await deleteNote(noteID)
      loadNotes()
	}

  const handleEdit = async (data, noteID) => {
    await updateNote(data, noteID)
    loadNotes()
  }

  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);

  async function loadNotes() {
    const response = await getNotes()

    if (response.status === 200) {
      console.log(response)
      setNotes(response.data)
    }
  }

  async function loadCategories() {
    const response = await getCategories()

    if (response.status === 200) {
      setCategories(response.data)
    }
  }

  useEffect(() => {
    loadNotes()
    loadCategories()
  }, []);

  const editNote = {
    name: '',
    description: '',
    archive: false,
    category: [],
  }

  return (
    <>
    <Button onClick={handleShow}>Add Note</Button>
    <Button onClick={handleOpenCategoryForm}>Add Category</Button>
    <CategoriesDropdown 
      categories={categories} 
      handleOpenCategoryForm={handleOpenCategoryForm}
      handleChangeCategory={handleChangeCategory}
    />
    <div className='container d-flex justify-content-center'>
      { show ?
        <FormNote
          handleCloseNoteForm={handleCloseNoteForm}
          show={show}
          handleSubmit={handleSubmit}
          editNote={editNote}
          handleEdit={handleEdit}
          categoriesList={categories}
        />
      : null }
      { showCategoryForm ? 
        <CategoryForm 
          handleCloseCategoryForm={handleCloseCategoryForm} 
          showCategoryForm={showCategoryForm} 
          handleSubmitCategory={handleSubmitCategory}
        /> 
      : null }
      {notes ? (
        <NoteList 
          notes={notes} 
          archive={archive} 
          handleDelete={handleDelete} 
          handleShow={handleShow} 
          handleEdit={handleEdit}
          categoriesList={categories}
          selectedCategory={selectedCategory}
        />
        ) : (
          'Cargando'
          )}
    </div>
    </>
  )
}

export default NotesTemplate;