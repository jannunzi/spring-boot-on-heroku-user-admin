(function(){
	$(init);
	
	var $usernameFld, $passwordFld;
	var $createBtn;
	var $userRecordTemplate;
	var $tbody;
	var userService = new UserService();
	
	function init() {
		$usernameFld = $("#usernameFld");
		$passwordFld = $("#passwordFld");
		$createBtn = $("#createBtn");
		$tbody = $("tbody");
		$userRecordTemplate = $(".userRecordTemplate");

		$createBtn.click(createUser);

		findAllUsers();
	}

	function findAllUsers() {
		userService
			.findAllUsers()
			.then(renderUsers);
	}

	function renderUsers(users) {
		$tbody.empty();
		users.forEach(function(user) {
			$userRow = $userRecordTemplate.clone();
			$userRow.removeClass("userRecordTemplate");
			$userRow.find(".usernameTemplate").html(user.username);
			$userRow.find(".passwordTemplate").html(user.password);
			$tbody.append($userRow);
		});
	}

	function createUser() {
		var username = $usernameFld.val();
		var password = $usernameFld.val();
		var user = new User(username, password);
		userService.createUser(user);
	}
})();