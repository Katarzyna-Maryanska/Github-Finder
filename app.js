// Search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText !== "") {
        github.getUser(userText)
            .then(gitHubUser => {
                if (gitHubUser.profile.message === "Not Found") {
                    ui.showAlert("User not found", "alert alert-danger");
                } else {
                    ui.showProfile(gitHubUser.profile);
                    ui.showRepos(gitHubUser.repositories)
                }
            })
    } else {
        ui.clearProfile();
    }
});