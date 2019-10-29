class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatarUrl}">
                        <a href="${user.url}" target="_blanc" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.publicRepositoriesCount}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.publicGistsCount}</span>
                        <span class="badge badge-success">Public Followers: ${user.followersCount}</span>
                        <span class="badge badge-info">Public Following: ${user.followingCount}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.companyName}</li>
                            <li class="list-group-item">Blog: ${user.blogUrl}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.createdAt}</li>
                        </ul>
                    </div>
                </div>
            </div>  
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }

    showRepos(repositories) {
        let output = "";

        repositories.forEach(function(repository) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repository.url}" target="_blank">${repository.name}</a> 
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repository.starsCount}</span>
                        <span class="badge badge-secondary">Watchers: ${repository.watchersCount}</span>
                        <span class="badge badge-success">Forks: ${repository.forksCount}</span>
                    </div>
                </div>
            </div>
            `
        });
        //Output repos
        document.getElementById("repos").innerHTML = output;
    }

    showAlert(message, className) {
        //Clear any remaining alerts
        this.clearAlert();

        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".searchContainer");
        const search = document.querySelector(".search");
        container.insertBefore(div, search);

        //Timeout after 3sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

}

const ui = new UI;