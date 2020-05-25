function setDefaultDifficulty() {
  localStorage.setItem(
    "difficulty",
    document.getElementById("selectedOption").value
  );
}

function handleChange() {
  localStorage.setItem(
    "difficulty",
    document.getElementById("selectedOption").value
  );
}
