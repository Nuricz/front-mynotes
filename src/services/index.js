import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getNotes() {
	try {
		const response = await axios({
			url: `${baseUrl}/notes`,
			method: 'GET'
		})
		return response
	} catch (e) {
		console.log(e)
	}
}

export async function saveNote(noteData) {
	try {
		const formData = new FormData();
		let categories = noteData.categories.map(({id}) => id)
		formData.append('name', noteData.name)
		formData.append('description', noteData.description)
		formData.append('archive', noteData.archive)
		formData.append('categories', categories)
		
		const response = await axios({
			url: `${baseUrl}/notes`,
			method: 'POST',
			data: formData,
		})
		return response
	} catch (e) {
		console.log(e)
	}
}

export async function deleteNote(noteID) {
	try {
		const response = await axios({
			url: `${baseUrl}/notes/${noteID}`,
			method: 'DELETE'
		})
		return response
	} catch (e) {
		console.log(e)
	}
}

export async function updateNote(noteData, noteID) {
	try {
		const formData = new FormData();
		let categories = noteData.categories.map(({id}) => id)
		formData.append('name', noteData.name)
		formData.append('description', noteData.description)
		formData.append('archive', noteData.archive)
		formData.append('categories', categories)

		const response = await axios({
			url: `${baseUrl}/notes/${noteID}`,
			method: 'PUT',
			data: formData,
		})
		return response
	} catch (e) {
		console.log(e)
	}
}

export async function getCategories() {
	try {
		const response = await axios({
			url: `${baseUrl}/categories`,
			method: 'GET'
		})
		console.log(response)
		return response
	} catch (e) {
		console.log(e)
	}
}

export async function createCategory(categoryName) {
	try {
		const formData = new FormData();
		formData.append('name', categoryName)

		const response = await axios({
			url: `${baseUrl}/categories`,
			method: 'POST',
			data: formData,
		})
		return response
	} catch (e) {
		console.log(e)
	}
}