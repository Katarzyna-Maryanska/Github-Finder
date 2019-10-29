class Github {
    constructor() {
        this.client_id = "b230ad57d59bda3c688d";
        this.client_sectret = "672caeda97d28472f55317912836a2176177e648";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_sectret}`);
        const profileData = await profileResponse.json();
        const profile = {
            avatarUrl: profileData.avatar_url,
            publicRepositoriesCount: profileData.public_repos,
            publicGistsCount: profileData.public_gists,
            followersCount: profileData.followers,
            followingCount: profileData.following,
            companyName: profileData.company,
            blogUrl: profileData.blog,
            location: profileData.location,
            createdAt: profileData.created_at
        };

        const repositoryResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_sectret}`);
        const repositoryData = await repositoryResponse.json();
        const repositories = repositoryData.map((data) => {
            return {
                url: data.html_url,
                name: data.name,
                watchersCount: data.watchers_count,
                starsCount: data.stargazers_count,
                forksCount: data.forks_count,
            }
        });

        return {
            profile,
            repositories
        }
    }
}

const github = new Github;