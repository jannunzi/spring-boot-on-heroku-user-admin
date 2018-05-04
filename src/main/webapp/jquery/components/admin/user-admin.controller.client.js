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

	}
})();