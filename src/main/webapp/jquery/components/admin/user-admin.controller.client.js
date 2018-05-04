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
		var user = {
				username: username,
				password: password
		};
		console.log(user);
	}
})();