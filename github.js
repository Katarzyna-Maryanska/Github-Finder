class Github {
    constructor() {
        this.client_id = "b230ad57d59bda3c688d";
        this.client_sectret = "672caeda97d28472f55317912836a2176177e648";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_sectret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_sectret}`);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}

const github = new Github;