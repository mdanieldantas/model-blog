document.querySelector("#delete-form").addEventListener("submit", function (ev) {
const confirmation = confirm("Are you sure you want to delete this record?");
if (!confirmation) {
    ev.preventDefault();
}
});