function UserService() {
	this.url = '/api/user';
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.deleteUser = deleteUser;
	
	var self = this;

	function deleteUser(userId) {
		return fetch(self.url + '/' + userId, {
			method: 'DELETE'
		});
	}
	
	function findAllUsers() {
		return fetch(self.url)
			.then(function(response) {
				return response.json();
			})
	}

	function createUser(user) {
		return fetch(self.url, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
		      'content-type': 'application/json'
		    }
		});
	}
}