fetch("https://tryhackme.com/api/v2/public-profile?userPublicId=1145654")
.then(res => res.json())
.then(data => {
document.getElementById("thm-rank").innerText = data.data.rank;
document.getElementById("thm-rooms").innerText = data.data.completedRooms;
document.getElementById("thm-badges").innerText = data.data.badges;
});

fetch("https://api.github.com/users/eros5")
.then(res => res.json())
.then(data => {
document.getElementById("gh-repos").innerText = data.public_repos;
document.getElementById("gh-followers").innerText = data.followers;
});
