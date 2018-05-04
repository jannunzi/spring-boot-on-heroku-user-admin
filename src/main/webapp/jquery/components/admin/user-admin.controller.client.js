(function(){
	$(init);
	
	var $usernameFld, $passwordFld;
	var $createBtn;
	var userService = new UserService();
	
	function init() {
		$usernameFld = $("#usernameFld");
		$passwordFld = $("#passwordFld");
		$createBtn = $("#createBtn");

		$createBtn.click(createUser);
	}

	function createUser() {
		var username = $usernameFld.val();
		var password = $usernameFld.val();
		var user = new User(username, password);
		userService.createUser(user);
	}
})();