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
		console.log(noteData)
		formData.append('name', noteData.name)
		formData.append('description', noteData.description)
		formData.append('archive', noteData.archive)

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