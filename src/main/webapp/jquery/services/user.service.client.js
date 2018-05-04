function UserService() {
	this.url = '/api/user';
	this.createUser = createUser;
	
	var self = this;
	
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