(function(){
	$(init);
	
	var $usernameFld, $passwordFld;
	var $createBtn;
	
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
		console.log(user);
	}
})();